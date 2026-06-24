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
    id: "youtube-algorithm-clone-engine",
    title: "YouTube Algorithm Clone Engine — Short-Form Hijack Matrix",
    description:
      "Deeply analyze a viral short-form video via its link using Gemini's multimodal capabilities to extract its visual/textual blueprint and clone its exact pacing for a new topic.",
    category: "AI Prompt Matrices",
    tags: ["#AI-Prompts", "#YouTube-Shorts", "#Gemini", "#Viral-Growth", "#Scriptwriting", "#Video-Production"],
    type: "prompt",
    instructions: [
      "Prerequisites: Must be run on Gemini AI (Gemini Pro or Gemini Advanced) due to its native multimodal ability to watch and analyze video links.",
      "Scroll through YouTube Shorts, TikTok, or Reels to find a viral video with a pacing, structural flow, or editing style you want to replicate. Copy its link.",
      "Open a completely fresh, clean chat session in Gemini AI to avoid old conversational context blurring the prompt's strict memory constraints.",
      "Copy the preview prompt from the sample box below, paste it raw into the clean Gemini chat window, and hit send.",
      "Wait for Gemini to respond with the activation phrase: 'Script Replicator System Active. Please provide the viral YouTube link you want me to visually and textually deconstruct.'",
      "Paste your copied viral YouTube Short URL into the chat and press send.",
      "Allow Gemini a moment to watch the clip, process the visual framing edits, calculate the words-per-second velocity, and map out the timestamped narrative hooks.",
      "Review the generated 'Narrative Skeleton' and the 5 custom-tailored topic concepts built specifically to fit that exact visual layout and speed profile.",
      "Select your preferred concept number. If you want to pivot the concept into a different niche, tell the AI here (e.g., 'Give me number 3, but swap the topic to productivity tools').",
      "Reply to Gemini with your chosen number/modifications to trigger Phase 4.",
      "Copy the final generated script marked [PRODUCTION-READY SCRIPT FOR ULTIMATE BLUEPRINT] into your teleprompter or phone notes.",
      "Practice your vocal delivery: punch the words formatted in ALL CAPS with extra volume/energy, and pause strictly at the ellipses (...) to let the visuals breathe.",
      "During video editing, cut the final audio track instantly with zero dead air or trailing breaths to ensure the final line loops seamlessly back into the video's opening hook.",
    ],
    sampleCode: `You are a premier Multimodal Short-Form Director and YouTube Algorithmic Growth Specialist. Your job is to deeply analyze a high-performing viral YouTube Short via its link—processing both its spoken words AND its frame-by-frame visual action—to extract its exact blueprint and replicate its pacing for a new topic.

DO NOT generate topics or scripts yet. When this prompt is initialized, simply reply with exactly: "Script Replicator System Active. Please provide the viral YouTube link you want me to visually and textually deconstruct."

---

## Step 1: Multimodal Deconstruction & Character Analysis
Once the link is provided, you must watch the video, break down the description, and output a detailed analysis containing:
1. Target Topic & Description... [PROMPT TRUNCATED - CLICK THE DOWNLOAD LINK BELOW FOR THE FULL 3-STEP MASTER PROMPT ENGINE]`,
    downloadUrl: "https://docs.google.com/document/d/1-yr8qSGGad8a9vxDWu_tGMpTgm56NQ-tWJwjELoWX6s/edit?usp=drivesdk",
    downloadLabel: "📥 Download Full YouTube Algorithm Clone Engine Matrix",
  },
{
    id: "shorts-retention-blueprint-engine",
    title: "The Shorts Retention Blueprint Engine",
    description:
      "Transform raw scripts into high-retention, frame-by-frame production blueprints. Uses Gemini's video understanding to map text styling, camera motion vector codes, and sound design cues directly from viral references.",
    category: "AI Prompt Matrices",
    tags: ["#YouTube-Shorts", "#Retention-Editing", "#Gemini-AI", "#Video-Production", "#Faceless-Channels", "#AI-Cinematography"],
    type: "prompt",
    instructions: [
      "Prerequisites: Run this on Gemini AI (Pro or Advanced) so it can use its native multimodal video processing to watch live YouTube links.",
      "Find a viral video in your niche with fast pacing, intense visual cuts, or a general style you want to mimic, and copy its URL.",
      "Get your rough text script ready for your upcoming video. It doesn’t need to be perfectly timed or formatted yet.",
      "Open a completely fresh, blank chat session in Gemini to prevent old conversational context from breaking the strict table formatting rules.",
      "Copy the preview prompt from the sample box below, paste it raw into your fresh Gemini chat window, and press send.",
      "Wait for Gemini to respond with the exact system activation trigger: 'System Initialized. Master Engine Active. Please send your text script and the YouTube reference link.'",
      "Paste both your raw script text and the copied viral YouTube Short URL together into the chat window and hit send.",
      "Give Gemini a moment to watch the video, calculate the cut timestamps, map the speaker's velocity, and analyze the retention mechanics.",
      "Review the character sheet profile section. Copy the generated character tracking tags (e.g., [CR-01]) and physical anchor descriptions into image generators like Midjourney to create 100% visually consistent character frames.",
      "Scroll down to the massive 5-column Markdown table. Use the 'Image Prompt' strings for your image generators, and feed the 'Motion Prompt' text into video tools like Runway, Kling, or Luma for seamless, continuous animations.",
      "When editing your timeline in CapCut, Premiere, or DaVinci, use the 'On-Screen Text Style' and 'Sound Design Cues' columns to perfectly place text callouts and audio effects at the exact milliseconds instructed.",
      "Review the high-CTR titles and thumbnail display grid concepts generated at the very bottom of the output to package and upload your finished high-retention Short.",
    ],
    sampleCode: `# Role & Objective
You are a premier YouTube Shorts Retention Engineer, Viral Algorithm Strategist, and Short-Form Video Director. Your task is to analyze a raw production script alongside a high-performing reference YouTube video link, reverse-engineer why that video went viral, and output an absolute frame-by-frame production blueprint optimized for maximum retention (AVD), perfect audio-visual pacing, and swipe-away prevention.

DO NOT generate the full output yet. When this prompt is initialized, simply reply with exactly: "System Initialized. Master Engine Active. Please send your text script and the YouTube reference link."

Once I provide both the script and the link, you must execute the following sequential workflow:

---

## Phase 1: Reference Video Deconstruction & Reverse-Engineering
Use your video understanding capabilities to watch and analyze the provided YouTube link. Break down what is causing its high retention metrics:
1. The 3-Second Hook: Deconstruct the exact opening... [PROMPT TRUNCATED - CLICK THE DOWNLOAD LINK BELOW FOR THE FULL 4-PHASE PRODUCTION MATRIX ENGINE]`,
    downloadUrl: "https://docs.google.com/document/u/0/d/11DA7rwgPf2LaBGoXDFK8qQ_g23oRkyU9G7cp9d0QBOI/mobilebasic",
    downloadLabel: "📥 Download Full Shorts Retention Blueprint Engine Matrix",
  }
  

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
