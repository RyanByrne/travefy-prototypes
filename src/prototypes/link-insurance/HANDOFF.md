# Link Insurance v1 Prototype - Handoff

## FIDELITY REBUILD IN PROGRESS

**Status:** Node-by-node pixel-perfect rebuild from Figma reference code  
**Figma Reference:** h6nksbINce9t4Cg0xVFczu, page "Quote & Pay" (34135:7088)

### Rebuild Checklist (16 nodes)

**High-Priority Nodes (do first):**
- [x] 34227:79155 - Traveler itinerary: quotes shown (details on profile) - 1728x803px ✅ `screens/Node34227_79155.tsx`
- [ ] 34227:78641 - Advisor: Setup (provider, Preview, e-sig, trip cost) - 1728x1198px
- [ ] 34227:78843 - Advisor: Traveler responses table - 1600x1204px
- [ ] 34227:78999 - Modal: Add policy for Jack Hawthorne - 561x1062px
- [ ] 34237:3169 - Modal: View policy for Lucy Nelson - 561x972px

**Remaining Nodes (do after high-priority):**
- [ ] 34227:79415 - Traveler: before quote (pre-quote offer card in itinerary) - 1728x1011px
- [ ] 34227:79234 - Traveler: Logged out (CTA only) - 1728x1211px
- [ ] 34227:79314 - Traveler: Multi-provider before accept - 1728x1413px
- [ ] 34245:3118 - Traveler: One accepted (others locked/muted) - 1728x1076px
- [ ] 34233:2724 - Modal: Preview as traveler - 490x309px
- [ ] 34237:2862 - Modal: Add policy, provider list open - 561x1062px
- [ ] 34237:3007 - Modal: Add policy, + Add new provider - 561x1062px
- [ ] 34227:79452 - Modal: Confirm your details - 490x756px
- [ ] 34227:79473 - Modal: Edit your details - 490x756px
- [ ] 34227:79275 - Traveler: Proposal view - 1728x1088px
- [ ] 34160:3830 - Offer card component set (all 7 states) - ✅ DONE (InsuranceCardFigma)

**Comparison Screenshots:**  
Location: `docs/link-insurance-compare/`  
Format: `{node-id}-comparison.png` (Figma left, build right)

