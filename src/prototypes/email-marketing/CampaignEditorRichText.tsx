import { clsx } from 'clsx'
import {
  Bold,
  Calendar,
  ChevronDown,
  ChevronUp,
  Columns2,
  FileImage,
  Footprints,
  Heading1,
  Heading2,
  Image,
  Indent,
  Italic,
  Link,
  List,
  ListOrdered,
  Minus,
  Outdent,
  Paintbrush,
  Paperclip,
  Pilcrow,
  Quote,
  Redo,
  RemoveFormatting,
  Send,
  Share2,
  Space,
  Square,
  Strikethrough,
  Type,
  Underline,
  Undo,
  Video,
} from 'lucide-react'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Modal, Select } from '../../shared/components'
import { AudienceCriteriaBuilder, estimateMatchCount, makeConditionId, type Condition } from './AudienceCriteriaBuilder'
import { EmailPreviewModal } from './EmailPreviewModal'
import { PersonalizationDropdown } from './PersonalizationTokens'
import { CampaignSuccessScreen, ConfirmSendModal, ScheduleModal, SendTestModal } from './SendScheduleFlows'

// ── RTE Templates ────────────────────────────────────────────────────────────

const btn = (label: string) => `<div style="text-align:center;padding:20px 0"><a href="#" style="display:inline-block;padding:12px 32px;background:#2a79a6;color:white;font-weight:600;font-size:14px;border-radius:6px;text-decoration:none">${label}</a></div>`
const footer = (text: string) => `<div style="text-align:center;padding:20px 0;border-top:1px solid #f3f4f6;margin-top:24px"><p style="font-size:12px;color:#9ca3af;margin:0">${text}</p><p style="font-size:12px;margin:8px 0 0"><a href="#" style="color:#2a79a6;text-decoration:none">Unsubscribe</a> · <a href="#" style="color:#2a79a6;text-decoration:none">Manage preferences</a></p></div>`
const hr = `<hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0" />`
const logo = `<div style="text-align:center;padding:12px 0"><div style="display:inline-block;height:40px;width:140px;background:#e5e7eb;border-radius:4px;line-height:40px;font-size:11px;font-weight:700;color:#6b7280;letter-spacing:1px">YOUR LOGO</div></div>`
const imgPlaceholder = `<div style="text-align:center;padding:16px 0"><div style="max-width:100%;height:180px;background:linear-gradient(135deg,#f3f4f6,#e5e7eb);border-radius:8px;display:flex;align-items:center;justify-content:center"><span style="font-size:12px;color:#9ca3af;font-weight:500">Hero Image</span></div></div>`

