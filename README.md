# 🐝 BeautifulBeeBot

BeautifulBeeBot is an intelligent, witty, and secure Telegram bot powered by the **Google Gemini 3 API**. It features custom system instructions to provide helpful, personality-driven responses while maintaining a focus on user security.

## 🚀 Features
* **Advanced AI:** Powered by `gemini-3-flash-preview` for lightning-fast, creative responses.
* **Security Lock:** Includes middleware to restrict access solely to the authorized owner.
* **Session Memory:** maintains context during conversations for a natural flow.
* **Process Management:** Runs 24/7 using PM2.

## 🛠️ Tech Stack
* **Node.js** - Runtime environment.
* **Telegraf.js** - Telegram Bot API framework.
* **Google Generative AI** - The "brain" of the bot.
* **Dotenv** - For secure environment variable management.

## 📦 Installation & Setup

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/stanleylail/beautifulbeebot.git
   cd beautifulbeebot
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Configure Environment Variables:**
   Create a \`.env\` file in the root directory and add your keys:
   \`\`\`env
   BOT_TOKEN=your_telegram_bot_token
   GEMINI_API_KEY=your_gemini_api_key
   MY_TELEGRAM_ID=your_numerical_id
   \`\`\`

4. **Run the bot:**
   \`\`\`bash
   node index.js
   \`\`\`

## 🛡️ Security
This repository includes a \`.gitignore\` file to ensure that sensitive API keys and personal IDs are never uploaded to the public cloud. 

---
*Created by Stanley Lail - 2026*
