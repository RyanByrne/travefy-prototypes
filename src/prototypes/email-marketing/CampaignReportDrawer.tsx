import { X } from 'lucide-react'
import { useEffect } from 'react'
import { type Campaign } from './data'

// ── Funnel row ───────────────────────────────────────────────────────────────

function FunnelRow({
  label,
  value,
  total,
  color,
}: {
  label: string
  value: number
  total: number
  color: string
}) {
  const pct = total > 0 ? (value / total) * 100 : 0
  return (
    <div className="py-3 border-b border-travefy-gray-100 last:border-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-travefy-gray-700">{label}</span>
        <span className="text-sm text-travefy-gray-500">
          {value.toLocaleString()} ({pct.toFixed(1)}%)
        </span>
      </div>
      <div className="w-full bg-travefy-gray-100 rounded-full h-2 overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

// ── Stat card ────────────────────────────────────────────────────────────────

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-travefy-gray-50 rounded-lg p-4">
      <p className="text-xs font-semibold text-travefy-gray-500 mb-1">{label}</p>
      <p className="text-2xl font-bold text-travefy-navy">{value}</p>
    </div>
  )
}

// ── Main component ───────────────────────────────────────────────────────────

export function CampaignReportDrawer({
  open,
  onClose,
  campaign,
}: {
  open: boolean
  onClose: () => void
  campaign: Campaign | null
}) {
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open || !campaign) return null

  const openRate = campaign.delivered > 0 ? ((campaign.opened / campaign.delivered) * 100).toFixed(1) : '0'
  const clickRate = campaign.delivered > 0 ? ((campaign.clicked / campaign.delivered) * 100).toFixed(1) : '0'
  const bounceRate = campaign.recipients > 0 ? ((campaign.bounced / campaign.recipients) * 100).toFixed(1) : '0'

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-travefy-navy/30 backdrop-blur-[1px]"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xl flex flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-travefy-gray-200 shrink-0">
          <h2 className="text-lg font-bold text-travefy-navy">Campaign Results</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded text-travefy-gray-400 hover:text-travefy-gray-700 hover:bg-travefy-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Campaign info banner */}
          <div className="bg-travefy-navy px-6 py-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-bold text-white">{campaign.name}</h3>
                <p className="text-sm text-white/60 mt-0.5">by {campaign.owner}</p>
              </div>
              <div className="text-right">
                <p className="text-base font-bold text-white">{campaign.recipients.toLocaleString()} Recipients</p>
                <p className="text-sm text-white/60 mt-0.5">
                  {campaign.sentAt ? `Sent ${campaign.sentAt}` : campaign.scheduledFor ? `Scheduled ${campaign.scheduledFor}` : 'Draft'}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Stat cards */}
            <div className="grid grid-cols-4 gap-3">
              <StatCard label="Delivered" value={campaign.delivered.toLocaleString()} />
              <StatCard label="Open Rate" value={`${openRate}%`} />
              <StatCard label="Click Rate" value={`${clickRate}%`} />
              <StatCard label="Bounce Rate" value={`${bounceRate}%`} />
            </div>

            {/* Delivery funnel */}
            <div>
              <h3 className="text-sm font-semibold text-travefy-navy mb-2">Delivery Funnel</h3>
              <div>
                <FunnelRow label="Sent" value={campaign.recipients} total={campaign.recipients} color="bg-travefy-gray-400" />
                <FunnelRow label="Delivered" value={campaign.delivered} total={campaign.recipients} color="bg-travefy-blue" />
                <FunnelRow label="Opened" value={campaign.opened} total={campaign.recipients} color="bg-travefy-blue" />
                <FunnelRow label="Clicked" value={campaign.clicked} total={campaign.recipients} color="bg-travefy-blue" />
                <FunnelRow label="Unsubscribe" value={campaign.unsubscribed} total={campaign.recipients} color="bg-red-400" />
                <FunnelRow label="Spam Report" value={0} total={campaign.recipients} color="bg-red-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