const RTE_TEMPLATES: Record<string, string> = {
  classic: [
    logo,
    imgPlaceholder,
    `<h2 style="font-size:20px;font-weight:600;color:#223e47;margin:16px 0 8px">Discover Incredible Destinations</h2>`,
    `<p style="font-size:14px;line-height:1.6;color:#4b5563;margin:8px 0">We've handpicked a selection of our most popular destinations for 2026. From the sun-drenched coasts of the Mediterranean to the vibrant cities of Southeast Asia, your perfect trip is waiting.</p>`,
    btn('Browse All Destinations'),
    footer("You're receiving this email because you're a valued Travefy contact."),
  ].join('\n'),

  hero: [
    `<h1 style="font-size:28px;font-weight:700;color:#223e47;text-align:center;margin:16px 0 8px">Escape to Paradise. Book Your Dream Trip.</h1>`,
    `<p style="font-size:14px;line-height:1.6;color:#4b5563;text-align:center;margin:8px 0">Limited-time offers on handpicked destinations. Don't miss out.</p>`,
    btn('Explore Deals →'),
    hr,
    `<p style="font-size:14px;line-height:1.6;color:#4b5563;margin:8px 0">Ready for a change of scenery? Browse our curated deals and find your next great adventure. Limited spots available — claim yours today.</p>`,
    footer('© 2026 Travefy'),
  ].join('\n'),

  newsletter: [
    `<div style="text-align:left;padding:12px 0"><div style="display:inline-block;height:40px;width:140px;background:#e5e7eb;border-radius:4px;line-height:40px;font-size:11px;font-weight:700;color:#6b7280;letter-spacing:1px">YOUR LOGO</div></div>`,
    `<h1 style="font-size:28px;font-weight:700;color:#223e47;margin:16px 0 8px">The Travefy Compass</h1>`,
    imgPlaceholder,
    `<h2 style="font-size:20px;font-weight:600;color:#223e47;margin:16px 0 8px">The Rise of Slow Travel: Why More Agents Are Booking Month-Long Stays</h2>`,
    `<p style="font-size:14px;line-height:1.6;color:#4b5563;margin:8px 0">Travelers are increasingly opting for immersive, extended stays over fast-paced itineraries. Here's how to position your agency for this growing trend.</p>`,
    `<p style="margin:8px 0"><a href="#" style="color:#2a79a6;text-decoration:underline;font-size:14px">Read full article →</a></p>`,
    hr,
    btn('Schedule a Demo'),
    footer('© 2026 Travefy Inc.'),
  ].join('\n'),

  minimal: [
    `<div style="text-align:left;padding:12px 0"><div style="display:inline-block;height:40px;width:140px;background:#e5e7eb;border-radius:4px;line-height:40px;font-size:11px;font-weight:700;color:#6b7280;letter-spacing:1px">YOUR LOGO</div></div>`,
    `<h1 style="font-size:28px;font-weight:700;color:#223e47;margin:16px 0 8px">A quick note from the Travefy team</h1>`,
    `<p style="font-size:14px;line-height:1.6;color:#4b5563;margin:8px 0">Hi {{first_name}},</p>`,
    `<p style="font-size:14px;line-height:1.6;color:#4b5563;margin:8px 0">We wanted to reach out personally to let you know about some exciting updates to your Travefy account. This month, we've launched new features designed to help you close more bookings and delight your clients.</p>`,
    `<p style="font-size:14px;line-height:1.6;color:#4b5563;margin:8px 0">Whether you're managing a full itinerary or just starting out, these tools are built for you.</p>`,
    `<div style="padding:20px 0"><a href="#" style="display:inline-block;padding:12px 32px;border:2px solid #2a79a6;color:#2a79a6;font-weight:600;font-size:14px;border-radius:6px;text-decoration:none">See What's New</a></div>`,
    `<p style="font-size:14px;line-height:1.6;color:#4b5563;margin:8px 0">Warm regards,<br/>The Travefy Team</p>`,
    footer('© 2026 Travefy'),
  ].join('\n'),

  promotional: [
    `<h3 style="font-size:16px;font-weight:600;color:#223e47;text-align:center;margin:16px 0 4px">Limited Time Offer — Ends Sunday</h3>`,
    `<h1 style="font-size:28px;font-weight:700;color:#223e47;text-align:center;margin:4px 0 8px">30% OFF Your Next Booking</h1>`,
    `<p style="font-size:14px;line-height:1.6;color:#4b5563;text-align:center;margin:8px 0">Use code <strong>TRAVEL30</strong> at checkout. Valid on bookings over $1,000. Expires March 31, 2026.</p>`,
    btn('Claim Your Discount'),
    hr,
    `<h3 style="font-size:16px;font-weight:600;color:#223e47;margin:16px 0 8px">Top Deals This Week</h3>`,
    `<p style="font-size:14px;line-height:1.6;color:#4b5563;margin:8px 0">Bali, Indonesia — $1,299 (was $1,849) · 7 nights<br/>Santorini, Greece — $1,599 (was $2,299) · 6 nights<br/>Cancún, Mexico — $899 (was $1,299) · 5 nights</p>`,
    footer('© 2026 Travefy. *Terms apply.'),
  ].join('\n'),

  announcement: [
    `<h1 style="font-size:28px;font-weight:700;color:#223e47;text-align:center;margin:16px 0 8px">Exciting News!</h1>`,
    `<h2 style="font-size:20px;font-weight:600;color:#223e47;text-align:center;margin:8px 0">We're launching something new</h2>`,
    `<p style="font-size:14px;line-height:1.6;color:#4b5563;margin:8px 0">After months of development, we're thrilled to announce a major update to Travefy that will transform how you manage and sell travel experiences.</p>`,
    btn('Learn More'),
    hr,
    `<p style="font-size:14px;line-height:1.6;color:#4b5563;margin:8px 0">Questions? Reply to this email or reach out to support@travefy.com</p>`,
    footer('© 2026 Travefy'),
  ].join('\n'),
}

