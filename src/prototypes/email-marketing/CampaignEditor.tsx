import { clsx } from 'clsx'
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Calendar,
  ChevronDown,
  ChevronUp,
  Clock,
  FileImage,
  Footprints,
  GripVertical,
  Image,
  LayoutGrid,
  Link,
  Mail,
  Play,
  Quote,
  Send,
  SeparatorHorizontal,
  Space,
  Square,
  Type,
  Video,
  X,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Modal, Select } from '../../shared/components'
import { contactLists } from './data'

// ── Types ─────────────────────────────────────────────────────────────────────

type BlockType =
  | 'Heading'
  | 'Paragraph'
  | 'Button'
  | 'Divider'
  | 'Spacer'
  | 'Image'
  | 'Video'
  | 'Social'
  | 'Footer'
  | 'Logo'
  | 'Link'
  | 'Blockquote'

interface CanvasBlock {
  id: string
  type: BlockType
  data: Record<string, string>
}

// ── Constants ─────────────────────────────────────────────────────────────────

const CONTENT_BLOCKS = [
  { icon: Type, label: 'Heading' },
  { icon: AlignLeft, label: 'Paragraph' },
  { icon: Square, label: 'Button' },
  { icon: SeparatorHorizontal, label: 'Divider' },
  { icon: Space, label: 'Spacer' },
  { icon: Image, label: 'Image' },
  { icon: Video, label: 'Video' },
  { icon: Mail, label: 'Social' },
  { icon: Footprints, label: 'Footer' },
  { icon: FileImage, label: 'Logo' },
  { icon: Link, label: 'Link' },
  { icon: Quote, label: 'Blockquote' },
]

const LAYOUT_OPTIONS = [
  { label: 'Single Column', cols: 1 },
  { label: 'Two Column', cols: 2 },
  { label: 'Three Column', cols: 3 },
  { label: 'Four Column', cols: 4 },
  { label: 'Sidebar Right', cols: 2 },
  { label: 'Full Width', cols: 1 },
]

const THEMES = [
  { name: 'Azure', accent: '#2a79a6' },
  { name: 'Stellar', accent: '#6366f1' },
  { name: 'Ember', accent: '#ea4335' },
  { name: 'Sage', accent: '#34a853' },
  { name: 'Dune', accent: '#f59e0b' },
  { name: 'Midnight', accent: '#1e293b' },
]

const DEFAULT_BLOCK_DATA: Record<BlockType, Record<string, string>> = {
  Heading:    { text: 'Your Heading Here', level: 'h2', align: 'left' },
  Paragraph:  { text: '' },
  Button:     { label: 'Click Here', url: '#', align: 'center', style: 'filled' },
  Divider:    { style: 'solid' },
  Spacer:     { size: 'md' },
  Image:      { url: '', alt: 'Image description', align: 'center' },
  Video:      { url: '' },
  Social:     { platforms: 'facebook,twitter,instagram,linkedin' },
  Footer:     { text: "You're receiving this because you're a valued subscriber." },
  Logo:       { url: '', align: 'center' },
  Link:       { text: 'Click here to learn more →', url: '#' },
  Blockquote: { text: '"Add your quote or highlighted testimonial text here."', attribution: '' },
}

// ── Canvas block renderer ─────────────────────────────────────────────────────

