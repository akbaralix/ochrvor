import TelegramBot from "node-telegram-bot-api";

const token = "7991412037:AAGnrpBhZglbioad1tKnPT7s98E1Mv2ur2Y";
const bot = new TelegramBot(token, { polling: true });

const JOIN_LINK = "https://t.me/patrickstarsrobot?start=907402803";

// Marketing uchun tasodifiy raqamlar generatori
const getRandMB = () => (Math.random() * (90 - 10) + 10).toFixed(1);
const getRandTime = () =>
  `0${Math.floor(Math.random() * 9) + 1}:${
    Math.floor(Math.random() * 50) + 10
  }`;

const randomGrils = [
  "https://t.me/analitika_pornkhabinri/16",
  "https://t.me/dianaridervip/34",
  "https://t.me/dianaridervip/27",
  // "alicadelish.jpg" olib tashlandi, chunki u crash berishi mumkin
];

const getChannelMarkup = (mb) => ({
  inline_keyboard: [
    [{ text: `🔓 Videoni ochish (${mb} MB)`, url: JOIN_LINK }],
    [{ text: "✅ Tekshirish va Ko'rish", callback_data: "check_subscription" }],
  ],
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    try {
      await bot.setMessageReaction(chatId, msg.message_id, {
        reaction: [{ type: "emoji", emoji: "🍌" }],
        is_big: true,
      });
    } catch (e) {}

    const randomIndex = Math.floor(Math.random() * randomGrils.length);

    bot
      .sendPhoto(chatId, randomGrils[randomIndex], {
        caption: `*Salom, ${msg.from.first_name}* 👋\n\n🔞 *Kategoriyani tanlang va videolarni to'g'ridan-to'g'ri ko'ring.*\n\n👁 _Hozir botdan 3,697 kishi foydalanmoqda..._`,
        reply_markup: {
          keyboard: [
            ["🇺🇿 Uzbekcha (Eksklyuziv)"],
            ["🇷🇺 Ruscha", "🇺🇸 Inglizcha"],
            ["🔥 Top Videolar", "Random 🎲"],
          ],
          resize_keyboard: true,
        },
        parse_mode: "Markdown",
      })
      .catch((e) => console.log("Rasm yuborishda xato"));
  } else if (text) {
    // 3. FAKE LOADING
    const mb = getRandMB();
    const time = getRandTime();

    const loadingMsg = await bot
      .sendMessage(chatId, "🔍 *Video bazadan qidirilmoqda...*", {
        parse_mode: "Markdown",
      })
      .catch(() => null);

    setTimeout(async () => {
      if (loadingMsg) {
        await bot.deleteMessage(chatId, loadingMsg.message_id).catch(() => {});
      }

      bot
        .sendMessage(
          chatId,
          `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${mb} MB\n⏱ *Davomiyligi:* ${time}\n\n🔒 _Videoni yuklash uchun homiy kanalga obuna bo'ling va "Tekshirish" tugmasini bosing._`,
          {
            reply_markup: getChannelMarkup(mb),
            parse_mode: "Markdown",
          }
        )
        .catch((e) => console.log("Xabar yuborishda xato"));
    }, 1500);
  }
});

bot.on("callback_query", async (query) => {
  const chatId = query.message.chat.id;
  const messageId = query.message.message_id;

  if (query.data === "check_subscription") {
    // Alert bilan ko'rsatish (kuchliroq ta'sir qiladi)
    await bot
      .answerCallbackQuery(query.id, {
        text: "❌ Obuna topilmadi! Iltimos, kanalga a'zo bo'ling.",
        show_alert: true,
      })
      .catch(() => {});

    // Xabarni yangilab qo'yish (Crash bo'lmasligi uchun try-catch ichida)
    try {
      await bot.editMessageCaption(
        `❌ *Siz hali kanalga a'zo bo'lmadingiz!* \n\nIltimos, "🔓 Videoni ochish" tugmasini bosing va kanalga qo'shilgach qayta urining.`,
        {
          chat_id: chatId,
          message_id: messageId,
          reply_markup: getChannelMarkup(getRandMB()),
          parse_mode: "Markdown",
        }
      );
    } catch (e) {}
  }
});

// Bot o'chib qolmasligi uchun global xato ushlagich
process.on("uncaughtException", (err) => {
  console.error("Kutilmagan xato:", err);
});

export default bot;
