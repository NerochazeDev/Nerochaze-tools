// =====================================================================
// NEROCHAZE CREATIVE LABS — AUTOMATION BOT SCRIPT TEMPLATE
// =====================================================================
//
// HOW TO USE THIS FILE:
//   1. Make a copy of this file and open it in your editor
//   2. Replace every ALL_CAPS placeholder with your real content
//   3. Copy the object between the ↓↓↓ markers below
//   4. Open:  src/data.ts
//   5. Paste the object at the TOP of the TOOLS array
//      (on the blank line right below the comment "Paste new tools HERE")
//   6. Save  src/data.ts  — your script is live on the website immediately
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
//   Step 1  install libraries
//   Step 2  create API token
//   Step 3  configure settings   ← end of first half
//   [ BANNER AD — MID ]       ← between step halves
//   Step 4  download script      ← start of second half
//   Step 5  set credentials
//   Step 6  run the bot          ← end of last step
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
//   • tags       → always keep #Python-Scripts as the first tag
//   • sampleCode → paste your Python code inside the backtick block
//   • instructions → each string = one numbered step on the page
//
// =====================================================================

// ↓↓↓ COPY FROM HERE ↓↓↓
{
  id: "YOUR-UNIQUE-SLUG-HERE",
  // ↑ e.g. "telegram-dm-bot" — lowercase, hyphens only, must be unique

  title: "YOUR FULL SCRIPT TITLE",
  // ↑ e.g. "Telegram Auto-DM Bot"

  description:
    "ONE OR TWO SENTENCES describing what this script does, what platform it targets, and the key feature it automates.",

  category: "Automation Bot Scripts",
  // ↑ Do not change this line for script templates

  tags: ["#Python-Scripts", "#ADD-PLATFORM-TAG", "#ADD-FEATURE-TAG"],
  // ↑ Always keep #Python-Scripts first.
  //   e.g. ["#Python-Scripts", "#Telegram", "#Automation", "#Bot"]

  type: "script",
  // ↑ Do not change this line for script templates

  instructions: [
    // ── FIRST HALF (these steps show ABOVE the mid-steps ad) ──────────
    "Prerequisites: Python VERSION OR HIGHER — download from python.org if not installed.",
    "Open a terminal (Command Prompt on Windows, Terminal on Mac/Linux).",
    "Install required libraries: pip install LIBRARY-1 LIBRARY-2",
    "DESCRIBE HOW TO GET API KEYS OR TOKENS.",
    // ── SECOND HALF (these steps show BELOW the mid-steps ad) ─────────
    "Download the full script using the button in Section C below.",
    "Open the script file and replace YOUR_TOKEN / YOUR_KEY with your actual credentials.",
    "DESCRIBE ANY CONFIG VALUES TO CUSTOMIZE.",
    "Save the file and run it: python YOUR_SCRIPT_NAME.py",
    "DESCRIBE THE EXPECTED OUTPUT OR FIRST RUN BEHAVIOR.",
  ],
  // ↑ Each string becomes one numbered step on the detail page.
  //   The list is split in half — a banner ad appears between the two halves.

  sampleCode: `# PASTE YOUR PYTHON SCRIPT SAMPLE HERE
# This section is shown as a free sample with a Copy button.
# The user can run this immediately — the download button (Section C)
# links to the full production-ready version with all features.

import YOUR_LIBRARY

TOKEN = "YOUR_BOT_TOKEN"  # Replace before running

def main():
    pass

if __name__ == "__main__":
    main()`,
  // ↑ Keep this as a clean, readable sample — not the full script.

  downloadUrl: "https://shrinkme.io/YOUR-SHRINKME-LINK",
  // ↑ Replace with your actual ShrinkMe.io redirect URL

  downloadLabel: "📥 Download Free Automation Script (.py)",
  // ↑ Text shown on the download button.
},
// ↑↑↑ COPY TO HERE ↑↑↑
