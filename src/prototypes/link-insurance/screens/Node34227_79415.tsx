// Node 34227:79415 - Traveler: before quote (pre-quote offer card in itinerary) - 1728x1011px
// Pixel-perfect rebuild from Figma reference code

const ASSETS = '/figma-assets/34227-79415'

export function Node34227_79415() {
  return (
    <div className="bg-gray-50 flex flex-col items-start w-full min-h-screen">
      {/* Navbar */}
      <div className="bg-white w-full px-32 pr-14">
        <div className="flex items-center px-4 py-1.5">
          <div className="flex-1 flex items-center">
            <div className="flex items-center gap-1.5">
              <p className="text-base text-blue-gray-600">Viewing as</p>
              <div className="w-[291px] py-3">
                <div className="flex items-center">
                  <p className="flex-1 font-semibold text-base text-blue-gray-900 leading-tight">Elisa Denton</p>
                  <img src={`${ASSETS}/d487cbe4-3b35-43ea-8940-0d4f86f60564.svg`} alt="" className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3.5">
            <div className="flex gap-4">
              <div className="bg-white flex items-center justify-center px-3 py-2 rounded">
                <div className="flex gap-2 items-center">
                  <img src={`${ASSETS}/9e21d41e-1918-4cf2-8263-52aa254fa08f.svg`} alt="" className="w-3.5 h-3.5" />
                  <p className="text-base text-blue-gray-600">App</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white flex items-center justify-center px-3 py-2 rounded">
                <div className="flex gap-2 items-center">
                  <img src={`${ASSETS}/601397bb-d4ea-47aa-8023-d12d824743ca.svg`} alt="" className="w-3.5 h-3.5" />
                  <p className="text-base text-blue-gray-600">PDF</p>
                </div>
              </div>
            </div>
            <img src={`${ASSETS}/74c0fa94-377c-4069-88ea-4a5531accfb5.svg`} alt="" className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-start w-full">
        <div className="bg-gray-50 flex flex-col items-center px-56 w-full">
          <div className="flex items-start w-full">
            <div className="flex-1 flex flex-col items-start">
              <div className="flex flex-col items-start w-full">
                <div className="flex items-start w-full">
                  <div className="flex-1 flex gap-9 items-start pb-16 pt-5">
                    {/* Sidebar */}
                    <div className="flex flex-col w-[400px] px-5">
                      <div className="bg-gray-50 border-b border-gray-200 flex gap-2.5 items-center pr-3.5 py-3">
                        <img src={`${ASSETS}/96ea98e4-dcd9-449e-a8d7-3216fe8cdc81.png`} alt="" className="w-10 h-10 rounded object-cover" />
                        <div className="flex-1 flex flex-col items-start">
                          <p className="text-sm font-bold text-blue-gray-600 uppercase leading-tight w-full">Arrival in Paris</p>
                        </div>
                      </div>
                      {['Aug 10', 'Aug 11', 'Aug 12', 'Aug 13', 'Aug 14'].map((date) => (
                        <div key={date} className="bg-gray-50 border-t border-b border-gray-200 flex gap-5 items-center px-3.5 py-3">
                          <img src={`${ASSETS}/eeb5b1b6-ad20-4c01-a6af-0ad3bc0887d7.svg`} alt="" className="w-4 h-4" />
                          <div className="flex-1 flex flex-col items-start text-sm text-blue-gray-600">
                            <p className="leading-tight w-full">{date}</p>
                            <p className="font-bold leading-tight uppercase w-full">Arrival in Paris</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Main content */}
                    <div className="bg-white border border-gray-200 flex flex-col items-center justify-center overflow-hidden rounded-tl-lg rounded-tr-lg">
                      {/* Advisor card */}
                      <div className="bg-white flex items-center justify-center p-4 w-[672px]">
                        <div className="flex-1 flex flex-col items-start">
                          <div className="flex gap-2.5 items-start w-full">
                            <img src={`${ASSETS}/35719c72-7e1c-4011-b718-b096348d5e15.png`} alt="" className="w-16 h-16 rounded-full object-cover" />
                            <div className="flex-1 flex items-start justify-between">
                              <div className="flex-1 flex flex-col items-start leading-tight">
                                <p className="text-xl text-black w-full">Advisor Name</p>
                                <p className="text-base text-blue-gray-600 w-full">Travel Specialist</p>
                                <p className="text-base text-blue-gray-600 w-full">Agency Name</p>
                              </div>
                              <div className="bg-[#d9d9d9] h-16 w-80" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Hero */}
                      <div className="flex flex-col h-64 items-start justify-end overflow-hidden w-[672px] relative">
                        <img src={`${ASSETS}/8f56cb27-62ae-491a-88db-0688c58cca7b.png`} alt="" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="bg-black/80 flex gap-2 items-center justify-center py-4 w-full relative z-10">
                          <img src={`${ASSETS}/7d915164-7d93-45b9-98a6-cf40db46ce8f.svg`} alt="" className="w-6 h-6" />
                          <p className="text-base text-white">email@travelagency.com</p>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-end w-full pb-0 pt-8 relative z-10">
                          <div className="flex-1 flex items-end justify-center w-full relative">
                            <img src={`${ASSETS}/8937893f-0cf6-47da-a132-99298105cc6b.png`} alt="" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="flex-1 h-full flex items-end justify-between px-5 py-4 relative">
                              <div className="flex gap-2 items-center">
                                <div className="flex flex-col px-4 w-[672px] text-white">
                                  <p className="text-base leading-relaxed w-full">Aug 9, 2025 - Aug 16, 2025</p>
                                  <p className="text-3xl leading-tight w-full">10 Day Euro Sights Trip</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Insurance offer - pre-quote */}
                      <div className="flex flex-col items-center overflow-hidden pb-2 pt-4 w-full">
                        <div className="bg-white border border-gray-200 flex flex-col items-start overflow-hidden rounded-lg w-[632px]">
                          {/* Provider row */}
                          <div className="border-b border-gray-100 flex gap-3 items-center overflow-hidden pb-3.5 pt-4 px-5 w-full">
                            <div className="bg-[#003781] h-[34px] rounded-sm w-1" />
                            <div className="border-[#003781] border-[1.5px] border-dashed flex h-8 items-center justify-center overflow-hidden px-2 rounded-md w-[110px]">
                              <p className="text-xs font-semibold text-[#003781] tracking-wider whitespace-nowrap">PROVIDER LOGO</p>
                            </div>
                            <div className="flex-1 flex flex-col gap-0.5 items-start leading-relaxed overflow-hidden">
                              <div className="flex gap-1.5 items-center overflow-hidden">
                                <p className="font-bold text-base text-blue-gray-900">Allianz Travel</p>
                                <p className="text-xs text-blue-gray-500">(example)</p>
                              </div>
                              <p className="text-xs text-blue-gray-600 w-full">Travel with confidence, wherever you go.</p>
                            </div>
                            <div className="flex gap-3 items-center overflow-hidden">
                              <p className="text-sm font-semibold text-primary-600 leading-tight">Sample policy</p>
                              <img src={`${ASSETS}/5e09542a-6177-4cc4-9430-d751d1bd3f34.svg`} alt="" className="w-4 h-4" />
                            </div>
                          </div>

                          {/* Body */}
                          <div className="flex flex-col gap-2 items-start overflow-hidden px-5 py-3.5 w-full">
                            <p className="text-base font-bold text-blue-gray-900 leading-relaxed">Add travel protection?</p>
                            <p className="text-sm text-blue-gray-600 leading-tight w-full">
                              Your advisor shared a travel protection offer for this trip. Get a quote to see plans and prices for your details, or decline.
                            </p>
                            <p className="text-xs text-blue-gray-500 leading-relaxed w-full">
                              Plans can include trip cancellation, medical and baggage cover.
                            </p>
                          </div>

                          {/* Decision bar */}
                          <div className="border-t border-gray-100 flex gap-3 items-center overflow-hidden pb-4 pt-3 px-5 w-full">
                            <p className="flex-1 text-xs text-blue-gray-500 leading-relaxed">
                              Your decision is saved with your name and the time.
                            </p>
                            <div className="border border-gray-200 flex gap-2 items-center justify-center px-4 py-2 rounded">
                              <p className="text-sm font-semibold text-primary-600 leading-tight">Decline</p>
                            </div>
                            <div className="bg-primary-600 flex gap-2 items-center justify-center px-4 py-2 rounded">
                              <p className="text-sm font-semibold text-white leading-tight">Get a quote</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Information & Documents divider */}
                      <div className="bg-white flex gap-2 items-center py-3.5 w-[670px]">
                        <div className="h-0 w-15 relative">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img src={`${ASSETS}/73c92303-6436-437e-a5c3-1aead6b4f013.svg`} alt="" className="block w-full h-full" />
                          </div>
                        </div>
                        <p className="text-base font-bold text-blue-gray-900 uppercase tracking-wider">Information & Documents</p>
                        <div className="flex-1 h-0 relative">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img src={`${ASSETS}/5b4352ce-a98c-420a-a0ae-f8e563af0d0c.svg`} alt="" className="block w-full h-full" />
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="bg-white flex items-center justify-center p-4 w-[672px]">
                        <p className="flex-1 text-xl text-black leading-relaxed">
                          Discover the beauty of the Balkans on this immersive 14-night cruise. From exciting cities like Belgrade and Bucharest, to small towns in Hungary and Bulgaria, enjoy the best the region has to offer.
                        </p>
                      </div>

                      {/* Arrival day divider */}
                      <div className="bg-white flex gap-2 items-center py-3.5 w-[670px]">
                        <div className="h-0 w-15 relative">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img src={`${ASSETS}/73c92303-6436-437e-a5c3-1aead6b4f013.svg`} alt="" className="block w-full h-full" />
                          </div>
                        </div>
                        <p className="text-base font-bold text-blue-gray-900 uppercase tracking-wider">Arrival in Paris</p>
                        <p className="text-base text-blue-gray-900 leading-tight">Aug 9</p>
                        <div className="flex-1 h-0 relative">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img src={`${ASSETS}/d949f10f-7760-4819-af5c-ccc7ac8088c5.svg`} alt="" className="block w-full h-full" />
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
