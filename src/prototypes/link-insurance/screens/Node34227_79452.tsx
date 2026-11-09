// Node 34227:79452 - Modal: Confirm your details - 490x309px
// Pixel-perfect rebuild from Figma reference code

const ASSETS = '/figma-assets/34227-79452'

export function Node34227_79452() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900/50 p-4">
      <div className="bg-white border border-gray-200 flex flex-col rounded w-[490px]">
        {/* Modal Header */}
        <div className="bg-gray-50 border-b border-gray-200 flex items-center justify-between px-4 py-2 rounded-t h-12">
          <h2 className="flex-1 text-lg font-semibold text-blue-gray-900 leading-relaxed overflow-hidden text-ellipsis whitespace-nowrap">
            Confirm your details
          </h2>
          <button className="w-3 h-3 shrink-0">
            <img src={`${ASSETS}/83c4cc25-fdee-437a-83d2-b5fd122de0d6.svg`} alt="" className="w-full h-full" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex flex-col gap-4 p-5">
          <p className="text-sm text-blue-gray-800 leading-tight">
            Allianz Travel needs these details to quote. Check them, or edit any detail before getting quotes.
          </p>

          {/* Details summary */}
          <div className="bg-gray-50 flex flex-col gap-1 p-3 rounded-md">
            <div className="flex items-start justify-between overflow-hidden">
              <p className="flex-1 text-sm text-gray-900 leading-tight">
                Elisa Denton, born Mar 3, 1986. Lives in Colorado. Trip cost $8,400 (set by your advisor). Trip May 19 to May 28.
              </p>
              <p className="text-xs font-semibold text-primary-600 leading-relaxed shrink-0">Edit</p>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Changes are used for this quote only.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-50 border-t border-gray-200 flex items-center p-4 rounded-b">
          <div className="flex-1 flex items-center gap-4">
            <div className="flex-1 flex items-center">
              <p className="text-base font-semibold text-primary-600 leading-relaxed">Back</p>
            </div>
            <button className="bg-primary-600 flex items-center justify-center px-5 py-2.5 rounded shrink-0">
              <p className="text-base text-white leading-relaxed">Get quotes</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
