import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  error?: string
}

export function Checkbox({ label, error, className, id, ...props }: CheckboxProps) {
  const checkboxId = id || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className={clsx('space-y-1', className)}>
      <label
        htmlFor={checkboxId}
        className="inline-flex items-center gap-2 cursor-pointer group"
      >
        <input
          id={checkboxId}
          type="checkbox"
          className={clsx(
            'w-4 h-4 rounded border text-travefy-blue cursor-pointer',
            'focus:ring-2 focus:ring-travefy-blue/20 focus:ring-offset-0',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error ? 'border-travefy-red' : 'border-travefy-gray-300',
          )}
          {...props}
        />
        {label && (
          <span className="text-sm font-medium text-travefy-gray-800 select-none group-has-[:disabled]:opacity-50">
            {label}
          </span>
        )}
      </label>
      {error && <p className="text-xs text-travefy-red">{error}</p>}
    </div>
  )
}
