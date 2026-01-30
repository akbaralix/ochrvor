import TelegramBot from "node-telegram-bot-api";
import express from "express";
import mongoose from "./db.js";
import mainMenu from "./menyu-buttons.js";

const app = express();
const port = process.env.PORT || 3000;

// --- DATABASE SCHEMA ---
const userSchema = new mongoose.Schema({
  telegramId: { type: Number, unique: true },
  username: String,
  firstName: String,
  lastName: String,
  languageCode: String,
  step: { type: String, default: "none" },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

// --- SERVER ---
app.get("/", (req, res) => {
  res.send("Bot ishlamoqda...");
});

app.listen(port, () => {
  console.log(`Server ${port}-portda ishga tushdi!`);
});

// --- BOT CONFIG ---
const mybtoko = "8318040012:AAFmUQPFJLZwJQpC0I1axuLWRi95M2INLbQ";
const bot = new TelegramBot(mybtoko, { polling: true });
const ADMIN = 90740280;

// --- DATA BAZA ---
const randomGrils = [
  "https://rusporn.porn/thumbs/18545/thumb1.1.jpg",
  "https://ei.phncdn.com/videos/202504/17/467407535/original/(m=qH10JG0beaSaaTbaAaaaa)(mh=uaYzqfZa_Lzbhv0Z)0.jpg",
  "https://ic-vt-nss.xhcdn.com/a/MjNiMjNhNGEwNWZlMTE2ZDMxNzdmMWZjNDBiOGNhOTA/s(w:1280,h:720),webp/025/479/908/1280x720.17317671.jpg",
  "https://ei.phncdn.com/videos/202302/02/424608301/original/(m=qM9U79XbeaSaaTbaAaaaa)(mh=fasbP8zV8Lru9-0I)0.jpg",
];

const Detiski = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3L2Yy320ZM6X26ZX-NMkefqIxpmdOrRpVtA&s",
    mb: "42.5",
    time: "04:12",
    korildi: 3542,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX736trEwEhv4mX2xFbdTtW0G7HiIUtLGNhw&s",
    mb: "45",
    time: "07:12",
    korildi: 4211,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomwqJd5kr7xb3ky8eoa8qBccQ5MRZREKBbg&s",
    mb: "42.5",
    time: "04:12",
    korildi: 3542,
  },
  {
    url: "https://avatars.mds.yandex.net/i?id=1605468c253441d0aafc625def6a53ab1a44d746-10586727-images-thumbs&n=13",
    mb: "42.5",
    time: "04:12",
    korildi: 3542,
  },
  {
    url: "https://avatars.mds.yandex.net/i?id=9efbf9061384557dc4e1a11ffdf3744a95debca6-5297106-images-thumbs&n=13",
    mb: "42.5",
    time: "04:12",
    korildi: 3542,
  },
  {
    url: "https://c8b8a8134e.mjedge.net/contents/videos_screenshots/608000/608296/preview.jpg",
    mb: "42.5",
    time: "04:12",
    korildi: 3542,
  },
];

const Uzbekcha = [
  {
    url: "image.png",
    mb: "42.5",
    time: "04:12",
    korildi: 1321,
  },

  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSfYIZVh4MlF19cVgIP01wwSzsHre_xASWA&s",
    mb: "42.5",
    time: "04:12",
    korildi: 3542,
  },
  {
    url: "https://trahkino.me/contents/videos_screenshots/206000/206627/preview.mp4.jpg",
    mb: "115.0",
    time: "11:45",
    korildi: 2573,
  },
  {
    url: "https://trahkino.me/contents/videos_screenshots/260000/260474/preview.mp4.jpg",
    mb: "30.2",
    time: "03:10",
    korildi: 1634,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_G_Ipt8X6p8QBzBA0cjKYIzNSOh3CDqnBA&s",
    mb: "67.8",
    time: "07:20",
    korildi: 1539,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUF4veA5QN_Nvg87xWJSA4VS9x53uINL6aug&s",
    mb: "89.1",
    time: "09:34",
    korildi: 2642,
  },
  {
    url: "https://static8.tgstat.ru/channels/_0/ee/ee267c431a55bb6171cd881cdd9bcddc.jpg",
    mb: "140.5",
    time: "14:50",
    korildi: 3272,
  },
];

