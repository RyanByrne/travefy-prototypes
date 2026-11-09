# Link Insurance v1 Prototype

**Built directly from Figma reference code** - not invented. All screens are verbatim copies of Figma-generated React + Tailwind markup.

## Source

- **Figma file**: h6nksbINce9t4Cg0xVFczu (READ-ONLY)
- **Spec pack**: `uploads/li-spec-traveler.tar.gz` + `uploads/li-spec-advisor.tar.gz`
- **Method**: Extracted `reference-code.tsx` from each node, replaced asset paths, changed font to Inter

## Architecture

```
link-insurance-v1/
├── LinkInsuranceV1.tsx        # Router with all screen routes
├── theme.css                   # Tailwind v4 @theme with design tokens
├── mockData.ts                 # (Not used - data is in Figma markup)
├── assets/                     # 208 Figma assets
├── screens/                    # (Old invented screens - not used)
└── screens-figma/              # ✓ ACTUAL SCREENS (Figma reference code)
    ├── 34160-3830.tsx          # Card component set
    ├── 34227-79415.tsx         # Traveler pre-quote
    ├── 34227-79234.tsx         # Condensed offer
    ├── 34227-79155.tsx         # Plan selection
    ├── 34227-79452.tsx         # Confirm details modal
    ├── 34227-79473.tsx         # Edit details modal
    ├── 34227-79314.tsx         # Multi-provider
    ├── 34245-3118.tsx          # Accepted state
    ├── 34227-79275.tsx         # Proposal view
    ├── 34227-78641.tsx         # Advisor setup
    ├── 34233-2724.tsx          # Advisor preview
    ├── 34227-78843.tsx         # Advisor responses table
    ├── 34227-78999.tsx         # Add policy modal
    ├── 34237-2862.tsx          # Provider combobox
    ├── 34237-3007.tsx          # Add new provider
    └── 34237-3169.tsx          # View policy modal
```

## Routes

Each Figma node is accessible via `/link-insurance-v1/screen/{node-id}`:

### Traveler Flow
- `34227-79415` - Pre-quote: "10 Day Euro Sights Trip", Allianz provider card
- `34227-79234` - Logged-out condensed offer
- `34227-79155` - Plan selection: OneTrip Basic $38 / Prime $72 / Premier $118
- `34227-79314` - Multi-provider: Allianz and Travel Guard cards
- `34245-3118` - One plan accepted (indigo badge), others muted
- `34227-79275` - Proposal view with insurance card
- `34227-79452` - Confirm details modal (Elisa Denton, DOB, $8,400)
- `34227-79473` - Edit details modal with form fields

### Advisor Flow
- `34227-78641` - Setup: provider selection, e-sig toggle, trip cost toggle
- `34233-2724` - Preview as traveler ("Viewing as Elisa Denton")
- `34227-78843` - Responses table: "Adventures in the Rockies" trips, Travel Protection panel
- `34227-78999` - Add policy modal: policy number, dates, provider dropdown
- `34237-2862` - Provider combobox (open state)
- `34237-3007` - Add new provider form
- `34237-3169` - View policy modal (read-only)

## Design Tokens

From `tokens.json` via `theme.css`:

- **Font**: Inter (Proxima Nova fallback)
- **Primary**: `#2a79a6` (600), `#3a9ed8` (500)
- **Text**: `#223e47` (blue-gray-900)
- **Border**: `#d1dae0` (blue-gray-200)
- **Surface**: `#f4f7fb` (blue-gray-50)
- **Radius**: 4px controls, 8px containers
- **Status badges**:
  - Accepted: indigo `#42389D` on `#E5EDFF`
  - Purchased: green `#14673F` on `#DEF7EC`
  - Declined: red `#A01414` on `#FDE7E7`
  - Deciding: grandis `#83381d` on `#ffeed5`

## Product Rules

- Mock data only (no API calls)
- Only "Purchased" reads as covered
- Accepted is indigo, never green
- No "Advisor pick" or "recommended" labels
- Copy says "v1" explicitly
- No em or en dashes in copy
- One response per traveler
- Copy verbatim from Figma

## Visual Verification

Run the comparison script:

```bash
npm run compare:link-insurance-v1
```

This renders each screen at the Figma frame size, captures a screenshot, and places it alongside the Figma reference in `docs/link-insurance-v1-compare/`.

Compare `{node}-figma.png` (source) with `{node}-build.png` (implementation).

## Frame Sizes

The Figma frames are wider than the 1400px exports:

- Traveler screens: 1728px wide
- Advisor screens: 1728px wide (except preview at 1600px)
- Modals: 490px or 561px wide

The comparison script captures at these exact sizes for accurate comparison.

## Implementation Notes

- **Figma reference code**: Each screen is a nearly-verbatim copy of Figma's generated React+Tailwind
- **Only changes**: Asset paths (`./assets/` → `/src/prototypes/.../assets/`) and font (Proxima Nova → Inter)
- **No abstractions**: Figma-generated components kept as-is (no refactoring)
- **Exact markup**: All `content-stretch`, `flex-[1_0_0]`, `size-[18px]`, etc. classes from Figma
- **Exact copy**: "10 Day Euro Sights Trip", "Adventures in the Rockies", "Elisa Denton" - all from Figma
- **Exact data**: Plan names, prices, highlights - all from Figma
- **Static state**: No click-through yet (will add on top of Figma markup)
- **Assets**: 208 files from Figma specs

## Conversion Process

### Script: `scripts/convert-figma-reference.ts`

For each of the 16 nodes:
1. Read `uploads/{nodeId}/reference-code.tsx`
2. Replace `"./assets/` → `"/src/prototypes/link-insurance-v1/assets/`
3. Replace `font-['Proxima_Nova:` → `font-['Inter:`
4. Write to `screens-figma/{nodeId}.tsx`
5. No other changes

### Why This Approach

Per user feedback, the original approach (hand-built screens with invented data) was wrong. The correct method is:
- Copy Figma reference code **verbatim**
- Only change what must compile (asset paths, font)
- Keep all layout, copy, and data from Figma
- Wire state/click-through **on top** of the Figma markup later

## Iteration Log

1. **Initial build** (WRONG): Hand-built screens with invented data
2. **Rebuild** (CORRECT): Copied Figma reference-code.tsx verbatim with only path/font changes

## Known Differences

- Font: Inter used as Proxima Nova not loaded
- Some images: Placeholder colors vs. actual images
- Shadows: Approximated from Figma effect descriptions
- Hover states: Not captured in static screenshots

## Next Steps (if approved)

1. Load Proxima Nova webfont or use closer fallback
2. Refine pixel differences from comparison screenshots
3. Add remaining modal variants (combobox open states)
4. Polish transitions and interactions