function renderBlockContent(type: BlockType, data: Record<string, string>) {
  switch (type) {
    case 'Heading': {
      const align = data.align ?? 'left'
      const level = data.level ?? 'h2'
      const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : ''
      const sizeClass = level === 'h1' ? 'text-2xl' : level === 'h3' ? 'text-base' : 'text-xl'
      return (
        <div className={clsx('px-6 py-4', alignClass)}>
          <p className={clsx('font-bold text-travefy-navy', sizeClass,
            align === 'left' && 'border-l-4 border-travefy-blue pl-3',
          )}>
            {data.text || 'Your Heading Here'}
          </p>
        </div>
      )
    }
    case 'Paragraph':
      return (
        <div className="px-6 py-4">
          {data.text ? (
            <p className="text-sm text-travefy-gray-600 leading-relaxed whitespace-pre-wrap">{data.text}</p>
          ) : (
            <div className="space-y-2">
              {[100, 92, 96, 78].map((w, i) => (
                <div key={i} className="h-2.5 bg-travefy-gray-200 rounded" style={{ width: `${w}%` }} />
              ))}
            </div>
          )}
        </div>
      )
    case 'Button': {
      const align = data.align ?? 'center'
      const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'
      const btnClass = data.style === 'outline'
        ? 'border-2 border-travefy-blue text-travefy-blue'
        : 'bg-travefy-blue text-white'
      return (
        <div className={clsx('px-6 py-5', alignClass)}>
          <div className={clsx('inline-block font-semibold text-sm px-8 py-3 rounded cursor-default select-none', btnClass)}>
            {data.label || 'Click Here'}
          </div>
        </div>
      )
    }
    case 'Divider': {
      const borderClass = data.style === 'dashed' ? 'border-dashed' : data.style === 'dotted' ? 'border-dotted' : ''
      return (
        <div className="px-6 py-3">
          <hr className={clsx('border-travefy-gray-300', borderClass)} />
        </div>
      )
    }
    case 'Spacer': {
      const heightClass = data.size === 'sm' ? 'h-6' : data.size === 'lg' ? 'h-16' : 'h-10'
      return (
        <div className={clsx('bg-travefy-gray-50 flex items-center justify-center', heightClass)}>
          <span className="text-xs text-travefy-gray-300 tracking-widest select-none">SPACER</span>
        </div>
      )
    }
    case 'Image': {
      const align = data.align ?? 'center'
      return (
        <div className="px-6 py-2">
          {data.url ? (
            <img
              src={data.url}
              alt={data.alt || ''}
              className={clsx('max-w-full rounded', align === 'center' && 'mx-auto', align === 'right' && 'ml-auto')}
            />
          ) : (
            <div className="h-44 bg-gradient-to-br from-travefy-gray-100 to-travefy-gray-200 flex items-center justify-center">
              <div className="text-center text-travefy-gray-400">
                <Image className="w-10 h-10 mx-auto mb-1 opacity-40" />
                <p className="text-xs font-medium">{data.alt || 'Click to add image'}</p>
              </div>
            </div>
          )}
        </div>
      )
    }
    case 'Video':
      return (
        <div className="h-44 bg-travefy-gray-900 flex items-center justify-center relative">
          <div className="w-14 h-14 rounded-full bg-white/25 flex items-center justify-center">
            <Play className="w-7 h-7 text-white fill-white ml-1" />
          </div>
          <div className="absolute bottom-3 left-3 text-xs text-white/50">
            {data.url || 'Video placeholder'}
          </div>
        </div>
      )
    case 'Social': {
      const platforms = (data.platforms || 'facebook,twitter,instagram,linkedin').split(',').filter(Boolean)
      const labels: Record<string, string> = { facebook: 'F', twitter: 'X', instagram: 'ig', linkedin: 'in' }
      return (
        <div className="px-6 py-5 flex items-center justify-center gap-3">
          {platforms.map((p) => (
            <div
              key={p}
              className="w-9 h-9 rounded-full bg-travefy-gray-200 flex items-center justify-center text-xs font-bold text-travefy-gray-500"
            >
              {labels[p] || p[0].toUpperCase()}
            </div>
          ))}
        </div>
      )
    }
    case 'Footer':
      return (
        <div className="px-6 py-5 bg-travefy-gray-50 border-t border-travefy-gray-100 text-center">
          <p className="text-xs text-travefy-gray-500">
            {data.text || "You're receiving this because you're a valued subscriber."}
          </p>
          <div className="flex items-center justify-center gap-3 mt-2 text-xs">
            <a href="#" className="text-travefy-blue hover:underline">Unsubscribe</a>
            <span className="text-travefy-gray-300">·</span>
            <a href="#" className="text-travefy-blue hover:underline">Manage preferences</a>
          </div>
        </div>
      )
    case 'Logo': {
      const align = data.align ?? 'center'
      const alignClass = align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start'
      return (
        <div className={clsx('px-6 py-4 flex', alignClass)}>
          {data.url ? (
            <img src={data.url} alt="Logo" className="h-10 object-contain" />
          ) : (
            <div className="h-10 w-36 bg-travefy-gray-200 rounded flex items-center justify-center">
              <span className="text-xs text-travefy-gray-500 font-bold tracking-wider">YOUR LOGO</span>
            </div>
          )}
        </div>
      )
    }
    case 'Link':
      return (
        <div className="px-6 py-3">
          <a href={data.url || '#'} className="text-sm text-travefy-blue underline">
            {data.text || 'Click here to learn more →'}
          </a>
        </div>
      )
    case 'Blockquote':
      return (
        <div className="px-6 py-4">
          <blockquote className="border-l-4 border-travefy-blue pl-4 italic text-travefy-gray-600 text-sm leading-relaxed">
            {data.text || '"Add your quote or highlighted testimonial text here."'}
          </blockquote>
          {data.attribution && (
            <p className="text-xs text-travefy-gray-500 mt-2 pl-4">— {data.attribution}</p>
          )}
        </div>
      )
  }
}

// ── Canvas block item ─────────────────────────────────────────────────────────

function CanvasBlockItem({
  block,
  isSelected,
  onSelect,
  onRemove,
  onDragStart,
}: {
  block: CanvasBlock
  isSelected: boolean
  onSelect: () => void
  onRemove: () => void
  onDragStart: () => void
}) {
  return (
    <div
      draggable
      onClick={onSelect}
      onDragStart={(e) => {
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData('text/plain', block.id)
        onDragStart()
      }}
      className={clsx(
        'relative group border-b border-travefy-gray-100 last:border-0 transition-shadow cursor-pointer',
        isSelected
          ? 'ring-2 ring-inset ring-travefy-blue'
          : 'hover:ring-2 hover:ring-inset hover:ring-travefy-blue/30 cursor-grab active:cursor-grabbing active:opacity-50',
      )}
    >
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 z-10">
        <span className="bg-white border border-travefy-gray-200 rounded px-1.5 py-0.5 text-xs text-travefy-gray-500 font-medium shadow-sm">
          {block.type}
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); onRemove() }}
          className="w-6 h-6 bg-white border border-travefy-gray-200 rounded flex items-center justify-center text-travefy-gray-400 hover:text-red-500 hover:border-red-300 shadow-sm transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
      <div className="absolute left-1.5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
        <GripVertical className="w-4 h-4 text-travefy-gray-400" />
      </div>
      {renderBlockContent(block.type, block.data)}
    </div>
  )
}

// ── Drop slot ─────────────────────────────────────────────────────────────────

