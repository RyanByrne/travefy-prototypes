import { useState } from 'react'
import { Settings, Eye, FileText, Plus, MoreVertical } from 'lucide-react'
import { mockAdvisorResponses } from '../mockData'

export function AdvisorResponses() {
  const [selectedTab, setSelectedTab] = useState('responses')

  const statusConfig = {
    purchased: { bg: '#DEF7EC', text: '#14673F', label: 'Purchased' },
    accepted: { bg: '#E5EDFF', text: '#42389D', label: 'Accepted' },
    declined: { bg: '#FDE7E7', text: '#A01414', label: 'Declined' },
    deciding: { bg: '#ffeed5', text: '#83381d', label: 'Still deciding' },
  }

  return (
    <div className="w-[1728px] min-h-[1088px] bg-[#f4f7fb]">
      <div className="h-16 bg-white border-b border-[#d1dae0] flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#3a9ed8] rounded"></div>
          <span className="text-[16px] font-semibold text-[#223e47]">Travefy</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#3a9ed8] rounded-full flex items-center justify-center text-white text-[12px] font-semibold">
            BG
          </div>
          <span className="text-[14px] text-[#223e47]">Bonnie Green</span>
        </div>
      </div>

      <div className="flex h-[calc(100vh-64px)]">
        <div className="w-64 bg-white border-r border-[#d1dae0] p-4">
          <nav className="space-y-1">
            <div className="text-[12px] font-semibold text-[#678390] uppercase tracking-wide mb-2">
              Business Hub
            </div>
            <button className="w-full text-left px-3 py-2 text-[14px] text-[#223e47] bg-[#eff9ff] rounded">
              Insurance offers
            </button>
            <button className="w-full text-left px-3 py-2 text-[14px] text-[#4f666d] hover:bg-[#f4f7fb] rounded">
              Accounting
            </button>
            <button className="w-full text-left px-3 py-2 text-[14px] text-[#4f666d] hover:bg-[#f4f7fb] rounded">
              Marketing
            </button>
          </nav>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="p-8">
            <div className="mb-6">
              <h1 className="text-[20px] font-bold text-[#223e47] mb-2">
                Travel insurance offers
              </h1>
              <p className="text-[14px] text-[#4f666d]">
                Configure your travel insurance offering and track traveler responses
              </p>
            </div>

            <div className="border-b border-[#d1dae0] mb-6">
              <div className="flex gap-8">
                <button
                  onClick={() => setSelectedTab('setup')}
                  className={`flex items-center gap-2 px-1 py-3 text-[14px] font-semibold border-b-2 ${
                    selectedTab === 'setup'
                      ? 'text-[#2a79a6] border-[#2a79a6]'
                      : 'text-[#4f666d] border-transparent'
                  }`}
                >
                  <Settings className="w-4 h-4" />
                  Setup
                </button>
                <button
                  onClick={() => setSelectedTab('preview')}
                  className={`flex items-center gap-2 px-1 py-3 text-[14px] font-semibold border-b-2 ${
                    selectedTab === 'preview'
                      ? 'text-[#2a79a6] border-[#2a79a6]'
                      : 'text-[#4f666d] border-transparent'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  Preview
                </button>
                <button
                  onClick={() => setSelectedTab('responses')}
                  className={`flex items-center gap-2 px-1 py-3 text-[14px] font-semibold border-b-2 ${
                    selectedTab === 'responses'
                      ? 'text-[#2a79a6] border-[#2a79a6]'
                      : 'text-[#4f666d] border-transparent'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  Responses
                  <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] font-semibold bg-[#2a79a6] text-white rounded-full">
                    4
                  </span>
                </button>
              </div>
            </div>

            <div>
              <div className="bg-white border border-[#d1dae0] rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-[#f4f7fb] border-b border-[#d1dae0]">
                    <tr>
                      <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#4f666d] uppercase tracking-wide">
                        Traveler
                      </th>
                      <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#4f666d] uppercase tracking-wide">
                        Plan
                      </th>
                      <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#4f666d] uppercase tracking-wide">
                        Provider
                      </th>
                      <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#4f666d] uppercase tracking-wide">
                        Price
                      </th>
                      <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#4f666d] uppercase tracking-wide">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#4f666d] uppercase tracking-wide">
                        Date
                      </th>
                      <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#4f666d] uppercase tracking-wide">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e1e7ec]">
                    {mockAdvisorResponses.map((response) => (
                      <tr key={response.id} className="hover:bg-[#f4f7fb]">
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#3a9ed8] rounded-full flex items-center justify-center text-white text-[12px] font-semibold">
                              {response.traveler.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="text-[14px] text-[#223e47] font-medium">
                              {response.traveler}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className="text-[14px] text-[#223e47]">
                            {response.plan || '—'}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <span className="text-[14px] text-[#223e47]">
                            {response.provider || '—'}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <span className="text-[14px] text-[#223e47]">
                            {response.price ? `$${response.price}` : '—'}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <span
                            className="inline-flex items-center px-2 py-0.5 rounded text-[12px] font-semibold"
                            style={{
                              backgroundColor: statusConfig[response.status].bg,
                              color: statusConfig[response.status].text,
                            }}
                          >
                            {statusConfig[response.status].label}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <span className="text-[14px] text-[#4f666d]">
                            {new Date(response.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            {response.status === 'accepted' && (
                              <button className="px-3 py-1 text-[12px] font-semibold text-[#2a79a6] hover:bg-[#eff9ff] rounded flex items-center gap-1">
                                <Plus className="w-3 h-3" />
                                Add policy
                              </button>
                            )}
                            {response.status === 'purchased' && (
                              <button className="px-3 py-1 text-[12px] font-semibold text-[#2a79a6] hover:bg-[#eff9ff] rounded">
                                View policy
                              </button>
                            )}
                            <button className="p-1 text-[#678390] hover:text-[#223e47]">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
