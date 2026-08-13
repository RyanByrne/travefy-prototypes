import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { SUPPLIERS, type CommissionSplit } from './data'

/** Today as ISO YYYY-MM-DD (browser only — used to default effective dates). */
const todayISO = () => new Date().toISOString().slice(0, 10)

// ── Drawer shell (reused by both drawers) ──────────────────────────────────────

function DrawerShell({
  title,
  open,
  onClose,
  onSave,
  saveLabel = 'Save and close',
  children,
}: {
  title: string
  open: boolean
  onClose: () => void
  onSave: () => void
  saveLabel?: string
  children: React.ReactNode
}) {
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 z-40 bg-travefy-navy/30 backdrop-blur-[1px]" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-2xl flex flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between px-8 py-5 border-b border-travefy-gray-100 shrink-0">
          <h2 className="text-lg font-bold text-travefy-navy">{title}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded text-travefy-gray-400 hover:text-travefy-gray-700 hover:bg-travefy-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-8 py-6">{children}</div>
        <div className="flex items-center justify-between px-8 py-4 border-t border-travefy-gray-100 shrink-0 bg-travefy-gray-50">
          <button onClick={onClose} className="px-3 py-1.5 text-sm font-semibold text-travefy-blue hover:underline">Cancel</button>
          <button
            onClick={onSave}
            className="px-5 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors"
          >
            {saveLabel}
          </button>
        </div>
      </div>
    </>
  )
}

// ── Split drawer ───────────────────────────────────────────────────────────────

export function SplitDrawer({
  open,
  onClose,
  split,
  onSave,
}: {
  open: boolean
  onClose: () => void
  split: CommissionSplit | null
  onSave: (next: CommissionSplit) => void
}) {
  const [name, setName] = useState('')
  const [percentage, setPercentage] = useState('0%')
  const [description, setDescription] = useState('')
  const [supplier, setSupplier] = useState('')
  const [effectiveDate, setEffectiveDate] = useState(todayISO())

  // A rate change vs. the saved split — only then does "effective date" matter.
  const rateChanged = !!split && parseInt(percentage.replace(/[^0-9]/g, ''), 10) !== split.percentage

  useEffect(() => {
    if (open) {
      setName(split?.name ?? '')
      setPercentage(split ? `${split.percentage}%` : '0%')
      setDescription(split?.description ?? '')
      setSupplier(split?.supplier ?? '')
      setEffectiveDate(todayISO())
    }
  }, [open, split])

  const handleSave = () => {
    const pct = parseInt(percentage.replace(/[^0-9]/g, ''), 10) || 0
    onSave({
      id: split?.id ?? `s-${Date.now()}`,
      name: name.trim() || 'Untitled Split',
      description: description.trim(),
      percentage: pct,
      supplier: supplier || undefined,
    })
  }

  return (
    <DrawerShell title="Commission Split" open={open} onClose={onClose} onSave={handleSave}>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-travefy-navy mb-1.5">Split Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Set an internal name"
              className="w-full px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
            />
            <p className="text-xs text-travefy-gray-500 mt-1">Used to identify splits</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-travefy-navy mb-1.5">Commission percentage</label>
            <input
              type="text"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              placeholder="0%"
              className="w-full px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
            />
            <p className="text-xs text-travefy-gray-500 mt-1">Percent of commission assigned to advisor</p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-travefy-navy mb-1.5">Applies to</label>
          <select
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            className="w-full max-w-xs px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white text-travefy-gray-700 focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
          >
            <option value="">All suppliers</option>
            {SUPPLIERS.map((s) => <option key={s} value={s}>{s} only</option>)}
          </select>
          <p className="text-xs text-travefy-gray-500 mt-1">Scope this split to one supplier, or leave as all suppliers. When assigned to an advisor, a supplier-scoped split only applies to that supplier’s bookings.</p>
        </div>

        {rateChanged && (
          <div className="rounded-lg border border-travefy-blue/30 bg-travefy-blue-light/40 p-4">
            <label className="block text-sm font-semibold text-travefy-navy mb-1.5">Rate effective date</label>
            <input
              type="date"
              value={effectiveDate}
              onChange={(e) => setEffectiveDate(e.target.value)}
              className="w-full max-w-xs px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white text-travefy-gray-700 focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
            />
            <p className="text-xs text-travefy-gray-600 mt-2">
              Bookings dated on or after this date use the new rate when they’re reconciled. Already-reconciled bookings
              are unchanged — a rate change is never retroactive.
            </p>
          </div>
        )}

        <div>
          <label className="block text-sm font-semibold text-travefy-navy mb-1.5">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add any internal notes..."
            rows={5}
            className="w-full px-3 py-2.5 border border-travefy-gray-200 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue resize-none"
          />
          <p className="text-xs text-travefy-gray-500 mt-1">Internal notes about this supplier are only visible to the team, not to clients</p>
        </div>
      </div>
    </DrawerShell>
  )
}
