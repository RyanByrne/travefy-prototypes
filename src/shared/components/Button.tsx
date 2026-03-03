import { clsx } from 'clsx'
import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center font-semibold rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-travefy-blue disabled:opacity-50 disabled:cursor-not-allowed',
        {
          'bg-travefy-blue text-white hover:bg-travefy-blue-dark':
            variant === 'primary',
          'bg-white text-travefy-gray-800 border border-travefy-gray-300 hover:bg-travefy-gray-50':
            variant === 'secondary',
          'text-travefy-gray-600 hover:text-travefy-gray-900 hover:bg-travefy-gray-100':
            variant === 'ghost',
          'bg-travefy-red text-white hover:bg-red-700 focus:ring-travefy-red':
            variant === 'danger',
          'text-travefy-blue underline-offset-2 hover:underline p-0 focus:ring-0 focus:ring-offset-0':
            variant === 'link',
        },
        variant !== 'link' && {
          'text-xs px-2 py-1': size === 'xs',
          'text-sm px-3 py-1.5': size === 'sm',
          'text-sm px-4 py-2': size === 'md',
          'text-base px-5 py-2.5': size === 'lg',
          'text-base px-6 py-3': size === 'xl',
        },
        className,
      )}
      {...props}
    />
  )
}
