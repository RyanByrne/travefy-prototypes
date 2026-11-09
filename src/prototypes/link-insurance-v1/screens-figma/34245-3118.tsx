const imgTypeCircleSizeLgContentImageNotificationDotFalse = "/src/prototypes/link-insurance-v1/assets/243233dc-8f17-4041-85b0-31e765606cc4.png";
const imgFlowbiteSolidPlus = "/src/prototypes/link-insurance-v1/assets/4e9b27d8-2e42-4961-bac2-562765a1c963.svg";
const imgTripThumbnail = "/src/prototypes/link-insurance-v1/assets/7a0213ae-2770-4300-9d3b-c2aa381c8be5.png";
const imgHero = "/src/prototypes/link-insurance-v1/assets/3064bd49-ec2a-47c3-8914-e72e11d5a159.png";
const imgContent = "/src/prototypes/link-insurance-v1/assets/4471dc3d-baf4-43ba-ac2a-0d68264c4096.png";
const imgFlowbiteSolidChevronDown = "/src/prototypes/link-insurance-v1/assets/dea717c9-fcf5-4164-bcff-ea7bb8562294.svg";
const imgMaterialRoundedPhoneAndroidRounded = "/src/prototypes/link-insurance-v1/assets/0f2322aa-ed5e-4a2a-9e90-4ca2567b8f97.svg";
const imgFlowbiteOutlineFileLinesOutline = "/src/prototypes/link-insurance-v1/assets/76764670-8e95-4143-8420-2c67bcca54b3.svg";
const imgCustomIconChatOneBubble = "/src/prototypes/link-insurance-v1/assets/ed60def9-80f1-4cee-9b10-09e1986f8cd4.svg";
const imgFlowbiteOutlineEnvelopeOutline = "/src/prototypes/link-insurance-v1/assets/21da43df-3591-4b1d-98ea-f83c29cd835a.svg";
const imgShield = "/src/prototypes/link-insurance-v1/assets/70394d5e-cf13-456d-bb45-45b5d0a48134.svg";
const imgExpand = "/src/prototypes/link-insurance-v1/assets/f417beb3-1836-4215-a9c3-924e562dd4c9.svg";
const imgExpand1 = "/src/prototypes/link-insurance-v1/assets/54699904-7ea4-46d6-b990-97c36fc07c84.svg";
const imgLine2 = "/src/prototypes/link-insurance-v1/assets/b7337d72-ad00-407d-9e41-24b2d94455eb.svg";
const imgLine1 = "/src/prototypes/link-insurance-v1/assets/6a4f670a-1c7e-4bf3-95cb-44e794a4282b.svg";
const imgLine3 = "/src/prototypes/link-insurance-v1/assets/a44d0436-0746-4f91-a381-47bfd10e055a.svg";

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

