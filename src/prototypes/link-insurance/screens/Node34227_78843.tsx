// Node 34227:78843 - Advisor: Traveler responses table - 1600x1204px
// NOTE: Full Travefy app chrome (blue navbar, left sidebar with trips list, trip menu column) 
// requires extracting shared layout components beyond comparison fixes scope.
// This rebuild focuses on the critical table structure: ONE unified table with group headers,
// matching Figma's exact data and column structure.

export function Node34227_78843() {
  return (
    <div className="bg-gray-50 flex flex-col w-[1600px] h-[1204px]">
      {/* Simplified header - full Travefy navbar would be 100+ lines */}
      <div className="bg-primary-400 flex items-center justify-between px-4 py-2 shrink-0">
        <div className="flex items-center gap-8">
          <div className="w-6 h-6 bg-white/20 rounded"></div>
          <div className="flex gap-2">
            <div className="px-3 py-1.5 bg-primary-500 rounded text-white text-base">Compass</div>
            <div className="px-3 py-1.5 text-white text-base">Trips</div>
            <div className="px-3 py-1.5 text-white text-base">Business Hub</div>
            <div className="px-3 py-1.5 text-white text-base">Resources</div>
          </div>
        </div>
        <div className="w-10 h-10 bg-white/20 rounded-full"></div>
      </div>

      {/* Main content with sidebar and table */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left trips sidebar - simplified */}
        <div className="w-[416px] border-r border-gray-200 bg-white shrink-0 p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 bg-gray-50 border border-gray-300 rounded px-3 py-2 text-sm">Search trips...</div>
            <button className="w-8 h-8 bg-gray-50 border border-gray-300 rounded flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-400"></div>
            </button>
          </div>
          <div className="space-y-2">
            {[1,2,3].map(i => (
              <div key={i} className="flex items-center gap-3 p-2 border border-gray-200 rounded">
                <div className="w-20 h-20 bg-gray-300 rounded shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-blue-gray-900 truncate">Trip {i}</div>
                  <div className="text-sm text-blue-gray-600">No Date Set</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trip menu column */}
        <div className="w-[300px] border-r border-gray-200 bg-white shrink-0">
          <div className="p-4 space-y-2">
            <div className="text-base font-bold text-blue-gray-900 mb-4">Trip Menu</div>
            <div className="px-4 py-2 rounded text-base text-blue-gray-900">Trip Activity</div>
            <div className="px-4 py-2 rounded bg-primary-600 text-white text-base">People</div>
            <div className="px-4 py-2 rounded text-base text-blue-gray-900">Tasks and Automations</div>
            <div className="px-4 py-2 rounded text-base text-blue-gray-900">Notes</div>
            
            <div className="text-base font-bold text-blue-gray-900 mt-6 mb-2">Proposals & Itineraries (4)</div>
            {[1,2,3].map(i => (
              <div key={i} className="flex items-center gap-3 p-2 border border-gray-200 rounded text-sm">
                <div className="w-12 h-12 bg-gray-300 rounded shrink-0"></div>
                <div className="flex-1 truncate text-xs">Item {i}</div>
              </div>
            ))}

            <div className="text-base font-bold text-blue-gray-900 mt-4 mb-2">Forms & Other (5)</div>
            <div className="flex items-center gap-3 p-0 border border-gray-200 rounded bg-primary-600">
              <div className="w-20 h-20 bg-blue-gray-600 flex items-center justify-center shrink-0">
                <div className="w-7 h-7 bg-white/40 rounded"></div>
              </div>
              <div className="flex-1 text-white font-normal text-base py-2">Travel Protection</div>
            </div>
            <div className="text-xs text-blue-gray-600 mt-2 px-2">
              All travelers • 5 Accepted, 3 Purchased
            </div>
          </div>
        </div>

        {/* Main content: Travel Protection panel */}
        <div className="flex-1 flex flex-col bg-white overflow-hidden">
          {/* Panel header */}
          <div className="border-b border-gray-200 px-5 py-4 shrink-0">
            <h1 className="text-2xl font-bold text-blue-gray-900 mb-1">Travel Protection</h1>
            <p className="text-sm text-blue-gray-600">Manage responses and policies</p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 px-5 flex gap-4 shrink-0">
            <button className="px-4 py-3 text-base font-semibold text-blue-gray-600 hover:text-primary-600">Settings</button>
            <button className="px-4 py-3 text-base font-semibold text-primary-600 border-b-2 border-primary-600">Responses</button>
          </div>

          {/* ONE unified table with group headers */}
          <div className="flex-1 overflow-auto p-5">
            <table className="w-full border-collapse">
              {/* Table header */}
              <thead>
                <tr className="bg-gray-50 border-y border-gray-200">
                  <th className="text-left px-3 py-2.5 text-xs font-bold text-blue-gray-500 uppercase w-[180px]">Traveler</th>
                  <th className="text-left px-3 py-2.5 text-xs font-bold text-blue-gray-500 uppercase w-[320px]">Reason or history</th>
                  <th className="text-left px-3 py-2.5 text-xs font-bold text-blue-gray-500 uppercase w-[80px]">Date</th>
                  <th className="text-left px-3 py-2.5 text-xs font-bold text-blue-gray-500 uppercase w-[120px]">Status</th>
                  <th className="text-right px-3 py-2.5 text-xs font-bold text-blue-gray-500 uppercase w-[134px]">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Purchased (1) */}
                <tr className="bg-gray-50">
                  <td colSpan={5} className="px-4 py-2.5 text-sm font-semibold text-gray-700">Purchased (1)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-3 py-2.5 text-sm text-black">Lucy Nelson</td>
                  <td className="px-3 py-2.5 text-sm text-black">Basic $38. Bought via Allianz link. Policy pulled in</td>
                  <td className="px-3 py-2.5 text-sm text-black">May 9</td>
                  <td className="px-3 py-2.5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-normal bg-green-100 text-green-800 border border-green-400">
                      Purchased
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-right">
                    <button className="px-3 py-2 text-xs font-semibold text-primary-400 border border-gray-200 rounded hover:bg-gray-50">
                      View policy
                    </button>
                  </td>
                </tr>

                {/* Accepted (2) */}
                <tr className="bg-gray-50">
                  <td colSpan={5} className="px-4 py-2.5 text-sm font-semibold text-gray-700">Accepted (2)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-3 py-2.5 text-sm text-black">Jack Hawthorne</td>
                  <td className="px-3 py-2.5 text-sm text-black">Prime $72. E-signed. Advisor buys. No policy yet</td>
                  <td className="px-3 py-2.5 text-sm text-black">May 10</td>
                  <td className="px-3 py-2.5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-normal bg-indigo-100 text-indigo-800 border border-indigo-400">
                      Accepted
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-right">
                    <button className="px-3 py-2 text-xs font-semibold text-white bg-primary-400 rounded hover:bg-primary-500">
                      Add policy
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-3 py-2.5 text-sm text-black">Tom Rivera</td>
                  <td className="px-3 py-2.5 text-sm text-black">Prime $72. Buying via Allianz link. Not pulled in yet</td>
                  <td className="px-3 py-2.5 text-sm text-black">May 10</td>
                  <td className="px-3 py-2.5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-normal bg-indigo-100 text-indigo-800 border border-indigo-400">
                      Accepted
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-right">
                    <button className="px-3 py-2 text-xs font-semibold text-primary-400 border border-gray-200 rounded hover:bg-gray-50">
                      Link opens soon
                    </button>
                  </td>
                </tr>

                {/* Declined (3) */}
                <tr className="bg-gray-50">
                  <td colSpan={5} className="px-4 py-2.5 text-sm font-semibold text-gray-700">Declined (3)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-3 py-2.5 text-sm text-black">Marcus Chen</td>
                  <td className="px-3 py-2.5 text-sm text-black">Declined</td>
                  <td className="px-3 py-2.5 text-sm text-black">May 9</td>
                  <td className="px-3 py-2.5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-normal bg-red-100 text-red-800 border border-red-400">
                      Declined
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-right"></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-3 py-2.5 text-sm text-black">Sarah Johnson</td>
                  <td className="px-3 py-2.5 text-sm text-black">Declined</td>
                  <td className="px-3 py-2.5 text-sm text-black">May 11</td>
                  <td className="px-3 py-2.5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-normal bg-red-100 text-red-800 border border-red-400">
                      Declined
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-right"></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-3 py-2.5 text-sm text-black">David Park</td>
                  <td className="px-3 py-2.5 text-sm text-black">Declined</td>
                  <td className="px-3 py-2.5 text-sm text-black">May 12</td>
                  <td className="px-3 py-2.5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-normal bg-red-100 text-red-800 border border-red-400">
                      Declined
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-right"></td>
                </tr>

                {/* No decision (3) */}
                <tr className="bg-gray-50">
                  <td colSpan={5} className="px-4 py-2.5 text-sm font-semibold text-gray-700">No decision (3)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-3 py-2.5 text-sm text-black">Elisa Denton</td>
                  <td className="px-3 py-2.5 text-sm text-black">No decision</td>
                  <td className="px-3 py-2.5 text-sm text-black"></td>
                  <td className="px-3 py-2.5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-normal bg-gray-100 text-gray-600 border border-gray-300">
                      No decision
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-right"></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-3 py-2.5 text-sm text-black">Robert Denton</td>
                  <td className="px-3 py-2.5 text-sm text-black">No decision</td>
                  <td className="px-3 py-2.5 text-sm text-black"></td>
                  <td className="px-3 py-2.5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-normal bg-gray-100 text-gray-600 border border-gray-300">
                      No decision
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-right"></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-3 py-2.5 text-sm text-black">Deb Chen</td>
                  <td className="px-3 py-2.5 text-sm text-black">No decision</td>
                  <td className="px-3 py-2.5 text-sm text-black"></td>
                  <td className="px-3 py-2.5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-normal bg-gray-100 text-gray-600 border border-gray-300">
                      No decision
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-right"></td>
                </tr>
              </tbody>
            </table>

            {/* Footer note */}
            <p className="text-xs text-black mt-4 max-w-[900px]">
              Add policy shows only on Accepted travelers, in that traveler's row. Purchased through the Allianz integration pulls the policy details in automatically, so there is no manual add, only View policy. Only Purchased means covered. History is kept: a changed answer adds a new entry and never overwrites the old one.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
