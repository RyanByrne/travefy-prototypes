import { clsx } from 'clsx'
import type { InputHTMLAttributes, ReactNode } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  error?: string
  success?: string
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
}

export function Input({
  label,
  helperText,
  error,
  success,
  leadingIcon,
  trailingIcon,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
  const state = error ? 'error' : success ? 'success' : 'default'

  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-semibold text-travefy-gray-800"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {leadingIcon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-travefy-gray-400">
            {leadingIcon}
          </div>
        )}
        <input
          id={inputId}
          className={clsx(
            'block w-full rounded border px-3 py-2 text-sm text-travefy-gray-900 transition-colors',
            'placeholder:text-travefy-gray-400',
            'focus:outline-none focus:ring-2',
            'disabled:bg-travefy-gray-50 disabled:text-travefy-gray-500 disabled:cursor-not-allowed',
            {
              'border-travefy-gray-300 focus:border-travefy-blue focus:ring-travefy-blue/20':
                state === 'default',
              'border-travefy-red text-travefy-red focus:border-travefy-red focus:ring-travefy-red/20':
                state === 'error',
              'border-travefy-green focus:border-travefy-green focus:ring-travefy-green/20':
                state === 'success',
            },
            leadingIcon && 'pl-9',
            trailingIcon && 'pr-9',
            className,
          )}
          {...props}
        />
        {trailingIcon && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-travefy-gray-400">
            {trailingIcon}
          </div>
        )}
      </div>
      {helperText && !error && !success && (
        <p className="text-xs text-travefy-gray-500">{helperText}</p>
      )}
      {error && <p className="text-xs text-travefy-red">{error}</p>}
      {success && <p className="text-xs text-travefy-green">{success}</p>}
    </div>
  )
}
