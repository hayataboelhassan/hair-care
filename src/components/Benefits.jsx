function Benefits() {
  const whatsappNumber = "201064791312";
  const whatsappMessage = encodeURIComponent(
    "مرحبا 👋، مهتم بزيت Princesse وأود معرفة المزيد من التفاصيل عن السعر والتوصيل."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      className="py-16 px-2 md:px-12 bg-white text-[#0d1350]"
      dir="rtl"
      id="benefits"
    >
      {/* الجملة البارزة قبل الفوائد */}
      <p className="text-2xl md:text-3xl font-extrabold leading-snug mb-8 text-[#0d1350]">
        اكتشفي سر الشعر الصحي والناعم بفضل تركيبة{" "}
        <span className="font-semibold text-[#dba247]">Princesse</span> الغنية
        بالفيتامينات والزيوت الطبيعية.
      </p>

      <div className="container mx-auto grid md:grid-cols-2 mt-16 gap-10 items-center">
        {/* النص */}
        <div className="text-right md:pr-10 lg:pr-20">
          <h2 className="text-3xl font-extrabold mb-6 text-[#0d1350]">
            فوائد زيت <span className="text-[#dba247]">Princesse</span> للشعر ✨
          </h2>

          <ul className="space-y-4 mb-10 text-lg leading-relaxed font-medium text-[#0d1350]">
            {[
              "تحسين طبيعية الشعر",
              "إعطاء الشعر المظهر الطبيعي والصحي",
              "علاج مشاكل الحرق والفرد والصبغات",
              "علاج التقصف والفراغات",
              "تطويل وزيادة كثافة الشعر",
              "تكثيف الشعر",
              "زيادة النعومة واللمعان الطبيعي للشعر",
            ].map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[rgba(242,105,244,0.6)] text-xl">★</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* الصورة */}
        <div className="flex justify-center md:pl-10 lg:pl-20">
          <img
            src="/media/IMG_0907.jpeg"
            alt="princesse oil"
            className="w-80 md:w-[380px] rounded-2xl shadow-lg shadow-[#f8dcaf]"
          />
        </div>
      </div>

      {/* زر واتساب تحت المحتوى وفي النص */}
      <div className="mt-5 flex justify-center">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[rgb(13,19,79)] text-white font-semibold py-3 px-10 rounded-full transition hover:bg-[#0a0f5a]"
        >
          للمزيد من التفاصيل
        </a>
      </div>
    </section>
  );
}

export default Benefits;