function DropSlot({
  index,
  active,
  onDragOver,
  onDrop,
}: {
  index: number
  active: boolean
  onDragOver: (i: number) => void
  onDrop: (i: number) => void
}) {
  return (
    <div
      onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); onDragOver(index) }}
      onDrop={(e) => { e.preventDefault(); e.stopPropagation(); onDrop(index) }}
      className={clsx(
        'transition-all duration-150',
        active
          ? 'h-10 mx-3 my-1 rounded-lg border-2 border-dashed border-travefy-blue bg-travefy-blue/10 flex items-center justify-center'
          : 'h-0.5',
      )}
    >
      {active && <span className="text-xs text-travefy-blue font-semibold">Drop here</span>}
    </div>
  )
}

// ── DnD Canvas ────────────────────────────────────────────────────────────────

function DnDCanvas({
  blocks,
  activeDropSlot,
  selectedId,
  onDragOver,
  onDrop,
  onBlockDragStart,
  onRemoveBlock,
  onDragLeave,
  onSelectBlock,
}: {
  blocks: CanvasBlock[]
  activeDropSlot: number | null
  selectedId: string | null
  onDragOver: (i: number) => void
  onDrop: (i: number) => void
  onBlockDragStart: (id: string, fromIndex: number) => void
  onRemoveBlock: (id: string) => void
  onDragLeave: () => void
  onSelectBlock: (id: string) => void
}) {
  if (blocks.length === 0) {
    return (
      <div className="w-full max-w-[640px] mx-auto">
        <div
          onDragOver={(e) => { e.preventDefault(); onDragOver(0) }}
          onDrop={(e) => { e.preventDefault(); onDrop(0) }}
          onDragLeave={onDragLeave}
          className={clsx(
            'border-2 border-dashed rounded-xl min-h-64 flex flex-col items-center justify-center transition-all duration-200 select-none',
            activeDropSlot !== null
              ? 'border-travefy-blue bg-travefy-blue/5'
              : 'border-travefy-gray-300 bg-white',
          )}
        >
          <LayoutGrid
            className={clsx(
              'w-10 h-10 mb-3 transition-colors',
              activeDropSlot !== null ? 'text-travefy-blue' : 'text-travefy-gray-300',
            )}
          />
          <p className={clsx('font-semibold text-sm', activeDropSlot !== null ? 'text-travefy-blue' : 'text-travefy-gray-400')}>
            {activeDropSlot !== null ? 'Release to add block' : 'Drop blocks here to build your email'}
          </p>
          <p className={clsx('text-xs mt-1', activeDropSlot !== null ? 'text-travefy-blue/60' : 'text-travefy-gray-300')}>
            Drag content blocks from the left panel
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      className="w-full max-w-[640px] mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-travefy-gray-200"
      onDragLeave={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          onDragLeave()
        }
      }}
    >
      <DropSlot index={0} active={activeDropSlot === 0} onDragOver={onDragOver} onDrop={onDrop} />
      {blocks.map((block, i) => (
        <div key={block.id}>
          <CanvasBlockItem
            block={block}
            isSelected={selectedId === block.id}
            onSelect={() => onSelectBlock(block.id)}
            onRemove={() => onRemoveBlock(block.id)}
            onDragStart={() => onBlockDragStart(block.id, i)}
          />
          <DropSlot index={i + 1} active={activeDropSlot === i + 1} onDragOver={onDragOver} onDrop={onDrop} />
        </div>
      ))}
    </div>
  )
}

// ── Template initial blocks ───────────────────────────────────────────────────

const TEMPLATE_DISPLAY_NAMES: Record<string, string> = {
  classic: 'Classic',
  hero: 'Hero',
  newsletter: 'Newsletter',
  minimal: 'Minimal',
  promotional: 'Promotional',
  announcement: 'Announcement',
}