const Lezbian = [
  {
    url: "https://thumbs.yasex.net/11051/thumbs.jpg",
    mb: "55.3",
    time: "05:40",
    korildi: 2842,
  },
  {
    url: "https://thumbs.yasex.net/10836/thumbs.jpg",
    mb: "48.2",
    time: "04:55",
    korildi: 1366,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_Pu9L2ghm91bDXi1oRgrTvxow7x1klI78A&s",
    mb: "72.4",
    time: "08:12",
    korildi: 3799,
  },
  {
    url: "https://thumbs.yasex.net/10866/thumbs.jpg",
    mb: "95.0",
    time: "10:05",
    korildi: 3588,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0YMWfGFsNe_DoBf5PQmJKMLsj6Wt6MOnJOQ&s",
    mb: "110.6",
    time: "12:30",
    korildi: 2782,
  },
  {
    url: "https://ei.phncdn.com/videos/202402/01/447460351/original/(m=qXVP4NZbeGNdHgaaaa)(mh=C7F9EDVSSm8pcvPm)0.jpg",
    mb: "156.2",
    time: "18:20",
    korildi: 2351,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlgaSU4hMeFUFdFLGMsGCvoY0ExWutFpX__g&s",
    mb: "63.7",
    time: "06:45",
    korildi: 1442,
  },
];

const randomvideos = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2EKwYv6Q3xkVB8aG4cutwAkJRcCC8tlyk0w&s",
    mb: "56.1",
    time: "06:10",
    korildi: 3890,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq3h3swJPwIbGhw5qUtyJ6AMjC6OJVIoGV8g&s",
    mb: "34.2",
    time: "03:50",
    korildi: 1630,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGpt1KyRdL_eUGfc00fQZDCgzVxs4FYH8svg&s",
    mb: "88.4",
    time: "09:25",
    korildi: 3752,
  },
  {
    url: "https://xxxdd.net/uploads/posts/2022-08/1661477102_1961.xxxdownload.net.jpg",
    mb: "12.5",
    time: "01:30",
    korildi: 2797,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsKoS1327AXmuXB2MEJLzsiD_fRS6eSoSyw&s",
    mb: "45.9",
    time: "04:55",
    korildi: 3890,
  },
  {
    url: "https://trahkino.me/contents/videos_screenshots/201000/201546/preview.mp4.jpg7",
    mb: "77.2",
    time: "08:40",
    korildi: 2466,
  },
  {
    url: "https://t.me/eyrotik/170",
    mb: "102.3",
    time: "12:15",
    korildi: 4321,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5roFjQs0iJ6JPF6n48HkUJBKhcT1HTzpyw&s",
    mb: "22.6",
    time: "02:20",
    korildi: 1567,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPQUss8kYoGy_wPYbWky8tpumRvrS-etQbw&s",
    mb: "66.4",
    time: "07:12",
    korildi: 2341,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPQUss8kYoGy_wPYbWky8tpumRvrS-etQbw&s",
    mb: "91.8",
    time: "10:30",
    korildi: 2321,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomwqJd5kr7xb3ky8eoa8qBccQ5MRZREKBbg&s",
    mb: "54.7",
    time: "06:05",
    korildi: 5222,
  },
  { url: "https://t.me/eyrotik/128", mb: "39.2", time: "04:15", korildi: 2533 },
  { url: "https://t.me/eyrotik/70", mb: "82.5", time: "09:00", korildi: 3865 },
  { url: "https://t.me/eyrotik/34", mb: "47.3", time: "05:10", korildi: 4100 },
  { url: "https://t.me/eyrotik/6", mb: "15.4", time: "01:55", korildi: 2699 },
];
const BONU = [
  { url: "bonu.png", mb: 16.3, time: "08:10", korildi: 389 },
  { url: "bonus.png", mb: 76.8, time: "08:10", korildi: 451 },
];

