// Node 34227:78843 - Advisor: Traveler responses table - 1600x1204px
// Full Travefy app chrome with exact Figma layout and data

import { NavbarApplication } from '../chrome/NavbarApplication'
import { TripsList } from '../chrome/TripsList'
import { TripMenu } from '../chrome/TripMenu'

const ASSETS = '/figma-assets/34227-78843'

export function Node34227_78843() {
  return (
    <div className="bg-gray-50 flex flex-col w-[1600px] h-[1204px]">
      <NavbarApplication />

      {/* Main content with sidebars and table */}
      <div className="flex flex-1 overflow-hidden">
        <TripsList />
        <TripMenu />

        {/* Main content: Travel Protection panel */}
        <div className="flex-1 flex flex-col bg-white overflow-hidden">
          {/* Panel header */}
          <div className="border-b border-gray-200 px-5 py-4 shrink-0">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold text-blue-gray-900 leading-relaxed">Travel Protection</h1>
              <div className="relative shrink-0 size-4">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/4076dd22-1acf-4ebc-9bc3-4f33e2f92b82.svg`} />
              </div>
            </div>
            <p className="text-base font-normal leading-4 overflow-hidden text-blue-gray-600 text-ellipsis whitespace-nowrap">Insurance</p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 flex shrink-0">
            <button className="px-4 py-3 text-base font-semibold text-blue-gray-600 hover:text-primary-600 border-b-2 border-transparent">
              Settings
            </button>
            <button className="px-4 py-3 text-base font-semibold text-primary-600 border-b-2 border-primary-600">
              Responses
            </button>
          </div>

          {/* ONE unified table with group headers matching Figma */}
          <div className="flex-1 overflow-auto">
            <table className="w-full border-collapse">
              {/* Table header */}
              <thead>
                <tr className="bg-gray-50 border-y border-gray-200">
                  <th className="text-left px-3 py-2.5 text-xs font-bold text-blue-gray-500 uppercase tracking-wider w-[180px]">Traveler</th>
                  <th className="text-left px-3 py-2.5 text-xs font-bold text-blue-gray-500 uppercase tracking-wider w-[320px]">Reason or history</th>
                  <th className="text-left px-3 py-2.5 text-xs font-bold text-blue-gray-500 uppercase tracking-wider w-[100px]">Date</th>
                  <th className="text-left px-3 py-2.5 text-xs font-bold text-blue-gray-500 uppercase tracking-wider w-[120px]">Status</th>
                  <th className="text-right px-3 py-2.5 text-xs font-bold text-blue-gray-500 uppercase tracking-wider w-[160px]">Action</th>
                </tr>
              </thead>

              <tbody>
                {/* Group: Purchased (1) */}
                <tr className="bg-gray-100 border-y border-gray-200">
                  <td colSpan={5} className="px-3 py-2 text-xs font-bold text-blue-gray-700 uppercase tracking-wider">
                    Purchased (1)
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-3 py-3">
                    <div className="font-semibold text-sm text-blue-gray-900">Elisa Denton</div>
                    <div className="text-sm text-blue-gray-600">elisa.denton@example.com</div>
                  </td>
                  <td className="px-3 py-3 text-sm text-blue-gray-900">Confirmed and purchased policy #INS-2025-001</td>
                  <td className="px-3 py-3 text-sm text-blue-gray-900">May 10</td>
                  <td className="px-3 py-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      Purchased
                    </span>
                  </td>
                  <td className="px-3 py-3 text-right">
                    <button className="text-sm font-semibold text-primary-600 hover:text-primary-700">View Policy</button>
                  </td>
                </tr>

                {/* Group: Accepted (2) */}
                <tr className="bg-gray-100 border-y border-gray-200">
                  <td colSpan={5} className="px-3 py-2 text-xs font-bold text-blue-gray-700 uppercase tracking-wider">
                    Accepted (2)
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-3 py-3">
                    <div className="font-semibold text-sm text-blue-gray-900">Robert Denton</div>
                    <div className="text-sm text-blue-gray-600">robert.denton@example.com</div>
                  </td>
                  <td className="px-3 py-3 text-sm text-blue-gray-900">Accepted offer, awaiting payment</td>
                  <td className="px-3 py-3 text-sm text-blue-gray-900">May 11</td>
                  <td className="px-3 py-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                      Accepted
                    </span>
                  </td>
                  <td className="px-3 py-3 text-right">
                    <button className="text-sm font-semibold text-primary-600 hover:text-primary-700">Send Reminder</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-3 py-3">
                    <div className="font-semibold text-sm text-blue-gray-900">Deb Matthews</div>
                    <div className="text-sm text-blue-gray-600">deb.matthews@example.com</div>
                  </td>
                  <td className="px-3 py-3 text-sm text-blue-gray-900">Selected preferred plan, payment pending</td>
                  <td className="px-3 py-3 text-sm text-blue-gray-900">May 11</td>
                  <td className="px-3 py-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                      Accepted
                    </span>
                  </td>
                  <td className="px-3 py-3 text-right">
                    <button className="text-sm font-semibold text-primary-600 hover:text-primary-700">Send Reminder</button>
                  </td>
                </tr>

                {/* Group: Declined (3) */}
                <tr className="bg-gray-100 border-y border-gray-200">
                  <td colSpan={5} className="px-3 py-2 text-xs font-bold text-blue-gray-700 uppercase tracking-wider">
                    Declined (3)
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-3 py-3">
                    <div className="font-semibold text-sm text-blue-gray-900">Lucy Nelson</div>
                    <div className="text-sm text-blue-gray-600">lucy.nelson@example.com</div>
                  </td>
                  <td className="px-3 py-3 text-sm text-blue-gray-900">Already has existing coverage</td>
                  <td className="px-3 py-3 text-sm text-blue-gray-900">May 09</td>
                  <td className="px-3 py-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                      Declined
                    </span>
                  </td>
                  <td className="px-3 py-3 text-right">
                    <button className="text-sm font-semibold text-blue-gray-400 cursor-not-allowed">—</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-3 py-3">
                    <div className="font-semibold text-sm text-blue-gray-900">Abe Nelson</div>
                    <div className="text-sm text-blue-gray-600">abe.nelson@example.com</div>
                  </td>
                  <td className="px-3 py-3 text-sm text-blue-gray-900">Not interested at this time</td>
                  <td className="px-3 py-3 text-sm text-blue-gray-900">May 09</td>
                  <td className="px-3 py-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                      Declined
                    </span>
                  </td>
                  <td className="px-3 py-3 text-right">
                    <button className="text-sm font-semibold text-blue-gray-400 cursor-not-allowed">—</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-3 py-3">
                    <div className="font-semibold text-sm text-blue-gray-900">Scott Lewis</div>
                    <div className="text-sm text-blue-gray-600">scott.lewis@example.com</div>
                  </td>
                  <td className="px-3 py-3 text-sm text-blue-gray-900">Cost concerns</td>
                  <td className="px-3 py-3 text-sm text-blue-gray-900">May 08</td>
                  <td className="px-3 py-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                      Declined
                    </span>
                  </td>
                  <td className="px-3 py-3 text-right">
                    <button className="text-sm font-semibold text-blue-gray-400 cursor-not-allowed">—</button>
                  </td>
                </tr>

                {/* Group: No decision (3) */}
                <tr className="bg-gray-100 border-y border-gray-200">
                  <td colSpan={5} className="px-3 py-2 text-xs font-bold text-blue-gray-700 uppercase tracking-wider">
                    No decision (3)
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-3 py-3">
                    <div className="font-semibold text-sm text-blue-gray-900">Aaron Mathews</div>
                    <div className="text-sm text-blue-gray-600">aaron.mathews@example.com</div>
                  </td>
                  <td className="px-3 py-3 text-sm text-blue-gray-900">Opened but hasn't responded</td>
                  <td className="px-3 py-3 text-sm text-blue-gray-900">May 07</td>
                  <td className="px-3 py-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                  </td>
                  <td className="px-3 py-3 text-right">
                    <button className="text-sm font-semibold text-primary-600 hover:text-primary-700">Send Reminder</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-3 py-3">
                    <div className="font-semibold text-sm text-blue-gray-900">Pam Meznick</div>
                    <div className="text-sm text-blue-gray-600">pam.meznick@example.com</div>
                  </td>
                  <td className="px-3 py-3 text-sm text-blue-gray-900">Hasn't opened form yet</td>
                  <td className="px-3 py-3 text-sm text-blue-gray-900">—</td>
                  <td className="px-3 py-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
                      Not viewed
                    </span>
                  </td>
                  <td className="px-3 py-3 text-right">
                    <button className="text-sm font-semibold text-primary-600 hover:text-primary-700">Send Reminder</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-3 py-3">
                    <div className="font-semibold text-sm text-blue-gray-900">Patricia Anderson</div>
                    <div className="text-sm text-blue-gray-600">patricia.anderson@example.com</div>
                  </td>
                  <td className="px-3 py-3 text-sm text-blue-gray-900">Form sent, awaiting response</td>
                  <td className="px-3 py-3 text-sm text-blue-gray-900">—</td>
                  <td className="px-3 py-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
                      Sent
                    </span>
                  </td>
                  <td className="px-3 py-3 text-right">
                    <button className="text-sm font-semibold text-primary-600 hover:text-primary-700">Send Reminder</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
