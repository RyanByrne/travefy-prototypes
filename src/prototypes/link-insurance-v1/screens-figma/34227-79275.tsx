const imgTypeCircleSizeLgContentImageNotificationDotFalse = "/src/prototypes/link-insurance-v1/assets/f2fb03e8-1cb0-4030-bf85-b2884f709b8b.png";
const imgFlowbiteSolidPlus = "/src/prototypes/link-insurance-v1/assets/e5b580fa-f34f-4c44-8c25-71c20fa83169.svg";
const imgTripThumbnail = "/src/prototypes/link-insurance-v1/assets/0fb1eef9-f847-4155-80ff-675986df2656.png";
const imgHero = "/src/prototypes/link-insurance-v1/assets/4930d0ec-a21b-48b1-9ae0-9ad36128d59a.png";
const imgContent = "/src/prototypes/link-insurance-v1/assets/e5b8c61f-3100-4b24-95b6-ef01c812b4e8.png";
const imgFlowbiteSolidChevronDown = "/src/prototypes/link-insurance-v1/assets/026e3153-2894-419c-a687-404c849a82d6.svg";
const imgMaterialRoundedPhoneAndroidRounded = "/src/prototypes/link-insurance-v1/assets/0ec38efc-6b93-4f7f-b864-fa9e5f913364.svg";
const imgFlowbiteOutlineFileLinesOutline = "/src/prototypes/link-insurance-v1/assets/c3075b6c-df46-46f2-9d7e-79a3b84fdfa0.svg";
const imgCustomIconChatOneBubble = "/src/prototypes/link-insurance-v1/assets/654c9998-79a4-4100-8d2d-6eef338a7530.svg";
const imgFlowbiteOutlineEnvelopeOutline = "/src/prototypes/link-insurance-v1/assets/5201ce20-5c8f-4a93-86e5-3972daf1690b.svg";
const imgCollapse = "/src/prototypes/link-insurance-v1/assets/b4e49c47-9181-44e2-8758-7701e0143c4f.svg";
const imgLine2 = "/src/prototypes/link-insurance-v1/assets/2f82dbfd-606c-45b3-baa5-9f064f66e074.svg";
const imgLine1 = "/src/prototypes/link-insurance-v1/assets/98fa1a7e-6b86-4585-9778-a85642622550.svg";
const imgLine3 = "/src/prototypes/link-insurance-v1/assets/6232f635-de2f-401d-9e3c-11d8453926ec.svg";

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