// ── Toolbar button ───────────────────────────────────────────────────────────

function ToolbarBtn({
  children,
  active = false,
  onClick,
}: {
  children: React.ReactNode
  active?: boolean
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-8 h-8 flex items-center justify-center rounded transition-colors',
        active
          ? 'bg-travefy-blue/10 text-travefy-blue'
          : 'text-travefy-gray-500 hover:bg-travefy-gray-100 hover:text-travefy-gray-700',
      )}
    >
      {children}
    </button>
  )
}

function ToolbarDivider() {
  return <div className="w-px h-6 bg-travefy-gray-200 mx-1" />
}

// ── Font size control ────────────────────────────────────────────────────────

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

// ── Insert Element dropdown ──────────────────────────────────────────────────

const INSERT_ELEMENTS = [
  // — Text —
  {
    label: 'Heading',
    icon: Heading1,
    html: `<h1 style="font-size:28px;font-weight:700;color:#223e47;margin:16px 0 8px">Heading text</h1>`,
  },
  {
    label: 'Subheading',
    icon: Heading2,
    html: `<h2 style="font-size:20px;font-weight:600;color:#223e47;margin:12px 0 6px">Subheading text</h2>`,
  },
  {
    label: 'Paragraph',
    icon: Pilcrow,
    html: `<p style="font-size:14px;line-height:1.6;color:#4b5563;margin:8px 0">Start writing your content here...</p>`,
  },
  // — Media —
  {
    label: 'Image',
    icon: Image,
    isImageInsert: true,
    html: `<div style="text-align:center;padding:16px 0" contenteditable="false"><div style="max-width:100%;height:180px;background:linear-gradient(135deg,#f3f4f6,#e5e7eb);border-radius:8px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px;margin:0 auto"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg><span style="font-size:12px;color:#9ca3af;font-weight:500">Image placeholder</span></div></div><p><br/></p>`,
  },
  {
    label: 'Logo',
    icon: FileImage,
    html: `<div style="text-align:center;padding:12px 0"><div style="display:inline-block;height:40px;width:140px;background:#e5e7eb;border-radius:4px;line-height:40px;font-size:11px;font-weight:700;color:#6b7280;letter-spacing:1px">YOUR LOGO</div></div>`,
  },
  {
    label: 'Video',
    icon: Video,
    html: `<div style="text-align:center;padding:16px 0" contenteditable="false"><div style="max-width:100%;height:200px;background:#111827;border-radius:8px;display:flex;align-items:center;justify-content:center;position:relative"><div style="width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,0.25);display:flex;align-items:center;justify-content:center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg></div></div></div><p><br/></p>`,
  },
  // — Layout —
  {
    label: 'Button',
    icon: Square,
    html: `<div style="text-align:center;padding:20px 0"><a href="#" style="display:inline-block;padding:12px 32px;background:#2a79a6;color:white;font-weight:600;font-size:14px;border-radius:6px;text-decoration:none">Click Here</a></div>`,
  },
  {
    label: 'Link',
    icon: Link,
    html: `<p style="margin:8px 0"><a href="#" style="color:#2a79a6;text-decoration:underline;font-size:14px">Click here to learn more →</a></p>`,
  },
  {
    label: 'Divider',
    icon: Minus,
    html: `<hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0" />`,
  },
  {
    label: 'Spacer',
    icon: Space,
    html: `<div style="height:40px" contenteditable="false"></div>`,
  },
  {
    label: 'Blockquote',
    icon: Quote,
    html: `<blockquote style="border-left:4px solid #2a79a6;padding:8px 16px;margin:16px 0;font-style:italic;color:#4b5563;font-size:14px;line-height:1.6">"Add your quote or testimonial text here."</blockquote>`,
  },
  {
    label: 'Two Column',
    icon: Columns2,
    html: `<table width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0"><tr><td width="50%" valign="top" style="padding-right:12px"><p style="font-size:14px;color:#4b5563;margin:0">Left column content...</p></td><td width="50%" valign="top" style="padding-left:12px"><p style="font-size:14px;color:#4b5563;margin:0">Right column content...</p></td></tr></table>`,
  },
  // — Email-specific —
  {
    label: 'Social Links',
    icon: Share2,
    html: `<div style="text-align:center;padding:16px 0"><span style="display:inline-block;width:36px;height:36px;border-radius:50%;background:#e5e7eb;line-height:36px;text-align:center;font-size:12px;font-weight:700;color:#6b7280;margin:0 4px">F</span><span style="display:inline-block;width:36px;height:36px;border-radius:50%;background:#e5e7eb;line-height:36px;text-align:center;font-size:12px;font-weight:700;color:#6b7280;margin:0 4px">X</span><span style="display:inline-block;width:36px;height:36px;border-radius:50%;background:#e5e7eb;line-height:36px;text-align:center;font-size:12px;font-weight:700;color:#6b7280;margin:0 4px">ig</span><span style="display:inline-block;width:36px;height:36px;border-radius:50%;background:#e5e7eb;line-height:36px;text-align:center;font-size:12px;font-weight:700;color:#6b7280;margin:0 4px">in</span></div>`,
  },
  {
    label: 'Footer',
    icon: Footprints,
    html: `<div style="text-align:center;padding:20px 0;border-top:1px solid #f3f4f6;margin-top:24px"><p style="font-size:12px;color:#9ca3af;margin:0">You're receiving this because you're a valued subscriber.</p><p style="font-size:12px;margin:8px 0 0"><a href="#" style="color:#2a79a6;text-decoration:none">Unsubscribe</a> · <a href="#" style="color:#2a79a6;text-decoration:none">Manage preferences</a></p></div>`,
  },
] as const

