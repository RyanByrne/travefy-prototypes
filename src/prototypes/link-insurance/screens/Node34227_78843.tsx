// Node 34227:78843 - Advisor: Traveler responses table - 1600x1204px
// Pixel-perfect rebuild from Figma reference code

const ASSETS = '/figma-assets/34227-78843'

const mockResponses = [
  { name: 'Lucy Nelson', email: 'lucy@example.com', provider: 'Allianz Travel', plan: 'OneTrip Prime', status: 'Purchased', date: 'May 12, 09:15', policyNum: 'ALZ-48213' },
  { name: 'Elisa Denton', email: 'elisa@example.com', provider: 'Allianz Travel', plan: 'OneTrip Prime', status: 'Accepted', date: 'May 11, 14:02', price: '$72' },
  { name: 'Monica Silva', email: 'monica@example.com', provider: 'Medjet', plan: 'Medjet Horizon', status: 'Accepted', date: 'May 11, 10:45', price: '$52' },
  { name: 'Jack Hawthorne', email: 'jack@example.com', provider: 'Allianz Travel', plan: '', status: 'Declined', date: 'May 10, 16:20', reason: 'Has insurance through credit card' },
  { name: 'Tom Rivera', email: 'tom@example.com', provider: 'Medjet', plan: '', status: 'Declined', date: 'May 10, 14:55', reason: 'Not interested' },
  { name: 'Sarah Chen', email: 'sarah@example.com', provider: 'Allianz Travel', plan: '', status: 'Declined', date: 'May 10, 11:30', reason: 'Too expensive' },
  { name: 'David Park', email: 'david@example.com', provider: 'Allianz Travel', plan: '', status: 'Still deciding', date: 'Viewed May 12', reason: 'Opened quote May 11' },
  { name: 'Emily Watson', email: 'emily@example.com', provider: 'Allianz Travel', plan: '', status: 'Still deciding', date: 'No activity', reason: 'Sent May 10' },
  { name: 'James Miller', email: 'james@example.com', provider: 'Allianz Travel', plan: '', status: 'No decision', date: 'No activity', reason: 'Sent May 9' }
]

