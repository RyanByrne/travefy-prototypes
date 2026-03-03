import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
}

export function Spinner({ size = 'md', className, ...props }: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={clsx(
        'inline-block rounded-full border-2 border-travefy-gray-200 border-t-travefy-blue animate-spin',
        {
          'w-4 h-4': size === 'sm',
          'w-6 h-6': size === 'md',
          'w-8 h-8 border-[3px]': size === 'lg',
        },
        className,
      )}
      {...props}
    />
  )
}
