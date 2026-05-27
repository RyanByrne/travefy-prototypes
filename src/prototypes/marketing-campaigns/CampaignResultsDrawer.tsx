import { X } from 'lucide-react'
import { useEffect } from 'react'
import type { Campaign } from './data'

function FunnelRow({ label, value, total, danger }: { label: string; value: number; total: number; danger?: boolean }) {
  const pct = total > 0 ? (value / total) * 100 : 0
  return (
    <div className="py-2.5">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-travefy-gray-700">{label}</span>
        <span className="text-sm text-travefy-gray-600">{value.toLocaleString()} ({pct.toFixed(1)}%)</span>
      </div>
      <div className="w-full bg-travefy-gray-100 rounded-full h-2 overflow-hidden">
        <div className={danger ? 'h-full rounded-full bg-travefy-danger' : 'h-full rounded-full bg-travefy-blue'} style={{ width: `${Math.max(pct, danger && value > 0 ? 2 : 0)}%` }} />
      </div>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-travefy-gray-200 rounded-lg px-5 py-4">
      <p className="text-sm text-travefy-gray-500 mb-1">{label}</p>
      <p className="text-2xl font-bold text-travefy-navy">{value}</p>
    </div>
  )
}

export function CampaignResultsDrawer({
  open,
  onClose,
  campaign,
  onToast,
}: {
  open: boolean
  onClose: () => void
  campaign: Campaign | null
  onToast?: (text: string) => void
}) {
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open || !campaign) return null

  const { recipients, delivered, opened, clicked, bounced, unsubscribed, spamReports } = campaign
  const openRate = delivered > 0 ? ((opened / delivered) * 100).toFixed(1) : '0.0'
  const clickRate = delivered > 0 ? ((clicked / delivered) * 100).toFixed(1) : '0.0'
  const bounceRate = recipients > 0 ? ((bounced / recipients) * 100).toFixed(1) : '0.0'

  return (
    <>
      <div className="fixed inset-0 z-40 bg-travefy-navy/30 backdrop-blur-[1px]" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-3xl flex flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between px-8 py-5 shrink-0">
          <h2 className="text-xl font-bold text-travefy-navy">Campaign Results</h2>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded text-travefy-gray-400 hover:text-travefy-gray-700 hover:bg-travefy-gray-100 transition-colors" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-8 pb-8">
          {/* Summary card */}
          <div className="bg-travefy-blue-light/40 border border-travefy-blue/20 rounded-lg p-5 flex items-start justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-travefy-navy">{campaign.name}</h3>
              <p className="text-sm text-travefy-gray-600 mt-1">by {campaign.owner}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-travefy-navy">{recipients.toLocaleString()} Recipients</p>
              <p className="text-sm text-travefy-gray-600 mt-0.5">
                {campaign.sentAt ? `Sent ${campaign.sentAt}` : campaign.scheduledFor ? `Scheduled ${campaign.scheduledFor}` : 'Draft'}
              </p>
              <button
                onClick={() => onToast?.('Email preview (mocked)')}
                className="mt-2 px-3 py-1.5 rounded border border-travefy-blue bg-white text-travefy-blue text-sm font-semibold hover:bg-travefy-blue-light transition-colors"
              >
                View Email
              </button>
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <StatCard label="Delivered" value={delivered.toLocaleString()} />
            <StatCard label="Open Rate" value={`${openRate}%`} />
            <StatCard label="Click Rate" value={`${clickRate}%`} />
            <StatCard label="Bounce Rate" value={`${bounceRate}%`} />
          </div>

          {/* Delivery funnel */}
          <div className="mt-8">
            <h4 className="text-sm font-semibold text-travefy-gray-500 mb-2">Delivery Funnel</h4>
            <FunnelRow label="Sent" value={recipients} total={recipients} />
            <FunnelRow label="Delivered" value={delivered} total={recipients} />
            <FunnelRow label="Opened" value={opened} total={recipients} />
            <FunnelRow label="Clicked" value={clicked} total={recipients} />
            <FunnelRow label="Unsubscribe" value={unsubscribed} total={recipients} danger />
            <FunnelRow label="Spam Report" value={spamReports} total={recipients} danger />
          </div>
        </div>
      </div>
    </>
  )
}
