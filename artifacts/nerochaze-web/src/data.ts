// ============================================================
// NEROCHAZE CREATIVE LABS — CONTENT DATA FILE
// ============================================================
//
// HOW TO ADD A NEW AI PROMPT MATRIX:
//   1. Open  templates/PROMPT_TEMPLATE.ts
//   2. Copy the object between the ↓↓↓ COPY FROM HERE ↓↓↓ markers
//   3. Fill in every ALL_CAPS field with your real content
//   4. Paste the completed object right after the comment block below:
//
//        ════════════════════════════════════════════════
//        ↓↓↓  PASTE YOUR FILLED PROMPT TEMPLATE HERE  ↓↓↓
//        ════════════════════════════════════════════════
//
// HOW TO ADD A NEW BOT SCRIPT:
//   1. Open  templates/SCRIPT_TEMPLATE.ts
//   2. Copy the object between the ↓↓↓ COPY FROM HERE ↓↓↓ markers
//   3. Fill in every ALL_CAPS field with your real content
//   4. Paste the completed object right after the comment block below:
//
//        ════════════════════════════════════════════════
//        ↓↓↓  PASTE YOUR FILLED SCRIPT TEMPLATE HERE  ↓↓↓
//        ════════════════════════════════════════════════
//
//   5. Save the file — the new tool appears on the website immediately.
//
//   RULES:
//   • New tools go at the TOP of the array (they appear first on site).
//   • Each tool's  id  must be unique — use lowercase + hyphens only.
//   • Don't delete or change the existing tools — just add above them.
//
// ============================================================

export interface Tool {
  id: string;
  title: string;
  description: string;
  category: "AI Prompt Matrices" | "Automation Bot Scripts";
  tags: string[];
  type: "prompt" | "script";
  instructions: string[];
  sampleCode: string;
  downloadUrl: string;
  downloadLabel: string;
}

