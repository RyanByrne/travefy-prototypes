import { clsx } from 'clsx'
import { Check, ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

interface ComboboxOption {
  value: string
  label: string
  separator?: boolean
}

interface ComboboxProps {
  value: string
  onChange: (value: string) => void
  options: ComboboxOption[]
  placeholder?: string
  disabled?: boolean
  className?: string
}

export function Combobox({ value, onChange, options, placeholder, disabled, className }: ComboboxProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const ref = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((opt) => opt.value === value)
  const filtered = options.filter((opt) => opt.label.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    if (!open) return
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
        setSearch('')
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  return (
    <div ref={ref} className={clsx('relative', className)}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen(!open)}
        className={clsx(
          'w-full flex items-center justify-between px-3 py-2 text-sm border rounded bg-white text-left',
          disabled ? 'bg-travefy-gray-50 text-travefy-gray-400 cursor-not-allowed' : 'hover:border-travefy-gray-300',
          open ? 'border-travefy-blue ring-2 ring-travefy-blue/20' : 'border-travefy-gray-200'
        )}
      >
        <span className={clsx(selectedOption ? 'text-travefy-gray-900' : 'text-travefy-gray-400')}>
          {selectedOption?.label ?? placeholder ?? 'Select...'}
        </span>
        <ChevronDown className={clsx('w-4 h-4 transition-transform', open && 'rotate-180')} />
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-travefy-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
          <div className="p-2 border-b border-travefy-gray-100">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full px-3 py-1.5 text-sm border border-travefy-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
              autoFocus
            />
          </div>
          <div className="py-1">
            {filtered.length === 0 ? (
              <div className="px-3 py-2 text-sm text-travefy-gray-400">No results</div>
            ) : (
              filtered.map((opt, idx) => (
                <div key={opt.value}>
                  {opt.separator && idx > 0 && <div className="my-1 border-t border-travefy-gray-100" />}
                  <button
                    type="button"
                    onClick={() => {
                      onChange(opt.value)
                      setOpen(false)
                      setSearch('')
                    }}
                    className={clsx(
                      'w-full flex items-center gap-2 px-3 py-2 text-sm text-left hover:bg-travefy-gray-50 transition-colors',
                      opt.value === value && 'bg-travefy-blue-light'
                    )}
                  >
                    <span className="flex-1">{opt.label}</span>
                    {opt.value === value && <Check className="w-4 h-4 text-travefy-blue" />}
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