const TEMPLATE_INITIAL_BLOCKS: Record<string, Omit<CanvasBlock, 'id'>[]> = {
  classic: [
    { type: 'Logo',      data: { ...DEFAULT_BLOCK_DATA.Logo, align: 'center' } },
    { type: 'Image',     data: { ...DEFAULT_BLOCK_DATA.Image, alt: 'Hero Image' } },
    { type: 'Heading',   data: { text: 'Discover Incredible Destinations', level: 'h2', align: 'left' } },
    { type: 'Paragraph', data: { text: "We've handpicked a selection of our most popular destinations for 2026. From the sun-drenched coasts of the Mediterranean to the vibrant cities of Southeast Asia, your perfect trip is waiting." } },
    { type: 'Button',    data: { label: 'Browse All Destinations', url: '#', align: 'center', style: 'filled' } },
    { type: 'Footer',    data: { text: "You're receiving this email because you're a valued Travefy contact." } },
  ],
  hero: [
    { type: 'Heading',   data: { text: 'Escape to Paradise. Book Your Dream Trip.', level: 'h1', align: 'center' } },
    { type: 'Paragraph', data: { text: "Limited-time offers on handpicked destinations. Don't miss out." } },
    { type: 'Button',    data: { label: 'Explore Deals →', url: '#', align: 'center', style: 'filled' } },
    { type: 'Divider',   data: { style: 'solid' } },
    { type: 'Paragraph', data: { text: 'Ready for a change of scenery? Browse our curated deals and find your next great adventure. Limited spots available — claim yours today.' } },
    { type: 'Footer',    data: { text: '© 2026 Travefy' } },
  ],
  newsletter: [
    { type: 'Logo',      data: { ...DEFAULT_BLOCK_DATA.Logo, align: 'left' } },
    { type: 'Heading',   data: { text: 'The Travefy Compass', level: 'h1', align: 'left' } },
    { type: 'Image',     data: { ...DEFAULT_BLOCK_DATA.Image, alt: 'Featured Story Image' } },
    { type: 'Heading',   data: { text: 'The Rise of Slow Travel: Why More Agents Are Booking Month-Long Stays', level: 'h2', align: 'left' } },
    { type: 'Paragraph', data: { text: "Travelers are increasingly opting for immersive, extended stays over fast-paced itineraries. Here's how to position your agency for this growing trend." } },
    { type: 'Link',      data: { text: 'Read full article →', url: '#' } },
    { type: 'Divider',   data: { style: 'solid' } },
    { type: 'Button',    data: { label: 'Schedule a Demo', url: '#', align: 'center', style: 'filled' } },
    { type: 'Footer',    data: { text: '© 2026 Travefy Inc.' } },
  ],
  minimal: [
    { type: 'Logo',      data: { ...DEFAULT_BLOCK_DATA.Logo, align: 'left' } },
    { type: 'Heading',   data: { text: 'A quick note from the Travefy team', level: 'h1', align: 'left' } },
    { type: 'Paragraph', data: { text: "Hi [First Name],\n\nWe wanted to reach out personally to let you know about some exciting updates to your Travefy account. This month, we've launched new features designed to help you close more bookings and delight your clients.\n\nWhether you're managing a full itinerary or just starting out, these tools are built for you." } },
    { type: 'Button',    data: { label: "See What's New", url: '#', align: 'left', style: 'outline' } },
    { type: 'Paragraph', data: { text: "Warm regards,\nThe Travefy Team" } },
    { type: 'Footer',    data: { text: '© 2026 Travefy' } },
  ],
  promotional: [
    { type: 'Heading',   data: { text: 'Limited Time Offer — Ends Sunday', level: 'h3', align: 'center' } },
    { type: 'Heading',   data: { text: '30% OFF Your Next Booking', level: 'h1', align: 'center' } },
    { type: 'Paragraph', data: { text: 'Use code TRAVEL30 at checkout. Valid on bookings over $1,000. Expires March 31, 2026.' } },
    { type: 'Button',    data: { label: 'Claim Your Discount', url: '#', align: 'center', style: 'filled' } },
    { type: 'Divider',   data: { style: 'solid' } },
    { type: 'Heading',   data: { text: 'Top Deals This Week', level: 'h3', align: 'left' } },
    { type: 'Paragraph', data: { text: "Bali, Indonesia — $1,299 (was $1,849) · 7 nights\nSantorini, Greece — $1,599 (was $2,299) · 6 nights\nCancún, Mexico — $899 (was $1,299) · 5 nights" } },
    { type: 'Footer',    data: { text: '© 2026 Travefy. *Terms apply.' } },
  ],
  announcement: [
    { type: 'Heading',   data: { text: 'Exciting News!', level: 'h1', align: 'center' } },
    { type: 'Heading',   data: { text: "We're launching something new", level: 'h2', align: 'center' } },
    { type: 'Paragraph', data: { text: "After months of development, we're thrilled to announce a major update to Travefy that will transform how you manage and sell travel experiences." } },
    { type: 'Button',    data: { label: 'Learn More', url: '#', align: 'center', style: 'filled' } },
    { type: 'Divider',   data: { style: 'solid' } },
    { type: 'Paragraph', data: { text: 'Questions? Reply to this email or reach out to support@travefy.com' } },
    { type: 'Footer',    data: { text: '© 2026 Travefy' } },
  ],
}

// ── Block editor panel helpers ────────────────────────────────────────────────

const inputCls = 'w-full px-3 py-2 border border-travefy-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue'
const labelCls = 'block text-xs font-semibold text-travefy-gray-600 mb-1'

function AlignGroup({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex border border-travefy-gray-200 rounded overflow-hidden">
      {[
        { v: 'left', Icon: AlignLeft },
        { v: 'center', Icon: AlignCenter },
        { v: 'right', Icon: AlignRight },
      ].map(({ v, Icon }) => (
        <button
          key={v}
          onClick={() => onChange(v)}
          className={clsx(
            'flex-1 py-1.5 flex items-center justify-center transition-colors',
            value === v ? 'bg-travefy-blue text-white' : 'text-travefy-gray-500 hover:bg-travefy-gray-50',
          )}
        >
          <Icon className="w-3.5 h-3.5" />
        </button>
      ))}
    </div>
  )
}

