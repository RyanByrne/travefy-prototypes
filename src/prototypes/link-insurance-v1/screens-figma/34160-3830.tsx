const imgSelectedFalse = "/src/prototypes/link-insurance-v1/assets/a20f4fcb-057c-4a66-850b-7ecee5400d05.svg";
const imgSelectedTrue = "/src/prototypes/link-insurance-v1/assets/370c6fda-587c-4fe4-8fce-f661cd8e66b2.svg";
const imgCollapse = "/src/prototypes/link-insurance-v1/assets/10dc0c15-1e6e-4398-9d1c-ef58e7c53bcf.svg";
const imgExpand = "/src/prototypes/link-insurance-v1/assets/5d1398e8-d832-4271-ae29-436368500b3d.svg";
const imgExpand1 = "/src/prototypes/link-insurance-v1/assets/635f7b6f-e171-4c41-a3e1-68b30b534748.svg";

type RadioLocalInsuranceOfferCardProps = {
  className?: string;
  selected?: boolean;
};

function RadioLocalInsuranceOfferCard({ className, selected = false }: RadioLocalInsuranceOfferCardProps) {
  const isSelected = selected;
  return (
    <div className={className || "relative size-[18px]"} id={isSelected ? "node-34159_3682" : "node-34159_3680"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={isSelected ? imgSelectedTrue : imgSelectedFalse} />
    </div>
  );
}

type PlanRowInsuranceOfferCardProps = {
  className?: string;
  highlight1?: string;
  highlight2?: string;
  highlight3?: string;
  planName?: string;
  price?: string;
  selected?: boolean;
  showHighlight3?: boolean;
};

function PlanRowInsuranceOfferCard({ className, highlight1 = "Cancellation up to $8,400", highlight2 = "Medical $50,000", highlight3 = "Baggage $1,000", planName = "OneTrip Prime", price = "$72", selected = false, showHighlight3 = true }: PlanRowInsuranceOfferCardProps) {
  const isSelected = selected;
  return (
    <div className={className || `${String.raw`border-[var(--blue-gray\/100,#e1e7ec)] border-solid border-t content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-[600px] `}${isSelected ? String.raw`bg-[var(--primary\/50,#eff9ff)]` : "bg-[var(--white,white)]"}`} id={isSelected ? "node-34159_3698" : "node-34159_3685"}>
      <RadioLocalInsuranceOfferCard className="relative shrink-0 size-[18px]" selected={isSelected ? true : undefined} />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative" id={isSelected ? "node-34159_3701" : "node-34159_3688"} data-name="Plan">
        <div className="content-stretch flex items-center overflow-clip relative shrink-0" id={isSelected ? "node-34159_3702" : "node-34159_3689"} data-name="Name line">
          <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="34159:3690">
            {planName}
          </p>
        </div>
        <div className="[word-break:break-word] content-start flex flex-wrap font-['Inter:Regular'] gap-[2px_12px] items-start leading-[1.5] not-italic overflow-clip relative shrink-0 text-[12px] text-[color:var(--blue-gray\/600,#4f666d)] w-full whitespace-nowrap" id={isSelected ? "node-34159_3706" : "node-34159_3693"} data-name="Highlights">
          <p className="relative shrink-0" data-node-id="34159:3694">
            {highlight1}
          </p>
          <p className="relative shrink-0" data-node-id="34159:3695">
            {highlight2}
          </p>
          {showHighlight3 && (
            <p className="relative shrink-0" data-node-id="34159:3696">
              {highlight3}
            </p>
          )}
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[20px] text-[color:var(--blue-gray\/900,#223e47)] text-right whitespace-nowrap" data-node-id="34159:3697">
        {price}
      </p>
      {isSelected && <div className="absolute bg-[var(--primary\/600,#2a79a6)] bottom-0 left-0 top-[-1px] w-[3px]" data-node-id="34159:3711" data-name="Selected accent" />}
    </div>
  );
}

type InsuranceOfferCardProps = {
  className?: string;
  showCollapseChevron?: boolean;
  showYourDetails?: boolean;
  state?: "Quotes" | "Pre-quote" | "Accepted collapsed" | "Declined collapsed" | "Pre-quote condensed" | "Purchased collapsed";
};

function InsuranceOfferCard({ className, showCollapseChevron = true, showYourDetails = true, state = "Quotes" }: InsuranceOfferCardProps) {
  const isAcceptedCollapsed = state === "Accepted collapsed";
  const isAcceptedCollapsedOrPurchasedCollapsed = ["Accepted collapsed", "Purchased collapsed"].includes(state);
  const isAcceptedCollapsedOrPurchasedCollapsedOrDeclinedCollapsed = ["Accepted collapsed", "Purchased collapsed", "Declined collapsed"].includes(state);
  const isAcceptedCollapsedOrPurchasedCollapsedOrDeclinedCollapsedOrPre = ["Accepted collapsed", "Purchased collapsed", "Declined collapsed", "Pre-quote condensed"].includes(state);
  const isDeclinedCollapsed = state === "Declined collapsed";
  const isPreQuote = state === "Pre-quote";
  const isPreQuoteCondensed = state === "Pre-quote condensed";
  const isPurchasedCollapsed = state === "Purchased collapsed";
  const isQuotes = state === "Quotes";
  const isQuotesOrPreQuote = ["Quotes", "Pre-quote"].includes(state);
  return (
    <div className={className || `${String.raw`bg-[var(--white,white)] border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex items-start overflow-clip relative rounded-[8px] w-[632px] `}${isAcceptedCollapsedOrPurchasedCollapsedOrDeclinedCollapsedOrPre ? "h-[60px]" : "flex-col"}`} id={isPreQuoteCondensed ? "node-34170_2175" : isDeclinedCollapsed ? "node-34160_3814" : isPurchasedCollapsed ? "node-34240_2818" : isAcceptedCollapsed ? "node-34160_3799" : isPreQuote ? "node-34160_3767" : "node-34160_3684"}>
      {isAcceptedCollapsedOrPurchasedCollapsedOrDeclinedCollapsedOrPre && (
        <>
          <div className="bg-[#003781] h-full relative shrink-0 w-[4px]" id={isPreQuoteCondensed ? "node-34170_2176" : isDeclinedCollapsed ? "node-34160_3815" : isPurchasedCollapsed ? "node-34240_2819" : "node-34160_3800"} data-name="Provider accent" />
          <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip px-[16px] py-[12px] relative" id={isPreQuoteCondensed ? "node-34170_2177" : isDeclinedCollapsed ? "node-34160_3816" : isPurchasedCollapsed ? "node-34240_2820" : "node-34160_3801"} data-name="Summary">
            <div className="border-[#003781] border-[1.5px] border-dashed content-stretch flex h-[26px] items-center justify-center overflow-clip px-[8px] relative rounded-[6px] shrink-0 w-[46px]" id={isPreQuoteCondensed ? "node-34170_2178" : isDeclinedCollapsed ? "node-34160_3817" : isPurchasedCollapsed ? "node-34240_2821" : "node-34160_3802"} data-name="Provider logo">
              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[#003781] text-[12px] tracking-[0.6px] whitespace-nowrap" id={isPreQuoteCondensed ? "node-34170_2179" : isDeclinedCollapsed ? "node-34160_3818" : isPurchasedCollapsed ? "node-34240_2822" : "node-34160_3803"}>
                LOGO
              </p>
            </div>
            <div className={`content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip relative ${isPreQuoteCondensed ? "" : "[word-break:break-word] not-italic"}`} id={isPreQuoteCondensed ? "node-34170_2180" : isDeclinedCollapsed ? "node-34160_3819" : isPurchasedCollapsed ? "node-34240_2823" : "node-34160_3804"} data-name="Summary text">
              {isAcceptedCollapsedOrPurchasedCollapsedOrDeclinedCollapsed && (
                <>
                  <p className="font-['Inter:Bold'] leading-[1.43] relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] w-full whitespace-pre-wrap" id={isDeclinedCollapsed ? "node-34160_3820" : isPurchasedCollapsed ? "node-34240_2824" : "node-34160_3805"}>
                    {isDeclinedCollapsed ? "Allianz Travel (example)  ·  Travel protection" : isAcceptedCollapsedOrPurchasedCollapsed ? "Allianz Travel (example)  ·  OneTrip Prime" : ""}
                  </p>
                  <div className="content-center flex flex-wrap gap-[2px_6px] items-center leading-[1.5] overflow-clip relative shrink-0 text-[12px] w-full" id={isDeclinedCollapsed ? "node-34160_3821" : isPurchasedCollapsed ? "node-34240_2825" : "node-34160_3806"} data-name="Summary details">
                    <p className={`relative shrink-0 whitespace-nowrap ${isDeclinedCollapsed ? String.raw`font-["Proxima_Nova:Regular"] text-[color:var(--blue-gray\/600,#4f666d)]` : String.raw`font-["Proxima_Nova:Semibold"] text-[color:var(--blue-gray\/900,#223e47)]`}`} id={isDeclinedCollapsed ? "node-34160_3822" : isPurchasedCollapsed ? "node-34240_2826" : "node-34160_3807"}>
                      {isDeclinedCollapsed ? "Declined May 11, 14:02 by Elisa Denton" : isAcceptedCollapsedOrPurchasedCollapsed ? "$72" : ""}
                    </p>
                    <p className={`relative shrink-0 whitespace-pre ${isDeclinedCollapsed ? String.raw`font-["Proxima_Nova:Semibold"] text-[color:var(--primary\/600,#2a79a6)]` : String.raw`font-["Proxima_Nova:Regular"] text-[color:var(--blue-gray\/600,#4f666d)]`}`} id={isDeclinedCollapsed ? "node-34160_3823" : isPurchasedCollapsed ? "node-34240_2827" : "node-34160_3808"}>
                      {isDeclinedCollapsed ? "·  Change your mind?" : isPurchasedCollapsed ? "·  Policy ALZ-48213, covered Jun 2 to Jun 14" : isAcceptedCollapsed ? "·  Accepted May 11 by Elisa Denton. Not covered until purchased" : ""}
                    </p>
                    {isPurchasedCollapsed && <p className="font-['Inter:Semibold'] relative shrink-0 text-[color:var(--primary\/600,#2a79a6)] whitespace-pre" data-node-id="34240:2828">{`·  View policy`}</p>}
                  </div>
                </>
              )}
              {isPreQuoteCondensed && (
                <>
                  <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="34170:2515" data-name="Title row">
                    <p className="[word-break:break-word] font-['Inter:Bold'] h-full leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] w-[275px] whitespace-pre-wrap">{`Allianz Travel (example)  ·  Travel protection`}</p>
                  </div>
                  <div className="content-center flex flex-wrap gap-[2px_6px] items-center overflow-clip relative shrink-0 w-full" data-node-id="34170:2182" data-name="Summary details">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] leading-[1.5] min-w-px not-italic relative text-[12px] text-[color:var(--blue-gray\/600,#4f666d)]" data-node-id="34170:2183">
                      Your advisor shared an offer for this trip.
                    </p>
                  </div>
                </>
              )}
            </div>
            {isAcceptedCollapsedOrPurchasedCollapsedOrDeclinedCollapsed && (
              <>
                <div className={`content-stretch flex h-[20px] items-center justify-center px-[var(--2․5,10px)] py-[var(--0․5,2px)] relative rounded-[80px] shrink-0 ${isDeclinedCollapsed ? String.raw`bg-[var(--blue-gray\/100,#e1e7ec)]` : isPurchasedCollapsed ? String.raw`bg-[var(--green\/100,#def7ec)]` : String.raw`bg-[var(--indigo\/100,#e5edff)]`}`} id={isDeclinedCollapsed ? "node-34160_3826" : isPurchasedCollapsed ? "node-34240_2829" : "node-34160_3810"} data-name="Status pill">
                  <p className={`[word-break:break-word] font-["Proxima_Nova:Semibold"] leading-[1.5] not-italic relative shrink-0 text-[12px] text-center whitespace-nowrap ${isDeclinedCollapsed ? String.raw`text-[color:var(--blue-gray\/900,#223e47)]` : isPurchasedCollapsed ? String.raw`text-[color:var(--green\/800,#14673f)]` : String.raw`text-[color:var(--indigo\/800,#42389d)]`}`} id={isDeclinedCollapsed ? "node-I34160_3826-13552_81428" : isPurchasedCollapsed ? "node-I34240_2829-13552_81434" : "node-I34160_3810-13552_81438"}>
                    {isDeclinedCollapsed ? "Declined" : isPurchasedCollapsed ? "✓ Purchased" : isAcceptedCollapsed ? "Accepted" : ""}
                  </p>
                </div>
                <div className="relative shrink-0 size-[16px]" id={isDeclinedCollapsed ? "node-34160_3828" : isPurchasedCollapsed ? "node-34240_2830" : "node-34160_3812"} data-name="Expand">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExpand} />
                </div>
              </>
            )}
            {isPreQuoteCondensed && (
              <>
                <div className="content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--0,0px)] py-[var(--1,4px)] relative rounded-[var(--rounded-sm,4px)] shrink-0" data-node-id="34170:2193" data-name="Button - Decline (text link)">
                  <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[12px] not-italic relative shrink-0 text-[12px] text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="I34170:2193;15922:373848">
                    Decline
                  </p>
                </div>
                <div className="bg-[var(--primary\/600,#2a79a6)] content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--3,12px)] py-[var(--2,8px)] relative rounded-[var(--rounded-sm,4px)] shrink-0" data-node-id="34170:2201" data-name="Button - Primary">
                  <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[12px] not-italic relative shrink-0 text-[12px] text-[color:var(--white,white)] whitespace-nowrap" data-node-id="I34170:2201;27:127547">
                    Log in to get a quote
                  </p>
                </div>
              </>
            )}
            {isPreQuoteCondensed && showCollapseChevron && (
              <div className="relative shrink-0 size-[16px]" data-node-id="34170:2187" data-name="Expand">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExpand1} />
              </div>
            )}
          </div>
        </>
      )}
      {isQuotesOrPreQuote && (
        <>
          <div className="border-[var(--blue-gray\/100,#e1e7ec)] border-b border-solid content-stretch flex gap-[12px] items-center overflow-clip pb-[14px] pt-[16px] px-[20px] relative shrink-0 w-full" id={isPreQuote ? "node-34160_3768" : "node-34160_3685"} data-name="Provider row">
            <div className="bg-[#003781] h-[34px] relative rounded-[2px] shrink-0 w-[4px]" id={isPreQuote ? "node-34160_3769" : "node-34160_3686"} data-name="Provider accent" />
            <div className="border-[#003781] border-[1.5px] border-dashed content-stretch flex h-[32px] items-center justify-center overflow-clip px-[8px] relative rounded-[6px] shrink-0 w-[110px]" id={isPreQuote ? "node-34160_3770" : "node-34160_3687"} data-name="Provider logo">
              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[#003781] text-[12px] tracking-[0.6px] whitespace-nowrap" id={isPreQuote ? "node-34160_3771" : "node-34160_3688"}>
                PROVIDER LOGO
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-w-px not-italic overflow-clip relative" id={isPreQuote ? "node-34160_3772" : "node-34160_3689"} data-name="Provider name">
              <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 whitespace-nowrap" id={isPreQuote ? "node-34160_3773" : "node-34160_3690"} data-name="Name line">
                <p className="font-['Inter:Bold'] relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)]" id={isPreQuote ? "node-34160_3774" : "node-34160_3691"}>
                  Allianz Travel
                </p>
                <p className="font-['Inter:Regular'] relative shrink-0 text-[12px] text-[color:var(--blue-gray\/500,#678390)]" id={isPreQuote ? "node-34160_3775" : "node-34160_3692"}>
                  (example)
                </p>
              </div>
              <p className="font-['Inter:Regular'] min-w-full relative shrink-0 text-[12px] text-[color:var(--blue-gray\/600,#4f666d)] w-[min-content]" id={isPreQuote ? "node-34160_3776" : "node-34160_3693"}>
                Travel with confidence, wherever you go.
              </p>
            </div>
            <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" id={isPreQuote ? "node-34160_3777" : "node-34160_3694"} data-name="Header actions">
              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" id={isPreQuote ? "node-34160_3778" : "node-34160_3695"}>
                Sample policy
              </p>
              {isQuotes && (
                <div className="bg-[var(--primary\/100,#daf1ff)] content-stretch flex h-[20px] items-center justify-center px-[var(--2․5,10px)] py-[var(--0․5,2px)] relative rounded-[80px] shrink-0" data-node-id="34160:3696" data-name="Status pill">
                  <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.5] not-italic relative shrink-0 text-[12px] text-[color:var(--primary\/800,#1b5079)] text-center whitespace-nowrap" data-node-id="I34160:3696;13552:81436">
                    Choose a plan
                  </p>
                </div>
              )}
              {showCollapseChevron && (
                <div className="relative shrink-0 size-[16px]" data-node-id="34164:2327" data-name="Collapse">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCollapse} />
                </div>
              )}
            </div>
          </div>
          <div className={`content-stretch flex flex-col items-start overflow-clip px-[20px] py-[14px] relative shrink-0 w-full ${isPreQuote ? "[word-break:break-word] gap-[8px] not-italic" : "gap-[12px]"}`} id={isPreQuote ? "node-34160_3781" : "node-34160_3698"} data-name="Body">
            <p className={`${String.raw`font-["Proxima_Nova:Bold"] leading-[1.5] relative shrink-0 text-[16px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap `}${isPreQuote ? "" : "[word-break:break-word] not-italic"}`} id={isPreQuote ? "node-34160_3782" : "node-34160_3699"}>
              Add travel protection?
            </p>
            {isQuotes && showYourDetails && (
              <div className="[word-break:break-word] content-start flex flex-wrap gap-[2px_6px] items-start leading-[1.5] not-italic overflow-clip relative shrink-0 text-[12px] w-full" data-node-id="34160:3700" data-name="Your details">
                <p className="font-['Inter:Regular'] relative shrink-0 text-[color:var(--blue-gray\/500,#678390)] whitespace-nowrap" data-node-id="34160:3701">
                  Your details:
                </p>
                <p className="font-['Inter:Semibold'] relative shrink-0 text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="34160:3702">
                  Elisa Denton
                </p>
                <p className="font-['Inter:Regular'] relative shrink-0 text-[color:var(--blue-gray\/600,#4f666d)] whitespace-pre" data-node-id="34160:3703">{`|  DOB Mar 3, 1986  |  Colorado  |  Trip cost $8,400`}</p>
                <p className="font-['Inter:Semibold'] relative shrink-0 text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" data-node-id="34160:3704">
                  Edit
                </p>
              </div>
            )}
            {isQuotes && (
              <>
                <div className="border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="34160:3705" data-name="Plans (single choice)">
                  <div className="bg-[var(--white,white)] content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="34160:3706" data-name="Plan row - Basic">
                    <RadioLocalInsuranceOfferCard className="relative shrink-0 size-[18px]" />
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative" data-node-id="I34160:3706;34159:3688" data-name="Plan">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="I34160:3706;34159:3689" data-name="Name line">
                        <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--blue-gray\/900,#223e47)] whitespace-nowrap" data-node-id="I34160:3706;34159:3690">
                          OneTrip Basic
                        </p>
                      </div>
                      <div className="[word-break:break-word] content-start flex flex-wrap font-['Inter:Regular'] gap-[2px_12px] items-start leading-[1.5] not-italic overflow-clip relative shrink-0 text-[12px] text-[color:var(--blue-gray\/600,#4f666d)] w-full whitespace-nowrap" data-node-id="I34160:3706;34159:3693" data-name="Highlights">
                        <p className="relative shrink-0" data-node-id="I34160:3706;34159:3694">
                          Cancellation up to $5,000
                        </p>
                        <p className="relative shrink-0" data-node-id="I34160:3706;34159:3695">
                          Medical $10,000
                        </p>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Bold'] leading-[1.5] not-italic relative shrink-0 text-[20px] text-[color:var(--blue-gray\/900,#223e47)] text-right whitespace-nowrap" data-node-id="I34160:3706;34159:3697">
                      $38
                    </p>
                  </div>
                  <PlanRowInsuranceOfferCard className="bg-[var(--primary\/50,#eff9ff)] border-[var(--blue-gray\/100,#e1e7ec)] border-solid border-t content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative shrink-0 w-full" selected />
                  <PlanRowInsuranceOfferCard className="bg-[var(--white,white)] border-[var(--blue-gray\/100,#e1e7ec)] border-solid border-t content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative shrink-0 w-full" highlight2="Medical $100,000" highlight3="Baggage $2,000" planName="OneTrip Premier" price="$118" />
                </div>
                <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[1.5] overflow-clip relative shrink-0 text-[12px] w-full whitespace-nowrap" data-node-id="34160:3746" data-name="Compare">
                  <p className="font-['Inter:Semibold'] font-semibold relative shrink-0 text-[color:var(--primary\/600,#2a79a6)]" data-node-id="34160:3747" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                    Compare coverage ▾
                  </p>
                  <p className="font-['Inter:Regular'] not-italic relative shrink-0 text-[color:var(--blue-gray\/500,#678390)]" data-node-id="34160:3748">
                    Prices may change slightly before purchase.
                  </p>
                </div>
              </>
            )}
            {isPreQuote && (
              <>
                <p className="font-['Inter:Regular'] leading-[1.43] min-w-full relative shrink-0 text-[14px] text-[color:var(--blue-gray\/600,#4f666d)] w-[min-content]" data-node-id="34160:3783">
                  Your advisor shared a travel protection offer for this trip. Get a quote to see plans and prices for your details, or decline.
                </p>
                <p className="font-['Inter:Regular'] leading-[1.5] min-w-full relative shrink-0 text-[12px] text-[color:var(--blue-gray\/500,#678390)] w-[min-content]" data-node-id="34160:3784">
                  Plans can include trip cancellation, medical and baggage cover.
                </p>
              </>
            )}
          </div>
          <div className="border-[var(--blue-gray\/100,#e1e7ec)] border-solid border-t content-stretch flex gap-[12px] items-center overflow-clip pb-[16px] pt-[12px] px-[20px] relative shrink-0 w-full" id={isPreQuote ? "node-34160_3785" : "node-34160_3749"} data-name="Decision bar">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] leading-[1.5] min-w-px not-italic relative text-[12px] text-[color:var(--blue-gray\/500,#678390)]" id={isPreQuote ? "node-34160_3786" : "node-34160_3750"}>
              {isPreQuote ? "Your decision is saved with your name and the time." : "Editing your details gets new quotes. Your decision is saved with your name and the time."}
            </p>
            <div className="border border-[var(--blue-gray\/200,#d1dae0)] border-solid content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-[var(--rounded-sm,4px)] shrink-0" id={isPreQuote ? "node-34160_3787" : "node-34160_3751"} data-name="Button - Decline">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--primary\/600,#2a79a6)] whitespace-nowrap" id={isPreQuote ? "node-I34160_3787-29_127807" : "node-I34160_3751-29_127807"}>
                <p className="leading-[1.43]">Decline</p>
              </div>
            </div>
            <div className="bg-[var(--primary\/600,#2a79a6)] content-stretch flex gap-[var(--2,8px)] items-center justify-center px-[var(--4,16px)] py-[var(--2,8px)] relative rounded-[var(--rounded-sm,4px)] shrink-0" id={isPreQuote ? "node-34160_3793" : "node-34160_3759"} data-name="Button - Primary">
              <p className="[word-break:break-word] font-['Inter:Semibold'] leading-[1.43] not-italic relative shrink-0 text-[14px] text-[color:var(--white,white)] whitespace-nowrap" id={isPreQuote ? "node-I34160_3793-27_127543" : "node-I34160_3759-27_127543"}>
                {isPreQuote ? "Get a quote" : "Continue with Prime, $72"}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function AllCardStates() {
  const states: Array<{ state: "Quotes" | "Pre-quote" | "Accepted collapsed" | "Declined collapsed" | "Pre-quote condensed" | "Purchased collapsed"; showYourDetails?: boolean; showCollapseChevron?: boolean }> = [
    { state: "Quotes" },
    { state: "Pre-quote" },
    { state: "Accepted collapsed" },
    { state: "Purchased collapsed" },
    { state: "Declined collapsed" },
    { state: "Pre-quote condensed" }
  ];
  
  return (
    <div className="bg-[var(--blue-gray\/50,#f4f7fb)] content-stretch flex flex-col gap-[32px] items-center p-[40px] relative min-h-screen">
      {states.map((props, index) => (
        <InsuranceOfferCard key={index} {...props} />
      ))}
    </div>
  );
}
