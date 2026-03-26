import { clsx } from 'clsx'
import {
  AlertTriangle,
  Calendar,
  Check,
  CheckCircle,
  Clock,
  Loader2,
  Mail,
  Send,
  Users,
  XCircle,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button, Input, Modal } from '../../shared/components'

// ── Types ────────────────────────────────────────────────────────────────────

interface CampaignMeta {
  campaignName: string
  subjectLine: string
  recipientCount: number
  hasConditions: boolean
}

// ── Validation ───────────────────────────────────────────────────────────────

interface ValidationIssue {
  field: string
  message: string
  severity: 'error' | 'warning'
}

function validateCampaign(meta: CampaignMeta): ValidationIssue[] {
  const issues: ValidationIssue[] = []

  if (!meta.campaignName.trim()) {
    issues.push({ field: 'Campaign Name', message: 'Campaign name is required', severity: 'error' })
  }
  if (!meta.subjectLine.trim()) {
    issues.push({ field: 'Subject Line', message: 'Subject line is required', severity: 'error' })
  }
  if (meta.subjectLine.length > 80) {
    issues.push({ field: 'Subject Line', message: `Subject line is ${meta.subjectLine.length} characters — may be truncated in some inboxes`, severity: 'warning' })
  }
  if (meta.recipientCount === 0) {
    issues.push({ field: 'Recipients', message: 'No contacts match the current criteria', severity: 'error' })
  }
  if (!meta.hasConditions) {
    issues.push({ field: 'Recipients', message: 'No audience criteria set — this will send to all contacts', severity: 'warning' })
  }

  return issues
}

// ── Shared review summary ────────────────────────────────────────────────────

function CampaignReviewSummary({ meta }: { meta: CampaignMeta }) {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-travefy-gray-50 rounded-lg p-3">
          <p className="text-xs font-semibold text-travefy-gray-500 uppercase tracking-wide mb-1">Campaign</p>
          <p className="text-sm font-medium text-travefy-navy truncate">{meta.campaignName || '—'}</p>
        </div>
        <div className="bg-travefy-gray-50 rounded-lg p-3">
          <p className="text-xs font-semibold text-travefy-gray-500 uppercase tracking-wide mb-1">Recipients</p>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-travefy-blue" />
            <p className="text-sm font-medium text-travefy-navy">{meta.recipientCount.toLocaleString()} contacts</p>
          </div>
        </div>
      </div>
      <div className="bg-travefy-gray-50 rounded-lg p-3">
        <p className="text-xs font-semibold text-travefy-gray-500 uppercase tracking-wide mb-1">Subject Line</p>
        <p className="text-sm text-travefy-navy">{meta.subjectLine || '—'}</p>
      </div>
    </div>
  )
}

