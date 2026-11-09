const imgTypeCircleSizeLgContentImageNotificationDotFalse = "/src/prototypes/link-insurance-v1/assets/16b58b45-b5bd-424f-aed3-c98a038b5786.png";
const imgFlowbiteSolidPlus = "/src/prototypes/link-insurance-v1/assets/d47f59d7-a2af-4e09-aa88-9895de0adc38.svg";
const imgTripThumbnail = "/src/prototypes/link-insurance-v1/assets/03cef7a2-a2fa-4d1f-a951-356a275239d1.png";
const imgHero = "/src/prototypes/link-insurance-v1/assets/6e891a9c-85aa-4d00-9b35-2dbf5c71c9d1.png";
const imgContent = "/src/prototypes/link-insurance-v1/assets/742837c5-b856-4eb5-9296-fcdd25f102f1.png";
const imgFlowbiteSolidChevronDown = "/src/prototypes/link-insurance-v1/assets/ebd2dee3-66e3-4613-831d-f16c57cfa605.svg";
const imgMaterialRoundedPhoneAndroidRounded = "/src/prototypes/link-insurance-v1/assets/09a11c42-e0a7-4d25-ab51-740ba6b27e3e.svg";
const imgFlowbiteOutlineFileLinesOutline = "/src/prototypes/link-insurance-v1/assets/00a6db8e-8ec2-42e3-b0ee-f9318d22afb8.svg";
const imgCustomIconChatOneBubble = "/src/prototypes/link-insurance-v1/assets/f36c3c7c-3b30-40f1-8f10-970fbb51996f.svg";
const imgFlowbiteOutlineEnvelopeOutline = "/src/prototypes/link-insurance-v1/assets/0f314a38-6997-4d69-9ae6-084211a42277.svg";
const imgExpand = "/src/prototypes/link-insurance-v1/assets/6251d28d-ab5b-4460-a333-ecc6726d0c43.svg";
const imgLine2 = "/src/prototypes/link-insurance-v1/assets/23305c13-1403-4fac-9067-9a06f67731aa.svg";
const imgLine1 = "/src/prototypes/link-insurance-v1/assets/19e3036f-f2e2-4343-8d09-ae2d01924b9e.svg";
const imgLine3 = "/src/prototypes/link-insurance-v1/assets/8371bdc3-b766-4e82-a09d-24aa0e0006a3.svg";

type AvatarProps = {
  className?: string;
  content?: "Image";
  notificationDot?: "False";
  size?: "lg";
  type?: "Circle";
};

function Avatar({ className, content = "Image", notificationDot = "False", size = "lg", type = "Circle" }: AvatarProps) {
  return (
    <div className={className || "relative rounded-[100px] size-[64px]"} data-node-id="26475:19054">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgTypeCircleSizeLgContentImageNotificationDotFalse} />
    </div>
  );
}

type WebItineraryNavItemProps = {
  className?: string;
  state?: "Default";
  type?: "Exact Day";
};

function WebItineraryNavItem({ className, state = "Default", type = "Exact Day" }: WebItineraryNavItemProps) {
  return (
    <div className={className || "bg-[var(--blue-gray\\/50,#f4f7fb)] border-[var(--blue-gray\\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative w-[376px]"} data-node-id="28214:95008">
      <div className="relative shrink-0 size-[16px]" data-node-id="28214:95009" data-name="flowbite_solid-plus">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="28214:95010">
        <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="28214:95011">
          Aug 10
        </p>
        <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="28214:95012">
          Arrival in Paris
        </p>
      </div>
    </div>
  );
}

