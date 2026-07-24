import { useEffect, useState } from 'react'
import { Input, Select } from '../../shared/components'

const OTHER = '__other__'

/**
 * Reason field for an adjustment: a dropdown of prepopulated reasons plus an
 * "Other…" option that reveals a free-text input. If `value` isn't a known
 * option (e.g. a seeded custom reason), it's shown under "Other…" with the text
 * preserved and editable.
 */
export function ReasonSelect({
  value,
  onChange,
  options,
  label = 'Reason / Description',
  placeholder = 'Select a reason',
}: {
  value: string
  onChange: (v: string) => void
  options: readonly string[]
  label?: string
  placeholder?: string
}) {
  const isKnown = value === '' || options.includes(value)
  const [other, setOther] = useState(!isKnown)

  // Collapse the free-text input if the value is set to a known option elsewhere.
  useEffect(() => {
    if (value !== '' && options.includes(value)) setOther(false)
  }, [value, options])

  return (
    <div className="space-y-2">
      <Select
        label={label}
        value={other ? OTHER : value}
        onChange={(e) => {
          const v = e.target.value
          if (v === OTHER) { setOther(true); onChange('') }
          else { setOther(false); onChange(v) }
        }}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
        <option value={OTHER}>Other…</option>
      </Select>
      {other && (
        <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Enter reason" aria-label="Custom reason" />
      )}
    </div>
  )
}
