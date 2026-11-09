// Node 34227:78843 - Advisor: Traveler responses table - 1600x1204px
// Full Travefy app chrome with exact Figma layout and data

import { NavbarApplication } from '../chrome/NavbarApplication'
import { TripsList } from '../chrome/TripsList'
import { TripMenu } from '../chrome/TripMenu'
import { TripHeader } from '../chrome/TripHeader'

const ASSETS = '/figma-assets/34227-78843'

export function Node34227_78843() {
  return (
    <div className="bg-blue-gray-50 flex flex-col w-[1400px] h-[882px]">
      <NavbarApplication />

      {/* Main content with sidebars and table */}
      <div className="flex flex-1 overflow-hidden">
        <TripsList />
        <TripMenu />

        {/* Main content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Trip header */}
          <div className="flex items-center min-h-0 pt-4 px-4 w-full">
            <div className="flex flex-1 flex-col gap-4 h-full items-center min-w-0">
              <TripHeader />
            </div>
          </div>
          
          {/* Travel Protection panel */}
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

          {/* Table container */}
          <div className="flex-1 overflow-auto">
            <div className="flex flex-col">
              {/* Exact Figma table with all rows */}
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-[#e5e8eb]">
                    <th className="text-left px-3 py-2.5 text-xs font-bold text-gray-700 uppercase tracking-wider w-[180px]">Traveler</th>
                    <th className="text-left px-3 py-2.5 text-xs font-bold text-gray-700 uppercase tracking-wider w-[320px]">Reason or history</th>
                    <th className="text-left px-3 py-2.5 text-xs font-bold text-gray-700 uppercase tracking-wider w-[80px]">Date</th>
                    <th className="text-left px-3 py-2.5 text-xs font-bold text-gray-700 uppercase tracking-wider w-[120px]">Status</th>
                    <th className="text-right px-3 py-2.5 text-xs font-bold text-gray-700 uppercase tracking-wider w-[134px]">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Group: Purchased (1) */}
                  <tr className="bg-[#f9fafb]">
                    <td colSpan={5} className="px-4 pb-1.5 pt-2.5 text-sm font-semibold text-[#374151]">
                      Purchased (1)
                    </td>
                  </tr>
                  <tr className="border-b border-[#e5e8eb]">
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">Lucy Nelson</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">Basic $38. Bought via Allianz link. Policy pulled in</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">May 9</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="bg-green-100 border border-green-400 inline-flex items-center justify-center px-2.5 py-0.5 rounded-3xl">
                        <p className="text-xs font-normal text-green-800 leading-relaxed">Purchased</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-right">
                      <button className="border border-gray-200 inline-flex items-center justify-center h-7 px-3 py-2 rounded">
                        <p className="text-xs font-semibold text-primary-400 leading-[12px]">View policy</p>
                      </button>
                    </td>
                  </tr>

                  {/* Group: Accepted (2) */}
                  <tr className="bg-[#f9fafb]">
                    <td colSpan={5} className="px-4 pb-1.5 pt-2.5 text-sm font-semibold text-[#374151]">
                      Accepted (2)
                    </td>
                  </tr>
                  <tr className="border-b border-[#e5e8eb]">
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">Jack Hawthorne</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">Prime $72. E-signed. Advisor buys. No policy yet</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">May 10</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="bg-indigo-100 border border-indigo-400 inline-flex items-center justify-center px-2.5 py-0.5 rounded-3xl">
                        <p className="text-xs font-normal text-indigo-800 leading-relaxed">Accepted</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-right">
                      <button className="bg-primary-400 inline-flex items-center justify-center h-7 px-3 py-2 rounded">
                        <p className="text-xs font-semibold text-white leading-[12px]">Add policy</p>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e5e8eb]">
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">Tom Rivera</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">Prime $72. Buying via Allianz link. Not pulled in yet</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">May 13</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="bg-indigo-100 border border-indigo-400 inline-flex items-center justify-center px-2.5 py-0.5 rounded-3xl">
                        <p className="text-xs font-normal text-indigo-800 leading-relaxed">Accepted</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-right">
                      <button className="border border-gray-200 inline-flex items-center justify-center h-7 px-3 py-2 rounded">
                        <p className="text-xs font-semibold text-primary-400 leading-[12px]">Add policy</p>
                      </button>
                    </td>
                  </tr>

                  {/* Group: Declined (3) */}
                  <tr className="bg-[#f9fafb]">
                    <td colSpan={5} className="px-4 pb-1.5 pt-2.5 text-sm font-semibold text-[#374151]">
                      Declined (3)
                    </td>
                  </tr>
                  <tr className="border-b border-[#e5e8eb]">
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">Jane Hawthorne</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">Covered by supplier. E-signed. Shown: $38, $72</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">May 11</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="bg-red-100 border border-red-400 inline-flex items-center justify-center px-2.5 py-0.5 rounded-3xl">
                        <p className="text-xs font-normal text-red-800 leading-relaxed">Declined</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-right">
                      <div className="h-5 w-[134px]" />
                    </td>
                  </tr>
                  <tr className="border-b border-[#e5e8eb]">
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">Deb Denton</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">Bought elsewhere</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">May 14</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="bg-red-100 border border-red-400 inline-flex items-center justify-center px-2.5 py-0.5 rounded-3xl">
                        <p className="text-xs font-normal text-red-800 leading-relaxed">Declined</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-right">
                      <div className="h-5 w-[134px]" />
                    </td>
                  </tr>
                  <tr className="border-b border-[#e5e8eb]">
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">Robert Denton</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">No thanks</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">May 12</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="bg-red-100 border border-red-400 inline-flex items-center justify-center px-2.5 py-0.5 rounded-3xl">
                        <p className="text-xs font-normal text-red-800 leading-relaxed">Declined</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-right">
                      <div className="h-5 w-[134px]" />
                    </td>
                  </tr>

                  {/* Group: No decision (3) */}
                  <tr className="bg-[#f9fafb]">
                    <td colSpan={5} className="px-4 pb-1.5 pt-2.5 text-sm font-semibold text-[#374151]">
                      No decision (3)
                    </td>
                  </tr>
                  <tr className="border-b border-[#e5e8eb]">
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">Sam Rivera</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">Still deciding. Reminder before deposit May 20</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">May 11</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="bg-grandis-100 border border-grandis-400 inline-flex items-center px-2.5 py-0.5 rounded-3xl">
                        <p className="text-xs font-normal text-grandis-800 leading-relaxed">Still deciding</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-right">
                      <div className="h-5 w-[134px]" />
                    </td>
                  </tr>
                  <tr className="border-b border-[#e5e8eb]">
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">Elisa Denton</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">Viewed, no decision yet. Reminder sent May 12</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">-</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="bg-blue-gray-100 border border-blue-gray-400 inline-flex items-center justify-center px-2.5 py-0.5 rounded-3xl">
                        <p className="text-xs font-normal text-blue-gray-800 leading-relaxed">No decision</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-right">
                      <div className="h-5 w-[134px]" />
                    </td>
                  </tr>
                  <tr className="border-b border-[#e5e8eb]">
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">Abe Nelson</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">Not offered</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <p className="text-sm font-normal text-black leading-tight">-</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="bg-blue-gray-100 border border-blue-gray-400 inline-flex items-center justify-center px-2.5 py-0.5 rounded-3xl">
                        <p className="text-xs font-normal text-blue-gray-800 leading-relaxed">No decision</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-right">
                      <div className="h-5 w-[134px]" />
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Footnote */}
              <p className="text-xs font-normal text-black leading-relaxed px-3 py-4 w-[900px]">
                Add policy shows only on Accepted travelers, in that traveler's row. Purchased through the Allianz integration pulls the policy details in automatically, so there is no manual add, only View policy. Only Purchased means covered. History is kept: a changed answer adds a new entry and never overwrites the old one.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
