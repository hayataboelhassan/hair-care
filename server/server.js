import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// بيانات حساب واتساب من Meta
const PHONE_NUMBER_ID = "845621958636349";
const ACCESS_TOKEN ="EAAanMWqU5skBP21Eo3QXjCxVBt6o1FIRKnTii325cVLWXuD4gC390Y9sGH7ZAqhYekU7yTfCQMBbUZAasjJUxvj3WMDW7xa6cKFOJtC5tV3Nz6HjSgJvxDloasurNdx6btG7d9YwZBEl5DgKfLeJgzsqAVLhIvw4VaRsgGw2jJPTAS0geKLOcH4Xrjcl9bXIGYPGvWnnCgsqQnbLZA0PnYdDbpAq1UZAY9JPJ36giZAZBZBoYXhFepZABA8I7pnGErWQZAG9zHZBNl84ZAVCcgqr5BHY"
app.post("/api/send-order", async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    await axios.post(
      `https://graph.facebook.com/v18.0/${PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: "whatsapp",
       to: "201117270642", // رقم العميل اللي هيستقبل الرسالة بصيغة دولية
        type: "text",
        text: {
          body: `🛍️ تم استلام طلب جديد!\n\nالاسم: ${name}\nالإيميل: ${email}\nرقم الهاتف: ${phone}`,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({ message: "✅ تم إرسال الطلب بنجاح إلى واتساب" });
  } catch (error) {
    console.error("❌ خطأ أثناء الإرسال:", error.response?.data || error.message);
    res.status(500).json({ message: "حدث خطأ أثناء الإرسال" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
