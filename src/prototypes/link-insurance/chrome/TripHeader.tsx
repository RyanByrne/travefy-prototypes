// Trip header panel - title, edit icon, tags (Luxury/Europe/Adults Only), and dropdowns (No Platform/Brand/No Status)
// Extracted from Figma reference-code.tsx lines 547-628

const ASSETS = '/figma-assets/34227-78843'

export function TripHeader() {
  return (
    <div className="bg-gray-50 border-b border-gray-300 flex flex-col gap-2 items-start pb-4 pt-0 px-0 shrink-0 w-full">
      {/* Title row with edit icon and dots menu */}
      <div className="flex items-center justify-between shrink-0 w-full">
        <div className="flex gap-4 items-center shrink-0">
          <div className="flex gap-5 items-center shrink-0">
            <p className="font-bold leading-relaxed not-italic shrink-0 text-xl text-blue-gray-900 whitespace-nowrap">
              Adventure in the Rockies: A Journey through the mountains
            </p>
            <div className="relative shrink-0 size-4">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/b1105764-1189-4ec2-a418-34829a436ddb.svg`} />
            </div>
          </div>
        </div>
        <div className="border border-gray-200 flex items-start p-2 rounded shrink-0">
          <div className="relative shrink-0 size-3">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/8b26ae41-9ca4-4953-90e8-d7c721bb5cba.svg`} />
          </div>
        </div>
      </div>
      
      {/* Tags and dropdowns row */}
      <div className="flex items-start justify-between shrink-0 w-full">
        {/* Left: Labels button + tags */}
        <div className="flex gap-[5px] items-center pr-2 shrink-0">
          <div className="border border-gray-200 flex gap-2 items-center justify-center px-3 py-1 rounded shrink-0">
            <p className="font-semibold leading-relaxed not-italic shrink-0 text-xs text-primary-600 whitespace-nowrap">
              Labels
            </p>
            <div className="relative shrink-0 size-3">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/cca31e99-d6cb-43f5-b24e-e258e1dff90e.svg`} />
            </div>
          </div>
          
          {/* Luxury tag */}
          <div className="flex items-center">
            <div className="bg-primary-700 flex gap-1 h-full items-center justify-center px-2.5 py-0.5 rounded shrink-0">
              <p className="font-normal leading-relaxed not-italic shrink-0 text-xs text-white text-center whitespace-nowrap">
                Luxury
              </p>
              <div className="relative shrink-0 size-2">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/d57065d9-3a6a-4f2c-bf0d-e48e589ed0e5.svg`} />
              </div>
            </div>
          </div>
          
          {/* Europe tag */}
          <div className="flex items-center">
            <div className="bg-primary-700 flex gap-1 h-full items-center justify-center px-2.5 py-0.5 rounded shrink-0">
              <p className="font-normal leading-relaxed not-italic shrink-0 text-xs text-white text-center whitespace-nowrap">
                Europe
              </p>
              <div className="relative shrink-0 size-2">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/d57065d9-3a6a-4f2c-bf0d-e48e589ed0e5.svg`} />
              </div>
            </div>
          </div>
          
          {/* Adults Only tag */}
          <div className="flex items-center">
            <div className="bg-primary-700 flex gap-1 h-full items-center justify-center px-2.5 py-0.5 rounded shrink-0">
              <p className="font-normal leading-relaxed not-italic shrink-0 text-xs text-white text-center whitespace-nowrap">
                Adults Only
              </p>
              <div className="relative shrink-0 size-2">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/d57065d9-3a6a-4f2c-bf0d-e48e589ed0e5.svg`} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Right: Dropdowns */}
        <div className="flex items-center justify-end shrink-0">
          {/* No Platform */}
          <div className="bg-gray-50 flex flex-col h-[26px] items-start justify-center px-2.5 py-2 rounded shrink-0">
            <div className="flex gap-2 items-center shrink-0 w-full">
              <p className="font-normal leading-relaxed not-italic shrink-0 text-sm text-blue-gray-900 whitespace-nowrap">
                No Platform
              </p>
              <div className="relative shrink-0 size-2.5">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/a7dd0788-86cf-4f0d-8f55-fcbe0ed86da4.svg`} />
              </div>
            </div>
          </div>
          
          {/* Brand */}
          <div className="bg-gray-50 flex flex-col h-[26px] items-start justify-center px-2.5 py-2 rounded shrink-0">
            <div className="flex gap-2 items-center shrink-0 w-full">
              <p className="font-normal leading-relaxed not-italic shrink-0 text-sm text-blue-gray-900 whitespace-nowrap">
                Brand
              </p>
              <div className="relative shrink-0 size-2.5">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/a7dd0788-86cf-4f0d-8f55-fcbe0ed86da4.svg`} />
              </div>
            </div>
          </div>
          
          {/* No Status */}
          <div className="bg-gray-50 flex flex-col h-[26px] items-start justify-center px-2.5 py-2 rounded shrink-0">
            <div className="flex gap-2 items-center shrink-0 w-full">
              <p className="font-normal leading-relaxed not-italic shrink-0 text-sm text-blue-gray-900 whitespace-nowrap">
                No Status
              </p>
              <div className="relative shrink-0 size-2.5">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/a7dd0788-86cf-4f0d-8f55-fcbe0ed86da4.svg`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
