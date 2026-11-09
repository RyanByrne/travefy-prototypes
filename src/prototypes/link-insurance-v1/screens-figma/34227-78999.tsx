import { useNavigate } from 'react-router-dom'

const imgFlowbiteSolidX = "/src/prototypes/link-insurance-v1/assets/4321a8d6-bea5-47cf-b1ac-b3ecd7a8936d.svg";
const imgSeparator = "/src/prototypes/link-insurance-v1/assets/16cb14ff-71cf-431b-a03c-ac70c6783a83.svg";
const imgSeparator1 = "/src/prototypes/link-insurance-v1/assets/bdf6e911-dce0-45fd-9f7c-a170d872d56f.svg";
const imgFlowbiteSolidChevronDown = "/src/prototypes/link-insurance-v1/assets/9309fa3c-b7af-4d47-b27f-077a07291ca9.svg";

export default function AdvisorAddPolicyForJackHawthorne() {
  const navigate = useNavigate()
  return (
    <div className="bg-[var(--white,white)] border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex flex-col items-start relative rounded-[var(--rounded-sm,4px)] size-full" data-node-id="34227:78999" data-name="Advisor: Add policy for Jack Hawthorne">
      <div className="bg-[var(--gray\/50,#f6f8f9)] border-[var(--blue-gray\/200,#d1dae0)] border-l border-r border-solid border-t content-stretch flex gap-[16px] h-[48px] items-center justify-end px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-tl-[var(--rounded-sm,4px)] rounded-tr-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="34227:79000" data-name="Modal Header">
        <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I34227:79000;15411:10373" data-name="Title">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semibold'] leading-[1.5] min-w-px not-italic overflow-hidden relative text-[18px] text-[color:var(--blue-gray\/900,#223e47)] text-ellipsis whitespace-nowrap" data-node-id="I34227:79000;15411:10374">
            Add policy for Jack Hawthorne
          </p>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="I34227:79000;15411:11465">
          <div className="relative shrink-0 size-[12px]" data-node-id="I34227:79000;15411:10375" data-name="flowbite_solid-x">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidX} />
          </div>
        </div>
      </div>
      <div className="h-px relative shrink-0 w-full" data-node-id="34227:79001" data-name="Separator">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSeparator} />
      </div>
      <div className="h-px relative shrink-0 w-full" data-node-id="34227:79002" data-name="Separator">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSeparator1} />
      </div>
      <div className="content-stretch flex flex-col gap-[var(--4,16px)] items-start overflow-clip p-[var(--5,20px)] relative shrink-0 w-full" data-node-id="34227:79003" data-name="Modal body">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#375059] text-[14px] w-[min-content]" data-node-id="34227:79004">
          <p className="leading-[1.43]">{`Jack accepted this offer and chose "My advisor will buy on my behalf". Buy the policy with the provider, then add it here for Jack only. Each traveler gets their own policy record.`}</p>
        </div>
        <div className="[word-break:break-word] bg-[#f9fafb] content-stretch flex flex-col font-['Inter:Regular'] gap-[4px] items-start not-italic overflow-clip p-[12px] relative rounded-[6px] shrink-0 w-full" data-node-id="34227:79010" data-name="Accepted quote summary">
          <p className="leading-[1.43] relative shrink-0 text-[#111928] text-[14px] w-full" data-node-id="34227:79011">
            Accepted quote: Allianz Travel OneTrip Prime, $72, on May 10
          </p>
          <p className="leading-[1.5] relative shrink-0 text-[#6b7280] text-[12px] w-full" data-node-id="34227:79012">
            Quotes are regenerated at purchase, so enter the premium you actually paid.
          </p>
        </div>
        <button className="content-stretch cursor-pointer flex flex-col gap-[var(--2,8px)] items-start relative shrink-0 w-full" data-node-id="34236:2526" data-name="Provider (combobox, + Add new is the last option)">
          <div className="content-stretch flex gap-[var(--2,8px)] items-center relative shrink-0 w-full" data-node-id="I34236:2526;135:141662" data-name="Label">
            <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] text-left whitespace-nowrap" data-node-id="I34236:2526;135:141663">
              Provider
            </p>
          </div>
          <div className="bg-[var(--blue-gray\/50,#f4f7fb)] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex flex-col items-start p-[var(--3,12px)] relative rounded-[var(--rounded,4px)] shrink-0 w-full" data-node-id="I34236:2526;528:335" data-name="Input">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I34236:2526;528:340" data-name="Content">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] h-full justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[color:var(--blue-gray\/900,#223e47)] text-left">
                <p className="leading-[1.25]">Allianz Travel</p>
              </div>
              <div className="relative shrink-0 size-[10px]" data-node-id="I34236:2526;989:72" data-name="flowbite_solid-chevron-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlowbiteSolidChevronDown} />
              </div>
            </div>
          </div>
        </button>
        <div className="content-stretch flex flex-col gap-[var(--0․5,2px)] h-[73px] items-start relative shrink-0 w-full" data-node-id="34236:2540" data-name="Plan or package name">
          <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34236:2540;17912:21518">
            <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34236:2540;110:145392">
              Plan or package name
            </p>
            <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34236:2540;110:145393" data-name="Input">
              <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34236:2540;110:145394" data-name="Content">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34236:2540;110:145396">
                  <p className="leading-[1.25]">OneTrip Prime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--0․5,2px)] h-[73px] items-start relative shrink-0 w-full" data-node-id="34227:79013" data-name="Policy number">
          <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34227:79013;17912:21518">
            <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34227:79013;110:145392">
              Policy number
            </p>
            <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34227:79013;110:145393" data-name="Input">
              <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34227:79013;110:145394" data-name="Content">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34227:79013;110:145396">
                  <p className="leading-[1.25]">ALZ-48213</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="34236:2573" data-name="Coverage dates">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0․5,2px)] items-start min-w-px relative self-stretch" data-node-id="34236:2551" data-name="Coverage start">
            <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34236:2551;17912:21518">
              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34236:2551;110:145392">
                Coverage start
              </p>
              <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34236:2551;110:145393" data-name="Input">
                <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34236:2551;110:145394" data-name="Content">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34236:2551;110:145396">
                    <p className="leading-[1.25]">Jun 2, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0․5,2px)] items-start min-w-px relative self-stretch" data-node-id="34236:2562" data-name="Coverage end">
            <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34236:2562;17912:21518">
              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34236:2562;110:145392">
                Coverage end
              </p>
              <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34236:2562;110:145393" data-name="Input">
                <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34236:2562;110:145394" data-name="Content">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34236:2562;110:145396">
                    <p className="leading-[1.25]">Jun 14, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="34236:2596" data-name="Premium and purchase date">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0․5,2px)] items-start min-w-px relative self-stretch" data-node-id="34236:2574" data-name="Premium paid">
            <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34236:2574;17912:21518">
              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34236:2574;110:145392">
                Premium paid
              </p>
              <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34236:2574;110:145393" data-name="Input">
                <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34236:2574;110:145394" data-name="Content">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34236:2574;110:145396">
                    <p className="leading-[1.25]">$72.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0․5,2px)] items-start min-w-px relative self-stretch" data-node-id="34236:2585" data-name="Purchase date">
            <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34236:2585;17912:21518">
              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34236:2585;110:145392">
                Purchase date
              </p>
              <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34236:2585;110:145393" data-name="Input">
                <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34236:2585;110:145394" data-name="Content">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34236:2585;110:145396">
                    <p className="leading-[1.25]">May 10, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--0․5,2px)] h-[73px] items-start relative shrink-0 w-full" data-node-id="34236:2597" data-name="Travelers covered">
          <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34236:2597;17912:21515">
            <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34236:2597;17339:37800">
              Travelers covered
            </p>
            <div className="bg-[var(--blue-gray\/100,#e1e7ec)] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34236:2597;17339:37801" data-name="Input">
              <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34236:2597;17339:37802" data-name="Content">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/800,#375059)]" data-node-id="I34236:2597;17339:37804">
                  <p className="leading-[1.25]">Jack Hawthorne</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--0․5,2px)] h-[73px] items-start relative shrink-0 w-full" data-node-id="34236:2616" data-name="24/7 assistance phone (optional)">
          <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34236:2616;17912:21527">
            <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34236:2616;45:127837">
              24/7 assistance phone (optional)
            </p>
            <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34236:2616;45:127838" data-name="Input">
              <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34236:2616;45:127839" data-name="Content">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/500,#678390)]" data-node-id="I34236:2616;45:127841">
                  <p className="leading-[1.25]">Provider emergency number</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-end overflow-clip relative shrink-0 w-full" data-node-id="34236:2669" data-name="Policy document">
          <div className="flex flex-[1_0_0] flex-row items-end self-stretch" data-node-id="34236:2637">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0․5,2px)] h-full items-start min-w-px relative" data-name="Policy document (optional)">
              <div className="content-stretch flex flex-col gap-[var(--1․5,6px)] items-start relative shrink-0 w-full" data-node-id="I34236:2637;17912:21527">
                <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/800,#375059)] w-full" data-node-id="I34236:2637;45:127837">
                  Policy document (optional)
                </p>
                <div className="bg-[var(--blue-gray\/50-at-60\%,rgba(244,247,251,0.6))] border border-[var(--blue-gray\/300,#b9c7ce)] border-solid content-stretch flex gap-[var(--2․5,10px)] items-center px-[var(--4,16px)] py-[var(--3,12px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 w-full" data-node-id="I34236:2637;45:127838" data-name="Input">
                  <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-node-id="I34236:2637;45:127839" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--blue-gray\/500,#678390)]" data-node-id="I34236:2637;45:127841">
                      <p className="leading-[1.25]">Paste a link or upload the policy PDF</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[var(--gray\/200,#d9dee0)] border-solid content-stretch flex gap-[8px] h-[36px] items-center justify-center overflow-clip px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-[var(--rounded-sm,4px)] shrink-0" data-node-id="34236:2656" data-name="Upload PDF button">
            <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--primary\/400,#45bbff)] whitespace-nowrap" data-node-id="I34236:2656;27:127993">
              Upload PDF
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#6b7280] text-[12px] w-[min-content]" data-node-id="34236:2670">{`Saving marks Jack Purchased on Responses and shows the policy on his itinerary. The trip's advisor can add or edit a policy. Policies bought through the Allianz integration fill in automatically.`}</p>
      </div>
      <div className="bg-[var(--gray\/50,#f6f8f9)] border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex items-center p-[var(--4,16px)] relative rounded-bl-[var(--rounded,4px)] rounded-br-[var(--rounded,4px)] shrink-0 w-full" data-node-id="34227:79017" data-name="Modal Footer">
        <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="I34227:79017;15411:11771" data-name="Modal footer actions">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I34227:79017;15411:11771;15411:11725">
            <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px px-[var(--0,0px)] relative cursor-pointer" data-name="Cancel" onClick={() => navigate('/link-insurance-v1/screen/34227-78843')}>
              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="I34227:79017;15411:11771;15411:11724">
                Cancel
              </p>
            </div>
          </div>
          <div className="bg-[var(--primary\/600,#2a79a6)] content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--5,20px)] py-[var(--2․5,10px)] relative rounded-[var(--rounded-sm,4px)] shrink-0 cursor-pointer" data-node-id="I34227:79017;15411:11771;15411:11700" data-name="Button" onClick={() => navigate('/link-insurance-v1/screen/34237-3169')}>
            <p className="[word-break:break-word] font-['Inter:Regular'] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34227:79017;15411:11771;15411:11700;27:127539">
              Save policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