function InsertElementDropdown({ editorRef }: { editorRef: React.RefObject<HTMLDivElement | null> }) {
  const [open, setOpen] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const [imageTab, setImageTab] = useState<'url' | 'upload'>('upload')
  const [imageUrl, setImageUrl] = useState('')
  const [imageAlt, setImageAlt] = useState('')
  const [imagePreviewError, setImagePreviewError] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<{ name: string; dataUrl: string } | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const ref = useRef<HTMLDivElement>(null)

  const insertElement = (html: string) => {
    const editor = editorRef.current
    if (!editor) return

    editor.focus()
    const sel = window.getSelection()
    if (sel && sel.rangeCount > 0) {
      const range = sel.getRangeAt(0)
      if (editor.contains(range.commonAncestorContainer)) {
        range.collapse(false)
        const fragment = range.createContextualFragment(html)
        range.insertNode(fragment)
        range.collapse(false)
        sel.removeAllRanges()
        sel.addRange(range)
      } else {
        editor.insertAdjacentHTML('beforeend', html)
      }
    } else {
      editor.insertAdjacentHTML('beforeend', html)
    }
  }

  const resolvedSrc = imageTab === 'upload' ? uploadedFile?.dataUrl : imageUrl.trim()
  const hasImage = !!resolvedSrc

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = () => {
      setUploadedFile({ name: file.name, dataUrl: reader.result as string })
      setImagePreviewError(false)
    }
    reader.readAsDataURL(file)
  }

  const handleInsertImage = () => {
    const src = resolvedSrc
    if (src) {
      const alt = imageAlt.trim() || 'Image'
      insertElement(`<div style="text-align:center;padding:16px 0"><img src="${src}" alt="${alt}" style="max-width:100%;border-radius:8px" /></div><p><br/></p>`)
    } else {
      const placeholderHtml = INSERT_ELEMENTS.find((e) => e.label === 'Image')?.html
      if (placeholderHtml) insertElement(placeholderHtml)
    }
    handleCloseImageModal()
  }

  const handleCloseImageModal = () => {
    setShowImageModal(false)
    setImageUrl('')
    setImageAlt('')
    setImagePreviewError(false)
    setUploadedFile(null)
    setImageTab('upload')
    setIsDragging(false)
  }

  return (
    <>
      <div className="relative" ref={ref}>
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 px-4 py-2 bg-travefy-blue text-white text-sm font-semibold rounded hover:bg-travefy-blue-dark transition-colors"
        >
          Insert Element
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {open && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
            <div className="absolute right-0 top-10 z-20 bg-white border border-travefy-gray-200 rounded-lg shadow-lg w-52 text-sm max-h-[70vh] overflow-y-auto">
              {[
                { title: 'Text', from: 0, to: 3 },
                { title: 'Media', from: 3, to: 6 },
                { title: 'Layout', from: 6, to: 12 },
                { title: 'Email', from: 12, to: INSERT_ELEMENTS.length },
              ].map(({ title, from, to }) => (
                <div key={title}>
                  <p className="px-3 pt-2.5 pb-1 text-[10px] font-semibold text-travefy-gray-400 uppercase tracking-wider">{title}</p>
                  {INSERT_ELEMENTS.slice(from, to).map((el) => (
                    <button
                      key={el.label}
                      onClick={() => {
                        if ('isImageInsert' in el && el.isImageInsert) { setShowImageModal(true) } else { insertElement(el.html) }
                        setOpen(false)
                      }}
                      className="w-full px-3 py-2 text-left hover:bg-travefy-gray-50 text-travefy-gray-700 flex items-center gap-2"
                    >
                      <el.icon className="w-4 h-4 text-travefy-gray-400" />
                      {el.label}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <Modal
        open={showImageModal}
        onClose={handleCloseImageModal}
        title="Insert Image"
        size="sm"
        footer={
          <>
            <Button variant="link" onClick={handleCloseImageModal}>Cancel</Button>
            <Button onClick={handleInsertImage}>
              {hasImage ? 'Insert Image' : 'Insert Placeholder'}
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          {/* Tab toggle */}
          <div className="flex border border-travefy-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setImageTab('upload')}
              className={clsx(
                'flex-1 py-2 text-sm font-semibold transition-colors',
                imageTab === 'upload' ? 'bg-travefy-blue text-white' : 'text-travefy-gray-600 hover:bg-travefy-gray-50',
              )}
            >
              Upload
            </button>
            <button
              onClick={() => setImageTab('url')}
              className={clsx(
                'flex-1 py-2 text-sm font-semibold transition-colors',
                imageTab === 'url' ? 'bg-travefy-blue text-white' : 'text-travefy-gray-600 hover:bg-travefy-gray-50',
              )}
            >
              From URL
            </button>
          </div>

          {imageTab === 'upload' && (
            <>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) handleFileSelect(file)
                }}
              />
              {!uploadedFile ? (
                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={(e) => {
                    e.preventDefault()
                    setIsDragging(false)
                    const file = e.dataTransfer.files?.[0]
                    if (file) handleFileSelect(file)
                  }}
                  onClick={() => fileInputRef.current?.click()}
                  className={clsx(
                    'border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors',
                    isDragging
                      ? 'border-travefy-blue bg-travefy-blue-light'
                      : 'border-travefy-gray-300 hover:border-travefy-blue hover:bg-travefy-gray-50',
                  )}
                >
                  <Image className={clsx('w-10 h-10 mx-auto mb-3', isDragging ? 'text-travefy-blue' : 'text-travefy-gray-300')} />
                  <p className={clsx('text-sm font-semibold', isDragging ? 'text-travefy-blue' : 'text-travefy-gray-600')}>
                    {isDragging ? 'Drop image here' : 'Click to upload or drag & drop'}
                  </p>
                  <p className="text-xs text-travefy-gray-400 mt-1">PNG, JPG, GIF, SVG up to 10MB</p>
                </div>
              ) : (
                <div className="border border-travefy-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-travefy-gray-50 p-3 text-center">
                    <img
                      src={uploadedFile.dataUrl}
                      alt={imageAlt || 'Uploaded'}
                      className="max-w-full max-h-48 rounded mx-auto"
                    />
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 border-t border-travefy-gray-100">
                    <span className="text-xs text-travefy-gray-500 truncate">{uploadedFile.name}</span>
                    <button
                      onClick={() => { setUploadedFile(null); if (fileInputRef.current) fileInputRef.current.value = '' }}
                      className="text-xs font-semibold text-travefy-danger hover:underline shrink-0 ml-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {imageTab === 'url' && (
            <>
              <Input
                label="Image URL"
                type="url"
                placeholder="https://example.com/image.jpg"
                value={imageUrl}
                onChange={(e) => { setImageUrl(e.target.value); setImagePreviewError(false) }}
                leadingIcon={<Image className="w-4 h-4" />}
              />
              {/* URL Preview */}
              <div>
                <p className="text-xs font-semibold text-travefy-gray-600 mb-2">Preview</p>
                {imageUrl.trim() && !imagePreviewError ? (
                  <div className="border border-travefy-gray-200 rounded-lg overflow-hidden bg-travefy-gray-50 p-3 text-center">
                    <img
                      src={imageUrl.trim()}
                      alt={imageAlt || 'Preview'}
                      onError={() => setImagePreviewError(true)}
                      className="max-w-full max-h-48 rounded mx-auto"
                    />
                  </div>
                ) : imagePreviewError ? (
                  <div className="border border-travefy-danger-border rounded-lg bg-travefy-danger-bg p-4 text-center">
                    <p className="text-sm text-travefy-danger">Could not load image from this URL</p>
                  </div>
                ) : (
                  <div className="border border-travefy-gray-200 rounded-lg bg-travefy-gray-50 p-6 text-center">
                    <Image className="w-8 h-8 text-travefy-gray-300 mx-auto mb-1" />
                    <p className="text-xs text-travefy-gray-400">Paste a URL above to preview</p>
                  </div>
                )}
              </div>
            </>
          )}

          <Input
            label="Alt Text"
            placeholder="Describe the image"
            value={imageAlt}
            onChange={(e) => setImageAlt(e.target.value)}
          />
        </div>
      </Modal>
    </>
  )
}

// ── Launch options dropdown ──────────────────────────────────────────────────

function LaunchDropdown({
  onSendNow,
  onSchedule,
  onSendTest,
}: {
  onSendNow: () => void
  onSchedule: () => void
  onSendTest: () => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-4 py-2 bg-travefy-blue text-white text-sm font-semibold rounded hover:bg-travefy-blue-dark transition-colors"
      >
        Launch Options
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 bottom-10 z-20 bg-white border border-travefy-gray-200 rounded-lg shadow-lg py-1 w-48 text-sm">
            <button
              onClick={() => { onSendNow(); setOpen(false) }}
              className="w-full px-4 py-2.5 text-left hover:bg-travefy-gray-50 text-travefy-gray-700 flex items-center gap-2"
            >
              <Send className="w-4 h-4 text-travefy-blue" /> Send Now
            </button>
            <button
              onClick={() => { onSchedule(); setOpen(false) }}
              className="w-full px-4 py-2.5 text-left hover:bg-travefy-gray-50 text-travefy-gray-700 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-travefy-blue" /> Schedule for Later
            </button>
            <div className="border-t border-travefy-gray-100 my-1" />
            <button
              onClick={() => { onSendTest(); setOpen(false) }}
              className="w-full px-4 py-2.5 text-left hover:bg-travefy-gray-50 text-travefy-gray-700 flex items-center gap-2"
            >
              Send Test Email
            </button>
            <button
              onClick={() => setOpen(false)}
              className="w-full px-4 py-2.5 text-left hover:bg-travefy-gray-50 text-travefy-gray-500 flex items-center gap-2"
            >
              Save as Draft
            </button>
          </div>
        </>
      )}
    </div>
  )
}

// ── Main component ───────────────────────────────────────────────────────────

export function CampaignEditorRichText() {
  const navigate = useNavigate()
  const editorRef = useRef<HTMLDivElement>(null)
  const [campaignName, setCampaignName] = useState('')
  const [subjectLine, setSubjectLine] = useState('')
  const [conditions, setConditions] = useState<Condition[]>([
    { id: makeConditionId(), field: 'label', operator: 'is_any_of', values: [] },
  ])
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [showSendModal, setShowSendModal] = useState(false)
  const [showScheduleModal, setShowScheduleModal] = useState(false)
  const [showTestModal, setShowTestModal] = useState(false)
  const [showPreviewModal, setShowPreviewModal] = useState(false)
  const [completedAction, setCompletedAction] = useState<'sent' | 'scheduled' | null>(null)

  const recipientCount = estimateMatchCount(conditions)

  const campaignMeta = {
    campaignName,
    subjectLine,
    recipientCount,
    hasConditions: conditions.some((c) => c.values.length > 0),
  }

  const handleInsertToken = (token: string) => {
    const editor = editorRef.current
    if (!editor) return
    editor.focus()
    document.execCommand('insertText', false, token)
  }

  const getEditorHtml = () => editorRef.current?.innerHTML ?? ''

  const handleSendConfirmed = () => {
    setShowSendModal(false)
    setCompletedAction('sent')
    setTimeout(() => navigate('/email-marketing/campaigns'), 3000)
  }

  const handleScheduleConfirmed = () => {
    setShowScheduleModal(false)
    setCompletedAction('scheduled')
    setTimeout(() => navigate('/email-marketing/campaigns'), 3000)
  }

  if (completedAction) {
    return (
      <CampaignSuccessScreen
        type={completedAction}
        recipientCount={recipientCount}
      />
    )
  }

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Left sidebar — Campaign Settings */}
        <aside className="w-[420px] shrink-0 bg-white border-r border-travefy-gray-200 flex flex-col overflow-y-auto p-6">
          <h2 className="text-lg font-bold text-travefy-navy mb-6">Campaign Settings</h2>

          <div className="space-y-5">
            <Input
              label="Campaign Name (Internal)"
              placeholder="Enter campaign name"
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
            />
            <Input
              label="Subject Line"
              placeholder="Enter email subject"
              value={subjectLine}
              onChange={(e) => setSubjectLine(e.target.value)}
            />
            <AudienceCriteriaBuilder
              conditions={conditions}
              onChange={setConditions}
            />
            <Select
              label="Load Template"
              value={selectedTemplate}
              onChange={(e) => {
                const key = e.target.value
                setSelectedTemplate(key)
                if (key && RTE_TEMPLATES[key] && editorRef.current) {
                  editorRef.current.innerHTML = RTE_TEMPLATES[key]
                }
              }}
            >
              <option value="">Choose a template…</option>
              <option value="classic">Classic — Header + Body + Footer</option>
              <option value="hero">Hero — Full-width focus</option>
              <option value="newsletter">Newsletter — Multi-article</option>
              <option value="minimal">Minimal — Clean text-only</option>
              <option value="promotional">Promotional — Deal / discount</option>
              <option value="announcement">Announcement — Product launch</option>
            </Select>
          </div>
        </aside>

        {/* Main — Email Editor */}
        <main className="flex-1 flex flex-col min-h-0 overflow-hidden bg-travefy-gray-50">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-travefy-gray-200">
            <h2 className="text-lg font-bold text-travefy-navy">Email Editor</h2>
            <div className="flex items-center gap-2">
              <PersonalizationDropdown onInsert={handleInsertToken} />
              <InsertElementDropdown editorRef={editorRef} />
            </div>
          </div>

          {/* Editor area */}
          <div className="flex-1 overflow-auto p-6">
            <div className="bg-white border border-travefy-gray-200 rounded-lg flex flex-col min-h-full">
              {/* Toolbar */}
              <div className="flex items-center gap-0.5 px-3 py-2 border-b border-travefy-gray-200 flex-wrap">
                <ToolbarBtn onClick={() => document.execCommand('bold')}><Bold className="w-4 h-4" /></ToolbarBtn>
                <ToolbarBtn onClick={() => document.execCommand('italic')}><Italic className="w-4 h-4" /></ToolbarBtn>
                <ToolbarBtn onClick={() => document.execCommand('underline')}><Underline className="w-4 h-4" /></ToolbarBtn>
                <ToolbarBtn onClick={() => document.execCommand('strikeThrough')}><Strikethrough className="w-4 h-4" /></ToolbarBtn>
                <ToolbarBtn onClick={() => {
                  const url = prompt('Enter URL:')
                  if (url) document.execCommand('createLink', false, url)
                }}><Link className="w-4 h-4" /></ToolbarBtn>

                <ToolbarDivider />

                {/* Font family */}
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

                {/* Text color */}
                <ToolbarBtn onClick={() => {
                  const color = prompt('Text color (hex):', '#ff0000')
                  if (color) document.execCommand('foreColor', false, color)
                }}>
                  <div className="flex flex-col items-center">
                    <Type className="w-4 h-4" />
                    <div className="w-4 h-0.5 bg-red-500 -mt-0.5 rounded-full" />
                  </div>
                </ToolbarBtn>
                {/* Highlight */}
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

                <ToolbarBtn onClick={() => document.execCommand('insertOrderedList')}><ListOrdered className="w-4 h-4" /></ToolbarBtn>
                <ToolbarBtn onClick={() => document.execCommand('insertUnorderedList')}><List className="w-4 h-4" /></ToolbarBtn>
                <ToolbarBtn onClick={() => document.execCommand('outdent')}><Outdent className="w-4 h-4" /></ToolbarBtn>
                <ToolbarBtn onClick={() => document.execCommand('indent')}><Indent className="w-4 h-4" /></ToolbarBtn>

                <ToolbarDivider />

                <ToolbarBtn onClick={() => {
                  const url = prompt('Image URL:')
                  if (url) document.execCommand('insertImage', false, url)
                }}><Image className="w-4 h-4" /></ToolbarBtn>
                <ToolbarBtn><Paperclip className="w-4 h-4" /></ToolbarBtn>
                <ToolbarBtn onClick={() => document.execCommand('justifyCenter')}><Paintbrush className="w-4 h-4" /></ToolbarBtn>

                <ToolbarDivider />

                <ToolbarBtn onClick={() => document.execCommand('formatBlock', false, 'blockquote')}><Quote className="w-4 h-4" /></ToolbarBtn>
                <ToolbarBtn onClick={() => document.execCommand('removeFormat')}><RemoveFormatting className="w-4 h-4" /></ToolbarBtn>

                <ToolbarDivider />

                <ToolbarBtn onClick={() => document.execCommand('undo')}><Undo className="w-4 h-4" /></ToolbarBtn>
                <ToolbarBtn onClick={() => document.execCommand('redo')}><Redo className="w-4 h-4" /></ToolbarBtn>
              </div>

              {/* Editable area */}
              <div
                ref={editorRef}
                contentEditable
                suppressContentEditableWarning
                className="flex-1 px-6 py-5 text-sm text-travefy-gray-700 leading-relaxed focus:outline-none min-h-[400px]"
                data-placeholder="Write message here..."
                style={{ caretColor: '#2a79a6' }}
              />
            </div>
          </div>
        </main>
      </div>

      {/* Bottom bar */}
      <div className="bg-white border-t border-travefy-gray-200 px-6 py-3 flex items-center justify-between shrink-0">
        <button
          onClick={() => navigate('/email-marketing/campaigns')}
          className="text-sm font-semibold text-travefy-blue hover:text-travefy-blue-dark transition-colors"
        >
          Save &amp; Exit
        </button>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm" onClick={() => setShowPreviewModal(true)}>Preview</Button>
          <LaunchDropdown
            onSendNow={() => setShowSendModal(true)}
            onSchedule={() => setShowScheduleModal(true)}
            onSendTest={() => setShowTestModal(true)}
          />
        </div>
      </div>

      <SendTestModal
        open={showTestModal}
        onClose={() => setShowTestModal(false)}
        meta={campaignMeta}
      />
      <ConfirmSendModal
        open={showSendModal}
        onClose={() => setShowSendModal(false)}
        onConfirm={handleSendConfirmed}
        meta={campaignMeta}
      />
      <ScheduleModal
        open={showScheduleModal}
        onClose={() => setShowScheduleModal(false)}
        onConfirm={handleScheduleConfirmed}
        meta={campaignMeta}
      />
      <EmailPreviewModal
        open={showPreviewModal}
        onClose={() => setShowPreviewModal(false)}
        subjectLine={subjectLine}
        fromName="Kim Anderson"
        html={getEditorHtml()}
      />
    </div>
  )
}
