# Link Insurance v1 - Screenshot Comparisons

Visual verification of all 16 Figma nodes built at pixel-accurate dimensions.

## Comparison Format

Each PNG shows:
- **Left side:** Figma reference export (from `uploads/{node-id}/screenshot.png`)
- **4px gray divider**
- **Right side:** Build screenshot captured at exact Figma dimensions

## Files

| Node ID | Description | Dimensions | File |
|---------|-------------|------------|------|
| 34227-79155 | Traveler itinerary: quotes shown | 1728×803 | [34227-79155.png](./34227-79155.png) |
| 34227-78641 | Advisor: Setup | 1728×1198 | [34227-78641.png](./34227-78641.png) |
| 34227-78843 | Advisor: Responses table | 1600×1204 | [34227-78843.png](./34227-78843.png) |
| 34227-78999 | Add policy modal | 561×1062 | [34227-78999.png](./34227-78999.png) |
| 34237-3169 | View policy modal | 561×972 | [34237-3169.png](./34237-3169.png) |
| 34227-79415 | Traveler: before quote | 1728×1011 | [34227-79415.png](./34227-79415.png) |
| 34227-79234 | Traveler: logged out | 1728×1211 | [34227-79234.png](./34227-79234.png) |
| 34227-79452 | Confirm details modal | 490×309 | [34227-79452.png](./34227-79452.png) |
| 34227-79473 | Edit details modal | 490×756 | [34227-79473.png](./34227-79473.png) |
| 34233-2724 | Preview as traveler modal | 1200×490 | [34233-2724.png](./34233-2724.png) |
| 34160-3830 | Insurance card component | 632×340 | [34160-3830.png](./34160-3830.png) |
| 34237-2862 | Add policy: provider list open | 561×1062 | [34237-2862.png](./34237-2862.png) |
| 34237-3007 | Add policy: + Add new provider | 561×1238 | [34237-3007.png](./34237-3007.png) |
| 34227-79314 | Traveler: multi-provider | 1728×1413 | [34227-79314.png](./34227-79314.png) |
| 34245-3118 | Traveler: one accepted | 1728×1076 | [34245-3118.png](./34245-3118.png) |
| 34227-79275 | Traveler: proposal view | 1728×1088 | [34227-79275.png](./34227-79275.png) |

## How It Works

1. **Dev server** (`npm run dev`) runs on `localhost:5173`
2. **Screen harness** at `/link-insurance/screen/{node-id}` renders each node isolated at exact dimensions
3. **Playwright** navigates to each screen, sets viewport to Figma dimensions, captures screenshot
4. **Sharp** loads Figma reference and build screenshot, normalizes heights, stitches side-by-side
5. **Output** saved to this directory

## Regenerating Comparisons

```bash
# Start dev server
npm run dev

# In another terminal, run comparison script
npx tsx scripts/screenshot-compare.ts
```

Comparisons are saved to this directory (`docs/link-insurance-compare/`).

## Known Dimension Differences

Some Figma reference screenshots were exported at different widths than the Figma frame specs:
- Several itinerary screens exported at 1400px width vs 1728px Figma frame width
- 34233-2724 exported at 1400px vs 1200px frame
- 34160-3830 exported at 674px vs 632px frame

Build screenshots use the exact Figma **frame dimensions** from the design file, which is the correct target for implementation. The comparison images will show these builds at their intended widths side-by-side with the reference exports.

## Visual Review Checklist

When reviewing comparisons, check:
- ✅ Typography (Proxima Nova weights and sizes)
- ✅ Spacing (4px scale adherence)
- ✅ Colors (primary blues, blue-gray neutrals, badge colors)
- ✅ Border radius (4px controls, 8px containers)
- ✅ Shadows (dual-layer soft shadows)
- ✅ Layout alignment and proportions
- ✅ Icon sizing and positioning
- ✅ Badge and button styling

Any mismatches found can be fixed by updating the relevant screen component in `src/prototypes/link-insurance/screens/` and regenerating comparisons.
