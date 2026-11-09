// Node 34237:3169 - Modal: View policy for Lucy Nelson - 561x972px
// Pixel-perfect rebuild from Figma reference code

const ASSETS = '/figma-assets/34237-3169'

export function Node34237_3169() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900/50 p-4">
      <div className="bg-white border border-gray-200 flex flex-col rounded w-[561px] max-h-[90vh] overflow-auto">
        {/* Modal Header */}
        <div className="bg-gray-50 border-b border-gray-200 flex items-center justify-between px-4 py-2 rounded-t">
          <h2 className="flex-1 text-lg font-semibold text-blue-gray-900 leading-relaxed overflow-hidden text-ellipsis whitespace-nowrap">
            Policy for Lucy Nelson
          </h2>
          <button className="w-3 h-3 shrink-0">
            <img src={`${ASSETS}/57bca2a0-e594-4b8d-b838-e75a9a4aa18f.svg`} alt="" className="w-full h-full" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex flex-col gap-4 p-5">
          {/* Explanation */}
          <p className="text-sm text-blue-gray-800 leading-tight">
            Pulled in automatically from Allianz Travel on May 9, when Lucy bought through the provider link. Nothing to add by hand.
          </p>

          {/* Purchase summary */}
          <div className="bg-gray-50 flex flex-col gap-1 p-3 rounded-md">
            <p className="text-sm text-gray-900 leading-tight">
              Purchased: Allianz Travel OneTrip Basic, $38
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Synced from the provider. To change the policy, the traveler or advisor contacts Allianz.
            </p>
          </div>

          {/* Provider (read-only) */}
          <div className="flex flex-col gap-0.5 h-[73px]">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-blue-gray-600 leading-tight">Provider</label>
              <div className="flex items-center p-0">
                <p className="flex-1 text-base text-blue-gray-900 leading-tight">Allianz Travel</p>
              </div>
            </div>
          </div>

          {/* Plan or package name (read-only) */}
          <div className="flex flex-col gap-0.5 h-[73px]">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-blue-gray-600 leading-tight">Plan or package name</label>
              <div className="flex items-center p-0">
                <p className="flex-1 text-base text-blue-gray-900 leading-tight">OneTrip Basic</p>
              </div>
            </div>
          </div>

          {/* Policy number (read-only) */}
          <div className="flex flex-col gap-0.5 h-[73px]">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-blue-gray-600 leading-tight">Policy number</label>
              <div className="flex items-center p-0">
                <p className="flex-1 text-base text-blue-gray-900 leading-tight">ALZ-51907</p>
              </div>
            </div>
          </div>

          {/* Coverage dates (read-only) */}
          <div className="flex gap-3">
            <div className="flex-1 flex flex-col gap-0.5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-blue-gray-600 leading-tight">Coverage start</label>
                <div className="flex items-center p-0">
                  <p className="flex-1 text-base text-blue-gray-900 leading-tight">Jun 2, 2026</p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-0.5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-blue-gray-600 leading-tight">Coverage end</label>
                <div className="flex items-center p-0">
                  <p className="flex-1 text-base text-blue-gray-900 leading-tight">Jun 14, 2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Premium and purchase date (read-only) */}
          <div className="flex gap-3">
            <div className="flex-1 flex flex-col gap-0.5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-blue-gray-600 leading-tight">Premium paid</label>
                <div className="flex items-center p-0">
                  <p className="flex-1 text-base text-blue-gray-900 leading-tight">$38.00</p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-0.5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-blue-gray-600 leading-tight">Purchase date</label>
                <div className="flex items-center p-0">
                  <p className="flex-1 text-base text-blue-gray-900 leading-tight">May 9, 2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Travelers covered (read-only) */}
          <div className="flex flex-col gap-0.5 h-[73px]">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-blue-gray-600 leading-tight">Travelers covered</label>
              <div className="flex items-center p-0">
                <p className="flex-1 text-base text-blue-gray-900 leading-tight">Lucy Nelson</p>
              </div>
            </div>
          </div>

          {/* 24/7 assistance phone (read-only) */}
          <div className="flex flex-col gap-0.5 h-[73px]">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-blue-gray-600 leading-tight">24/7 assistance phone</label>
              <div className="flex items-center p-0">
                <p className="flex-1 text-base text-blue-gray-900 leading-tight">From the policy document</p>
              </div>
            </div>
          </div>

          {/* Policy document (read-only with Open button) */}
          <div className="flex gap-3 items-end">
            <div className="flex-1">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-blue-gray-600 leading-tight">Policy document</label>
                <div className="flex items-center p-0">
                  <p className="flex-1 text-base text-blue-gray-900 leading-tight">ALZ-51907_OneTrip_Basic.pdf</p>
                </div>
              </div>
            </div>
            <button className="border border-gray-200 flex items-center justify-center px-4 py-2 rounded h-9 shrink-0">
              <p className="text-sm font-semibold text-primary-400 leading-tight">Open PDF</p>
            </button>
          </div>

          {/* Footer note */}
          <p className="text-xs text-gray-600 leading-relaxed">
            Purchased is the only status that shows as covered. Lucy's itinerary card shows this policy. Read only, because the integration is the source.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-50 border-t border-gray-200 flex items-center p-4 rounded-b">
          <div className="flex-1 flex items-center">
            <button className="bg-primary-600 flex items-center justify-center px-5 py-2.5 rounded shrink-0">
              <p className="text-base text-white leading-relaxed">Close</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
