// Node 34227:79314 - Traveler: Multi-provider before accept - 1728x1413px
// Itinerary showing 2 providers (Allianz and Medjet) both in quotes state

export function Node34227_79314() {
  return (
    <div className="bg-gray-50 flex flex-col items-start w-full min-h-screen">
      {/* Same navbar as other itinerary screens */}
      <div className="bg-white w-full px-32 pr-14">
        <div className="flex items-center px-4 py-1.5">
          <div className="flex-1 flex items-center">
            <div className="flex items-center gap-1.5">
              <p className="text-base text-blue-gray-600">Viewing as</p>
              <div className="w-[291px] py-3">
                <div className="flex items-center">
                  <p className="flex-1 font-semibold text-base text-blue-gray-900 leading-tight">Elisa Denton</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3.5">
            <div className="flex gap-4">
              <div className="bg-white flex items-center justify-center px-3 py-2 rounded">
                <div className="flex gap-2 items-center">
                  <p className="text-base text-blue-gray-600">App</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white flex items-center justify-center px-3 py-2 rounded">
                <div className="flex gap-2 items-center">
                  <p className="text-base text-blue-gray-600">PDF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content with 2 provider cards */}
      <div className="flex flex-col items-start w-full">
        <div className="bg-gray-50 flex flex-col items-center px-56 w-full">
          <div className="flex items-start w-full">
            <div className="flex-1 flex flex-col items-start">
              <div className="flex flex-col items-start w-full">
                <div className="flex items-start w-full">
                  <div className="flex-1 flex gap-9 items-start pb-16 pt-5">
                    {/* Sidebar (reuse pattern) */}
                    <div className="flex flex-col w-[400px] px-5">
                      <div className="bg-gray-50 border-b border-gray-200 flex gap-2.5 items-center pr-3.5 py-3">
                        <div className="w-10 h-10 rounded bg-gray-300" />
                        <div className="flex-1 flex flex-col items-start">
                          <p className="text-sm font-bold text-blue-gray-600 uppercase leading-tight w-full">Arrival in Paris</p>
                        </div>
                      </div>
                      {['Aug 10', 'Aug 11', 'Aug 12'].map((date) => (
                        <div key={date} className="bg-gray-50 border-t border-b border-gray-200 flex gap-5 items-center px-3.5 py-3">
                          <div className="w-4 h-4 bg-gray-400 rounded" />
                          <div className="flex-1 flex flex-col items-start text-sm text-blue-gray-600">
                            <p className="leading-tight w-full">{date}</p>
                            <p className="font-bold leading-tight uppercase w-full">Day event</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Main content column with 2 insurance cards */}
                    <div className="bg-white border border-gray-200 flex flex-col items-center justify-center overflow-hidden rounded-tl-lg rounded-tr-lg">
                      {/* Simplified advisor/hero section */}
                      <div className="bg-gray-200 h-64 w-[672px]" />

                      {/* Insurance offer 1: Allianz */}
                      <div className="flex flex-col items-start overflow-hidden pb-2 pt-4 px-[19px] w-full">
                        <div className="bg-white border border-gray-200 flex flex-col items-start overflow-hidden rounded-lg w-[632px]">
                          <div className="border-b border-gray-100 flex gap-3 items-center overflow-hidden pb-3.5 pt-4 px-5 w-full">
                            <div className="bg-[#003781] h-[34px] rounded-sm w-1" />
                            <div className="border-[#003781] border-[1.5px] border-dashed flex h-8 items-center justify-center overflow-hidden px-2 rounded-md w-[110px]">
                              <p className="text-xs font-semibold text-[#003781] tracking-wider">PROVIDER LOGO</p>
                            </div>
                            <div className="flex-1 flex flex-col gap-0.5 items-start leading-relaxed overflow-hidden">
                              <div className="flex gap-1.5 items-center overflow-hidden">
                                <p className="font-bold text-base text-blue-gray-900">Allianz Travel</p>
                              </div>
                              <p className="text-xs text-blue-gray-600 w-full">Travel with confidence</p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 items-start overflow-hidden px-5 py-3.5 w-full">
                            <p className="text-base font-bold text-blue-gray-900 leading-relaxed">Add travel protection?</p>
                            <p className="text-xs text-blue-gray-500 leading-relaxed w-full">Your details: Elisa Denton | DOB Mar 3, 1986 | Colorado | Trip cost $8,400</p>
                            
                            {/* Plan list */}
                            <div className="border border-gray-200 flex flex-col items-start overflow-hidden rounded-lg w-full">
                              <div className="bg-white flex gap-3 items-center px-4 py-3 w-full border-b border-gray-100">
                                <div className="w-[18px] h-[18px] bg-gray-300 rounded-full" />
                                <div className="flex-1">
                                  <p className="text-sm font-bold text-blue-gray-900">OneTrip Basic</p>
                                  <p className="text-xs text-blue-gray-600">Cancellation $5,000 | Medical $10,000</p>
                                </div>
                                <p className="text-xl font-bold">$38</p>
                              </div>
                              <div className="bg-primary-50 flex gap-3 items-center px-4 py-3 w-full relative">
                                <div className="w-[18px] h-[18px] bg-primary-600 rounded-full" />
                                <div className="flex-1">
                                  <p className="text-sm font-bold text-blue-gray-900">OneTrip Prime</p>
                                  <p className="text-xs text-blue-gray-600">Cancellation $8,400 | Medical $50,000 | Baggage $1,000</p>
                                </div>
                                <p className="text-xl font-bold">$72</p>
                                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary-600" />
                              </div>
                            </div>
                          </div>
                          <div className="border-t border-gray-100 flex gap-3 items-center overflow-hidden pb-4 pt-3 px-5 w-full">
                            <p className="flex-1 text-xs text-blue-gray-500 leading-relaxed">Your decision is saved</p>
                            <button className="border border-gray-200 px-4 py-2 rounded text-sm font-semibold text-primary-600">Decline</button>
                            <button className="bg-primary-600 px-4 py-2 rounded text-sm font-semibold text-white">Continue with Prime, $72</button>
                          </div>
                        </div>
                      </div>

                      {/* Insurance offer 2: Medjet */}
                      <div className="flex flex-col items-start overflow-hidden pb-2 pt-4 px-[19px] w-full">
                        <div className="bg-white border border-gray-200 flex flex-col items-start overflow-hidden rounded-lg w-[632px]">
                          <div className="border-b border-gray-100 flex gap-3 items-center overflow-hidden pb-3.5 pt-4 px-5 w-full">
                            <div className="bg-[#c41e3a] h-[34px] rounded-sm w-1" />
                            <div className="border-[#c41e3a] border-[1.5px] border-dashed flex h-8 items-center justify-center overflow-hidden px-2 rounded-md w-[110px]">
                              <p className="text-xs font-semibold text-[#c41e3a] tracking-wider">PROVIDER LOGO</p>
                            </div>
                            <div className="flex-1 flex flex-col gap-0.5 items-start leading-relaxed overflow-hidden">
                              <div className="flex gap-1.5 items-center overflow-hidden">
                                <p className="font-bold text-base text-blue-gray-900">Medjet</p>
                              </div>
                              <p className="text-xs text-blue-gray-600 w-full">Medical transport membership</p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 items-start overflow-hidden px-5 py-3.5 w-full">
                            <p className="text-base font-bold text-blue-gray-900 leading-relaxed">Add medical transport?</p>
                            <p className="text-xs text-blue-gray-500 leading-relaxed w-full">Your details: Elisa Denton | DOB Mar 3, 1986 | Colorado</p>
                            
                            {/* Plan list */}
                            <div className="border border-gray-200 flex flex-col items-start overflow-hidden rounded-lg w-full">
                              <div className="bg-primary-50 flex gap-3 items-center px-4 py-3 w-full relative">
                                <div className="w-[18px] h-[18px] bg-primary-600 rounded-full" />
                                <div className="flex-1">
                                  <p className="text-sm font-bold text-blue-gray-900">Medjet Horizon</p>
                                  <p className="text-xs text-blue-gray-600">Annual membership | Medical transport</p>
                                </div>
                                <p className="text-xl font-bold">$345</p>
                                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary-600" />
                              </div>
                            </div>
                          </div>
                          <div className="border-t border-gray-100 flex gap-3 items-center overflow-hidden pb-4 pt-3 px-5 w-full">
                            <p className="flex-1 text-xs text-blue-gray-500 leading-relaxed">Your decision is saved</p>
                            <button className="border border-gray-200 px-4 py-2 rounded text-sm font-semibold text-primary-600">Decline</button>
                            <button className="bg-primary-600 px-4 py-2 rounded text-sm font-semibold text-white">Continue with Horizon, $345</button>
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
