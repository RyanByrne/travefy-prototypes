import { useState } from 'react'
import { Settings, Eye, FileText } from 'lucide-react'

export function AdvisorSetup() {
  const [selectedTab, setSelectedTab] = useState('setup')
  const [selectedProvider, setSelectedProvider] = useState('allianz')
  const [requireEsig, setRequireEsig] = useState(true)
  const [requireTripCost, setRequireTripCost] = useState(false)

  return (
    <div className="w-[1728px] min-h-[1198px] bg-[#f4f7fb]">
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

            <div className="max-w-3xl">
              <div className="bg-white border border-[#d1dae0] rounded-lg p-6 mb-6">
                <h2 className="text-[16px] font-semibold text-[#223e47] mb-4">
                  Insurance provider
                </h2>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 p-3 border border-[#d1dae0] rounded hover:border-[#2a79a6] cursor-pointer">
                    <input
                      type="radio"
                      name="provider"
                      value="allianz"
                      checked={selectedProvider === 'allianz'}
                      onChange={(e) => setSelectedProvider(e.target.value)}
                      className="mt-1 w-4 h-4 text-[#2a79a6]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-12 h-7 border-[1.5px] border-dashed border-[#003781] rounded-md flex items-center justify-center">
                          <span className="text-[12px] font-semibold text-[#003781] tracking-wider">LOGO</span>
                        </div>
                        <span className="text-[14px] font-semibold text-[#223e47]">
                          Allianz Travel
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-[#3a9ed8] text-white">
                          Active
                        </span>
                      </div>
                      <p className="text-[14px] text-[#4f666d]">
                        Industry-leading travel insurance with 24/7 support
                      </p>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 p-3 border border-[#d1dae0] rounded hover:border-[#2a79a6] cursor-pointer">
                    <input
                      type="radio"
                      name="provider"
                      value="travel-guard"
                      checked={selectedProvider === 'travel-guard'}
                      onChange={(e) => setSelectedProvider(e.target.value)}
                      className="mt-1 w-4 h-4 text-[#2a79a6]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-12 h-7 border-[1.5px] border-dashed border-[#007A33] rounded-md flex items-center justify-center">
                          <span className="text-[12px] font-semibold text-[#007A33] tracking-wider">LOGO</span>
                        </div>
                        <span className="text-[14px] font-semibold text-[#223e47]">
                          Travel Guard
                        </span>
                      </div>
                      <p className="text-[14px] text-[#4f666d]">
                        Comprehensive coverage with flexible plan options
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="bg-white border border-[#d1dae0] rounded-lg p-6 mb-6">
                <h2 className="text-[16px] font-semibold text-[#223e47] mb-4">
                  Traveler requirements
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-[14px] font-semibold text-[#223e47] mb-1">
                        Require e-signature on decline
                      </div>
                      <div className="text-[14px] text-[#4f666d]">
                        Travelers must electronically sign when declining coverage
                      </div>
                    </div>
                    <button
                      onClick={() => setRequireEsig(!requireEsig)}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        requireEsig ? 'bg-[#2a79a6]' : 'bg-[#d1dae0]'
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          requireEsig ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-start justify-between pt-4 border-t border-[#e1e7ec]">
                    <div className="flex-1">
                      <div className="text-[14px] font-semibold text-[#223e47] mb-1">
                        Require trip cost
                      </div>
                      <div className="text-[14px] text-[#4f666d]">
                        Travelers must enter their trip cost to get quotes
                      </div>
                    </div>
                    <button
                      onClick={() => setRequireTripCost(!requireTripCost)}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        requireTripCost ? 'bg-[#2a79a6]' : 'bg-[#d1dae0]'
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          requireTripCost ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button className="px-4 py-2 text-[14px] font-semibold text-[#678390] hover:text-[#223e47] border border-[#d1dae0] rounded">
                  Cancel
                </button>
                <button className="px-6 py-2 bg-[#2a79a6] hover:bg-[#1B6793] text-white text-[14px] font-semibold rounded">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