function ValidationList({ issues }: { issues: ValidationIssue[] }) {
  if (issues.length === 0) return null

  const errors = issues.filter((i) => i.severity === 'error')
  const warnings = issues.filter((i) => i.severity === 'warning')

  return (
    <div className="space-y-2 mt-4">
      {errors.map((issue, i) => (
        <div key={`e-${i}`} className="flex items-start gap-2 px-3 py-2 rounded-lg bg-travefy-danger-bg text-sm">
          <XCircle className="w-4 h-4 text-travefy-danger shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-travefy-danger">{issue.field}:</span>{' '}
            <span className="text-travefy-danger">{issue.message}</span>
          </div>
        </div>
      ))}
      {warnings.map((issue, i) => (
        <div key={`w-${i}`} className="flex items-start gap-2 px-3 py-2 rounded-lg bg-travefy-warning-bg text-sm">
          <AlertTriangle className="w-4 h-4 text-travefy-warning shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-travefy-warning-dark">{issue.field}:</span>{' '}
            <span className="text-travefy-warning-dark">{issue.message}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Send Test Email Modal ────────────────────────────────────────────────────

export function SendTestModal({
  open,
  onClose,
  meta,
}: {
  open: boolean
  onClose: () => void
  meta: CampaignMeta
}) {
  const [testEmail, setTestEmail] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSendTest = () => {
    if (!testEmail) return
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
    }, 1500)
  }

  const handleClose = () => {
    setTestEmail('')
    setSending(false)
    setSent(false)
    onClose()
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title="Send Test Email"
      size="sm"
      footer={
        sent ? (
          <><div /><Button onClick={handleClose}>Done</Button></>
        ) : (
          <>
            <Button variant="link" onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSendTest} disabled={!testEmail || sending}>
              {sending ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </span>
              ) : (
                'Send Test'
              )}
            </Button>
          </>
        )
      }
    >
      {sent ? (
        <div className="text-center py-4">
          <div className="w-12 h-12 rounded-full bg-travefy-success-bg flex items-center justify-center mx-auto mb-3">
            <CheckCircle className="w-6 h-6 text-travefy-success" />
          </div>
          <p className="text-sm font-semibold text-travefy-navy">Test email sent!</p>
          <p className="text-xs text-travefy-gray-500 mt-1">Check your inbox at <strong>{testEmail}</strong></p>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-travefy-gray-600">
            Send a preview of <strong className="text-travefy-navy">{meta.campaignName || 'this campaign'}</strong> to
            verify it looks correct before launching.
          </p>
          <Input
            label="Recipient Email"
            type="email"
            placeholder="you@example.com"
            value={testEmail}
            onChange={(e) => setTestEmail(e.target.value)}
            leadingIcon={<Mail className="w-4 h-4" />}
          />
          <div className="bg-travefy-gray-50 rounded-lg p-3">
            <p className="text-xs text-travefy-gray-500">
              <strong>Subject:</strong> {meta.subjectLine || '(no subject)'}
            </p>
          </div>
        </div>
      )}
    </Modal>
  )
}

// ── Confirm Send Modal ───────────────────────────────────────────────────────

type SendStep = 'review' | 'sending' | 'done'

export function ConfirmSendModal({
  open,
  onClose,
  onConfirm,
  meta,
}: {
  open: boolean
  onClose: () => void
  onConfirm: () => void
  meta: CampaignMeta
}) {
  const [step, setStep] = useState<SendStep>('review')
  const issues = validateCampaign(meta)
  const hasErrors = issues.some((i) => i.severity === 'error')

  useEffect(() => {
    if (open) setStep('review')
  }, [open])

  const handleConfirm = () => {
    setStep('sending')
    setTimeout(() => {
      setStep('done')
      setTimeout(() => {
        onConfirm()
      }, 1200)
    }, 2000)
  }

  return (
    <Modal
      open={open}
      onClose={step === 'sending' ? () => {} : onClose}
      title={step === 'review' ? 'Review & Send' : step === 'sending' ? 'Sending Campaign' : 'Campaign Sent'}
      size="sm"
      footer={
        step === 'review' ? (
          <>
            <Button variant="link" onClick={onClose}>Cancel</Button>
            <Button onClick={handleConfirm} disabled={hasErrors}>
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Send to {meta.recipientCount.toLocaleString()} contacts
              </span>
            </Button>
          </>
        ) : undefined
      }
    >
      {step === 'review' && (
        <div>
          <CampaignReviewSummary meta={meta} />
          <ValidationList issues={issues} />
          {!hasErrors && issues.length === 0 && (
            <div className="flex items-center gap-2 mt-4 px-3 py-2 rounded-lg bg-travefy-success-bg text-sm">
              <CheckCircle className="w-4 h-4 text-travefy-success shrink-0" />
              <span className="text-travefy-success">All checks passed — ready to send</span>
            </div>
          )}
        </div>
      )}

      {step === 'sending' && (
        <div className="text-center py-8">
          <SendingProgress recipientCount={meta.recipientCount} />
        </div>
      )}

      {step === 'done' && (
        <div className="text-center py-6">
          <div className="w-14 h-14 rounded-full bg-travefy-success-bg flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-travefy-success" />
          </div>
          <h3 className="text-lg font-semibold text-travefy-navy">Campaign Sent!</h3>
          <p className="text-sm text-travefy-gray-500 mt-1">
            {meta.recipientCount.toLocaleString()} emails are being delivered
          </p>
        </div>
      )}
    </Modal>
  )
}

// ── Sending progress animation ───────────────────────────────────────────────

function SendingProgress({ recipientCount }: { recipientCount: number }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + Math.random() * 15 + 5
      })
    }, 300)
    return () => clearInterval(interval)
  }, [])

  const clamped = Math.min(progress, 100)
  const sent = Math.floor((clamped / 100) * recipientCount)

  return (
    <div>
      <Loader2 className="w-10 h-10 text-travefy-blue animate-spin mx-auto mb-4" />
      <p className="text-sm font-semibold text-travefy-navy">Sending campaign...</p>
      <p className="text-xs text-travefy-gray-500 mt-1 mb-4">
        {sent.toLocaleString()} of {recipientCount.toLocaleString()} emails sent
      </p>
      <div className="w-full bg-travefy-gray-200 rounded-full h-2 max-w-xs mx-auto overflow-hidden">
        <div
          className="h-full bg-travefy-blue rounded-full transition-all duration-300"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}

