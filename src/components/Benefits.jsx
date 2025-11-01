function Benefits() {
  const whatsappNumber = "201064791312";
  const whatsappMessage = encodeURIComponent(
    "مرحبا 👋، مهتم بزيت Princesse وأود معرفة المزيد من التفاصيل عن السعر والتوصيل."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const benefitsList1 = [
    "تحسين طبيعية الشعر",
    "إعطاء الشعر المظهر الطبيعي والصحي",
    "علاج مشاكل الحرق والفرد والصبغات",
  ];
const benefitsList2 = [
    "علاج التقصف والفراغات",
    "تطويل وزيادة كثافة الشعر",
    "زيادة النعومة واللمعان الطبيعي للشعر",
  ];

  return (
    <section
      className="py-16 px-2 md:px-12 bg-white text-[#0d1350]"
      dir="rtl"
      id="benefits"
    >
      {/* الجملة البارزة قبل الفوائد */}
      <p className="text-2xl md:text-3xl font-extrabold leading-snug mb-16 text-center text-[#0d1350] animate-fadeIn">
        اكتشفي سر الشعر الصحي والناعم بفضل تركيبة{" "}
        <span className="font-semibold text-[#dba247]">Princesse</span> الغنية
        بالفيتامينات والزيوت الطبيعية.
      </p>

      {/* الصورة والفوائد */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
        {/* فوائد على اليسار */}
        <ul className="space-y-20 text-xl leading-relaxed font-medium text-[#0d1350] md:text-right animate-slideUp">
          {benefitsList1.map((benefit, idx) => (
            <li key={idx} className="flex items-center gap-3 hover:scale-105 rounded-full shadow-[0_10px_25px_rgba(242,105,244,0.5)] p-2">
            <img src='/media/hair.png.png' alt="icon" className="w-8 h-8" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        {/* الصورة في الوسط */}
        <div className="flex justify-center animate-bounceSlow ">
  <div className="flex justify-center items-center">
  <img
  src="/media/WhatsApp_logo_2025-10-31.jpg.png"
  alt="princesse oil"
  className="w-72 md:w-96 bg-[rgba(242,105,244,0.1)] shadow-[0_10px_25px_rgba(242,105,244,0.5)] animate-wavy transition-transform hover:scale-105"
/>

</div>



        </div>

        {/* فوائد على اليمين */}
        <ul className="space-y-20 text-xl leading-relaxed font-medium text-[#0d1350] md:text-left animate-slideUp ">
          {benefitsList2.map((benefit, idx) => (
            <li key={idx} className="flex items-center gap-3 hover:scale-105 rounded-full shadow-[0_10px_25px_rgba(242,105,244,0.5)] p-2">
               <img src='/media/hair.png.png' alt="icon" className="w-8 h-8" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* زر واتساب تحت المحتوى وفي النص */}
      <div className="mt-16 flex justify-center animate-fadeIn">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[rgb(13,19,79)] text-white font-semibold py-3 px-10 rounded-full transition hover:bg-[rgb(163,3,165)]"
        >
          للمزيد من التفاصيل
        </a>
      </div>
    </section>
  );
}

export default Benefits;
