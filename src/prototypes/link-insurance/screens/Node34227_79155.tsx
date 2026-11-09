// Node 34227:79155 - Traveler itinerary: quotes shown - 1728x803px
// Fixed with correct provider header, plan data, and footer

const ASSETS = '/figma-assets/34227-79155'

export function Node34227_79155() {
  return (
    <div className="bg-gray-50 flex flex-col items-center w-[1728px] h-[803px]">
      {/* Navbar */}
      <div className="bg-white w-full shrink-0">
        <div className="flex items-center justify-between px-6 py-1.5">
          <div className="flex items-center gap-1.5">
            <p className="text-base text-blue-gray-600">Viewing as</p>
            <div className="w-[240px] py-3">
              <div className="flex items-center">
                <p className="flex-1 font-semibold text-base text-blue-gray-900 leading-tight">Elisa Denton</p>
                <img src={`${ASSETS}/c794371f-9edd-422c-99ac-63dd391a2882.svg`} alt="" className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 items-center px-3 py-2">
              <img src={`${ASSETS}/5fa94431-0d01-402c-9f7c-302fd21457d4.svg`} alt="" className="w-3.5 h-3.5" />
              <p className="text-base text-blue-gray-600">App</p>
            </div>
            <div className="flex gap-2 items-center px-3 py-2">
              <img src={`${ASSETS}/e5b19d81-47f0-4f43-8428-f900df5ee3b3.svg`} alt="" className="w-3.5 h-3.5" />
              <p className="text-base text-blue-gray-600">PDF</p>
            </div>
            <img src={`${ASSETS}/9369412d-46af-4210-9ba0-ab4c55e0999e.svg`} alt="" className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 items-start justify-center w-full overflow-hidden">
        <div className="bg-gray-50 flex items-start gap-6 px-6 py-5">
          {/* Sidebar */}
          <div className="flex flex-col w-[376px] shrink-0">
            <div className="bg-gray-50 border-b border-gray-200 flex gap-2.5 items-center px-3.5 py-3">
              <img src={`${ASSETS}/7c8362e2-f22e-4db1-8a3a-952f96965e4f.png`} alt="" className="w-10 h-10 rounded object-cover" />
              <div className="flex-1 flex flex-col items-start">
                <p className="text-sm font-bold text-blue-gray-600 uppercase leading-tight w-full">Arrival in Paris</p>
              </div>
            </div>
            {['Aug 10', 'Aug 11', 'Aug 12', 'Aug 13', 'Aug 14'].map((date) => (
              <div key={date} className="bg-gray-50 border-t border-b border-gray-200 flex gap-5 items-center px-3.5 py-3">
                <img src={`${ASSETS}/fe91f930-1df3-4a0c-88d9-aef025a81335.svg`} alt="" className="w-4 h-4" />
                <div className="flex-1 flex flex-col items-start text-sm text-blue-gray-600">
                  <p className="leading-tight w-full">{date}</p>
                  <p className="font-bold leading-tight uppercase w-full">Arrival in Paris</p>
                </div>
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="bg-white border border-gray-200 flex flex-col overflow-hidden rounded-t w-[600px] shrink-0">
            {/* Advisor card */}
            <div className="bg-white flex items-center justify-center p-4 w-full">
              <div className="flex gap-2.5 items-start w-full">
                <img src={`${ASSETS}/66b466b8-6d48-4433-891f-c1ee805e5939.png`} alt="" className="w-16 h-16 rounded-full object-cover" />
                <div className="flex-1 flex flex-col items-start leading-tight">
                  <p className="text-xl text-black w-full">Advisor Name</p>
                  <p className="text-base text-blue-gray-600 w-full">Travel Specialist</p>
                  <p className="text-base text-blue-gray-600 w-full">Agency Name</p>
                </div>
              </div>
            </div>

            {/* Hero */}
            <div className="flex flex-col h-48 items-start justify-end overflow-hidden w-full relative">
              <img src={`${ASSETS}/1527176e-4216-42a6-bfa0-c7a942b5104f.png`} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="bg-black/80 flex gap-2 items-center justify-center py-3 w-full relative z-10">
                <img src={`${ASSETS}/76562b86-5500-4bbb-a647-3ab5e0bce02e.svg`} alt="" className="w-5 h-5" />
                <p className="text-sm text-white">email@travelagency.com</p>
              </div>
            </div>
            
            {/* Trip title */}
            <div className="relative w-full">
              <img src={`${ASSETS}/c93768a7-ed30-449e-872d-3ef5f09bbc9a.png`} alt="" className="w-full h-20 object-cover" />
              <div className="absolute inset-0 flex items-end p-4">
                <div className="text-white">
                  <p className="text-xs">Aug 9, 2025 - Aug 16, 2025</p>
                  <p className="text-xl font-semibold">10 Day Euro Sights Trip</p>
                </div>
              </div>
            </div>

            {/* Insurance offer card */}
            <div className="flex flex-col items-start py-3.5 w-full">
              {/* Provider header */}
              <div className="flex flex-col items-start px-4 pb-3 w-full">
                <div className="border-2 border-dashed border-gray-300 flex items-center justify-center h-12 w-full rounded mb-2">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">PROVIDER LOGO</p>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="text-sm font-semibold text-black">Allianz Travel</p>
                      <p className="text-xs font-normal text-blue-gray-500">(example)</p>
                    </div>
                    <p className="text-xs text-blue-gray-600">Comprehensive travel protection</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-green-100 border border-green-400 inline-flex items-center justify-center px-2.5 py-0.5 rounded-3xl">
                      <p className="text-xs font-normal text-green-800 leading-relaxed">Active</p>
                    </div>
                    <img src={`${ASSETS}/f0af18af-185b-4274-b4ce-5a75ef9aca6e.svg`} alt="" className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Header */}
              <div className="flex flex-col items-start px-4 pb-3 w-full">
                <div className="flex items-center gap-2 pb-1">
                  <div className="bg-primary-100 flex items-center justify-center px-2.5 py-0.5 rounded-full">
                    <p className="text-xs font-semibold text-primary-800 leading-relaxed">Choose a plan</p>
                  </div>
                </div>
                <p className="text-base font-semibold text-blue-gray-900 w-full">Travel Protection</p>
              </div>

              {/* Plans */}
              <div className="border border-gray-200 flex flex-col overflow-hidden rounded-lg mx-4 mb-3 w-[calc(100%-32px)]">
                {/* OneTrip Basic */}
                <div className="bg-white flex gap-3 items-center px-4 py-3 w-full">
                  <div className="relative shrink-0 size-[18px]">
                    <div className="absolute inset-0 border-2 border-gray-300 rounded-full" />
                  </div>
                  <div className="flex-1 flex flex-col gap-1 items-start overflow-hidden min-w-0">
                    <p className="font-bold leading-tight text-sm text-blue-gray-900 whitespace-nowrap">OneTrip Basic</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 font-normal leading-relaxed text-xs text-blue-gray-600 w-full">
                      <p className="shrink-0 whitespace-nowrap">Cancellation up to $5,000</p>
                      <p className="shrink-0 whitespace-nowrap">Medical $10,000</p>
                    </div>
                  </div>
                  <p className="font-bold leading-relaxed text-xl text-blue-gray-900 text-right whitespace-nowrap shrink-0">$38</p>
                </div>

                {/* OneTrip Prime - SELECTED */}
                <div className="bg-primary-50 border-t border-blue-gray-100 flex gap-3 items-center px-4 py-3 w-full relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary-600" />
                  <div className="relative shrink-0 size-[18px]">
                    <div className="absolute inset-0 border-2 border-primary-600 rounded-full bg-white" />
                    <div className="absolute inset-[5px] bg-primary-600 rounded-full" />
                  </div>
                  <div className="flex-1 flex flex-col gap-1 items-start overflow-hidden min-w-0">
                    <p className="font-bold leading-tight text-sm text-blue-gray-900 whitespace-nowrap">OneTrip Prime</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 font-normal leading-relaxed text-xs text-blue-gray-600 w-full">
                      <p className="shrink-0 whitespace-nowrap">Cancellation up to $8,400</p>
                      <p className="shrink-0 whitespace-nowrap">Medical $50,000</p>
                      <p className="shrink-0 whitespace-nowrap">Baggage $1,000</p>
                    </div>
                  </div>
                  <p className="font-bold leading-relaxed text-xl text-blue-gray-900 text-right whitespace-nowrap shrink-0">$72</p>
                </div>

                {/* OneTrip Premier */}
                <div className="bg-white border-t border-blue-gray-100 flex gap-3 items-center px-4 py-3 w-full">
                  <div className="relative shrink-0 size-[18px]">
                    <div className="absolute inset-0 border-2 border-gray-300 rounded-full" />
                  </div>
                  <div className="flex-1 flex flex-col gap-1 items-start overflow-hidden min-w-0">
                    <p className="font-bold leading-tight text-sm text-blue-gray-900 whitespace-nowrap">OneTrip Premier</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 font-normal leading-relaxed text-xs text-blue-gray-600 w-full">
                      <p className="shrink-0 whitespace-nowrap">Cancellation up to $8,400</p>
                      <p className="shrink-0 whitespace-nowrap">Medical $100,000</p>
                      <p className="shrink-0 whitespace-nowrap">Baggage $2,000</p>
                    </div>
                  </div>
                  <p className="font-bold leading-relaxed text-xl text-blue-gray-900 text-right whitespace-nowrap shrink-0">$118</p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col gap-2 px-4 w-full">
                <div className="flex items-center justify-between w-full">
                  <button className="text-sm font-normal text-primary-600">Compare coverage ▾</button>
                  <p className="text-xs font-normal text-blue-gray-500">Prices may change slightly before purchase.</p>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <button className="border border-gray-200 flex gap-2 items-center justify-center px-4 py-2 rounded">
                    <p className="text-sm font-semibold text-primary-600 leading-tight">Decline</p>
                  </button>
                  <button className="bg-primary-600 flex-1 flex gap-2 items-center justify-center px-4 py-2 rounded">
                    <p className="text-sm font-semibold text-white leading-tight">Continue with Prime, $72</p>
                  </button>
                </div>
              </div>
            </div>

            {/* Information & Documents section */}
            <div className="border-t border-gray-200 flex items-center gap-4 px-4 py-3 w-full">
              <p className="font-bold text-base text-blue-gray-900 uppercase tracking-wider">Information & Documents</p>
              <div className="flex-1 h-0 border-t border-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
