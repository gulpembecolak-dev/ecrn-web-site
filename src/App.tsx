import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  Construction,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X,
  Award,
  ChevronDown,
  Zap,
  HardHat,
  FileCheck,
  Truck,
  Wrench,
  Hammer,
} from 'lucide-react';

/* Panelden seçilebilen hizmet ikonları (isim → bileşen) */
const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, Construction, CheckCircle2, HardHat, ShieldCheck, FileCheck, Award, Truck, Wrench, Hammer,
};
const iconFor = (name: string, fallbackIndex = 0) => {
  const order = ['Zap', 'Construction', 'CheckCircle2'];
  const Comp = ICONS[name] || ICONS[order[fallbackIndex % order.length]] || Zap;
  return <Comp className="w-7 h-7" />;
};

/* ============================================
   PARTICLES COMPONENT
   ============================================ */
const Particles = ({ count = 20 }: { count?: number }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 6}s`,
    duration: `${4 + Math.random() * 6}s`,
    size: `${2 + Math.random() * 3}px`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
};

/* ============================================
   COUNTER ANIMATION HOOK
   ============================================ */
const useCounter = (end: number, duration: number = 2000, start: boolean = true) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
};

const StatCounter = ({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const count = useCounter(value, 2000, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setInView(true); }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-5xl font-black font-display text-primary glow-text mb-2">
        {count}{suffix}
      </h3>
      <p className="text-gray-400 font-medium text-sm uppercase tracking-wider">{label}</p>
    </div>
  );
};

/* ============================================
   SECTION WRAPPER WITH SCROLL ANIMATION
   ============================================ */
const AnimatedSection = ({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ============================================
   WHATSAPP FLOATING BUTTON
   ============================================ */
const WhatsAppButton = ({ phone }: { phone: string }) => {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-110 active:scale-95"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
};

/* ============================================
   EDITABLE CONTENT (content.json)
   Bu varsayılan değerler yedektir: content.json çekilemezse
   site yine de eski/varsayılan içerikle çalışır.
   ============================================ */
const DEFAULT_CONTENT = {
  company: {
    name: 'ECRN bvba',
    owner: 'HİDAYET OTER',
    phone: '+32 (0) 489/15 53 16',
    whatsapp: '32489155316',
    email: 'info@ecrn.be',
    addressLine1: 'Lindestraat 43',
    addressLine2: '9160 Lokeren, Belçika',
    logo: 'images/logo.png',
  },
  social: { facebook: '', instagram: '', linkedin: '' },
  seo: {
    title: 'ECRN bvba — Vinç ve Kazı Hizmetleri | Aydınlatma Direği Dikimi',
    description: 'ECRN bvba - Belçika genelinde Fluvius standartlarına uygun vinçli aydınlatma direği dikimi ve elektrik altyapı kazıları hizmetleri. VCA sertifikalı.',
  },
  nav: {
    home: 'Anasayfa',
    services: 'Hizmetler',
    standards: 'Fluvius Standartları',
    contact: 'İletişim',
    cta: 'Hemen Teklif Al',
  },
  hero: {
    badge: 'Fluvius Standartlarında',
    titleLine1: 'Vinç Hizmetleri',
    titleLine2: 've Kazı Çözümleri',
    subtitle: 'Belçika genelinde profesyonel vinçle aydınlatma direği dikimi ve cadde/sokaklarda kablo kanalı açma hizmetleri.',
    bgImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000',
    primaryBtn: 'Hizmetlerimizi Keşfedin',
    secondaryBtn: 'Bize Ulaşın',
  },
  map: { query: 'Lindestraat 43, 9160 Lokeren, België' },
  stats: [
    { value: 10, suffix: '+', label: 'Yıllık Deneyim' },
    { value: 100, suffix: '%', label: 'Fluvius Uyumluluğu' },
    { value: 500, suffix: '+', label: 'Tamamlanan Proje' },
    { value: 100, suffix: '%', label: 'VCA Sertifikası' },
  ],
  servicesIntro: 'Sadece elektrik altyapısı için kadde ve sokak kazıları ve vinçli aydınlatma direği dikimi yapıyoruz.',
  services: [
    { title: 'Vinçli Direk Montajı', desc: 'Yüksek kapasiteli vinçlerle güvenli aydınlatma direği dikimi ve montajı. Uzman operatör ekibi.', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800', icon: 'Zap' },
    { title: 'Altyapı Kazı İşleri', desc: 'Fluvius kurallarına uygun kablo kanalı açma ve zemin hazırlığı. Güvenli ve hassas kazı çalışmaları.', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800', icon: 'Construction' },
    { title: 'Kanal Kapatma ve Restorasyon', desc: 'Kablo döşeme sonrası dolgu ve zemin restorasyonu. Fluvius standartlarına uygun tamamlama.', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800', icon: 'CheckCircle2' },
  ],
  standards: {
    intro: "ECRN olarak, elektrik altyapı kazı ve montaj işlerinde VCA iş güvenliği sertifikası ve Fluvius teknik kabul süreçlerine %100 uyum sağlıyoruz.",
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000',
    items: [
      'VCA İş Güvenliği Sertifikası',
      'Fluvius Teknik Kabul Süreçlerine %100 Uyum',
      'Uzman ve Deneyimli Operatör Ekibi',
      'Güvenli ve Hassas Çalışma Prensipleri',
    ],
  },
  footer: {
    copyright: '© 2024 ECRN bvba. Tüm hakları saklıdır.',
    tagline: 'Vinç ve Kazı Hizmetleri',
  },
};

type SiteContent = typeof DEFAULT_CONTENT;

// http(s) ile başlayan görseller olduğu gibi; yüklenen yerel görseller siteye göreli çözülür.
const resolveImg = (src: string) =>
  !src ? src : /^https?:\/\//.test(src) ? src : `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`;

// İletişim formu için arka uç adresi (panel ile aynı Vercel projesi).
// Geliştirici deploy sonrası buraya Vercel adresini yazar, örn. "https://ecrn-cms-api.vercel.app".
const CONTACT_API: string = 'https://ecrn-cms-api.vercel.app';

/* ============================================
   MAIN APP
   ============================================ */
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [content, setContent] = useState<SiteContent>(DEFAULT_CONTENT);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}content.json?t=${Date.now()}`)
      .then(r => (r.ok ? r.json() : Promise.reject()))
      .then((data: Partial<SiteContent>) =>
        setContent(prev => ({
          ...prev,
          ...data,
          company: { ...prev.company, ...data.company },
          seo: { ...prev.seo, ...data.seo },
          nav: { ...prev.nav, ...data.nav },
          hero: { ...prev.hero, ...data.hero },
          social: { ...prev.social, ...data.social },
          map: { ...prev.map, ...data.map },
          standards: { ...prev.standards, ...data.standards },
          footer: { ...prev.footer, ...data.footer },
        })),
      )
      .catch(() => {/* yedek içerik kullanılır */});
  }, []);

  const { company, hero, stats, services, standards, footer, social, nav, seo, map } = content;

  // SEO: sayfa başlığı + açıklaması (Google'da görünen) içerikten gelsin.
  useEffect(() => {
    if (seo.title) document.title = seo.title;
    if (seo.description) {
      let m = document.querySelector<HTMLMetaElement>("meta[name='description']");
      if (!m) { m = document.createElement('meta'); m.name = 'description'; document.head.appendChild(m); }
      m.content = seo.description;
    }
  }, [seo.title, seo.description]);

  const mapSrc = map.query
    ? `https://maps.google.com/maps?q=${encodeURIComponent(map.query)}&output=embed`
    : `https://maps.google.com/maps?q=${encodeURIComponent(`${company.addressLine1} ${company.addressLine2}`)}&output=embed`;

  // Favicon her zaman logoyu takip etsin (müşteri logoyu değiştirince sekme ikonu da değişir).
  useEffect(() => {
    if (!company.logo) return;
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
    link.href = resolveImg(company.logo);
  }, [company.logo]);

  const socialList = [
    { Icon: Facebook, url: social.facebook },
    { Icon: Instagram, url: social.instagram },
    { Icon: Linkedin, url: social.linkedin },
  ].filter(s => s.url && s.url.trim());

  // İletişim formu
  const emptyForm = { name: '', email: '', phone: '', service: '', message: '', company_website: '' };
  const [form, setForm] = useState(emptyForm);
  const [sending, setSending] = useState(false);
  const [formMsg, setFormMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const setField = (k: keyof typeof emptyForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormMsg(null);
    if (form.company_website) return; // honeypot: bot doldurursa sessizce çık
    if (!form.name.trim() || (!form.email.trim() && !form.phone.trim())) {
      setFormMsg({ ok: false, text: 'Lütfen adınızı ve e-posta veya telefonunuzu girin.' });
      return;
    }
    if (!CONTACT_API) {
      setFormMsg({ ok: false, text: 'Form henüz yapılandırılmadı. Lütfen telefon veya e-posta ile ulaşın.' });
      return;
    }
    setSending(true);
    try {
      const r = await fetch(`${CONTACT_API.replace(/\/$/, '')}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!r.ok) throw new Error();
      setFormMsg({ ok: true, text: 'Teşekkürler! Talebiniz iletildi, en kısa sürede dönüş yapacağız.' });
      setForm(emptyForm);
    } catch {
      setFormMsg({ ok: false, text: 'Gönderilemedi. Lütfen telefon veya e-posta ile ulaşın.' });
    } finally {
      setSending(false);
    }
  };
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const navLinks = [
    { label: nav.home, href: '#home' },
    { label: nav.services, href: '#services' },
    { label: nav.standards, href: '#standards' },
    { label: nav.contact, href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-secondary overflow-x-hidden">
      {/* ====== NAVBAR ====== */}
      <nav className="fixed w-full z-50 glass py-3 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={resolveImg(company.logo)}
                alt="ECRN Logo"
                className="h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
                style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.45))' }}
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-cyan rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-black font-display text-white tracking-tight">ECRN</span>
              <span className="text-[10px] text-primary font-bold ml-1">bvba</span>
              <p className="text-[8px] text-gray-500 uppercase tracking-[0.2em] -mt-1">{footer.tagline}</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-primary transition-colors font-medium text-sm tracking-wide">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="bg-primary hover:bg-primary-light text-secondary px-6 py-2.5 rounded-xl font-bold text-sm transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-95">
              {nav.cta}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden mt-4 pb-4 border-t border-white/5"
          >
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block py-3 px-4 text-gray-300 hover:text-primary transition-colors font-medium">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block mt-2 mx-4 text-center bg-primary text-secondary px-6 py-3 rounded-xl font-bold">
              {nav.cta}
            </a>
          </motion.div>
        )}
      </nav>

      {/* ====== HERO SECTION ====== */}
      <section id="home" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={resolveImg(hero.bgImage)}
            alt="Elektrik altyapı çalışması"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/80 to-secondary"></div>
        </div>

        {/* Grid Background */}
        <div className="absolute inset-0 bg-grid opacity-60"></div>

        {/* Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-20" style={{ background: 'radial-gradient(ellipse, rgba(245,166,35,0.15), transparent 70%)' }}></div>

        {/* Particles */}
        <Particles count={25} />

        {/* Hero Content */}
        <motion.div
          style={{ y: heroParallax, opacity: heroOpacity }}
          className="relative z-10 text-center px-4 max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary text-sm font-semibold tracking-wide">{hero.badge}</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display text-white mb-6 leading-[0.95]">
              {hero.titleLine1}
              <br />
              <span className="text-primary glow-text">{hero.titleLine2}</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              {hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="group bg-primary hover:bg-primary-light text-secondary px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all hover:shadow-xl hover:shadow-primary/20 active:scale-[0.98]">
                {hero.primaryBtn}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="glass border border-white/10 hover:border-primary/30 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-lg active:scale-[0.98]">
                {hero.secondaryBtn}
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-gray-500 text-xs uppercase tracking-widest">Keşfet</span>
            <ChevronDown className="w-5 h-5 text-primary" />
          </motion.div>
        </div>
      </section>

      {/* ====== STATS BAR ====== */}
      <section className="relative py-16 px-6 border-y border-white/5" style={{ background: 'linear-gradient(180deg, #0D1117, #0A0E1A)' }}>
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <StatCounter key={i} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* ====== SERVICES ====== */}
      <section id="services" className="py-28 px-6 relative">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <Particles count={10} />

        <div className="relative max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.3em]">Hizmetlerimiz</span>
            <h2 className="text-4xl md:text-5xl font-black font-display text-white mt-4 mb-6">
              Profesyonel <span className="text-primary">Vinç ve Kazı</span> Hizmetleri
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
              {content.servicesIntro}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const gradients = ['from-blue-500/10 to-cyan-600/5', 'from-amber-500/10 to-orange-600/5', 'from-emerald-500/10 to-teal-600/5'];
              return (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="glass-card rounded-3xl overflow-hidden group cursor-pointer h-full">
                  <div className="h-56 overflow-hidden relative">
                    <img src={resolveImg(service.img)} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i % 3]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-secondary transition-all duration-300">
                      {iconFor((service as { icon?: string }).icon || '', i)}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">{service.desc}</p>
                    <button className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                      Detaylı Bilgi <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== FLUVIUS STANDARDS ====== */}
      <section id="standards" className="py-28 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A0E1A, #0D1117, #0A0E1A)' }}>
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        {/* Big glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.2), transparent 60%)' }}></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <AnimatedSection>
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-72 h-72 rounded-full blur-3xl opacity-15 bg-primary"></div>
              <img
                src={resolveImg(standards.image)}
                alt="Fluvius standartları"
                className="rounded-3xl relative z-10 shadow-2xl shadow-black/50 border border-white/5"
              />
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 z-20 border border-primary/20 shadow-xl"
              >
                <p className="text-4xl font-black font-display text-primary glow-text">100%</p>
                <p className="text-gray-400 text-sm font-medium">Fluvius Uyumlu</p>
              </motion.div>
              {/* Small floating element */}
              <motion.div
                animate={{ y: [0, 8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-4 -right-4 bg-primary rounded-xl p-3 z-20 shadow-lg shadow-primary/30"
              >
                <Award className="w-6 h-6 text-secondary" />
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <span className="text-primary font-bold text-sm uppercase tracking-[0.3em]">Fluvius Standartları</span>
            <h2 className="text-4xl md:text-5xl font-black font-display text-white mt-4 mb-8 leading-tight">
              Neden <span className="text-primary">ECRN</span>'i Seçmelisiniz?
            </h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              {standards.intro}
            </p>

            <div className="space-y-5">
              {standards.items.map((text, i) => {
                const stdIcons = [<ShieldCheck className="w-5 h-5" />, <FileCheck className="w-5 h-5" />, <HardHat className="w-5 h-5" />, <CheckCircle2 className="w-5 h-5" />];
                return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-all flex-shrink-0">
                    {stdIcons[i % 4]}
                  </div>
                  <span className="text-gray-300 font-medium">{text}</span>
                </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ====== CONTACT ====== */}
      <section id="contact" className="py-28 px-6 relative" style={{ background: 'linear-gradient(180deg, #0A0E1A, #0D1117)' }}>
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <Particles count={8} />

        <div className="relative max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.3em]">İletişim</span>
            <h2 className="text-4xl md:text-5xl font-black font-display text-white mt-4 mb-6">
              Bizimle <span className="text-primary">İletişime</span> Geçin
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full"></div>
          </AnimatedSection>

          <div className="glass rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl shadow-black/20">
            <div className="flex flex-col lg:flex-row">
              {/* Contact Info Side */}
              <div className="lg:w-5/12 p-10 md:p-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F5A623, #D4891A)' }}>
                {/* Decorative circles */}
                <div className="absolute top-[-50px] right-[-50px] w-48 h-48 rounded-full bg-white/10"></div>
                <div className="absolute bottom-[-30px] left-[-30px] w-36 h-36 rounded-full bg-white/5"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-black font-display text-secondary mb-4">İletişim Bilgileri</h3>
                  <p className="text-secondary/70 mb-12 leading-relaxed">Hizmetlerimiz hakkında bilgi almak veya teklif istemek için bize ulaşın.</p>

                  <div className="space-y-8">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-secondary/50 text-xs font-bold uppercase tracking-widest">Telefon</p>
                        <p className="text-secondary text-lg font-bold">{company.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-secondary/50 text-xs font-bold uppercase tracking-widest">E-posta</p>
                        <p className="text-secondary text-lg font-bold">{company.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-secondary/50 text-xs font-bold uppercase tracking-widest">Adres</p>
                        <p className="text-secondary text-lg font-bold">{company.addressLine1}</p>
                        <p className="text-secondary/80 text-sm">{company.addressLine2}</p>
                      </div>
                    </div>
                  </div>

                  {/* Social */}
                  {socialList.length > 0 && (
                    <div className="mt-16 flex gap-3">
                      {socialList.map(({ Icon, url }, i) => (
                        <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary/80 hover:bg-secondary rounded-xl flex items-center justify-center transition-all hover:shadow-lg">
                          <Icon className="w-4 h-4 text-primary" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Form Side */}
              <div className="lg:w-7/12 p-10 md:p-16">
                <form className="space-y-6" onSubmit={submitForm}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Ad Soyad</label>
                      <input type="text" value={form.name} onChange={setField('name')} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Ad Soyad" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Telefon</label>
                      <input type="tel" value={form.phone} onChange={setField('phone')} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="+32 ..." />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">E-posta</label>
                    <input type="email" value={form.email} onChange={setField('email')} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="info@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Hizmet Türü</label>
                    <select value={form.service} onChange={setField('service')} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none">
                      <option value="">Seçiniz...</option>
                      <option>Altyapı Kazı İşleri</option>
                      <option>Vinçli Direk Montajı</option>
                      <option>Kanal Kapatma ve Restorasyon</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Mesajınız</label>
                    <textarea rows={4} value={form.message} onChange={setField('message')} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Proje detaylarınızı buraya yazın..."></textarea>
                  </div>
                  {/* Honeypot: insanlar görmez, botlar doldurur */}
                  <input type="text" tabIndex={-1} autoComplete="off" value={form.company_website} onChange={setField('company_website')} className="hidden" aria-hidden="true" />
                  {formMsg && (
                    <p className={`text-sm font-medium ${formMsg.ok ? 'text-green-400' : 'text-red-400'}`}>{formMsg.text}</p>
                  )}
                  <button type="submit" disabled={sending} className="w-full bg-primary hover:bg-primary-light text-secondary py-4 rounded-xl font-bold text-lg transition-all hover:shadow-xl hover:shadow-primary/20 active:scale-[0.98] disabled:opacity-60">
                    {sending ? 'Gönderiliyor...' : 'Teklif Talebi Gönder'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}
          <AnimatedSection className="mt-8">
            <div className="glass rounded-3xl overflow-hidden border border-white/5 h-[300px]">
              <iframe
                src={mapSrc}
                title="Harita"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">{footer.copyright}</p>
          <p className="text-gray-600 text-xs">{footer.tagline}</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton phone={company.whatsapp} />
    </div>
  );
}

export default App;
