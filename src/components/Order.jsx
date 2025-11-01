import React, { useState } from "react";

function Order() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone) {
      setMessage("⚠️ من فضلك املأ البيانات المطلوبة");
      return;
    }

    const ownerPhone = "201126134052";

    const text = `طلب جديد من الموقع:
- الاسم: ${name}
- البريد: ${email}
- رقم العميل: ${phone}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${ownerPhone}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");

    setMessage("✅ تم إرسال الطلب الى واتساب!");
  };

  return (
    <section
      dir="rtl"
      className="p-10 bg-white text-[rgb(13,19,79)] flex flex-col md:flex-row items-center justify-center gap-10"
      id="order"
    >
      {/* النص */}
      <div className="md:w-1/2 text-center md:text-right mb-20">
  <h2 className="text-4xl font-bold mb-8 text-[rgb(163,3,165)]">
    لا تفوّتي العرض الحصري اليوم! 💖
  </h2>
  <p className="text-2xl mb-5">
    احصلي على شعر ناعم، لامع، وخالٍ من التقصف مع <span className="text-[rgb(163,3,165)] font-semibold">Princess Oil</span> ✨
  </p>
  <p className="text-lg text-gray-700 leading-relaxed">
    سجّلي بياناتك الآن لتستفيدي من <span className="font-bold text-[rgb(163,3,165)]">خصم خاص لفترة محدودة</span> 
    وتوصيل سريع حتى باب البيت 🚚  
    لا تنتظري حتى ينتهي العرض – الجمال لا ينتظر! 💅
  </p>
</div>

      {/* الفورم */}
      <div className="md:w-1/2 w-full border-2 border-[rgb(163,3,165)] p-10 rounded-xl shadow-[0_10px_25px_rgba(242,105,244,0.5)] ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
          {/* الاسم */}
          <div className="flex flex-col text-right">
            <label className="mb-1 font-semibold">الاسم *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="p-3 rounded-md border border-gray-300 text-[rgb(13,19,79)] focus:outline-none focus:border-[rgb(163,3,165)]"
            />
          </div>

          {/* البريد الإلكتروني */}
          <div className="flex flex-col text-right">
            <label className="mb-1 font-semibold">البريد الإلكتروني *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-md border border-gray-300 text-[rgb(13,19,79)] focus:outline-none focus:border-[rgb(163,3,165)]"
            />
          </div>

          {/* رقم التليفون */}
          <div className="flex flex-col text-right">
            <label className="mb-1 font-semibold">رقم التليفون *</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="p-3 rounded-md border border-gray-300 text-[rgb(13,19,79)] focus:outline-none focus:border-[rgb(163,3,165)]"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-[rgb(13,19,79)] text-white rounded-md hover:bg-[rgb(163,3,165)] transition-colors"
          >
            اطلب الآن
          </button>
        </form>

        {message && (
          <p className="text-green-500 font-bold mt-4 text-center">{message}</p>
        )}
      </div>
    </section>
  );
}

export default Order;
 