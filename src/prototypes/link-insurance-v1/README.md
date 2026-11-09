# Link Insurance v1 Prototype

Pixel-accurate visual prototype of the Link Insurance v1 feature, built from Figma specs.

## Source

- **Figma file**: h6nksbINce9t4Cg0xVFczu (READ-ONLY)
- **Spec pack**: `uploads/li-spec-traveler.tar.gz` + `uploads/li-spec-advisor.tar.gz`
- **Tokens**: See `tokens.json` and `theme.css`

## Architecture

```
link-insurance-v1/
├── LinkInsuranceV1.tsx       # Router with all screen routes
├── theme.css                  # Tailwind v4 @theme with design tokens
├── mockData.ts                # Mock plans, traveler details, responses
├── assets/                    # 208 Figma assets
├── components/
│   └── Modal.tsx              # Reusable modal wrapper
└── screens/
    ├── TravelerPreQuote.tsx
    ├── TravelerPreQuoteCondensed.tsx
    ├── TravelerQuotes.tsx
    ├── TravelerMultiProvider.tsx
    ├── TravelerAccepted.tsx
    ├── TravelerProposal.tsx
    ├── ConfirmDetailsModal.tsx
    ├── EditDetailsModal.tsx
    ├── AdvisorSetup.tsx
    ├── AdvisorPreview.tsx
    ├── AdvisorResponses.tsx
    ├── AddPolicyModal.tsx
    └── ViewPolicyModal.tsx
```

## Routes

Each Figma node is accessible via `/link-insurance-v1/screen/{node-id}`:

### Traveler Flow
- `34227-79415` - Pre-quote offer card (expanded)
- `34227-79234` - Logged-out condensed offer
- `34227-79155` - Plan selection with radio buttons
- `34227-79314` - Multi-provider with independent cards
- `34245-3118` - One plan accepted, others muted
- `34227-79275` - Proposal view
- `34227-79452` - Confirm details modal
- `34227-79473` - Edit details modal

### Advisor Flow
- `34227-78641` - Setup: provider, e-sig, trip cost settings
- `34233-2724` - Preview as traveler
- `34227-78843` - Responses table
- `34227-78999` - Add policy modal
- `34237-3169` - View policy modal

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

- **No component library**: Each screen is hand-built, no abstraction
- **No src/shared reuse**: Avoids fighting Figma structure
- **Direct Tailwind classes**: Inline with exact pixel values
- **Static state**: No real state management, just visual accuracy
- **Assets**: Loaded directly from `assets/` folder

## Iteration Log

1. **Initial build**: Core traveler and advisor screens
2. **Modal implementation**: Standalone modal screens with proper layouts
3. **Comparison setup**: Playwright script for visual verification
4. **Token refinement**: CSS @theme with exact Figma values

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
