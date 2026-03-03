import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'

interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string
  size?: 'sm' | 'md'
}

export function Toggle({ label, size = 'md', className, id, ...props }: ToggleProps) {
  const toggleId = id || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <label
      htmlFor={toggleId}
      className={clsx('inline-flex items-center gap-2 cursor-pointer', className)}
    >
      <div className="relative">
        <input
          id={toggleId}
          type="checkbox"
          role="switch"
          className="sr-only peer"
          {...props}
        />
        <div
          className={clsx(
            'rounded-full bg-travefy-gray-300 transition-colors',
            'peer-checked:bg-travefy-blue',
            'peer-disabled:opacity-50 peer-disabled:cursor-not-allowed',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-travefy-blue',
            {
              'w-9 h-5': size === 'sm',
              'w-11 h-6': size === 'md',
            },
          )}
        />
        <div
          className={clsx(
            'absolute top-0.5 left-0.5 rounded-full bg-white shadow transition-transform',
            'peer-checked:translate-x-full',
            {
              'w-4 h-4': size === 'sm',
              'w-5 h-5': size === 'md',
            },
          )}
        />
      </div>
      {label && (
        <span className="text-sm font-medium text-travefy-gray-800 select-none">
          {label}
        </span>
      )}
    </label>
  )
}