// ── Schedule Modal ───────────────────────────────────────────────────────────

type ScheduleStep = 'config' | 'review' | 'confirming' | 'done'

export function ScheduleModal({
  open,
  onClose,
  onConfirm,
  meta,
}: {
  open: boolean
  onClose: () => void
  onConfirm: () => void
  meta: CampaignMeta
}) {
  const [step, setStep] = useState<ScheduleStep>('config')
  const [scheduleDate, setScheduleDate] = useState('')
  const [scheduleTime, setScheduleTime] = useState('')
  const [timezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone)

  const issues = validateCampaign(meta)
  const hasErrors = issues.some((i) => i.severity === 'error')

  useEffect(() => {
    if (open) {
      setStep('config')
      setScheduleDate('')
      setScheduleTime('')
    }
  }, [open])

  const canProceed = scheduleDate && scheduleTime
  const formattedDate = scheduleDate && scheduleTime
    ? new Date(`${scheduleDate}T${scheduleTime}`).toLocaleString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      })
    : ''

  const handleReview = () => setStep('review')

  const handleConfirm = () => {
    setStep('confirming')
    setTimeout(() => {
      setStep('done')
      setTimeout(() => onConfirm(), 1200)
    }, 1000)
  }

  return (
    <Modal
      open={open}
      onClose={step === 'confirming' ? () => {} : onClose}
      title={
        step === 'config' ? 'Schedule Campaign' :
        step === 'review' ? 'Confirm Schedule' :
        step === 'confirming' ? 'Scheduling...' :
        'Campaign Scheduled'
      }
      size="sm"
      footer={
        step === 'config' ? (
          <>
            <Button variant="link" onClick={onClose}>Cancel</Button>
            <Button onClick={handleReview} disabled={!canProceed}>
              Review Schedule
            </Button>
          </>
        ) : step === 'review' ? (
          <>
            <Button variant="link" onClick={() => setStep('config')}>Back</Button>
            <Button onClick={handleConfirm} disabled={hasErrors}>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Confirm Schedule
              </span>
            </Button>
          </>
        ) : undefined
      }
    >
      {step === 'config' && (
        <div className="space-y-4">
          <p className="text-sm text-travefy-gray-600">
            Choose when to send <strong className="text-travefy-navy">{meta.campaignName || 'this campaign'}</strong>.
          </p>
          <Input
            label="Date"
            type="date"
            value={scheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
            leadingIcon={<Calendar className="w-4 h-4" />}
          />
          <Input
            label="Time"
            type="time"
            value={scheduleTime}
            onChange={(e) => setScheduleTime(e.target.value)}
            leadingIcon={<Clock className="w-4 h-4" />}
          />
          <p className="text-xs text-travefy-gray-400">
            Timezone: {timezone}
          </p>
        </div>
      )}

      {step === 'review' && (
        <div>
          <CampaignReviewSummary meta={meta} />
          <div className="mt-4 bg-travefy-blue-light rounded-lg p-4 flex items-start gap-3">
            <Calendar className="w-5 h-5 text-travefy-blue shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-travefy-navy">Scheduled for</p>
              <p className="text-sm text-travefy-blue">{formattedDate}</p>
              <p className="text-xs text-travefy-gray-500 mt-0.5">{timezone}</p>
            </div>
          </div>
          <ValidationList issues={issues} />
          {!hasErrors && issues.length === 0 && (
            <div className="flex items-center gap-2 mt-4 px-3 py-2 rounded-lg bg-travefy-success-bg text-sm">
              <CheckCircle className="w-4 h-4 text-travefy-success shrink-0" />
              <span className="text-travefy-success">All checks passed — ready to schedule</span>
            </div>
          )}
        </div>
      )}

      {step === 'confirming' && (
        <div className="text-center py-8">
          <Loader2 className="w-10 h-10 text-travefy-blue animate-spin mx-auto mb-4" />
          <p className="text-sm font-semibold text-travefy-navy">Scheduling campaign...</p>
        </div>
      )}

      {step === 'done' && (
        <div className="text-center py-6">
          <div className="w-14 h-14 rounded-full bg-travefy-success-bg flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-travefy-success" />
          </div>
          <h3 className="text-lg font-semibold text-travefy-navy">Campaign Scheduled!</h3>
          <p className="text-sm text-travefy-gray-500 mt-1">{formattedDate}</p>
          <p className="text-xs text-travefy-gray-400 mt-0.5">
            {meta.recipientCount.toLocaleString()} contacts will receive this email
          </p>
        </div>
      )}
    </Modal>
  )
}

