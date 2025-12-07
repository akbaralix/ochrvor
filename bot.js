import TelegramBot from "node-telegram-bot-api";

const token = "7991412037:AAGnrpBhZglbioad1tKnPT7s98E1Mv2ur2Y";

const channnel = {
  inline_keyboard: [
    [
      {
        text: "➕ Qoshilish",
        url: "https://t.me/patrickstarsrobot?start=907402803",
      },
    ],
    [{ text: "➕ Qoshilish", url: "https://t.me/+Il3CHPcFrYxjNjky" }],
    [{ text: "✅ Tekshirish", callback_data: "check" }], // ✔ to'g'rilandi
  ],
};

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  if (text === "/start") {
    bot.sendMessage(
      chatId,
      `*Salom* ${msg.from.first_name} *kino kodini kiriting.*`,
      {
        reply_markup: {
          keyboard: [
            ["Uzbekcha seks"],
            ["Qozoqcha seks", "Turkcha seks"],
            ["Ruscha seks", "Inglizcha seks"],
            ["Lezbianka", "GEY"],
          ],
          resize_keyboard: true,
        },

        parse_mode: "Markdown",
      }
    );
  }

  bot.sendMessage(
    chatId,
    `*Botdan foydalanishdan oldin kanallarga qoshiling va ✅ Tekshrish tugmasni  bosing*`,
    {
      reply_markup: channnel,
      parse_mode: "Markdown",
    }
  );
});

bot.on("callback_query", (msg) => {
  const chatId = msg.message.chat.id;
  const messageId = msg.message.message_id; // oldingi xabar ID sini olamiz
  const data = msg.data;

  if (data === "check") {
    // Oldingi xabarni o'chirish
    bot.deleteMessage(chatId, messageId).catch((err) => console.log(err));

    // Yangi xabarni yuborish
    bot.sendMessage(
      chatId,
      `*Bo'tdan toliq foydalanish uchun bot bergan barcha kanallarga qoshilishingiz shart❗*`,
      {
        reply_markup: channnel,
        parse_mode: "Markdown",
      }
    );
  }
});

export default bot;
