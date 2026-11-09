// Node 34245:3118 - Traveler: One accepted (others locked/muted) - 1728x1076px
// Itinerary showing one provider accepted, others locked with explanation

export function Node34245_3118() {
  return (
    <div className="bg-gray-50 flex flex-col items-start w-full min-h-screen">
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
        </div>
      </div>

      <div className="flex flex-col items-start w-full">
        <div className="bg-gray-50 flex flex-col items-center px-56 w-full">
          <div className="flex items-start w-full">
            <div className="flex-1 flex flex-col items-start">
              <div className="flex flex-col items-start w-full">
                <div className="flex items-start w-full">
                  <div className="flex-1 flex gap-9 items-start pb-16 pt-5">
                    <div className="flex flex-col w-[400px] px-5">
                      <div className="bg-gray-50 border-b border-gray-200 flex gap-2.5 items-center pr-3.5 py-3">
                        <div className="w-10 h-10 rounded bg-gray-300" />
                        <div className="flex-1"><p className="text-sm font-bold text-blue-gray-600 uppercase">Trip</p></div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 flex flex-col items-center justify-center overflow-hidden rounded-tl-lg rounded-tr-lg">
                      <div className="bg-gray-200 h-64 w-[672px]" />

                      {/* Accepted provider card */}
                      <div className="flex flex-col items-start overflow-hidden pb-2 pt-4 px-[19px] w-full">
                        <div className="bg-white border border-gray-200 flex flex-col items-start overflow-hidden rounded-lg w-[632px]">
                          <div className="border-b border-gray-100 flex gap-3 items-center overflow-hidden pb-3.5 pt-4 px-5 w-full">
                            <div className="bg-[#003781] h-[34px] rounded-sm w-1" />
                            <div className="border-[#003781] border-[1.5px] border-dashed flex h-8 items-center justify-center px-2 rounded-md w-[110px]">
                              <p className="text-xs font-semibold text-[#003781] tracking-wider">PROVIDER LOGO</p>
                            </div>
                            <div className="flex-1">
                              <p className="font-bold text-base text-blue-gray-900">Allianz Travel</p>
                              <p className="text-xs text-blue-gray-600">OneTrip Prime, $72 • Accepted May 11, 14:02</p>
                            </div>
                            <div className="bg-indigo-100 flex items-center px-2.5 py-0.5 rounded-full h-5">
                              <p className="text-xs font-semibold text-indigo-800">Accepted</p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 px-5 py-3.5">
                            <p className="text-sm text-blue-gray-700">You accepted OneTrip Prime on May 11 at 14:02. <span className="font-semibold text-primary-600">Change decision</span></p>
                          </div>
                        </div>
                      </div>

                      {/* Locked provider cards (2 examples) */}
                      <div className="flex flex-col items-start overflow-hidden pb-2 pt-4 px-[19px] w-full">
                        <div className="bg-gray-100 border border-gray-200 flex flex-col items-start overflow-hidden rounded-lg w-[632px] opacity-60">
                          <div className="border-b border-gray-200 flex gap-3 items-center overflow-hidden pb-3.5 pt-4 px-5 w-full">
                            <div className="bg-[#c41e3a] h-[34px] rounded-sm w-1 opacity-40" />
                            <div className="border-[#c41e3a] border-[1.5px] border-dashed flex h-8 items-center justify-center px-2 rounded-md w-[110px] opacity-40">
                              <p className="text-xs font-semibold text-[#c41e3a] tracking-wider">PROVIDER</p>
                            </div>
                            <div className="flex-1">
                              <p className="font-bold text-sm text-blue-gray-700">Medjet</p>
                              <p className="text-xs text-blue-gray-600">Locked: you already accepted Allianz Travel</p>
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
    </div>
  )
}
