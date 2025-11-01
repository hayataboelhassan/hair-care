import React, { useState } from "react";

function Order() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // لو فاضيين
    if (!name || !phone) {
      setMessage("⚠️ من فضلك املأ البيانات المطلوبة");
      return;
    }

    // رقم صاحب المنتج
    const ownerPhone = "201126134052"; // بدون +

    // كتابة الرسالة اللي هتروح للواتساب
    const text = `طلب جديد من الموقع:
- الاسم: ${name}
- البريد: ${email}
- رقم العميل: ${phone}`;

    // تشفير الرسالة
    const encodedText = encodeURIComponent(text);

    // رابط واتساب
    const whatsappUrl = `https://wa.me/${ownerPhone}?text=${encodedText}`;

    // فتح الواتساب
    window.open(whatsappUrl, "_blank");

    setMessage("✅ تم إرسال الطلب الى واتساب!");
  };

  return (
    <section dir="rtl" className="p-10 bg-white" id="order">
      <div className="w-full flex flex-col items-center justify-center border-2 border-[rgb(163,3,165)] p-10 rounded-xl text-center">
        
        <h2 className="text-[rgb(13,19,79)] text-4xl mb-2">عرض خاص! 🚨</h2>
        <p className="text-[rgb(13,19,79)] text-2xl mb-5">اطلب المنتج قبل نفاد العرض!</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="الاسم"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="flex-1 p-3 rounded-md border border-gray-300 text-[rgb(13,19,79)]"
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 p-3 rounded-md border border-gray-300 text-[rgb(13,19,79)]"
            />
          </div>

          <input
            type="tel"
            placeholder="رقم التليفون"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full p-3 rounded-md border border-gray-300 text-[rgb(13,19,79)]"
          />

          <button
            type="submit"
            className="w-full p-3 bg-[rgb(13,19,79)] text-white rounded-md transition-colors"
          >
            اطلب الآن
          </button>
        </form>

        {message && (
          <p className="text-green-500 font-bold mt-4">{message}</p>
        )}
      </div>
    </section>
  );
}

export default Order;
