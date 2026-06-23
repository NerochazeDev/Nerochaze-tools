export interface PromptMatrixRow {
  hook: string;
  technique: string;
  example: string;
}

export interface AIPrompt {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  matrix: PromptMatrixRow[];
  fullPrompt: string;
}

export interface AutomationScript {
  id: string;
  title: string;
  language: string;
  platform: string;
  description: string;
  features: string[];
  code: string;
}

export const AI_PROMPTS: AIPrompt[] = [
  {
    id: "yt-shorts-reverse",
    title: "YouTube Shorts Reverse Engineer",
    category: "Video Content",
    description:
      "Deconstruct any viral YouTube Short into its core psychological triggers and replicate the formula.",
    tags: ["YouTube", "Viral", "Shorts"],
    matrix: [
      {
        hook: "Pattern Interrupt",
        technique: "Start mid-action or mid-sentence",
        example: '"...and that\'s when everything changed."',
      },
      {
        hook: "Curiosity Gap",
        technique: "State a result before revealing the method",
        example: '"I made $10k in 7 days — here\'s the exact system."',
      },
      {
        hook: "Social Proof",
        technique: "Lead with validation from authority",
        example: '"10M views later, this is what works."',
      },
      {
        hook: "Controversy",
        technique: "Challenge a widely-held belief",
        example: '"Stop doing cold outreach — it\'s dead."',
      },
      {
        hook: "How-To Promise",
        technique: "Lead with a transformation outcome",
        example: '"Turn your phone into a $500/day machine."',
      },
    ],
    fullPrompt: `You are a viral content strategist. Analyze the following YouTube Short and extract:

1. **Hook Type** — Identify the psychological hook used in the first 3 seconds.
2. **Retention Mechanics** — What keeps the viewer watching past 5 seconds?
3. **CTA Structure** — How is the call-to-action embedded without disrupting flow?
4. **Pacing** — Count cuts per 10 seconds. Is it fast (>3) or slow (<2)?
5. **Emotional Arc** — Map the emotional journey: Problem → Tension → Resolution.

Then generate 3 alternative scripts using the same formula for a new topic: [YOUR TOPIC].

Output format: Markdown with code blocks for each script variation.`,
  },
  {
    id: "content-matrix",
    title: "Content Strategy Matrix",
    category: "Strategy",
    description:
      "Generate a 30-day content calendar with platform-specific hooks and engagement triggers.",
    tags: ["Strategy", "Calendar", "Growth"],
    matrix: [
      {
        hook: "Educational",
        technique: "Teach one actionable concept",
        example: '"5 Python tricks senior devs use daily"',
      },
      {
        hook: "Inspirational",
        technique: "Show transformation through story",
        example: '"From broke to 6-figures — the pivot moment"',
      },
      {
        hook: "Controversial",
        technique: "Disagree with industry consensus",
        example: '"AI won\'t replace coders. Here\'s why."',
      },
      {
        hook: "Behind-the-Scenes",
        technique: "Pull back the curtain on your process",
        example: '"Day in the life building AI tools"',
      },
      {
        hook: "Case Study",
        technique: "Show real data and results",
        example: '"How this bot made 300 cold calls in 1 hour"',
      },
    ],
    fullPrompt: `You are a growth strategist building a personal brand for [NICHE].

Generate a 30-day content matrix with:
- 3 pillar topics (broad themes)
- 10 subtopics per pillar
- For each subtopic: Hook, Platform, Format, CTA

Output as a structured Markdown table with columns:
| Week | Day | Pillar | Topic | Hook Type | Platform | Format | CTA |`,
  },
  {
    id: "viral-hook-generator",
    title: "Viral Hook Generator",
    category: "Copywriting",
    description:
      "Generate 20 scroll-stopping opening lines tailored to your niche and platform.",
    tags: ["Hooks", "Copywriting", "Viral"],
    matrix: [
      {
        hook: "Fear-Based",
        technique: "Trigger loss aversion",
        example: '"You\'re losing $300/day without knowing it."',
      },
      {
        hook: "Number-Led",
        technique: "Use specific data for credibility",
        example: '"I tested 47 AI tools. Only 3 actually work."',
      },
      {
        hook: "Story Open",
        technique: "Start in the middle of a story",
        example: '"My client fired me. Then hired me for 10x."',
      },
      {
        hook: "Comparison",
        technique: "Position vs. common alternative",
        example: '"ChatGPT vs. Claude: the test nobody ran."',
      },
      {
        hook: "Direct Question",
        technique: "Make reader self-identify",
        example: '"Do you still write prompts manually?"',
      },
    ],
    fullPrompt: `You are an expert copywriter specializing in short-form hooks.

For the topic: [YOUR TOPIC]
Target platform: [PLATFORM]
Target audience: [AUDIENCE]

Generate 20 scroll-stopping hooks using these formulas:
1. Fear + Specificity: "You're [losing/missing/wasting] [specific thing] every [time period]"
2. Counter-intuitive claim
3. Story open (mid-action)
4. Social proof + curiosity gap
5. Bold how-to promise

Format each as:
\`\`\`
Hook #N [Type]: [The hook text]
Why it works: [1-sentence explanation]
\`\`\``,
  },
  {
    id: "ai-persona-builder",
    title: "AI Persona Builder",
    category: "Branding",
    description:
      "Design a complete faceless content persona with voice, tone, and content pillars.",
    tags: ["Branding", "Persona", "Faceless"],
    matrix: [
      {
        hook: "Voice Tone",
        technique: "Define 3 adjectives for your brand voice",
        example: '"Direct, sharp, no-fluff"',
      },
      {
        hook: "Content Pillars",
        technique: "3 core themes your brand owns",
        example: '"AI tools, automation, income streams"',
      },
      {
        hook: "Audience Pain",
        technique: "The #1 frustration of your target follower",
        example: '"Overwhelmed by tools that don\'t deliver ROI"',
      },
      {
        hook: "Brand Promise",
        technique: "One sentence: what you guarantee",
        example: '"Cut through the noise. Build real systems."',
      },
      {
        hook: "Differentiation",
        technique: "What makes your angle unique",
        example: '"No theory. Only tested, working scripts."',
      },
    ],
    fullPrompt: `You are a brand strategist building a faceless digital brand.

Niche: [YOUR NICHE]
Platform: [PRIMARY PLATFORM]

Build a complete brand persona document:

## Identity
- Brand name and tagline
- Voice adjectives (3 words)
- Forbidden words/phrases

## Content Pillars
- Pillar 1: [Theme] + 5 content ideas
- Pillar 2: [Theme] + 5 content ideas  
- Pillar 3: [Theme] + 5 content ideas

## Audience Profile
- Primary avatar (demographic + psychographic)
- Top 3 pain points
- Transformation they seek

## Monetization Stack
- Free lead magnet idea
- Core offer
- Upsell opportunity`,
  },
];

