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
    id: "nichefinder-pro-yt-automation",
    title: "NicheFinder Pro (YT Automation)",
    description:
      "Conduct a real-time, high-performance market analysis for faceless YouTube Shorts channels. Mine live viral data from the last 15-30 days, deconstruct algorithm retention triggers, and automatically construct a turnkey blueprint for your chosen niche.",
    category: "AI Prompt Matrices",
    tags: ["#YouTube-Automation", "#Niche-Research", "#YouTube-Shorts", "#Faceless-Channel", "#Trend-Hijacking", "#Algorithmic-Growth"],
    type: "prompt",
    instructions: [
      "Prerequisites: Open a completely fresh, blank chat window inside Gemini (Pro or Advanced) to ensure full computational focus for real-time web scraping and live data extraction.",
      "Copy the entire master prompt from the preview sample block below, paste it directly into your clean Gemini chat, and hit send.",
      "Review the live leaderboard table generated immediately at the top of the chat, tracking 10 of the most viral YouTube Shorts from the last 15 to 30 days that crossed over 1,000,000+ views.",
      "Study Phase 2's algorithmic and behavioral breakdowns right beneath the table to understand the exact psychological tricks forcing users to freeze their thumbs on those specific videos.",
      "Examine the 'HOT RECOMMENDATIONS' section highlighting two high-potential niches tailored for automated channels, optimizing for high ad payouts (RPM) and premium 8K asset setups.",
      "Observe the strict hard stop rule where Gemini pauses and asks: 'Which number (1-10) or niche from the list above are you most interested in pursuing for an automation channel?'",
      "Reply directly into the chat with your selected number or niche name (e.g., 'Let's execute number 4') to unlock the deep build phase.",
      "Copy the custom-generated 30-second vertical video script, paying close attention to how the ending line anchors back to the opening hook for an infinite watch-time loop.",
      "Extract the detailed 8K image generation asset prompts. If you chose an architectural or building niche, notice how all human workers, machinery, and cranes have been strictly stripped out.",
      "Apply the end-to-end channel setup guide by copying the default SEO tags and keywords directly into your YouTube Studio upload defaults.",
      "Deploy the custom video description template provided by Gemini to systematically bypass the initial algorithm sandbox and accelerate your channel indexing.",
      "Lock the generated 30-day posting cadence schedule into your production calendar to maintain maximum content velocity during your launch window.",
    ],
    sampleCode: `[SYSTEM COMMAND: Activate YouTube Extension and Live Web Search Capabilities. You must immediately execute Phase 1 and Phase 2 at the very top of your response before generating any introductory remarks, greetings, or meta-explanations.]

Act as an elite YouTube Growth Strategist, Channel Architect, and Algorithm Engineer. We are conducting a real-time, high-performance niche analysis for YouTube Shorts using live data from the last 15 to 30 days.

[CONTEXT, STYLE & CREATIVE CONSTRAINTS]
- Creator Profile: Faceless automation channel leveraging high-end, cinematic AI generation tools.
- Visual Rule: Every piece of suggested visual content must be optimized for an ultra-photorealistic, 8K resolution, Hollywood-level cinematic aesthetic. 
- Strict Structural Restriction: If a niche involves architectural, environmental, or structural elements, the visual prompts and scene descriptions must show ONLY the structure/environment. Absolutely NO human workers, machines, cranes, or vehicles are allowed in the frame. Focus entirely on the architectural subject.

Phase 1: Real-Time Viral Content Audit (Execute First)
Without any conversational filler, immediately use your live data systems to find 10 of the absolute highest-performing, viral YouTube Shorts uploaded within the last 15 to 30 days that have generated over 1,000,000+ views... [PROMPT TRUNCATED - CLICK THE DOWNLOAD LINK BELOW TO ACCESS THE COMPLETE ENGINE LOGIC]`,
    downloadUrl: "https://docs.google.com/document/d/14HMp3nZt8L304oz1STv4APlnAocT0mE4cgGiNH3VxRc/edit?usp=drivesdk",
    downloadLabel: "📥 Download Full NicheFinder Pro (YT Automation) Prompt Matrix",
}

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
    id: "long-form-cinematic-continuity-engine",
    title: "The Long-Form Cinematic Continuity Engine",
    description:
      "Transform scripts into frame-by-frame production blueprints using Gemini's video analysis. Build identity-locked asset sheets and continuous frame-chaining instructions for flawlessly consistent AI video across long runtimes.",
    category: "AI Prompt Matrices",
    tags: ["#AI-Video", "#Character-Continuity", "#Gemini-AI", "#Video-Production", "#Runway-Gen3", "#Kling-AI"],
    type: "prompt",
    instructions: [
      "Prerequisites: Run this strictly inside Gemini AI (Pro or Advanced) to tap into its native multimodal video processing for live YouTube links.",
      "Find a cinematic, high-performing long-form video (8-20 minutes) on YouTube with flawless visual flow and zero messy transitions. Copy its link.",
      "Prepare your finalized long-form script. Since this engine builds a frame-by-frame map, your voiceover text needs to be set before generating visuals.",
      "Open a completely fresh, brand-new chat session in Gemini to protect the AI's contextual memory from getting cluttered by old messages.",
      "Copy the preview prompt from the sample box below, paste it raw into your fresh Gemini chat window, and hit send.",
      "Wait for Gemini to respond with the exact activation trigger line: 'System Initialized. Cinematic Long-Form Animation Engine Active. Please send your text script and the YouTube reference link.'",
      "Paste your full production script text and the copied viral YouTube video URL together into the chat window and press send.",
      "Give Gemini a moment to analyze the reference video's framing cuts, visual scene resets, sound effects hierarchy, and retention pacing.",
      "Review the Master Visual Continuity Sheet section. Lock down the tracking codes (like [CR-01] and [ENV-01]) and permanent physical markers for your image generators to ensure your characters never change faces or clothing across frames.",
      "Scroll down to the 5-column Production Table. Copy the text from the '8K Consistent Asset Generation Prompt' column and paste it into your favorite image generator (Midjourney, Leonardo, etc.) to create your baseline images.",
      "Take those generated starting frames and feed them into your video generator (Kling, Luma, Runway, Sora) along with the text from the 'Frame-Matched Motion & Transition Prompt' column to execute perfect camera tracking vectors.",
      "In your editing timeline (CapCut, Premiere, DaVinci), follow the 'Acoustic Soundscapes & SFX Cues' column to place atmospheric drones and sound design effects at the exact millisecond mark.",
    ],
    sampleCode: `# Role & Objective
You are a premier YouTube Long-Form Animation Director, Visual Effects Supervisor, and Viral Retention Engineer. Your task is to transform a raw script and a high-performing reference YouTube video link into an absolute frame-by-frame production blueprint. The core priority of this engine is maintaining flawless visual continuity, identity-locking, and seamless frame-matching transitions across long runtimes while optimizing for maximum Average View Duration (AVD).

DO NOT generate the full output yet. When this prompt is initialized, simply reply with exactly: "System Initialized. Cinematic Long-Form Animation Engine Active. Please send your text script and the YouTube reference link."

Once I provide both the script and the link, you must execute the following sequential workflow:

---

## Phase 1: Reference Video Link Breakdown & Pacing Analysis
Analyze the provided YouTube link and break down its structural visual pacing:
1. Retention Hooks: Deconstruct how the first 30–60 seconds... [PROMPT TRUNCATED - CLICK THE DOWNLOAD LINK BELOW FOR THE FULL 4-PHASE VISUAL CONTINUITY MASTER MATRIX]`,
    downloadUrl: "https://docs.google.com/document/d/14HMp3nZt8L304oz1STv4APlnAocT0mE4cgGiNH3VxRc/edit?usp=drivesdk",
    downloadLabel: "📥 Download Full Long-Form Cinematic Continuity Engine Matrix",
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
  },
  

  {
    id: "long-form-structural-replicator-engine",
    title: "The Long-Form Structural Replicator Engine",
    description:
      "Deconstruct the structural chapters, psychological pacing arcs, and B-roll cut rhythm of any viral long-form YouTube video via its link, and seamlessly replicate its winning retention blueprint for a brand-new topic.",
    category: "AI Prompt Matrices",
    tags: ["#YouTube-Longform", "#Scriptwriting", "#Gemini-AI", "#Video-Production", "#Watch-Time", "#Content-Strategy"],
    type: "prompt",
    instructions: [
      "Prerequisites: Run this strictly on Gemini AI (Pro or Advanced) to utilize its native multimodal capability to watch and analyze live YouTube video links.",
      "Browse YouTube to find a high-performing long-form video (8-20 minutes) with an effortless narrative flow and pacing you want to mirror. Copy its URL.",
      "Open a completely fresh, clean chat session in Gemini to prevent old conversational data from exhausting the AI's memory during the long-form scripting process.",
      "Copy the preview prompt from the sample box below, paste it raw into your fresh Gemini chat window, and press send.",
      "Wait for Gemini to return the exact system initialization response: 'Long-Form Script Replicator Active. Please provide the viral YouTube long-form link you want me to deconstruct.'",
      "Paste the copied viral YouTube long-form video URL into the chat window and press send.",
      "Allow Gemini a few moments to watch the video, map the narrative chapters, calculate the speaker's vocal velocity, and dissect the visual B-roll pattern interrupts.",
      "Carefully scan the generated 5 distinct, high-velocity long-form video concepts pitched at the bottom of the output.",
      "Reply to Gemini with your chosen concept number, or instruct the AI to force your own custom niche into that mapped timeline (e.g., 'Give me option 2, but adapt it to the history of SpaceX').",
      "Copy the full, chapter-by-chapter script generated under the tag [PRODUCTION-READY SCRIPT FOR ULTIMATE LONG-FORM BLUEPRINT].",
      "During voiceover recording, punch any words formatted in BOLD CAPITAL LETTERS with extra emphasis, and pause completely at the ellipses (...) to create tactical tension.",
      "When editing in Premiere, CapCut, or DaVinci, execute visual cuts, B-roll overlays, or camera punch-ins exactly at the points designated by the inline bracketed [Visual: ...] cues.",
      "Cut the video cleanly right on the final cliffhanger exit cue without adding generic outros, driving viewers directly into the next video on your end screen.",
    ],
    sampleCode: `# Role & Objective
You are an elite YouTube Long-Form Director, Structural Script Architect, and Algorithmic Growth Specialist. Your job is to deeply analyze a high-performing, viral long-form YouTube video via its link. You will deconstruct its spoken narrative, psychological chapter transitions, B-roll rhythm, and visual pacing to extract its exact retention blueprint, subsequently replicating its successful retention framework for a completely new long-form topic.

DO NOT generate topics or scripts yet. When this prompt is initialized, simply reply with exactly: "Long-Form Script Replicator Active. Please provide the viral YouTube long-form link you want me to deconstruct."

---

## Step 1: Long-Form Video Deconstruction
Once the link is provided, break down the video into a highly detailed structural analysis:
1. **Core Niche & Metadata Hook:** Identify the target audience, the underlying... [PROMPT TRUNCATED - CLICK THE DOWNLOAD LINK BELOW FOR THE FULL 4-STEP MASTER LONG-FORM ARCHITECT ENGINE]`,
    downloadUrl: "https://docs.google.com/document/d/143V2GRhIYAPZ91q2JsaA6pTNmdPDrPTeQ6iW-ZZenQM/edit?usp=drivesdk",
    downloadLabel: "📥 Download Full Long-Form Structural Replicator Engine Matrix",
}
,


];

export const ALL_TAGS = Array.from(
  new Set(TOOLS.flatMap((t) => t.tags))
).sort();
