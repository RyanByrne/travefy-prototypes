import { clsx } from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'
import { Info, CheckCircle, AlertTriangle, XCircle, X } from 'lucide-react'

type AlertVariant = 'info' | 'success' | 'warning' | 'danger'

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant
  title?: string
  onDismiss?: () => void
  children?: ReactNode
}

const icons: Record<AlertVariant, typeof Info> = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  danger: XCircle,
}

export function Alert({
  variant = 'info',
  title,
  onDismiss,
  children,
  className,
  ...props
}: AlertProps) {
  const Icon = icons[variant]

  return (
    <div
      role="alert"
      className={clsx(
        'flex gap-3 rounded-lg border p-4 text-sm',
        {
          'bg-travefy-blue-light border-travefy-blue/30 text-travefy-navy':
            variant === 'info',
          'bg-green-50 border-green-200 text-green-900':
            variant === 'success',
          'bg-yellow-50 border-yellow-200 text-yellow-900':
            variant === 'warning',
          'bg-red-50 border-red-200 text-red-900':
            variant === 'danger',
        },
        className,
      )}
      {...props}
    >
      <Icon
        className={clsx('w-5 h-5 shrink-0 mt-0.5', {
          'text-travefy-blue': variant === 'info',
          'text-green-600': variant === 'success',
          'text-yellow-600': variant === 'warning',
          'text-red-600': variant === 'danger',
        })}
      />
      <div className="flex-1 min-w-0">
        {title && <p className="font-semibold mb-0.5">{title}</p>}
        {children && <div>{children}</div>}
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="shrink-0 opacity-60 hover:opacity-100 transition-opacity -mt-0.5 -mr-1"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
