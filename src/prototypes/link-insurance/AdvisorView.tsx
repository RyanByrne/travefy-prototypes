import { clsx } from 'clsx'
import { useState } from 'react'
import { Badge, Combobox, Input, Toggle } from '../../shared/components'
import { AddPolicyModal, ViewPolicyModal } from './Modals'
import { MOCK_RESPONSES, ALL_PROVIDERS_FOR_COMBOBOX } from './data'

type Tab = 'settings' | 'responses'

export function AdvisorView() {
  const [activeTab, setActiveTab] = useState<Tab>('responses')
  const [provider, setProvider] = useState('Allianz Travel')
  const [eSignature, setESignature] = useState(true)
  const [tripCost, setTripCost] = useState('8400')
  const [showAddPolicy, setShowAddPolicy] = useState(false)
  const [showViewPolicy, setShowViewPolicy] = useState(false)
  const [selectedTraveler, setSelectedTraveler] = useState<string>('')

  const handleSavePolicy = (data: unknown) => {
    console.log('Policy saved:', data)
    setShowAddPolicy(false)
  }

  const purchasedResponses = MOCK_RESPONSES.filter((r) => r.status === 'purchased')
  const acceptedResponses = MOCK_RESPONSES.filter((r) => r.status === 'accepted')
  const declinedResponses = MOCK_RESPONSES.filter((r) => r.status === 'declined')
  const noDecisionResponses = MOCK_RESPONSES.filter((r) => r.status === 'still-deciding' || r.status === 'no-decision')

  const luczyPolicy = MOCK_RESPONSES.find((r) => r.travelerName === 'Lucy Nelson')!

  return (
    <div className="min-h-screen bg-travefy-gray-50 flex flex-col">
      <div className="bg-white border-b border-travefy-gray-200 px-6 py-4 shrink-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-semibold text-travefy-navy">Adventure in the Rockies: A Journey through the mountains</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2 py-0.5 text-xs font-semibold bg-travefy-blue-light text-travefy-blue border border-travefy-blue/40 rounded">Luxury ✦</span>
                <span className="px-2 py-0.5 text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-300 rounded">Europe ✦</span>
                <span className="px-2 py-0.5 text-xs font-semibold bg-red-100 text-red-700 border border-red-300 rounded">Adults Only ✦</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-sm text-travefy-blue hover:underline font-semibold">No Platform</button>
              <button className="text-sm text-travefy-blue hover:underline font-semibold">Brand</button>
              <button className="text-sm text-travefy-blue hover:underline font-semibold">No Status</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-travefy-gray-200 shrink-0">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex gap-1">
            <button className="px-4 py-3 text-sm font-semibold text-travefy-gray-600 hover:text-travefy-gray-900 border-b-2 border-transparent">
              Trip Activity
            </button>
            <button className="px-4 py-3 text-sm font-semibold bg-travefy-blue text-white rounded-t border-b-2 border-travefy-blue">
              Travel Protection
            </button>
            <button className="px-4 py-3 text-sm font-semibold text-travefy-gray-600 hover:text-travefy-gray-900 border-b-2 border-transparent">
              People
            </button>
            <button className="px-4 py-3 text-sm font-semibold text-travefy-gray-600 hover:text-travefy-gray-900 border-b-2 border-transparent">
              Tasks and Automations
            </button>
            <button className="px-4 py-3 text-sm font-semibold text-travefy-gray-600 hover:text-travefy-gray-900 border-b-2 border-transparent">
              Notes
            </button>
          </nav>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto p-6">
          <div className="bg-white rounded-lg border border-travefy-gray-200 overflow-hidden">
            <div className="border-b border-travefy-gray-100">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('settings')}
                  className={clsx(
                    'px-6 py-3 text-sm font-semibold border-b-2 transition-colors',
                    activeTab === 'settings'
                      ? 'border-travefy-blue text-travefy-blue'
                      : 'border-transparent text-travefy-gray-600 hover:text-travefy-gray-900'
                  )}
                >
                  Settings
                </button>
                <button
                  onClick={() => setActiveTab('responses')}
                  className={clsx(
                    'px-6 py-3 text-sm font-semibold border-b-2 transition-colors',
                    activeTab === 'responses'
                      ? 'border-travefy-blue text-travefy-blue'
                      : 'border-transparent text-travefy-gray-600 hover:text-travefy-gray-900'
                  )}
                >
                  Responses
                </button>
              </div>
            </div>

            {activeTab === 'settings' && (
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-travefy-gray-700 mb-1.5">Provider</label>
                    <Combobox
                      value={provider}
                      onChange={setProvider}
                      options={ALL_PROVIDERS_FOR_COMBOBOX.map((p) => ({ value: p, label: p }))}
                    />
                    <p className="text-xs text-travefy-gray-500 mt-1.5">
                      Pick + Add new at the bottom of the list for a provider without a linked account.
                    </p>
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={() => alert('Preview modal not implemented yet')}
                      className="px-5 py-2.5 text-sm border border-travefy-blue bg-white text-travefy-blue rounded hover:bg-travefy-blue-light font-semibold"
                    >
                      Preview
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-travefy-gray-700">E-signature required</label>
                    <Toggle checked={eSignature} onChange={(e) => setESignature(e.target.checked)} />
                  </div>
                  <p className="text-xs text-travefy-gray-500 mt-1">
                    When on, travelers e-sign their decision. When off, they approve the proposal without a signature step.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-travefy-gray-700 mb-1.5">Trip cost (for quote calculation)</label>
                  <Input
                    type="number"
                    value={tripCost}
                    onChange={(e) => setTripCost(e.target.value)}
                    placeholder="8400"
                  />
                  <p className="text-xs text-travefy-gray-500 mt-1.5">
                    This cost is used to calculate quotes. Travelers can edit their own cost when getting a quote.
                  </p>
                </div>

                <div className="pt-4 border-t border-travefy-gray-100">
                  <button className="px-5 py-2.5 text-sm bg-travefy-blue text-white rounded hover:bg-travefy-blue-dark font-semibold">
                    Save settings
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'responses' && (
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm text-travefy-gray-600">
                    1 purchased, 2 accepted, 3 declined, 3 no decision
                  </p>
                </div>

                <div className="space-y-6">
                  {purchasedResponses.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-travefy-gray-700 uppercase tracking-wide mb-3">Purchased (1)</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-travefy-gray-50 border-b border-travefy-gray-200">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Traveler</th>
                              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Reason or history</th>
                              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Date</th>
                              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Status</th>
                              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {purchasedResponses.map((response) => (
                              <tr key={response.travelerId} className="border-b border-travefy-gray-100 hover:bg-travefy-gray-50">
                                <td className="px-4 py-3 font-medium text-travefy-navy">{response.travelerName}</td>
                                <td className="px-4 py-3 text-travefy-gray-700">{response.reason}</td>
                                <td className="px-4 py-3 text-travefy-gray-700">{response.date}</td>
                                <td className="px-4 py-3">
                                  <Badge variant="success" size="sm">Purchased</Badge>
                                </td>
                                <td className="px-4 py-3">
                                  <button
                                    onClick={() => setShowViewPolicy(true)}
                                    className="text-sm text-travefy-blue hover:underline font-semibold"
                                  >
                                    View policy
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {acceptedResponses.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-travefy-gray-700 uppercase tracking-wide mb-3">Accepted (2)</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-travefy-gray-50 border-b border-travefy-gray-200">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Traveler</th>
                              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Reason or history</th>
                              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Date</th>
                              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Status</th>
                              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {acceptedResponses.map((response) => (
                              <tr key={response.travelerId} className="border-b border-travefy-gray-100 hover:bg-travefy-gray-50">
                                <td className="px-4 py-3 font-medium text-travefy-navy">{response.travelerName}</td>
                                <td className="px-4 py-3 text-travefy-gray-700">{response.reason}</td>
                                <td className="px-4 py-3 text-travefy-gray-700">{response.date}</td>
                                <td className="px-4 py-3">
                                  <Badge className="bg-travefy-indigo-bg border-travefy-indigo-border text-travefy-indigo-dark" size="sm">Accepted</Badge>
                                </td>
                                <td className="px-4 py-3">
                                  <button
                                    onClick={() => {
                                      setSelectedTraveler(response.travelerName)
                                      setShowAddPolicy(true)
                                    }}
                                    className={clsx(
                                      'px-4 py-1.5 text-sm rounded font-semibold',
                                      response.travelerName === 'Jack Hawthorne'
                                        ? 'bg-travefy-blue text-white hover:bg-travefy-blue-dark'
                                        : 'border border-travefy-blue bg-white text-travefy-blue hover:bg-travefy-blue-light'
                                    )}
                                  >
                                    Add policy
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {declinedResponses.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-travefy-gray-700 uppercase tracking-wide mb-3">Declined (3)</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-travefy-gray-50 border-b border-travefy-gray-200">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Traveler</th>
                              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Reason or history</th>
                              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Date</th>
                              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Status</th>
                              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {declinedResponses.map((response) => (
                              <tr key={response.travelerId} className="border-b border-travefy-gray-100 hover:bg-travefy-gray-50">
                                <td className="px-4 py-3 font-medium text-travefy-navy">{response.travelerName}</td>
                                <td className="px-4 py-3 text-travefy-gray-700">{response.reason}</td>
                                <td className="px-4 py-3 text-travefy-gray-700">{response.date}</td>
                                <td className="px-4 py-3">
                                  <Badge variant="danger" size="sm">Declined</Badge>
                                </td>
                                <td className="px-4 py-3"></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {noDecisionResponses.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-travefy-gray-700 uppercase tracking-wide mb-3">No decision (3)</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-travefy-gray-50 border-b border-travefy-gray-200">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Traveler</th>
                              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Reason or history</th>
                              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Date</th>
                              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Status</th>
                              <th className="px-4 py-3 text-left text-xs font-semibold text-travefy-gray-600 uppercase tracking-wide">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {noDecisionResponses.map((response) => (
                              <tr key={response.travelerId} className="border-b border-travefy-gray-100 hover:bg-travefy-gray-50">
                                <td className="px-4 py-3 font-medium text-travefy-navy">{response.travelerName}</td>
                                <td className="px-4 py-3 text-travefy-gray-700">{response.reason}</td>
                                <td className="px-4 py-3 text-travefy-gray-700">{response.date}</td>
                                <td className="px-4 py-3">
                                  {response.status === 'still-deciding' ? (
                                    <Badge variant="warning" size="sm">Still deciding</Badge>
                                  ) : (
                                    <Badge variant="gray" size="sm">No decision</Badge>
                                  )}
                                </td>
                                <td className="px-4 py-3"></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-travefy-gray-100 text-sm text-travefy-gray-600">
                  <p>
                    Add policy shows only on Accepted travelers, in that traveler only row. Purchased through Allianz integration with a policy already
                    add only View policy. Only Purchased reads as covered. Hungry is built a standard down with a entry per traveler this link
                    insurance v1.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showAddPolicy && selectedTraveler && (
        <AddPolicyModal
          open={showAddPolicy}
          onClose={() => {
            setShowAddPolicy(false)
            setSelectedTraveler('')
          }}
          travelerName={selectedTraveler}
          acceptedQuote={
            selectedTraveler === 'Jack Hawthorne'
              ? { provider: 'Allianz Travel', plan: 'OneTrip Prime', price: 72, date: 'May 10' }
              : undefined
          }
          onSave={handleSavePolicy}
        />
      )}

      {showViewPolicy && (
        <ViewPolicyModal
          open={showViewPolicy}
          onClose={() => setShowViewPolicy(false)}
          policy={{
            travelerName: luczyPolicy.travelerName,
            provider: luczyPolicy.acceptedProvider!,
            plan: luczyPolicy.acceptedPlan!,
            policyNumber: luczyPolicy.policyNumber!,
            coverageStart: luczyPolicy.coverageStart!,
            coverageEnd: luczyPolicy.coverageEnd!,
            premiumPaid: luczyPolicy.premiumPaid!,
            purchaseDate: luczyPolicy.purchaseDate!,
            assistancePhone: luczyPolicy.assistancePhone,
          }}
        />
      )}
    </div>
  )
}
