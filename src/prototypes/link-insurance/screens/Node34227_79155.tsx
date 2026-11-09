// Node 34227:79155 - Traveler itinerary: quotes shown (details on profile) - 1728x803px
// Pixel-perfect rebuild from Figma reference code

const ASSETS = '/figma-assets/34227-79155'

export function Node34227_79155() {
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
                  <img src={`${ASSETS}/c794371f-9edd-422c-99ac-63dd391a2882.svg`} alt="" className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3.5">
            <div className="flex gap-4">
              <div className="bg-white flex items-center justify-center px-3 py-2 rounded">
                <div className="flex gap-2 items-center">
                  <img src={`${ASSETS}/5fa94431-0d01-402c-9f7c-302fd21457d4.svg`} alt="" className="w-3.5 h-3.5" />
                  <p className="text-base text-blue-gray-600">App</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white flex items-center justify-center px-3 py-2 rounded">
                <div className="flex gap-2 items-center">
                  <img src={`${ASSETS}/e5b19d81-47f0-4f43-8428-f900df5ee3b3.svg`} alt="" className="w-3.5 h-3.5" />
                  <p className="text-base text-blue-gray-600">PDF</p>
                </div>
              </div>
            </div>
            <img src={`${ASSETS}/9369412d-46af-4210-9ba0-ab4c55e0999e.svg`} alt="" className="w-5 h-5" />
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
                    <div className="bg-white border border-gray-200 flex flex-col items-center justify-center overflow-hidden rounded-tl-lg rounded-tr-lg">
                      {/* Advisor card */}
                      <div className="bg-white flex items-center justify-center p-4 w-[672px]">
                        <div className="flex-1 flex flex-col items-start">
                          <div className="flex gap-2.5 items-start w-full">
                            <img src={`${ASSETS}/66b466b8-6d48-4433-891f-c1ee805e5939.png`} alt="" className="w-16 h-16 rounded-full object-cover" />
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
                        <img src={`${ASSETS}/1527176e-4216-42a6-bfa0-c7a942b5104f.png`} alt="" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="bg-black/80 flex gap-2 items-center justify-center py-4 w-full relative z-10">
                          <img src={`${ASSETS}/76562b86-5500-4bbb-a647-3ab5e0bce02e.svg`} alt="" className="w-6 h-6" />
                          <p className="text-base text-white">email@travelagency.com</p>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-end w-full pb-0 pt-8 relative z-10">
                          <div className="flex-1 flex items-end justify-center w-full relative">
                            <img src={`${ASSETS}/c93768a7-ed30-449e-872d-3ef5f09bbc9a.png`} alt="" className="absolute inset-0 w-full h-full object-cover" />
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

                      {/* Insurance offer with quotes */}
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
                            <div className="flex gap-3 items-center overflow-hidden">
                              <div className="bg-primary-100 flex h-5 items-center justify-center px-2.5 py-0.5 rounded-full">
                                <p className="text-xs font-semibold text-primary-800 leading-relaxed">Choose a plan</p>
                              </div>
                              <img src={`${ASSETS}/f0af18af-185b-4274-b4ce-5a75ef9aca6e.svg`} alt="" className="w-4 h-4" />
                            </div>
                          </div>

                          {/* Body */}
                          <div className="flex flex-col gap-3 items-start overflow-hidden px-5 py-3.5 w-full">
                            <p className="text-base font-bold text-blue-gray-900 leading-relaxed">Add travel protection?</p>
                            
                            {/* Your details */}
                            <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-start leading-relaxed text-xs w-full">
                              <p className="text-blue-gray-500">Your details:</p>
                              <p className="font-semibold text-blue-gray-900">Elisa Denton</p>
                              <p className="text-blue-gray-600">|  DOB Mar 3, 1986  |  Colorado  |  Trip cost $8,400</p>
                              <p className="font-semibold text-primary-600">Edit</p>
                            </div>

                            {/* Plans */}
                            <div className="border border-gray-200 flex flex-col items-start overflow-hidden rounded-lg w-full">
                              {/* Basic */}
                              <div className="bg-white flex gap-3 items-center px-4 py-3 w-full">
                                <img src={`${ASSETS}/6dda37ce-54ae-4720-8fbb-440add7cd37e.svg`} alt="" className="w-[18px] h-[18px]" />
                                <div className="flex-1 flex flex-col gap-1 items-start overflow-hidden">
                                  <p className="text-sm font-bold text-blue-gray-900 leading-tight">OneTrip Basic</p>
                                  <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-blue-gray-600 leading-relaxed w-full">
                                    <p>Cancellation up to $5,000</p>
                                    <p>Medical $10,000</p>
                                  </div>
                                </div>
                                <p className="text-xl font-bold text-blue-gray-900 text-right">$38</p>
                              </div>

                              {/* Prime - Selected */}
                              <div className="bg-primary-50 border-t border-gray-100 flex gap-3 items-center px-4 py-3 w-full relative">
                                <img src={`${ASSETS}/345f46f0-e86b-4870-9d8c-fd1a61675f82.svg`} alt="" className="w-[18px] h-[18px]" />
                                <div className="flex-1 flex flex-col gap-1 items-start overflow-hidden">
                                  <p className="text-sm font-bold text-blue-gray-900 leading-tight">OneTrip Prime</p>
                                  <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-blue-gray-600 leading-relaxed w-full">
                                    <p>Cancellation up to $8,400</p>
                                    <p>Medical $50,000</p>
                                    <p>Baggage $1,000</p>
                                  </div>
                                </div>
                                <p className="text-xl font-bold text-blue-gray-900 text-right">$72</p>
                                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary-600" />
                              </div>

                              {/* Premier */}
                              <div className="bg-white border-t border-gray-100 flex gap-3 items-center px-4 py-3 w-full">
                                <img src={`${ASSETS}/6dda37ce-54ae-4720-8fbb-440add7cd37e.svg`} alt="" className="w-[18px] h-[18px]" />
                                <div className="flex-1 flex flex-col gap-1 items-start overflow-hidden">
                                  <p className="text-sm font-bold text-blue-gray-900 leading-tight">OneTrip Premier</p>
                                  <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-blue-gray-600 leading-relaxed w-full">
                                    <p>Cancellation up to $8,400</p>
                                    <p>Medical $100,000</p>
                                    <p>Baggage $2,000</p>
                                  </div>
                                </div>
                                <p className="text-xl font-bold text-blue-gray-900 text-right">$118</p>
                              </div>
                            </div>

                            {/* Compare */}
                            <div className="flex items-center justify-between leading-relaxed text-xs w-full">
                              <p className="font-semibold text-primary-600">Compare coverage ▾</p>
                              <p className="text-blue-gray-500">Prices may change slightly before purchase.</p>
                            </div>
                          </div>

                          {/* Decision bar */}
                          <div className="border-t border-gray-100 flex gap-3 items-center overflow-hidden pb-4 pt-3 px-5 w-full">
                            <p className="flex-1 text-xs text-blue-gray-500 leading-relaxed">
                              Editing your details gets new quotes. Your decision is saved with your name and the time.
                            </p>
                            <div className="border border-gray-200 flex gap-2 items-center justify-center px-4 py-2 rounded">
                              <p className="text-sm font-semibold text-primary-600 leading-tight">Decline</p>
                            </div>
                            <div className="bg-primary-600 flex gap-2 items-center justify-center px-4 py-2 rounded">
                              <p className="text-sm font-semibold text-white leading-tight">Continue with Prime, $72</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Information & Documents divider */}
                      <div className="bg-white flex gap-2 items-center py-3.5 w-[670px]">
                        <div className="h-0 w-15 relative">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img src={`${ASSETS}/b33862df-905d-4159-bcbf-2cb075f7e60d.svg`} alt="" className="block w-full h-full" />
                          </div>
                        </div>
                        <p className="text-base font-bold text-blue-gray-900 uppercase tracking-wider">Information & Documents</p>
                        <div className="flex-1 h-0 relative">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img src={`${ASSETS}/97dc358d-b8fc-4053-ac88-0f42636cec40.svg`} alt="" className="block w-full h-full" />
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
                            <img src={`${ASSETS}/b33862df-905d-4159-bcbf-2cb075f7e60d.svg`} alt="" className="block w-full h-full" />
                          </div>
                        </div>
                        <p className="text-base font-bold text-blue-gray-900 uppercase tracking-wider">Arrival in Paris</p>
                        <p className="text-base text-blue-gray-900 leading-tight">Aug 9</p>
                        <div className="flex-1 h-0 relative">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img src={`${ASSETS}/cb01294f-f584-4274-a46b-c76d9053779a.svg`} alt="" className="block w-full h-full" />
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