export function Node34227_78843() {
  const purchased = mockResponses.filter(r => r.status === 'Purchased')
  const accepted = mockResponses.filter(r => r.status === 'Accepted')
  const declined = mockResponses.filter(r => r.status === 'Declined')
  const stillDeciding = mockResponses.filter(r => r.status === 'Still deciding')
  const noDecision = mockResponses.filter(r => r.status === 'No decision')

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      {/* Travefy Navbar */}
      <div className="bg-[#45bbff] flex flex-col">
        <div className="flex items-center py-2">
          <div className="flex-1 flex items-center gap-8 px-4">
            <div className="flex items-center gap-5 w-16">
              <img src={`${ASSETS}/d18e8e95-1f80-4e86-bdfe-726c6e51ed6b.svg`} alt="" className="w-6 h-6" />
            </div>
            <div className="flex-1 flex items-center gap-2">
              <div className="bg-[#3a9ed8] flex items-center justify-center px-3 py-1.5 rounded">
                <p className="text-base text-white">Compass</p>
              </div>
              <div className="bg-[#45bbff] flex items-center justify-center px-3 py-1.5 rounded">
                <p className="text-base text-white">Trips</p>
              </div>
              <div className="bg-[#45bbff] flex items-center justify-center px-3 py-1.5 rounded">
                <p className="text-base text-white">Travelers</p>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <img src={`${ASSETS}/ed362e29-0b28-402d-8509-aa8405d55136.png`} alt="" className="w-8 h-8 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Trip header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-semibold text-blue-gray-900">Adventure in the Rockies: A Journey through the mountains</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2 py-0.5 text-xs font-semibold bg-primary-100 text-primary-700 border border-primary-300 rounded">Luxury ✦</span>
                <span className="px-2 py-0.5 text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-300 rounded">Europe ✦</span>
                <span className="px-2 py-0.5 text-xs font-semibold bg-red-100 text-red-700 border border-red-300 rounded">Adults Only ✦</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-sm text-primary-600 hover:underline font-semibold">No Platform</button>
              <button className="text-sm text-primary-600 hover:underline font-semibold">Brand</button>
              <button className="text-sm text-primary-600 hover:underline font-semibold">No Status</button>
            </div>
          </div>
        </div>
      </div>

      {/* Trip tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex gap-1">
            <button className="px-4 py-2.5 text-sm font-semibold text-blue-gray-600 hover:text-blue-gray-900 border-b-2 border-transparent">Trip Activity</button>
            <button className="px-4 py-2.5 text-sm font-semibold bg-primary-600 text-white rounded-t border-b-2 border-primary-600">Travel Protection</button>
            <button className="px-4 py-2.5 text-sm font-semibold text-blue-gray-600 hover:text-blue-gray-900 border-b-2 border-transparent">People</button>
            <button className="px-4 py-2.5 text-sm font-semibold text-blue-gray-600 hover:text-blue-gray-900 border-b-2 border-transparent">Tasks and Automations</button>
            <button className="px-4 py-2.5 text-sm font-semibold text-blue-gray-600 hover:text-blue-gray-900 border-b-2 border-transparent">Notes</button>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto p-6">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-md">
            {/* Settings/Responses tabs */}
            <div className="border-b border-gray-100">
              <div className="flex">
                <button className="px-6 py-3 text-sm font-semibold border-b-2 border-transparent text-blue-gray-600 hover:text-blue-gray-900">Settings</button>
                <button className="px-6 py-3 text-sm font-semibold border-b-2 border-primary-600 text-primary-600">Responses</button>
              </div>
            </div>

            {/* Responses tab content */}
            <div className="p-6">
              {/* Summary */}
              <div className="mb-6">
                <p className="text-sm text-blue-gray-700 leading-relaxed">
                  <span className="font-semibold">{purchased.length}</span> purchased, <span className="font-semibold">{accepted.length}</span> accepted, <span className="font-semibold">{declined.length}</span> declined, <span className="font-semibold">{stillDeciding.length + noDecision.length}</span> haven't decided
                </p>
              </div>

              {/* Purchased section */}
              {purchased.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-blue-gray-900 mb-3 uppercase tracking-wide">Purchased ({purchased.length})</h3>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 text-xs font-semibold text-blue-gray-700 uppercase tracking-wide">Traveler</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-blue-gray-700 uppercase tracking-wide">Policy</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-blue-gray-700 uppercase tracking-wide">Status</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-blue-gray-700 uppercase tracking-wide">Date</th>
                          <th className="w-12"></th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {purchased.map((r, idx) => (
                          <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3.5 px-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-sm font-bold shrink-0">
                                  {r.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="min-w-0">
                                  <p className="font-semibold text-blue-gray-900 text-sm leading-tight truncate">{r.name}</p>
                                  <p className="text-xs text-blue-gray-600 leading-relaxed truncate">{r.email}</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <p className="text-sm font-semibold text-blue-gray-900 leading-tight">{r.provider}</p>
                              <p className="text-xs text-blue-gray-600 leading-relaxed">{r.plan} • {r.policyNum}</p>
                            </td>
                            <td className="py-3.5 px-4">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold h-5 bg-green-100 text-green-800">
                                ✓ Purchased
                              </span>
                            </td>
                            <td className="py-3.5 px-4">
                              <p className="text-sm text-blue-gray-700 leading-tight">{r.date}</p>
                            </td>
                            <td className="py-3.5 px-4">
                              <button className="px-3 py-1.5 text-xs font-semibold text-primary-600 border border-gray-200 rounded hover:bg-gray-50 leading-tight">
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

              {/* Accepted section */}
              {accepted.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-blue-gray-900 mb-3 uppercase tracking-wide">Accepted ({accepted.length})</h3>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 text-xs font-semibold text-blue-gray-700 uppercase tracking-wide">Traveler</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-blue-gray-700 uppercase tracking-wide">Quote</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-blue-gray-700 uppercase tracking-wide">Status</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-blue-gray-700 uppercase tracking-wide">Date</th>
                          <th className="w-12"></th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {accepted.map((r, idx) => (
                          <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3.5 px-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-sm font-bold shrink-0">
                                  {r.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="min-w-0">
                                  <p className="font-semibold text-blue-gray-900 text-sm leading-tight truncate">{r.name}</p>
                                  <p className="text-xs text-blue-gray-600 leading-relaxed truncate">{r.email}</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <p className="text-sm font-semibold text-blue-gray-900 leading-tight">{r.provider}</p>
                              <p className="text-xs text-blue-gray-600 leading-relaxed">{r.plan} • {r.price}</p>
                            </td>
                            <td className="py-3.5 px-4">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold h-5 bg-indigo-100 text-indigo-800">
                                Accepted
                              </span>
                            </td>
                            <td className="py-3.5 px-4">
                              <p className="text-sm text-blue-gray-700 leading-tight">{r.date}</p>
                            </td>
                            <td className="py-3.5 px-4">
                              <button className="px-3 py-1.5 text-xs font-semibold text-white bg-primary-600 rounded hover:bg-primary-700 leading-tight">
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

              {/* Declined section */}
              {declined.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-blue-gray-900 mb-3 uppercase tracking-wide">Declined ({declined.length})</h3>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 text-xs font-semibold text-blue-gray-700 uppercase tracking-wide">Traveler</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-blue-gray-700 uppercase tracking-wide">Reason</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-blue-gray-700 uppercase tracking-wide">Status</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-blue-gray-700 uppercase tracking-wide">Date</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {declined.map((r, idx) => (
                          <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3.5 px-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-sm font-bold shrink-0">
                                  {r.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="min-w-0">
                                  <p className="font-semibold text-blue-gray-900 text-sm leading-tight truncate">{r.name}</p>
                                  <p className="text-xs text-blue-gray-600 leading-relaxed truncate">{r.email}</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <p className="text-sm text-blue-gray-700 leading-tight">{r.reason}</p>
                            </td>
                            <td className="py-3.5 px-4">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold h-5 bg-red-100 text-red-800">
                                Declined
                              </span>
                            </td>
                            <td className="py-3.5 px-4">
                              <p className="text-sm text-blue-gray-700 leading-tight">{r.date}</p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Still deciding + No decision sections */}
              {(stillDeciding.length > 0 || noDecision.length > 0) && (
                <div>
                  <h3 className="text-sm font-semibold text-blue-gray-900 mb-3 uppercase tracking-wide">No decision ({stillDeciding.length + noDecision.length})</h3>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 text-xs font-semibold text-blue-gray-700 uppercase tracking-wide">Traveler</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-blue-gray-700 uppercase tracking-wide">Activity</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-blue-gray-700 uppercase tracking-wide">Status</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-blue-gray-700 uppercase tracking-wide">Date</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {[...stillDeciding, ...noDecision].map((r, idx) => (
                          <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3.5 px-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-sm font-bold shrink-0">
                                  {r.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="min-w-0">
                                  <p className="font-semibold text-blue-gray-900 text-sm leading-tight truncate">{r.name}</p>
                                  <p className="text-xs text-blue-gray-600 leading-relaxed truncate">{r.email}</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <p className="text-sm text-blue-gray-700 leading-tight">{r.reason}</p>
                            </td>
                            <td className="py-3.5 px-4">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold h-5 ${
                                r.status === 'Still deciding' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-blue-gray-900'
                              }`}>
                                {r.status}
                              </span>
                            </td>
                            <td className="py-3.5 px-4">
                              <p className="text-sm text-blue-gray-700 leading-tight">{r.date}</p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
