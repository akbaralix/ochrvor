import TelegramBot from "node-telegram-bot-api";

// TOKEN
const token = "7991412037:AAGnrpBhZglbioad1tKnPT7s98E1Mv2ur2Y";
const bot = new TelegramBot(token, { polling: true });

const ADMIN = 8279767542;

// --- BAZA: Rasm, MB va Vaqtlar ---

const randomGrils = [
  "https://t.me/analitika_pornkhabinri/16",
  "https://t.me/dianaridervip/34",
  "https://t.me/dianaridervip/27",
];

const Uzbekcha = [
  {
    url: "https://avatars.mds.yandex.net/get-vthumb/3920277/5724424c3c21eeafd7d4992e27c44d43/800x450",
    mb: "45.2",
    time: "05:12",
  },
  {
    url: "https://img.telemetr.io/c/29eLME/5211226039945128241?ty=l",
    mb: "112.0",
    time: "12:45",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKiztCBe42uhfnw6oUbOKRMl0IFMR2400qEg&s",
    mb: "28.5",
    time: "03:20",
  },
];

const Lezbian = [
  {
    url: "https://ei.phncdn.com/videos/202402/01/447460351/original/(m=qXVP4NZbeGNdHgaaaa)(mh=C7F9EDVSSm8pcvPm)0.jpg",
    mb: "89.4",
    time: "09:15",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0YMWfGFsNe_DoBf5PQmJKMLsj6Wt6MOnJOQ&s",
    mb: "67.1",
    time: "07:30",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGdVDyW2bVKEtYfJDK_IMUe3ny89Xc669LCw&s",
    mb: "120.5",
    time: "15:00",
  },
];

const randomvideos = [
  { url: "https://t.me/eyrotik/218", mb: "34.2", time: "04:10" },
  { url: "https://t.me/eyrotik/213", mb: "56.0", time: "06:22" },
  { url: "https://t.me/eyrotik/234", mb: "12.5", time: "01:45" },
  { url: "https://t.me/eyrotik/209", mb: "98.7", time: "11:30" },
];

// --- MARKUP ---

const getChannelMarkup = () => ({
  inline_keyboard: [
    [
      {
        text: "➕ 1-Kanalga qo'shilish",
        url: "https://t.me/+Il3CHPcFrYxjNjky",
      },
    ],
    [
      {
        text: "➕ 2-Kanalga qo'shilish",
        url: "https://t.me/patrickstarsrobot?start=907402803",
      },
    ],
    [{ text: "✅ Tekshirish va Ko'rish", callback_data: "check_subscription" }],
  ],
});

const mainMenu = {
  keyboard: [
    ["🇺🇿 Uzbekcha seks"],
    ["🇷🇺 Ruscha", "🇺🇸 Inglizcha"],
    ["Lezbian 🫦"],
    ["🔥 Top Videolar", "Random 🎲"],
  ],
  resize_keyboard: true,
};

// --- ASOSIY MANTIQ ---

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  if (!text) return;

  try {
    // 1. START
    if (text === "/start") {
      bot
        .setMessageReaction(chatId, msg.message_id, {
          reaction: [{ type: "emoji", emoji: "🍌" }],
        })
        .catch(() => {});
      const randomStartImg =
        randomGrils[Math.floor(Math.random() * randomGrils.length)];
      await bot.sendPhoto(chatId, randomStartImg, {
        caption: `*Salom, ${msg.from.first_name}* 👋\n\n🔞 *Kategoriyani tanlang va videolarni to'g'ridan-to'g'ri ko'ring.*\n\n👁 _Hozir botdan 3,950 kishi foydalanmoqda..._`,
        reply_markup: mainMenu,
        parse_mode: "Markdown",
      });
    }

    // 2. LEZBIAN
    else if (text === "Lezbian 🫦") {
      const item = Lezbian[Math.floor(Math.random() * Lezbian.length)];
      await bot.sendPhoto(chatId, item.url, {
        caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n🔒 _Videoni yuklash uchun homiy kanallarga obuna bo'ling_ ✅ *Tekshirish va Ko'rish* _ni bosing_`,
        reply_markup: getChannelMarkup(),
        parse_mode: "Markdown",
      });
    }

    // 3. UZBEKCHA
    else if (text === "🇺🇿 Uzbekcha seks") {
      const item = Uzbekcha[Math.floor(Math.random() * Uzbekcha.length)];
      await bot.sendPhoto(chatId, item.url, {
        caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n🔒 _Videoni yuklash uchun homiy kanallarga obuna bo'ling_ ✅ *Tekshirish va Ko'rish* _ni bosing_`,
        reply_markup: getChannelMarkup(),
        parse_mode: "Markdown",
      });
    }

    // 4. RANDOM VA BOSHQA MATNLAR
    else {
      const loadingMsg = await bot.sendMessage(
        chatId,
        "🔍 *Video bazadan qidirilmoqda...*",
        { parse_mode: "Markdown" }
      );
      setTimeout(async () => {
        try {
          if (loadingMsg)
            await bot.deleteMessage(chatId, loadingMsg.message_id);
          const item =
            randomvideos[Math.floor(Math.random() * randomvideos.length)];
          await bot.sendPhoto(chatId, item.url, {
            caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n🔒 _Videoni yuklash uchun homiy kanallarga obuna bo'ling_ ✅ *Tekshirish va Ko'rish* _ni bosing_`,
            reply_markup: getChannelMarkup(),
            parse_mode: "Markdown",
          });
        } catch (e) {}
      }, 1500);
    }
  } catch (error) {
    console.error("Xato:", error.message);
  }
});

// CALLBACK
bot.on("callback_query", async (query) => {
  const chatId = query.message.chat.id;
  const messageId = query.message.message_id;

  if (query.data === "check_subscription") {
    await bot.answerCallbackQuery(query.id, {
      text: "❌ Xato! Hali hamma kanallarga a'zo bo'lmadingiz.",
      show_alert: true,
    });

    bot
      .editMessageCaption(
        `❌ *Obuna tasdiqlanmadi!* \n\nIltimos, yuqoridagi kanallarga a'zo bo'ling va pastdagi tugmani qayta bosing.`,
        {
          chat_id: chatId,
          message_id: messageId,
          reply_markup: getChannelMarkup(),
          parse_mode: "Markdown",
        }
      )
      .catch(() => {});
  }
});

process.on("uncaughtException", (err) => console.log("Kritik xato:", err));
console.log("🔥 Bot 100% tayyor holatda ishga tushdi!");
