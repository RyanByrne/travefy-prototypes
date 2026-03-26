import {
  ArrowLeft,
  BarChart2,
  Clock,
  Mail,
  MousePointerClick,
  Send,
  TrendingDown,
  TrendingUp,
  UserMinus,
  Users,
  XCircle,
} from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { campaigns } from './data'

function StatCard({
  icon,
  label,
  value,
  sub,
  color = 'text-travefy-navy',
}: {
  icon: React.ReactNode
  label: string
  value: string
  sub?: string
  color?: string
}) {
  return (
    <div className="bg-white border border-travefy-gray-200 rounded-lg p-5 flex flex-col gap-2">
      <div className="flex items-center gap-2 text-travefy-gray-500">
        {icon}
        <span className="text-sm font-semibold">{label}</span>
      </div>
      <p className={`text-3xl font-semibold ${color}`}>{value}</p>
      {sub && <p className="text-xs text-travefy-gray-500">{sub}</p>}
    </div>
  )
}

function FunnelBar({ label, value, total, color }: { label: string; value: number; total: number; color: string }) {
  const pct = total > 0 ? (value / total) * 100 : 0
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span className="text-travefy-gray-700 font-medium">{label}</span>
        <span className="text-travefy-gray-500">{value.toLocaleString()} ({pct.toFixed(1)}%)</span>
      </div>
      <div className="w-full bg-travefy-gray-100 rounded-full h-2.5 overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

export function CampaignReport() {
  const { id } = useParams()
  const navigate = useNavigate()
  const campaign = campaigns.find((c) => c.id === id)

  if (!campaign) {
    return (
      <div className="flex-1 flex items-center justify-center bg-travefy-gray-50">
        <div className="text-center">
          <p className="text-lg font-semibold text-travefy-navy">Campaign not found</p>
          <button
            onClick={() => navigate('/email-marketing/campaigns')}
            className="text-sm text-travefy-blue hover:underline mt-2"
          >
            Back to campaigns
          </button>
        </div>
      </div>
    )
  }

  // If it's a draft or scheduled, redirect to editor
  if (campaign.status !== 'sent') {
    navigate(`/email-marketing/campaigns/${id}/edit`, { replace: true })
    return null
  }

  const openRate = campaign.delivered > 0 ? ((campaign.opened / campaign.delivered) * 100).toFixed(1) : '0'
  const clickRate = campaign.delivered > 0 ? ((campaign.clicked / campaign.delivered) * 100).toFixed(1) : '0'
  const bounceRate = campaign.recipients > 0 ? ((campaign.bounced / campaign.recipients) * 100).toFixed(1) : '0'
  const unsubRate = campaign.delivered > 0 ? ((campaign.unsubscribed / campaign.delivered) * 100).toFixed(1) : '0'

  return (
    <div className="flex-1 overflow-auto bg-travefy-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-travefy-gray-200 px-6 py-5">
        <button
          onClick={() => navigate('/email-marketing/campaigns')}
          className="flex items-center gap-1.5 text-sm text-travefy-blue hover:text-travefy-blue-dark transition-colors mb-3"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Campaigns
        </button>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-travefy-navy">{campaign.name}</h1>
            <div className="flex items-center gap-4 mt-1 text-sm text-travefy-gray-500">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Sent {campaign.sentAt}</span>
              <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {campaign.recipients.toLocaleString()} recipients</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> by {campaign.owner}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-travefy-success-bg rounded-full">
            <Send className="w-3.5 h-3.5 text-travefy-success" />
            <span className="text-xs font-semibold text-travefy-success">Sent</span>
          </div>
        </div>
      </div>

      <div className="p-6 max-w-5xl mx-auto space-y-6">
        {/* Key metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={<Send className="w-4 h-4" />}
            label="Delivered"
            value={campaign.delivered.toLocaleString()}
            sub={`of ${campaign.recipients.toLocaleString()} sent`}
          />
          <StatCard
            icon={<BarChart2 className="w-4 h-4" />}
            label="Open Rate"
            value={`${openRate}%`}
            sub={`${campaign.opened.toLocaleString()} opens`}
            color={Number(openRate) > 30 ? 'text-travefy-success' : 'text-travefy-navy'}
          />
          <StatCard
            icon={<MousePointerClick className="w-4 h-4" />}
            label="Click Rate"
            value={`${clickRate}%`}
            sub={`${campaign.clicked.toLocaleString()} clicks`}
            color={Number(clickRate) > 5 ? 'text-travefy-success' : 'text-travefy-navy'}
          />
          <StatCard
            icon={<XCircle className="w-4 h-4" />}
            label="Bounce Rate"
            value={`${bounceRate}%`}
            sub={`${campaign.bounced.toLocaleString()} bounced`}
            color={Number(bounceRate) > 3 ? 'text-travefy-danger' : 'text-travefy-navy'}
          />
        </div>

        {/* Delivery funnel */}
        <div className="bg-white border border-travefy-gray-200 rounded-lg p-6">
          <h2 className="text-sm font-semibold text-travefy-navy mb-4">Delivery Funnel</h2>
          <div className="space-y-4">
            <FunnelBar label="Sent" value={campaign.recipients} total={campaign.recipients} color="bg-travefy-gray-400" />
            <FunnelBar label="Delivered" value={campaign.delivered} total={campaign.recipients} color="bg-travefy-blue" />
            <FunnelBar label="Opened" value={campaign.opened} total={campaign.recipients} color="bg-travefy-success" />
            <FunnelBar label="Clicked" value={campaign.clicked} total={campaign.recipients} color="bg-green-600" />
          </div>
        </div>

        {/* Engagement & issues side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Engagement summary */}
          <div className="bg-white border border-travefy-gray-200 rounded-lg p-6">
            <h2 className="text-sm font-semibold text-travefy-navy mb-4">Engagement Summary</h2>
            <div className="space-y-3">
              {[
                { label: 'Unique opens', value: campaign.opened, icon: <BarChart2 className="w-4 h-4 text-travefy-blue" />, trend: true },
                { label: 'Unique clicks', value: campaign.clicked, icon: <MousePointerClick className="w-4 h-4 text-travefy-blue" />, trend: true },
                { label: 'Click-to-open rate', value: campaign.opened > 0 ? `${((campaign.clicked / campaign.opened) * 100).toFixed(1)}%` : '0%', icon: <TrendingUp className="w-4 h-4 text-travefy-success" />, trend: true },
              ].map(({ label, value, icon }) => (
                <div key={label} className="flex items-center justify-between py-2 border-b border-travefy-gray-100 last:border-0">
                  <div className="flex items-center gap-2">
                    {icon}
                    <span className="text-sm text-travefy-gray-700">{label}</span>
                  </div>
                  <span className="text-sm font-semibold text-travefy-navy">{typeof value === 'number' ? value.toLocaleString() : value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Issues */}
          <div className="bg-white border border-travefy-gray-200 rounded-lg p-6">
            <h2 className="text-sm font-semibold text-travefy-navy mb-4">Issues</h2>
            <div className="space-y-3">
              {[
                { label: 'Bounced', value: campaign.bounced, icon: <TrendingDown className="w-4 h-4 text-travefy-warning" />, danger: campaign.bounced > 5 },
                { label: 'Unsubscribed', value: campaign.unsubscribed, icon: <UserMinus className="w-4 h-4 text-travefy-danger" />, danger: campaign.unsubscribed > 3 },
                { label: 'Unsubscribe rate', value: `${unsubRate}%`, icon: <UserMinus className="w-4 h-4 text-travefy-gray-400" />, danger: Number(unsubRate) > 1 },
              ].map(({ label, value, icon, danger }) => (
                <div key={label} className="flex items-center justify-between py-2 border-b border-travefy-gray-100 last:border-0">
                  <div className="flex items-center gap-2">
                    {icon}
                    <span className="text-sm text-travefy-gray-700">{label}</span>
                  </div>
                  <span className={`text-sm font-semibold ${danger ? 'text-travefy-danger' : 'text-travefy-navy'}`}>
                    {typeof value === 'number' ? value.toLocaleString() : value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
