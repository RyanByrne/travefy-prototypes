import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

type BadgeVariant = 'primary' | 'gray' | 'success' | 'warning' | 'danger'
type BadgeSize = 'sm' | 'md'
type BadgeShape = 'pill' | 'rounded'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  /** pill = fully rounded (default); rounded = 4px corner radius */
  shape?: BadgeShape
}

export function Badge({
  variant = 'gray',
  size = 'md',
  shape = 'rounded',
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center font-semibold border',
        // Shape — FannyPack "Rounded" (pill) vs "Rounded rectangle" (4px)
        shape === 'pill' ? 'rounded-full' : 'rounded',
        // Variant colors + borders — sourced from low-fi Figma designs
        variant === 'primary' && 'bg-travefy-blue-light border-travefy-primary-border text-travefy-primary-text',
        variant === 'gray'    && 'bg-travefy-gray-50 border-travefy-gray-200 text-travefy-gray-700',
        variant === 'success' && 'bg-travefy-success-bg border-travefy-success-border text-travefy-success-dark',
        variant === 'warning' && 'bg-travefy-warning-bg border-travefy-warning-border text-travefy-warning-dark',
        variant === 'danger'  && 'bg-travefy-danger-bg border-travefy-danger-border text-travefy-danger-dark',
        // Size — 14px font to match Figma spec
        size === 'sm' && 'text-sm px-3 py-0.5',
        size === 'md' && 'text-sm px-3 py-1',
        className,
      )}
      {...props}
    />
  )
}