export const TOOLS: Tool[] = [

  // ════════════════════════════════════════════════════════════════
  // ↓↓↓  PASTE YOUR FILLED PROMPT TEMPLATE HERE  (AI Prompts)  ↓↓↓
  // ════════════════════════════════════════════════════════════════

  // ════════════════════════════════════════════════════════════════
  // ↓↓↓  PASTE YOUR FILLED SCRIPT TEMPLATE HERE  (Bot Scripts)  ↓↓↓
  // ════════════════════════════════════════════════════════════════

  // ─── Existing tools below — do not remove ───────────────────────
  {
    id: "discord-asset-sizer",
    title: "Automated Discord Asset-Sizer Bot",
    description:
      "Auto-resizes any image uploaded to Discord to perfect platform specs — banners, avatars, emojis, and stickers — using a single command.",
    category: "Automation Bot Scripts",
    tags: ["#Python-Scripts", "#Discord", "#Automation", "#Bot", "#Design", "#Assets"],
    type: "script",
    instructions: [
      "Prerequisites: Python 3.9 or higher — download from python.org if not installed.",
      "Open a terminal (Command Prompt on Windows, Terminal on Mac/Linux).",
      "Install dependencies: pip install discord.py Pillow",
      "Go to discord.com/developers/applications → click New Application → name it.",
      "Click the Bot tab in the sidebar → click Reset Token → copy the token (keep it secret).",
      "Scroll down and enable Message Content Intent under Privileged Gateway Intents.",
      "Click OAuth2 → URL Generator → check 'bot' scope → check READ_MESSAGES, SEND_MESSAGES, ATTACH_FILES → open the generated URL to invite the bot to your server.",
      "Download the full script using the button below.",
      "Open the script file and replace YOUR_BOT_TOKEN with your actual token.",
      "Save the file and run it: python asset_sizer_bot.py",
      "In Discord, upload any image and type: !resize banner (or avatar, emoji, sticker, splash)",
      "The bot replies with the correctly resized image as an attachment instantly.",
    ],
    sampleCode: `import discord
  from discord.ext import commands
  from PIL import Image
  import io

  TOKEN = "YOUR_BOT_TOKEN"

  # Discord official asset size specifications
  SIZES = {
    "banner":  (960, 540),    # Server banner
    "avatar":  (256, 256),    # Profile picture / server icon
    "emoji":   (128, 128),    # Custom emoji
    "sticker": (320, 320),    # Server sticker
    "splash":  (1920, 1080),  # Invite splash screen
  }

  intents = discord.Intents.default()
  intents.message_content = True
  bot = commands.Bot(command_prefix="!", intents=intents)

  @bot.event
  async def on_ready():
    print(f"[+] Asset-Sizer Bot online as {bot.user}")

  @bot.command()
  async def resize(ctx, asset_type: str = "avatar"):
    """Usage: !resize [banner/avatar/emoji/sticker/splash]"""
    if not ctx.message.attachments:
        await ctx.send("Attach an image. Usage: !resize [banner/avatar/emoji/sticker]")
        return

    asset_type = asset_type.lower()
    if asset_type not in SIZES:
        options = ", ".join(SIZES.keys())
        await ctx.send(f"Unknown type. Choose from: {options}")
        return

    attachment = ctx.message.attachments[0]
    img_bytes = await attachment.read()
    img = Image.open(io.BytesIO(img_bytes)).convert("RGBA")

    target_size = SIZES[asset_type]
    resized = img.resize(target_size, Image.LANCZOS)

    output = io.BytesIO()
    resized.save(output, format="PNG")
    output.seek(0)

    w, h = target_size
    await ctx.send(
        f"Resized to **{asset_type}** spec ({w}x{h}px)",
        file=discord.File(output, filename=f"{asset_type}_resized.png")
    )

  bot.run(TOKEN)`,
    downloadUrl: "https://shrinkme.io/placeholder-discord-asset-sizer",
    downloadLabel: "📥 Download Free Automation Script (.py)",
  },
  
  {
    id: "viral-hook-generator",
    title: "Viral Hook Generator — 20 Formulas",
    description:
      "Generate 20 ranked, platform-specific scroll-stopping opening lines for any niche using 5 battle-tested psychological frameworks.",
    category: "AI Prompt Matrices",
    tags: ["#AI-Prompts", "#Hooks", "#Copywriting", "#Viral", "#Shorts", "#Instagram"],
    type: "prompt",
    instructions: [
      "Prerequisites: Any major AI model (ChatGPT-4, Claude 3.5, or Gemini Pro).",
      "Identify your content topic — be specific (e.g. 'how to use ChatGPT for cold email', not just 'AI').",
      "Select your target platform: YouTube Shorts, Instagram Reels, TikTok, X (Twitter), or LinkedIn.",
      "Define your target audience in one sentence (e.g. 'broke college students who want side income').",
      "Open your AI model in a fresh conversation.",
      "Copy the prompt from the sample box below and paste it in.",
      "Replace [TOPIC], [PLATFORM], and [AUDIENCE] with your specifics.",
      "Run the prompt — the AI outputs 20 hooks ranked by psychological impact score.",
      "Pick the top 3 hooks (ranked #1, #2, #3).",
      "Use Hook #1 on your first post. Use Hook #2 the following day.",
      "After 48 hours compare views and 3-second retention rate — the hook with higher retention is your winning formula.",
      "Reuse that formula structure for the next 10 posts, only swapping the topic.",
    ],
    sampleCode: `You are a world-class short-form content hook writer.

Topic: [TOPIC]
Platform: [PLATFORM]
Target Audience: [AUDIENCE]

Generate exactly 20 scroll-stopping hooks using these 5 formulas (4 per formula):

FORMULA 1 — FEAR + SPECIFICITY:
"You're [losing/missing/wasting] [specific measurable thing] every [time unit]"

FORMULA 2 — COUNTER-INTUITIVE CLAIM:
"[Common widely-held belief] is actually [wrong/making you worse/costing you money]."

FORMULA 3 — STORY OPEN (mid-action):
"[Character] was [doing ordinary thing] when [unexpected thing happened]."

FORMULA 4 — NUMBER-LED CREDIBILITY:
"I [tested/analyzed/spent] [specific number] [things/hours/dollars]. Only [small number] [result]."

FORMULA 5 — DIRECT SELF-QUALIFIER:
"If you still [outdated action], you're [losing specific outcome] every [time period]."

OUTPUT FORMAT:
For each hook:
Hook #N [Formula Type]: [Hook text]
Why it works: [One sentence psychological explanation]
Estimated scroll-stop rate: [High / Medium / Very High]`,
    downloadUrl: "https://shrinkme.io/placeholder-hook-generator",
    downloadLabel: "📥 Download Free Prompt Matrix",
  },


];

export const ALL_TAGS = Array.from(
  new Set(TOOLS.flatMap((t) => t.tags))
).sort();
