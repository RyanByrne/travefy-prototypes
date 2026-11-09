import { useNavigate } from 'react-router-dom'

const imgTypeItineraryStateDefaultSizeDefault = "/src/prototypes/link-insurance-v1/assets/916100b0-3d05-4240-ab1b-46e31be82c0d.png";
const imgVisibility = "/src/prototypes/link-insurance-v1/assets/442076c9-bd4f-40ad-8e75-31684eff516a.svg";
const imgRectangle1 = "/src/prototypes/link-insurance-v1/assets/750c7f1e-98c5-4d42-ab32-1eccad5e1ce7.svg";
const imgCustomIconLightBulbProposal = "/src/prototypes/link-insurance-v1/assets/1ddacf5a-4228-4a71-a79d-cec5e874a3e6.svg";
const imgBrightPortraitOfHappyWoman = "/src/prototypes/link-insurance-v1/assets/ed362e29-0b28-402d-8509-aa8405d55136.png";
const imgLogoMarkGroup = "/src/prototypes/link-insurance-v1/assets/96c565fa-2e84-4abb-a888-9935a382d457.svg";
const imgSeparator = "/src/prototypes/link-insurance-v1/assets/4471f9e0-a7de-453d-b519-bd3e78b39afb.svg";
const imgRect = "/src/prototypes/link-insurance-v1/assets/5f8f62d4-5858-47d6-bb42-e37580c736b8.svg";
const imgFlowbiteSolidClipboardCheck = "/src/prototypes/link-insurance-v1/assets/aa19accd-8751-4838-a9db-088054050372.svg";
const imgEllipse1 = "/src/prototypes/link-insurance-v1/assets/a2b41da5-c2a5-476e-977c-ac32ac15b491.svg";
const imgCustomIconInfo = "/src/prototypes/link-insurance-v1/assets/826e7be0-0042-4f7f-bbdd-fdb226d8bc99.svg";
const imgTripThumbnail = "/src/prototypes/link-insurance-v1/assets/2eff2239-6aae-4116-a3a1-afff42cb4206.png";
const imgTripThumbnail1 = "/src/prototypes/link-insurance-v1/assets/06786c71-3ddf-4482-b96a-86607e049552.png";
const imgTripThumbnail2 = "/src/prototypes/link-insurance-v1/assets/4c91c021-a8e0-49fe-8471-1f4d69ae2cf6.png";
const imgTripThumbnail3 = "/src/prototypes/link-insurance-v1/assets/88ea5604-f18f-4ecb-b288-7672a0f8b239.png";
const imgTripThumbnail4 = "/src/prototypes/link-insurance-v1/assets/e04f3dc9-69ff-4e21-bfb6-00904dc97a59.png";
const imgTripThumbnail5 = "/src/prototypes/link-insurance-v1/assets/cc3cc7a4-b53e-4e14-8b15-a45adfe62d55.png";
const imgTripThumbnail6 = "/src/prototypes/link-insurance-v1/assets/9eabe91f-adfa-4dff-b8e5-8bb68042f127.png";
const imgFlowbiteSolidPlus = "/src/prototypes/link-insurance-v1/assets/2e3cc16c-ecb8-4ad1-9725-ff62a6799e02.svg";
const imgFlowbiteOutlineSearchOutline = "/src/prototypes/link-insurance-v1/assets/dddb2270-e7a2-4990-bd91-fe240d5facba.svg";
const imgFlowbiteOutlineFilterOutline = "/src/prototypes/link-insurance-v1/assets/f9311e54-3f50-448a-a260-5a7efcbacef3.svg";
const imgCustomIconSortArrows = "/src/prototypes/link-insurance-v1/assets/d6d8523a-3f23-49b4-94f8-e051d59e27ab.svg";
const imgFlowbiteSolidChevronDoubleLeft = "/src/prototypes/link-insurance-v1/assets/3c49eff4-b365-4bb3-a7c2-8390e055ca73.svg";
const imgCustomIconChevronDown = "/src/prototypes/link-insurance-v1/assets/4c9c8af0-42db-4f4b-96f3-66490d0f7c36.svg";
const imgCustomIconChevronDown1 = "/src/prototypes/link-insurance-v1/assets/42536885-b04b-4eab-93b8-8a07d1077db7.svg";
const imgEdit = "/src/prototypes/link-insurance-v1/assets/9a5b9c95-7ac9-43b8-a90c-686b3f2bc414.svg";
const imgFlowbiteSolidDotsHorizontal = "/src/prototypes/link-insurance-v1/assets/d259a18e-3b65-43ea-827b-62b9e4793eb4.svg";
const imgFlowbiteSolidPlus1 = "/src/prototypes/link-insurance-v1/assets/6764ef3a-1ce3-4cac-bfec-98a93ac65e19.svg";
const imgFlowbiteSolidX = "/src/prototypes/link-insurance-v1/assets/c42e6ff2-2a67-4e1f-ba4f-3a13335e4b59.svg";
const imgFlowbiteSolidChevronDown = "/src/prototypes/link-insurance-v1/assets/34da0d17-3604-4cef-a252-8bea4f926e2b.svg";
const imgCustomIconChevronUp = "/src/prototypes/link-insurance-v1/assets/d48f1999-c51d-45d9-ba99-961f6ee15b88.svg";
const imgCustomIconTasksClipboard = "/src/prototypes/link-insurance-v1/assets/cfa2c960-1be6-44bd-9fc5-dfa6863ec1fe.svg";
const imgCustomIconGroup = "/src/prototypes/link-insurance-v1/assets/97cd30c0-5b0c-4589-9698-c366ad5a574d.svg";
const imgCustomIconNotes = "/src/prototypes/link-insurance-v1/assets/35a7a8bf-0109-4821-abf0-cbfd3700f2d8.svg";
const imgCustomIconGlobe = "/src/prototypes/link-insurance-v1/assets/68f35760-1a6f-4cbd-b792-2d612ed6aae1.svg";
const imgVisibility1 = "/src/prototypes/link-insurance-v1/assets/c444f725-e1b5-4473-aac0-1c6dc3de0ace.svg";
const imgMaterialRoundedLocalPoliceRounded = "/src/prototypes/link-insurance-v1/assets/f845d396-bdc9-411e-8352-3a551ac5875c.svg";
const imgFlowbiteSolidFileCopy = "/src/prototypes/link-insurance-v1/assets/abdebe6c-c7e2-4658-8e4f-29429b8bbc65.svg";
const imgFlowbiteSolidArchive = "/src/prototypes/link-insurance-v1/assets/4cf60687-3eb8-4639-8661-5d1d2c9f76e5.svg";
const imgFlowbiteSolidChevronDown1 = "/src/prototypes/link-insurance-v1/assets/180f8d6c-6a86-4dbe-93bf-ba8921a15c1d.svg";

type ToggleProps = {
  className?: string;
  darkMode?: "False";
  helperText?: string;
  labelText?: string;
  showHelper?: boolean;
  showLabel?: boolean;
  size?: "sm";
  state?: "Initial" | "Active";
};

