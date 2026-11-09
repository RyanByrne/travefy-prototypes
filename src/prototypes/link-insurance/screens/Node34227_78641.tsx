// Node 34227:78641 - Advisor: Settings - 1600x1204px
// Full Travefy app chrome with settings panel

import { NavbarApplication } from '../chrome/NavbarApplication'
import { TripsList } from '../chrome/TripsList'
import { TripMenu } from '../chrome/TripMenu'

const ASSETS = '/figma-assets/34227-78641'

export function Node34227_78641() {
  return (
    <div className="bg-gray-50 flex flex-col w-[1600px] h-[1204px]">
      <NavbarApplication />

      {/* Main content with sidebars and settings panel */}
      <div className="flex flex-1 overflow-hidden">
        <TripsList />
        <TripMenu />

        {/* Main content: Travel Protection Settings panel */}
        <div className="flex-1 flex flex-col bg-white overflow-hidden">
          {/* Panel header */}
          <div className="border-b border-gray-200 px-5 py-4 shrink-0">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold text-blue-gray-900 leading-relaxed">Travel Protection</h1>
              <div className="relative shrink-0 size-4">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/ba3d59b3-2c15-4aa8-9c20-ea25cb9c4a59.svg`} />
              </div>
            </div>
            <p className="text-base font-normal leading-4 overflow-hidden text-blue-gray-600 text-ellipsis whitespace-nowrap">Insurance</p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 flex shrink-0">
            <button className="px-4 py-3 text-base font-semibold text-primary-600 border-b-2 border-primary-600">
              Settings
            </button>
            <button className="px-4 py-3 text-base font-semibold text-blue-gray-600 hover:text-primary-600 border-b-2 border-transparent">
              Responses
            </button>
          </div>

          {/* Settings content - scrollable */}
          <div className="flex-1 overflow-auto p-5">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Provider section */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-blue-gray-900">Insurance Provider</h2>
                
                <div className="space-y-3">
                  <label className="flex items-start gap-3">
                    <input type="radio" name="provider" className="mt-1" checked readOnly />
                    <div>
                      <div className="font-semibold text-blue-gray-900">Allianz Travel Insurance</div>
                      <div className="text-sm text-blue-gray-600">Comprehensive coverage with 24/7 support</div>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3">
                    <input type="radio" name="provider" className="mt-1" />
                    <div>
                      <div className="font-semibold text-blue-gray-900">Travel Guard</div>
                      <div className="text-sm text-blue-gray-600">Flexible plans for any budget</div>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3">
                    <input type="radio" name="provider" className="mt-1" />
                    <div>
                      <div className="font-semibold text-blue-gray-900">World Nomads</div>
                      <div className="text-sm text-blue-gray-600">Adventure travel specialists</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Default coverage section */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-blue-gray-900">Default Coverage Options</h2>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked readOnly />
                    <span className="text-blue-gray-900">Trip cancellation/interruption</span>
                  </label>
                  
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked readOnly />
                    <span className="text-blue-gray-900">Medical emergency coverage</span>
                  </label>
                  
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked readOnly />
                    <span className="text-blue-gray-900">Lost or delayed baggage</span>
                  </label>
                  
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="text-blue-gray-900">Cancel for any reason (CFAR)</span>
                  </label>
                  
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="text-blue-gray-900">Adventure sports coverage</span>
                  </label>
                </div>
              </div>

              {/* Commission settings */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-blue-gray-900">Commission Settings</h2>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-semibold text-blue-gray-900 mb-1">Commission Rate</label>
                    <div className="flex items-center gap-2">
                      <input type="number" value="15" className="border border-gray-300 rounded px-3 py-2 w-20 text-center" />
                      <span className="text-blue-gray-900">%</span>
                    </div>
                    <p className="text-sm text-blue-gray-600 mt-1">Your earnings from each policy sale</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-blue-gray-900 mb-1">Payment Terms</label>
                    <select className="border border-gray-300 rounded px-3 py-2 w-full max-w-xs">
                      <option>Net 30 days</option>
                      <option>Net 60 days</option>
                      <option>Net 90 days</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notification settings */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-blue-gray-900">Notifications</h2>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked readOnly />
                    <span className="text-blue-gray-900">Email me when a traveler accepts an offer</span>
                  </label>
                  
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked readOnly />
                    <span className="text-blue-gray-900">Email me when a policy is purchased</span>
                  </label>
                  
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="text-blue-gray-900">Send me weekly summary reports</span>
                  </label>
                </div>
              </div>

              {/* Traveler options */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-blue-gray-900">Traveler Options</h2>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked readOnly />
                    <span className="text-blue-gray-900">Allow travelers to compare plans</span>
                  </label>
                  
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked readOnly />
                    <span className="text-blue-gray-900">Show cost breakdowns</span>
                  </label>
                  
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="text-blue-gray-900">Require travelers to provide declination reason</span>
                  </label>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 pt-4">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded font-semibold">
                  Save Changes
                </button>
                <button className="border border-gray-300 hover:bg-gray-50 text-blue-gray-900 px-6 py-2.5 rounded font-semibold">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