export default function TravelerItineraryLoggedOutOffer() {
  return (
    <div className="bg-[var(--blue-gray\/50,#f4f7fb)] content-stretch flex flex-col items-start relative size-full" data-node-id="34227:79234" data-name="Traveler itinerary: logged out offer">
      <div className="bg-[var(--white,white)] content-stretch flex flex-col gap-[var(--0,0px)] items-start pl-[var(--32,128px)] pr-[var(--14,56px)] py-[var(--0,0px)] relative shrink-0 w-full" data-node-id="34227:79235" data-name="Navbar (application)">
        <div className="content-stretch flex gap-[var(--0,0px)] items-center px-[var(--0,0px)] py-[var(--1․5,6px)] relative shrink-0 w-full" data-node-id="I34227:79235;16661:1302" data-name="Navbar">
          <div className="content-stretch flex flex-[1_0_0] gap-[var(--8,32px)] items-center min-w-px px-[var(--4,16px)] py-[var(--0,0px)] relative" data-node-id="I34227:79235;16661:1303" data-name="Content">
            <div className="content-stretch flex flex-[1_0_0] gap-[var(--0,0px)] items-center min-w-px relative" data-node-id="I34227:79235;16661:1304" data-name="Primary global navigation">
              <div className="content-stretch flex gap-[var(--1․5,6px)] items-center p-[var(--0,0px)] relative shrink-0" data-node-id="I34227:79235;16661:1305" data-name="Nav Links">
                <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34227:79235;16661:1306">
                  Viewing as
                </p>
                <div className="content-stretch flex gap-[var(--0,0px)] items-center relative shrink-0 w-[291px]" data-node-id="I34227:79235;16661:1307">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px px-[var(--0,0px)] py-[var(--3,12px)] relative rounded-[var(--rounded,4px)]" data-node-id="I34227:79235;16661:1308" data-name="Select input">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I34227:79235;16661:1309" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Semibold'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/900,#223e47)]" data-node-id="I34227:79235;16661:1310">
                        <p className="leading-[1.25]">Kyle Deterding</p>
                      </div>
                      <div className="relative shrink-0 size-[14px]" data-node-id="I34227:79235;16661:1311" data-name="flowbite_solid-chevron-down">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidChevronDown} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--3․5,14px)] items-center relative shrink-0" data-node-id="I34227:79235;16661:1312">
              <div className="content-stretch flex gap-[var(--4,16px)] items-center relative shrink-0" data-node-id="I34227:79235;16661:1313">
                <div className="bg-[var(--white,white)] content-stretch flex flex-col items-center justify-center px-[var(--3,12px)] py-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="I34227:79235;16661:1314" data-name="Itinerary builder navigation tabs">
                  <div className="content-stretch flex gap-[var(--2,8px)] items-center relative shrink-0" data-node-id="I34227:79235;16661:1314;16101:9107">
                    <div className="relative shrink-0 size-[14px]" data-node-id="I34227:79235;16661:1314;16101:9150" data-name="material_rounded-PhoneAndroidRounded">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialRoundedPhoneAndroidRounded} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34227:79235;16661:1314;16082:43071">
                      App
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[var(--4,16px)] items-center relative shrink-0" data-node-id="I34227:79235;16661:1336">
                <div className="bg-[var(--white,white)] content-stretch flex flex-col items-center justify-center px-[var(--3,12px)] py-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="I34227:79235;16661:1337" data-name="Itinerary builder navigation tabs">
                  <div className="content-stretch flex gap-[var(--2,8px)] items-center relative shrink-0" data-node-id="I34227:79235;16661:1337;16101:9107">
                    <div className="relative shrink-0 size-[14px]" data-node-id="I34227:79235;16661:1337;16101:9150" data-name="flowbite_outline-file-lines-outline">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteOutlineFileLinesOutline} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34227:79235;16661:1337;16082:43071">
                      PDF
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 size-[20px]" data-node-id="I34227:79235;16661:1319" data-name="custom_icon-chat-one-bubble">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCustomIconChatOneBubble} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="34227:79236">
        <div className="bg-[var(--blue-gray\/50,#f4f7fb)] content-stretch flex flex-col items-center px-[224px] relative shrink-0 w-full" data-node-id="34227:79237">
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="34227:79238">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="34227:79239">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="34227:79240">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="34227:79241">
                  <div className="content-stretch flex flex-[1_0_0] gap-[var(--9,36px)] items-start min-w-px pb-[64px] pt-[var(--5,20px)] relative" data-node-id="34227:79242">
                    <div className="content-stretch flex flex-col gap-[var(--0,0px)] items-start px-[var(--5,20px)] relative shrink-0 w-[400px]" data-node-id="34227:79243" data-name="Web itinerary sidebar nav">
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid content-stretch flex gap-[var(--2․5,10px)] items-center pl-[var(--0,0px)] pr-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34227:79243;16647:80450" data-name="Web itinerary nav item">
                        <div className="relative rounded-[var(--rounded,4px)] shrink-0 size-[40px]" data-node-id="I34227:79243;16647:80450;16647:80448" data-name="Trip thumbnail">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--rounded,4px)] size-full" src={imgTripThumbnail} />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I34227:79243;16647:80450;16647:80443">
                          <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] uppercase w-full" data-node-id="I34227:79243;16647:80450;16647:80445">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                      <WebItineraryNavItem className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" />
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34227:79243;16647:80283" data-name="Web itinerary nav item">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79243;16647:80283;16647:80224" data-name="flowbite_solid-plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34227:79243;16647:80283;16647:80223">
                          <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="I34227:79243;16647:80283;16645:80221">
                            Aug 11
                          </p>
                          <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="I34227:79243;16647:80283;16645:80220">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34227:79243;16647:80291" data-name="Web itinerary nav item">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79243;16647:80291;16647:80224" data-name="flowbite_solid-plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34227:79243;16647:80291;16647:80223">
                          <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="I34227:79243;16647:80291;16645:80221">
                            Aug 12
                          </p>
                          <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="I34227:79243;16647:80291;16645:80220">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34227:79243;16647:80298" data-name="Web itinerary nav item">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79243;16647:80298;16647:80224" data-name="flowbite_solid-plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34227:79243;16647:80298;16647:80223">
                          <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="I34227:79243;16647:80298;16645:80221">
                            Aug 13
                          </p>
                          <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="I34227:79243;16647:80298;16645:80220">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34227:79243;16647:80305" data-name="Web itinerary nav item">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79243;16647:80305;16647:80224" data-name="flowbite_solid-plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34227:79243;16647:80305;16647:80223">
                          <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="I34227:79243;16647:80305;16645:80221">
                            Aug 14
                          </p>
                          <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="I34227:79243;16647:80305;16645:80220">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex flex-col items-center justify-center overflow-clip pr-[var(--0,0px)] relative rounded-tl-[var(--rounded-lg,8px)] rounded-tr-[var(--rounded-lg,8px)] shrink-0" data-node-id="34227:79244">
                      <div className="bg-[var(--white,white)] content-stretch flex items-center justify-center p-[var(--4,16px)] relative shrink-0 w-[672px]" data-node-id="34227:79245">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] items-start min-w-px relative" data-node-id="34227:79246">
                          <div className="content-stretch flex gap-[var(--2․5,10px)] items-start relative shrink-0 w-full" data-node-id="34227:79247">
                            <Avatar className="relative rounded-[100px] shrink-0 size-[64px]" />
                            <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-w-px relative" data-node-id="34227:79249">
                              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] items-start leading-[1.25] min-w-px not-italic relative" data-node-id="34227:79250">
                                <p className="relative shrink-0 text-[20px] text-[color:var(--black,#052530)] w-full" data-node-id="34227:79251">
                                  Advisor Name
                                </p>
                                <p className="relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] w-full" data-node-id="34227:79252">
                                  Travel Specialist
                                </p>
                                <p className="relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] w-full" data-node-id="34227:79253">
                                  Agency Name
                                </p>
                              </div>
                              <div className="bg-[#d9d9d9] h-[64px] relative shrink-0 w-[320px]" data-node-id="34227:79254" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[var(--0,0px)] h-[256px] items-start justify-end overflow-clip p-[var(--0,0px)] relative shrink-0 w-[672px]" data-node-id="34227:79255" data-name="Hero">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
                        <div className="bg-[var(--black,#052530)] content-stretch flex gap-[8px] items-center justify-center opacity-80 py-[var(--4,16px)] relative shrink-0 w-full" data-node-id="I34227:79255;16688:85379">
                          <div className="relative shrink-0 size-[24px]" data-node-id="I34227:79255;16688:85380" data-name="flowbite_outline-envelope-outline">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteOutlineEnvelopeOutline} />
                          </div>
                          <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34227:79255;16688:85381">
                            email@travelagency.com
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--16,64px)] items-start justify-end min-h-px pb-[var(--0,0px)] pt-[var(--8,32px)] px-[var(--0,0px)] relative w-full" data-node-id="I34227:79255;16688:85309" data-name="Background">
                          <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-node-id="I34227:79255;16688:85310" data-name="Content">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContent} />
                            <div className="content-stretch flex flex-[1_0_0] h-full items-end justify-between min-w-px px-[var(--5,20px)] py-[var(--4,16px)] relative" data-node-id="I34227:79255;16688:85311">
                              <div className="content-stretch flex gap-[var(--2,8px)] items-center p-[var(--0,0px)] relative shrink-0" data-node-id="I34227:79255;16688:85312" data-name="Title & Desc">
                                <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] gap-[var(--0,0px)] items-start not-italic px-[var(--4,16px)] relative shrink-0 text-[color:var(--white,white)] w-[672px]" data-node-id="I34227:79255;16688:85375">
                                  <p className="leading-[1.5] relative shrink-0 text-[16px] w-full" data-node-id="I34227:79255;16688:85376">
                                    Aug 9, 2025 - Aug 16, 2025
                                  </p>
                                  <p className="leading-[1.25] relative shrink-0 text-[30px] w-full" data-node-id="I34227:79255;16688:85377">
                                    10 Day Euro Sights Trip
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start overflow-clip pb-[8px] pt-[16px] px-[19px] relative shrink-0 w-full" data-node-id="34227:79256" data-name="Travel protection (outside Info & Docs)">
                        <div className="bg-[var(--white,white)] border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex h-[60px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="34227:79257" data-name="Insurance offer card">
                          <div className="bg-[#003781] h-full relative shrink-0 w-[4px]" data-node-id="I34227:79257;34170:2176" data-name="Provider accent" />
                          <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip px-[16px] py-[12px] relative" data-node-id="I34227:79257;34170:2177" data-name="Summary">
                            <div className="border-[#003781] border-[1.5px] border-dashed content-stretch flex h-[26px] items-center justify-center overflow-clip px-[8px] relative rounded-[6px] shrink-0 w-[46px]" data-node-id="I34227:79257;34170:2178" data-name="Provider logo">
                              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[#003781] text-[12px] tracking-[0.6px] whitespace-nowrap" data-node-id="I34227:79257;34170:2179">
                                LOGO
                              </p>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip relative" data-node-id="I34227:79257;34170:2180" data-name="Summary text">
                              <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="I34227:79257;34170:2515" data-name="Title row">
                                <p className="[word-break:break-word] font-['Inter:Bold'] h-full leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] w-[275px] whitespace-pre-wrap">{`Allianz Travel (example)  ·  Travel protection`}</p>
                              </div>
                              <div className="content-center flex flex-wrap gap-[2px_6px] items-center overflow-clip relative shrink-0 w-full" data-node-id="I34227:79257;34170:2182" data-name="Summary details">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] leading-[1.5] min-w-px not-italic relative text-[12px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34227:79257;34170:2183">
                                  Your advisor shared an offer for this trip.
                                </p>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--0,0px)] py-[var(--1,4px)] relative rounded-[var(--rounded-sm,4px)] shrink-0" data-node-id="I34227:79257;34170:2193" data-name="Button - Decline (text link)">
                              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[12px] not-italic relative shrink-0 text-[12px] text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="I34227:79257;34170:2193;15922:373848">
                                Decline
                              </p>
                            </div>
                            <div className="bg-[var(--primary\/600,#2a79a6)] content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--3,12px)] py-[var(--2,8px)] relative rounded-[var(--rounded-sm,4px)] shrink-0" data-node-id="I34227:79257;34170:2201" data-name="Button - Primary">
                              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[12px] not-italic relative shrink-0 text-[12px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34227:79257;34170:2201;27:127547">
                                Log in to see options
                              </p>
                            </div>
                            <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79257;34170:2187" data-name="Expand">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExpand} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[var(--white,white)] content-stretch flex gap-[var(--2,8px)] items-center py-[var(--3․5,14px)] relative shrink-0 w-[670px]" data-node-id="34227:79258" data-name="Day with divider">
                        <div className="h-0 relative shrink-0 w-[60px]" data-node-id="I34227:79258;16691:85574">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine2} />
                          </div>
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] tracking-[0.96px] uppercase whitespace-nowrap" data-node-id="I34227:79258;16691:85575">{`Information & Documents`}</p>
                        <div className="flex-[1_0_0] h-0 min-w-px relative" data-node-id="I34227:79258;16691:85577">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine1} />
                          </div>
                        </div>
                      </div>
                      <div className="bg-[var(--white,white)] content-stretch flex items-center justify-center p-[var(--4,16px)] relative shrink-0 w-[672px]" data-node-id="34227:79268">
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] leading-[1.5] min-w-px not-italic relative text-[20px] text-[color:var(--black,#052530)]" data-node-id="34227:79269">
                          Discover the beauty of the Balkans on this immersive 14-night cruise. From exciting cities like Belgrade and Bucharest, to small towns in Hungary and Bulgaria, enjoy the best the region has to offer.
                        </p>
                      </div>
                      <div className="bg-[var(--white,white)] content-stretch flex gap-[var(--2,8px)] items-center py-[var(--3․5,14px)] relative shrink-0 w-[670px]" data-node-id="34227:79270" data-name="Day with divider">
                        <div className="h-0 relative shrink-0 w-[60px]" data-node-id="I34227:79270;16691:85574">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine2} />
                          </div>
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] tracking-[0.96px] uppercase whitespace-nowrap" data-node-id="I34227:79270;16691:85575">
                          Arrival in Paris
                        </p>
                        <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.25] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34227:79270;16691:85576">
                          Aug 9
                        </p>
                        <div className="flex-[1_0_0] h-0 min-w-px relative" data-node-id="I34227:79270;16691:85577">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine3} />
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
  );
}
