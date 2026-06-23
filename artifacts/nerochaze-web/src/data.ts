// ============================================================
// NEROCHAZE CREATIVE LABS — STATIC CONTENT DATA FILE
// ============================================================
//
// To add new content: copy the BOILERPLATE TEMPLATE below,
// fill in every field, and append the object to the TOOLS array.
// No build step or server restart is needed on GitHub — just save.
//
// ── BOILERPLATE TEMPLATE ─────────────────────────────────────
//
// {
//   id: "unique-url-slug",           // Lowercase, hyphens only. Must be unique.
//   title: "Your Tool Title Here",   // Displayed on card + detail page header.
//   description: "One or two sentences describing what this tool does.",
//   category: "AI Prompt Matrices",  // Either: "AI Prompt Matrices" or "Automation Bot Scripts"
//   tags: ["#Tag1", "#Tag2"],        // Hashtag format. Users can filter by these.
//   type: "prompt",                  // Either: "prompt" or "script"
//   instructions: [
//     "Step 1: Description of first step.",
//     "Step 2: Description of second step.",
//     "Step 3: Continue as needed.",
//   ],
//   sampleCode: `Paste your sample prompt or code snippet here.
// Use template literals (backticks) for multi-line content.`,
//   downloadUrl: "https://shrinkme.io/your-link-here",
//   downloadLabel: "📥 Download Free Prompt Matrix",
//   // For scripts use: "📥 Download Free Automation Script (.py)"
// },
//
// ─────────────────────────────────────────────────────────────

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
  {
    id: "yt-shorts-reverse",
    title: "YouTube Viral Shorts Replicator — All Niches",
    description:
      "Deconstruct any viral YouTube Short into its psychological DNA and generate 3 replication scripts for your niche in one pass.",
    category: "AI Prompt Matrices",
    tags: ["#AI-Prompts", "#Shorts", "#YouTube", "#Viral", "#ContentStrategy"],
    type: "prompt",
    instructions: [
      "Prerequisites: Access to ChatGPT-4, Claude 3.5 Sonnet, or Gemini Pro 1.5.",
      "Find a YouTube Short with 500k+ views in your target niche.",
      "Copy the video URL and keep it ready.",
      "Open your AI model of choice in a new conversation.",
      "Copy the full prompt from the sample box below.",
      "Paste the prompt into the AI and replace [SHORT_URL] with your video link.",
      "Replace [YOUR_TOPIC] with your niche (e.g. 'personal finance', 'fitness', 'AI tools').",
      "Run the prompt — the AI will output a structured hook analysis + 3 replication scripts.",
      "Take the generated Script #1 and use it as your shot list or voiceover draft.",
      "A/B test 2 of the hook variants on your first 2 posts and double down on the winner.",
    ],
    sampleCode: `You are a viral content strategist specializing in YouTube Shorts psychology.

Analyze the following Short and extract its viral DNA:
Target URL: [SHORT_URL]

OUTPUT FORMAT:

## Hook Analysis
- Hook Type: [Pattern Interrupt / Curiosity Gap / Story Open / Controversy / How-To]
- First 3 Seconds: [Exact technique used]
- Retention Hook at 5s: [How the viewer is kept watching past the 5-second mark]
- Pacing: [Cut count per 10 seconds — Fast >3 / Medium 2-3 / Slow <2]

## Psychological Trigger Matrix
| Trigger       | Implementation                     | Timestamp |
|---------------|------------------------------------|-----------|
| [Trigger 1]   | [How it's used]                    | 0:00-0:03 |
| [Trigger 2]   | [How it's used]                    | 0:05-0:10 |
| [Trigger 3]   | [How it's used]                    | 0:15-0:20 |

## Replication Scripts (Topic: [YOUR_TOPIC])

### Script 1 — Direct Replication
\`\`\`
[0:00] HOOK: [Write your pattern interrupt here]
[0:03] TENSION: [Build the contrast or problem]
[0:12] PAYOFF: [Deliver the resolution]
[0:22] CTA: [Embed the call-to-action naturally]
\`\`\`

### Script 2 — Controversial Angle
[AI generates this]

### Script 3 — Story-Led Version
[AI generates this]`,
    downloadUrl: "https://shrinkme.io/placeholder-yt-shorts",
    downloadLabel: "📥 Download Free Prompt Matrix",
  },
  {
    id: "anime-faceless-matrix",
    title: "Identity-Locked Faceless Anime Prompt Matrix",
    description:
      "Generate consistent, identity-locked anime character art across unlimited scenes without revealing a real face — built for faceless content creators.",
    category: "AI Prompt Matrices",
    tags: ["#AI-Prompts", "#Anime", "#Faceless", "#Midjourney", "#ImageGeneration"],
    type: "prompt",
    instructions: [
      "Prerequisites: Midjourney v6 subscription or Stable Diffusion XL (SDXL) via ComfyUI/A1111.",
      "Define your Character Anchor — 3 to 5 consistent visual traits that never change (e.g. 'white hood, silver hair, black gloves, no face ever visible').",
      "Write your anchor description on a notepad — you will paste it into every single prompt.",
      "Open Midjourney Discord or your Stable Diffusion WebUI.",
      "Copy the sample prompt below and paste it into /imagine (Midjourney) or the prompt box (SD).",
      "Replace [ANCHOR] with your character's fixed description.",
      "Replace [SCENE] with the environment you want (e.g. 'standing at edge of neon-lit rooftop').",
      "Run the prompt once and note the seed number from the output (shown in the Midjourney job details).",
      "Lock that seed with --seed [NUMBER] in all future prompts to maintain visual identity consistency.",
      "Generate 10-20 scene variations using the same anchor + seed — the character stays consistent across all of them.",
      "Export frames and use in CapCut, Premiere, or any video editor for your faceless content pipeline.",
    ],
    sampleCode: `/imagine prompt: [ANCHOR], [SCENE], ultra-detailed anime illustration,
cinematic lighting, 4k resolution, character facing away from camera,
silhouette focus, atmospheric depth, no face visible,
identity-locked character design, Studio Ghibli meets cyberpunk noir,
--ar 9:16 --style raw --v 6 --seed 42891

─── ANCHOR EXAMPLES ──────────────────────────────────
"hooded figure in white cloak, silver hair, black gloves, no face shown"
"tall silhouette in dark trench coat, back always to camera"

─── SCENE VARIATION EXAMPLES ─────────────────────────
Scene 01: standing at edge of neon-lit rooftop at midnight, rain
Scene 02: walking through cherry blossom forest at golden hour
Scene 03: sitting at glowing holographic desk, typing on laptop
Scene 04: holding a glowing orb in a misty ancient Japanese temple
Scene 05: overlooking a vast cyberpunk megacity from a glass tower`,
    downloadUrl: "https://shrinkme.io/placeholder-anime-matrix",
    downloadLabel: "📥 Download Free Prompt Matrix",
  },
  {
    id: "history-horror-narrative",
    title: "History Horror Narrative Generator",
    description:
      "Transform real historical events into cinematic horror narratives for faceless YouTube — researched, dramatized, and voiceover-ready in one prompt.",
    category: "AI Prompt Matrices",
    tags: ["#AI-Prompts", "#History", "#Horror", "#YouTube", "#Faceless", "#Narrative"],
    type: "prompt",
    instructions: [
      "Prerequisites: GPT-4, Claude 3.5 Sonnet, or Gemini Pro 1.5. Optional: ElevenLabs for voiceover.",
      "Choose a historical event to dramatize (e.g. 'Dyatlov Pass Incident, 1959, Russia').",
      "Research 3 key facts, 2 documented witness accounts, and 1 unresolved mystery about the event.",
      "Open your AI model in a fresh conversation.",
      "Copy the prompt from the sample box below.",
      "Replace [EVENT], [YEAR], and [LOCATION] with your chosen event details.",
      "Select a tone — choose from: COSMIC_HORROR, PSYCHOLOGICAL, or HISTORICAL_THRILLER.",
      "Run the prompt. The AI outputs a full 5-act script with voiceover-ready narration.",
      "Review Act II and Act IV — these are your strongest engagement hooks. Trim if needed.",
      "Feed the completed script into ElevenLabs (recommended: Adam or Rachel voice) for AI narration.",
      "Pair the voiceover with royalty-free historical footage or AI-generated imagery (use the Anime Matrix prompt for visuals).",
      "Upload with no face shown — channel stays completely faceless.",
    ],
    sampleCode: `You are a master storyteller specializing in historical horror content for YouTube.

EVENT: [EVENT]
YEAR: [YEAR]
LOCATION: [LOCATION]
TONE: [COSMIC_HORROR / PSYCHOLOGICAL / HISTORICAL_THRILLER]

Generate a 5-act horror narrative script formatted for voiceover:

## ACT I — THE WORLD BEFORE (90 seconds)
Set the historical scene in vivid, atmospheric detail.
Introduce the real people involved as characters with names and roles.
Close with a single foreboding sentence that signals something is wrong.

## ACT II — THE ANOMALY (60 seconds)
Introduce the inciting horror event or discovery.
Incorporate documented evidence and real witness quotes where possible.
End the act mid-tension — do not resolve it.

## ACT III — THE DESCENT (90 seconds)
Escalate using documented facts reframed through a horror lens.
Present one rational explanation. Then methodically destroy it with evidence.

## ACT IV — THE TRUTH (Or Lack Of It) (60 seconds)
Surface the unresolved mystery, official cover-up, or redacted evidence.
The absence of answers is the horror. Leave deliberate gaps.

## ACT V — LEGACY & HOOK (30 seconds)
Connect the historical event to the present day.
Close with a haunting unresolved question that drives viewer comments.

DELIVERY NOTE: Slow, measured, documentary tone. No jump scare language.`,
    downloadUrl: "https://shrinkme.io/placeholder-history-horror",
    downloadLabel: "📥 Download Free Prompt Matrix",
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
      "Prerequisites: Any major AI model (GPT-4, Claude, or Gemini).",
      "Identify your content topic — be specific (e.g. 'how to use ChatGPT for cold email' not just 'AI').",
      "Select your target platform: YouTube Shorts, Instagram Reels, TikTok, X (Twitter), or LinkedIn.",
      "Define your target audience in one sentence (e.g. 'broke college students who want side income').",
      "Copy the prompt from the sample box below.",
      "Replace [TOPIC], [PLATFORM], and [AUDIENCE] with your specifics.",
      "Run the prompt — the AI outputs 20 hooks ranked by estimated psychological impact.",
      "Pick the top 3 hooks (ranked #1, #2, #3).",
      "Use Hook #1 for your first post. Use Hook #2 for your second post the next day.",
      "After 48 hours, compare views and 3-second retention. The hook with higher retention is your winning formula.",
      "Reuse that formula structure for the next 10 posts — only change the topic.",
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
"[Real or fictional character] was [doing ordinary thing] when [unexpected thing happened]."

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
  {
    id: "discord-asset-sizer",
    title: "Automated Discord Asset-Sizer Bot",
    description:
      "Auto-resizes any image uploaded to Discord to perfect platform specs — banners, avatars, emojis, and stickers — using a single command.",
    category: "Automation Bot Scripts",
    tags: ["#Python-Scripts", "#Discord", "#Automation", "#Bot", "#Design", "#Assets"],
    type: "script",
    instructions: [
      "Prerequisites: Python 3.9 or higher. Download from python.org if not installed.",
      "Open a terminal (Command Prompt on Windows, Terminal on Mac/Linux).",
      "Install dependencies: pip install discord.py Pillow",
      "Go to discord.com/developers/applications → click New Application → name it.",
      "Click the Bot tab in the sidebar → click Reset Token → copy the token (keep it secret).",
      "Scroll down and enable Message Content Intent under Privileged Gateway Intents.",
      "Click OAuth2 → URL Generator → check 'bot' scope → check READ_MESSAGES, SEND_MESSAGES, ATTACH_FILES permissions → open the generated URL to invite the bot to your server.",
      "Download the full script using the button below.",
      "Open the script file in any text editor and replace YOUR_BOT_TOKEN with your actual token.",
      "Save the file and run it: python asset_sizer_bot.py",
      "In Discord, upload any image and type: !resize banner (or avatar, emoji, sticker, splash)",
      "The bot will reply with the correctly resized image as an attachment.",
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
    id: "discord-moderation-bot",
    title: "Discord Auto-Moderation Bot",
    description:
      "Full-featured moderation bot with keyword filtering, anti-spam rate limiting, welcome DMs, and role-gated admin commands.",
    category: "Automation Bot Scripts",
    tags: ["#Python-Scripts", "#Discord", "#Moderation", "#Bot", "#Automation"],
    type: "script",
    instructions: [
      "Prerequisites: Python 3.9 or higher installed.",
      "Install the library: pip install discord.py",
      "Go to discord.com/developers/applications → New Application → Bot tab → Reset Token → copy it.",
      "Enable all Privileged Gateway Intents: Presence, Server Members, and Message Content.",
      "Invite the bot to your server with Administrator permissions via the OAuth2 URL Generator.",
      "Download the full script below.",
      "Open the file and replace YOUR_BOT_TOKEN with your actual bot token.",
      "Edit the BANNED_WORDS list to include phrases you want auto-deleted in your server.",
      "Set SPAM_LIMIT to the maximum messages per 5 seconds a user can send (default: 5).",
      "Save and run: python modbot.py",
      "The bot is now live. It will auto-delete banned words, slow-spam users, and DM warned members.",
      "Use !kick @user [reason] or !ban @user [reason] for manual moderation (requires permissions).",
    ],
    sampleCode: `import discord
from discord.ext import commands
import asyncio

TOKEN = "YOUR_BOT_TOKEN"
BANNED_WORDS = ["spam", "scam", "free nitro", "click here"]
SPAM_LIMIT = 5  # Max messages per 5-second window per user

intents = discord.Intents.all()
bot = commands.Bot(command_prefix="!", intents=intents)
message_counts = {}

@bot.event
async def on_ready():
    print(f"[+] ModBot online: {bot.user}")
    await bot.change_presence(
        activity=discord.Activity(
            type=discord.ActivityType.watching,
            name="for rule violations"
        )
    )

@bot.event
async def on_member_join(member):
    await member.send(
        f"Welcome to the server, {member.name}!\\n"
        "Please read the rules in #rules before posting."
    )

@bot.event
async def on_message(message):
    if message.author.bot:
        return

    uid = message.author.id
    message_counts[uid] = message_counts.get(uid, 0) + 1

    if message_counts[uid] > SPAM_LIMIT:
        await message.delete()
        await message.channel.send(
            f"{message.author.mention} Slow down!", delete_after=3
        )
        return

    await asyncio.sleep(5)
    message_counts[uid] = max(0, message_counts.get(uid, 1) - 1)

    if any(w in message.content.lower() for w in BANNED_WORDS):
        await message.delete()
        await message.author.send("Your message was removed for violating server rules.")
        return

    await bot.process_commands(message)

@bot.command()
@commands.has_permissions(kick_members=True)
async def kick(ctx, member: discord.Member, *, reason="No reason provided"):
    await member.kick(reason=reason)
    await ctx.send(f"Kicked {member.mention}. Reason: {reason}")

bot.run(TOKEN)`,
    downloadUrl: "https://shrinkme.io/placeholder-discord-modbot",
    downloadLabel: "📥 Download Free Automation Script (.py)",
  },
  {
    id: "whatsapp-bulk-bot",
    title: "WhatsApp Bulk Messaging Bot",
    description:
      "Automates WhatsApp messages via Selenium — bulk contact outreach, session persistence, and CSV-driven broadcast campaigns.",
    category: "Automation Bot Scripts",
    tags: ["#Python-Scripts", "#WhatsApp", "#Automation", "#Bot", "#Outreach"],
    type: "script",
    instructions: [
      "Prerequisites: Python 3.9+, Google Chrome browser, ChromeDriver.",
      "Download ChromeDriver: go to chromedriver.chromium.org and download the version matching your Chrome (check Chrome version at chrome://version).",
      "Place the chromedriver executable in the same folder as your script.",
      "Install Selenium: pip install selenium",
      "Create a file named contacts.csv with one contact name per row (must match saved WhatsApp names exactly).",
      "Download the full script using the button below.",
      "Open the script and set your MESSAGE variable to the text you want to send.",
      "Run: python whatsapp_bot.py",
      "Chrome will open WhatsApp Web — scan the QR code with your phone (WhatsApp → Linked Devices → Link a Device).",
      "Once logged in, the script loads your session and processes your contacts.csv list automatically.",
      "The script waits 2 seconds between each message to avoid WhatsApp rate limiting and potential bans.",
      "Important: Do not send more than 50-100 messages per day to avoid account restrictions.",
    ],
    sampleCode: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import csv

MESSAGE = "Hey! This is an automated message from NeroBot."

class WhatsAppBot:
    def __init__(self):
        options = webdriver.ChromeOptions()
        # Saves your WhatsApp session — no QR code after first login
        options.add_argument("--user-data-dir=./whatsapp_session")
        self.driver = webdriver.Chrome(options=options)
        self.wait = WebDriverWait(self.driver, 30)

    def open(self):
        self.driver.get("https://web.whatsapp.com")
        print("[*] Waiting for WhatsApp Web to load (scan QR if prompted)...")
        self.wait.until(EC.presence_of_element_located(
            (By.CSS_SELECTOR, '[data-testid="chat-list"]')
        ))
        print("[+] WhatsApp Web loaded successfully")

    def send(self, contact: str, text: str):
        search = self.wait.until(EC.presence_of_element_located(
            (By.CSS_SELECTOR, '[data-testid="chat-list-search"]')
        ))
        search.clear()
        search.send_keys(contact)
        time.sleep(1.5)

        result = self.wait.until(EC.presence_of_element_located(
            (By.XPATH, f'//span[@title="{contact}"]')
        ))
        result.click()
        time.sleep(0.8)

        msg_box = self.wait.until(EC.presence_of_element_located(
            (By.CSS_SELECTOR, '[data-testid="conversation-compose-box-input"]')
        ))
        msg_box.send_keys(text + Keys.ENTER)
        print(f"[+] Sent to: {contact}")

    def bulk_from_csv(self, csv_path: str, text: str):
        with open(csv_path, newline="") as f:
            for row in csv.reader(f):
                if row and row[0].strip():
                    self.send(row[0].strip(), text)
                    time.sleep(2)  # Anti-ban delay

if __name__ == "__main__":
    bot = WhatsAppBot()
    bot.open()
    bot.bulk_from_csv("contacts.csv", MESSAGE)`,
    downloadUrl: "https://shrinkme.io/placeholder-whatsapp-bot",
    downloadLabel: "📥 Download Free Automation Script (.py)",
  },
  {
    id: "telegram-publisher-bot",
    title: "Telegram Channel Publisher Bot",
    description:
      "Schedules and auto-publishes content to Telegram channels with inline control panels, subscriber analytics, and markdown formatting.",
    category: "Automation Bot Scripts",
    tags: ["#Python-Scripts", "#Telegram", "#Content", "#Bot", "#Publishing", "#Automation"],
    type: "script",
    instructions: [
      "Prerequisites: Python 3.9 or higher installed.",
      "Install the library: pip install python-telegram-bot",
      "Open Telegram and search for @BotFather.",
      "Send /newbot to BotFather → choose a name → choose a username (must end in 'bot').",
      "BotFather will give you a token — copy it and keep it secret.",
      "Add your bot as an Administrator to your Telegram channel (channel settings → Administrators → Add).",
      "Get your channel ID: forward any channel message to @userinfobot — it will show the channel ID.",
      "Download the full script below.",
      "Open the script and replace YOUR_BOT_TOKEN and @your_channel with your values.",
      "Run: python telegram_bot.py",
      "Open Telegram, find your bot, and send /start — the control panel will appear.",
      "Use the inline buttons to view subscriber stats or publish a message instantly to your channel.",
    ],
    sampleCode: `from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, CallbackQueryHandler, ContextTypes

TOKEN = "YOUR_BOT_TOKEN"
CHANNEL = "@your_channel"

async def start(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [
            InlineKeyboardButton("📊 Subscriber Stats", callback_data="stats"),
            InlineKeyboardButton("🚀 Post Now", callback_data="post"),
        ],
        [InlineKeyboardButton("📅 Schedule Post", callback_data="schedule")],
    ]
    await update.message.reply_text(
        "*NeroBot — Control Panel*\\n\\nSelect an action:",
        reply_markup=InlineKeyboardMarkup(keyboard),
        parse_mode="Markdown"
    )

async def button_handler(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()

    if query.data == "stats":
        count = await ctx.bot.get_chat_member_count(CHANNEL)
        chat = await ctx.bot.get_chat(CHANNEL)
        await query.edit_message_text(
            f"📊 *Channel Analytics*\\n\\n"
            f"Channel: {chat.title}\\n"
            f"Subscribers: {count:,}",
            parse_mode="Markdown"
        )

    elif query.data == "post":
        await ctx.bot.send_message(
            chat_id=CHANNEL,
            text="🔥 *New Drop — Nerochaze Creative Labs*\\n\\n"
                 "Fresh content just dropped. Check it out.",
            parse_mode="Markdown"
        )
        await query.edit_message_text("Published successfully!")

    elif query.data == "schedule":
        await query.edit_message_text(
            "Scheduling via python-telegram-bot requires APScheduler.\\n"
            "Full scheduling implementation is in the downloadable script."
        )

if __name__ == "__main__":
    app = Application.builder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CallbackQueryHandler(button_handler))
    print("[+] NeroBot is running...")
    app.run_polling()`,
    downloadUrl: "https://shrinkme.io/placeholder-telegram-bot",
    downloadLabel: "📥 Download Free Automation Script (.py)",
  },
];

export const ALL_TAGS = Array.from(
  new Set(TOOLS.flatMap((t) => t.tags))
).sort();
