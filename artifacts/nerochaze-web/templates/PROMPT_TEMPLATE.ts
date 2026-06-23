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
//      (on the blank line right below the comment that says "Paste new tools HERE")
//   6. Save  src/data.ts  — done. Your prompt is now live on the website.
//
// RULES:
//   • id        → lowercase, hyphens only, must be globally unique (e.g. "gpt4-cold-email-matrix")
//   • tags      → hashtag format, add as many as you like
//   • sampleCode→ use backtick template literals for multi-line prompts (already done below)
//   • instructions → numbered steps the user follows to actually use this prompt
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
  // ↑ Shown on the card and the detail page header

  category: "AI Prompt Matrices",
  // ↑ Do not change this line for prompt templates

  tags: ["#AI-Prompts", "#ADD-TAG-2", "#ADD-TAG-3"],
  // ↑ Hashtag format. Remove or add as many tags as needed.
  //   Keep #AI-Prompts as the first tag for consistency.

  type: "prompt",
  // ↑ Do not change this line for prompt templates

  instructions: [
    "Prerequisites: LIST WHICH AI MODEL(S) WORK WITH THIS PROMPT (e.g. GPT-4, Claude 3.5, Gemini Pro).",
    "DESCRIBE THE FIRST THING THE USER DOES TO PREPARE (e.g. 'Open a fresh conversation in ChatGPT').",
    "DESCRIBE THE NEXT STEP (e.g. 'Copy the sample prompt from Section B below').",
    "EXPLAIN ANY VARIABLES TO REPLACE (e.g. 'Replace [TOPIC] with your niche and [AUDIENCE] with who you are writing for').",
    "DESCRIBE WHAT TO EXPECT AS OUTPUT.",
    "OPTIONAL: ADD HOW TO ITERATE OR IMPROVE THE RESULTS.",
  ],
  // ↑ Each string in this array becomes one numbered step on the detail page.
  //   Add or remove strings as needed. Keep each step short and clear.

  sampleCode: `PASTE YOUR FULL PROMPT TEXT HERE.

Use this template literal (backtick) format to preserve line breaks exactly.

You can use [BRACKET PLACEHOLDERS] to mark where the user fills in their own values.

SECTION HEADERS LIKE THIS make long prompts easier to read.

Example output format:
[AI generates this section]
[AI generates this section]`,
  // ↑ This appears in the code block on the detail page with a Copy button.
  //   The user can copy and use this immediately — no download required.

  downloadUrl: "https://shrinkme.io/YOUR-SHRINKME-LINK",
  // ↑ Replace with your actual ShrinkMe.io redirect URL

  downloadLabel: "📥 Download Free Prompt Matrix",
  // ↑ Text shown on the download button. You can change the emoji or wording.
},
// ↑↑↑ COPY TO HERE ↑↑↑
