// Node 34237:2862 - Modal: Add policy, provider list open - 561x1062px
// Same as Add Policy but showing dropdown open state (static representation)

const ASSETS = '/figma-assets/34237-2862'

export function Node34237_2862() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900/50 p-4">
      <div className="bg-white border border-gray-200 flex flex-col rounded w-[561px] max-h-[90vh] overflow-auto">
        <div className="bg-gray-50 border-b border-gray-200 flex items-center justify-between px-4 py-2 rounded-t">
          <h2 className="flex-1 text-lg font-semibold text-blue-gray-900 leading-relaxed overflow-hidden text-ellipsis whitespace-nowrap">
            Add policy for Jack Hawthorne
          </h2>
          <button className="w-3 h-3 shrink-0">
            <img src={`${ASSETS}/84c99e4a-1bc1-4ec8-b0ab-d670e34d3fff.svg`} alt="" className="w-full h-full" />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-5">
          <p className="text-sm text-blue-gray-800 leading-tight">
            Jack accepted this offer and chose "My advisor will buy on my behalf". Buy the policy with the provider, then add it here for Jack only. Each traveler gets their own policy record.
          </p>

          <div className="bg-gray-50 flex flex-col gap-1 p-3 rounded-md">
            <p className="text-sm text-gray-900 leading-tight">Accepted quote: Allianz Travel OneTrip Prime, $72, on May 10</p>
            <p className="text-xs text-gray-600 leading-relaxed">Quotes are regenerated at purchase, so enter the premium you actually paid.</p>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-blue-gray-900 leading-relaxed">Provider</label>
            <div className="bg-gray-50 border border-gray-300 flex items-center p-3 rounded relative">
              <p className="flex-1 text-sm text-blue-gray-900 leading-tight">Allianz Travel</p>
              <img src={`${ASSETS}/494fc81e-ebbc-48bf-a03f-f4f0b575f58f.svg`} alt="" className="w-2.5 h-2.5" />
              
              {/* Dropdown list overlay */}
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-10 max-h-48 overflow-y-auto">
                <div className="py-1">
                  <div className="px-3 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 bg-primary-50">
                    <p className="text-sm text-blue-gray-900">Allianz Travel</p>
                  </div>
                  <div className="px-3 py-2 hover:bg-gray-50 cursor-pointer">
                    <p className="text-sm text-blue-gray-900">Travel Guard</p>
                  </div>
                  <div className="px-3 py-2 hover:bg-gray-50 cursor-pointer">
                    <p className="text-sm text-blue-gray-900">Medjet</p>
                  </div>
                  <div className="px-3 py-2 hover:bg-gray-50 cursor-pointer border-t border-gray-200">
                    <p className="text-sm font-semibold text-primary-600">+ Add new</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-0.5 h-[73px]">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-blue-gray-800 leading-tight">Plan or package name</label>
              <input type="text" defaultValue="OneTrip Prime" className="bg-gray-50/60 border border-gray-300 px-4 py-3 rounded text-base text-blue-gray-800 leading-tight" />
            </div>
          </div>

          <div className="flex flex-col gap-0.5 h-[73px]">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-blue-gray-800 leading-tight">Policy number</label>
              <input type="text" defaultValue="ALZ-48213" className="bg-gray-50/60 border border-gray-300 px-4 py-3 rounded text-base text-blue-gray-800 leading-tight" />
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-1 flex flex-col gap-0.5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-blue-gray-800 leading-tight">Coverage start</label>
                <input type="text" defaultValue="Jun 2, 2026" className="bg-gray-50/60 border border-gray-300 px-4 py-3 rounded text-base text-blue-gray-800 leading-tight" />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-0.5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-blue-gray-800 leading-tight">Coverage end</label>
                <input type="text" defaultValue="Jun 14, 2026" className="bg-gray-50/60 border border-gray-300 px-4 py-3 rounded text-base text-blue-gray-800 leading-tight" />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-1 flex flex-col gap-0.5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-blue-gray-800 leading-tight">Premium paid</label>
                <input type="text" defaultValue="$72.00" className="bg-gray-50/60 border border-gray-300 px-4 py-3 rounded text-base text-blue-gray-800 leading-tight" />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-0.5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-blue-gray-800 leading-tight">Purchase date</label>
                <input type="text" defaultValue="May 10, 2026" className="bg-gray-50/60 border border-gray-300 px-4 py-3 rounded text-base text-blue-gray-800 leading-tight" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-0.5 h-[73px]">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-blue-gray-800 leading-tight">Travelers covered</label>
              <div className="bg-gray-100 border border-gray-300 px-4 py-3 rounded">
                <p className="text-base text-blue-gray-800 leading-tight">Jack Hawthorne</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-0.5 h-[73px]">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-blue-gray-800 leading-tight">24/7 assistance phone (optional)</label>
              <input type="text" placeholder="Provider emergency number" className="bg-gray-50/60 border border-gray-300 px-4 py-3 rounded text-base text-blue-gray-500 leading-tight" />
            </div>
          </div>

          <div className="flex gap-3 items-end">
            <div className="flex-1">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-blue-gray-800 leading-tight">Policy document (optional)</label>
                <input type="text" placeholder="Paste a link or upload the policy PDF" className="bg-gray-50/60 border border-gray-300 px-4 py-3 rounded text-base text-blue-gray-500 leading-tight" />
              </div>
            </div>
            <button className="border border-gray-200 flex items-center justify-center px-4 py-2 rounded h-9 shrink-0">
              <p className="text-sm font-semibold text-primary-400 leading-tight">Upload PDF</p>
            </button>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed">
            Saving marks Jack Purchased on Responses and shows the policy on his itinerary. The trip's advisor can add or edit a policy. Policies bought through the Allianz integration fill in automatically.
          </p>
        </div>

        <div className="bg-gray-50 border-t border-gray-200 flex items-center p-4 rounded-b">
          <div className="flex-1 flex items-center gap-4">
            <button className="flex-1 px-4 py-2 border border-gray-200 text-sm font-semibold text-blue-gray-900 rounded hover:bg-gray-100 leading-tight">Cancel</button>
            <button className="flex-1 px-4 py-2 bg-primary-600 text-sm font-semibold text-white rounded hover:bg-primary-700 leading-tight">Save policy</button>
          </div>
        </div>
      </div>
    </div>
  )
}
