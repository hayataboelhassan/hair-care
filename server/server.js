import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// بيانات حساب واتساب من Meta
const PHONE_NUMBER_ID = "845621958636349";
const ACCESS_TOKEN ="AAanMWqU5skBP6B9voeuRLVXixKZCriwUpHKwddLyHJGOl6ZClZAy6RfvNamqtDZCoCvzg4Qldyq5l4PgqoZAzJb9OCxFVndyFz752lRwvhPhfVb7ERDFEl0Cg9uirspTpoJSd14whWWduwiGqKByf8ejbZBZCpaXdXvDbcobEcUC388Ol7RD59pJ69p9q2F9wkIIMDNk9qJ2WPTTHFmbfjfJjCDdgWr9JWfGg9YtodWoXdkStZBFpKMWuip2qFs6mixLTZAo2oZAzINZB1wjvk14b7"
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
