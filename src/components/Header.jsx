function Header() {
  return (
    <>
      <header
        className="relative flex items-center justify-center text-white py-32 px-8 bg-cover bg-center"
        dir="rtl"
      >
        <video
    className="absolute inset-0 w-full h-full object-cover"
    src="src/assets/istockphoto-1333891922-640_adpp_is.mp4"
    autoPlay
    loop
    muted
    playsInline
  ></video>
        {/* الـ Overlay */}
        <div className="absolute inset-0 bg-[rgba(32,56,34,0.8)]"></div>

        {/* النص */}
        <div className="relative z-10 max-w-2xl text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
            استعيدي جمال شعرك الطبيعي ✨
          </h1>

          <p className="text-lg md:text-xl font-medium leading-relaxed drop-shadow-md mb-4">
            عيشي تجربة فريدة مع منتج العناية بالشعر الطبيعي 🌿  
            يعيد لشعرك الحيوية واللمعان من الجذور حتى الأطراف،  
            يغذّي البصيلات بعمق ويمنحك مظهرًا صحيًا وقويًا في كل استخدام.
          </p>

          <p className="text-lg md:text-xl font-medium leading-relaxed drop-shadow-md">
            لأن جمالك يبدأ من شعرك… ابدئي رحلتك نحو التغيير الآن مع زيت{" "}
            <span className="font-extrabold text-[#d7b072] drop-shadow-lg">
              princesse
            </span>
            💫
          </p>

          <button className="mt-6 bg-[rgba(99,47,10)] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#6b442b] transition">
            اطلب الآن
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