### Completed Setup:
- ✅ Tailwind config updated with exact Figma tokens (Proxima Nova, primary #2a79a6, blue-gray neutrals, 4px spacing scale)
- ✅ All 16 Figma nodes' assets copied to `public/figma-assets/`
- ✅ Design tokens documented from `tokens.json`
- ✅ Badge colors: Accepted #E5EDFF/#42389D, Purchased #DEF7EC/#14673F
- ✅ InsuranceCardFigma component (34160:3830) with all 7 states

### Key Visual Specifications:
- Font: Proxima Nova (weights 400/500/600/700)
- Spacing: 4px scale (1=4px, 2=8px, 3=12px, 4=16px, 5=20px, 6=24px, 8=32px)
- Border radius: 4px controls, 8px containers
- Shadows: Dual-layer soft shadows (md: 0 2px 4px -2px + 0 4px 6px -1px, lg: 0 4px 6px + 0 10px 15px -3px)
- Provider logo: Dashed border placeholder
- Selected plan: primary/50-100 fill with 3px blue left accent
- Chevrons: Use exact SVGs from assets (not Lucide icons)
- Typography: Exact line-heights from tokens (1.5 base, 1.43 sm, 1.25 tight)

# Link Insurance v1 Prototype - Handoff

## What's Built

### Routes
- `/link-insurance/traveler` - Traveler itinerary view with insurance offer cards
- `/link-insurance/advisor` - Advisor trip page with Settings and Responses tabs
- `/link-insurance/states` - All insurance card states side by side for review

### Traveler Side (Itinerary Page)
- ✅ Insurance offer card component with 7 states:
  - Pre-quote
  - Pre-quote condensed (with collapse chevron)
  - Quotes shown (radio selection of plans)
  - Accepted collapsed
  - Declined collapsed
  - Purchased collapsed
  - Logged out (CTA prompts login)
- ✅ Multiple providers (Allianz, Medjet)
- ✅ One accepted rule: when one offer is accepted, others are locked with explanatory text
- ✅ Collapse/expand with chevron for condensed and collapsed states
- ✅ Get a quote flow with prefilled traveler details and Edit details link
- ✅ Quote comparison with radio selection
- ✅ Accept/decline flow with "Change decision" link
- ✅ Realistic itinerary layout with hero image, advisor card, and content section
- ✅ Traveler switcher dropdown (mocked)
- ⚠️ Proposal view with Approve Proposal (not built - marked as pending design)

### Advisor Side (Trip Page)
- ✅ Settings tab:
  - Provider combobox (dropdown with search)
  - Preview button (UI only, opens preview in modal/overlay not implemented)
  - E-signature toggle
  - Trip cost input
  - Helper text for "+ Add new" provider
- ✅ Responses tab:
  - Four groups: Purchased (1), Accepted (2), Declined (3), No decision (3)
  - Columns: Traveler, Reason or history, Date, Status, Action
  - Status badges: Purchased (green), Accepted (indigo), Declined (red), Still deciding (yellow), No decision (gray)
  - Add policy button per Accepted row (primary for "advisor buys", outline for link-out fallback)
  - View policy button on Purchased rows (read-only, auto-filled)
  - Summary count at top
- ✅ Add policy modal:
  - Title names the traveler
  - Shows accepted quote summary with regeneration note
  - Provider combobox with "+ Add new" at bottom (separated)
  - "+ Add new" reveals New provider name and Provider phone/website fields
  - Policy fields: Plan name, Policy number, Coverage start/end, Premium paid, Purchase date, Assistance phone (optional), Policy document (optional with Upload PDF button)
  - Travelers covered (read-only, pre-filled)
  - Explanatory notes about who buys, one policy per traveler
- ✅ View policy modal:
  - Read-only view
  - Shows integration source and pull-in date
  - Open PDF button
  - All policy fields displayed

### Shared Components (New)
- ✅ Combobox with search and separator support
- ✅ RadioGroup and RadioOption
- ✅ Indigo color tokens added to theme

### Data & Mock State
- ✅ Mock providers (Allianz, Medjet, Travel Guard, BHTP, Seven Corners)
- ✅ Mock plans with prices, coverage limits, and advisor pick badge
- ✅ Mock traveler responses (9 travelers across all statuses)
- ✅ All interactions are stateful and respond to user actions

## How to Run

```bash
npm install
npm run dev
```

Then visit:
- http://localhost:5173/link-insurance/traveler
- http://localhost:5173/link-insurance/advisor
- http://localhost:5173/link-insurance/states

Build and lint:
```bash
npm run build
npm run lint
```

## What to Review

1. **Visual accuracy to Figma**: Compare spacing, typography, colors, and copy against Figma file h6nksbINce9t4Cg0xVFczu, page "Quote & Pay" (34135:7088), sections "Advisor flow" (34227:78638) and "Traveler flow" (34227:79060)
2. **Card states**: Visit `/states` to see all 8 insurance card states side by side
3. **Traveler flow**: Test Get a quote → select plan → Continue → Accept → Change decision
4. **Multiple providers**: Test that accepting one locks the others with the correct message
5. **Advisor Responses**: Check table grouping, badge colors (Purchased=green, Accepted=indigo), and per-row actions
6. **Add policy modal**: Test Provider combobox and "+ Add new" flow
7. **Copy**: No em dashes, no en dashes, "v1" not "V0", "Travel insurance options for this trip" heading

## Defaults & Open Questions (Pending Ryan's OK)

### Defaults Chosen
1. ✅ Heading says "Travel insurance options for this trip" instead of "Your advisor shared an offer"
2. ✅ Accepted price and time stay in history after Change decision
3. ✅ If price differs at purchase, show both with a neutral note (not implemented yet, noted in modal)
4. ✅ Who buys stays as in Figma: advisor chooses, per-row Add policy
5. ✅ Allianz purchases come back by mocked API (Lucy Nelson example)
6. ✅ One traveler per policy (field is read-only, pre-filled)
7. ✅ Add policy is advisor-only (not editable by other roles in this prototype)
8. ✅ Policy document is optional

### Open Questions (Flagged)
1. ⚠️ **Still deciding blocks approval?** - Not designed, not built. Figma has no proposal approval flow for insurance v1.
2. ⚠️ **Proposal approval and CC Auth line item** - Not designed in Figma, not built.
3. ⚠️ **Link-out purchase timing** - How fast does Allianz send policy back? Until then, row stays Accepted with Add policy fallback. (Tom Rivera example)
4. ⚠️ **BHTP and others** - No policy pull-in, always manual entry.
5. ⚠️ **Who can add policy** - Designed as trip's advisor. Confirm whether agency admins can too.
6. ⚠️ **Policy edit history** - Is a manually added policy editable later? Are edits kept in history?
7. ⚠️ **Family plans** - Can one policy cover several travelers? v1 shows one traveler per policy.
8. ⚠️ **Policy document required?** - It's optional as designed. Confirm if this is correct for marking Purchased.
9. ⚠️ **+ Add new provider scope** - Does it save for the whole agency or only the advisor? Assumed advisor-only.
10. ⚠️ **"Advisor pick" badge** - Figma shows this on OneTrip Prime. Earlier direction was provider options, not advisor advice. Keep or remove?
11. ⚠️ **Preview as traveler** - Settings has a Preview button (Figma 34238:2815 → 34233:2724). This opens a modal/overlay showing the traveler itinerary view. Not fully implemented (button is there, modal/overlay is not).

### Figma Ambiguities
1. Modal sizes and exact padding not specified - used consistent Modal component from shared library
2. Accepted quote summary layout in Add policy modal - interpreted from note text
3. Preview button behavior - assumed modal/overlay, not new tab/window
4. Badge exact shades - used new indigo tokens that match visual appearance in Figma screenshots

## Tech Notes

- Built with Vite + React 19 + TypeScript + Tailwind 4
- Uses existing PrototypeShell layout (not used here due to full-bleed nav)
- Routes registered in App.tsx
- Listed in PrototypeIndex.tsx with status "draft"
- All state is local (no backend, no real APIs)
- Indigo badge color added to design tokens for "Accepted" state
- New shared components: Combobox, RadioGroup/RadioOption

## Deleted Prototypes (Separate Commit)

As requested, these obsolete prototypes were deleted entirely:
- "Trips dashboard" (`/trips`)
- "Email Marketing" (`/email-marketing`)
- "Example Prototype" (`/example-prototype`)

Folders, routes, index entries, and unused assets removed. Shared AppNav component moved to src/shared/components if it wasn't already there.

## Not Implemented (Out of Scope for v1)

- E-signature step (toggle exists, flow not built)
- Proposal approval flow (no design in Figma)
- CC Auth line item (no design in Figma)
- PDF upload (button present, no file handling)
- Policy editing after save
- Real provider APIs or integrations
- Preview as traveler modal/overlay (button present, not wired)
- Edit details flow from Get a quote (link present, not wired)
- Compare coverage modal (link present, not wired)
