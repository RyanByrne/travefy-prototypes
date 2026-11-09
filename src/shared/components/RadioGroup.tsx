import { clsx } from 'clsx'
import type { ReactNode } from 'react'

interface RadioGroupProps {
  children: ReactNode
  className?: string
}

export function RadioGroup({ children, className }: RadioGroupProps) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

interface RadioOptionProps {
  value: string
  checked: boolean
  onChange: (value: string) => void
  children: ReactNode
  className?: string
}

export function RadioOption({ value, checked, onChange, children, className }: RadioOptionProps) {
  return (
    <label
      className={clsx(
        'flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-all',
        checked ? 'border-travefy-blue bg-travefy-blue-light/30' : 'border-travefy-gray-200 hover:border-travefy-gray-300',
        className
      )}
    >
      <input
        type="radio"
        checked={checked}
        onChange={() => onChange(value)}
        className="mt-0.5 w-4 h-4 text-travefy-blue border-travefy-gray-300 focus:ring-travefy-blue"
      />
      <div className="flex-1">{children}</div>
    </label>
  )
}
