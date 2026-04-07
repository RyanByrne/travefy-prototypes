import {
  Bold,
  ChevronDown,
  ChevronUp,
  Indent,
  Italic,
  Link,
  List,
  ListOrdered,
  Outdent,
  Quote,
  Redo,
  RemoveFormatting,
  Strikethrough,
  Type,
  Underline,
  Undo,
  X,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../../shared/components'
import { AudienceCriteriaBuilder, estimateMatchCount, makeConditionId, type Condition } from './AudienceCriteriaBuilder'
import { PersonalizationDropdown } from './PersonalizationTokens'

// ── Toolbar helpers ──────────────────────────────────────────────────────────

function ToolbarBtn({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="w-8 h-8 flex items-center justify-center rounded text-travefy-gray-500 hover:bg-travefy-gray-100 hover:text-travefy-gray-700 transition-colors"
    >
      {children}
    </button>
  )
}

function ToolbarDivider() {
  return <div className="w-px h-6 bg-travefy-gray-200 mx-0.5" />
}

function FontSizeControl() {
  const [size, setSize] = useState(16)
  return (
    <div className="flex items-center gap-0.5">
      <button
        onClick={() => setSize((s) => Math.max(8, s - 1))}
        className="w-6 h-8 flex items-center justify-center text-travefy-gray-500 hover:text-travefy-gray-700 transition-colors text-sm"
      >
        &minus;
      </button>
      <span className="w-7 text-center text-sm text-travefy-gray-700 font-medium tabular-nums">{size}</span>
      <button
        onClick={() => setSize((s) => Math.min(72, s + 1))}
        className="w-6 h-8 flex items-center justify-center text-travefy-gray-500 hover:text-travefy-gray-700 transition-colors text-sm"
      >
        +
      </button>
    </div>
  )
}

// ── Recipients accordion ─────────────────────────────────────────────────────

function RecipientsSection({
  conditions,
  onChange,
}: {
  conditions: Condition[]
  onChange: (c: Condition[]) => void
}) {
  const [open, setOpen] = useState(false)
  const matchCount = estimateMatchCount(conditions)

  return (
    <div className="border border-travefy-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-travefy-navy bg-travefy-gray-50 hover:bg-travefy-gray-100 transition-colors"
      >
        <span>Recipients · <span className="text-travefy-blue">{matchCount} contacts</span></span>
        {open ? <ChevronUp className="w-4 h-4 text-travefy-gray-400" /> : <ChevronDown className="w-4 h-4 text-travefy-gray-400" />}
      </button>
      {open && (
        <div className="p-4 border-t border-travefy-gray-200 bg-white">
          <AudienceCriteriaBuilder conditions={conditions} onChange={onChange} />
        </div>
      )}
    </div>
  )
}

// ── Main drawer component ────────────────────────────────────────────────────

export function CampaignDrawer({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [subjectLine, setSubjectLine] = useState('')
  const [conditions, setConditions] = useState<Condition[]>([
    { id: makeConditionId(), field: 'label', operator: 'is_any_of', values: [] },
  ])
  const [includeSignature, setIncludeSignature] = useState(true)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  // Lock body scroll
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Reset on close
  const handleClose = () => {
    setSubjectLine('')
    setConditions([{ id: makeConditionId(), field: 'label', operator: 'is_any_of', values: [] }])
    setSending(false)
    setSent(false)
    if (editorRef.current) editorRef.current.innerHTML = ''
    onClose()
  }

  const handleSend = () => {
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setTimeout(handleClose, 1500)
    }, 1500)
  }

  const handleSaveDraft = () => {
    handleClose()
  }

  const handleInsertToken = (token: string) => {
    const editor = editorRef.current
    if (!editor) return
    editor.focus()
    document.execCommand('insertText', false, token)
  }

  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-travefy-navy/30 backdrop-blur-[1px]"
        onClick={handleClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-2xl flex flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-travefy-gray-200 shrink-0">
          <h2 className="text-lg font-bold text-travefy-navy">New Campaign</h2>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded text-travefy-gray-400 hover:text-travefy-gray-700 hover:bg-travefy-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sent success */}
        {sent ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-travefy-success-bg flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-travefy-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="text-lg font-semibold text-travefy-navy">Campaign Sent!</p>
              <p className="text-sm text-travefy-gray-500 mt-1">Closing...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 space-y-4">
                {/* Subject line */}
                <div className="border border-travefy-gray-200 rounded-lg overflow-hidden">
                  <input
                    type="text"
                    placeholder="Subject line"
                    value={subjectLine}
                    onChange={(e) => setSubjectLine(e.target.value)}
                    className="w-full px-4 py-3 text-sm text-travefy-navy placeholder:text-travefy-gray-400 focus:outline-none"
                  />
                </div>

                {/* Recipients */}
                <RecipientsSection conditions={conditions} onChange={setConditions} />

                {/* Editor */}
                <div className="border border-travefy-gray-200 rounded-lg overflow-hidden flex flex-col">
                  {/* Editable area */}
                  <div
                    ref={editorRef}
                    contentEditable
                    suppressContentEditableWarning
                    className="px-4 py-4 text-sm text-travefy-gray-700 leading-relaxed focus:outline-none min-h-[280px]"
                    data-placeholder="Write message here..."
                    style={{ caretColor: '#2a79a6' }}
                  />

                  {/* Toolbar at bottom */}
                  <div className="border-t border-travefy-gray-200 bg-travefy-gray-50 px-3 py-2">
                    <div className="flex items-center gap-0.5 flex-wrap">
                      <ToolbarBtn onClick={() => document.execCommand('bold')}><Bold className="w-4 h-4" /></ToolbarBtn>
                      <ToolbarBtn onClick={() => document.execCommand('italic')}><Italic className="w-4 h-4" /></ToolbarBtn>
                      <ToolbarBtn onClick={() => document.execCommand('underline')}><Underline className="w-4 h-4" /></ToolbarBtn>
                      <ToolbarBtn onClick={() => document.execCommand('strikeThrough')}><Strikethrough className="w-4 h-4" /></ToolbarBtn>
                      <ToolbarBtn onClick={() => {
                        const url = prompt('Enter URL:')
                        if (url) document.execCommand('createLink', false, url)
                      }}><Link className="w-4 h-4" /></ToolbarBtn>

                      <ToolbarDivider />

                      <select
                        className="h-8 px-2 border border-travefy-gray-200 rounded text-sm text-travefy-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-travefy-blue/30"
                        onChange={(e) => document.execCommand('fontName', false, e.target.value)}
                        defaultValue="Arial"
                      >
                        <option>Arial</option>
                        <option>Helvetica</option>
                        <option>Georgia</option>
                        <option>Times New Roman</option>
                        <option>Verdana</option>
                      </select>

                      <FontSizeControl />

                      <ToolbarDivider />

                      <ToolbarBtn onClick={() => {
                        const color = prompt('Text color (hex):', '#ff0000')
                        if (color) document.execCommand('foreColor', false, color)
                      }}>
                        <div className="flex flex-col items-center">
                          <Type className="w-4 h-4" />
                          <div className="w-4 h-0.5 bg-red-500 -mt-0.5 rounded-full" />
                        </div>
                      </ToolbarBtn>
                      <ToolbarBtn onClick={() => {
                        const color = prompt('Highlight color (hex):', '#ffff00')
                        if (color) document.execCommand('hiliteColor', false, color)
                      }}>
                        <div className="flex flex-col items-center">
                          <Type className="w-4 h-4" />
                          <div className="w-4 h-0.5 bg-yellow-400 -mt-0.5 rounded-full" />
                        </div>
                      </ToolbarBtn>

                      <ToolbarDivider />

                      <ToolbarBtn onClick={() => document.execCommand('insertUnorderedList')}><List className="w-4 h-4" /></ToolbarBtn>
                      <ToolbarBtn onClick={() => document.execCommand('insertOrderedList')}><ListOrdered className="w-4 h-4" /></ToolbarBtn>
                      <ToolbarBtn onClick={() => document.execCommand('outdent')}><Outdent className="w-4 h-4" /></ToolbarBtn>
                      <ToolbarBtn onClick={() => document.execCommand('indent')}><Indent className="w-4 h-4" /></ToolbarBtn>

                      <ToolbarDivider />

                      <ToolbarBtn onClick={() => document.execCommand('formatBlock', false, 'blockquote')}><Quote className="w-4 h-4" /></ToolbarBtn>
                      <ToolbarBtn onClick={() => document.execCommand('removeFormat')}><RemoveFormatting className="w-4 h-4" /></ToolbarBtn>

                      <ToolbarDivider />

                      <ToolbarBtn onClick={() => document.execCommand('undo')}><Undo className="w-4 h-4" /></ToolbarBtn>
                      <ToolbarBtn onClick={() => document.execCommand('redo')}><Redo className="w-4 h-4" /></ToolbarBtn>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-travefy-gray-200 px-6 py-4 shrink-0">
              <div className="flex items-center gap-3">
                <Button onClick={handleSend} disabled={sending}>
                  {sending ? 'Sending...' : 'Send'}
                </Button>
                <Button variant="secondary" onClick={handleSaveDraft}>
                  Save as Draft
                </Button>
                <div className="flex-1" />
                <PersonalizationDropdown onInsert={handleInsertToken} />
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={includeSignature}
                    onChange={(e) => setIncludeSignature(e.target.checked)}
                    className="rounded border-travefy-gray-300 text-travefy-blue"
                  />
                  <span className="text-sm text-travefy-gray-600">Include email signature</span>
                </label>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