export const AUTOMATION_SCRIPTS: AutomationScript[] = [
  {
    id: "discord-bot",
    title: "Discord Moderation Bot",
    language: "Python",
    platform: "Discord",
    description:
      "Auto-moderates servers with keyword filtering, spam detection, and role-based permission enforcement.",
    features: [
      "Keyword & phrase auto-delete",
      "Anti-spam rate limiting",
      "Welcome DM on join",
      "Slash command support",
      "Role-gated commands",
    ],
    code: `import discord
from discord.ext import commands
import asyncio

# Configuration
TOKEN = "YOUR_BOT_TOKEN"
PREFIX = "!"
BANNED_WORDS = ["spam", "scam", "fake"]
SPAM_LIMIT = 5  # messages per 5 seconds

intents = discord.Intents.default()
intents.message_content = True
intents.members = True

bot = commands.Bot(command_prefix=PREFIX, intents=intents)
user_message_count = {}

@bot.event
async def on_ready():
    print(f"[+] {bot.user} is online")
    await bot.change_presence(
        activity=discord.Activity(
            type=discord.ActivityType.watching,
            name="for rule breakers"
        )
    )

@bot.event
async def on_message(message):
    if message.author.bot:
        return

    # Spam detection
    uid = message.author.id
    user_message_count[uid] = user_message_count.get(uid, 0) + 1
    
    if user_message_count[uid] > SPAM_LIMIT:
        await message.delete()
        await message.channel.send(
            f"{message.author.mention} ⚠️ Slow down.",
            delete_after=3
        )
        return

    # Reset counter after delay
    await asyncio.sleep(5)
    user_message_count[uid] = max(0, user_message_count.get(uid, 1) - 1)

    # Keyword filter
    content_lower = message.content.lower()
    if any(word in content_lower for word in BANNED_WORDS):
        await message.delete()
        await message.author.send(
            "Your message was removed for violating server rules."
        )
        return

    await bot.process_commands(message)

@bot.event
async def on_member_join(member):
    await member.send(
        f"Welcome to the server, {member.name}!\\n"
        "Read the rules in #rules before posting."
    )

@bot.command()
@commands.has_permissions(kick_members=True)
async def kick(ctx, member: discord.Member, *, reason="No reason given"):
    await member.kick(reason=reason)
    await ctx.send(f"Kicked {member.mention}. Reason: {reason}")

bot.run(TOKEN)`,
  },
  {
    id: "whatsapp-bot",
    title: "WhatsApp Automation Bot",
    language: "Python",
    platform: "WhatsApp",
    description:
      "Automates WhatsApp responses, message scheduling, and group management via Selenium or official API.",
    features: [
      "Auto-reply to keywords",
      "Scheduled bulk messaging",
      "Group message broadcast",
      "Media file sending",
      "Contact list import (CSV)",
    ],
    code: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import csv

class WhatsAppBot:
    def __init__(self):
        options = webdriver.ChromeOptions()
        options.add_argument("--user-data-dir=./User_Data")
        self.driver = webdriver.Chrome(options=options)
        self.wait = WebDriverWait(self.driver, 30)
        
    def open_whatsapp(self):
        self.driver.get("https://web.whatsapp.com")
        print("[*] Scan QR code if prompted...")
        self.wait.until(
            EC.presence_of_element_located(
                (By.CSS_SELECTOR, '[data-testid="chat-list"]')
            )
        )
        print("[+] WhatsApp Web loaded")

    def send_message(self, contact: str, message: str):
        search_box = self.wait.until(
            EC.presence_of_element_located(
                (By.CSS_SELECTOR, '[data-testid="chat-list-search"]')
            )
        )
        search_box.clear()
        search_box.send_keys(contact)
        time.sleep(1)
        
        # Select contact
        contact_el = self.wait.until(
            EC.presence_of_element_located(
                (By.XPATH, f'//span[@title="{contact}"]')
            )
        )
        contact_el.click()
        time.sleep(0.5)
        
        # Type and send message
        msg_box = self.wait.until(
            EC.presence_of_element_located(
                (By.CSS_SELECTOR, '[data-testid="conversation-compose-box-input"]')
            )
        )
        msg_box.click()
        msg_box.send_keys(message)
        msg_box.send_keys(Keys.ENTER)
        print(f"[+] Message sent to {contact}")

    def bulk_message_from_csv(self, csv_path: str, message: str):
        with open(csv_path, "r") as f:
            reader = csv.reader(f)
            for row in reader:
                contact = row[0].strip()
                if contact:
                    self.send_message(contact, message)
                    time.sleep(2)  # Rate limiting

    def close(self):
        self.driver.quit()

# Usage
if __name__ == "__main__":
    bot = WhatsAppBot()
    bot.open_whatsapp()
    bot.send_message("John Doe", "Hey! Automated message from NeroBot 🤖")
    # bot.bulk_message_from_csv("contacts.csv", "Hello from NeroBot!")
    bot.close()`,
  },
  {
    id: "telegram-bot",
    title: "Telegram Content Bot",
    language: "Python",
    platform: "Telegram",
    description:
      "Schedules and publishes content to Telegram channels with auto-formatting and media support.",
    features: [
      "Scheduled post publishing",
      "Markdown formatting",
      "Image + caption posts",
      "Subscriber count tracking",
      "Inline keyboard buttons",
    ],
    code: `from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import (
    Application, CommandHandler, CallbackQueryHandler, ContextTypes
)
import asyncio
from datetime import datetime, timedelta

TOKEN = "YOUR_BOT_TOKEN"
CHANNEL_ID = "@your_channel"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [
            InlineKeyboardButton("📊 Stats", callback_data="stats"),
            InlineKeyboardButton("📅 Schedule", callback_data="schedule"),
        ],
        [InlineKeyboardButton("🚀 Post Now", callback_data="post_now")],
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text(
        "**NeroBot Control Panel**\\n\\n"
        "Select an action:",
        reply_markup=reply_markup,
        parse_mode="Markdown"
    )

async def button_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    
    if query.data == "stats":
        chat = await context.bot.get_chat(CHANNEL_ID)
        count = await context.bot.get_chat_member_count(CHANNEL_ID)
        await query.edit_message_text(
            f"📊 **Channel Stats**\\n\\n"
            f"Channel: {chat.title}\\n"
            f"Subscribers: {count:,}",
            parse_mode="Markdown"
        )
    elif query.data == "post_now":
        await context.bot.send_message(
            chat_id=CHANNEL_ID,
            text="🔥 **New Drop from Nerochaze Creative Labs**\\n\\n"
                 "Advanced AI prompt just released. Check it out.",
            parse_mode="Markdown"
        )
        await query.edit_message_text("✅ Post published successfully!")

async def schedule_post(app: Application, message: str, delay_minutes: int):
    await asyncio.sleep(delay_minutes * 60)
    await app.bot.send_message(
        chat_id=CHANNEL_ID,
        text=message,
        parse_mode="Markdown"
    )

def main():
    app = Application.builder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CallbackQueryHandler(button_handler))
    print("[+] NeroBot is running...")
    app.run_polling()

if __name__ == "__main__":
    main()`,
  },
  {
    id: "api-scraper",
    title: "API Data Scraper",
    language: "Python",
    platform: "General",
    description:
      "High-performance async scraper with proxy rotation, rate limiting, and structured JSON output.",
    features: [
      "Async requests (aiohttp)",
      "Proxy rotation pool",
      "Retry with exponential backoff",
      "JSON + CSV export",
      "Rate limit detection",
    ],
    code: `import aiohttp
import asyncio
import json
import csv
import random
from typing import Optional

PROXIES = [
    "http://proxy1:port",
    "http://proxy2:port",
]

HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; NeroBot/1.0)",
    "Accept": "application/json",
}

