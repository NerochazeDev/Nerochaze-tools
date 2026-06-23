export interface ContentItem {
  id: string;
  type: "prompt" | "script";
  title: string;
  description: string;
  category: "AI Prompt Matrices" | "Automation Bot Scripts";
  tags: string[];
  icon: string;
  prerequisites: string[];
  installationSteps: string[];
  sampleCode: string;
  sampleLanguage: string;
  downloadUrl: string;
  downloadLabel: string;
  matrix?: { hook: string; technique: string; example: string }[];
  features?: string[];
}

export const CONTENT: ContentItem[] = [
  {
    id: "yt-shorts-reverse",
    type: "prompt",
    title: "YouTube Shorts Reverse Engineer",
    description:
      "Deconstruct any viral YouTube Short into its core psychological triggers and replicate the winning formula.",
    category: "AI Prompt Matrices",
    tags: ["#Shorts", "#YouTube", "#Viral", "#ContentStrategy", "#Hooks"],
    icon: "youtube",
    prerequisites: [
      "Access to ChatGPT-4, Claude 3.5, or Gemini Pro",
      "A target YouTube Short URL to analyze",
      "Basic understanding of content marketing",
      "Optional: TubeBuddy or VidIQ for analytics data",
    ],
    installationSteps: [
      "1. Copy the full prompt from the Sample Box below.",
      "2. Open your preferred AI model (ChatGPT, Claude, or Gemini).",
      "3. Paste the prompt and replace [SHORT_URL] with your target video.",
      "4. Replace [YOUR_TOPIC] with your niche or content focus.",
      "5. Run the prompt. The AI will output a structured breakdown + 3 replication scripts.",
      "6. Use the generated scripts as direct storyboard outlines for your own Shorts.",
    ],
    sampleCode: `You are a viral content strategist with deep expertise in YouTube Shorts psychology.

Analyze the following Short and extract its viral DNA:
Target URL: [SHORT_URL]

OUTPUT FORMAT:
## Hook Analysis
- Hook Type: [Pattern Interrupt / Curiosity Gap / Story Open / Controversy]
- First 3 Seconds: [Exact technique used]
- Retention Hook at 5s: [How the viewer is kept watching]

## Psychological Triggers
| Trigger       | Implementation            | Timestamp |
|---------------|---------------------------|-----------|
| Fear of loss  | Example text here         | 0:00-0:03 |
| Social proof  | Example text here         | 0:05-0:08 |
| Curiosity gap | Example text here         | 0:10-0:15 |

## Replication Script (for topic: [YOUR_TOPIC])
\`\`\`
[0:00] HOOK — [Write your pattern interrupt here]
[0:03] TENSION — [Build the problem or contrast]
[0:10] PAYOFF — [Deliver the resolution]
[0:20] CTA — [Embed call-to-action naturally]
\`\`\``,
    sampleLanguage: "markdown",
    downloadUrl: "https://shrinkme.io/placeholder-yt-shorts",
    downloadLabel: "📥 Download Full Prompt Matrix (.md)",
    matrix: [
      { hook: "Pattern Interrupt", technique: "Start mid-action or mid-sentence", example: '"...and that\'s when everything changed."' },
      { hook: "Curiosity Gap", technique: "State a result before the method", example: '"I made $10k in 7 days — here\'s exactly how."' },
      { hook: "Social Proof", technique: "Lead with authority validation", example: '"10M views later, this is what actually works."' },
      { hook: "Controversy", technique: "Challenge a widely-held belief", example: '"Stop doing cold outreach — it\'s completely dead."' },
      { hook: "How-To Promise", technique: "Lead with transformation outcome", example: '"Turn your phone into a $500/day content machine."' },
    ],
  },
  {
    id: "anime-faceless-matrix",
    type: "prompt",
    title: "Identity-Locked Faceless Anime Prompt Matrix",
    description:
      "Generate consistent, identity-locked anime character art across unlimited scenes without revealing a real face — built for faceless content creators.",
    category: "AI Prompt Matrices",
    tags: ["#Anime", "#Faceless", "#Midjourney", "#AI", "#ImageGeneration", "#Character"],
    icon: "aperture",
    prerequisites: [
      "Midjourney v6 or Stable Diffusion XL (SDXL) access",
      "A defined 'anchor description' for your character (hair, outfit, silhouette)",
      "Basic familiarity with prompt engineering syntax",
      "Optional: ControlNet (for SDXL pose consistency)",
    ],
    installationSteps: [
      "1. Define your Character Anchor — 3-5 consistent visual traits (e.g., white hood, silver hair, no face visible).",
      "2. Copy the prompt template from the Sample Box below.",
      "3. Paste into Midjourney /imagine or your Stable Diffusion WebUI.",
      "4. Replace [ANCHOR] with your character description.",
      "5. Replace [SCENE] with the environment or situation.",
      "6. Use the same seed (--seed XXXX in Midjourney) across all generations for identity consistency.",
      "7. For video: export frames and sequence in CapCut or Premiere.",
    ],
    sampleCode: `/imagine prompt: [ANCHOR], [SCENE], ultra-detailed anime illustration, 
cinematic lighting, 4k resolution, character facing away from camera, 
silhouette focus, atmospheric background, depth of field, 
no face visible, identity-locked character design, 
Studio Ghibli aesthetic meets cyberpunk noir, 
--ar 9:16 --style raw --v 6 --seed 42891

-- ANCHOR EXAMPLES --
"hooded figure in white cloak, silver hair cascading down, 
black gloves, no face ever shown, consistent silhouette"

-- SCENE VARIATIONS --
Scene 1: standing at edge of neon-lit rooftop at midnight
Scene 2: walking through cherry blossom forest at dusk  
Scene 3: sitting at glowing holographic desk, typing code
Scene 4: holding glowing orb in misty ancient temple`,
    sampleLanguage: "text",
    downloadUrl: "https://shrinkme.io/placeholder-anime-matrix",
    downloadLabel: "📥 Download Full 50-Scene Prompt Matrix (.md)",
    matrix: [
      { hook: "Identity Lock", technique: "Never show the face — always back, side, or silhouette", example: '"character facing away, hood up, only silhouette visible"' },
      { hook: "Anchor Consistency", technique: "Use identical clothing/hair descriptors every prompt", example: '"white hood, silver hair, black gloves — always"' },
      { hook: "Scene Isolation", technique: "Change only the environment, not the character", example: '"same character, 12 different environments, same seed"' },
      { hook: "Seed Locking", technique: "Pin the random seed for cross-scene continuity", example: '"--seed 42891 across all 50 scenes"' },
      { hook: "Aspect Rationing", technique: "Force 9:16 for Shorts/Reels vertical format", example: '"--ar 9:16 --style raw"' },
    ],
  },
  {
    id: "history-horror-narrative",
    type: "prompt",
    title: "History Horror Narrative Generator",
    description:
      "Transform real historical events into cinematic horror narratives for faceless YouTube content — researched, dramatized, and script-ready.",
    category: "AI Prompt Matrices",
    tags: ["#History", "#Horror", "#Storytelling", "#YouTube", "#Faceless", "#Narrative"],
    icon: "book-open",
    prerequisites: [
      "Access to GPT-4, Claude 3.5 Sonnet, or Gemini Pro 1.5",
      "A historical event or time period to dramatize",
      "Optional: Wikipedia API key for automated research augmentation",
      "Text-to-speech tool (ElevenLabs recommended for voiceover)",
    ],
    installationSteps: [
      "1. Choose a historical event (e.g., 'The Dyatlov Pass Incident, 1959').",
      "2. Copy the narrative prompt from the Sample Box below.",
      "3. Paste into your AI model and replace [EVENT], [YEAR], and [LOCATION].",
      "4. Select your tone from: [COSMIC_HORROR / PSYCHOLOGICAL / HISTORICAL_THRILLER].",
      "5. The AI outputs a full 5-act script with voiceover-ready narration.",
      "6. Feed the script into ElevenLabs for AI voiceover generation.",
      "7. Pair narration with royalty-free historical footage or AI-generated imagery.",
    ],
    sampleCode: `You are a master storyteller specializing in historical horror content for YouTube.

EVENT: [EVENT]
YEAR: [YEAR]  
LOCATION: [LOCATION]
TONE: [COSMIC_HORROR / PSYCHOLOGICAL / HISTORICAL_THRILLER]

Generate a 5-act horror narrative script:

## ACT I — THE WORLD BEFORE (Scene Setting)
Describe the historical context in vivid, atmospheric detail.
End with a foreboding sentence that signals something wrong.

## ACT II — THE ANOMALY (Inciting Incident)  
Introduce the horrifying event or discovery.
Use real historical figures as characters where possible.
Incorporate documented evidence and witness accounts.

## ACT III — THE DESCENT
Escalate tension through documented facts reframed as horror.
Include a "rational explanation" that is then debunked.

## ACT IV — THE TRUTH (Or Lack Of It)
Present the unresolved mystery or official cover-up.
Leave deliberate gaps — the unknown is scarier than the known.

## ACT V — LEGACY & HOOK
Connect the historical horror to the present day.
End with a cliffhanger or disturbing question for the viewer.

VOICEOVER TONE: Slow, measured, documentary-style. No jump scares.`,
    sampleLanguage: "markdown",
    downloadUrl: "https://shrinkme.io/placeholder-history-horror",
    downloadLabel: "📥 Download Full 20-Event Horror Script Pack (.md)",
    matrix: [
      { hook: "Real Event Anchor", technique: "Ground every horror beat in documented historical fact", example: '"The official report stated... but witnesses described..."' },
      { hook: "Dual Reality", technique: "Present rational explanation, then destroy it", example: '"Scientists said X. The bodies told a different story."' },
      { hook: "Witness Humanization", technique: "Name and describe real historical figures as characters", example: '"Igor Dyatlov, 23, was the first to..."' },
      { hook: "Evidence Gap Horror", technique: "Make the missing information the scariest part", example: '"The last 3 pages of the report were redacted."' },
      { hook: "Legacy Hook", technique: "Connect old event to present-day unresolved status", example: '"To this day, no one knows what killed them."' },
    ],
  },
  {
    id: "viral-hook-generator",
    type: "prompt",
    title: "Viral Hook Generator",
    description:
      "Generate 20 platform-specific, scroll-stopping opening lines for any niche using proven psychological frameworks.",
    category: "AI Prompt Matrices",
    tags: ["#Hooks", "#Copywriting", "#Viral", "#Growth", "#Shorts", "#Instagram"],
    icon: "zap",
    prerequisites: [
      "Access to any major AI model (GPT-4, Claude, or Gemini)",
      "Your niche or content topic defined",
      "Target platform selected (YouTube Shorts, Instagram Reels, TikTok, LinkedIn)",
    ],
    installationSteps: [
      "1. Identify your topic and target platform.",
      "2. Copy the prompt from the Sample Box below.",
      "3. Replace [TOPIC], [PLATFORM], and [AUDIENCE] with your specifics.",
      "4. Run in your AI model — output will be 20 ranked hooks.",
      "5. Test the top 3 hooks as A/B variations on your first post.",
      "6. Track CTR and retention at 3s — the winning hook becomes your template.",
    ],
    sampleCode: `You are an expert hook writer for short-form video content.

Topic: [TOPIC]
Platform: [PLATFORM]  
Target Audience: [AUDIENCE]

Generate exactly 20 scroll-stopping hooks using these formulas:

FORMULA 1 — FEAR + SPECIFICITY:
"You're [losing/missing/wasting] [specific measurable thing] every [time unit]"

FORMULA 2 — COUNTER-INTUITIVE:
"[Common belief] is actually wrong. Here's what actually works."

FORMULA 3 — STORY OPEN (mid-action):
"[Character] [was doing X] when [unexpected thing happened]"

FORMULA 4 — NUMBER-LED CREDIBILITY:
"I tested [specific number] [things]. Only [small number] actually [result]."

FORMULA 5 — DIRECT SELF-QUALIFIER:
"If you [specific action/situation], this [changes/saves/costs] you [X]."

OUTPUT: Rank all 20 by estimated psychological impact (1=strongest).
Include one sentence explaining why each hook works.`,
    sampleLanguage: "markdown",
    downloadUrl: "https://shrinkme.io/placeholder-hook-generator",
    downloadLabel: "📥 Download Full Hook Formula Library (.md)",
  },
  {
    id: "discord-asset-sizer",
    type: "script",
    title: "Automated Discord Asset-Sizer Bot",
    description:
      "Automatically resizes and formats image assets uploaded to a Discord server to meet platform specs — banners, avatars, emojis, and stickers in one command.",
    category: "Automation Bot Scripts",
    tags: ["#Discord", "#Assets", "#Python", "#Automation", "#Bot", "#Design"],
    icon: "image",
    prerequisites: [
      "Python 3.9 or higher installed",
      "Discord Bot Token (from Discord Developer Portal)",
      "Pillow library: pip install Pillow",
      "discord.py library: pip install discord.py",
      "Bot must have: READ_MESSAGES, SEND_MESSAGES, ATTACH_FILES permissions",
    ],
    installationSteps: [
      "1. Create a bot at discord.com/developers/applications → 'New Application'.",
      "2. Go to Bot tab → Reset Token → copy your BOT_TOKEN.",
      "3. Enable 'Message Content Intent' under Privileged Gateway Intents.",
      "4. Install dependencies: pip install discord.py Pillow",
      "5. Create a file named asset_sizer_bot.py and paste the full script.",
      "6. Replace BOT_TOKEN with your token.",
      "7. Run: python asset_sizer_bot.py",
      "8. In Discord, upload any image and use !resize [type] where type = banner/avatar/emoji/sticker.",
    ],
    sampleCode: `import discord
from discord.ext import commands
from PIL import Image
import io

TOKEN = "YOUR_BOT_TOKEN"

# Discord asset size specs
SIZES = {
    "banner":  (960, 540),   # Server banner
    "avatar":  (256, 256),   # Profile picture
    "emoji":   (128, 128),   # Custom emoji
    "sticker": (320, 320),   # Server sticker
    "splash":  (1920, 1080), # Invite splash
}

intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"[+] Asset-Sizer Bot online as {bot.user}")

@bot.command()
async def resize(ctx, asset_type: str = "avatar"):
    if not ctx.message.attachments:
        await ctx.send("❌ Attach an image to resize. Usage: !resize [banner/avatar/emoji/sticker]")
        return

    asset_type = asset_type.lower()
    if asset_type not in SIZES:
        await ctx.send(f"❌ Unknown type. Choose from: {', '.join(SIZES.keys())}")
        return

    attachment = ctx.message.attachments[0]
    img_data = await attachment.read()
    img = Image.open(io.BytesIO(img_data)).convert("RGBA")

    target = SIZES[asset_type]
    resized = img.resize(target, Image.LANCZOS)

    output = io.BytesIO()
    resized.save(output, format="PNG")
    output.seek(0)

    await ctx.send(
        f"✅ Resized to **{asset_type}** spec ({target[0]}x{target[1]}px)",
        file=discord.File(output, filename=f"{asset_type}_resized.png")
    )

bot.run(TOKEN)`,
    sampleLanguage: "python",
    downloadUrl: "https://shrinkme.io/placeholder-discord-asset-sizer",
    downloadLabel: "📥 Download Full Automation Script (.py)",
    features: [
      "Auto-detects Discord spec dimensions",
      "Supports PNG, JPG, WebP input formats",
      "LANCZOS resampling for quality output",
      "Slash command + prefix command support",
      "Batch resize multiple attachments",
    ],
  },
  {
    id: "discord-moderation-bot",
    type: "script",
    title: "Discord Auto-Moderation Bot",
    description:
      "Full-featured auto-moderation bot with keyword filtering, anti-spam rate limiting, welcome DMs, and role-gated admin commands.",
    category: "Automation Bot Scripts",
    tags: ["#Discord", "#Moderation", "#Python", "#Bot", "#Automation"],
    icon: "shield",
    prerequisites: [
      "Python 3.9 or higher installed",
      "Discord Bot Token (from Discord Developer Portal)",
      "discord.py library: pip install discord.py",
      "Bot must have Administrator or Kick/Ban Members permission",
      "Enable all Privileged Gateway Intents in Developer Portal",
    ],
    installationSteps: [
      "1. Go to discord.com/developers → New Application → Bot → Reset Token.",
      "2. Enable all Privileged Gateway Intents (Presence, Server Members, Message Content).",
      "3. Invite bot to server with: Administrator permission.",
      "4. pip install discord.py",
      "5. Create modbot.py, paste the full script, replace TOKEN.",
      "6. Edit BANNED_WORDS list with your server's restricted phrases.",
      "7. Run: python modbot.py",
    ],
    sampleCode: `import discord
from discord.ext import commands
import asyncio

TOKEN = "YOUR_BOT_TOKEN"
BANNED_WORDS = ["spam", "scam", "free nitro", "click here"]
SPAM_LIMIT = 5  # max messages per 5 seconds

intents = discord.Intents.all()
bot = commands.Bot(command_prefix="!", intents=intents)
message_counts = {}

@bot.event
async def on_ready():
    print(f"[+] ModBot online: {bot.user}")

@bot.event
async def on_message(message):
    if message.author.bot:
        return

    # Anti-spam check
    uid = message.author.id
    message_counts[uid] = message_counts.get(uid, 0) + 1
    if message_counts[uid] > SPAM_LIMIT:
        await message.delete()
        await message.channel.send(
            f"{message.author.mention} ⚠️ Slow down!", delete_after=3
        )
        return
    await asyncio.sleep(5)
    message_counts[uid] = max(0, message_counts.get(uid, 1) - 1)

    # Keyword filter
    if any(w in message.content.lower() for w in BANNED_WORDS):
        await message.delete()
        await message.author.send("Your message violated server rules.")
        return

    await bot.process_commands(message)

@bot.command()
@commands.has_permissions(kick_members=True)
async def kick(ctx, member: discord.Member, *, reason="No reason"):
    await member.kick(reason=reason)
    await ctx.send(f"✅ Kicked {member.mention}")`,
    sampleLanguage: "python",
    downloadUrl: "https://shrinkme.io/placeholder-discord-modbot",
    downloadLabel: "📥 Download Full Automation Script (.py)",
    features: [
      "Keyword & phrase auto-delete",
      "Anti-spam rate limiting per user",
      "Welcome DM on server join",
      "Role-gated kick/ban commands",
      "Configurable banned word list",
    ],
  },
  {
    id: "whatsapp-bot",
    type: "script",
    title: "WhatsApp Bulk Messaging Bot",
    description:
      "Automates WhatsApp messages via Selenium — bulk contact outreach, keyword auto-replies, and CSV-driven broadcast campaigns.",
    category: "Automation Bot Scripts",
    tags: ["#WhatsApp", "#Automation", "#Python", "#Bot", "#Outreach"],
    icon: "phone",
    prerequisites: [
      "Python 3.9 or higher installed",
      "Google Chrome browser installed",
      "ChromeDriver matching your Chrome version (chromedriver.chromium.org)",
      "Selenium library: pip install selenium",
      "WhatsApp account with Web access enabled",
      "Contacts saved as CSV (name, phone_number format)",
    ],
    installationSteps: [
      "1. pip install selenium",
      "2. Download ChromeDriver from chromedriver.chromium.org matching your Chrome version.",
      "3. Place chromedriver in the same folder as your script.",
      "4. Create whatsapp_bot.py and paste the full script.",
      "5. Run: python whatsapp_bot.py",
      "6. Scan the QR code shown in Chrome with your WhatsApp mobile app.",
      "7. Wait for the chat list to load, then the bot begins automatically.",
      "8. For bulk mode: edit contacts.csv with your recipient list.",
    ],
    sampleCode: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time, csv

class WhatsAppBot:
    def __init__(self):
        options = webdriver.ChromeOptions()
        options.add_argument("--user-data-dir=./wa_session")
        self.driver = webdriver.Chrome(options=options)
        self.wait = WebDriverWait(self.driver, 30)

    def open(self):
        self.driver.get("https://web.whatsapp.com")
        print("[*] Scan QR code if prompted...")
        self.wait.until(EC.presence_of_element_located(
            (By.CSS_SELECTOR, '[data-testid="chat-list"]')
        ))
        print("[+] WhatsApp Web loaded")

    def send(self, contact: str, message: str):
        search = self.wait.until(EC.presence_of_element_located(
            (By.CSS_SELECTOR, '[data-testid="chat-list-search"]')
        ))
        search.clear()
        search.send_keys(contact)
        time.sleep(1)
        self.wait.until(EC.presence_of_element_located(
            (By.XPATH, f'//span[@title="{contact}"]')
        )).click()
        time.sleep(0.5)
        box = self.wait.until(EC.presence_of_element_located(
            (By.CSS_SELECTOR, '[data-testid="conversation-compose-box-input"]')
        ))
        box.send_keys(message + Keys.ENTER)
        print(f"[+] Sent to {contact}")

    def bulk_from_csv(self, path: str, message: str):
        with open(path) as f:
            for row in csv.reader(f):
                if row:
                    self.send(row[0].strip(), message)
                    time.sleep(2)

bot = WhatsAppBot()
bot.open()
bot.send("John Doe", "Hey! Message from NeroBot 🤖")`,
    sampleLanguage: "python",
    downloadUrl: "https://shrinkme.io/placeholder-whatsapp-bot",
    downloadLabel: "📥 Download Full Automation Script (.py)",
    features: [
      "Session persistence (no repeat QR scan)",
      "CSV contact list import",
      "Rate-limited sending (anti-ban)",
      "Auto-reply to keyword triggers",
      "Media file attachment support",
    ],
  },
  {
    id: "telegram-content-bot",
    type: "script",
    title: "Telegram Channel Publisher Bot",
    description:
      "Schedules and auto-publishes content to Telegram channels with inline keyboard menus, subscriber analytics, and markdown formatting.",
    category: "Automation Bot Scripts",
    tags: ["#Telegram", "#Content", "#Python", "#Bot", "#Publishing", "#Automation"],
    icon: "send",
    prerequisites: [
      "Python 3.9 or higher installed",
      "Telegram Bot Token from @BotFather",
      "python-telegram-bot library: pip install python-telegram-bot",
      "Your Telegram channel ID or username",
      "Bot must be added as Administrator of the target channel",
    ],
    installationSteps: [
      "1. Open Telegram → search @BotFather → /newbot → follow instructions.",
      "2. Copy the bot token provided by BotFather.",
      "3. pip install python-telegram-bot",
      "4. Add your bot as Administrator to your channel.",
      "5. Get your channel ID: forward a channel message to @userinfobot.",
      "6. Create telegram_bot.py, paste the script, replace TOKEN and CHANNEL_ID.",
      "7. Run: python telegram_bot.py",
      "8. Open Telegram, find your bot, and send /start.",
    ],
    sampleCode: `from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, CallbackQueryHandler, ContextTypes

TOKEN = "YOUR_BOT_TOKEN"
CHANNEL = "@your_channel"

async def start(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    kb = [
        [InlineKeyboardButton("📊 Stats", callback_data="stats"),
         InlineKeyboardButton("🚀 Post Now", callback_data="post")],
    ]
    await update.message.reply_text(
        "**NeroBot Panel**\\nSelect an action:",
        reply_markup=InlineKeyboardMarkup(kb),
        parse_mode="Markdown"
    )

async def button(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    q = update.callback_query
    await q.answer()
    if q.data == "stats":
        count = await ctx.bot.get_chat_member_count(CHANNEL)
        await q.edit_message_text(f"📊 **Subscribers:** {count:,}", parse_mode="Markdown")
    elif q.data == "post":
        await ctx.bot.send_message(
            CHANNEL,
            "🔥 **New Drop — Nerochaze Creative Labs**\\n\\nFresh content just released.",
            parse_mode="Markdown"
        )
        await q.edit_message_text("✅ Published!")

app = Application.builder().token(TOKEN).build()
app.add_handler(CommandHandler("start", start))
app.add_handler(CallbackQueryHandler(button))
print("[+] Bot running...")
app.run_polling()`,
    sampleLanguage: "python",
    downloadUrl: "https://shrinkme.io/placeholder-telegram-bot",
    downloadLabel: "📥 Download Full Automation Script (.py)",
    features: [
      "Inline keyboard control panel",
      "Subscriber count analytics",
      "Scheduled post publishing",
      "Markdown + HTML formatting",
      "Multi-channel management",
    ],
  },
];

export const PROMPT_ITEMS = CONTENT.filter((c) => c.type === "prompt");
export const SCRIPT_ITEMS = CONTENT.filter((c) => c.type === "script");
export const ALL_TAGS = Array.from(new Set(CONTENT.flatMap((c) => c.tags))).sort();
