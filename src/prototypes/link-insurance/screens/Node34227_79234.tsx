// Node 34227:79234 - Traveler: Logged out (CTA only) - 1728x1211px
// Pixel-perfect rebuild from Figma reference code

const ASSETS = '/figma-assets/34227-79234'

export function Node34227_79234() {
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
                  <p className="flex-1 font-semibold text-base text-blue-gray-900 leading-tight">Kyle Deterding</p>
                  <img src={`${ASSETS}/ebd2dee3-66e3-4613-831d-f16c57cfa605.svg`} alt="" className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3.5">
            <div className="flex gap-4">
              <div className="bg-white flex items-center justify-center px-3 py-2 rounded">
                <div className="flex gap-2 items-center">
                  <img src={`${ASSETS}/09a11c42-e0a7-4d25-ab51-740ba6b27e3e.svg`} alt="" className="w-3.5 h-3.5" />
                  <p className="text-base text-blue-gray-600">App</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white flex items-center justify-center px-3 py-2 rounded">
                <div className="flex gap-2 items-center">
                  <img src={`${ASSETS}/00a6db8e-8ec2-42e3-b0ee-f9318d22afb8.svg`} alt="" className="w-3.5 h-3.5" />
                  <p className="text-base text-blue-gray-600">PDF</p>
                </div>
              </div>
            </div>
            <img src={`${ASSETS}/f36c3c7c-3b30-40f1-8f10-970fbb51996f.svg`} alt="" className="w-5 h-5" />
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
                        <img src={`${ASSETS}/03cef7a2-a2fa-4d1f-a951-356a275239d1.png`} alt="" className="w-10 h-10 rounded object-cover" />
                        <div className="flex-1 flex flex-col items-start">
                          <p className="text-sm font-bold text-blue-gray-600 uppercase leading-tight w-full">Arrival in Paris</p>
                        </div>
                      </div>
                      {['Aug 10', 'Aug 11', 'Aug 12', 'Aug 13', 'Aug 14'].map((date) => (
                        <div key={date} className="bg-gray-50 border-t border-b border-gray-200 flex gap-5 items-center px-3.5 py-3">
                          <img src={`${ASSETS}/d47f59d7-a2af-4e09-aa88-9895de0adc38.svg`} alt="" className="w-4 h-4" />
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
                            <img src={`${ASSETS}/16b58b45-b5bd-424f-aed3-c98a038b5786.png`} alt="" className="w-16 h-16 rounded-full object-cover" />
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
                        <img src={`${ASSETS}/6e891a9c-85aa-4d00-9b35-2dbf5c71c9d1.png`} alt="" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="bg-black/80 flex gap-2 items-center justify-center py-4 w-full relative z-10">
                          <img src={`${ASSETS}/0f314a38-6997-4d69-9ae6-084211a42277.svg`} alt="" className="w-6 h-6" />
                          <p className="text-base text-white">email@travelagency.com</p>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-end w-full pb-0 pt-8 relative z-10">
                          <div className="flex-1 flex items-end justify-center w-full relative">
                            <img src={`${ASSETS}/742837c5-b856-4eb5-9296-fcdd25f102f1.png`} alt="" className="absolute inset-0 w-full h-full object-cover" />
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

                      {/* Insurance offer - logged out condensed */}
                      <div className="flex flex-col items-start overflow-hidden pb-2 pt-4 px-[19px] w-full">
                        <div className="bg-white border border-gray-200 flex flex-col items-start overflow-hidden rounded-lg w-[632px]">
                          {/* Provider row - condensed */}
                          <div className="flex gap-3 items-center overflow-hidden pb-3 pt-3.5 px-5 w-full">
                            <div className="bg-[#003781] h-[34px] rounded-sm w-1" />
                            <div className="border-[#003781] border-[1.5px] border-dashed flex h-8 items-center justify-center overflow-hidden px-2 rounded-md w-[110px]">
                              <p className="text-xs font-semibold text-[#003781] tracking-wider">PROVIDER LOGO</p>
                            </div>
                            <div className="flex-1 flex flex-col gap-0.5 items-start leading-relaxed overflow-hidden">
                              <div className="flex gap-1.5 items-center overflow-hidden">
                                <p className="font-bold text-base text-blue-gray-900">Allianz Travel</p>
                                <p className="text-xs text-blue-gray-500">(example)</p>
                              </div>
                              <p className="text-xs text-blue-gray-600 w-full">Your advisor shared a travel protection offer. Log in to respond.</p>
                            </div>
                            <div className="flex gap-3 items-center overflow-hidden">
                              <div className="bg-primary-600 flex gap-2 items-center justify-center px-4 py-2 rounded">
                                <p className="text-sm font-semibold text-white leading-tight">Log in</p>
                              </div>
                              <img src={`${ASSETS}/6251d28d-ab5b-4460-a333-ecc6726d0c43.svg`} alt="" className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Information & Documents divider */}
                      <div className="bg-white flex gap-2 items-center py-3.5 w-[670px]">
                        <div className="h-0 w-15 relative">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img src={`${ASSETS}/23305c13-1403-4fac-9067-9a06f67731aa.svg`} alt="" className="block w-full h-full" />
                          </div>
                        </div>
                        <p className="text-base font-bold text-blue-gray-900 uppercase tracking-wider">Information & Documents</p>
                        <div className="flex-1 h-0 relative">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img src={`${ASSETS}/19e3036f-f2e2-4343-8d09-ae2d01924b9e.svg`} alt="" className="block w-full h-full" />
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
                            <img src={`${ASSETS}/23305c13-1403-4fac-9067-9a06f67731aa.svg`} alt="" className="block w-full h-full" />
                          </div>
                        </div>
                        <p className="text-base font-bold text-blue-gray-900 uppercase tracking-wider">Arrival in Paris</p>
                        <p className="text-base text-blue-gray-900 leading-tight">Aug 9</p>
                        <div className="flex-1 h-0 relative">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img src={`${ASSETS}/8371bdc3-b766-4e82-a09d-24aa0e0006a3.svg`} alt="" className="block w-full h-full" />
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