export default function TravelerItineraryMultipleProvidersOneAcceptedAfter() {
  return (
    <div className="bg-[var(--blue-gray\/50,#f4f7fb)] content-stretch flex flex-col items-start relative size-full" data-node-id="34245:3118" data-name="Traveler itinerary: multiple providers, one accepted (after)">
      <div className="bg-[var(--white,white)] content-stretch flex flex-col gap-[var(--0,0px)] items-start pl-[var(--32,128px)] pr-[var(--14,56px)] py-[var(--0,0px)] relative shrink-0 w-full" data-node-id="34245:3119" data-name="Navbar (application)">
        <div className="content-stretch flex gap-[var(--0,0px)] items-center px-[var(--0,0px)] py-[var(--1․5,6px)] relative shrink-0 w-full" data-node-id="I34245:3119;16661:1302" data-name="Navbar">
          <div className="content-stretch flex flex-[1_0_0] gap-[var(--8,32px)] items-center min-w-px px-[var(--4,16px)] py-[var(--0,0px)] relative" data-node-id="I34245:3119;16661:1303" data-name="Content">
            <div className="content-stretch flex flex-[1_0_0] gap-[var(--0,0px)] items-center min-w-px relative" data-node-id="I34245:3119;16661:1304" data-name="Primary global navigation">
              <div className="content-stretch flex gap-[var(--1․5,6px)] items-center p-[var(--0,0px)] relative shrink-0" data-node-id="I34245:3119;16661:1305" data-name="Nav Links">
                <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34245:3119;16661:1306">
                  Viewing as
                </p>
                <div className="content-stretch flex gap-[var(--0,0px)] items-center relative shrink-0 w-[291px]" data-node-id="I34245:3119;16661:1307">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px px-[var(--0,0px)] py-[var(--3,12px)] relative rounded-[var(--rounded,4px)]" data-node-id="I34245:3119;16661:1308" data-name="Select input">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I34245:3119;16661:1309" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Semibold'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/900,#223e47)]" data-node-id="I34245:3119;16661:1310">
                        <p className="leading-[1.25]">Elisa Denton</p>
                      </div>
                      <div className="relative shrink-0 size-[14px]" data-node-id="I34245:3119;16661:1311" data-name="flowbite_solid-chevron-down">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidChevronDown} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--3․5,14px)] items-center relative shrink-0" data-node-id="I34245:3119;16661:1312">
              <div className="content-stretch flex gap-[var(--4,16px)] items-center relative shrink-0" data-node-id="I34245:3119;16661:1313">
                <div className="bg-[var(--white,white)] content-stretch flex flex-col items-center justify-center px-[var(--3,12px)] py-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="I34245:3119;16661:1314" data-name="Itinerary builder navigation tabs">
                  <div className="content-stretch flex gap-[var(--2,8px)] items-center relative shrink-0" data-node-id="I34245:3119;16661:1314;16101:9107">
                    <div className="relative shrink-0 size-[14px]" data-node-id="I34245:3119;16661:1314;16101:9150" data-name="material_rounded-PhoneAndroidRounded">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialRoundedPhoneAndroidRounded} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34245:3119;16661:1314;16082:43071">
                      App
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[var(--4,16px)] items-center relative shrink-0" data-node-id="I34245:3119;16661:1336">
                <div className="bg-[var(--white,white)] content-stretch flex flex-col items-center justify-center px-[var(--3,12px)] py-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="I34245:3119;16661:1337" data-name="Itinerary builder navigation tabs">
                  <div className="content-stretch flex gap-[var(--2,8px)] items-center relative shrink-0" data-node-id="I34245:3119;16661:1337;16101:9107">
                    <div className="relative shrink-0 size-[14px]" data-node-id="I34245:3119;16661:1337;16101:9150" data-name="flowbite_outline-file-lines-outline">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteOutlineFileLinesOutline} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34245:3119;16661:1337;16082:43071">
                      PDF
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 size-[20px]" data-node-id="I34245:3119;16661:1319" data-name="custom_icon-chat-one-bubble">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCustomIconChatOneBubble} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="34245:3120">
        <div className="bg-[var(--blue-gray\/50,#f4f7fb)] content-stretch flex flex-col items-center px-[224px] relative shrink-0 w-full" data-node-id="34245:3121">
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="34245:3122">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="34245:3123">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="34245:3124">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="34245:3125">
                  <div className="content-stretch flex flex-[1_0_0] gap-[var(--9,36px)] items-start min-w-px pb-[64px] pt-[var(--5,20px)] relative" data-node-id="34245:3126">
                    <div className="content-stretch flex flex-col gap-[var(--0,0px)] items-start px-[var(--5,20px)] relative shrink-0 w-[400px]" data-node-id="34245:3127" data-name="Web itinerary sidebar nav">
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid content-stretch flex gap-[var(--2․5,10px)] items-center pl-[var(--0,0px)] pr-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34245:3127;16647:80450" data-name="Web itinerary nav item">
                        <div className="relative rounded-[var(--rounded,4px)] shrink-0 size-[40px]" data-node-id="I34245:3127;16647:80450;16647:80448" data-name="Trip thumbnail">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--rounded,4px)] size-full" src={imgTripThumbnail} />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I34245:3127;16647:80450;16647:80443">
                          <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] uppercase w-full" data-node-id="I34245:3127;16647:80450;16647:80445">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                      <WebItineraryNavItem className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" />
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34245:3127;16647:80283" data-name="Web itinerary nav item">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I34245:3127;16647:80283;16647:80224" data-name="flowbite_solid-plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34245:3127;16647:80283;16647:80223">
                          <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="I34245:3127;16647:80283;16645:80221">
                            Aug 11
                          </p>
                          <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="I34245:3127;16647:80283;16645:80220">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34245:3127;16647:80291" data-name="Web itinerary nav item">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I34245:3127;16647:80291;16647:80224" data-name="flowbite_solid-plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34245:3127;16647:80291;16647:80223">
                          <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="I34245:3127;16647:80291;16645:80221">
                            Aug 12
                          </p>
                          <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="I34245:3127;16647:80291;16645:80220">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34245:3127;16647:80298" data-name="Web itinerary nav item">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I34245:3127;16647:80298;16647:80224" data-name="flowbite_solid-plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34245:3127;16647:80298;16647:80223">
                          <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="I34245:3127;16647:80298;16645:80221">
                            Aug 13
                          </p>
                          <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="I34245:3127;16647:80298;16645:80220">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid border-t content-stretch flex gap-[var(--5,20px)] items-center px-[var(--3․5,14px)] py-[var(--3,12px)] relative shrink-0 w-full" data-node-id="I34245:3127;16647:80305" data-name="Web itinerary nav item">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I34245:3127;16647:80305;16647:80224" data-name="flowbite_solid-plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34245:3127;16647:80305;16647:80223">
                          <p className="font-['Inter:Regular'] leading-[1.25] relative shrink-0 w-full" data-node-id="I34245:3127;16647:80305;16645:80221">
                            Aug 14
                          </p>
                          <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 uppercase w-full" data-node-id="I34245:3127;16647:80305;16645:80220">
                            Arrival in Paris
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex flex-col items-center justify-center overflow-clip pr-[var(--0,0px)] relative rounded-tl-[var(--rounded-lg,8px)] rounded-tr-[var(--rounded-lg,8px)] shrink-0" data-node-id="34245:3128">
                      <div className="bg-[var(--white,white)] content-stretch flex items-center justify-center p-[var(--4,16px)] relative shrink-0 w-[672px]" data-node-id="34245:3129">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] items-start min-w-px relative" data-node-id="34245:3130">
                          <div className="content-stretch flex gap-[var(--2․5,10px)] items-start relative shrink-0 w-full" data-node-id="34245:3131">
                            <Avatar className="relative rounded-[100px] shrink-0 size-[64px]" />
                            <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-w-px relative" data-node-id="34245:3133">
                              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] items-start leading-[1.25] min-w-px not-italic relative" data-node-id="34245:3134">
                                <p className="relative shrink-0 text-[20px] text-[color:var(--black,#052530)] w-full" data-node-id="34245:3135">
                                  Advisor Name
                                </p>
                                <p className="relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] w-full" data-node-id="34245:3136">
                                  Travel Specialist
                                </p>
                                <p className="relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] w-full" data-node-id="34245:3137">
                                  Agency Name
                                </p>
                              </div>
                              <div className="bg-[#d9d9d9] h-[64px] relative shrink-0 w-[320px]" data-node-id="34245:3138" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[var(--0,0px)] h-[256px] items-start justify-end overflow-clip p-[var(--0,0px)] relative shrink-0 w-[672px]" data-node-id="34245:3139" data-name="Hero">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
                        <div className="bg-[var(--black,#052530)] content-stretch flex gap-[8px] items-center justify-center opacity-80 py-[var(--4,16px)] relative shrink-0 w-full" data-node-id="I34245:3139;16688:85379">
                          <div className="relative shrink-0 size-[24px]" data-node-id="I34245:3139;16688:85380" data-name="flowbite_outline-envelope-outline">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteOutlineEnvelopeOutline} />
                          </div>
                          <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34245:3139;16688:85381">
                            email@travelagency.com
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--16,64px)] items-start justify-end min-h-px pb-[var(--0,0px)] pt-[var(--8,32px)] px-[var(--0,0px)] relative w-full" data-node-id="I34245:3139;16688:85309" data-name="Background">
                          <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-node-id="I34245:3139;16688:85310" data-name="Content">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContent} />
                            <div className="content-stretch flex flex-[1_0_0] h-full items-end justify-between min-w-px px-[var(--5,20px)] py-[var(--4,16px)] relative" data-node-id="I34245:3139;16688:85311">
                              <div className="content-stretch flex gap-[var(--2,8px)] items-center p-[var(--0,0px)] relative shrink-0" data-node-id="I34245:3139;16688:85312" data-name="Title & Desc">
                                <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] gap-[var(--0,0px)] items-start not-italic px-[var(--4,16px)] relative shrink-0 text-[color:var(--white,white)] w-[672px]" data-node-id="I34245:3139;16688:85375">
                                  <p className="leading-[1.5] relative shrink-0 text-[16px] w-full" data-node-id="I34245:3139;16688:85376">
                                    Aug 9, 2025 - Aug 16, 2025
                                  </p>
                                  <p className="leading-[1.25] relative shrink-0 text-[30px] w-full" data-node-id="I34245:3139;16688:85377">
                                    10 Day Euro Sights Trip
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[8px] pt-[16px] px-[19px] relative shrink-0 w-full" data-node-id="34245:3140" data-name="Travel protection (outside Info & Docs)">
                        <div className="bg-[var(--white,white)] border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="34245:3141" data-name="Travel protection, choose one option">
                          <div className="border-[var(--blue-gray\/100,#e1e7ec)] border-b border-solid content-stretch flex gap-[10px] items-center overflow-clip px-[20px] py-[14px] relative shrink-0 w-full" data-node-id="34245:3142" data-name="Accordion header">
                            <div className="relative shrink-0 size-[22px]" data-node-id="34245:3143" data-name="Shield">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShield} />
                            </div>
                            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[1.5] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="34245:3144" data-name="Header text">
                              <p className="font-['Inter:Bold'] relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)]" data-node-id="34245:3145">
                                Travel protection
                              </p>
                              <p className="font-['Inter:Regular'] relative shrink-0 text-[12px] text-[color:var(--blue-gray\/500,#678390)]" data-node-id="34245:3146">
                                Choose one option, or decline
                              </p>
                            </div>
                          </div>
                          <div className="[word-break:break-word] bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/100,#e1e7ec)] border-b border-solid content-stretch flex items-center justify-between leading-[1.5] not-italic overflow-clip px-[20px] py-[10px] relative shrink-0 text-[12px] w-full" data-node-id="34245:3147" data-name="Your details (shared)">
                            <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-node-id="34245:3148" data-name="Details">
                              <p className="font-['Inter:Regular'] relative shrink-0 text-[color:var(--blue-gray\/500,#678390)] whitespace-nowrap" data-node-id="34245:3149">
                                Your details:
                              </p>
                              <p className="font-['Inter:Semibold'] relative shrink-0 text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="34245:3150">
                                Elisa Denton
                              </p>
                              <p className="font-['Inter:Regular'] relative shrink-0 text-[color:var(--blue-gray\/600,#4f666d)] whitespace-pre" data-node-id="34245:3151">{`|  DOB Mar 3, 1986  |  Colorado  |  Trip cost $8,400`}</p>
                              <p className="font-['Inter:Semibold'] relative shrink-0 text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="34245:3152">
                                Edit
                              </p>
                            </div>
                            <p className="font-['Inter:Regular'] relative shrink-0 text-[color:var(--blue-gray\/500,#678390)] whitespace-nowrap" data-node-id="34245:3153">
                              Used for all quotes
                            </p>
                          </div>
                          <div className="bg-[var(--white,white)] content-stretch flex h-[60px] items-start overflow-clip relative shrink-0 w-full" data-node-id="34245:3154" data-name="Offer 1: Allianz Travel (collapsed, accepted)">
                            <div className="bg-[#003781] h-full relative shrink-0 w-[4px]" data-node-id="I34245:3154;34160:3800" data-name="Provider accent" />
                            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip px-[16px] py-[12px] relative" data-node-id="I34245:3154;34160:3801" data-name="Summary">
                              <div className="border-[#003781] border-[1.5px] border-dashed content-stretch flex h-[26px] items-center justify-center overflow-clip px-[8px] relative rounded-[6px] shrink-0 w-[46px]" data-node-id="I34245:3154;34160:3802" data-name="Provider logo">
                                <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[#003781] text-[12px] tracking-[0.6px] whitespace-nowrap" data-node-id="I34245:3154;34160:3803">
                                  LOGO
                                </p>
                              </div>
                              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative" data-node-id="I34245:3154;34160:3804" data-name="Summary text">
                                <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] w-full whitespace-pre-wrap" data-node-id="I34245:3154;34160:3805">{`Allianz Travel (example)  ·  OneTrip Prime`}</p>
                                <div className="content-center flex flex-wrap gap-[2px_6px] items-center leading-[1.5] overflow-clip relative shrink-0 text-[12px] w-full" data-node-id="I34245:3154;34160:3806" data-name="Summary details">
                                  <p className="font-['Inter:Semibold'] relative shrink-0 text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34245:3154;34160:3807">
                                    $72
                                  </p>
                                  <p className="font-['Inter:Regular'] relative shrink-0 text-[color:var(--blue-gray\/600,#4f666d)] whitespace-pre" data-node-id="I34245:3154;34160:3808">{`·  Accepted May 11, 14:02 by Elisa Denton`}</p>
                                  <p className="font-['Inter:Semibold'] relative shrink-0 text-[color:var(--primary\/600,#2a79a6)] whitespace-pre" data-node-id="I34245:3154;34160:3809">{`·  Change decision`}</p>
                                </div>
                              </div>
                              <div className="bg-[var(--indigo\/100,#e5edff)] content-stretch flex h-[20px] items-center justify-center px-[var(--2․5,10px)] py-[var(--0․5,2px)] relative rounded-[80px] shrink-0" data-node-id="I34245:3154;34160:3810" data-name="Status pill">
                                <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[12px] text-[color:var(--indigo\/800,#42389d)] text-center whitespace-nowrap" data-node-id="I34245:3154;34160:3810;13552:81438">
                                  Accepted
                                </p>
                              </div>
                              <div className="relative shrink-0 size-[16px]" data-node-id="I34245:3154;34160:3812" data-name="Expand">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExpand} />
                              </div>
                            </div>
                          </div>
                          <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/100,#e1e7ec)] border-b border-solid content-stretch flex items-start overflow-clip px-[20px] py-[10px] relative shrink-0 w-full" data-node-id="34245:3654" data-name="One option note">
                            <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[12px] text-[color:var(--blue-gray\/500,#678390)] whitespace-nowrap" data-node-id="34245:3655">
                              Not covered until purchased. You can accept one option. Change your decision to choose another.
                            </p>
                          </div>
                          <div className="bg-[var(--white,white)] border-[var(--blue-gray\/100,#e1e7ec)] border-solid border-t content-stretch flex h-[60px] items-start opacity-50 overflow-clip relative shrink-0 w-full" data-node-id="34245:3155" data-name="Offer 2: Medjet (collapsed, locked)">
                            <div className="bg-[#b4232f] h-full relative shrink-0 w-[4px]" data-node-id="I34245:3155;34170:2176" data-name="Provider accent" />
                            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip px-[16px] py-[12px] relative" data-node-id="I34245:3155;34170:2177" data-name="Summary">
                              <div className="border-[#b4232f] border-[1.5px] border-dashed content-stretch flex h-[26px] items-center justify-center overflow-clip px-[8px] relative rounded-[6px] shrink-0 w-[46px]" data-node-id="I34245:3155;34170:2178" data-name="Provider logo">
                                <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[#b4232f] text-[12px] tracking-[0.6px] whitespace-nowrap" data-node-id="I34245:3155;34170:2179">
                                  LOGO
                                </p>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip relative" data-node-id="I34245:3155;34170:2180" data-name="Summary text">
                                <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="I34245:3155;34170:2515" data-name="Title row">
                                  <p className="[word-break:break-word] font-['Inter:Bold'] h-full leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] w-[275px] whitespace-pre-wrap">{`Medjet (example)  ·  Medical transport`}</p>
                                </div>
                                <div className="content-center flex flex-wrap gap-[2px_6px] items-center overflow-clip relative shrink-0 w-full" data-node-id="I34245:3155;34170:2182" data-name="Summary details">
                                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] leading-[1.5] min-w-px not-italic relative text-[12px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="I34245:3155;34170:2183">
                                    Locked while another option is accepted.
                                  </p>
                                </div>
                              </div>
                              <div className="relative shrink-0 size-[16px]" data-node-id="I34245:3155;34170:2187" data-name="Expand">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExpand1} />
                              </div>
                            </div>
                          </div>
                          <div className="bg-[var(--white,white)] border-[var(--blue-gray\/100,#e1e7ec)] border-solid border-t content-stretch flex h-[60px] items-start opacity-50 overflow-clip relative shrink-0 w-full" data-node-id="34245:3156" data-name="Offer 3: Travel Guard (collapsed, declined, locked)">
                            <div className="bg-[#1f7a4d] h-full relative shrink-0 w-[4px]" data-node-id="I34245:3156;34160:3815" data-name="Provider accent" />
                            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip px-[16px] py-[12px] relative" data-node-id="I34245:3156;34160:3816" data-name="Summary">
                              <div className="border-[#1f7a4d] border-[1.5px] border-dashed content-stretch flex h-[26px] items-center justify-center overflow-clip px-[8px] relative rounded-[6px] shrink-0 w-[46px]" data-node-id="I34245:3156;34160:3817" data-name="Provider logo">
                                <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[#1f7a4d] text-[12px] tracking-[0.6px] whitespace-nowrap" data-node-id="I34245:3156;34160:3818">
                                  LOGO
                                </p>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip relative" data-node-id="I34245:3156;34160:3819" data-name="Summary text">
                                <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] w-full whitespace-pre-wrap" data-node-id="I34245:3156;34160:3820">{`Travel Guard (example)  ·  Rental car damage`}</p>
                                <div className="content-center flex flex-wrap gap-[2px_6px] items-center overflow-clip relative shrink-0 w-full" data-node-id="I34245:3156;34160:3821" data-name="Summary details">
                                  <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[12px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34245:3156;34160:3822">
                                    Declined May 11, 14:02 by Elisa Denton
                                  </p>
                                </div>
                              </div>
                              <div className="bg-[var(--blue-gray\/100,#e1e7ec)] content-stretch flex h-[20px] items-center justify-center px-[var(--2․5,10px)] py-[var(--0․5,2px)] relative rounded-[80px] shrink-0" data-node-id="I34245:3156;34160:3826" data-name="Status pill">
                                <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[12px] text-[color:var(--blue-gray\/900,#223e47)] text-center whitespace-nowrap" data-node-id="I34245:3156;34160:3826;13552:81428">
                                  Declined
                                </p>
                              </div>
                              <div className="relative shrink-0 size-[16px]" data-node-id="I34245:3156;34160:3828" data-name="Expand">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExpand} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[var(--white,white)] content-stretch flex gap-[var(--2,8px)] items-center py-[var(--3․5,14px)] relative shrink-0 w-[670px]" data-node-id="34245:3198" data-name="Day with divider">
                        <div className="h-0 relative shrink-0 w-[60px]" data-node-id="I34245:3198;16691:85574">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine2} />
                          </div>
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] tracking-[0.96px] uppercase whitespace-nowrap" data-node-id="I34245:3198;16691:85575">{`Information & Documents`}</p>
                        <div className="flex-[1_0_0] h-0 min-w-px relative" data-node-id="I34245:3198;16691:85577">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine1} />
                          </div>
                        </div>
                      </div>
                      <div className="bg-[var(--white,white)] content-stretch flex items-center justify-center p-[var(--4,16px)] relative shrink-0 w-[672px]" data-node-id="34245:3208">
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] leading-[1.5] min-w-px not-italic relative text-[20px] text-[color:var(--black,#052530)]" data-node-id="34245:3209">
                          Discover the beauty of the Balkans on this immersive 14-night cruise. From exciting cities like Belgrade and Bucharest, to small towns in Hungary and Bulgaria, enjoy the best the region has to offer.
                        </p>
                      </div>
                      <div className="bg-[var(--white,white)] content-stretch flex gap-[var(--2,8px)] items-center py-[var(--3․5,14px)] relative shrink-0 w-[670px]" data-node-id="34245:3210" data-name="Day with divider">
                        <div className="h-0 relative shrink-0 w-[60px]" data-node-id="I34245:3210;16691:85574">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine2} />
                          </div>
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] tracking-[0.96px] uppercase whitespace-nowrap" data-node-id="I34245:3210;16691:85575">
                          Arrival in Paris
                        </p>
                        <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.25] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34245:3210;16691:85576">
                          Aug 9
                        </p>
                        <div className="flex-[1_0_0] h-0 min-w-px relative" data-node-id="I34245:3210;16691:85577">
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