export default function TravelerProposalOfferBeforeQuote() {
  return (
    <div className="bg-[var(--blue-gray\/50,#f4f7fb)] content-stretch flex flex-col items-start relative size-full" data-node-id="34227:79275" data-name="Traveler proposal: offer before quote">
      <div className="bg-[var(--white,white)] content-stretch flex flex-col gap-[var(--0,0px)] items-start pl-[var(--32,128px)] pr-[var(--14,56px)] py-[var(--0,0px)] relative shrink-0 w-full" data-node-id="34227:79276" data-name="Navbar (application)">
        <div className="content-stretch flex gap-[var(--0,0px)] items-center px-[var(--0,0px)] py-[var(--1․5,6px)] relative shrink-0 w-full" data-node-id="I34227:79276;16661:1302" data-name="Navbar">
          <div className="content-stretch flex flex-[1_0_0] gap-[var(--8,32px)] items-center min-w-px px-[var(--4,16px)] py-[var(--0,0px)] relative" data-node-id="I34227:79276;16661:1303" data-name="Content">
            <div className="content-stretch flex flex-[1_0_0] gap-[var(--0,0px)] items-center min-w-px relative" data-node-id="I34227:79276;16661:1304" data-name="Primary global navigation">
              <div className="content-stretch flex gap-[var(--1․5,6px)] items-center p-[var(--0,0px)] relative shrink-0" data-node-id="I34227:79276;16661:1305" data-name="Nav Links">
                <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34227:79276;16661:1306">
                  Viewing as
                </p>
                <div className="content-stretch flex gap-[var(--0,0px)] items-center relative shrink-0 w-[291px]" data-node-id="I34227:79276;16661:1307">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px px-[var(--0,0px)] py-[var(--3,12px)] relative rounded-[var(--rounded,4px)]" data-node-id="I34227:79276;16661:1308" data-name="Select input">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I34227:79276;16661:1309" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Semibold'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/900,#223e47)]" data-node-id="I34227:79276;16661:1310">
                        <p className="leading-[1.25]">Kyle Deterding</p>
                      </div>
                      <div className="relative shrink-0 size-[14px]" data-node-id="I34227:79276;16661:1311" data-name="flowbite_solid-chevron-down">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidChevronDown} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--3․5,14px)] items-center relative shrink-0" data-node-id="I34227:79276;16661:1312">
              <div className="content-stretch flex gap-[var(--4,16px)] items-center relative shrink-0" data-node-id="I34227:79276;16661:1313">
                <div className="bg-[var(--white,white)] content-stretch flex flex-col items-center justify-center px-[var(--3,12px)] py-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="I34227:79276;16661:1314" data-name="Itinerary builder navigation tabs">
                  <div className="content-stretch flex gap-[var(--2,8px)] items-center relative shrink-0" data-node-id="I34227:79276;16661:1314;16101:9107">
                    <div className="relative shrink-0 size-[14px]" data-node-id="I34227:79276;16661:1314;16101:9150" data-name="material_rounded-PhoneAndroidRounded">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialRoundedPhoneAndroidRounded} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34227:79276;16661:1314;16082:43071">
                      App
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[var(--4,16px)] items-center relative shrink-0" data-node-id="I34227:79276;16661:1336">
                <div className="bg-[var(--white,white)] content-stretch flex flex-col items-center justify-center px-[var(--3,12px)] py-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="I34227:79276;16661:1337" data-name="Itinerary builder navigation tabs">
                  <div className="content-stretch flex gap-[var(--2,8px)] items-center relative shrink-0" data-node-id="I34227:79276;16661:1337;16101:9107">
                    <div className="relative shrink-0 size-[14px]" data-node-id="I34227:79276;16661:1337;16101:9150" data-name="flowbite_outline-file-lines-outline">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteOutlineFileLinesOutline} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34227:79276;16661:1337;16082:43071">
                      PDF
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 size-[20px]" data-node-id="I34227:79276;16661:1319" data-name="custom_icon-chat-one-bubble">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCustomIconChatOneBubble} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="34227:79277">
        <div className="bg-[var(--blue-gray\/50,#f4f7fb)] content-stretch flex flex-col items-center px-[224px] relative shrink-0 w-full" data-node-id="34227:79278">
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="34227:79279">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="34227:79280">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="34227:79281">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="34227:79282">
                  <div className="content-stretch flex flex-[1_0_0] gap-[var(--9,36px)] items-start min-w-px pb-[64px] pt-[var(--5,20px)] relative" data-node-id="34227:79283">
                    <div className="content-stretch flex flex-col gap-[var(--0,0px)] items-start px-[var(--5,20px)] relative shrink-0 w-[400px]" data-node-id="34227:79284" data-name="Web itinerary sidebar nav">
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid content-stretch flex gap-[var(--2․5,10px)] items-center pl-[var(--0,0px)] pr-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34227:79284;16647:80450" data-name="Web itinerary nav item">
                        <div className="relative rounded-[var(--rounded,4px)] shrink-0 size-[40px]" data-node-id="I34227:79284;16647:80450;16647:80448" data-name="Trip thumbnail">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--rounded,4px)] size-full" src={imgTripThumbnail} />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I34227:79284;16647:80450;16647:80443">
                          <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] uppercase w-full" data-node-id="I34227:79284;16647:80450;16647:80445">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                      <WebItineraryNavItem className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" />
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34227:79284;16647:80283" data-name="Web itinerary nav item">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79284;16647:80283;16647:80224" data-name="flowbite_solid-plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34227:79284;16647:80283;16647:80223">
                          <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="I34227:79284;16647:80283;16645:80221">
                            Aug 11
                          </p>
                          <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="I34227:79284;16647:80283;16645:80220">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34227:79284;16647:80291" data-name="Web itinerary nav item">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79284;16647:80291;16647:80224" data-name="flowbite_solid-plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34227:79284;16647:80291;16647:80223">
                          <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="I34227:79284;16647:80291;16645:80221">
                            Aug 12
                          </p>
                          <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="I34227:79284;16647:80291;16645:80220">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34227:79284;16647:80298" data-name="Web itinerary nav item">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79284;16647:80298;16647:80224" data-name="flowbite_solid-plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34227:79284;16647:80298;16647:80223">
                          <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="I34227:79284;16647:80298;16645:80221">
                            Aug 13
                          </p>
                          <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="I34227:79284;16647:80298;16645:80220">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34227:79284;16647:80305" data-name="Web itinerary nav item">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79284;16647:80305;16647:80224" data-name="flowbite_solid-plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34227:79284;16647:80305;16647:80223">
                          <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="I34227:79284;16647:80305;16645:80221">
                            Aug 14
                          </p>
                          <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="I34227:79284;16647:80305;16645:80220">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex flex-col items-center justify-center overflow-clip pr-[var(--0,0px)] relative rounded-tl-[var(--rounded-lg,8px)] rounded-tr-[var(--rounded-lg,8px)] shrink-0" data-node-id="34227:79285">
                      <div className="bg-[var(--white,white)] content-stretch flex items-center justify-center p-[var(--4,16px)] relative shrink-0 w-[672px]" data-node-id="34227:79286">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] items-start min-w-px relative" data-node-id="34227:79287">
                          <div className="content-stretch flex gap-[var(--2․5,10px)] items-start relative shrink-0 w-full" data-node-id="34227:79288">
                            <Avatar className="relative rounded-[100px] shrink-0 size-[64px]" />
                            <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-w-px relative" data-node-id="34227:79290">
                              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] items-start leading-[1.25] min-w-px not-italic relative" data-node-id="34227:79291">
                                <p className="relative shrink-0 text-[20px] text-[color:var(--black,#052530)] w-full" data-node-id="34227:79292">
                                  Advisor Name
                                </p>
                                <p className="relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] w-full" data-node-id="34227:79293">
                                  Travel Specialist
                                </p>
                                <p className="relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] w-full" data-node-id="34227:79294">
                                  Agency Name
                                </p>
                              </div>
                              <div className="bg-[#d9d9d9] h-[64px] relative shrink-0 w-[320px]" data-node-id="34227:79295" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[var(--0,0px)] h-[256px] items-start justify-end overflow-clip p-[var(--0,0px)] relative shrink-0 w-[672px]" data-node-id="34227:79296" data-name="Hero">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
                        <div className="bg-[var(--black,#052530)] content-stretch flex gap-[8px] items-center justify-center opacity-80 py-[var(--4,16px)] relative shrink-0 w-full" data-node-id="I34227:79296;16688:85379">
                          <div className="relative shrink-0 size-[24px]" data-node-id="I34227:79296;16688:85380" data-name="flowbite_outline-envelope-outline">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteOutlineEnvelopeOutline} />
                          </div>
                          <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34227:79296;16688:85381">
                            email@travelagency.com
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--16,64px)] items-start justify-end min-h-px pb-[var(--0,0px)] pt-[var(--8,32px)] px-[var(--0,0px)] relative w-full" data-node-id="I34227:79296;16688:85309" data-name="Background">
                          <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-node-id="I34227:79296;16688:85310" data-name="Content">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContent} />
                            <div className="content-stretch flex flex-[1_0_0] h-full items-end justify-between min-w-px px-[var(--5,20px)] py-[var(--4,16px)] relative" data-node-id="I34227:79296;16688:85311">
                              <div className="content-stretch flex gap-[var(--2,8px)] items-center p-[var(--0,0px)] relative shrink-0" data-node-id="I34227:79296;16688:85312" data-name="Title & Desc">
                                <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] gap-[var(--0,0px)] items-start not-italic px-[var(--4,16px)] relative shrink-0 text-[color:var(--white,white)] w-[672px]" data-node-id="I34227:79296;16688:85375">
                                  <p className="leading-[1.5] relative shrink-0 text-[16px] w-full" data-node-id="I34227:79296;16688:85376">
                                    Aug 9, 2025 - Aug 16, 2025
                                  </p>
                                  <p className="leading-[1.25] relative shrink-0 text-[30px] w-full" data-node-id="I34227:79296;16688:85377">
                                    Proposal: 10 Day Euro Sights Trip
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start overflow-clip pb-[8px] pt-[16px] px-[19px] relative shrink-0 w-full" data-node-id="34227:79297" data-name="Proposal pricing and travel protection">
                        <div className="bg-[var(--white,white)] border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="34227:79298" data-name="Insurance offer card">
                          <div className="border-[var(--blue-gray\/100,#e1e7ec)] border-b border-solid content-stretch flex gap-[12px] items-center overflow-clip pb-[14px] pt-[16px] px-[20px] relative shrink-0 w-full" data-node-id="I34227:79298;34160:3768" data-name="Provider row">
                            <div className="bg-[#003781] h-[34px] relative rounded-[2px] shrink-0 w-[4px]" data-node-id="I34227:79298;34160:3769" data-name="Provider accent" />
                            <div className="border-[#003781] border-[1.5px] border-dashed content-stretch flex h-[32px] items-center justify-center overflow-clip px-[8px] relative rounded-[6px] shrink-0 w-[110px]" data-node-id="I34227:79298;34160:3770" data-name="Provider logo">
                              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[#003781] text-[12px] tracking-[0.6px] whitespace-nowrap" data-node-id="I34227:79298;34160:3771">
                                PROVIDER LOGO
                              </p>
                            </div>
                            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-w-px not-italic overflow-clip relative" data-node-id="I34227:79298;34160:3772" data-name="Provider name">
                              <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="I34227:79298;34160:3773" data-name="Name line">
                                <p className="font-['Inter:Bold'] relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)]" data-node-id="I34227:79298;34160:3774">
                                  Allianz Travel
                                </p>
                                <p className="font-['Inter:Regular'] relative shrink-0 text-[12px] text-[color:var(--blue-gray\/500,#678390)]" data-node-id="I34227:79298;34160:3775">
                                  (example)
                                </p>
                              </div>
                              <p className="font-['Inter:Regular'] min-w-full relative shrink-0 text-[12px] text-[color:var(--blue-gray\/600,#4f666d)] w-[min-content]" data-node-id="I34227:79298;34160:3776">
                                Travel with confidence, wherever you go.
                              </p>
                            </div>
                            <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="I34227:79298;34160:3777" data-name="Header actions">
                              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="I34227:79298;34160:3778">
                                Sample policy
                              </p>
                              <div className="relative shrink-0 size-[16px]" data-node-id="I34227:79298;34164:2329" data-name="Collapse">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCollapse} />
                              </div>
                            </div>
                          </div>
                          <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip px-[20px] py-[14px] relative shrink-0 w-full" data-node-id="I34227:79298;34160:3781" data-name="Body">
                            <p className="font-['Inter:Bold'] leading-[1.5] relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34227:79298;34160:3782">
                              Add travel protection?
                            </p>
                            <p className="font-['Inter:Regular'] leading-[1.43] min-w-full relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] w-[min-content]" data-node-id="I34227:79298;34160:3783">
                              Your advisor shared a travel protection offer for this trip. Get a quote to see plans and prices for your details, or decline.
                            </p>
                            <p className="font-['Inter:Regular'] leading-[1.5] min-w-full relative shrink-0 text-[12px] text-[color:var(--blue-gray\/500,#678390)] w-[min-content]" data-node-id="I34227:79298;34160:3784">
                              Plans can include trip cancellation, medical and baggage cover.
                            </p>
                          </div>
                          <div className="border-[var(--blue-gray\/100,#e1e7ec)] border-solid border-t content-stretch flex gap-[12px] items-center overflow-clip pb-[16px] pt-[12px] px-[20px] relative shrink-0 w-full" data-node-id="I34227:79298;34160:3785" data-name="Decision bar">
                            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] leading-[1.5] min-w-px not-italic relative text-[12px] text-[color:var(--blue-gray\/500,#678390)]" data-node-id="I34227:79298;34160:3786">
                              Your answer carries over to your itinerary when you book. It is saved with your name and the time.
                            </p>
                            <div className="border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-[var(--rounded-sm,4px)] shrink-0" data-node-id="I34227:79298;34160:3787" data-name="Button - Decline">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="I34227:79298;34160:3787;29:127807">
                                <p className="leading-[1.43]">Decline</p>
                              </div>
                            </div>
                            <div className="bg-[var(--primary\/600,#2a79a6)] content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-[var(--rounded-sm,4px)] shrink-0" data-node-id="I34227:79298;34160:3793" data-name="Button - Primary">
                              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34227:79298;34160:3793;27:127543">
                                Get a quote
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[var(--white,white)] content-stretch flex gap-[var(--2,8px)] items-center py-[var(--3․5,14px)] relative shrink-0 w-[670px]" data-node-id="34227:79299" data-name="Day with divider">
                        <div className="h-0 relative shrink-0 w-[60px]" data-node-id="I34227:79299;16691:85574">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine2} />
                          </div>
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] tracking-[0.96px] uppercase whitespace-nowrap" data-node-id="I34227:79299;16691:85575">{`Information & Documents`}</p>
                        <div className="flex-[1_0_0] h-0 min-w-px relative" data-node-id="I34227:79299;16691:85577">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine1} />
                          </div>
                        </div>
                      </div>
                      <div className="bg-[var(--white,white)] content-stretch flex items-center justify-center p-[var(--4,16px)] relative shrink-0 w-[672px]" data-node-id="34227:79309">
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] leading-[1.5] min-w-px not-italic relative text-[20px] text-[color:var(--black,#052530)]" data-node-id="34227:79310">
                          Discover the beauty of the Balkans on this immersive 14-night cruise. From exciting cities like Belgrade and Bucharest, to small towns in Hungary and Bulgaria, enjoy the best the region has to offer.
                        </p>
                      </div>
                      <div className="bg-[var(--white,white)] content-stretch flex gap-[var(--2,8px)] items-center py-[var(--3․5,14px)] relative shrink-0 w-[670px]" data-node-id="34227:79311" data-name="Day with divider">
                        <div className="h-0 relative shrink-0 w-[60px]" data-node-id="I34227:79311;16691:85574">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine2} />
                          </div>
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] tracking-[0.96px] uppercase whitespace-nowrap" data-node-id="I34227:79311;16691:85575">
                          Arrival in Paris
                        </p>
                        <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.25] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34227:79311;16691:85576">
                          Aug 9
                        </p>
                        <div className="flex-[1_0_0] h-0 min-w-px relative" data-node-id="I34227:79311;16691:85577">
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
