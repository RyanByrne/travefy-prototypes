import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg'
  shadow?: boolean
}

export function Card({ padding = 'md', shadow = false, className, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-white border border-travefy-gray-200 rounded-lg',
        {
          'p-0': padding === 'none',
          'p-3': padding === 'sm',
          'p-5': padding === 'md',
          'p-6': padding === 'lg',
          'shadow-lg': shadow,
        },
        className,
      )}
      {...props}
    />
  )
}