// ── Success screen (full-page, shown after modal completes) ──────────────────

export function CampaignSuccessScreen({
  type,
  recipientCount,
  scheduledFor,
}: {
  type: 'sent' | 'scheduled'
  recipientCount: number
  scheduledFor?: string
}) {
  const [showChecks, setShowChecks] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowChecks(true), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="flex-1 flex items-center justify-center bg-travefy-gray-50">
      <div className="text-center max-w-sm">
        <div className={clsx(
          'w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500',
          showChecks ? 'bg-travefy-success-bg scale-100 opacity-100' : 'bg-travefy-gray-100 scale-75 opacity-0',
        )}>
          {type === 'sent'
            ? <Send className="w-9 h-9 text-travefy-success" />
            : <Calendar className="w-9 h-9 text-travefy-success" />
          }
        </div>

        <h2 className={clsx(
          'text-2xl font-bold text-travefy-navy transition-all duration-500 delay-150',
          showChecks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
        )}>
          {type === 'sent' ? 'Campaign Sent!' : 'Campaign Scheduled!'}
        </h2>

        <p className={clsx(
          'text-sm text-travefy-gray-500 mt-2 transition-all duration-500 delay-300',
          showChecks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
        )}>
          {type === 'sent'
            ? `${recipientCount.toLocaleString()} emails are being delivered now`
            : `${recipientCount.toLocaleString()} emails will be sent ${scheduledFor ?? 'at the scheduled time'}`
          }
        </p>

        <div className={clsx(
          'mt-6 space-y-2 transition-all duration-500 delay-500',
          showChecks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
        )}>
          {[
            'Campaign validated',
            'Recipients confirmed',
            type === 'sent' ? 'Delivery started' : 'Schedule confirmed',
          ].map((label) => (
            <div key={label} className="flex items-center gap-2 justify-center text-sm text-travefy-success">
              <Check className="w-4 h-4" />
              {label}
            </div>
          ))}
        </div>

        <p className={clsx(
          'text-xs text-travefy-gray-400 mt-6 transition-all duration-500 delay-700',
          showChecks ? 'opacity-100' : 'opacity-0',
        )}>
          Redirecting to campaigns...
        </p>
      </div>
    </div>
  )
}
