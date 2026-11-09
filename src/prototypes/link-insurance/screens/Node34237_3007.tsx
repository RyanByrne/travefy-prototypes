// Node 34237:3007 - Modal: Add policy, + Add new provider - 561x1238px
// Add Policy modal with "+ Add new" selected, showing provider entry fields

const ASSETS = '/figma-assets/34237-3007'

export function Node34237_3007() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900/50 p-4">
      <div className="bg-white border border-gray-200 flex flex-col rounded w-[561px] h-[1238px] overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 flex items-center justify-between px-4 py-2 rounded-t">
          <h2 className="flex-1 text-lg font-semibold text-blue-gray-900 leading-relaxed overflow-hidden text-ellipsis whitespace-nowrap">
            Add policy for Jack Hawthorne
          </h2>
          <button className="w-3 h-3 shrink-0">
            <img src={`${ASSETS}/c8d847c7-d9cd-4216-b88f-1d8e01405ae1.svg`} alt="" className="w-full h-full" />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-5 overflow-y-auto flex-1">
          <p className="text-sm text-blue-gray-800 leading-tight">
            Jack's policy was bought with a provider that is not in your list. Pick "+ Add new" in the provider list to enter it.
          </p>

          <div className="bg-gray-50 flex flex-col gap-1 p-3 rounded-md">
            <p className="text-sm text-gray-900 leading-tight">New provider: add its name, then the policy details below</p>
            <p className="text-xs text-gray-600 leading-relaxed">Saved to your agency's provider list for next time. No linked quote, so use the amounts on the policy.</p>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-blue-gray-900 leading-relaxed">Provider</label>
            <div className="bg-gray-50 border border-gray-300 flex items-center p-3 rounded">
              <p className="flex-1 text-sm text-blue-gray-900 leading-tight">+ Add new</p>
              <img src={`${ASSETS}/dc7ef49e-5351-47fd-ac1d-1eefe56644fb.svg`} alt="" className="w-2.5 h-2.5" />
            </div>
          </div>

          {/* New provider fields */}
          <div className="flex flex-col gap-0.5 h-[73px]">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-blue-gray-800 leading-tight">New provider name</label>
              <input type="text" defaultValue="Seven Corners" className="bg-gray-50/60 border border-gray-300 px-4 py-3 rounded text-base text-blue-gray-800 leading-tight" />
            </div>
          </div>

          <div className="flex flex-col gap-0.5 h-[73px]">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-blue-gray-800 leading-tight">Provider phone or website (optional)</label>
              <input type="text" defaultValue="sevencorners.com" className="bg-gray-50/60 border border-gray-300 px-4 py-3 rounded text-base text-blue-gray-800 leading-tight" />
            </div>
          </div>

          {/* Policy details */}
          <div className="flex flex-col gap-0.5 h-[73px]">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-blue-gray-800 leading-tight">Plan or package name</label>
              <input type="text" defaultValue="RoundTrip Choice" className="bg-gray-50/60 border border-gray-300 px-4 py-3 rounded text-base text-blue-gray-800 leading-tight" />
            </div>
          </div>

          <div className="flex flex-col gap-0.5 h-[73px]">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-blue-gray-800 leading-tight">Policy number</label>
              <input type="text" defaultValue="SC-220914" className="bg-gray-50/60 border border-gray-300 px-4 py-3 rounded text-base text-blue-gray-800 leading-tight" />
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
                <input type="text" defaultValue="$68.00" className="bg-gray-50/60 border border-gray-300 px-4 py-3 rounded text-base text-blue-gray-800 leading-tight" />
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
            <button className="border border-primary-600 flex items-center justify-center px-4 py-2 rounded h-9 shrink-0">
              <p className="text-sm font-semibold text-primary-600 leading-tight">Upload PDF</p>
            </button>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed">
            Saved provider appears in the list next time. Each traveler gets their own policy. Policies bought through integrations fill in automatically.
          </p>
        </div>

        <div className="bg-gray-50 border-t border-gray-200 flex items-center p-4 rounded-b shrink-0">
          <div className="flex-1 flex items-center gap-4">
            <button className="flex-1 px-4 py-2 border border-gray-200 text-sm font-semibold text-blue-gray-900 rounded hover:bg-gray-100 leading-tight">Cancel</button>
            <button className="flex-1 px-4 py-2 bg-primary-600 text-sm font-semibold text-white rounded hover:bg-primary-700 leading-tight">Save policy</button>
          </div>
        </div>
      </div>
    </div>
  )
}
