// Node 34227:79473 - Modal: Edit your details - 490x756px
// Pixel-perfect rebuild from Figma reference code

const ASSETS = '/figma-assets/34227-79473'

export function Node34227_79473() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900/50 p-4">
      <div className="bg-white border border-gray-200 flex flex-col rounded w-[490px]">
        {/* Modal Header */}
        <div className="bg-gray-50 border-b border-gray-200 flex items-center justify-between px-4 py-2 rounded-t h-12">
          <h2 className="flex-1 text-lg font-semibold text-blue-gray-900 leading-relaxed overflow-hidden text-ellipsis whitespace-nowrap">
            Edit your details
          </h2>
          <button className="w-3 h-3 shrink-0">
            <img src={`${ASSETS}/c5bdd8de-513b-4525-b824-b7b7648e1b7f.svg`} alt="" className="w-full h-full" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex flex-col gap-4 p-5 w-[490px]">
          <p className="text-sm text-blue-gray-800 leading-tight">
            Update the details Allianz Travel uses for this quote. Trip cost is set by your advisor and cannot be changed here.
          </p>

          {/* Edit fields */}
          <div className="flex flex-col gap-3">
            {/* Full name */}
            <div className="flex flex-col gap-0.5 h-[91px]">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-blue-gray-800 leading-tight">Full name</label>
                <input
                  type="text"
                  defaultValue="Elisa Denton"
                  className="bg-gray-50/60 border border-gray-300 px-4 py-3 rounded text-base text-blue-gray-800 leading-tight"
                />
              </div>
            </div>

            {/* Date of birth */}
            <div className="flex flex-col gap-0.5 h-[91px]">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-blue-gray-800 leading-tight">Date of birth</label>
                <input
                  type="text"
                  defaultValue="Mar 3, 1986"
                  className="bg-gray-50/60 border border-gray-300 px-4 py-3 rounded text-base text-blue-gray-800 leading-tight"
                />
              </div>
            </div>

            {/* State of residence */}
            <div className="flex flex-col gap-0.5 h-[91px]">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-blue-gray-800 leading-tight">State of residence</label>
                <input
                  type="text"
                  defaultValue="Colorado"
                  className="bg-gray-50/60 border border-gray-300 px-4 py-3 rounded text-base text-blue-gray-800 leading-tight"
                />
              </div>
            </div>

            {/* Trip cost (read-only) */}
            <div className="flex flex-col gap-0.5 h-[91px]">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-blue-gray-800 leading-tight">Trip cost</label>
                <div className="bg-gray-100 border border-gray-300 px-4 py-3 rounded">
                  <p className="text-base text-blue-gray-800 leading-tight">$8,400</p>
                </div>
              </div>
              <p className="text-sm text-blue-gray-600 leading-tight">Set by your advisor</p>
            </div>

            {/* Trip dates (read-only) */}
            <div className="flex flex-col gap-0.5 h-[91px]">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-blue-gray-800 leading-tight">Trip dates</label>
                <div className="bg-gray-100 border border-gray-300 px-4 py-3 rounded">
                  <p className="text-base text-blue-gray-800 leading-tight">May 19 to May 28</p>
                </div>
              </div>
              <p className="text-sm text-blue-gray-600 leading-tight">From your trip</p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-50 border-t border-gray-200 flex items-center p-4 rounded-b">
          <div className="flex-1 flex items-center gap-4">
            <button className="flex-1 px-4 py-2 border border-gray-200 text-sm font-semibold text-blue-gray-900 rounded hover:bg-gray-100 leading-tight">
              Cancel
            </button>
            <button className="flex-1 px-4 py-2 bg-primary-600 text-sm font-semibold text-white rounded hover:bg-primary-700 leading-tight">
              Save and quote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
