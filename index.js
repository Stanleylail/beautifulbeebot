require('node:dns').setDefaultResultOrder('ipv4first');const { Telegraf } = require('telegraf');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

// 1. Initialize the Bot and AI
const bot = new Telegraf(process.env.BOT_TOKEN);
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 2. Setup the Gemini Model
const model = genAI.getGenerativeModel({ 
  model: "gemini-3-flash-preview",
  systemInstruction: "You are a helpful and witty assistant. You are no longer just 'listening'—you are thinking and responding with intelligence!"
});

bot.on('text', async (ctx) => {
  try {
    // Show that the bot is active
    await ctx.sendChatAction('typing');
    
    // Send message to Gemini
    const result = await model.generateContent(ctx.message.text);
    const response = await result.response;
    const aiText = response.text();

    // Send the actual AI response
    await ctx.reply(aiText);
    
  } catch (error) {
    console.error("ERROR:", error);
    ctx.reply("Bzzzt! I hit a snag. Check the terminal logs!");
  }
});

bot.launch().then(() => console.log('>>> The AI is fully awake!'));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
