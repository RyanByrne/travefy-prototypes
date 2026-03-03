import { clsx } from 'clsx'
import type { SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  helperText?: string
  error?: string
}

export function Select({
  label,
  helperText,
  error,
  className,
  id,
  children,
  ...props
}: SelectProps) {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-semibold text-travefy-gray-800"
        >
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={clsx(
          'block w-full rounded border px-3 py-2 text-sm text-travefy-gray-900 bg-white transition-colors',
          'focus:outline-none focus:ring-2',
          'disabled:bg-travefy-gray-50 disabled:text-travefy-gray-500 disabled:cursor-not-allowed',
          error
            ? 'border-travefy-red focus:border-travefy-red focus:ring-travefy-red/20'
            : 'border-travefy-gray-300 focus:border-travefy-blue focus:ring-travefy-blue/20',
          className,
        )}
        {...props}
      >
        {children}
      </select>
      {helperText && !error && (
        <p className="text-xs text-travefy-gray-500">{helperText}</p>
      )}
      {error && <p className="text-xs text-travefy-red">{error}</p>}
    </div>
  )
}
