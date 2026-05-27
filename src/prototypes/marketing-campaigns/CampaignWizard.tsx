import { clsx } from 'clsx'
import {
  AlignLeft,
  Bold,
  Calendar,
  Clock,
  Code,
  Image,
  Indent,
  Info,
  Italic,
  Link2,
  List,
  ListOrdered,
  Outdent,
  Paperclip,
  Quote,
  Redo,
  RemoveFormatting,
  Strikethrough,
  Type,
  Underline,
  Undo,
  User,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Toggle } from '../../shared/components'
import {
  FIELD_OPTIONS,
  OPERATOR_OPTIONS,
  SAMPLE_BCC,
  TOTAL_CONTACTS,
  VALUE_OPTIONS,
  type ConditionField,
  type ConditionOperator,
} from './data'

// ── Shared modal shell ──────────────────────────────────────────────────────────

function ModalShell({
  title,
  onClose,
  children,
  footer,
  maxWidth = 'max-w-2xl',
}: {
  title: string
  onClose: () => void
  children: React.ReactNode
  footer: React.ReactNode
  maxWidth?: string
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <>
      <div className="fixed inset-0 z-[60] bg-travefy-navy/40" onClick={onClose} />
      <div className="fixed inset-0 z-[61] flex items-start justify-center pt-16 px-4 pointer-events-none">
        <div className={clsx('bg-white rounded-lg shadow-2xl w-full flex flex-col max-h-[85vh] pointer-events-auto', maxWidth)}>
          <div className="flex items-center justify-between px-6 py-4 border-b border-travefy-gray-100 shrink-0">
            <h2 className="text-lg font-bold text-travefy-navy">{title}</h2>
            <button
              onClick={onClose}
              className="w-7 h-7 flex items-center justify-center rounded text-travefy-gray-400 hover:text-travefy-gray-700 hover:bg-travefy-gray-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-5">{children}</div>
          <div className="flex items-center justify-between px-6 py-4 border-t border-travefy-gray-100 shrink-0 bg-travefy-gray-50">
            {footer}
          </div>
        </div>
      </div>
    </>
  )
}

// ── Audience query builder ────────────────────────────────────────────────────

interface Condition {
  id: string
  field: ConditionField
  operator: ConditionOperator
  value: string
  join: 'And' | 'Or'
}

