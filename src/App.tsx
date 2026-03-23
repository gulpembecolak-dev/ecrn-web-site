import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Construction, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      {/* Header/Navbar */}
      <nav className="fixed w-full z-50 bg-secondary/95 backdrop-blur-md border-b border-white/10 py-4 px-6 md:px-12 flex justify-between items-center text-white">
        <div className="flex items-center gap-3">
          <div className="relative flex flex-col items-center justify-center pt-2">
            {/* Triangular Castle Logo - Ascending Left to Right */}
            <div className="relative w-40 h-20 flex items-end justify-center">
              {/* Main Logo Container with Triangle Clip */}
              <div className="relative w-full h-16 overflow-hidden">
                {/* Triangular Background Shape */}
                <div 
                  className="absolute bottom-4 left-0 w-full h-12 bg-secondary/10"
                  style={{ 
                    clipPath: 'polygon(0% 0%, 100% 70%, 100% 100%, 0% 100%)' 
                  }}
                >
                  {/* Castle Main Body */}
                  <div 
                    className="absolute inset-0 bg-primary"
                    style={{ 
                      clipPath: 'polygon(0% 20%, 100% 75%, 100% 100%, 0% 100%)' 
                    }}
                  ></div>

                  {/* Castle Crenellations (Burçlar) - Eight yellow spikes, stopping before the right end */}
                  <div className="absolute top-0 left-0 w-[80%] h-4 flex justify-between px-1 pointer-events-none">
                    {[0, 8, 16, 24, 32, 40, 48, 56].map((y, i) => (
                      <div 
                        key={i} 
                        className="w-2.5 h-5 bg-primary rounded-t-sm shadow-sm" 
                        style={{ transform: `translateY(${y}%)` }}
                      ></div>
                    ))}
                  </div>

                  {/* Road Path - Bottom Curve */}
                  <div className="absolute bottom-0 left-0 w-full h-4 bg-white/90 flex items-center justify-center">
                    <div className="w-full h-[1px] border-t border-dashed border-secondary/40"></div>
                  </div>

                  {/* ECRN Text - Integrated into the shape */}
                  <div className="absolute inset-0 flex items-center justify-center pl-4 pt-2">
                    <span className="text-2xl font-black italic tracking-tighter text-secondary">Ecrn</span>
                    <span className="text-[10px] font-bold text-secondary/70 mt-3 ml-1">bvba</span>
                  </div>
                </div>
              </div>

              {/* Flag Pole & Flag - On the highest point (Left) */}
              <div className="absolute top-0 left-[2%] w-[1.5px] h-12 bg-white/90">
                {/* Real Cloth Flag Effect - SMALLER SIZE */}
                <motion.div 
                  animate={{ 
                    rotateY: [0, 25, 0],
                    skewY: [-5, 5, -5],
                    borderRadius: ["1px 6px 6px 1px", "1px 12px 12px 1px", "1px 6px 6px 1px"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1 left-0 w-5 h-3 bg-primary origin-left shadow-lg overflow-hidden"
                >
                  {/* Fabric Folds/Shadows for realism */}
                  <motion.div 
                    animate={{ x: [-15, 15, -15] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent w-[200%]"
                  />
                </motion.div>
              </div>

              {/* Tagline - Curved underneath */}
              <div className="absolute bottom-0 w-full text-center">
                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-primary leading-none">
                  Nationaal & Internationaal Transport
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#home" className="hover:text-primary transition-colors">Ana Sayfa</a>
          <a href="#services" className="hover:text-primary transition-colors">Hizmetlerimiz</a>
          <a href="#about" className="hover:text-primary transition-colors">Hakkımızda</a>
          <a href="#fleet" className="hover:text-primary transition-colors">Filomuz</a>
          <a href="#contact" className="hover:text-primary transition-colors">İletişim</a>
        </div>

        <button className="bg-primary hover:bg-primary-dark text-secondary px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95">
          Teklif Al
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-50">
        {/* Animated Background Vehicles */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* New Ultra-Detailed Animated Heavy Duty Crane Truck */}
          <motion.div
            initial={{ x: '-120%' }}
            animate={{ x: '120vw' }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute bottom-1/4 left-0 flex items-end opacity-30 drop-shadow-2xl"
          >
            <div className="relative flex items-end scale-125">
              {/* Main Chassis */}
              <div className="relative">
                {/* Truck Front Cabin */}
                <div className="relative bg-secondary w-32 h-24 rounded-tr-3xl rounded-tl-lg overflow-hidden">
                  {/* Front Window */}
                  <div className="absolute right-0 top-2 w-10 h-12 bg-sky-400/30 border-l-2 border-secondary/50"></div>
                  {/* Side Window */}
                  <div className="absolute left-4 top-2 w-14 h-10 bg-sky-400/20 rounded-sm"></div>
                  {/* Door Handle */}
                  <div className="absolute left-6 bottom-8 w-4 h-1 bg-primary/40"></div>
                  {/* Front Grill */}
                  <div className="absolute right-0 bottom-4 w-2 h-10 flex flex-col gap-1 px-0.5">
                    {[1, 2, 3, 4].map(i => <div key={i} className="w-full h-1 bg-white/10"></div>)}
                  </div>
                  {/* Headlight with Beam */}
                  <div className="absolute right-0 bottom-2 w-3 h-5 bg-primary rounded-l-full">
                    <div className="absolute right-0 w-20 h-10 bg-primary/10 blur-xl -translate-y-2"></div>
                  </div>
                </div>

                {/* Back Bed / Support */}
                <div className="absolute left-[-160px] bottom-0 bg-secondary/90 w-40 h-12 rounded-tl-xl border-r-4 border-secondary">
                  {/* Outriggers (Vertical Supports) */}
                  <div className="absolute left-4 bottom-[-4px] w-4 h-6 bg-primary rounded-b-sm border-x border-secondary"></div>
                  <div className="absolute right-4 bottom-[-4px] w-4 h-6 bg-primary rounded-b-sm border-x border-secondary"></div>
                </div>

                {/* Heavy Duty Crane Assembly */}
                <div className="absolute left-[-140px] bottom-12">
                  {/* Rotating Base */}
                  <div className="w-20 h-8 bg-secondary rounded-t-2xl border-b-4 border-primary"></div>
                  
                  {/* Main Boom (First Section) */}
                  <motion.div 
                    animate={{ rotate: [15, 25, 15] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-6 left-8 w-6 h-48 bg-secondary origin-bottom border-x-2 border-white/5"
                  >
                    {/* Hydraulic Piston */}
                    <div className="absolute bottom-4 left-[-12px] w-3 h-20 bg-primary/60 rounded-full origin-bottom rotate-[-10deg]"></div>
                    
                    {/* Second Boom Section (Telescopic) */}
                    <motion.div 
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-40 left-1 w-4 h-48 bg-secondary/80 origin-bottom border-x border-white/10"
                    >
                      {/* Third Boom Section */}
                      <div className="absolute -top-32 left-0.5 w-3 h-40 bg-secondary/60">
                        {/* Pulley & Hook Line */}
                        <div className="absolute top-0 right-[-4px] w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-secondary">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        </div>
                        {/* Hanging Cable */}
                        <motion.div 
                          animate={{ rotate: [-2, 2, -2] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute top-4 right-[-1px] w-0.5 h-64 bg-secondary/40 origin-top"
                        >
                          {/* Heavy Hook */}
                          <div className="absolute bottom-0 -left-3 w-7 h-8">
                            <div className="w-6 h-6 border-4 border-t-0 border-secondary rounded-b-xl relative">
                              <div className="absolute -top-2 left-1 w-2 h-2 bg-primary rounded-full"></div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    {/* Main Pivot Joint */}
                    <div className="absolute bottom-[-6px] left-[-6px] w-12 h-12 bg-primary rounded-full border-4 border-secondary flex items-center justify-center shadow-lg">
                      <div className="w-4 h-4 bg-secondary rounded-full"></div>
                    </div>
                  </motion.div>
                </div>

                {/* 10-Wheel System (Detailed) */}
                <div className="absolute left-[-150px] bottom-[-10px] flex gap-4">
                  {[1, 2, 3, 4, 5].map((wheel) => (
                    <motion.div 
                      key={wheel}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="w-12 h-12 border-[5px] border-secondary rounded-full bg-white relative flex items-center justify-center shadow-md"
                    >
                      {/* Tire Tread Pattern */}
                      <div className="absolute inset-0 border-[3px] border-dashed border-secondary/20 rounded-full"></div>
                      {/* Hub */}
                      <div className="w-4 h-4 bg-primary rounded-full border-2 border-secondary"></div>
                      {/* Spokes */}
                      <div className="absolute w-1 h-full bg-secondary/10"></div>
                      <div className="absolute h-1 w-full bg-secondary/10"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Road Line */}
          <div className="absolute bottom-1/4 w-full h-1 bg-gray-200"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-secondary mb-6 leading-tight">
              Güçlü Çözümler, <span className="text-primary">Güvenli Taşımacılık</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Vinç kiralama ve kamyon taşıma işlerinizde profesyonel ekip ve modern filomuzla hizmetinizdeyiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="bg-primary text-secondary px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-secondary hover:text-white transition-colors">
                Hizmetlerimizi Keşfedin <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary hover:text-secondary transition-colors">
                Bize Ulaşın
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-secondary/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats/Trust Bar */}
      <section className="bg-primary py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Yıllık Deneyim', value: '15+' },
            { label: 'Modern Araçlar', value: '50+' },
            { label: 'Mutlu Müşteri', value: '1000+' },
            { label: 'Güvenlik Puanı', value: '%100' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-4xl font-bold text-secondary mb-1">{stat.value}</h3>
              <p className="text-secondary/70 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Hizmetlerimiz</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
              Ağır sanayi, inşaat ve lojistik alanlarında ihtiyacınız olan tüm kaldırma ve taşıma çözümlerini tek çatı altında sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Vinç Kiralama',
                desc: '10 tondan 500 tona kadar kapasiteli, operatörlü sepetli ve mobil vinç hizmetleri.',
                icon: <Construction className="w-8 h-8" />,
                img: 'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Kamyon Taşımacılığı',
                desc: 'Ağır vasıta, konteyner ve genel kargo taşımacılığında güvenilir lojistik ağ.',
                icon: <Truck className="w-8 h-8" />,
                img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Özel Proje Taşımacılığı',
                desc: 'Geniş ve ağır yüklerin planlanması, eskort eşliğinde güvenli transferi.',
                icon: <ShieldCheck className="w-8 h-8" />,
                img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 group"
              >
                <div className="h-48 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                  <button className="text-secondary font-bold flex items-center gap-2 hover:text-primary transition-colors">
                    Detaylı Bilgi <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-primary absolute -top-10 -left-10 w-64 h-64 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000" 
              alt="Team" 
              className="rounded-3xl relative z-10 shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-8 rounded-2xl z-20 shadow-xl border-l-4 border-primary">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-gray-400">Yıllık Sektör Tecrübesi</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-secondary mb-6">Neden ECRN'i Seçmelisiniz?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              ECRN olarak, ağır taşıma ve vinç hizmetlerinde güvenliği ve hızı bir araya getiriyoruz. Belçika ve çevresinde yürüttüğümüz projelerde müşteri memnuniyetini en üst düzeyde tutuyoruz.
            </p>
            
            <ul className="space-y-4">
              {[
                'Sertifikalı ve Deneyimli Operatörler',
                '7/24 Teknik Destek ve Acil Servis',
                'Düzenli Bakımlı ve Modern Makine Parkuru',
                'Rekabetçi Fiyat ve Şeffaf Hizmet Politikası'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-700 font-medium">
                  <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Fleet / Image Gallery */}
      <section id="fleet" className="py-24 bg-secondary text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">Güçlü Filomuz</h2>
              <p className="text-gray-400 max-w-xl">En zorlu işlerin üstesinden gelebilecek kapasitede, sürekli güncellenen modern araç parkımızla her zaman hazırız.</p>
            </div>
            <button className="bg-primary text-secondary px-8 py-3 rounded-xl font-bold hover:bg-white transition-colors">
              Tüm Filoyu Gör
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 md:row-span-2 h-[500px] rounded-3xl overflow-hidden group relative">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Endüstriyel Ağır Yük Vinci" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-xl font-bold">Ağır Yük Vinçleri</p>
              </div>
            </div>
            <div className="h-[242px] rounded-3xl overflow-hidden group relative">
              <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Taşıma Kamyonu" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="font-bold">Kamyonlar</p>
              </div>
            </div>
            <div className="h-[242px] rounded-3xl overflow-hidden group relative">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Lojistik Merkezi" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="font-bold">Lojistik</p>
              </div>
            </div>
            <div className="md:col-span-2 h-[242px] rounded-3xl overflow-hidden group relative">
              <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Özel Proje Taşımacılığı" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="font-bold">Özel Taşıma</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20 bg-primary text-secondary">
              <h2 className="text-4xl font-bold mb-8">İletişime Geçin</h2>
              <p className="text-secondary/80 mb-12 text-lg">Hizmetlerimiz hakkında daha fazla bilgi almak veya teklif istemek için formumuzu doldurun ya da bizi arayın.</p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="bg-secondary text-primary p-4 rounded-2xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-secondary/60 text-sm font-bold uppercase tracking-widest">Bizi Arayın</p>
                    <p className="text-xl font-bold">+32 (0) 489/15 53 16</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="bg-secondary text-primary p-4 rounded-2xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-secondary/60 text-sm font-bold uppercase tracking-widest">E-posta</p>
                    <p className="text-xl font-bold">info@ecrn.be</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="bg-secondary text-primary p-4 rounded-2xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-secondary/60 text-sm font-bold uppercase tracking-widest">Ofisimiz</p>
                    <p className="text-xl font-bold">Belçika</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-4">
                <div className="bg-secondary p-3 rounded-full hover:bg-white transition-colors cursor-pointer"><Facebook className="w-5 h-5 text-primary" /></div>
                <div className="bg-secondary p-3 rounded-full hover:bg-white transition-colors cursor-pointer"><Instagram className="w-5 h-5 text-primary" /></div>
                <div className="bg-secondary p-3 rounded-full hover:bg-white transition-colors cursor-pointer"><Linkedin className="w-5 h-5 text-primary" /></div>
              </div>
            </div>

            <div className="lg:w-1/2 p-12 md:p-20">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Ad Soyad</label>
                    <input type="text" className="w-full bg-gray-100 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Telefon</label>
                    <input type="tel" className="w-full bg-gray-100 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="+32 ..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Hizmet Türü</label>
                  <select className="w-full bg-gray-100 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all appearance-none">
                    <option>Vinç Kiralama</option>
                    <option>Kamyon Taşımacılığı</option>
                    <option>Özel Proje</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Mesajınız</label>
                  <textarea rows={4} className="w-full bg-gray-100 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Detayları buraya yazın..."></textarea>
                </div>
                <button className="w-full bg-secondary text-white py-5 rounded-xl font-bold text-lg hover:bg-primary hover:text-secondary transition-all transform active:scale-[0.98]">
                  Teklif Talebi Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="relative flex flex-col items-center scale-90 origin-left">
              {/* Triangular Castle Logo - Ascending Left to Right (Same as Header) */}
              <div className="relative w-40 h-20 flex items-end justify-center">
                <div className="relative w-full h-16 overflow-hidden">
                  {/* Triangular Background Shape */}
                  <div 
                    className="absolute bottom-4 left-0 w-full h-12 bg-secondary/10"
                    style={{ 
                      clipPath: 'polygon(0% 0%, 100% 70%, 100% 100%, 0% 100%)' 
                    }}
                  >
                    {/* Castle Main Body */}
                    <div 
                      className="absolute inset-0 bg-primary"
                      style={{ 
                        clipPath: 'polygon(0% 20%, 100% 75%, 100% 100%, 0% 100%)' 
                      }}
                    ></div>

                    {/* Castle Crenellations (Burçlar) - Eight yellow spikes, stopping before the right end */}
                    <div className="absolute top-0 left-0 w-[80%] h-4 flex justify-between px-1 pointer-events-none">
                      {[0, 8, 16, 24, 32, 40, 48, 56].map((y, i) => (
                        <div 
                          key={i} 
                          className="w-2.5 h-5 bg-primary rounded-t-sm shadow-sm" 
                          style={{ transform: `translateY(${y}%)` }}
                        ></div>
                      ))}
                    </div>

                    {/* Road Path - Bottom Curve */}
                    <div className="absolute bottom-0 left-0 w-full h-4 bg-white/90 flex items-center justify-center">
                      <div className="w-full h-[1px] border-t border-dashed border-secondary/40"></div>
                    </div>

                    {/* ECRN Text - Integrated into the shape */}
                    <div className="absolute inset-0 flex items-center justify-center pl-4 pt-2">
                      <span className="text-2xl font-black italic tracking-tighter text-secondary">Ecrn</span>
                      <span className="text-[10px] font-bold text-secondary/70 mt-3 ml-1">bvba</span>
                    </div>
                  </div>
                </div>

                {/* Flag Pole & Flag - On the highest point (Left) */}
                <div className="absolute top-0 left-[2%] w-[1.5px] h-12 bg-white/90">
                  <div className="absolute top-1 left-0 w-5 h-3 bg-primary origin-left rounded-sm"></div>
                </div>

                {/* Tagline - Curved underneath */}
                <div className="absolute bottom-0 w-full text-center">
                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-primary leading-none">
                    Nationaal & Internationaal Transport
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-500">© 2026 ECRN Logistics & Crane. Tüm Hakları Saklıdır.</p>
          <div className="flex gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white">KVKK</a>
            <a href="#" className="hover:text-white">Çerez Politikası</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
