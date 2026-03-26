import { clsx } from 'clsx'
import { Plus, Trash2, X } from 'lucide-react'
import { useState } from 'react'
import { contactLists, contacts } from './data'

// ── Types ────────────────────────────────────────────────────────────────────

export type ConditionField = 'label' | 'traveling' | 'has_trips'
export type ConditionOperator = 'is' | 'is_not' | 'is_any_of'

export interface Condition {
  id: string
  field: ConditionField
  operator: ConditionOperator
  values: string[]
}

// ── Constants ────────────────────────────────────────────────────────────────

const ALL_LABELS = Array.from(
  new Set(contactLists.flatMap((l) => l.labels)),
).sort()

const TRAVELING_OPTIONS = ['Upcoming', 'Currently', 'Past'] as const

const FIELD_OPTIONS: { value: ConditionField; label: string }[] = [
  { value: 'label', label: 'Label' },
  { value: 'traveling', label: 'Travel Status' },
  { value: 'has_trips', label: 'Has Trips' },
]

const OPERATOR_OPTIONS: Record<ConditionField, { value: ConditionOperator; label: string }[]> = {
  label: [
    { value: 'is_any_of', label: 'is any of' },
    { value: 'is', label: 'is' },
    { value: 'is_not', label: 'is not' },
  ],
  traveling: [
    { value: 'is', label: 'is' },
    { value: 'is_not', label: 'is not' },
  ],
  has_trips: [
    { value: 'is', label: 'is' },
  ],
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function getValueOptions(field: ConditionField): string[] {
  if (field === 'label') return ALL_LABELS
  if (field === 'traveling') return [...TRAVELING_OPTIONS]
  if (field === 'has_trips') return ['Yes', 'No']
  return []
}

export function makeConditionId() {
  return `cond-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`
}

export function estimateMatchCount(conditions: Condition[]): number {
  if (conditions.length === 0) return contacts.length

  return contacts.filter((contact) => {
    return conditions.every((cond) => {
      if (cond.values.length === 0) return true

      if (cond.field === 'traveling') {
        const val = contact.traveling ?? ''
        if (cond.operator === 'is') return cond.values.includes(val)
        if (cond.operator === 'is_not') return !cond.values.includes(val)
      }

      if (cond.field === 'has_trips') {
        const hasTrips = (contact.trips ?? 0) > 0
        const wantsTrips = cond.values.includes('Yes')
        return cond.operator === 'is' ? hasTrips === wantsTrips : hasTrips !== wantsTrips
      }

      // Labels don't directly map to contacts, so estimate from lists
      return true
    })
  }).length
}

// ── Sub-components ───────────────────────────────────────────────────────────

function LabelPill({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-travefy-blue-light text-travefy-blue text-xs font-medium rounded">
      {label}
      <button onClick={onRemove} className="hover:text-travefy-blue-dark transition-colors">
        <X className="w-3 h-3" />
      </button>
    </span>
  )
}

function ConditionRow({
  condition,
  index,
  onUpdate,
  onRemove,
}: {
  condition: Condition
  index: number
  onUpdate: (c: Condition) => void
  onRemove: () => void
}) {
  const [valueDropdownOpen, setValueDropdownOpen] = useState(false)
  const valueOptions = getValueOptions(condition.field)
  const operators = OPERATOR_OPTIONS[condition.field]

  const handleFieldChange = (field: ConditionField) => {
    onUpdate({
      ...condition,
      field,
      operator: OPERATOR_OPTIONS[field][0].value,
      values: [],
    })
  }

  const toggleValue = (val: string) => {
    const isMulti = condition.operator === 'is_any_of'
    if (isMulti) {
      const next = condition.values.includes(val)
        ? condition.values.filter((v) => v !== val)
        : [...condition.values, val]
      onUpdate({ ...condition, values: next })
    } else {
      onUpdate({ ...condition, values: [val] })
      setValueDropdownOpen(false)
    }
  }

  return (
    <div className="flex items-start gap-2">
      <span className="shrink-0 w-12 py-2 text-xs font-semibold text-travefy-gray-400 uppercase">
        {index === 0 ? 'Where' : 'And'}
      </span>

      <div className="flex-1 flex flex-wrap items-start gap-2">
        <select
          value={condition.field}
          onChange={(e) => handleFieldChange(e.target.value as ConditionField)}
          className="h-8 px-2 border border-travefy-gray-300 rounded text-sm text-travefy-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-travefy-blue/30"
        >
          {FIELD_OPTIONS.map((f) => (
            <option key={f.value} value={f.value}>{f.label}</option>
          ))}
        </select>

        <select
          value={condition.operator}
          onChange={(e) => onUpdate({ ...condition, operator: e.target.value as ConditionOperator, values: [] })}
          className="h-8 px-2 border border-travefy-gray-300 rounded text-sm text-travefy-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-travefy-blue/30"
        >
          {operators.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>

        <div className="relative flex-1 min-w-[160px]">
          <div
            onClick={() => setValueDropdownOpen((v) => !v)}
            className="min-h-[32px] px-2 py-1 border border-travefy-gray-300 rounded bg-white cursor-pointer flex flex-wrap items-center gap-1"
          >
            {condition.values.length === 0 && (
              <span className="text-sm text-travefy-gray-400">Select...</span>
            )}
            {condition.values.map((v) => (
              <LabelPill key={v} label={v} onRemove={() => toggleValue(v)} />
            ))}
          </div>

          {valueDropdownOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setValueDropdownOpen(false)} />
              <div className="absolute left-0 top-full mt-1 z-20 bg-white border border-travefy-gray-200 rounded-lg shadow-lg py-1 w-full max-h-48 overflow-y-auto">
                {valueOptions.map((val) => {
                  const selected = condition.values.includes(val)
                  return (
                    <button
                      key={val}
                      onClick={() => toggleValue(val)}
                      className={clsx(
                        'w-full px-3 py-2 text-left text-sm flex items-center gap-2 transition-colors',
                        selected
                          ? 'bg-travefy-blue-light text-travefy-blue font-medium'
                          : 'text-travefy-gray-700 hover:bg-travefy-gray-50',
                      )}
                    >
                      {condition.operator === 'is_any_of' && (
                        <div className={clsx(
                          'w-4 h-4 rounded border flex items-center justify-center text-white text-xs shrink-0',
                          selected ? 'bg-travefy-blue border-travefy-blue' : 'border-travefy-gray-300',
                        )}>
                          {selected && '✓'}
                        </div>
                      )}
                      {val}
                    </button>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </div>

      <button
        onClick={onRemove}
        className="shrink-0 w-8 h-8 flex items-center justify-center rounded text-travefy-gray-400 hover:text-travefy-danger hover:bg-travefy-danger-bg transition-colors"
      >
        <Trash2 className="w-3.5 h-3.5" />
      </button>
    </div>
  )
}

// ── Main component ───────────────────────────────────────────────────────────

export function AudienceCriteriaBuilder({
  conditions,
  onChange,
}: {
  conditions: Condition[]
  onChange: (c: Condition[]) => void
}) {
  const matchCount = estimateMatchCount(conditions)

  const addCondition = () => {
    onChange([
      ...conditions,
      { id: makeConditionId(), field: 'label', operator: 'is_any_of', values: [] },
    ])
  }

  const updateCondition = (id: string, updated: Condition) => {
    onChange(conditions.map((c) => (c.id === id ? updated : c)))
  }

  const removeCondition = (id: string) => {
    onChange(conditions.filter((c) => c.id !== id))
  }

  return (
    <div>
      <label className="block text-sm font-semibold text-travefy-gray-700 mb-2">Recipients</label>
      <div className="border border-travefy-gray-200 rounded-lg bg-travefy-gray-50 p-3 space-y-2">
        {conditions.length === 0 && (
          <p className="text-xs text-travefy-gray-400 py-1">
            No conditions — all contacts will be included.
          </p>
        )}

        {conditions.map((cond, i) => (
          <ConditionRow
            key={cond.id}
            condition={cond}
            index={i}
            onUpdate={(c) => updateCondition(cond.id, c)}
            onRemove={() => removeCondition(cond.id)}
          />
        ))}

        <button
          onClick={addCondition}
          className="flex items-center gap-1.5 text-xs font-semibold text-travefy-blue hover:text-travefy-blue-dark transition-colors mt-1"
        >
          <Plus className="w-3.5 h-3.5" />
          Add condition
        </button>
      </div>

      <p className="text-xs text-travefy-gray-500 mt-1.5">
        <span className="font-medium text-travefy-navy">{matchCount.toLocaleString()}</span> contacts match{conditions.length > 0 ? ' these criteria' : ''}
      </p>
    </div>
  )
}
