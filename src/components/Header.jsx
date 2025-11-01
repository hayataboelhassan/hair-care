// import vedioheader from'../assets/WhatsApp_Video_2025-11-01.mp4';
// import logo from'../assets/WhatsApp_Image_2025-10-31.jpg'
function Header() {
  return (
    <>
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 w-full shadow-md z-50"
        style={{ backgroundColor: "white" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* شعار */}
          <img
            src='/media/WhatsApp_Image_2025-10-31.jpg.jpg'
            alt="Princesse Logo"
            className="h-12 md:h-16 object-contain rounded-2xl border-2 border-white"
          />

          {/* روابط Navbar */}
          <div className="hidden md:flex space-x-6 text-[rgb(13,19,79)] font-semibold">
            <a href="#footer" className="hover:underline">
              تواصل معنا
            </a>
            
             <a href="#benefits" className="hover:underline">
              فوائد المنتج
            </a>
             <a href="#order" className="hover:underline">
              اطلب المنتج
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer عشان Navbar ثابت */}
      <div className="h-20"></div>

      {/* الهيرو سيكشن */}
      <header
        className="relative flex flex-col items-center justify-center py-28 px-8 "
        dir="rtl"
      >
        {/* الفيديو الخلفي */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src='/media/WhatsApp_Video_2025-11-01.mp4.mp4'
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay وردي فاتح شفاف */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(242,105,244,0.6)" }}></div>

        {/* النص والزر */}
        <div className="relative z-10 max-w-3xl flex flex-col items-center text-center text-white">
          {/* الجملة الأولى لوحدها */}
          <h1 className="text-2xl md:text-6xl font-bold leading-snug drop-shadow-md mb-10">
            استعيدي لمعان شعرك الطبيعي من أول استخدام ✨
          </h1>

          {/* باقي النص */}
         <p className="text-lg md:text-xl font-medium drop-shadow-md mb-3 ">
  دلّلي شعرك بخلاصة الزيوت الطبيعية التي تمنحه الحيوية، القوة، واللمعان الفائق.  
  {" "}</p>
  <p className="mb-10 text-lg md:text-xl font-medium drop-shadow-md">
  <span className="font-extrabold text-[#dba247] text-3xl drop-shadow-lg">
    مع زيت Princesse
  </span>
  {" "}
  جمال شعرك يبدأ من الجذور! 💫
</p>

          {/* الزر */}
         <a href="#order"
          className="bg-white text-[rgb(13,19,79)] font-semibold py-3 px-8 rounded-full hover:bg-[rgb(13,19,79)] hover:text-white transition">
  اطلبي الآن واستمتعي بعرض محدود!
</a>
        </div>
      </header>
    </>
  );
}

export default Header;
