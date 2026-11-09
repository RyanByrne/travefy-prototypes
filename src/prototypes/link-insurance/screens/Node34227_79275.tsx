// Node 34227:79275 - Traveler: Proposal view - 1728x1088px
// Itinerary with insurance shown as line item on proposal requiring approval

export function Node34227_79275() {
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

                      {/* Proposal card */}
                      <div className="flex flex-col items-start overflow-hidden pb-2 pt-4 px-[19px] w-full">
                        <div className="bg-white border border-gray-200 flex flex-col items-start overflow-hidden rounded-lg w-[632px]">
                          <div className="border-b border-gray-100 flex items-center gap-3 overflow-hidden pb-3 pt-4 px-5 w-full">
                            <div className="flex-1">
                              <p className="text-xl font-bold text-blue-gray-900">Proposal</p>
                              <p className="text-sm text-blue-gray-600">Your advisor sent this for approval</p>
                            </div>
                            <div className="bg-yellow-100 flex items-center px-3 py-1.5 rounded-full">
                              <p className="text-sm font-semibold text-yellow-800">Awaiting approval</p>
                            </div>
                          </div>

                          {/* Proposal line items */}
                          <div className="flex flex-col w-full">
                            <div className="border-b border-gray-100 flex items-center justify-between px-5 py-4">
                              <div className="flex-1">
                                <p className="text-sm font-semibold text-blue-gray-900">Trip booking</p>
                                <p className="text-xs text-blue-gray-600">Aug 9-16, 2025 • 7 nights</p>
                              </div>
                              <p className="text-base font-bold text-blue-gray-900">$8,400</p>
                            </div>

                            <div className="border-b border-gray-100 flex items-center justify-between px-5 py-4 bg-primary-50/30">
                              <div className="flex-1">
                                <p className="text-sm font-semibold text-blue-gray-900">Travel protection</p>
                                <p className="text-xs text-blue-gray-600">Allianz Travel OneTrip Prime</p>
                              </div>
                              <p className="text-base font-bold text-blue-gray-900">$72</p>
                            </div>

                            <div className="border-b border-gray-200 flex items-center justify-between px-5 py-4">
                              <div className="flex-1">
                                <p className="text-base font-bold text-blue-gray-900">Total</p>
                              </div>
                              <p className="text-xl font-bold text-blue-gray-900">$8,472</p>
                            </div>
                          </div>

                          <div className="flex flex-col gap-3 px-5 py-4">
                            <p className="text-sm text-blue-gray-700 leading-relaxed">
                              Approving authorizes your advisor to charge your card on file for the full amount. Travel protection is included in the total.
                            </p>
                            <div className="flex gap-3">
                              <button className="flex-1 px-4 py-2.5 border border-gray-200 rounded text-sm font-semibold text-blue-gray-900 hover:bg-gray-50">
                                Request changes
                              </button>
                              <button className="flex-1 px-4 py-2.5 bg-primary-600 rounded text-sm font-semibold text-white hover:bg-primary-700">
                                Approve and pay $8,472
                              </button>
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
