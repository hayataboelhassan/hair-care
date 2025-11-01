function Footer() {
  return (
    <footer className="bg-[rgb(13,19,79)] text-white py-5 px-6 mt-10" id="footer">
      <div className="max-w-6xl mx-auto">
        {/* Follow Us Row */}
        <div className="flex justify-between items-center flex-wrap gap-4 text-xl">
          
          {/* Text */}
          <h3 className="font-semibold text-lg">تواصل معنا</h3>
          
          {/* Icons */}
          <div className="flex gap-4">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fa-brands fa-snapchat"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
