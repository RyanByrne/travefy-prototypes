// Node 34233:2724 - Modal: Preview as traveler - 490x309px (simplified - shows itinerary preview)
// Pixel-perfect rebuild from Figma reference code

const ASSETS = '/figma-assets/34233-2724'

export function Node34233_2724() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900/50 p-4">
      <div className="bg-white border border-gray-200 flex flex-col rounded overflow-hidden" style={{ width: '1200px', maxWidth: '90vw' }}>
        {/* Header bar with device icons */}
        <div className="bg-gray-100 border-b border-gray-200 flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded">
              <img src={`${ASSETS}/76741213-7946-4340-8efb-5716b328ea82.svg`} alt="" className="w-4 h-4" />
              <span className="text-sm text-blue-gray-900">Mobile</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5">
              <img src={`${ASSETS}/255787d8-64e3-4a4a-a1a1-0552b8249747.svg`} alt="" className="w-4 h-4" />
              <span className="text-sm text-blue-gray-600">Desktop</span>
            </button>
          </div>
          <button className="text-sm font-semibold text-primary-600">Close preview</button>
        </div>

        {/* Preview content - simplified itinerary view */}
        <div className="bg-gray-50 flex items-center justify-center p-8" style={{ minHeight: '600px' }}>
          <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden" style={{ width: '400px' }}>
            {/* Advisor card */}
            <div className="flex items-center gap-2.5 p-4">
              <img src={`${ASSETS}/11587b97-24f8-4155-b276-f85b93af2ad9.png`} alt="" className="w-16 h-16 rounded-full object-cover" />
              <div className="flex-1">
                <p className="text-lg font-semibold text-black">Advisor Name</p>
                <p className="text-sm text-blue-gray-600">Travel Specialist</p>
                <p className="text-sm text-blue-gray-600">Agency Name</p>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative h-48 overflow-hidden">
              <img src={`${ASSETS}/bdcfb24b-a625-41ec-992c-d903559c8ecf.png`} alt="" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 flex items-center justify-center gap-2 py-3">
                <img src={`${ASSETS}/3c04c816-36dd-4e80-805d-aa045cffd88b.svg`} alt="" className="w-5 h-5" />
                <p className="text-sm text-white">email@travelagency.com</p>
              </div>
            </div>

            {/* Trip info overlay */}
            <div className="relative">
              <img src={`${ASSETS}/8ab41541-be95-4041-a73c-763c1e9c564c.png`} alt="" className="w-full h-20 object-cover" />
              <div className="absolute inset-0 flex items-end p-4">
                <div className="text-white">
                  <p className="text-xs">Aug 9, 2025 - Aug 16, 2025</p>
                  <p className="text-xl font-semibold">10 Day Euro Sights Trip</p>
                </div>
              </div>
            </div>

            {/* Insurance offer card (condensed preview) */}
            <div className="p-3">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="flex gap-3 items-center p-3 border-b border-gray-100">
                  <div className="bg-[#003781] h-8 w-1 rounded-sm" />
                  <div className="border-[#003781] border-[1.5px] border-dashed flex h-6 items-center justify-center px-2 rounded w-20">
                    <p className="text-[10px] font-semibold text-[#003781] tracking-wider">PROVIDER</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-blue-gray-900">Allianz Travel</p>
                    <p className="text-xs text-blue-gray-600">Travel protection offer</p>
                  </div>
                  <img src={`${ASSETS}/212f3d96-af8f-418d-b8cc-beaa7c8a21c6.svg`} alt="" className="w-4 h-4" />
                </div>
                <div className="flex flex-col gap-2 p-3">
                  <p className="text-sm font-bold text-blue-gray-900">Add travel protection?</p>
                  <p className="text-xs text-blue-gray-600">Get a quote to see plans and prices.</p>
                </div>
                <div className="border-t border-gray-100 flex gap-2 items-center p-3">
                  <p className="flex-1 text-xs text-blue-gray-500">Your decision is saved with your name.</p>
                  <button className="px-3 py-1.5 border border-gray-200 rounded text-xs font-semibold text-primary-600">Decline</button>
                  <button className="px-3 py-1.5 bg-primary-600 rounded text-xs font-semibold text-white">Get a quote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
