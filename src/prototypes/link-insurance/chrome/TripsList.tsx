// Trips list sidebar - left panel with search, filters, and trip cards (400px wide)
// Extracted from reference-code.tsx

const ASSETS = '/figma-assets/34227-78843'

export function TripsList() {
  return (
    <div className="bg-gray-50 border-r border-gray-300 flex flex-col gap-4 h-full items-start overflow-hidden px-0 py-4 shrink-0 w-[400px]">
      {/* New Trip button + Search/Filters */}
      <div className="flex flex-col gap-4 items-start px-4 shrink-0 w-full">
        <div className="bg-primary-400 flex gap-2 items-center justify-center px-5 py-2.5 rounded shrink-0 w-full">
          <div className="relative shrink-0 size-3.5">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/4bfe633c-41fc-4ae9-a657-35113649f7bc.svg`} />
          </div>
          <p className="font-normal leading-relaxed not-italic relative shrink-0 text-base text-white whitespace-nowrap">
            New Trip
          </p>
        </div>
        
        {/* Search + Filter buttons */}
        <div className="flex gap-2.5 items-start shrink-0 w-full">
          <div className="flex flex-1 h-8 items-start min-w-0">
            <div className="bg-white border border-gray-300 flex flex-1 h-full items-start min-w-0 px-2.5 py-1.5 rounded-bl rounded-tl">
              <div className="flex items-start shrink-0 w-[43px]">
                <div className="flex flex-1 flex-col font-normal justify-center leading-[0] min-w-0 not-italic text-sm text-blue-gray-500">
                  <p className="leading-relaxed">Search</p>
                </div>
              </div>
            </div>
            <div className="bg-primary-600 border border-primary-700 flex h-full items-center justify-center p-2 rounded-br rounded-tr shrink-0 w-[42px]">
              <div className="relative shrink-0 size-4">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/7e51d5e1-61c7-47db-9d32-0cc2d9e31086.svg`} />
              </div>
            </div>
          </div>
          <div className="bg-primary-600 border border-primary-600 flex gap-2 items-center justify-center px-2.5 py-1.5 rounded self-stretch shrink-0">
            <div className="relative shrink-0 size-3">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/685ab037-0fa9-4a0d-ba65-74b023b85bc9.svg`} />
            </div>
          </div>
          <div className="border border-gray-200 flex gap-2 items-center justify-center px-2.5 py-1.5 rounded self-stretch shrink-0">
            <div className="relative shrink-0 size-3">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/a6560af4-95fd-47ab-b677-768851eefd74.svg`} />
            </div>
          </div>
          <div className="border border-gray-200 flex gap-2 items-center justify-center px-2.5 py-1.5 rounded self-stretch shrink-0">
            <div className="relative shrink-0 size-3">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/c2abe6dd-4422-47cf-ad35-0bbeff5334ed.svg`} />
            </div>
          </div>
        </div>
        
        {/* Filter tags */}
        <div className="flex flex-wrap gap-2.5 items-start shrink-0 w-full">
          <div className="bg-primary-600 border border-primary-600 flex gap-2 items-center justify-center px-4 py-1.5 rounded shrink-0">
            <p className="font-semibold leading-relaxed not-italic shrink-0 text-sm text-white whitespace-nowrap">
              Archived Status
            </p>
            <div className="relative shrink-0 size-3">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${ASSETS}/1b02e636-9211-490a-86c7-dff823279480.svg`} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Trip cards list - scrollable */}
      <div className="flex flex-1 flex-col gap-0 items-start min-h-0 p-0 w-full overflow-y-auto">
        <div className="flex flex-col items-start shrink-0 w-full">
          {/* Active trip (highlighted) */}
          <button className="bg-primary-700 border-b border-gray-200 flex gap-4 items-center px-4 py-1.5 shrink-0 w-full">
            <div className="relative rounded shrink-0 size-16">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded size-full" src={`${ASSETS}/d8831b75-4284-4ac5-96f7-4f03d0947f00.png`} />
            </div>
            <div className="flex flex-1 flex-col gap-1.5 items-start min-w-0">
              <div className="flex flex-col gap-2 items-start leading-relaxed not-italic shrink-0 text-white text-left w-full whitespace-nowrap">
                <p className="font-bold overflow-hidden shrink-0 text-base text-ellipsis w-full">
                  Adventures in the Rockies: A Journey to Remember
                </p>
                <div className="flex font-normal gap-4 items-center shrink-0 text-sm w-full">
                  <div className="flex flex-1 gap-px items-center min-w-0">
                    <p className="max-w-[160px] overflow-hidden shrink-0 text-ellipsis">Elisa Denton, Robert Denton, Deb </p>
                    <p className="overflow-hidden shrink-0 text-ellipsis">+8 </p>
                  </div>
                  <p className="shrink-0">May 19, 2025</p>
                </div>
              </div>
            </div>
          </button>
          
          {/* Other trips */}
          {[
            { thumb: '7e209a56-c9dd-46c8-b793-224116a3ca14.png', title: 'Desert Adventure: Dunes and Dreams', travelers: 'Lucy Nelson, Abe Nelson, Scott Lewis', extra: '+5', date: 'Dec 27, 2025' },
            { thumb: 'e32ad634-0bc8-4323-a01f-6b5824bf6614.png', title: 'Adventure Retreat: Whispering Pines Adventure Company', travelers: 'Aaron Mathews, Pam Meznick, P', extra: '+5', date: 'Oct 25, 2025' },
            { thumb: '44dc1f6c-3d08-40dc-aeab-06dfa9abab54.png', title: 'Coastal Escape: Waves and Wonders', travelers: 'Jose Martinez, Gwen Martinez', extra: '', date: 'Feb 09, 2026' },
            { thumb: '3e469e95-c6d8-4aa1-97b0-25842639218c.png', title: 'Mountain Yoga Retreat: Southern California', travelers: 'River Moore, Kristen Oswald, Penelope', extra: '+12', date: 'Mar 30, 2025' },
            { thumb: '752d8485-44c8-48aa-9d25-5ba654673cd5.png', title: 'Historic Journey: Echoes of the Past', travelers: 'Kelly Alvarez, Ricky Adams', extra: '+6', date: 'Apr 20, 2025' },
            { thumb: 'a595d908-f85d-4251-b652-d75037392757.png', title: 'Island Paradise: A Tropical Dream', travelers: 'Marcus Kimbell, Jenn Perez', extra: '', date: 'Feb 29, 2024' },
          ].map((trip, idx) => (
            <div key={idx} className="border-b border-gray-200 flex gap-4 items-center px-4 py-1.5 shrink-0 w-full">
              <div className="relative rounded shrink-0 size-16">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded size-full" src={`${ASSETS}/${trip.thumb}`} />
              </div>
              <div className="flex flex-1 flex-col gap-1.5 items-start min-w-0">
                <div className="flex flex-col gap-2 items-start leading-relaxed not-italic shrink-0 w-full whitespace-nowrap">
                  <p className="font-bold overflow-hidden shrink-0 text-base text-blue-gray-900 text-ellipsis w-full">
                    {trip.title}
                  </p>
                  <div className="flex font-normal gap-4 items-center shrink-0 text-sm text-blue-gray-600 w-full">
                    <div className="flex flex-1 gap-px items-center min-w-0">
                      <p className="max-w-[160px] overflow-hidden shrink-0 text-ellipsis">{trip.travelers}</p>
                      {trip.extra && <p className="overflow-hidden shrink-0 text-ellipsis">{trip.extra}</p>}
                    </div>
                    <p className="shrink-0">{trip.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
