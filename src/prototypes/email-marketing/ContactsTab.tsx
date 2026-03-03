import { clsx } from 'clsx'
import { Filter, MoreHorizontal, Plus, Search, X } from 'lucide-react'
import { useState } from 'react'
import { Avatar } from '../../shared/components'
import { contacts } from './data'

const travelingColor: Record<string, string> = {
  Upcoming: 'text-travefy-blue',
  Currently: 'text-travefy-success',
  Past: 'text-travefy-gray-500',
}

export function ContactsTab() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const filtered = contacts.filter(
    (c) =>
      `${c.firstName} ${c.lastName}`.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()),
  )

  const allSelected = filtered.length > 0 && filtered.every((c) => selected.has(c.id))
  const toggleAll = () => setSelected(allSelected ? new Set() : new Set(filtered.map((c) => c.id)))
  const toggleRow = (id: string) =>
    setSelected((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n })

  return (
    <div className="p-5">
      <div className="bg-white border border-travefy-gray-200 rounded-lg">
        {/* Toolbar */}
        <div className="flex items-center gap-3 p-4 border-b border-travefy-gray-100">
          <button className="flex items-center gap-2 px-4 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors shrink-0">
            <Plus className="w-4 h-4" />
            New Contact
          </button>

          <div className="flex items-center gap-2 flex-1 max-w-sm">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-travefy-gray-400" />
              <input
                type="text"
                placeholder="Search contacts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-travefy-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-travefy-blue/20 focus:border-travefy-blue"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-travefy-gray-400 hover:text-travefy-gray-600">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            <button className="px-3 py-2 border border-travefy-gray-300 rounded text-sm font-semibold text-travefy-gray-700 hover:bg-travefy-gray-50 transition-colors">
              Search
            </button>
          </div>

          <span className="text-sm text-travefy-gray-500 flex-1">
            Showing {filtered.length} contacts
          </span>

          <div className="flex items-center gap-2 ml-auto">
            <button className="flex items-center gap-2 px-3 py-2 border border-travefy-gray-300 rounded text-sm font-semibold text-travefy-gray-700 hover:bg-travefy-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              Filters (0)
            </button>
            <button className="p-2 border border-travefy-gray-300 rounded text-travefy-gray-500 hover:bg-travefy-gray-50 transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bulk actions */}
        {selected.size > 0 && (
          <div className="flex items-center gap-3 px-4 py-2.5 bg-travefy-blue-light border-b border-travefy-blue/20 text-sm">
            <span className="font-semibold text-travefy-blue">{selected.size} selected</span>
            <div className="flex gap-2 ml-2">
              <button className="px-3 py-1.5 rounded border border-travefy-blue/30 text-travefy-blue font-semibold hover:bg-travefy-blue/10 transition-colors">
                Email Contacts
              </button>
              <button className="px-3 py-1.5 rounded border border-travefy-blue/30 text-travefy-blue font-semibold hover:bg-travefy-blue/10 transition-colors">
                Add to List
              </button>
              <button onClick={() => setSelected(new Set())} className="px-3 py-1.5 rounded border border-travefy-danger-bg text-travefy-danger font-semibold hover:bg-travefy-danger-bg transition-colors">
                Remove Contacts
              </button>
            </div>
            <button onClick={() => setSelected(new Set())} className="ml-auto text-travefy-gray-500 hover:text-travefy-gray-700">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-travefy-gray-100">
                <th className="w-10 px-4 py-3">
                  <input type="checkbox" checked={allSelected} onChange={toggleAll} className="rounded border-travefy-gray-300 text-travefy-blue" />
                </th>
                {['First Name', 'Last Name', 'Phone Number', 'Email', 'Trips', 'Traveling', 'Last Updated'].map((col) => (
                  <th key={col} className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">
                    {col}
                  </th>
                ))}
                <th className="w-12 px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => {
                const isSelected = selected.has(c.id)
                return (
                  <tr
                    key={c.id}
                    className={clsx(
                      'border-b border-travefy-gray-100 cursor-pointer transition-colors',
                      isSelected ? 'bg-travefy-blue-light' : 'hover:bg-travefy-gray-50',
                    )}
                  >
                    <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" checked={isSelected} onChange={() => toggleRow(c.id)} className="rounded border-travefy-gray-300 text-travefy-blue" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Avatar name={`${c.firstName} ${c.lastName}`} size="sm" />
                        <span className="font-medium text-travefy-navy">{c.firstName}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-travefy-gray-700">{c.lastName}</td>
                    <td className="px-4 py-3 text-travefy-blue">{c.phone}</td>
                    <td className="px-4 py-3 text-travefy-gray-500">{c.email}</td>
                    <td className="px-4 py-3 text-center text-travefy-gray-700">{c.trips ?? '—'}</td>
                    <td className={clsx('px-4 py-3 font-medium', c.traveling ? travelingColor[c.traveling] : 'text-travefy-gray-400')}>
                      {c.traveling ?? '—'}
                    </td>
                    <td className="px-4 py-3 text-travefy-gray-500">{c.lastUpdated}</td>
                    <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                      <button className="p-1.5 rounded hover:bg-travefy-gray-100 text-travefy-gray-400 hover:text-travefy-gray-700 transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