function Toggle({ className, darkMode = "False", helperText = "Some helper text here", labelText = "Write label text here", showHelper = true, showLabel = true, size = "sm", state = "Initial" }: ToggleProps) {
  const isActiveAndFalseAndSm = state === "Active" && darkMode === "False" && size === "sm";
  return (
    <button className={className || "content-stretch flex gap-[var(--2,8px)] items-start relative"} id={isActiveAndFalseAndSm ? "node-16672_102899" : "node-16672_102897"}>
      <div className="h-[20px] relative shrink-0 w-[40px]" id={isActiveAndFalseAndSm ? "node-16672_102921" : "node-16672_102909"} data-name="Toggle">
        <div className={`absolute inset-0 rounded-[40px] ${isActiveAndFalseAndSm ? String.raw`bg-[var(--primary\/600,#2a79a6)]` : String.raw`bg-[var(--gray\/600,#738086)]`}`} id={isActiveAndFalseAndSm ? "node-16672_102922" : "node-16672_102910"} />
        <div className={`absolute bg-[var(--white,white)] rounded-[40px] size-[16px] top-[2px] ${isActiveAndFalseAndSm ? "right-[2.83px]" : "left-[2.5px]"}`} id={isActiveAndFalseAndSm ? "node-16672_102923" : "node-16672_102911"} />
      </div>
      {showLabel && (
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] gap-[var(--0․5,2px)] items-start leading-[0] not-italic pt-[var(--0․5,2px)] relative shrink-0 text-left whitespace-nowrap" data-node-id="16672:102912" data-name="Label & Helper">
          <div className="flex flex-col justify-center relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)]" data-node-id="16672:102913">
            <p className="leading-[1.25]">{labelText}</p>
          </div>
          {showHelper && (
            <div className="flex flex-col justify-center relative shrink-0 text-[12px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="16672:102914">
              <p className="leading-[1.5]">{helperText}</p>
            </div>
          )}
        </div>
      )}
    </button>
  );
}

type ListItemThumbnailProps = {
  className?: string;
  size?: "Default";
  state?: "Default";
  type?: "Itinerary";
};

function ListItemThumbnail({ className, size = "Default", state = "Default", type = "Itinerary" }: ListItemThumbnailProps) {
  return (
    <div className={className || "relative size-[var(--20,80px)]"} data-node-id="28209:10481">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTypeItineraryStateDefaultSizeDefault} />
    </div>
  );
}

type TripListItemsProposalItineraryEtcProps = {
  className?: string;
  state?: "Default";
  type?: "Itinerary" | "Proposal";
};

function TripListItemsProposalItineraryEtc({ className, state = "Default", type = "Itinerary" }: TripListItemsProposalItineraryEtcProps) {
  const isItineraryAndDefault = type === "Itinerary" && state === "Default";
  const isProposalAndDefault = type === "Proposal" && state === "Default";
  return (
    <div className={className || "bg-[var(--white,white)] border border-[var(--blue-gray\\/200,#d1dae0)] border-solid content-stretch flex gap-[var(--4,16px)] items-center overflow-clip pl-[var(--0,0px)] pr-[var(--4,16px)] py-[var(--0,0px)] relative rounded-[var(--rounded,4px)] w-[384px]"} id={isProposalAndDefault ? "node-28209_10609" : "node-28209_10566"}>
      {isItineraryAndDefault && (
        <>
          <ListItemThumbnail className="relative shrink-0 size-[80px]" />
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--1․5,6px)] items-start min-w-px relative" data-node-id="28209:10568" data-name="Name & Price">
            <div className="content-stretch flex flex-col gap-[var(--2,8px)] items-start relative shrink-0 w-full" data-node-id="28209:10569" data-name="Name & Description">
              <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.43] not-italic overflow-hidden relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] text-ellipsis w-full whitespace-nowrap" data-node-id="28209:10570">
                Adventures in the Rockies: A Journey to Remember
              </p>
              <div className="content-stretch flex gap-[var(--4,16px)] items-center relative shrink-0 w-full" data-node-id="28209:10571" data-name="Qty & Price">
                <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="28209:10572">
                  <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] whitespace-nowrap" data-node-id="28209:10573">
                    No Date Set
                  </p>
                  <div className="relative shrink-0 size-[16px]" data-node-id="28209:10574" data-name="visibility">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVisibility} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {isProposalAndDefault && (
        <>
          <div className="relative shrink-0 size-[80px]" data-node-id="28209:10610" data-name="List item thumbnail">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTypeItineraryStateDefaultSizeDefault} />
            <div className="absolute bottom-0 right-0 size-[48px]" data-node-id="I28209:10610;16340:4423">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle1} />
            </div>
            <div className="absolute bottom-[8px] right-[6px] size-[14px]" data-node-id="I28209:10610;16340:4424" data-name="custom_icon-light bulb proposal">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCustomIconLightBulbProposal} />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--1․5,6px)] items-start min-w-px relative" data-node-id="28209:10611" data-name="Name & Price">
            <div className="content-stretch flex flex-col gap-[var(--2,8px)] items-start relative shrink-0 w-full" data-node-id="28209:10612" data-name="Name & Description">
              <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.43] not-italic overflow-hidden relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] text-ellipsis w-full whitespace-nowrap" data-node-id="28209:10613">
                Adventures in the Rockies: A Journey to Remember
              </p>
              <div className="content-stretch flex gap-[var(--4,16px)] items-center relative shrink-0 w-full" data-node-id="28209:10614" data-name="Qty & Price">
                <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="28209:10615">
                  <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="28209:10616">
                    No Date Set
                  </p>
                  <div className="relative shrink-0 size-[16px]" data-node-id="28209:10617" data-name="visibility">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVisibility} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

type NavbarApplicationProps = {
  className?: string;
  breakpoints?: "Desktop";
  darkMode?: "False";
  dropdownActive?: "False";
  mobileMenuActive?: "False";
  searchInput?: "False";
  type?: "Travefy primary Dashboard";
};

