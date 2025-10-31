function Benefits() {
  return (
    <section className="py-16 px-2 md:px-12 bg-white text-[#2c2c2c]" dir="rtl">
      <div className="container mx-10 grid md:grid-cols-2 gap-10 items-center">

        {/* النص */}
        <div className="text-right">
          <h2 className="text-3xl font-extrabold mb-6 text-[rgba(99,47,10)]">
            فوائد زيت <span className="text-[#d7b072]">Princesse</span> للشعر ✨
          </h2>

          <ul className="space-y-4 mb-10 text-lg leading-relaxed font-medium text-[rgba(99,47,10)]">
            {[
              "تحسين طبيعية الشعر",
              "إعطاء الشعر المظهر الطبيعي و الصحي",
              "علاج مشاكل الحرق و الفرد و الصبغات",
              "علاج التقصف و الفراغات",
              "تطويل و زيادة الشعر",
              "تكثيف الشعر",
              "زيادة النعومة الطبيعية و اللمعان للشعر",
            ].map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2 justify-start">
                <span className="text-[#d7b072] text-xl">★</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

        </div>

        {/* صورة */}
        <div className="flex justify-center">
          <img
            src="src/assets/IMG_0907-removebg-preview.png"
            alt="princesse oil"
            className="w-80 md:w-[380px] rounded-2xl shadow-lg shadow-[#f8dcaf]"
          />
        </div>

      </div>
           <a
  href="https://wa.me/201154443078"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-block bg-[rgba(99,47,10)] text-white font-semibold py-3 px-10 mr-48 rounded-full hover:bg-[#6b442b] transition"
>
  للمزيد من التفاصيل
</a>
    </section>
  );
}

export default Benefits;
