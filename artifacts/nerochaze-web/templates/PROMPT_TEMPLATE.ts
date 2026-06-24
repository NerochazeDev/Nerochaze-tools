// =====================================================================
// NEROCHAZE CREATIVE LABS — AI PROMPT MATRIX TEMPLATE
// =====================================================================
//
// HOW TO USE THIS FILE:
//   1. Make a copy of this file and open it in your editor
//   2. Replace every ALL_CAPS placeholder with your real content
//   3. Copy the object between the ↓↓↓ markers below
//   4. Open:  src/data.ts
//   5. Paste the object at the TOP of the TOOLS array
//      (on the blank line right below the comment "Paste new tools HERE")
//   6. Save  src/data.ts  — your prompt is live on the website immediately
//
// ─────────────────────────────────────────────────────────────────────
// ADSTERRA AD CODES (already live — reference only, do not edit here)
// ─────────────────────────────────────────────────────────────────────
//
//  ┌─ SOCIAL BAR (all pages, floating) ─────────────────────────────────┐
//  │  Location : index.html — right above </body>                        │
//  │  Code     :                                                          │
//  │  <script src="https://pl29871569.effectivecpmnetwork.com/f5/9a/     │
//  │  4d/f59a4d1f72220da9b6110e0bbca280f1.js"></script>                  │
//  └─────────────────────────────────────────────────────────────────────┘
//
//  ┌─ BANNER AD 728×90 (detail page, 4 placements) ─────────────────────┐
//  │  Location : DetailPage.tsx — <AdBanner /> component (auto-injected) │
//  │  Placements: above steps · mid steps · after steps · below download │
//  │                                                                      │
//  │  <script>                                                            │
//  │    atOptions = {                                                     │
//  │      'key'    : '62f011d86f9c397482c478d82c85d03b',                 │
//  │      'format' : 'iframe',                                            │
//  │      'height' : 90,                                                  │
//  │      'width'  : 728,                                                 │
//  │      'params' : {}                                                   │
//  │    };                                                                │
//  │  </script>                                                           │
//  │  <script src="https://www.highperformanceformat.com/                 │
//  │  62f011d86f9c397482c478d82c85d03b/invoke.js"></script>              │
//  └─────────────────────────────────────────────────────────────────────┘
//
// HOW ADS APPEAR ON THE DETAIL PAGE (automatic — nothing to configure):
//
//   [ BANNER AD — TOP ]       ← above Step 1
//   Step 1
//   Step 2
//   Step 3  ← end of first half
//   [ BANNER AD — MID ]       ← between step halves
//   Step 4  ← start of second half
//   Step 5
//   Step 6  ← end of last step
//   [ BANNER AD — AFTER ]     ← after all steps
//   (Section B — Free Sample code block)
//   (Section C — Download button)
//   [ BANNER AD — BOTTOM ]    ← below download button
//   [ SOCIAL BAR ]            ← sticky floating bar (all pages)
//
// ─────────────────────────────────────────────────────────────────────
//
// RULES:
//   • id         → lowercase, hyphens only, must be globally unique
//   • tags       → hashtag format, keep #AI-Prompts as first tag
//   • sampleCode → use backtick template literals for multi-line prompts
//   • instructions → each string = one numbered step on the page
//
// =====================================================================

// ↓↓↓ COPY FROM HERE ↓↓↓
{
  id: "YOUR-UNIQUE-SLUG-HERE",
  // ↑ e.g. "gpt4-cold-email-matrix" — lowercase, hyphens only, must be unique

  title: "YOUR FULL PROMPT MATRIX TITLE",
  // ↑ e.g. "Cold Email Rewriter — GPT-4 Matrix"

  description:
    "ONE OR TWO SENTENCES describing what this prompt does and who it is built for.",

  category: "AI Prompt Matrices",
  // ↑ Do not change this line for prompt templates

  tags: ["#AI-Prompts", "#ADD-TAG-2", "#ADD-TAG-3"],
  // ↑ Always keep #AI-Prompts first. Add or remove tags as needed.

  type: "prompt",
  // ↑ Do not change this line for prompt templates

  instructions: [
    // ── FIRST HALF (these steps show ABOVE the mid-steps ad) ──────────
    "Prerequisites: LIST WHICH AI MODEL(S) WORK WITH THIS PROMPT.",
    "DESCRIBE THE FIRST THING THE USER DOES TO PREPARE.",
    "DESCRIBE THE NEXT STEP.",
    // ── SECOND HALF (these steps show BELOW the mid-steps ad) ─────────
    "EXPLAIN ANY VARIABLES THE USER NEEDS TO REPLACE.",
    "DESCRIBE WHAT TO EXPECT AS OUTPUT.",
    "OPTIONAL: HOW TO ITERATE OR IMPROVE RESULTS.",
  ],
  // ↑ Each string becomes one numbered step on the detail page.
  //   The list is split in half — a banner ad appears between the two halves.

  sampleCode: `PASTE YOUR FULL PROMPT TEXT HERE.

Use this template literal (backtick) format to preserve line breaks exactly.

You can use [BRACKET PLACEHOLDERS] to mark where the user fills in their own values.

SECTION HEADERS LIKE THIS make long prompts easier to read.

Example output format:
[AI generates this section]
[AI generates this section]`,
  // ↑ Appears in the code block on the detail page with a Copy button.

  downloadUrl: "https://shrinkme.io/YOUR-SHRINKME-LINK",
  // ↑ Replace with your actual ShrinkMe.io redirect URL

  downloadLabel: "📥 Download Free Prompt Matrix",
  // ↑ Text shown on the download button.
},
// ↑↑↑ COPY TO HERE ↑↑↑