const newCondition = (): Condition => ({
  id: `c-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
  field: 'Label',
  operator: 'Is any of',
  value: '',
  join: 'And',
})

function recipientCount(conditions: Condition[]): number {
  const active = conditions.filter((c) => c.value)
  if (active.length === 0) return TOTAL_CONTACTS
  return Math.max(50, Math.round(TOTAL_CONTACTS / 2 ** active.length))
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-travefy-navy mb-1.5">{label}</label>
      {children}
    </div>
  )
}

function Selectbox({ value, onChange, options, placeholder }: { value: string; onChange: (v: string) => void; options: readonly string[]; placeholder?: string }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 border border-travefy-gray-200 rounded text-sm bg-white text-travefy-gray-700 focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  )
}

function AudienceStep({
  name,
  setName,
  conditions,
  setConditions,
  onCancel,
  onContinue,
}: {
  name: string
  setName: (v: string) => void
  conditions: Condition[]
  setConditions: (c: Condition[]) => void
  onCancel: () => void
  onContinue: () => void
}) {
  const count = recipientCount(conditions)

  const updateCondition = (id: string, patch: Partial<Condition>) =>
    setConditions(conditions.map((c) => (c.id === id ? { ...c, ...patch } : c)))

  const addCondition = (join: 'And' | 'Or') =>
    setConditions([...conditions, { ...newCondition(), join }])

  return (
    <ModalShell
      title="Marketing Campaign"
      onClose={onCancel}
      footer={
        <>
          <button onClick={onCancel} className="px-3 py-1.5 text-sm font-semibold text-travefy-blue hover:underline">Cancel</button>
          <button onClick={onContinue} className="px-5 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors">Continue</button>
        </>
      }
    >
      <div className="space-y-5">
        <Field label="Campaign Name (Internal)">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter campaign name"
            className="w-full px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
          />
        </Field>

        <div>
          <p className="text-sm font-bold text-travefy-navy">
            {conditions.length === 0
              ? `All Recipients (${TOTAL_CONTACTS.toLocaleString()} Contacts)`
              : `Recipients (${count.toLocaleString()} Contacts)`}
          </p>

          {conditions.length === 0 ? (
            <button
              onClick={() => addCondition('And')}
              className="mt-3 flex items-center gap-1.5 px-3 py-1.5 rounded border border-travefy-blue text-travefy-blue text-sm font-semibold hover:bg-travefy-blue-light transition-colors"
            >
              Add Condition
            </button>
          ) : (
            <div className="mt-3 space-y-3">
              {conditions.map((c, i) => (
                <div key={c.id}>
                  {i > 0 && (
                    <div className="mb-3">
                      <span className="inline-flex px-3 py-1 rounded bg-travefy-blue text-white text-xs font-semibold">{c.join}</span>
                    </div>
                  )}
                  <p className="text-sm font-semibold text-travefy-navy mb-1.5">Where</p>
                  <div className="grid grid-cols-2 gap-3">
                    <Selectbox
                      value={c.field}
                      onChange={(v) => updateCondition(c.id, { field: v as ConditionField, operator: OPERATOR_OPTIONS[v as ConditionField][0], value: '' })}
                      options={FIELD_OPTIONS}
                    />
                    <Selectbox
                      value={c.operator}
                      onChange={(v) => updateCondition(c.id, { operator: v as ConditionOperator })}
                      options={OPERATOR_OPTIONS[c.field]}
                    />
                  </div>
                  <div className="mt-3">
                    <Selectbox
                      value={c.value}
                      onChange={(v) => updateCondition(c.id, { value: v })}
                      options={VALUE_OPTIONS[c.field]}
                      placeholder="Select"
                    />
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-2">
                <button onClick={() => addCondition('And')} className="px-4 py-1.5 rounded border border-travefy-gray-200 text-travefy-blue text-sm font-semibold hover:bg-travefy-gray-50 transition-colors">And</button>
                <button onClick={() => addCondition('Or')} className="px-4 py-1.5 rounded border border-travefy-gray-200 text-travefy-blue text-sm font-semibold hover:bg-travefy-gray-50 transition-colors">Or</button>
              </div>
            </div>
          )}
        </div>

        <p className="text-xs italic text-travefy-gray-500">
          Note: Email marketing allows for a maximum of 300 emails per campaign.{' '}
          <a href="#" className="text-travefy-blue underline not-italic">Learn more</a> about limits and best practices.
        </p>
      </div>
    </ModalShell>
  )
}

// ── Compose step (Email Contacts) ──────────────────────────────────────────────

function ToolbarBtn({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
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
  return <div className="w-px h-5 bg-travefy-gray-200 mx-0.5" />
}

function ComposeStep({
  count,
  onCancel,
  onPreview,
  onContinue,
}: {
  count: number
  onCancel: () => void
  onPreview: () => void
  onContinue: () => void
}) {
  const [includeSignature, setIncludeSignature] = useState(true)
  const [includeUnsub] = useState(true)

  return (
    <ModalShell
      title="Email Contacts"
      onClose={onCancel}
      footer={
        <>
          <button onClick={onCancel} className="px-3 py-1.5 text-sm font-semibold text-travefy-blue hover:underline">Cancel</button>
          <div className="flex items-center gap-3">
            <button onClick={onPreview} className="px-4 py-2 rounded border border-travefy-blue text-travefy-blue text-sm font-semibold hover:bg-travefy-blue-light transition-colors">Preview Email</button>
            <button onClick={onContinue} className="px-5 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors">Continue</button>
          </div>
        </>
      }
    >
      <div className="space-y-4">
        <p className="text-sm text-travefy-gray-700">
          Compose an email to send to the <span className="font-bold text-travefy-navy">{count.toLocaleString()}</span> selected contacts.
        </p>

        <div className="flex items-baseline gap-3">
          <span className="text-sm font-semibold text-travefy-navy w-12 shrink-0">From:</span>
          <span className="text-sm text-travefy-gray-700">voyagecresttravel@gmail.com</span>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-sm font-semibold text-travefy-navy w-12 shrink-0 pt-1">Bcc:</span>
          <div className="flex flex-wrap gap-2">
            {SAMPLE_BCC.map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-travefy-blue-light text-travefy-blue text-xs font-medium">
                <User className="w-3 h-3" />
                {b}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-travefy-gray-100 text-travefy-gray-600 text-xs font-medium">
              <User className="w-3 h-3" />
              +{Math.max(0, count - SAMPLE_BCC.length)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-travefy-navy w-12 shrink-0">Subject:</span>
          <input
            type="text"
            placeholder="Email subject"
            className="flex-1 px-3 py-2 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
          />
        </div>

        {/* Editor */}
        <div className="border border-travefy-gray-200 rounded-lg overflow-hidden">
          <div
            contentEditable
            suppressContentEditableWarning
            data-placeholder="Write message here..."
            className="px-4 py-4 text-sm text-travefy-gray-700 leading-relaxed focus:outline-none min-h-[220px]"
            style={{ caretColor: '#2a79a6' }}
          />
          <div className="border-t border-travefy-gray-200 bg-travefy-gray-50 px-3 py-2 flex items-center gap-0.5 flex-wrap">
            <ToolbarBtn onClick={() => document.execCommand('bold')}><Bold className="w-4 h-4" /></ToolbarBtn>
            <ToolbarBtn onClick={() => document.execCommand('italic')}><Italic className="w-4 h-4" /></ToolbarBtn>
            <ToolbarBtn onClick={() => document.execCommand('underline')}><Underline className="w-4 h-4" /></ToolbarBtn>
            <ToolbarBtn onClick={() => document.execCommand('strikeThrough')}><Strikethrough className="w-4 h-4" /></ToolbarBtn>
            <ToolbarBtn onClick={() => { const u = prompt('Enter URL:'); if (u) document.execCommand('createLink', false, u) }}><Link2 className="w-4 h-4" /></ToolbarBtn>
            <ToolbarBtn><Type className="w-4 h-4" /></ToolbarBtn>
            <ToolbarBtn><AlignLeft className="w-4 h-4" /></ToolbarBtn>
            <ToolbarBtn><Image className="w-4 h-4" /></ToolbarBtn>
            <ToolbarBtn><Paperclip className="w-4 h-4" /></ToolbarBtn>
            <ToolbarDivider />
            <ToolbarBtn onClick={() => document.execCommand('insertUnorderedList')}><List className="w-4 h-4" /></ToolbarBtn>
            <ToolbarBtn onClick={() => document.execCommand('insertOrderedList')}><ListOrdered className="w-4 h-4" /></ToolbarBtn>
            <ToolbarBtn onClick={() => document.execCommand('outdent')}><Outdent className="w-4 h-4" /></ToolbarBtn>
            <ToolbarBtn onClick={() => document.execCommand('indent')}><Indent className="w-4 h-4" /></ToolbarBtn>
            <ToolbarBtn onClick={() => document.execCommand('formatBlock', false, 'blockquote')}><Quote className="w-4 h-4" /></ToolbarBtn>
            <ToolbarBtn onClick={() => document.execCommand('removeFormat')}><RemoveFormatting className="w-4 h-4" /></ToolbarBtn>
            <div className="flex-1" />
            <select className="h-8 px-2 border border-travefy-gray-200 rounded text-sm bg-white text-travefy-gray-700 focus:outline-none" defaultValue="Arial">
              <option>Arial</option><option>Helvetica</option><option>Georgia</option>
            </select>
            <span className="px-2 text-sm text-travefy-gray-600 tabular-nums">16</span>
            <ToolbarBtn onClick={() => document.execCommand('undo')}><Undo className="w-4 h-4" /></ToolbarBtn>
            <ToolbarBtn onClick={() => document.execCommand('redo')}><Redo className="w-4 h-4" /></ToolbarBtn>
            <ToolbarBtn><Code className="w-4 h-4" /></ToolbarBtn>
          </div>
        </div>

        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input type="checkbox" checked={includeSignature} onChange={(e) => setIncludeSignature(e.target.checked)} className="rounded border-travefy-gray-300 text-travefy-blue" />
          <span className="text-sm text-travefy-gray-700">Include email signature</span>
        </label>
        <label className="flex items-center gap-2 cursor-not-allowed select-none">
          <input type="checkbox" checked={includeUnsub} readOnly className="rounded border-travefy-gray-300 text-travefy-blue" />
          <span className="text-sm text-travefy-gray-700 flex items-center gap-1.5">
            Include Unsubscribe Link
            <Info className="w-3.5 h-3.5 text-travefy-gray-400" />
          </span>
        </label>
      </div>
    </ModalShell>
  )
}

// ── Sending Options step ────────────────────────────────────────────────────────

function SendingStep({
  count,
  onCancel,
  onSubmit,
}: {
  count: number
  onCancel: () => void
  onSubmit: (scheduled: boolean, date: string, time: string) => void
}) {
  const [schedule, setSchedule] = useState(false)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  return (
    <ModalShell
      title="Sending Options"
      onClose={onCancel}
      maxWidth="max-w-lg"
      footer={
        <>
          <button onClick={onCancel} className="px-3 py-1.5 text-sm font-semibold text-travefy-blue hover:underline">Cancel</button>
          <button
            onClick={() => onSubmit(schedule, date, time)}
            className="px-5 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors"
          >
            {schedule ? 'Schedule Campaign' : 'Send Now'}
          </button>
        </>
      }
    >
      <div className="space-y-4">
        {schedule ? (
          <p className="text-sm text-travefy-gray-700">
            Send campaign to <span className="font-bold text-travefy-navy">{count.toLocaleString()}</span> selected contacts.
          </p>
        ) : (
          <>
            <p className="text-sm text-travefy-gray-700">
              Campaign will be sent to <span className="font-bold text-travefy-navy">{count.toLocaleString()}</span> selected contacts.
            </p>
            <p className="text-xs italic text-travefy-gray-500">
              Note: Emails will be sent .{' '}
              <a href="#" className="text-travefy-blue underline not-italic">Learn more</a> about limits and best practices.
            </p>
          </>
        )}

        <Toggle label="Schedule Campaign" checked={schedule} onChange={(e) => setSchedule(e.target.checked)} />

        {schedule && (
          <div className="space-y-4">
            <Field label="Select Date">
              <div className="relative">
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Select a date"
                  className="w-full px-3 py-2.5 pr-10 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-travefy-blue" />
              </div>
            </Field>
            <Field label="Select Time">
              <div className="relative">
                <input
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="Select time"
                  className="w-full px-3 py-2.5 pr-10 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
                />
                <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-travefy-blue" />
              </div>
            </Field>
          </div>
        )}
      </div>
    </ModalShell>
  )
}

// ── Confirm launch dialog ───────────────────────────────────────────────────────

function ConfirmDialog({ count, onCancel, onConfirm }: { count: number; onCancel: () => void; onConfirm: () => void }) {
  return (
    <>
      <div className="fixed inset-0 z-[62] bg-travefy-navy/40" onClick={onCancel} />
      <div className="fixed inset-0 z-[63] flex items-start justify-center pt-24 px-4 pointer-events-none">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg pointer-events-auto flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-travefy-gray-100">
            <h2 className="text-lg font-bold text-travefy-navy">Confirm Campaign Launch</h2>
            <button onClick={onCancel} className="w-7 h-7 flex items-center justify-center rounded text-travefy-gray-400 hover:text-travefy-gray-700 hover:bg-travefy-gray-100 transition-colors" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="px-6 py-5">
            <p className="text-sm text-travefy-gray-700 leading-relaxed">
              You are about to launch this campaign to <span className="font-bold text-travefy-navy">{count.toLocaleString()} contacts</span>. Are you sure you want to continue?
            </p>
          </div>
          <div className="flex items-center justify-between px-6 py-4 border-t border-travefy-gray-100 bg-travefy-gray-50">
            <button onClick={onCancel} className="px-3 py-1.5 text-sm font-semibold text-travefy-blue hover:underline">Cancel</button>
            <button onClick={onConfirm} className="px-5 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors">Yes, Continue</button>
          </div>
        </div>
      </div>
    </>
  )
}

// ── Wizard orchestrator ───────────────────────────────────────────────────────

export interface LaunchResult {
  name: string
  recipients: number
  scheduled: boolean
  scheduledFor?: string
}

type Step = 'audience' | 'compose' | 'sending' | 'confirm'

export function CampaignWizard({
  open,
  onClose,
  onLaunch,
  onToast,
}: {
  open: boolean
  onClose: () => void
  onLaunch: (result: LaunchResult) => void
  onToast?: (text: string) => void
}) {
  const [step, setStep] = useState<Step>('audience')
  const [name, setName] = useState('')
  const [conditions, setConditions] = useState<Condition[]>([])
  const [scheduled, setScheduled] = useState(false)
  const [scheduledFor, setScheduledFor] = useState<string | undefined>(undefined)

  // Reset whenever the wizard is (re)opened
  useEffect(() => {
    if (open) {
      setStep('audience')
      setName('')
      setConditions([])
      setScheduled(false)
      setScheduledFor(undefined)
    }
  }, [open])

  if (!open) return null

  const count = recipientCount(conditions)

  return (
    <>
      {step === 'audience' && (
        <AudienceStep
          name={name}
          setName={setName}
          conditions={conditions}
          setConditions={setConditions}
          onCancel={onClose}
          onContinue={() => setStep('compose')}
        />
      )}
      {step === 'compose' && (
        <ComposeStep
          count={count}
          onCancel={onClose}
          onPreview={() => onToast?.('Email preview (mocked)')}
          onContinue={() => setStep('sending')}
        />
      )}
      {step === 'sending' && (
        <SendingStep
          count={count}
          onCancel={onClose}
          onSubmit={(isScheduled, date) => {
            setScheduled(isScheduled)
            setScheduledFor(isScheduled ? (date || 'TBD') : undefined)
            setStep('confirm')
          }}
        />
      )}
      {step === 'confirm' && (
        <ConfirmDialog
          count={count}
          onCancel={() => setStep('sending')}
          onConfirm={() => {
            onLaunch({ name: name || 'Untitled Campaign', recipients: count, scheduled, scheduledFor })
            onClose()
          }}
        />
      )}
    </>
  )
}
