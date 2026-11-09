// Trip menu column - 300px wide with Travel Protection highlighted
// Extracted from reference-code.tsx

const ASSETS = '/figma-assets/34227-78843'

export function TripMenu() {
  return (
    <div className="border-r border-gray-200 flex flex-col gap-6 h-full items-start pb-4 shrink-0">
      <div className="flex flex-1 flex-col items-start min-h-0 overflow-hidden w-[300px]">
        {/* Trip Menu section */}
        <div className="flex flex-col gap-4 items-start py-4 shrink-0 w-full">
          <div className="flex items-center justify-between shrink-0 w-full">
            <p className="font-bold leading-relaxed not-italic shrink-0 text-base text-blue-gray-900 whitespace-nowrap">
              Trip Menu
            </p>
            <div className="flex items-start p-2 rounded shrink-0">
              <div className="relative shrink-0 size-3">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/d48f1999-c51d-45d9-ba99-961f6ee15b88.svg`} />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-0 items-start shrink-0 w-full">
            <div className="flex gap-3 items-center px-4 py-2 rounded shrink-0 w-[300px]">
              <div className="flex gap-3 items-center shrink-0">
                <div className="relative shrink-0 size-4">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/cfa2c960-1be6-44bd-9fc5-dfa6863ec1fe.svg`} />
                </div>
                <p className="font-normal leading-relaxed not-italic shrink-0 text-base text-blue-gray-900 whitespace-nowrap">
                  Trip Activity
                </p>
              </div>
            </div>
            
            <button className="bg-primary-600 flex gap-3 items-center px-4 py-2 rounded shrink-0 w-[300px]">
              <div className="flex gap-3 items-center shrink-0">
                <div className="relative shrink-0 size-4">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/97cd30c0-5b0c-4589-9698-c366ad5a574d.svg`} />
                </div>
                <p className="font-normal leading-relaxed not-italic shrink-0 text-base text-white text-left whitespace-nowrap">
                  People
                </p>
              </div>
            </button>
            
            <div className="flex gap-3 items-center px-4 py-2 rounded shrink-0 w-[300px]">
              <div className="flex gap-3 items-center shrink-0">
                <div className="relative shrink-0 size-4">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/cfa2c960-1be6-44bd-9fc5-dfa6863ec1fe.svg`} />
                </div>
                <p className="font-normal leading-relaxed not-italic shrink-0 text-base text-blue-gray-900 whitespace-nowrap">
                  Tasks and Automations
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 items-center px-4 py-2 rounded shrink-0 w-[300px]">
              <div className="flex gap-3 items-center shrink-0">
                <div className="relative shrink-0 size-4">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/35a7a8bf-0109-4821-abf0-cbfd3700f2d8.svg`} />
                </div>
                <p className="font-normal leading-relaxed not-italic shrink-0 text-base text-blue-gray-900 whitespace-nowrap">
                  Notes
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Proposals & Itineraries section */}
        <div className="flex flex-col gap-4 items-start py-4 shrink-0 w-full">
          <div className="flex items-center justify-between shrink-0 w-full">
            <p className="font-bold leading-relaxed not-italic shrink-0 text-base text-blue-gray-900 whitespace-nowrap">Proposals & Itineraries (4)</p>
            <div className="flex items-start p-2 rounded shrink-0">
              <div className="relative shrink-0 size-3">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/d48f1999-c51d-45d9-ba99-961f6ee15b88.svg`} />
              </div>
            </div>
          </div>
          
          {/* Simplified itinerary items */}
          {[1,2,3].map(i => (
            <div key={i} className="bg-white border border-gray-200 flex gap-4 items-center overflow-hidden pl-0 pr-4 rounded shrink-0 w-full">
              <div className="relative shrink-0 size-20">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={`${ASSETS}/d8831b75-4284-4ac5-96f7-4f03d0947f00.png`} />
              </div>
              <div className="flex flex-1 flex-col gap-1.5 h-12 items-start min-w-0">
                <div className="flex flex-col gap-2 items-start shrink-0 w-full">
                  <p className="font-bold leading-tight not-italic shrink-0 text-sm text-blue-gray-900 truncate w-full">
                    Adventures in the Rockies: A Journey to Remember
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Forms & Other section with highlighted Travel Protection */}
        <div className="flex flex-col gap-4 items-start py-4 shrink-0 w-full">
          <div className="flex items-center justify-between shrink-0 w-full">
            <p className="font-bold leading-relaxed not-italic shrink-0 text-base text-blue-gray-900 whitespace-nowrap">Forms & Other (5)</p>
            <div className="flex items-start p-2 rounded shrink-0">
              <div className="relative shrink-0 size-3">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/d48f1999-c51d-45d9-ba99-961f6ee15b88.svg`} />
              </div>
            </div>
          </div>
          
          {/* Landing form item */}
          <div className="bg-white border border-gray-200 flex gap-4 items-center overflow-hidden pl-0 pr-4 rounded shrink-0 w-full">
            <div className="bg-indigo-500 flex gap-2.5 items-center justify-center p-2.5 shrink-0 size-20">
              <div className="relative shrink-0 size-7">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/68f35760-1a6f-4cbd-b792-2d612ed6aae1.svg`} />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-1.5 h-12 items-start min-w-0">
              <div className="flex flex-col gap-2 items-start shrink-0 w-full">
                <p className="font-bold leading-tight not-italic shrink-0 text-sm text-blue-gray-900 min-w-full w-min">Landing Signup for Rockies Adventure </p>
              </div>
            </div>
          </div>
          
          {/* Travel Protection - HIGHLIGHTED */}
          <div className="bg-primary-600 border border-gray-200 flex gap-4 items-center overflow-hidden pl-0 pr-4 rounded shrink-0 w-full">
            <div className="bg-blue-gray-600 flex gap-2.5 items-center justify-center p-2.5 shrink-0 size-20">
              <div className="relative shrink-0 size-7">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/487ab136-6b55-4f10-812f-36ab10ebfb16.svg`} />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-0 items-start min-w-0">
              <div className="flex flex-col gap-0 items-start shrink-0 w-full">
                <p className="font-normal leading-normal max-h-12 not-italic overflow-hidden shrink-0 text-base text-white text-ellipsis w-full">
                  Travel Protection
                </p>
                <div className="flex gap-4 items-center shrink-0 w-full">
                  <div className="flex flex-1 items-center min-w-0">
                    <p className="font-normal leading-normal not-italic shrink-0 text-sm text-white whitespace-nowrap">
                      1 purchased, 2 accepted, 3 declined, 3 no decision
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add New button */}
      <div className="bg-primary-400 flex gap-2 items-center justify-center px-5 py-2.5 rounded shrink-0 w-[284px]">
        <div className="relative shrink-0 size-3.5">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/4bfe633c-41fc-4ae9-a657-35113649f7bc.svg`} />
        </div>
        <p className="font-normal leading-relaxed not-italic shrink-0 text-base text-white whitespace-nowrap">
          Add New
        </p>
      </div>
    </div>
  )
}