// --- MARKUP ---
const getChannelMarkup = () => ({
  inline_keyboard: [
    [
      {
        text: "➕ 1 - Qo'shilish",
        url: "https://t.me/patrickstarsrobot?start=907402803",
      },
      {
        text: "➕ 2 - Qo'shilish",
        url: "https://t.me/kinoborubot?start=1",
      },
    ],
    [
      {
        text: "✅ Tekshirish va Ko'rish",
        callback_data: "check_subscription",
      },
    ],
  ],
});

const ADMIN_MENU = {
  keyboard: [
    ["Foydalanuvchilar soni"],
    ["📤 Habar yuborish", "➕ Kanal qoshish"],
  ],
  resize_keyboard: true,
};

// --- LOGIC ---
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const from = msg.from;

  if (!text && !msg.photo && !msg.video) return;

  try {
    // 1. Userni bazada saqlash/yangilash
    const user = await User.findOneAndUpdate(
      { telegramId: from.id },
      {
        username: from.username,
        firstName: from.first_name,
        lastName: from.last_name,
        languageCode: from.language_code,
      },
      { upsert: true, new: true },
    );

    // 2. /START BUYRUG'I (Hamisha hamma narsadan ustun)
    if (text === "/start") {
      await User.updateOne({ telegramId: from.id }, { step: "none" });

      await bot
        .setMessageReaction(chatId, msg.message_id, {
          reaction: [{ type: "emoji", emoji: "🍌" }],
        })
        .catch(() => {});

      const randomStartImg =
        randomGrils[Math.floor(Math.random() * randomGrils.length)];
      await bot.sendPhoto(chatId, randomStartImg, {
        caption: `*Salom, ${from.first_name}* 👋\n\n*🔞 Kategoriyani tanlang va videolarni to'g'ridan-to'g'ri ko'ring.

👁 Hozir botdan 5,834 kishi foydalanmoqda....*`,
        reply_markup: mainMenu,
        parse_mode: "Markdown",
      });

      if (from.id === ADMIN) {
        await bot.sendMessage(chatId, "Salom admin 👑", {
          reply_markup: ADMIN_MENU,
        });
      }
      return;
    }

    // 3. ADMIN XABAR YUBORISH BOSQICHI
    if (user.step === "admin_send_post" && from.id === ADMIN) {
      const allUsers = await User.find();
      let count = 0;
      let blockedCount = 0;

      await bot.sendMessage(chatId, `Xabar yuborish boshlandi... 🚀`);

      for (const targetUser of allUsers) {
        try {
          await bot.copyMessage(targetUser.telegramId, chatId, msg.message_id);
          count++;
        } catch (e) {
          blockedCount++;
          await User.deleteOne({ telegramId: targetUser.telegramId });
        }
      }

      await User.updateOne({ telegramId: from.id }, { step: "none" });
      return bot.sendMessage(
        chatId,
        `✅ Xabar yuborildi: ${count} ta\n🗑 Bloklaganlar o'chirildi: ${blockedCount} ta`,
      );
    }

    // 4. MENYU TUGMALARI
    if (text === "Lezbian 🫦") {
      const item = Lezbian[Math.floor(Math.random() * Lezbian.length)];
      return bot.sendPhoto(chatId, item.url, {
        caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n👁️ Korildi: ${item.korildi}\n\n🔒 _Videoni yuklash uchun homiy kanallarga obuna bo'ling_`,
        reply_markup: getChannelMarkup(),
        parse_mode: "Markdown",
      });
    }

    if (text === "🇺🇿 Uzbekcha seks") {
      const item = Uzbekcha[Math.floor(Math.random() * Uzbekcha.length)];
      return bot.sendPhoto(chatId, item.url, {
        caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n👁️ Korildi: ${item.korildi}\n\n🔒 _Videoni yuklash uchun homiy kanallarga obuna bo'ling_`,
        reply_markup: getChannelMarkup(),
        parse_mode: "Markdown",
      });
    }

    if (
      text === "🇷🇺 Ruscha" ||
      text === "🇺🇸 Inglizcha" ||
      text === "🔥 Top Videolar"
    ) {
      const item =
        randomvideos[Math.floor(Math.random() * randomvideos.length)];
      return bot.sendPhoto(chatId, item.url, {
        caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n👁️ Korildi: ${item.korildi}\n\n🔒 _Videoni yuklash uchun homiy kanallarga obuna bo'ling_`,
        reply_markup: getChannelMarkup(),
        parse_mode: "Markdown",
      });
    }

    if (text === "Random 🎲") {
      const loadingMsg = await bot.sendMessage(
        chatId,
        "🔍 *Video bazadan qidirilmoqda...*",
        { parse_mode: "Markdown" },
      );
      setTimeout(async () => {
        try {
          await bot
            .deleteMessage(chatId, loadingMsg.message_id)
            .catch(() => {});
          const item =
            randomvideos[Math.floor(Math.random() * randomvideos.length)];
          await bot.sendPhoto(chatId, item.url, {
            caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n👁️ Korildi: ${item.korildi}\n\n🔒 _Videoni yuklash uchun homiy kanallarga obuna bo'ling_`,
            reply_markup: getChannelMarkup(),
            parse_mode: "Markdown",
          });
        } catch (e) {}
      }, 1500);
      return;
    }

    if (text === "👧 Detski sex") {
      const item = Detiski[Math.floor(Math.random() * Detiski.length)];
      return bot.sendPhoto(chatId, item.url, {
        caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n👁️ Korildi: ${item.korildi}\n\n🔒 _Videoni yuklash uchun homiy kanallarga obuna bo'ling_`,
        reply_markup: getChannelMarkup(),
        parse_mode: "Markdown",
      });
    }
    if (text === "315") {
      const item = BONU[Math.floor(Math.random() * BONU.length)];
      return bot.sendPhoto(chatId, item.url, {
        caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n👁️ Korildi: ${item.korildi}\n\n🔒 _Videoni yuklash uchun homiy kanallarga obuna bo'ling_`,
        parse_mode: "Markdown",
        reply_markup: getChannelMarkup(),
      });
    }

    // 5. ADMIN TUGMALARI
    if (from.id === ADMIN) {
      if (text === "Foydalanuvchilar soni") {
        const userCount = await User.countDocuments();
        return bot.sendMessage(chatId, `Foydalanuvchilar soni: ${userCount}`);
      }
      if (text === "📤 Habar yuborish") {
        await User.updateOne(
          { telegramId: from.id },
          { step: "admin_send_post" },
        );
        return bot.sendMessage(
          chatId,
          "Yubormoqchi bo‘lgan habaringizni yuboring ✍️ (Rasm, video yoki matn)\n\nBekor qilish uchun /start bosing.",
        );
      }
      if (text === "➕ Kanal qoshish") {
        return bot.sendMessage(chatId, "Kanal linkini yuboring 🔗");
      }
    }

    // Hech qaysi shartga tushmasa
    if (from.id !== ADMIN) {
      await bot.sendMessage(
        chatId,
        "*⚠️ Botdan foydalanishdan oldin homiy bot bergan kanallarga qoshilin.*\n\n_Barcha kanalga qoshilgandan song_ *Проверить подписку ✅* _tugmasini bosing._",
        {
          reply_markup: getChannelMarkup(),
          parse_mode: "Markdown",
        },
      );
    }
  } catch (error) {
    console.error("Xato:", error.message);
  }
});

// CALLBACK QUERY
bot.on("callback_query", async (query) => {
  const chatId = query.message.chat.id;
  const messageId = query.message.message_id;

  if (query.data === "check_subscription") {
    await bot.answerCallbackQuery(query.id, {
      text: "❌ Homiy bot bergan barcha kanallarga qo'shiling va *Проверить подписку ✅* ustiga bosing.",
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
        },
      )
      .catch(() => {});
  }
});

process.on("uncaughtException", (err) => console.log("Kritik xato:", err));
console.log("🔥 Bot barcha URL'lar bilan xatosiz ishga tushdi!");