function NavbarApplication({ className, breakpoints = "Desktop", darkMode = "False", dropdownActive = "False", mobileMenuActive = "False", searchInput = "False", type = "Travefy primary Dashboard" }: NavbarApplicationProps) {
  return (
    <div className={className || "bg-[var(--primary\\/400,#45bbff)] content-stretch flex flex-col gap-[var(--0,0px)] items-start p-[var(--0,0px)] relative w-[1600px]"} data-node-id="27762:45697">
      <div className="content-stretch flex gap-[var(--0,0px)] items-center px-[var(--0,0px)] py-[var(--2,8px)] relative shrink-0 w-full" data-node-id="27762:45723" data-name="Navbar">
        <div className="content-stretch flex flex-[1_0_0] gap-[var(--8,32px)] items-center min-w-px px-[var(--4,16px)] py-[var(--0,0px)] relative" data-node-id="27762:45724" data-name="Content">
          <div className="content-stretch flex flex-[1_0_0] gap-[var(--0,0px)] items-center min-w-px relative" data-node-id="27762:45725" data-name="Primary global navigation">
            <div className="content-stretch flex gap-[var(--5,20px)] items-center relative shrink-0 w-[64px]" data-node-id="27762:45726">
              <div className="relative shrink-0 size-[24px]" data-node-id="27762:45727" data-name="Logo">
                <div className="absolute inset-[6.2%_0_6.43%_0]" data-node-id="I27762:45727;14987:13749" data-name="logo mark group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoMarkGroup} />
                </div>
              </div>
              <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" data-node-id="27762:45728">
                <div className="flex-none rotate-90">
                  <div className="h-0 relative w-[24px]" data-name="separator">
                    <div className="absolute inset-[-1px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgSeparator} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] gap-[var(--2,8px)] items-center min-w-px p-[var(--0,0px)] relative" data-node-id="27762:45729" data-name="Nav Links">
              <div className="bg-[var(--primary\/500,#3a9ed8)] content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--3,12px)] py-[var(--1․5,6px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="27762:45730" data-name="nav-item">
                <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I27762:45730;16336:274267">
                  Compass
                </p>
              </div>
              <div className="bg-[var(--primary\/400,#45bbff)] content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--3,12px)] py-[var(--1․5,6px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="27762:45731" data-name="nav-item">
                <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I27762:45731;16336:274263">
                  Trips
                </p>
              </div>
              <div className="bg-[var(--primary\/400,#45bbff)] content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--3,12px)] py-[var(--1․5,6px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="27762:45732" data-name="nav-item">
                <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I27762:45732;16336:274263">
                  Business Hub
                </p>
                <div className="relative shrink-0 size-[10px]" data-node-id="I27762:45732;20238:13116" data-name="rect">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRect} />
                </div>
              </div>
              <div className="bg-[var(--primary\/400,#45bbff)] content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--3,12px)] py-[var(--1․5,6px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="27762:45734" data-name="nav-item">
                <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I27762:45734;16336:274263">
                  Resources
                </p>
                <div className="relative shrink-0 size-[10px]" data-node-id="I27762:45734;20238:13116" data-name="rect">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRect} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[var(--2,8px)] items-center relative shrink-0" data-node-id="27762:45736">
            <div className="content-stretch flex gap-[var(--2,8px)] items-center justify-end p-[var(--3,12px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="27762:45737" data-name="Tasks">
              <div className="relative shrink-0 size-[16px]" data-node-id="27762:45738" data-name="flowbite_solid-clipboard-check">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidClipboardCheck} />
              </div>
              <div className="absolute content-stretch flex gap-[var(--1․5,6px)] items-center right-0 size-[20px] top-0" data-node-id="27762:45739" data-name="Indicators">
                <div className="flex-[1_0_0] h-full min-w-px relative" data-node-id="I27762:45739;15202:34874">
                  <div className="absolute inset-[-5%]">
                    <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semibold'] justify-center leading-[0] left-1/2 not-italic text-[12px] text-[color:var(--white,white)] text-center top-1/2 whitespace-nowrap" data-node-id="I27762:45739;15202:34875">
                  <p className="leading-[1.5]">8</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--2,8px)] items-center justify-end px-[var(--3,12px)] py-[var(--1,4px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="27762:45740" data-name="Avatar and user name">
              <div className="relative rounded-[16px] shrink-0 size-[32px]" data-node-id="27762:45741" data-name="bright portrait of happy woman">
                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[16px]">
                  <div className="absolute bg-white inset-0 rounded-[16px]" />
                  <div className="absolute inset-0 overflow-hidden rounded-[16px]">
                    <img alt="" className="absolute left-[-36.72%] max-w-none size-[170.31%] top-[-3.91%]" src={imgBrightPortraitOfHappyWoman} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[color:var(--white,white)] text-center whitespace-nowrap" data-node-id="27762:45742">
                <p className="leading-[1.5]">Kim Anderson</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--2,8px)] h-[36px] items-center justify-end px-[var(--3,12px)] py-[var(--2,8px)] relative shrink-0" data-node-id="27762:45743" data-name="Login/Logout">
              <div className="relative shrink-0 size-[16px]" data-node-id="27762:45744" data-name="custom_icon-info">
                <div className="absolute inset-[0_-2.86%_-2.86%_0]">
                  <img alt="" className="block max-w-none size-full" src={imgCustomIconInfo} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[color:var(--white,white)] text-center whitespace-nowrap" data-node-id="27762:45745">
                <p className="leading-[1.5]">Learn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdvisorInsuranceOfferSetup() {
  const navigate = useNavigate()
  return (
    <div className="bg-[var(--blue-gray\/50,#f4f7fb)] content-stretch flex flex-col items-start relative size-full" data-node-id="34227:78641" data-name="Advisor: insurance offer setup">
      <NavbarApplication className="bg-[var(--primary\/400,#45bbff)] content-stretch flex flex-col gap-[var(--0,0px)] items-start p-[var(--0,0px)] relative shrink-0 w-full" />
      <div className="content-stretch flex h-[1142px] items-start relative shrink-0 w-full" data-node-id="34227:78643" data-name="Container">
        <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/300,#b9c7ce)] border-r border-solid content-stretch flex flex-col gap-[var(--4,16px)] h-full items-start overflow-y-auto px-[var(--0,0px)] py-[var(--4,16px)] relative shrink-0 w-[400px]" data-node-id="34227:78644" data-name="Filter Drawers">
          <div className="content-stretch flex flex-col gap-[16px] items-start px-[var(--4,16px)] relative shrink-0 w-full" data-node-id="I34227:78644;15086:372780">
            <div className="bg-[var(--primary\/400,#45bbff)] content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--5,20px)] py-[var(--2․5,10px)] relative rounded-[var(--rounded,4px)] shrink-0 w-full" data-node-id="I34227:78644;15086:372166" data-name="Button">
              <div className="relative shrink-0 size-[14px]" data-node-id="I34227:78644;15086:372166;15080:374335" data-name="flowbite_solid-plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34227:78644;15086:372166;15080:374336">
                New Trip
              </p>
            </div>
            <div className="content-stretch flex gap-[var(--2․5,10px)] items-start relative shrink-0 w-full" data-node-id="I34227:78644;15086:372167">
              <div className="content-stretch flex flex-[1_0_0] h-[32px] items-start min-w-px relative" data-node-id="I34227:78644;15086:372168" data-name="Search">
                <div className="bg-[var(--white,white)] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex flex-[1_0_0] h-full items-start min-w-px px-[var(--2․5,10px)] py-[var(--1․5,6px)] relative rounded-bl-[var(--rounded,4px)] rounded-tl-[var(--rounded,4px)]" data-node-id="I34227:78644;15086:372168;85:127705" data-name="Input Field">
                  <div className="content-stretch flex items-start relative shrink-0 w-[43px]" data-node-id="I34227:78644;15086:372168;85:127706" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/500,#678390)]" data-node-id="I34227:78644;15086:372168;85:127707">
                      <p className="leading-[1.5]">Search</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--primary\/600,#2a79a6)] border border-[var(--primary\/700,#1b6793)] border-solid content-stretch flex h-full items-center justify-center p-[var(--2,8px)] relative rounded-br-[var(--rounded,4px)] rounded-tr-[var(--rounded,4px)] shrink-0 w-[42px]" data-node-id="I34227:78644;15086:372168;12690:51824" data-name="Button">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I34227:78644;15086:372168;12690:51825" data-name="flowbite_outline-search-outline">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteOutlineSearchOutline} />
                  </div>
                </div>
              </div>
              <div className="bg-[var(--primary\/600,#2a79a6)] border border-[var(--primary\/600,#2a79a6)] border-solid content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--2․5,10px)] py-[var(--1․5,6px)] relative rounded-[var(--rounded,4px)] self-stretch shrink-0" data-node-id="I34227:78644;15086:372169" data-name="Button">
                <div className="relative shrink-0 size-[12px]" data-node-id="I34227:78644;15086:372169;15017:175977" data-name="flowbite_outline-filter-outline">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteOutlineFilterOutline} />
                </div>
              </div>
              <div className="border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--2․5,10px)] py-[var(--1․5,6px)] relative rounded-[var(--rounded,4px)] self-stretch shrink-0" data-node-id="I34227:78644;15086:372170" data-name="Button">
                <div className="relative shrink-0 size-[12px]" data-node-id="I34227:78644;15086:372170;29:127808" data-name="custom_icon-sort-arrows">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCustomIconSortArrows} />
                </div>
              </div>
              <div className="border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--2․5,10px)] py-[var(--1․5,6px)] relative rounded-[var(--rounded,4px)] self-stretch shrink-0" data-node-id="I34227:78644;15086:372171" data-name="Button">
                <div className="relative shrink-0 size-[12px]" data-node-id="I34227:78644;15086:372171;29:127808" data-name="flowbite_solid-chevron-double-left">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidChevronDoubleLeft} />
                </div>
              </div>
            </div>
            <div className="content-start flex flex-wrap gap-[var(--2․5,10px)] items-start relative shrink-0 w-full" data-node-id="I34227:78644;15086:372172">
              <div className="bg-[var(--primary\/600,#2a79a6)] border border-[var(--primary\/600,#2a79a6)] border-solid content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--4,16px)] py-[var(--1․5,6px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="I34227:78644;15086:372173" data-name="Button">
                <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34227:78644;15086:372173;15017:175976">
                  Archived Status
                </p>
                <div className="relative shrink-0 size-[12px]" data-node-id="I34227:78644;15086:372173;15017:175977" data-name="custom_icon-chevron-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCustomIconChevronDown} />
                </div>
              </div>
              <div className="border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex gap-[var(--2,8px)] h-[33px] items-center justify-center px-[var(--4,16px)] py-[var(--1․5,6px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="I34227:78644;15086:372174" data-name="Button">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="I34227:78644;15086:372174;29:127807">
                  <p className="leading-[1.5]">Type</p>
                </div>
                <div className="relative shrink-0 size-[12px]" data-node-id="I34227:78644;15086:372174;29:127808" data-name="custom_icon-chevron-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCustomIconChevronDown1} />
                </div>
              </div>
              <div className="border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--4,16px)] py-[var(--1․5,6px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="I34227:78644;15086:372175" data-name="Button">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="I34227:78644;15086:372175;29:127807">
                  <p className="leading-[1.5]">Date</p>
                </div>
                <div className="relative shrink-0 size-[12px]" data-node-id="I34227:78644;15086:372175;29:127808" data-name="custom_icon-chevron-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCustomIconChevronDown1} />
                </div>
              </div>
              <div className="border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--4,16px)] py-[var(--1․5,6px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="I34227:78644;15086:372176" data-name="Button">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="I34227:78644;15086:372176;29:127807">
                  <p className="leading-[1.5]">Status</p>
                </div>
                <div className="relative shrink-0 size-[12px]" data-node-id="I34227:78644;15086:372176;29:127808" data-name="custom_icon-chevron-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCustomIconChevronDown1} />
                </div>
              </div>
              <div className="border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--4,16px)] py-[var(--1․5,6px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="I34227:78644;15086:372177" data-name="Button">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="I34227:78644;15086:372177;29:127807">
                  <p className="leading-[1.5]">Label</p>
                </div>
                <div className="relative shrink-0 size-[12px]" data-node-id="I34227:78644;15086:372177;29:127808" data-name="custom_icon-chevron-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCustomIconChevronDown1} />
                </div>
              </div>
              <div className="border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--4,16px)] py-[var(--1․5,6px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="I34227:78644;15086:372178" data-name="Button">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="I34227:78644;15086:372178;29:127807">
                  <p className="leading-[1.5]">Reset Filters</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] items-start min-h-px p-[var(--0,0px)] relative w-full" data-node-id="I34227:78644;15086:372687" data-name="Products">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I34227:78644;15086:372688">
              <button className="bg-[var(--primary\/700,#1b6793)] border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid content-stretch cursor-pointer flex gap-[var(--4,16px)] items-center px-[var(--4,16px)] py-[var(--1․5,6px)] relative shrink-0 w-full" data-node-id="I34227:78644;15106:369577" data-name="Trips list item">
                <div className="relative rounded-[var(--rounded,4px)] shrink-0 size-[64px]" data-node-id="I34227:78644;15106:369577;15106:369558" data-name="Trip thumbnail">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--rounded,4px)] size-full" src={imgTypeItineraryStateDefaultSizeDefault} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--1․5,6px)] items-start min-w-px relative" data-node-id="I34227:78644;15106:369577;15106:369559" data-name="Name & Price">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--2,8px)] items-start leading-[1.5] not-italic relative shrink-0 text-[color:var(--white,white)] text-left w-full whitespace-nowrap" data-node-id="I34227:78644;15106:369577;15106:369560" data-name="Name & Description">
                    <p className="font-['Inter:Bold'] overflow-hidden relative shrink-0 text-[16px] text-ellipsis w-full" data-node-id="I34227:78644;15106:369577;15106:369561">
                      Adventures in the Rockies: A Journey to Remember
                    </p>
                    <div className="content-stretch flex font-['Inter:Regular'] gap-[var(--4,16px)] items-center relative shrink-0 text-[14px] w-full" data-node-id="I34227:78644;15106:369577;15106:369562" data-name="Qty & Price">
                      <div className="content-stretch flex flex-[1_0_0] gap-[var(--px,1px)] items-center min-w-px relative" data-node-id="I34227:78644;15106:369577;15106:369563">
                        <p className="max-w-[160px] overflow-hidden relative shrink-0 text-ellipsis" data-node-id="I34227:78644;15106:369577;15106:369564">{`Elisa Denton, Robert Denton, Deb `}</p>
                        <p className="overflow-hidden relative shrink-0 text-ellipsis" data-node-id="I34227:78644;15106:369577;15106:369565">{`+8 `}</p>
                      </div>
                      <p className="relative shrink-0" data-node-id="I34227:78644;15106:369577;15106:369566">
                        May 19, 2025
                      </p>
                    </div>
                  </div>
                </div>
              </button>
              <div className="border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid content-stretch flex gap-[var(--4,16px)] items-center px-[var(--4,16px)] py-[var(--1․5,6px)] relative shrink-0 w-full" data-node-id="I34227:78644;15106:369587" data-name="Trips list item">
                <div className="relative rounded-[var(--rounded,4px)] shrink-0 size-[64px]" data-node-id="I34227:78644;15106:369587;15106:369524" data-name="Trip thumbnail">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--rounded,4px)] size-full" src={imgTripThumbnail} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--1․5,6px)] items-start min-w-px relative" data-node-id="I34227:78644;15106:369587;15106:369525" data-name="Name & Price">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--2,8px)] items-start leading-[1.5] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="I34227:78644;15106:369587;15106:369526" data-name="Name & Description">
                    <p className="font-['Inter:Bold'] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] text-ellipsis w-full" data-node-id="I34227:78644;15106:369587;15106:369527">
                      Desert Adventure: Dunes and Dreams
                    </p>
                    <div className="content-stretch flex font-['Inter:Regular'] gap-[var(--4,16px)] items-center relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] w-full" data-node-id="I34227:78644;15106:369587;15106:369528" data-name="Qty & Price">
                      <div className="content-stretch flex flex-[1_0_0] gap-[var(--px,1px)] items-center min-w-px relative" data-node-id="I34227:78644;15106:369587;15106:369529">
                        <p className="max-w-[160px] overflow-hidden relative shrink-0 text-ellipsis" data-node-id="I34227:78644;15106:369587;15106:369530">
                          Lucy Nelson, Abe Nelson, Scott Lewis
                        </p>
                        <p className="overflow-hidden relative shrink-0 text-ellipsis" data-node-id="I34227:78644;15106:369587;15106:369531">{`+5 `}</p>
                      </div>
                      <p className="relative shrink-0" data-node-id="I34227:78644;15106:369587;15106:369532">
                        Dec 27, 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid content-stretch flex gap-[var(--4,16px)] items-center px-[var(--4,16px)] py-[var(--1․5,6px)] relative shrink-0 w-full" data-node-id="I34227:78644;15106:369598" data-name="Trips list item">
                <div className="relative rounded-[var(--rounded,4px)] shrink-0 size-[64px]" data-node-id="I34227:78644;15106:369598;15106:369524" data-name="Trip thumbnail">
                  <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--rounded,4px)]">
                    <img alt="" className="absolute max-w-none object-cover rounded-[var(--rounded,4px)] size-full" src={imgTripThumbnail} />
                    <img alt="" className="absolute max-w-none object-cover rounded-[var(--rounded,4px)] size-full" src={imgTripThumbnail1} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--1․5,6px)] items-start min-w-px relative" data-node-id="I34227:78644;15106:369598;15106:369525" data-name="Name & Price">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--2,8px)] items-start leading-[1.5] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="I34227:78644;15106:369598;15106:369526" data-name="Name & Description">
                    <p className="font-['Inter:Bold'] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] text-ellipsis w-full" data-node-id="I34227:78644;15106:369598;15106:369527">
                      Adventure Retreat: Whispering Pines Adventure Company
                    </p>
                    <div className="content-stretch flex font-['Inter:Regular'] gap-[var(--4,16px)] items-center relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] w-full" data-node-id="I34227:78644;15106:369598;15106:369528" data-name="Qty & Price">
                      <div className="content-stretch flex flex-[1_0_0] gap-[var(--px,1px)] items-center min-w-px relative" data-node-id="I34227:78644;15106:369598;15106:369529">
                        <p className="max-w-[160px] overflow-hidden relative shrink-0 text-ellipsis" data-node-id="I34227:78644;15106:369598;15106:369530">
                          Aaron Mathews, Pam Meznick, P
                        </p>
                        <p className="overflow-hidden relative shrink-0 text-ellipsis" data-node-id="I34227:78644;15106:369598;15106:369531">{`+5 `}</p>
                      </div>
                      <p className="relative shrink-0" data-node-id="I34227:78644;15106:369598;15106:369532">
                        Oct 25, 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid content-stretch flex gap-[var(--4,16px)] items-center px-[var(--4,16px)] py-[var(--1․5,6px)] relative shrink-0 w-full" data-node-id="I34227:78644;15106:369609" data-name="Trips list item">
                <div className="relative rounded-[var(--rounded,4px)] shrink-0 size-[64px]" data-node-id="I34227:78644;15106:369609;15106:369524" data-name="Trip thumbnail">
                  <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--rounded,4px)]">
                    <img alt="" className="absolute max-w-none object-cover rounded-[var(--rounded,4px)] size-full" src={imgTripThumbnail} />
                    <img alt="" className="absolute max-w-none object-cover rounded-[var(--rounded,4px)] size-full" src={imgTripThumbnail2} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--1․5,6px)] items-start min-w-px relative" data-node-id="I34227:78644;15106:369609;15106:369525" data-name="Name & Price">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--2,8px)] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="I34227:78644;15106:369609;15106:369526" data-name="Name & Description">
                    <p className="font-['Inter:Bold'] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] text-ellipsis w-full whitespace-nowrap" data-node-id="I34227:78644;15106:369609;15106:369527">
                      Coastal Escape: Waves and Wonders
                    </p>
                    <div className="content-stretch flex font-['Inter:Regular'] gap-[var(--4,16px)] items-center relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] w-full" data-node-id="I34227:78644;15106:369609;15106:369528" data-name="Qty & Price">
                      <div className="content-stretch flex flex-[1_0_0] gap-[var(--px,1px)] items-center min-w-px relative" data-node-id="I34227:78644;15106:369609;15106:369529">
                        <p className="max-w-[160px] overflow-hidden relative shrink-0 text-ellipsis whitespace-nowrap" data-node-id="I34227:78644;15106:369609;15106:369530">
                          Jose Martinez, Gwen Martinez
                        </p>
                        <p className="overflow-hidden relative shrink-0 text-ellipsis whitespace-pre" data-node-id="I34227:78644;15106:369609;15106:369531">{`  `}</p>
                      </div>
                      <p className="relative shrink-0 whitespace-nowrap" data-node-id="I34227:78644;15106:369609;15106:369532">
                        Feb 09, 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid content-stretch flex gap-[var(--4,16px)] items-center px-[var(--4,16px)] py-[var(--1․5,6px)] relative shrink-0 w-full" data-node-id="I34227:78644;15106:369620" data-name="Trips list item">
                <div className="relative rounded-[var(--rounded,4px)] shrink-0 size-[64px]" data-node-id="I34227:78644;15106:369620;15106:369524" data-name="Trip thumbnail">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--rounded,4px)] size-full" src={imgTripThumbnail3} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--1․5,6px)] items-start min-w-px relative" data-node-id="I34227:78644;15106:369620;15106:369525" data-name="Name & Price">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--2,8px)] items-start leading-[1.5] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="I34227:78644;15106:369620;15106:369526" data-name="Name & Description">
                    <p className="font-['Inter:Bold'] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] text-ellipsis w-full" data-node-id="I34227:78644;15106:369620;15106:369527">
                      Mountain Yoga Retreat: Southern California
                    </p>
                    <div className="content-stretch flex font-['Inter:Regular'] gap-[var(--4,16px)] items-center relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] w-full" data-node-id="I34227:78644;15106:369620;15106:369528" data-name="Qty & Price">
                      <div className="content-stretch flex flex-[1_0_0] gap-[var(--px,1px)] items-center min-w-px relative" data-node-id="I34227:78644;15106:369620;15106:369529">
                        <p className="max-w-[160px] overflow-hidden relative shrink-0 text-ellipsis" data-node-id="I34227:78644;15106:369620;15106:369530">
                          River Moore, Kristen Oswald, Penelope
                        </p>
                        <p className="overflow-hidden relative shrink-0 text-ellipsis" data-node-id="I34227:78644;15106:369620;15106:369531">{`+12 `}</p>
                      </div>
                      <p className="relative shrink-0" data-node-id="I34227:78644;15106:369620;15106:369532">
                        Mar 30, 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid content-stretch flex gap-[var(--4,16px)] items-center px-[var(--4,16px)] py-[var(--1․5,6px)] relative shrink-0 w-full" data-node-id="I34227:78644;15106:369631" data-name="Trips list item">
                <div className="relative rounded-[var(--rounded,4px)] shrink-0 size-[64px]" data-node-id="I34227:78644;15106:369631;15106:369524" data-name="Trip thumbnail">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--rounded,4px)] size-full" src={imgTripThumbnail4} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--1․5,6px)] items-start min-w-px relative" data-node-id="I34227:78644;15106:369631;15106:369525" data-name="Name & Price">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--2,8px)] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="I34227:78644;15106:369631;15106:369526" data-name="Name & Description">
                    <p className="font-['Inter:Bold'] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] text-ellipsis w-full whitespace-nowrap" data-node-id="I34227:78644;15106:369631;15106:369527">
                      Island Honeymoon: Serenity Awaits
                    </p>
                    <div className="content-stretch flex font-['Inter:Regular'] gap-[var(--4,16px)] items-center relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] w-full" data-node-id="I34227:78644;15106:369631;15106:369528" data-name="Qty & Price">
                      <div className="content-stretch flex flex-[1_0_0] gap-[var(--px,1px)] items-center min-w-px relative" data-node-id="I34227:78644;15106:369631;15106:369529">
                        <p className="max-w-[160px] overflow-hidden relative shrink-0 text-ellipsis whitespace-nowrap" data-node-id="I34227:78644;15106:369631;15106:369530">
                          Brandon Settler, Kelly Prachet
                        </p>
                        <p className="overflow-hidden relative shrink-0 text-ellipsis whitespace-pre" data-node-id="I34227:78644;15106:369631;15106:369531">{`  `}</p>
                      </div>
                      <p className="relative shrink-0 whitespace-nowrap" data-node-id="I34227:78644;15106:369631;15106:369532">
                        Jul 06, 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid content-stretch flex gap-[var(--4,16px)] items-center px-[var(--4,16px)] py-[var(--1․5,6px)] relative shrink-0 w-full" data-node-id="I34227:78644;15106:369651" data-name="Trips list item">
                <div className="relative rounded-[var(--rounded,4px)] shrink-0 size-[64px]" data-node-id="I34227:78644;15106:369651;15106:369524" data-name="Trip thumbnail">
                  <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[var(--rounded,4px)]">
                    <img alt="" className="absolute max-w-none object-cover rounded-[var(--rounded,4px)] size-full" src={imgTripThumbnail4} />
                    <img alt="" className="absolute max-w-none object-cover rounded-[var(--rounded,4px)] size-full" src={imgTripThumbnail5} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--1․5,6px)] items-start min-w-px relative" data-node-id="I34227:78644;15106:369651;15106:369525" data-name="Name & Price">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--2,8px)] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="I34227:78644;15106:369651;15106:369526" data-name="Name & Description">
                    <p className="font-['Inter:Bold'] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] text-ellipsis w-full whitespace-nowrap" data-node-id="I34227:78644;15106:369651;15106:369527">
                      Cultural Journey: Heritage and Heart
                    </p>
                    <div className="content-stretch flex font-['Inter:Regular'] gap-[var(--4,16px)] items-center relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] w-full" data-node-id="I34227:78644;15106:369651;15106:369528" data-name="Qty & Price">
                      <div className="content-stretch flex flex-[1_0_0] gap-[var(--px,1px)] items-center min-w-px relative whitespace-pre" data-node-id="I34227:78644;15106:369651;15106:369529">
                        <p className="max-w-[160px] overflow-hidden relative shrink-0 text-ellipsis" data-node-id="I34227:78644;15106:369651;15106:369530">{`  `}</p>
                        <p className="overflow-hidden relative shrink-0 text-ellipsis" data-node-id="I34227:78644;15106:369651;15106:369531">{`  `}</p>
                      </div>
                      <p className="relative shrink-0 whitespace-nowrap" data-node-id="I34227:78644;15106:369651;15106:369532">
                        No Date Set
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid content-stretch flex gap-[var(--4,16px)] items-center px-[var(--4,16px)] py-[var(--1․5,6px)] relative shrink-0 w-full" data-node-id="I34227:78644;15106:369662" data-name="Trips list item">
                <div className="relative rounded-[var(--rounded,4px)] shrink-0 size-[64px]" data-node-id="I34227:78644;15106:369662;15106:369524" data-name="Trip thumbnail">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--rounded,4px)] size-full" src={imgTripThumbnail6} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--1․5,6px)] items-start min-w-px relative" data-node-id="I34227:78644;15106:369662;15106:369525" data-name="Name & Price">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--2,8px)] items-start leading-[1.5] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="I34227:78644;15106:369662;15106:369526" data-name="Name & Description">
                    <p className="font-['Inter:Bold'] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] text-ellipsis w-full" data-node-id="I34227:78644;15106:369662;15106:369527">
                      Christmas Market Cruise: See you on the Danube
                    </p>
                    <div className="content-stretch flex font-['Inter:Regular'] gap-[var(--4,16px)] items-center relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] w-full" data-node-id="I34227:78644;15106:369662;15106:369528" data-name="Qty & Price">
                      <div className="content-stretch flex flex-[1_0_0] gap-[var(--px,1px)] items-center min-w-px relative" data-node-id="I34227:78644;15106:369662;15106:369529">
                        <p className="max-w-[160px] overflow-hidden relative shrink-0 text-ellipsis" data-node-id="I34227:78644;15106:369662;15106:369530">
                          Aaron Mathews, Pam Meznick, Prac
                        </p>
                        <p className="overflow-hidden relative shrink-0 text-ellipsis" data-node-id="I34227:78644;15106:369662;15106:369531">
                          +18
                        </p>
                      </div>
                      <p className="relative shrink-0" data-node-id="I34227:78644;15106:369662;15106:369532">
                        Dec 17, 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[var(--blue-gray\/200,#d1dae0)] border-b border-solid content-stretch flex gap-[var(--4,16px)] items-center px-[var(--4,16px)] py-[var(--1․5,6px)] relative shrink-0 w-full" data-node-id="I34227:78644;15106:369673" data-name="Trips list item">
                <div className="relative rounded-[var(--rounded,4px)] shrink-0 size-[64px]" data-node-id="I34227:78644;15106:369673;15106:369524" data-name="Trip thumbnail">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[var(--rounded,4px)] size-full" src={imgTripThumbnail2} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--1․5,6px)] items-start min-w-px relative" data-node-id="I34227:78644;15106:369673;15106:369525" data-name="Name & Price">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--2,8px)] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="I34227:78644;15106:369673;15106:369526" data-name="Name & Description">
                    <p className="font-['Inter:Bold'] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] text-ellipsis w-full whitespace-nowrap" data-node-id="I34227:78644;15106:369673;15106:369527">
                      Coastal Escape: Waves and Wonders
                    </p>
                    <div className="content-stretch flex font-['Inter:Regular'] gap-[var(--4,16px)] items-center relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] w-full" data-node-id="I34227:78644;15106:369673;15106:369528" data-name="Qty & Price">
                      <div className="content-stretch flex flex-[1_0_0] gap-[var(--px,1px)] items-center min-w-px relative" data-node-id="I34227:78644;15106:369673;15106:369529">
                        <p className="max-w-[160px] overflow-hidden relative shrink-0 text-ellipsis whitespace-nowrap" data-node-id="I34227:78644;15106:369673;15106:369530">
                          Jose Martinez, Gwen Martinez
                        </p>
                        <p className="overflow-hidden relative shrink-0 text-ellipsis whitespace-pre" data-node-id="I34227:78644;15106:369673;15106:369531">{`  `}</p>
                      </div>
                      <p className="relative shrink-0 whitespace-nowrap" data-node-id="I34227:78644;15106:369673;15106:369532">
                        Feb 09, 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--blue-gray\/50,#f4f7fb)] content-stretch flex flex-[1_0_0] flex-col h-[1142px] items-start justify-center min-w-px relative" data-node-id="34227:78645">
          <div className="content-stretch flex h-[1142px] items-center pt-[16px] px-[16px] relative shrink-0 w-full" data-node-id="34227:78646" data-name="Content">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[1126px] items-center min-w-px relative" data-node-id="34227:78647" data-name="Content Layouts">
              <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="34227:78648" data-name="Row">
                <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/300,#b9c7ce)] border-b border-solid content-stretch flex flex-[1_0_0] flex-col gap-[var(--2,8px)] items-start min-w-px pb-[var(--4,16px)] pt-[var(--0,0px)] px-[var(--0,0px)] relative" data-node-id="34227:78649" data-name="Trip top panel">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I34227:78649;16336:238722">
                    <div className="content-stretch flex gap-[var(--4,16px)] items-center relative shrink-0" data-node-id="I34227:78649;16336:238723">
                      <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-node-id="I34227:78649;16336:238725">
                        <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[20px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34227:78649;16336:238726">
                          Adventure in the Rockies: A Journey through the mountains
                        </p>
                        <div className="relative shrink-0 size-[16px]" data-node-id="I34227:78649;16336:238727" data-name="edit">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEdit} />
                        </div>
                      </div>
                    </div>
                    <div className="border border-[var(--gray\/200,#d9dee0)] border-solid content-stretch flex items-start p-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="I34227:78649;16336:238728" data-name="Button">
                      <div className="relative shrink-0 size-[12px]" data-node-id="I34227:78649;16336:238728;29:128233" data-name="flowbite_solid-dots-horizontal">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidDotsHorizontal} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="I34227:78649;16336:238729">
                    <div className="content-stretch flex gap-[5px] items-center pr-[var(--2,8px)] relative shrink-0" data-node-id="I34227:78649;16336:238730">
                      <div className="border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--3,12px)] py-[var(--1,4px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="I34227:78649;16336:238731" data-name="Button">
                        <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[12px] text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="I34227:78649;16336:238731;29:127811">
                          Labels
                        </p>
                        <div className="relative shrink-0 size-[12px]" data-node-id="I34227:78649;16336:238731;29:127812" data-name="flowbite_solid-plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus1} />
                        </div>
                      </div>
                      <div className="flex flex-row items-center self-stretch" data-node-id="I34227:78649;16336:238732">
                        <div className="bg-[var(--primary\/700,#1b6793)] content-stretch flex gap-[var(--1,4px)] h-full items-center justify-center px-[var(--2․5,10px)] py-[var(--0․5,2px)] relative rounded-[var(--rounded,4px)] shrink-0" data-name="Badge">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:var(--white,white)] text-center whitespace-nowrap" data-node-id="I34227:78649;16336:238732;15441:3078">
                            <p className="leading-[1.5]">Luxury</p>
                          </div>
                          <div className="relative shrink-0 size-[8px]" data-node-id="I34227:78649;16336:238732;15441:3079" data-name="flowbite_solid-x">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidX} />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center self-stretch" data-node-id="I34227:78649;16336:238733">
                        <div className="bg-[var(--primary\/700,#1b6793)] content-stretch flex gap-[var(--1,4px)] h-full items-center justify-center px-[var(--2․5,10px)] py-[var(--0․5,2px)] relative rounded-[var(--rounded,4px)] shrink-0" data-name="Badge">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:var(--white,white)] text-center whitespace-nowrap" data-node-id="I34227:78649;16336:238733;15441:3078">
                            <p className="leading-[1.5]">Europe</p>
                          </div>
                          <div className="relative shrink-0 size-[8px]" data-node-id="I34227:78649;16336:238733;15441:3079" data-name="flowbite_solid-x">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidX} />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center self-stretch" data-node-id="I34227:78649;16336:238734">
                        <div className="bg-[var(--primary\/700,#1b6793)] content-stretch flex gap-[var(--1,4px)] h-full items-center justify-center px-[var(--2․5,10px)] py-[var(--0․5,2px)] relative rounded-[var(--rounded,4px)] shrink-0" data-name="Badge">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:var(--white,white)] text-center whitespace-nowrap" data-node-id="I34227:78649;16336:238734;15441:3078">
                            <p className="leading-[1.5]">Adults Only</p>
                          </div>
                          <div className="relative shrink-0 size-[8px]" data-node-id="I34227:78649;16336:238734;15441:3079" data-name="flowbite_solid-x">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidX} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I34227:78649;16336:238736">
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] content-stretch flex flex-col h-[26px] items-start justify-center px-[var(--2․5,10px)] py-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="I34227:78649;16336:238737" data-name="Select input">
                        <div className="content-stretch flex gap-[var(--2,8px)] items-center relative shrink-0 w-full" data-node-id="I34227:78649;16336:238737;14752:92680" data-name="Content">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34227:78649;16336:238737;14752:92681">
                            <p className="leading-[1.5]">No Platform</p>
                          </div>
                          <div className="relative shrink-0 size-[10px]" data-node-id="I34227:78649;16336:238737;14752:92682" data-name="flowbite_solid-chevron-down">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidChevronDown} />
                          </div>
                        </div>
                      </div>
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] content-stretch flex flex-col h-[26px] items-start justify-center px-[var(--2․5,10px)] py-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="I34227:78649;16336:238738" data-name="Select input">
                        <div className="content-stretch flex gap-[var(--2,8px)] items-center relative shrink-0 w-full" data-node-id="I34227:78649;16336:238738;14752:92680" data-name="Content">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34227:78649;16336:238738;14752:92681">
                            <p className="leading-[1.5]">Brand</p>
                          </div>
                          <div className="relative shrink-0 size-[10px]" data-node-id="I34227:78649;16336:238738;14752:92682" data-name="flowbite_solid-chevron-down">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidChevronDown} />
                          </div>
                        </div>
                      </div>
                      <div className="bg-[var(--blue-gray\/50,#f4f7fb)] content-stretch flex flex-col h-[26px] items-start justify-center px-[var(--2․5,10px)] py-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="I34227:78649;16336:238739" data-name="Select input">
                        <div className="content-stretch flex gap-[var(--2,8px)] items-center relative shrink-0 w-full" data-node-id="I34227:78649;16336:238739;14752:92680" data-name="Content">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34227:78649;16336:238739;14752:92681">
                            <p className="leading-[1.5]">No Status</p>
                          </div>
                          <div className="relative shrink-0 size-[10px]" data-node-id="I34227:78649;16336:238739;14752:92682" data-name="flowbite_solid-chevron-down">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidChevronDown} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex h-[1030px] items-start min-h-[920px] relative shrink-0 w-full" data-node-id="34227:78650" data-name="Row">
                <div className="border-[var(--blue-gray\/200,#d1dae0)] border-r border-solid content-stretch flex flex-col gap-[24px] h-full items-start pb-[var(--4,16px)] relative shrink-0" data-node-id="34227:78651" data-name="Trip sub nav">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip relative w-[300px]" data-node-id="34227:78652" data-name="Sub nav menus">
                    <div className="content-stretch flex flex-col gap-[var(--4,16px)] items-start py-[var(--4,16px)] relative shrink-0 w-full" data-node-id="34227:78653" data-name="Trip menu">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="34227:78654">
                        <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="34227:78655">
                          Trip Menu
                        </p>
                        <div className="content-stretch flex items-start p-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="34227:78656" data-name="Button">
                          <div className="relative shrink-0 size-[12px]" data-node-id="I34227:78656;29:128503" data-name="custom_icon-chevron-up">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCustomIconChevronUp} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[var(--0,0px)] items-start relative shrink-0 w-full" data-node-id="34227:78657" data-name="Trip Menu Nav">
                        <div className="content-stretch flex gap-[12px] items-center px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0 w-[300px]" data-node-id="34227:78658" data-name="Sub Nav Link">
                          <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="I34227:78658;15812:20104">
                            <div className="relative shrink-0 size-[16px]" data-node-id="I34227:78658;15448:35277" data-name="custom_icon-tasks clipboard">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCustomIconTasksClipboard} />
                            </div>
                            <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34227:78658;15448:35278">
                              Trip Activity
                            </p>
                          </div>
                        </div>
                        <button className="bg-[var(--primary\/600,#2a79a6)] content-stretch cursor-pointer flex gap-[var(--3,12px)] items-center px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0 w-[300px]" data-node-id="34227:78659" data-name="Sub Nav Link">
                          <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="I34227:78659;15812:20190">
                            <div className="relative shrink-0 size-[16px]" data-node-id="I34227:78659;15448:35292" data-name="custom_icon-group">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCustomIconGroup} />
                            </div>
                            <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--white,white)] text-left whitespace-nowrap" data-node-id="I34227:78659;15448:35293">
                              People
                            </p>
                          </div>
                        </button>
                        <div className="content-stretch flex gap-[12px] items-center px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0 w-[300px]" data-node-id="34227:78660" data-name="Sub Nav Link">
                          <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="I34227:78660;15812:20104">
                            <div className="relative shrink-0 size-[16px]" data-node-id="I34227:78660;15448:35277" data-name="custom_icon-tasks clipboard">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCustomIconTasksClipboard} />
                            </div>
                            <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34227:78660;15448:35278">
                              Tasks and Automations
                            </p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[12px] items-center px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0 w-[300px]" data-node-id="34227:78661" data-name="Sub Nav Link">
                          <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="I34227:78661;15812:20104">
                            <div className="relative shrink-0 size-[16px]" data-node-id="I34227:78661;15448:35277" data-name="custom_icon-notes">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCustomIconNotes} />
                            </div>
                            <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34227:78661;15448:35278">
                              Notes
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[var(--4,16px)] items-start py-[var(--4,16px)] relative shrink-0 w-full" data-node-id="34227:78662" data-name="Proposals and itineraries menu">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="34227:78663">
                        <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="34227:78664">{`Proposals & Itineraries (4)`}</p>
                        <div className="content-stretch flex items-start p-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="34227:78665" data-name="Button">
                          <div className="relative shrink-0 size-[12px]" data-node-id="I34227:78665;29:128503" data-name="custom_icon-chevron-up">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCustomIconChevronUp} />
                          </div>
                        </div>
                      </div>
                      <TripListItemsProposalItineraryEtc className="bg-[var(--white,white)] border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex gap-[var(--4,16px)] items-center overflow-clip pl-[var(--0,0px)] pr-[var(--4,16px)] py-[var(--0,0px)] relative rounded-[var(--rounded,4px)] shrink-0 w-full" />
                      <TripListItemsProposalItineraryEtc className="bg-[var(--white,white)] border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex gap-[var(--4,16px)] items-center overflow-clip pl-[var(--0,0px)] pr-[var(--4,16px)] py-[var(--0,0px)] relative rounded-[var(--rounded,4px)] shrink-0 w-full" />
                      <TripListItemsProposalItineraryEtc className="bg-[var(--white,white)] border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex gap-[var(--4,16px)] items-center overflow-clip pl-[var(--0,0px)] pr-[var(--4,16px)] py-[var(--0,0px)] relative rounded-[var(--rounded,4px)] shrink-0 w-full" type="Proposal" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[var(--4,16px)] items-start py-[var(--4,16px)] relative shrink-0 w-full" data-node-id="34227:78669" data-name="Proposals and itineraries menu">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="34227:78670">
                        <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="34227:78671">{`Forms & Other (5)`}</p>
                        <div className="content-stretch flex items-start p-[var(--2,8px)] relative rounded-[var(--rounded,4px)] shrink-0" data-node-id="34227:78672" data-name="Button">
                          <div className="relative shrink-0 size-[12px]" data-node-id="I34227:78672;29:128503" data-name="custom_icon-chevron-up">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCustomIconChevronUp} />
                          </div>
                        </div>
                      </div>
                      <div className="bg-[var(--white,white)] border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex gap-[var(--4,16px)] items-center overflow-clip pl-[var(--0,0px)] pr-[var(--4,16px)] py-[var(--0,0px)] relative rounded-[var(--rounded,4px)] shrink-0 w-full" data-node-id="34227:78673" data-name="Trip list items (proposal, itinerary, etc.)">
                        <div className="bg-[var(--indigo\/500,#6875f5)] content-stretch flex gap-[var(--2․5,10px)] items-center justify-center p-[var(--2․5,10px)] relative shrink-0 size-[80px]" data-node-id="I34227:78673;16340:4933" data-name="List item thumbnail">
                          <div className="relative shrink-0 size-[28px]" data-node-id="I34227:78673;16340:4933;16340:4426" data-name="custom_icon-globe">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCustomIconGlobe} />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--1․5,6px)] h-[48px] items-start min-w-px relative" data-node-id="I34227:78673;16340:4934" data-name="Name & Price">
                          <div className="content-stretch flex flex-col gap-[var(--2,8px)] items-start relative shrink-0 w-full" data-node-id="I34227:78673;16340:4935" data-name="Name & Description">
                            <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.43] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] w-[min-content]" data-node-id="I34227:78673;16340:4936">{`Landing Signup for Rockies Adventure `}</p>
                            <div className="absolute content-stretch flex gap-[var(--4,16px)] items-center justify-end left-[256px] top-[26px]" data-node-id="I34227:78673;16340:4937" data-name="Qty & Price">
                              <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 size-[16px]" data-node-id="I34227:78673;16340:4938">
                                <div className="relative shrink-0 size-[16px]" data-node-id="I34227:78673;16340:4940" data-name="visibility">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVisibility1} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[var(--primary\/600,#2a79a6)] border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex gap-[var(--4,16px)] items-center overflow-clip pl-[var(--0,0px)] pr-[var(--4,16px)] py-[var(--0,0px)] relative rounded-[var(--rounded,4px)] shrink-0 w-full" data-node-id="34227:78674" data-name="Trip list items (proposal, itinerary, etc.)">
                        <div className="bg-[var(--blue-gray\/600,#4f666d)] content-stretch flex gap-[var(--2․5,10px)] items-center justify-center p-[var(--2․5,10px)] relative shrink-0 size-[80px]" data-node-id="I34227:78674;19457:18410" data-name="List item thumbnail">
                          <div className="relative shrink-0 size-[28px]" data-node-id="I34227:78674;19457:18410;16340:4428" data-name="material_rounded-LocalPoliceRounded">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialRoundedLocalPoliceRounded} />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] items-start min-w-px relative" data-node-id="I34227:78674;19457:18411" data-name="Name & Price">
                          <div className="content-stretch flex flex-col gap-[var(--0,0px)] items-start relative shrink-0 w-full" data-node-id="I34227:78674;19457:18412" data-name="Name & Description">
                            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] max-h-[48px] not-italic overflow-hidden relative shrink-0 text-[16px] text-[color:var(--white,white)] text-ellipsis w-full" data-node-id="I34227:78674;19457:18413">
                              Travel Protection
                            </p>
                            <div className="content-stretch flex gap-[var(--4,16px)] items-center relative shrink-0 w-full" data-node-id="I34227:78674;19457:18414" data-name="Qty & Price">
                              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I34227:78674;19457:18415">
                                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34227:78674;19457:18416">
                                  On proposal and itinerary
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[var(--primary\/400,#45bbff)] content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--5,20px)] py-[var(--2․5,10px)] relative rounded-[var(--rounded,4px)] shrink-0 w-[284px]" data-node-id="34227:78675" data-name="Button">
                    <div className="relative shrink-0 size-[14px]" data-node-id="I34227:78675;15080:374335" data-name="flowbite_solid-plus">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidPlus} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34227:78675;15080:374336">
                      Add New
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col h-[1030px] items-start min-w-px relative" data-node-id="34227:78676">
                  <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border-[var(--blue-gray\/300,#b9c7ce)] border-b border-solid content-stretch flex flex-col gap-[var(--3․5,14px)] items-start pb-[var(--0,0px)] pt-[var(--4,16px)] px-[var(--4,16px)] relative shrink-0 w-full" data-node-id="34227:78677" data-name="Content header">
                    <div className="content-stretch flex gap-[var(--3,12px)] items-start relative shrink-0 w-full" data-node-id="34227:78678">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] items-start justify-center min-w-px relative" data-node-id="34227:78679">
                        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="34227:78680">
                          <div className="content-stretch flex flex-[1_0_0] gap-[var(--4,16px)] items-center min-w-px relative" data-node-id="34227:78681">
                            <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-w-px relative" data-node-id="34227:78682">
                              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[20px] text-[color:var(--blue-gray\/900,#223e47)] text-ellipsis whitespace-nowrap" data-node-id="34227:78683">
                                Travel Protection
                              </p>
                              <div className="relative shrink-0 size-[16px]" data-node-id="34227:78684" data-name="edit">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEdit} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic overflow-hidden relative shrink-0 text-[16px] text-[color:var(--blue-gray\/600,#4f666d)] text-ellipsis w-full whitespace-nowrap" data-node-id="34227:78685">
                          Insurance
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="34227:78686">
                      <div className="content-stretch flex gap-[var(--6,24px)] items-start relative shrink-0" data-node-id="34227:78687" data-name="Tabs">
                        <div className="content-stretch flex flex-col gap-[var(--2,8px)] items-start justify-center pb-[var(--0,0px)] pl-[20px] pr-[var(--5,20px)] relative rounded-[6px] shrink-0" data-node-id="34227:78688" data-name="Tab · Settings">
                          <div className="border-[var(--primary\/700,#1b6793)] border-b-3 border-solid content-stretch flex h-[35px] items-start py-[var(--0․5,2px)] relative shrink-0" data-node-id="I34227:78688;15387:715" data-name="Text">
                            <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I34227:78688;17977:9355" data-name="Icon and text">
                              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.25] not-italic relative shrink-0 text-[14px] text-[color:var(--primary\/700,#1b6793)] whitespace-nowrap" data-node-id="I34227:78688;15387:717">
                                Settings
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[var(--2,8px)] items-start justify-center pb-[var(--0,0px)] px-[var(--5,20px)] relative rounded-[6px] shrink-0" data-node-id="34227:78689" data-name="Tab · Responses">
                          <div className="content-stretch flex gap-[6px] h-[35px] items-start py-[var(--0․5,2px)] relative shrink-0" data-node-id="I34227:78689;15387:857" data-name="Text">
                            <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I34227:78689;17977:9358" data-name="Icon and text">
                              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] whitespace-nowrap" data-node-id="I34227:78689;15387:859">
                                Responses
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center self-stretch" data-node-id="34227:78690">
                        <div className="content-stretch flex gap-[var(--1,4px)] h-full items-start relative shrink-0" data-name="buttons">
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="34227:78691">
                            <a className="border border-[var(--gray\/200,#d9dee0)] border-solid content-stretch cursor-pointer flex gap-[var(--2,8px)] h-[28px] items-center justify-center overflow-clip px-[var(--3,12px)] py-[var(--2,8px)] relative rounded-[var(--rounded-sm,4px)] shrink-0" data-node-id="34238:2815" data-name="Preview button" onClick={() => navigate('/link-insurance-v1/screen/34233-2724')}>
                              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[12px] not-italic relative shrink-0 text-[12px] text-[color:var(--primary\/400,#45bbff)] text-left whitespace-nowrap" data-node-id="I34238:2815;27:127997">
                                Preview
                              </p>
                            </a>
                            <div className="border border-[var(--gray\/200,#d9dee0)] border-solid content-stretch flex gap-[var(--2,8px)] h-[28px] items-center justify-center overflow-clip px-[var(--3,12px)] py-[var(--2,8px)] relative rounded-[var(--rounded-sm,4px)] shrink-0" data-node-id="34227:78692" data-name="Button">
                              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[12px] not-italic relative shrink-0 text-[12px] text-[color:var(--primary\/400,#45bbff)] whitespace-nowrap" data-node-id="I34227:78692;27:127997">
                                Share
                              </p>
                            </div>
                            <div className="border border-[var(--gray\/200,#d9dee0)] border-solid content-stretch flex items-start p-[var(--2,8px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 size-[28px]" data-node-id="34227:78693" data-name="Button">
                              <div className="content-stretch flex items-center justify-center p-[var(--0,0px)] relative shrink-0" data-node-id="I34227:78693;17297:32165">
                                <div className="relative shrink-0 size-[12px]" data-node-id="I34227:78693;17297:32032" data-name="flowbite_solid-file-copy">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidFileCopy} />
                                </div>
                              </div>
                            </div>
                            <div className="border border-[var(--gray\/200,#d9dee0)] border-solid content-stretch flex items-start p-[var(--2,8px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 size-[28px]" data-node-id="34227:78694" data-name="Button">
                              <div className="content-stretch flex items-center justify-center p-[var(--0,0px)] relative shrink-0" data-node-id="I34227:78694;17297:32165">
                                <div className="relative shrink-0 size-[12px]" data-node-id="I34227:78694;17297:32032" data-name="flowbite_solid-archive">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidArchive} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[var(--white,white)] border-[var(--blue-gray\/200,#d1dae0)] border-r border-solid border-t content-stretch flex flex-col h-[919px] items-start px-[var(--6,24px)] py-[16px] relative rounded-tr-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="34227:78695">
                    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="34227:78696" data-name="Settings body">
                      <div className="bg-white border border-[#e5e8eb] border-solid content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-node-id="34227:78697" data-name="Insurance settings card">
                        <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-[866px]" data-node-id="34227:78698" data-name="Toggle row">
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip relative" data-node-id="34227:78699" data-name="Toggle labels">
                            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="34227:78700" data-name="Label with badge">
                              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="34227:78701">
                                Insurance for this trip
                              </p>
                              <div className="bg-[var(--green\/100,#def7ec)] border border-[var(--green\/400,#37d083)] border-solid content-stretch flex gap-[var(--1,4px)] items-center justify-center px-[var(--2․5,10px)] py-[var(--0․5,2px)] relative rounded-[var(--rounded-3xl,24px)] shrink-0" data-node-id="34227:78702" data-name="Active badge">
                                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:var(--green\/800,#14673f)] text-center whitespace-nowrap" data-node-id="I34227:78702;19062:35190">
                                  <p className="leading-[1.5]">Visible</p>
                                </div>
                              </div>
                            </div>
                            <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap" data-node-id="34227:78703">
                              Toggle visibility of insurance offer on Proposals and Itineraries.
                            </p>
                          </div>
                          <Toggle className="content-stretch cursor-pointer flex gap-[var(--2,8px)] items-start relative shrink-0" showHelper={false} showLabel={false} state="Active" />
                        </div>
                        <div className="bg-[#e5e8eb] h-px relative shrink-0 w-full" data-node-id="34227:78705" data-name="Divider" />
                        <div className="content-stretch flex flex-col gap-[8px] h-[100px] items-start overflow-clip relative shrink-0 w-full" data-node-id="34227:78706" data-name="V4 step 3 Provider">
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px overflow-clip relative w-full" data-node-id="34227:78707" data-name="Toggle labels">
                            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="34227:78708" data-name="Label with badge">
                              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="34227:78709">
                                Insurance provider
                              </p>
                            </div>
                            <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] min-w-full not-italic relative shrink-0 text-[12px] text-black w-[min-content]" data-node-id="34227:78711">
                              Choose a linked provider, or pick + Add new at the bottom of the list for one without a linked account.
                            </p>
                          </div>
                          <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex flex-col items-start p-[var(--3,12px)] relative rounded-[var(--rounded,4px)] shrink-0 w-full" data-node-id="34227:78712" data-name="Select input">
                            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I34227:78712;528:51" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/900,#223e47)]" data-node-id="I34227:78712;479:148">
                                <p className="leading-[1.25]">Allianz Travel (linked account)</p>
                              </div>
                              <div className="relative shrink-0 size-[10px]" data-node-id="I34227:78712;989:230" data-name="flowbite_solid-chevron-down">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidChevronDown1} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] h-[100px] items-start overflow-clip relative shrink-0 w-full" data-node-id="34227:78713" data-name="V4 step 6 Who buys">
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px overflow-clip relative w-full" data-node-id="34227:78714" data-name="Toggle labels">
                            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="34227:78715" data-name="Label with badge">
                              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="34227:78716">
                                Who buys
                              </p>
                            </div>
                            <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] min-w-full not-italic relative shrink-0 text-[12px] text-black w-[min-content]" data-node-id="34227:78718">
                              Traveler purchases directly is unavailable when the provider has no traveler checkout.
                            </p>
                          </div>
                          <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex flex-col items-start p-[var(--3,12px)] relative rounded-[var(--rounded,4px)] shrink-0 w-full" data-node-id="34227:78719" data-name="Select input">
                            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I34227:78719;528:51" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/900,#223e47)]" data-node-id="I34227:78719;479:148">
                                <p className="leading-[1.25]">I will purchase for the traveler (default)</p>
                              </div>
                              <div className="relative shrink-0 size-[10px]" data-node-id="I34227:78719;989:230" data-name="flowbite_solid-chevron-down">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidChevronDown1} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="34227:78720" data-name="V4 step 8 Trip cost">
                          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-node-id="34227:78721" data-name="Toggle labels">
                            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="34227:78722" data-name="Label with badge">
                              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="34227:78723">
                                Total trip cost
                              </p>
                            </div>
                            <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] min-w-full not-italic relative shrink-0 text-[12px] text-black w-[min-content]" data-node-id="34227:78725">
                              Confirm the trip cost used for quotes. Traveler details prefill from the CRM or their login.
                            </p>
                          </div>
                          <div className="content-stretch flex flex-col gap-[var(--0․5,2px)] items-start relative shrink-0 w-full" data-node-id="34227:78726" data-name="Input Field">
                            <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34227:78726;17912:21518">
                              <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34227:78726;110:145393" data-name="Input">
                                <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34227:78726;110:145394" data-name="Content">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34227:78726;110:145396">
                                    <p className="leading-[1.25]">$8,400</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] h-[100px] items-start overflow-clip relative shrink-0 w-full" data-node-id="34227:78727" data-name="V4 step 9 Travelers">
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px overflow-clip relative w-full" data-node-id="34227:78728" data-name="Toggle labels">
                            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="34227:78729" data-name="Label with badge">
                              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="34227:78730">
                                Travelers who see the offer
                              </p>
                            </div>
                            <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] min-w-full not-italic relative shrink-0 text-[12px] text-black w-[min-content]" data-node-id="34227:78732">
                              Default is all adult travelers on the trip.
                            </p>
                          </div>
                          <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex flex-col items-start p-[var(--3,12px)] relative rounded-[var(--rounded,4px)] shrink-0 w-full" data-node-id="34227:78733" data-name="Select input">
                            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I34227:78733;528:51" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/900,#223e47)]" data-node-id="I34227:78733;479:148">
                                <p className="leading-[1.25]">All adult travelers (4)</p>
                              </div>
                              <div className="relative shrink-0 size-[10px]" data-node-id="I34227:78733;989:230" data-name="flowbite_solid-chevron-down">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidChevronDown1} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-[866px]" data-node-id="34227:78806" data-name="E-signature on decline row">
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip relative" data-node-id="34227:78807" data-name="Toggle labels">
                            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="34227:78808" data-name="Label with badge">
                              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="34227:78809">
                                Require e-signature on decisions
                              </p>
                              <div className="bg-[var(--grandis\/100,#ffeed5)] border border-[var(--grandis\/400,#e2a03d)] border-solid content-stretch flex gap-[var(--1,4px)] items-center px-[var(--2․5,10px)] py-[var(--0․5,2px)] relative rounded-[var(--rounded-3xl,24px)] shrink-0" data-node-id="34227:78810" data-name="Open question badge">
                                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:var(--grandis\/800,#83381d)] text-center whitespace-nowrap" data-node-id="I34227:78810;19062:35198">
                                  <p className="leading-[1.5]">Off</p>
                                </div>
                              </div>
                            </div>
                            <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] min-w-full not-italic relative shrink-0 text-[12px] text-black w-[min-content]" data-node-id="34227:78811">
                              Applies to every decision, accept or decline. When on, travelers always sign before a decision is saved. When off, no decision is signed. Signature stamps name, IP address, date and time.
                            </p>
                          </div>
                          <Toggle className="content-stretch cursor-pointer flex gap-[var(--2,8px)] items-start relative shrink-0" showHelper={false} showLabel={false} />
                        </div>
                        <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-[866px]" data-node-id="34227:78813" data-name="V4 step 11 Reminder automation">
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip relative" data-node-id="34227:78814" data-name="Toggle labels">
                            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="34227:78815" data-name="Label with badge">
                              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="34227:78816">
                                Set automation to remind traveler
                              </p>
                              <div className="bg-[var(--green\/100,#def7ec)] border border-[var(--green\/400,#37d083)] border-solid content-stretch flex gap-[var(--1,4px)] items-center justify-center px-[var(--2․5,10px)] py-[var(--0․5,2px)] relative rounded-[var(--rounded-3xl,24px)] shrink-0" data-node-id="34227:78817" data-name="Active badge">
                                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:var(--green\/800,#14673f)] text-center whitespace-nowrap" data-node-id="I34227:78817;19062:35190">
                                  <p className="leading-[1.5]">On</p>
                                </div>
                              </div>
                            </div>
                            <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] min-w-full not-italic relative shrink-0 text-[12px] text-black w-[min-content]" data-node-id="34227:78818">
                              Reminds before the deposit deadline and near final payment, using system default timing. Stops once the traveler decides.
                            </p>
                          </div>
                          <Toggle className="content-stretch cursor-pointer flex gap-[var(--2,8px)] items-start relative shrink-0" showHelper={false} showLabel={false} state="Active" />
                        </div>
                      </div>
                      <div className="content-stretch flex h-[60px] items-center justify-end py-[8px] relative shrink-0 w-full" data-node-id="34227:78830" data-name="Sticky footer CTAs" />
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