class AsyncScraper:
    def __init__(self, concurrency: int = 10, delay: float = 0.5):
        self.semaphore = asyncio.Semaphore(concurrency)
        self.delay = delay
        self.results = []

    async def fetch(
        self,
        session: aiohttp.ClientSession,
        url: str,
        retries: int = 3
    ) -> Optional[dict]:
        proxy = random.choice(PROXIES) if PROXIES[0] != "http://proxy1:port" else None
        
        for attempt in range(retries):
            try:
                async with self.semaphore:
                    await asyncio.sleep(self.delay * (attempt + 1))
                    async with session.get(
                        url,
                        headers=HEADERS,
                        proxy=proxy,
                        timeout=aiohttp.ClientTimeout(total=10)
                    ) as response:
                        if response.status == 429:
                            wait = int(response.headers.get("Retry-After", 30))
                            print(f"[!] Rate limited. Waiting {wait}s")
                            await asyncio.sleep(wait)
                            continue
                        
                        response.raise_for_status()
                        return await response.json()
                        
            except Exception as e:
                print(f"[!] Attempt {attempt+1} failed for {url}: {e}")
                if attempt == retries - 1:
                    return None

    async def scrape_all(self, urls: list[str]):
        async with aiohttp.ClientSession() as session:
            tasks = [self.fetch(session, url) for url in urls]
            results = await asyncio.gather(*tasks)
            self.results = [r for r in results if r is not None]
        return self.results

    def export_json(self, filepath: str):
        with open(filepath, "w") as f:
            json.dump(self.results, f, indent=2)
        print(f"[+] Exported {len(self.results)} records to {filepath}")

    def export_csv(self, filepath: str):
        if not self.results:
            return
        keys = self.results[0].keys()
        with open(filepath, "w", newline="") as f:
            writer = csv.DictWriter(f, fieldnames=keys)
            writer.writeheader()
            writer.writerows(self.results)
        print(f"[+] Exported CSV to {filepath}")

# Usage
async def main():
    urls = [f"https://api.example.com/data?page={i}" for i in range(1, 51)]
    scraper = AsyncScraper(concurrency=5, delay=0.3)
    await scraper.scrape_all(urls)
    scraper.export_json("output.json")
    scraper.export_csv("output.csv")

asyncio.run(main())`,
  },
];
