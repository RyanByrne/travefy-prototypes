// Full layout from Figma 34227:79415 - Traveler itinerary before quote (1728x1011px)
import { InsuranceCardFigma } from './InsuranceCardFigma'

const ASSETS_BASE = '/figma-assets/34227-79415'

export function TravelerItineraryFullLayout() {
  return (
    <div className="bg-gray-50 flex flex-col items-start w-full min-h-screen">
      {/* Navbar */}
      <div className="bg-white w-full px-32 pr-14">
        <div className="flex items-center gap-8 px-4 py-1.5">
          <div className="flex-1 flex items-center gap-6">
            <p className="text-base text-blue-gray-600">Viewing as</p>
            <div className="w-[291px] py-3 relative">
              <div className="flex items-center">
                <p className="flex-1 font-semibold text-base text-blue-gray-900">Elisa Denton</p>
                <img 
                  src={`${ASSETS_BASE}/d487cbe4-3b35-43ea-8940-0d4f86f60564.svg`}
                  alt=""
                  className="w-3.5 h-3.5"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3.5">
            <div className="flex gap-4 items-center">
              <div className="bg-white flex items-center justify-center px-3 py-2 rounded">
                <div className="flex gap-2 items-center">
                  <img 
                    src={`${ASSETS_BASE}/9e21d41e-1918-4cf2-8263-52aa254fa08f.svg`}
                    alt=""
                    className="w-3.5 h-3.5"
                  />
                  <p className="text-base text-blue-gray-600">App</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-white flex items-center justify-center px-3 py-2 rounded">
                <div className="flex gap-2 items-center">
                  <img 
                    src={`${ASSETS_BASE}/601397bb-d4ea-47aa-8023-d12d824743ca.svg`}
                    alt=""
                    className="w-3.5 h-3.5"
                  />
                  <p className="text-base text-blue-gray-600">PDF</p>
                </div>
              </div>
            </div>
            <img 
              src={`${ASSETS_BASE}/74c0fa94-377c-4069-88ea-4a5531accfb5.svg`}
              alt=""
              className="w-5 h-5"
            />
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
                    {/* Sidebar navigation */}
                    <div className="flex flex-col w-[400px] px-5">
                      {/* Trip thumbnail */}
                      <div className="bg-gray-50 border-b border-gray-200 flex gap-2.5 items-center pr-3.5 py-3">
                        <img 
                          src={`${ASSETS_BASE}/96ea98e4-dcd9-449e-a8d7-3216fe8cdc81.png`}
                          alt=""
                          className="w-10 h-10 rounded object-cover"
                        />
                        <div className="flex-1 flex flex-col items-start">
                          <p className="text-sm font-bold text-blue-gray-600 uppercase leading-tight w-full">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>

                      {/* Day items */}
                      {['Aug 10', 'Aug 11', 'Aug 12', 'Aug 13', 'Aug 14'].map((date) => (
                        <div key={date} className="bg-gray-50 border-t border-b border-gray-200 flex gap-5 items-center px-3.5 py-3">
                          <img 
                            src={`${ASSETS_BASE}/eeb5b1b6-ad20-4c01-a6af-0ad3bc0887d7.svg`}
                            alt=""
                            className="w-4 h-4"
                          />
                          <div className="flex-1 flex flex-col items-start text-sm text-blue-gray-600">
                            <p className="leading-tight w-full">{date}</p>
                            <p className="font-bold leading-tight uppercase w-full">Arrival in Paris</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Main content area */}
                    <div className="bg-white border border-gray-200 flex flex-col items-center justify-center overflow-hidden rounded-tl-lg rounded-tr-lg">
                      {/* Advisor card */}
                      <div className="bg-white flex items-center justify-center p-4 w-[672px]">
                        <div className="flex-1 flex flex-col items-start">
                          <div className="flex gap-2.5 items-start w-full">
                            <img 
                              src={`${ASSETS_BASE}/35719c72-7e1c-4011-b718-b096348d5e15.png`}
                              alt=""
                              className="w-16 h-16 rounded-full object-cover"
                            />
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

                      {/* Hero image */}
                      <div className="flex flex-col h-64 items-start justify-end overflow-hidden w-[672px] relative">
                        <img 
                          src={`${ASSETS_BASE}/8f56cb27-62ae-491a-88db-0688c58cca7b.png`}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="bg-black/80 flex gap-2 items-center justify-center py-4 w-full relative z-10">
                          <img 
                            src={`${ASSETS_BASE}/7d915164-7d93-45b9-98a6-cf40db46ce8f.svg`}
                            alt=""
                            className="w-6 h-6"
                          />
                          <p className="text-base text-white">email@travelagency.com</p>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-end w-full pb-0 pt-8 relative z-10">
                          <div className="flex-1 flex items-end justify-center w-full relative">
                            <img 
                              src={`${ASSETS_BASE}/8937893f-0cf6-47da-a132-99298105cc6b.png`}
                              alt=""
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="flex-1 h-full flex items-end justify-between px-5 py-4 relative">
                              <div className="flex gap-2 items-center p-0">
                                <div className="flex flex-col px-4 w-[672px] text-white">
                                  <p className="text-base leading-relaxed w-full">Aug 9, 2025 - Aug 16, 2025</p>
                                  <p className="text-3xl leading-tight w-full">10 Day Euro Sights Trip</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Insurance offer */}
                      <div className="flex flex-col items-start overflow-hidden pb-2 pt-4 px-[19px] w-full">
                        <InsuranceCardFigma
                          state="pre-quote"
                          providerName="Allianz Travel"
                          providerTagline="Travel with confidence, wherever you go."
                          travelerName="Elisa Denton"
                          className="w-full"
                        />
                      </div>

                      {/* Information & Documents divider */}
                      <div className="bg-white flex gap-2 items-center py-3.5 w-[670px]">
                        <div className="h-0 w-15 relative">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img 
                              src={`${ASSETS_BASE}/73c92303-6436-437e-a5c3-1aead6b4f013.svg`}
                              alt=""
                              className="block w-full h-full"
                            />
                          </div>
                        </div>
                        <p className="text-base font-bold text-blue-gray-900 uppercase tracking-wider">
                          Information & Documents
                        </p>
                        <div className="flex-1 h-0 relative">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img 
                              src={`${ASSETS_BASE}/5b4352ce-a98c-420a-a0ae-f8e563af0d0c.svg`}
                              alt=""
                              className="block w-full h-full"
                            />
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
                            <img 
                              src={`${ASSETS_BASE}/73c92303-6436-437e-a5c3-1aead6b4f013.svg`}
                              alt=""
                              className="block w-full h-full"
                            />
                          </div>
                        </div>
                        <p className="text-base font-bold text-blue-gray-900 uppercase tracking-wider">
                          Arrival in Paris
                        </p>
                        <p className="text-base text-blue-gray-900 leading-tight">
                          Aug 9
                        </p>
                        <div className="flex-1 h-0 relative">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img 
                              src={`${ASSETS_BASE}/d949f10f-7760-4819-af5c-ccc7ac8088c5.svg`}
                              alt=""
                              className="block w-full h-full"
                            />
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