function ToggleGroup({ options, value, onChange }: {
  options: { label: string; value: string }[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex border border-travefy-gray-200 rounded overflow-hidden">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={clsx(
            'flex-1 py-1.5 text-xs font-semibold transition-colors',
            value === opt.value ? 'bg-travefy-blue text-white' : 'text-travefy-gray-600 hover:bg-travefy-gray-50',
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}

// ── Block editor panel ────────────────────────────────────────────────────────

function BlockEditorPanel({
  block,
  onUpdate,
  onClose,
}: {
  block: CanvasBlock
  onUpdate: (key: string, value: string) => void
  onClose: () => void
}) {
  const d = block.data

  return (
    <aside className="w-72 shrink-0 bg-white border-l border-travefy-gray-200 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-travefy-gray-100 shrink-0">
        <span className="text-sm font-semibold text-travefy-navy">Edit {block.type}</span>
        <button
          onClick={onClose}
          className="w-6 h-6 flex items-center justify-center rounded text-travefy-gray-400 hover:text-travefy-gray-700 hover:bg-travefy-gray-100 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Fields */}
      <div className="flex-1 px-4 py-4 space-y-4 overflow-y-auto">

        {block.type === 'Heading' && (
          <>
            <div>
              <label className={labelCls}>Text</label>
              <input value={d.text ?? ''} onChange={(e) => onUpdate('text', e.target.value)} className={inputCls} placeholder="Your heading text" />
            </div>
            <div>
              <label className={labelCls}>Level</label>
              <ToggleGroup
                value={d.level ?? 'h2'}
                options={[{ label: 'H1', value: 'h1' }, { label: 'H2', value: 'h2' }, { label: 'H3', value: 'h3' }]}
                onChange={(v) => onUpdate('level', v)}
              />
            </div>
            <div>
              <label className={labelCls}>Alignment</label>
              <AlignGroup value={d.align ?? 'left'} onChange={(v) => onUpdate('align', v)} />
            </div>
          </>
        )}

        {block.type === 'Paragraph' && (
          <div>
            <label className={labelCls}>Text</label>
            <textarea
              value={d.text ?? ''}
              onChange={(e) => onUpdate('text', e.target.value)}
              rows={7}
              className={clsx(inputCls, 'resize-none')}
              placeholder="Your paragraph text..."
            />
          </div>
        )}

        {block.type === 'Button' && (
          <>
            <div>
              <label className={labelCls}>Button Label</label>
              <input value={d.label ?? ''} onChange={(e) => onUpdate('label', e.target.value)} className={inputCls} placeholder="Button text" />
            </div>
            <div>
              <label className={labelCls}>Link URL</label>
              <input value={d.url ?? ''} onChange={(e) => onUpdate('url', e.target.value)} className={inputCls} placeholder="https://..." />
            </div>
            <div>
              <label className={labelCls}>Style</label>
              <ToggleGroup
                value={d.style ?? 'filled'}
                options={[{ label: 'Filled', value: 'filled' }, { label: 'Outline', value: 'outline' }]}
                onChange={(v) => onUpdate('style', v)}
              />
            </div>
            <div>
              <label className={labelCls}>Alignment</label>
              <AlignGroup value={d.align ?? 'center'} onChange={(v) => onUpdate('align', v)} />
            </div>
          </>
        )}

        {block.type === 'Divider' && (
          <div>
            <label className={labelCls}>Style</label>
            <ToggleGroup
              value={d.style ?? 'solid'}
              options={[{ label: 'Solid', value: 'solid' }, { label: 'Dashed', value: 'dashed' }, { label: 'Dotted', value: 'dotted' }]}
              onChange={(v) => onUpdate('style', v)}
            />
          </div>
        )}

        {block.type === 'Spacer' && (
          <div>
            <label className={labelCls}>Height</label>
            <ToggleGroup
              value={d.size ?? 'md'}
              options={[{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }]}
              onChange={(v) => onUpdate('size', v)}
            />
          </div>
        )}

        {block.type === 'Image' && (
          <>
            <div>
              <label className={labelCls}>Image URL</label>
              <input value={d.url ?? ''} onChange={(e) => onUpdate('url', e.target.value)} className={inputCls} placeholder="https://..." />
              <p className="text-xs text-travefy-gray-400 mt-1">Paste an image URL to preview</p>
            </div>
            <div>
              <label className={labelCls}>Alt Text</label>
              <input value={d.alt ?? ''} onChange={(e) => onUpdate('alt', e.target.value)} className={inputCls} placeholder="Describe the image" />
            </div>
            <div>
              <label className={labelCls}>Alignment</label>
              <AlignGroup value={d.align ?? 'center'} onChange={(v) => onUpdate('align', v)} />
            </div>
          </>
        )}

        {block.type === 'Video' && (
          <div>
            <label className={labelCls}>Video URL</label>
            <input value={d.url ?? ''} onChange={(e) => onUpdate('url', e.target.value)} className={inputCls} placeholder="https://youtube.com/..." />
            <p className="text-xs text-travefy-gray-400 mt-1">YouTube, Vimeo, or direct video URL</p>
          </div>
        )}

        {block.type === 'Social' && (
          <div>
            <label className={labelCls}>Platforms</label>
            <div className="space-y-2 mt-1">
              {[
                { value: 'facebook', label: 'Facebook' },
                { value: 'twitter', label: 'Twitter / X' },
                { value: 'instagram', label: 'Instagram' },
                { value: 'linkedin', label: 'LinkedIn' },
              ].map(({ value, label }) => {
                const platforms = (d.platforms ?? '').split(',').filter(Boolean)
                const checked = platforms.includes(value)
                return (
                  <label key={value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => {
                        const next = e.target.checked
                          ? [...platforms, value]
                          : platforms.filter((p) => p !== value)
                        onUpdate('platforms', next.join(','))
                      }}
                      className="rounded border-travefy-gray-300 text-travefy-blue"
                    />
                    <span className="text-sm text-travefy-gray-700">{label}</span>
                  </label>
                )
              })}
            </div>
          </div>
        )}

        {block.type === 'Footer' && (
          <div>
            <label className={labelCls}>Footer Text</label>
            <textarea
              value={d.text ?? ''}
              onChange={(e) => onUpdate('text', e.target.value)}
              rows={3}
              className={clsx(inputCls, 'resize-none')}
              placeholder="Footer disclaimer text..."
            />
          </div>
        )}

        {block.type === 'Logo' && (
          <>
            <div>
              <label className={labelCls}>Logo URL</label>
              <input value={d.url ?? ''} onChange={(e) => onUpdate('url', e.target.value)} className={inputCls} placeholder="https://..." />
              <p className="text-xs text-travefy-gray-400 mt-1">Paste your logo image URL</p>
            </div>
            <div>
              <label className={labelCls}>Alignment</label>
              <AlignGroup value={d.align ?? 'center'} onChange={(v) => onUpdate('align', v)} />
            </div>
          </>
        )}

        {block.type === 'Link' && (
          <>
            <div>
              <label className={labelCls}>Link Text</label>
              <input value={d.text ?? ''} onChange={(e) => onUpdate('text', e.target.value)} className={inputCls} placeholder="Link display text" />
            </div>
            <div>
              <label className={labelCls}>URL</label>
              <input value={d.url ?? ''} onChange={(e) => onUpdate('url', e.target.value)} className={inputCls} placeholder="https://..." />
            </div>
          </>
        )}

        {block.type === 'Blockquote' && (
          <>
            <div>
              <label className={labelCls}>Quote Text</label>
              <textarea
                value={d.text ?? ''}
                onChange={(e) => onUpdate('text', e.target.value)}
                rows={4}
                className={clsx(inputCls, 'resize-none')}
                placeholder='"Your inspiring quote here..."'
              />
            </div>
            <div>
              <label className={labelCls}>Attribution (optional)</label>
              <input value={d.attribution ?? ''} onChange={(e) => onUpdate('attribution', e.target.value)} className={inputCls} placeholder="e.g. Jane Doe, CEO" />
            </div>
          </>
        )}

      </div>
    </aside>
  )
}

// ── Launch options dropdown ───────────────────────────────────────────────────

function LaunchDropdown({
  onSendNow,
  onSchedule,
}: {
  onSendNow: () => void
  onSchedule: () => void
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

// ── Accordion section ─────────────────────────────────────────────────────────

function Section({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-travefy-gray-100">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-travefy-navy hover:bg-travefy-gray-50 transition-colors"
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4 text-travefy-gray-400" /> : <ChevronDown className="w-4 h-4 text-travefy-gray-400" />}
      </button>
      {open && <div className="px-4 pb-4 space-y-3">{children}</div>}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

type DesignerTab = 'content' | 'layouts' | 'themes'

export function CampaignEditor() {
  const navigate = useNavigate()
  const [campaignName, setCampaignName] = useState('')
  const [subjectLine, setSubjectLine] = useState('')
  const [selectedList, setSelectedList] = useState('')
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [loadedTemplateName, setLoadedTemplateName] = useState('')
  const [designerTab, setDesignerTab] = useState<DesignerTab>('content')
  const [showScheduleModal, setShowScheduleModal] = useState(false)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [scheduleDate, setScheduleDate] = useState('')
  const [scheduleTime, setScheduleTime] = useState('')
  const [scheduled, setScheduled] = useState(false)
  const [sent, setSent] = useState(false)

  // DnD state
  const [canvasBlocks, setCanvasBlocks] = useState<CanvasBlock[]>([])
  const [activeDropSlot, setActiveDropSlot] = useState<number | null>(null)
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null)
  const draggingRef = useRef<
    | { source: 'palette'; blockType: BlockType }
    | { source: 'canvas'; blockId: string; fromIndex: number }
    | null
  >(null)

  // Clear drag state when drag ends anywhere (including outside drop zones)
  useEffect(() => {
    const handler = () => {
      setActiveDropSlot(null)
      draggingRef.current = null
    }
    window.addEventListener('dragend', handler)
    return () => window.removeEventListener('dragend', handler)
  }, [])

  function handlePaletteDragStart(blockType: string) {
    draggingRef.current = { source: 'palette', blockType: blockType as BlockType }
  }

  function handleCanvasBlockDragStart(blockId: string, fromIndex: number) {
    draggingRef.current = { source: 'canvas', blockId, fromIndex }
  }

  function handleDropAtSlot(slotIndex: number) {
    const drag = draggingRef.current
    if (!drag) return

    if (drag.source === 'palette') {
      const newBlock: CanvasBlock = {
        id: `block-${Date.now()}-${Math.random().toString(36).slice(2)}`,
        type: drag.blockType,
        data: { ...DEFAULT_BLOCK_DATA[drag.blockType] },
      }
      setCanvasBlocks((prev) => [
        ...prev.slice(0, slotIndex),
        newBlock,
        ...prev.slice(slotIndex),
      ])
      setSelectedBlockId(newBlock.id)
    } else {
      const { blockId, fromIndex } = drag
      setCanvasBlocks((prev) => {
        const blocks = [...prev]
        const actualFrom = blocks.findIndex((b) => b.id === blockId)
        if (actualFrom === -1 || slotIndex === actualFrom || slotIndex === actualFrom + 1) return prev
        const [moved] = blocks.splice(actualFrom, 1)
        const insertAt = slotIndex > actualFrom ? slotIndex - 1 : slotIndex
        blocks.splice(insertAt, 0, moved)
        return blocks
      })
    }

    setActiveDropSlot(null)
    draggingRef.current = null
  }

  function removeBlock(id: string) {
    setCanvasBlocks((prev) => prev.filter((b) => b.id !== id))
    if (selectedBlockId === id) setSelectedBlockId(null)
  }

  function updateBlockData(id: string, key: string, value: string) {
    setCanvasBlocks((prev) =>
      prev.map((b) => b.id === id ? { ...b, data: { ...b.data, [key]: value } } : b)
    )
  }

  function handleSelectBlock(id: string) {
    setSelectedBlockId((prev) => (prev === id ? null : id))
  }

  function handleTemplateSelect(value: string) {
    setSelectedTemplate(value)
    if (!value) return
    const templateBlocks = TEMPLATE_INITIAL_BLOCKS[value]
    if (!templateBlocks) return
    const withIds: CanvasBlock[] = templateBlocks.map((b) => ({
      ...b,
      id: `block-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    }))
    setCanvasBlocks(withIds)
    setSelectedBlockId(null)
    setLoadedTemplateName(TEMPLATE_DISPLAY_NAMES[value] ?? value)
    setSelectedTemplate('')  // reset dropdown after loading
  }

  const selectedBlock = canvasBlocks.find((b) => b.id === selectedBlockId) ?? null

  const recipientCount = selectedList
    ? (contactLists.find((l) => l.id === selectedList)?.contacts ?? 0)
    : 0

  const handleSendNow = () => {
    if (!campaignName || !selectedList) return
    setShowConfirmModal(true)
  }

  const handleConfirmSend = () => {
    setShowConfirmModal(false)
    setSent(true)
    setTimeout(() => navigate('/email-marketing/campaigns'), 1500)
  }

  const handleSchedule = () => setShowScheduleModal(true)

  const handleConfirmSchedule = () => {
    setShowScheduleModal(false)
    setScheduled(true)
    setTimeout(() => navigate('/email-marketing/campaigns'), 1500)
  }

  if (sent || scheduled) {
    return (
      <div className="flex-1 flex items-center justify-center bg-travefy-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-xl font-semibold text-travefy-navy">
            {sent ? 'Campaign Sent!' : 'Campaign Scheduled!'}
          </h2>
          <p className="text-sm text-travefy-gray-500 mt-2">Redirecting to campaigns...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Left sidebar */}
        <aside className="w-80 shrink-0 bg-white border-r border-travefy-gray-200 flex flex-col overflow-y-auto">
          <Section title="Campaign Settings">
            <Input
              label="Campaign Name (Internal)"
              placeholder="Enter campaign name"
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
            />
            <div>
              <Input
                label="Subject Line"
                placeholder="Enter email subject"
                value={subjectLine}
                onChange={(e) => setSubjectLine(e.target.value)}
                helperText={subjectLine ? `${subjectLine.length}/80 chars — ${subjectLine.length <= 50 ? '✓ Good length' : '⚠ Try to keep under 50'}` : undefined}
              />
            </div>
            <Input
              label="From Name"
              placeholder="e.g. Travefy Travel"
              defaultValue="Kim Anderson"
            />
            <div>
              <Select
                label="Recipients"
                value={selectedList}
                onChange={(e) => setSelectedList(e.target.value)}
              >
                <option value="">Select a list…</option>
                {contactLists.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.name} ({l.contacts.toLocaleString()})
                  </option>
                ))}
              </Select>
              <p className="text-xs text-travefy-gray-500 mt-1">
                {selectedList
                  ? `${recipientCount.toLocaleString()} contacts will receive this email`
                  : 'Total contacts: 0'}
              </p>
            </div>
            <div>
              <Select
                label="Load Template"
                value={selectedTemplate}
                onChange={(e) => handleTemplateSelect(e.target.value)}
              >
                <option value="">Choose a template…</option>
                <option value="classic">Classic — Header + Body + Footer</option>
                <option value="hero">Hero — Full-width image focus</option>
                <option value="newsletter">Newsletter — Multi-article layout</option>
                <option value="minimal">Minimal — Clean text-only</option>
                <option value="promotional">Promotional — Deal / discount</option>
                <option value="announcement">Announcement — Product launch</option>
              </Select>
              <p className="text-xs text-travefy-gray-400 mt-1">
                {loadedTemplateName
                  ? `Loaded from ${loadedTemplateName} template · Or drag to customise`
                  : 'Loads editable blocks onto the canvas'}
              </p>
            </div>
          </Section>

          <Section title="Designer">
            <div className="flex border border-travefy-gray-200 rounded overflow-hidden">
              {(['content', 'layouts', 'themes'] as DesignerTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setDesignerTab(tab)}
                  className={clsx(
                    'flex-1 py-2 text-xs font-semibold capitalize transition-colors',
                    designerTab === tab
                      ? 'bg-travefy-blue text-white'
                      : 'text-travefy-gray-600 hover:bg-travefy-gray-50',
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content tab */}
            {designerTab === 'content' && (
              <div className="space-y-2 pt-1">
                <p className="text-xs text-travefy-gray-400 pb-1">Drag a block onto the canvas →</p>
                <div className="grid grid-cols-2 gap-2">
                  {CONTENT_BLOCKS.map(({ icon: Icon, label }) => (
                    <button
                      key={label}
                      draggable
                      onDragStart={(e) => {
                        e.dataTransfer.effectAllowed = 'copy'
                        e.dataTransfer.setData('text/plain', label)
                        handlePaletteDragStart(label)
                      }}
                      className="flex items-center gap-2 px-2.5 py-2 border border-travefy-gray-200 rounded text-xs text-travefy-gray-700 hover:border-travefy-blue hover:text-travefy-blue hover:bg-travefy-blue-light transition-colors group cursor-grab active:cursor-grabbing"
                    >
                      <GripVertical className="w-3 h-3 text-travefy-gray-300 group-hover:text-travefy-blue shrink-0" />
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Layouts tab */}
            {designerTab === 'layouts' && (
              <div className="grid grid-cols-2 gap-3 pt-1">
                {LAYOUT_OPTIONS.map(({ label, cols }) => (
                  <button
                    key={label}
                    className="flex flex-col items-start gap-1.5 p-3 border border-travefy-gray-200 rounded hover:border-travefy-blue hover:bg-travefy-blue-light transition-colors group"
                  >
                    <div className="flex gap-1 w-full">
                      {Array.from({ length: Math.min(cols, 4) }).map((_, i) => (
                        <div key={i} className="flex-1 h-6 bg-travefy-gray-200 group-hover:bg-travefy-blue/20 rounded-sm transition-colors" />
                      ))}
                    </div>
                    <span className="text-xs text-travefy-gray-600 group-hover:text-travefy-blue">{label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Themes tab */}
            {designerTab === 'themes' && (
              <div className="grid grid-cols-2 gap-3 pt-1">
                {THEMES.map(({ name, accent }) => (
                  <button
                    key={name}
                    className="flex flex-col gap-2 p-3 border border-travefy-gray-200 rounded hover:border-travefy-blue transition-colors group"
                    onClick={() => setSelectedTemplate('classic')}
                  >
                    <div className="w-full space-y-1">
                      <div className="h-3 rounded-sm w-full" style={{ backgroundColor: accent }} />
                      <div className="h-1.5 rounded-sm bg-travefy-gray-200 w-3/4" />
                      <div className="h-1.5 rounded-sm bg-travefy-gray-200 w-1/2" />
                      <div className="h-2 rounded-sm mt-1 w-1/3" style={{ backgroundColor: accent, opacity: 0.5 }} />
                    </div>
                    <span className="text-xs text-travefy-gray-600 group-hover:text-travefy-blue">{name}</span>
                  </button>
                ))}
              </div>
            )}
          </Section>
        </aside>

        {/* Canvas area */}
        <main className="flex-1 overflow-auto bg-travefy-gray-100 p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-sm font-semibold text-travefy-gray-700">
                {loadedTemplateName ? `${loadedTemplateName} Template` : 'Custom Builder'}
              </h2>
              {canvasBlocks.length > 0 && (
                <p className="text-xs text-travefy-gray-400 mt-0.5">
                  {canvasBlocks.length} block{canvasBlocks.length !== 1 ? 's' : ''} · Click to edit · Drag to reorder
                </p>
              )}
            </div>
            <div className="flex items-center gap-2 text-xs text-travefy-gray-500">
              <LayoutGrid className="w-4 h-4" />
              <span>640px width</span>
            </div>
          </div>

          <DnDCanvas
            blocks={canvasBlocks}
            activeDropSlot={activeDropSlot}
            selectedId={selectedBlockId}
            onDragOver={setActiveDropSlot}
            onDrop={handleDropAtSlot}
            onBlockDragStart={handleCanvasBlockDragStart}
            onRemoveBlock={removeBlock}
            onDragLeave={() => setActiveDropSlot(null)}
            onSelectBlock={handleSelectBlock}
          />
        </main>

        {/* Right editor panel — shown when a block is selected */}
        {selectedBlock && (
          <BlockEditorPanel
            block={selectedBlock}
            onUpdate={(key, value) => updateBlockData(selectedBlock.id, key, value)}
            onClose={() => setSelectedBlockId(null)}
          />
        )}
      </div>

      {/* Bottom bar */}
      <div className="bg-white border-t border-travefy-gray-200 px-6 py-3 flex items-center justify-between shrink-0">
        <button
          onClick={() => navigate('/email-marketing/campaigns')}
          className="text-sm font-semibold text-travefy-gray-600 hover:text-travefy-gray-900 transition-colors"
        >
          Save &amp; Exit
        </button>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm">Send Test</Button>
          <Button variant="secondary" size="sm">Import Template</Button>
          <LaunchDropdown onSendNow={handleSendNow} onSchedule={handleSchedule} />
        </div>
      </div>

      {/* Schedule modal */}
      <Modal
        open={showScheduleModal}
        onClose={() => setShowScheduleModal(false)}
        title="Schedule Campaign"
        size="sm"
        footer={
          <>
            <Button variant="link" onClick={() => setShowScheduleModal(false)}>Cancel</Button>
            <Button onClick={handleConfirmSchedule} disabled={!scheduleDate || !scheduleTime}>
              Schedule Campaign
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <Input
            label="Select Date"
            type="date"
            value={scheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
            leadingIcon={<Calendar className="w-4 h-4" />}
          />
          <Input
            label="Select Time"
            type="time"
            value={scheduleTime}
            onChange={(e) => setScheduleTime(e.target.value)}
            leadingIcon={<Clock className="w-4 h-4" />}
          />
        </div>
      </Modal>

      {/* Confirm send modal */}
      <Modal
        open={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        title="Confirm Campaign Launch"
        size="sm"
        footer={
          <>
            <Button variant="link" onClick={() => setShowConfirmModal(false)}>Cancel</Button>
            <Button onClick={handleConfirmSend}>Yes, Continue</Button>
          </>
        }
      >
        <p className="text-sm text-travefy-gray-700">
          You are about to launch this campaign to{' '}
          <strong className="text-travefy-navy">{recipientCount.toLocaleString()} contacts</strong>.
          Are you sure you want to continue?
        </p>
      </Modal>
    </div>
  )
}
