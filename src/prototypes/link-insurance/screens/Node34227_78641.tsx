// Node 34227:78641 - Advisor: Setup (provider, Preview, e-sig, trip cost) - 1728x1198px
// Pixel-perfect rebuild from Figma reference code

const ASSETS = '/figma-assets/34227-78641'

export function Node34227_78641() {
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      {/* Travefy Navbar */}
      <div className="bg-[#45bbff] flex flex-col">
        <div className="flex items-center py-2">
          <div className="flex-1 flex items-center gap-8 px-4">
            <div className="flex items-center gap-5 w-16">
              <img src={`${ASSETS}/96c565fa-2e84-4abb-a888-9935a382d457.svg`} alt="" className="w-6 h-6" />
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
            <button className="px-4 py-2.5 text-sm font-semibold text-blue-gray-600 hover:text-blue-gray-900 border-b-2 border-transparent">
              Trip Activity
            </button>
            <button className="px-4 py-2.5 text-sm font-semibold bg-primary-600 text-white rounded-t border-b-2 border-primary-600">
              Travel Protection
            </button>
            <button className="px-4 py-2.5 text-sm font-semibold text-blue-gray-600 hover:text-blue-gray-900 border-b-2 border-transparent">
              People
            </button>
            <button className="px-4 py-2.5 text-sm font-semibold text-blue-gray-600 hover:text-blue-gray-900 border-b-2 border-transparent">
              Tasks and Automations
            </button>
            <button className="px-4 py-2.5 text-sm font-semibold text-blue-gray-600 hover:text-blue-gray-900 border-b-2 border-transparent">
              Notes
            </button>
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
                <button className="px-6 py-3 text-sm font-semibold border-b-2 border-primary-600 text-primary-600">
                  Settings
                </button>
                <button className="px-6 py-3 text-sm font-semibold border-b-2 border-transparent text-blue-gray-600 hover:text-blue-gray-900">
                  Responses
                </button>
              </div>
            </div>

            {/* Settings tab content */}
            <div className="p-6 space-y-6">
              {/* Provider + Preview row */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-blue-gray-900 mb-2 leading-tight">Provider</label>
                  <div className="relative">
                    <div className="w-full px-3 py-2.5 border border-gray-200 rounded text-sm bg-white flex items-center justify-between">
                      <span className="text-blue-gray-900">Allianz Travel</span>
                      <img src={`${ASSETS}/180f8d6c-6a86-4dbe-93bf-ba8921a15c1d.svg`} alt="" className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <p className="text-xs text-blue-gray-500 mt-1.5">
                    Pick + Add new at the bottom of the list for a provider without a linked account.
                  </p>
                </div>
                <div className="flex items-end">
                  <button className="px-4 py-2.5 text-sm border border-gray-200 text-blue-gray-900 rounded hover:bg-gray-50 font-semibold leading-tight">
                    Preview
                  </button>
                </div>
              </div>

              {/* E-signature */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-blue-gray-900 leading-tight">E-signature required</label>
                  <button className="flex items-start gap-2">
                    <div className="h-5 w-10 relative">
                      <div className="absolute inset-0 rounded-full bg-primary-600" />
                      <div className="absolute bg-white rounded-full w-4 h-4 top-0.5 right-0.5" />
                    </div>
                  </button>
                </div>
                <p className="text-xs text-blue-gray-500">
                  When on, travelers e-sign their decision. When off, they approve the proposal without a signature step.
                </p>
              </div>

              {/* Trip cost */}
              <div>
                <label className="block text-sm font-semibold text-blue-gray-900 mb-2 leading-tight">Trip cost (for quote calculation)</label>
                <input
                  type="number"
                  defaultValue="8400"
                  placeholder="8400"
                  className="w-full px-3 py-2.5 border border-gray-200 rounded text-sm text-blue-gray-700 bg-white"
                />
                <p className="text-xs text-blue-gray-500 mt-1.5">
                  This cost is used to calculate quotes. Travelers can edit their own cost when getting a quote.
                </p>
              </div>

              {/* Travelers section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-semibold text-blue-gray-900">Travelers on this trip</h3>
                  <button className="text-sm font-semibold text-primary-600 hover:underline">
                    Edit travelers
                  </button>
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-xs font-semibold text-blue-gray-700 uppercase tracking-wide">Name</th>
                        <th className="text-left py-3 px-4 text-xs font-semibold text-blue-gray-700 uppercase tracking-wide">Email</th>
                        <th className="text-left py-3 px-4 text-xs font-semibold text-blue-gray-700 uppercase tracking-wide">Role</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {[
                        { name: 'Elisa Denton', email: 'elisa@example.com', role: 'Traveler' },
                        { name: 'Jack Hawthorne', email: 'jack@example.com', role: 'Traveler' },
                        { name: 'Tom Rivera', email: 'tom@example.com', role: 'Traveler' }
                      ].map((traveler, idx) => (
                        <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3.5 px-4">
                            <p className="text-sm text-blue-gray-900 leading-tight">{traveler.name}</p>
                          </td>
                          <td className="py-3.5 px-4">
                            <p className="text-sm text-blue-gray-700 leading-tight">{traveler.email}</p>
                          </td>
                          <td className="py-3.5 px-4">
                            <p className="text-sm text-blue-gray-700 leading-tight">{traveler.role}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Save button */}
              <div className="flex justify-end pt-4">
                <button className="px-6 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded hover:bg-primary-700 leading-tight">
                  Save settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
