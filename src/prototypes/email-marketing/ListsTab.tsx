import { clsx } from 'clsx'
import { Filter, MoreHorizontal, Plus, Search, Users, X } from 'lucide-react'
import { useState } from 'react'
import { Badge } from '../../shared/components'
import { contactLists } from './data'

type BadgeVariant = 'primary' | 'gray' | 'success' | 'warning' | 'danger'
const LABEL_VARIANTS: BadgeVariant[] = ['primary', 'success', 'warning', 'danger', 'gray']

function labelVariant(label: string): BadgeVariant {
  let hash = 0
  for (const ch of label) hash = ch.charCodeAt(0) + ((hash << 5) - hash)
  return LABEL_VARIANTS[Math.abs(hash) % LABEL_VARIANTS.length]
}

export function ListsTab() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const filtered = contactLists.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.owner.toLowerCase().includes(search.toLowerCase()),
  )

  const allSelected = filtered.length > 0 && filtered.every((l) => selected.has(l.id))
  const toggleAll = () => setSelected(allSelected ? new Set() : new Set(filtered.map((l) => l.id)))
  const toggleRow = (id: string) =>
    setSelected((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n })

  return (
    <div className="p-5">
      <div className="bg-white border border-travefy-gray-200 rounded-lg">
        {/* Toolbar */}
        <div className="flex items-center gap-3 p-4 border-b border-travefy-gray-100">
          <button className="flex items-center gap-2 px-4 py-2 rounded bg-travefy-blue text-white text-sm font-semibold hover:bg-travefy-blue-dark transition-colors shrink-0">
            <Plus className="w-4 h-4" />
            New List
          </button>

          <div className="flex items-center gap-2 flex-1 max-w-sm">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-travefy-gray-400" />
              <input
                type="text"
                placeholder="Search lists..."
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
            {search ? `${filtered.length} of ${contactLists.length} lists` : `Showing ${contactLists.length} lists`}
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
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-travefy-blue/30 text-travefy-blue font-semibold hover:bg-travefy-blue/10 transition-colors">
                <Users className="w-3.5 h-3.5" /> Export
              </button>
              <button onClick={() => setSelected(new Set())} className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-travefy-danger-bg text-travefy-danger font-semibold hover:bg-travefy-danger-bg transition-colors">
                Delete
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
                <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">List Name</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Owner</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Labels</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Contacts</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Campaigns</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Last Updated</th>
                <th className="w-12 px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((list) => {
                const isSelected = selected.has(list.id)
                return (
                  <tr
                    key={list.id}
                    className={clsx(
                      'border-b border-travefy-gray-100 cursor-pointer transition-colors',
                      isSelected ? 'bg-travefy-blue-light' : 'hover:bg-travefy-gray-50',
                    )}
                  >
                    <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" checked={isSelected} onChange={() => toggleRow(list.id)} className="rounded border-travefy-gray-300 text-travefy-blue" />
                    </td>
                    <td className="px-4 py-3 font-medium text-travefy-navy">{list.name}</td>
                    <td className="px-4 py-3 text-travefy-gray-700">{list.owner}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {list.labels.map((label) => (
                          <Badge key={label} variant={labelVariant(label)} size="sm">{label}</Badge>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right text-travefy-gray-700">{list.contacts.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right text-travefy-gray-700">{list.campaigns}</td>
                    <td className="px-4 py-3 text-travefy-gray-500">{list.lastUpdated}</td>
                    <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                      <button className="p-1.5 rounded hover:bg-travefy-gray-100 text-travefy-gray-400 hover:text-travefy-gray-700 transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                )
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-4 py-12 text-center text-travefy-gray-500">
                    <Users className="w-8 h-8 mx-auto mb-2 opacity-30" />
                    <p className="font-semibold">No lists found</p>
                    <p className="text-xs mt-1">Create a list to start segmenting your contacts.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
