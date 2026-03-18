export default function Footer() {
  return (
    /* 
       - border-white/20:dùng màu viền mờ để tiệp với nền Dreamy
       - bg-transparent:dể lộ nền hồng xanh bên dưới
    */
    <footer className="py-6 border-t border-white/20 text-center bg-transparent">
      <div className="container mx-auto px-6">
        {/* 
           - tracking-widest: Giãn cách chữ
        
        */}
        <p className="text-zinc-400 text-[11px] font-medium uppercase tracking-[0.15em] opacity-60">
          © 2026 <span className="text-zinc-600 font-bold">EngApp</span> •
          Empowering your English journey every day
        </p>
      </div>
    </footer>
  );
}
