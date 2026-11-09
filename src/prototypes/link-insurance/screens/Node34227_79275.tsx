// Node 34227:79275 - Traveler: Proposal view with intro offer card - 1728x1088px
// Full traveler trip page viewing as Kyle Deterding

const ASSETS = '/figma-assets/34227-79275'

export function Node34227_79275() {
  return (
    <div className="bg-blue-gray-50 flex flex-col items-start w-full h-full">
      {/* Navbar */}
      <div className="bg-white w-full pl-32 pr-14">
        <div className="flex items-center px-4 py-1.5">
          <div className="flex-1 flex items-center">
            <div className="flex items-center gap-1.5">
              <p className="text-base text-blue-gray-600">Viewing as</p>
              <div className="w-[291px] py-3">
                <div className="flex items-center">
                  <p className="flex-1 font-semibold text-base text-blue-gray-900 leading-tight">Kyle Deterding</p>
                  <img src={`${ASSETS}/026e3153-2894-419c-a687-404c849a82d6.svg`} alt="chevron" className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3.5">
            <div className="flex gap-4">
              <div className="bg-white flex flex-col items-center justify-center px-3 py-2 rounded">
                <div className="flex gap-2 items-center">
                  <img src={`${ASSETS}/0ec38efc-6b93-4f7f-b864-fa9e5f913364.svg`} alt="App" className="w-3.5 h-3.5" />
                  <p className="text-base text-blue-gray-600">App</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white flex flex-col items-center justify-center px-3 py-2 rounded">
                <div className="flex gap-2 items-center">
                  <img src={`${ASSETS}/c3075b6c-df46-46f2-9d7e-79a3b84fdfa0.svg`} alt="PDF" className="w-3.5 h-3.5" />
                  <p className="text-base text-blue-gray-600">PDF</p>
                </div>
              </div>
            </div>
            <img src={`${ASSETS}/654c9998-79a4-4100-8d2d-6eef338a7530.svg`} alt="Chat" className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-col items-start w-full">
        <div className="bg-blue-gray-50 flex flex-col items-center px-56 w-full">
          <div className="flex items-start w-full">
            <div className="flex-1 flex flex-col items-start">
              <div className="flex flex-col items-start w-full">
                <div className="flex items-start w-full">
                  <div className="flex-1 flex gap-9 items-start pb-16 pt-5">
                    
                    {/* Left sidebar - day list */}
                    <div className="flex flex-col w-[400px] px-5">
                      {/* Trip thumbnail header */}
                      <div className="bg-blue-gray-50 border-b border-gray-200 flex gap-2.5 items-center pr-3.5 py-3">
                        <img src={`${ASSETS}/0fb1eef9-f847-4155-80ff-675986df2656.png`} alt="Trip" className="w-10 h-10 rounded object-cover" />
                        <div className="flex-1">
                          <p className="text-sm font-bold text-blue-gray-600 uppercase">Arrival in Paris</p>
                        </div>
                      </div>
                      
                      {/* Day nav items */}
                      <div className="bg-blue-gray-50 border-b border-t border-gray-200 flex gap-5 items-center px-3.5 py-3">
                        <img src={`${ASSETS}/e5b580fa-f34f-4c44-8c25-71c20fa83169.svg`} alt="+" className="w-4 h-4" />
                        <div className="flex-1 flex flex-col items-start text-sm text-blue-gray-600">
                          <p className="leading-tight">Aug 10</p>
                          <p className="font-bold leading-tight uppercase">Arrival in Paris</p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-gray-50 border-b border-t border-gray-200 flex gap-5 items-center px-3.5 py-3">
                        <img src={`${ASSETS}/e5b580fa-f34f-4c44-8c25-71c20fa83169.svg`} alt="+" className="w-4 h-4" />
                        <div className="flex-1 flex flex-col items-start text-sm text-blue-gray-600">
                          <p className="leading-tight">Aug 11</p>
                          <p className="font-bold leading-tight uppercase">Arrival in Paris</p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-gray-50 border-b border-t border-gray-200 flex gap-5 items-center px-3.5 py-3">
                        <img src={`${ASSETS}/e5b580fa-f34f-4c44-8c25-71c20fa83169.svg`} alt="+" className="w-4 h-4" />
                        <div className="flex-1 flex flex-col items-start text-sm text-blue-gray-600">
                          <p className="leading-tight">Aug 12</p>
                          <p className="font-bold leading-tight uppercase">Arrival in Paris</p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-gray-50 border-b border-t border-gray-200 flex gap-5 items-center px-3.5 py-3">
                        <img src={`${ASSETS}/e5b580fa-f34f-4c44-8c25-71c20fa83169.svg`} alt="+" className="w-4 h-4" />
                        <div className="flex-1 flex flex-col items-start text-sm text-blue-gray-600">
                          <p className="leading-tight">Aug 13</p>
                          <p className="font-bold leading-tight uppercase">Arrival in Paris</p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-gray-50 border-b border-t border-gray-200 flex gap-5 items-center px-3.5 py-3">
                        <img src={`${ASSETS}/e5b580fa-f34f-4c44-8c25-71c20fa83169.svg`} alt="+" className="w-4 h-4" />
                        <div className="flex-1 flex flex-col items-start text-sm text-blue-gray-600">
                          <p className="leading-tight">Aug 14</p>
                          <p className="font-bold leading-tight uppercase">Arrival in Paris</p>
                        </div>
                      </div>
                    </div>

                    {/* Right content area */}
                    <div className="bg-white border border-gray-200 flex flex-col items-center justify-center overflow-hidden rounded-tl-lg rounded-tr-lg">
                      
                      {/* Advisor card */}
                      <div className="bg-white flex items-center justify-center p-4 w-[672px]">
                        <div className="flex-1 flex flex-col gap-0 items-start">
                          <div className="flex gap-2.5 items-start w-full">
                            <img src={`${ASSETS}/f2fb03e8-1cb0-4030-bf85-b2884f709b8b.png`} alt="Advisor" className="w-16 h-16 rounded-full object-cover" />
                            <div className="flex-1 flex items-start justify-between">
                              <div className="flex-1 flex flex-col items-start leading-tight">
                                <p className="text-xl text-black">Advisor Name</p>
                                <p className="text-base text-blue-gray-600">Travel Specialist</p>
                                <p className="text-base text-blue-gray-600">Agency Name</p>
                              </div>
                              <div className="bg-[#d9d9d9] h-16 w-[320px]" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Hero image */}
                      <div className="flex flex-col gap-0 h-64 items-start justify-end overflow-hidden w-[672px] relative">
                        <img src={`${ASSETS}/4930d0ec-a21b-48b1-9ae0-9ad36128d59a.png`} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
                        
                        {/* Email bar */}
                        <div className="bg-black/80 flex gap-2 items-center justify-center py-4 w-full relative z-10">
                          <img src={`${ASSETS}/5201ce20-5c8f-4a93-86e5-3972daf1690b.svg`} alt="Email" className="w-6 h-6" />
                          <p className="text-base text-white">email@travelagency.com</p>
                        </div>
                        
                        {/* Title overlay */}
                        <div className="flex-1 flex flex-col gap-16 items-start justify-end w-full pb-0 pt-8 px-0 relative">
                          <div className="flex-1 flex items-end justify-center w-full relative">
                            <img src={`${ASSETS}/e5b8c61f-3100-4b24-95b6-ef01c812b4e8.png`} alt="Content background" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="flex-1 h-full flex items-end justify-between px-5 py-4 relative">
                              <div className="flex gap-2 items-center">
                                <div className="flex flex-col gap-0 items-start px-4 text-white w-[672px]">
                                  <p className="text-base leading-normal">Aug 9, 2025 - Aug 16, 2025</p>
                                  <p className="text-[30px] leading-tight">Proposal: 10 Day Euro Sights Trip</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Insurance offer card */}
                      <div className="flex flex-col items-start overflow-hidden pb-2 pt-4 px-[19px] w-full">
                        <div className="bg-white border border-gray-200 flex flex-col items-start overflow-hidden rounded-lg w-full">
                          
                          {/* Provider row */}
                          <div className="border-b border-gray-100 flex gap-3 items-center overflow-hidden pb-3.5 pt-4 px-5 w-full">
                            <div className="bg-[#003781] h-[34px] rounded-sm w-1" />
                            <div className="border-[#003781] border-[1.5px] border-dashed flex h-8 items-center justify-center overflow-hidden px-2 rounded-md w-[110px]">
                              <p className="text-xs font-semibold text-[#003781] tracking-wider">PROVIDER LOGO</p>
                            </div>
                            <div className="flex-1 flex flex-col gap-0.5 items-start leading-relaxed overflow-hidden">
                              <div className="flex gap-1.5 items-center overflow-hidden">
                                <p className="font-bold text-base text-blue-gray-900">Allianz Travel</p>
                                <p className="text-xs text-blue-gray-500">(example)</p>
                              </div>
                              <p className="text-xs text-blue-gray-600 w-full">Travel with confidence, wherever you go.</p>
                            </div>
                            <p className="text-sm font-semibold text-primary-600 leading-tight">Sample policy</p>
                            <img src={`${ASSETS}/b4e49c47-9181-44e2-8758-7701e0143c4f.svg`} alt="Collapse" className="w-4 h-4" />
                          </div>
                          
                          {/* Body */}
                          <div className="flex flex-col gap-2 items-start overflow-hidden px-5 py-3.5 w-full">
                            <p className="text-base font-bold text-blue-gray-900 leading-normal">Add travel protection?</p>
                            <p className="text-sm text-blue-gray-600 leading-tight w-full">
                              Your advisor shared a travel protection offer for this trip. Get a quote to see plans and prices for your details, or decline.
                            </p>
                            <p className="text-xs text-blue-gray-500 leading-normal w-full">
                              Plans can include trip cancellation, medical and baggage cover.
                            </p>
                          </div>
                          
                          {/* Decision bar */}
                          <div className="border-t border-gray-100 flex gap-3 items-center overflow-hidden pb-4 pt-3 px-5 w-full">
                            <p className="flex-1 text-xs text-blue-gray-500 leading-normal">Your answer carries over to your itinerary when you book. It is saved with your name and the time.</p>
                            <button className="border border-gray-200 px-4 py-2 rounded text-sm font-semibold text-primary-600 hover:bg-gray-50">
                              Decline
                            </button>
                            <button className="bg-primary-600 px-4 py-2 rounded text-sm font-semibold text-white hover:bg-primary-700">
                              Get a quote
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Information & Documents section */}
                      <div className="bg-white flex gap-2 items-center py-3.5 w-[670px]">
                        <div className="h-0 w-[60px] relative">
                          <div className="absolute inset-y-[-1px] inset-x-0">
                            <img src={`${ASSETS}/2f82dbfd-606c-45b3-baa5-9f064f66e074.svg`} alt="" className="block w-full h-full" />
                          </div>
                        </div>
                        <p className="text-base font-bold text-blue-gray-900 tracking-widest uppercase">Information & Documents</p>
                        <div className="flex-1 h-0 relative">
                          <div className="absolute inset-y-[-1px] inset-x-0">
                            <img src={`${ASSETS}/98fa1a7e-6b86-4585-9778-a85642622550.svg`} alt="" className="block w-full h-full" />
                          </div>
                        </div>
                      </div>

                      {/* Description text */}
                      <div className="bg-white flex items-center justify-center p-4 w-[672px]">
                        <p className="flex-1 text-xl text-black leading-normal">
                          Discover the beauty of the Balkans on this immersive 14-night cruise. From exciting cities like Belgrade and Bucharest, to small towns in Hungary and Bulgaria, enjoy the best the region has to offer.
                        </p>
                      </div>

                      {/* Arrival in Paris day header */}
                      <div className="bg-white flex gap-2 items-center py-3.5 w-[670px]">
                        <div className="h-0 w-[60px] relative">
                          <div className="absolute inset-y-[-1px] inset-x-0">
                            <img src={`${ASSETS}/2f82dbfd-606c-45b3-baa5-9f064f66e074.svg`} alt="" className="block w-full h-full" />
                          </div>
                        </div>
                        <p className="text-base font-bold text-blue-gray-900 tracking-widest uppercase">Arrival in Paris</p>
                        <p className="text-base text-blue-gray-900 leading-tight">Aug 9</p>
                        <div className="flex-1 h-0 relative">
                          <div className="absolute inset-y-[-1px] inset-x-0">
                            <img src={`${ASSETS}/6232f635-de2f-401d-9e3c-11d8453926ec.svg`} alt="" className="block w-full h-full" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
