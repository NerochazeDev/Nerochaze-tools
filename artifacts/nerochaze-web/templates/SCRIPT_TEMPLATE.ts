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
//      (on the blank line right below the comment that says "Paste new tools HERE")
//   6. Save  src/data.ts  — done. Your script is now live on the website.
//
// RULES:
//   • id        → lowercase, hyphens only, must be globally unique (e.g. "telegram-dm-bot")
//   • tags      → hashtag format, always keep #Python-Scripts as the first tag
//   • sampleCode→ paste your Python code inside the backtick block below
//   • instructions → numbered setup steps, from installation to first run
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
  // ↑ Shown on the card and the detail page header

  category: "Automation Bot Scripts",
  // ↑ Do not change this line for script templates

  tags: ["#Python-Scripts", "#ADD-PLATFORM-TAG", "#ADD-FEATURE-TAG"],
  // ↑ Always keep #Python-Scripts first, then add platform tags
  //   e.g. ["#Python-Scripts", "#Telegram", "#Automation", "#Bot"]

  type: "script",
  // ↑ Do not change this line for script templates

  instructions: [
    "Prerequisites: Python VERSION OR HIGHER installed — download from python.org if not installed.",
    "Open a terminal (Command Prompt on Windows, Terminal on Mac/Linux).",
    "Install required libraries: pip install LIBRARY-1 LIBRARY-2",
    "DESCRIBE HOW TO GET API KEYS OR TOKENS (e.g. create a bot, copy the token, etc.).",
    "DESCRIBE ANY PERMISSIONS OR SETTINGS TO ENABLE.",
    "Download the full script using the button in Section C below.",
    "Open the script file and replace YOUR_TOKEN / YOUR_KEY with your actual credentials.",
    "DESCRIBE ANY CONFIG VALUES TO CUSTOMIZE (e.g. BANNED_WORDS list, message limits).",
    "Save the file and run it: python YOUR_SCRIPT_NAME.py",
    "DESCRIBE THE EXPECTED OUTPUT OR FIRST RUN BEHAVIOR.",
    "OPTIONAL: Add any important limits or rate-limit warnings the user should know.",
  ],
  // ↑ Each string becomes one numbered step on the detail page.
  //   Add or remove steps as needed.

  sampleCode: `# PASTE YOUR PYTHON SCRIPT HERE
# This section is shown as a free sample with a Copy button.
# The user can run this immediately — the download button (Section C)
# links to the full production-ready version with all features.

# Example structure:
import YOUR_LIBRARY

TOKEN = "YOUR_BOT_TOKEN"  # Replace before running

# Main logic here
def main():
    pass

if __name__ == "__main__":
    main()`,
  // ↑ Keep this as a clean, readable sample — not the full script.
  //   The full version goes behind the ShrinkMe link.

  downloadUrl: "https://shrinkme.io/YOUR-SHRINKME-LINK",
  // ↑ Replace with your actual ShrinkMe.io redirect URL

  downloadLabel: "📥 Download Free Automation Script (.py)",
  // ↑ Text shown on the download button. You can change the emoji or wording.
},
// ↑↑↑ COPY TO HERE ↑↑↑
