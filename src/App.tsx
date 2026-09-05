import { useState, useEffect } from "react";
import logoImage from "@/imports/COCINA_LOGO.jpg";
import brandImage from "@/imports/image.png";

const NAV_LINKS = [
  { label: "Quiénes Somos", href: "#quienes-somos" },
  { label: "¿Qué Hacemos?", href: "#que-hacemos" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

const SERVICES = [
  {
    icon: "🔥",
    title: "Limpieza de Campanas",
    desc: "Eliminamos grasa acumulada en campanas extractoras industriales y domésticas, restaurando su funcionalidad al 100%.",
  },
  {
    icon: "🍳",
    title: "Desengrase de Estufas",
    desc: "Limpieza profunda de quemadores, parrillas y superficies de cocción con productos de grado industrial.",
  },
  {
    icon: "🧽",
    title: "Limpieza de Hornos",
    desc: "Remoción completa de carbón y grasa cocida en hornos convencionales, de convección e industriales.",
  },
  {
    icon: "🚿",
    title: "Sanitización Completa",
    desc: "Desinfección y sanitización de toda la cocina cumpliendo normas de higiene para establecimientos de alimentos.",
  },
  {
    icon: "🔧",
    title: "Mantenimiento Preventivo",
    desc: "Planes de mantenimiento periódico para mantener tu cocina impecable y alargar la vida útil de los equipos.",
  },
  {
    icon: "🏢",
    title: "Cocinas Industriales",
    desc: "Servicio especializado para restaurantes, hoteles, comedores industriales y cualquier cocina de producción.",
  },
];

const STATS = [
  { value: "500+", label: "Cocinas Limpiadas" },
  { value: "98%", label: "Clientes Satisfechos" },
  { value: "2+", label: "Años de Experiencia" },
  { value: "24h", label: "Respuesta Garantizada" },
];

const TESTIMONIALS = [
  {
    name: "Carlos Rodríguez",
    role: "Chef Ejecutivo, Restaurante El Fogón",
    text: "Cocina Implacable transformó completamente nuestra cocina industrial. En 4 horas dejaron todo como nuevo. ¡Increíble trabajo!",
    stars: 5,
  },
  {
    name: "María López",
    role: "Administradora, Hotel Gran Plaza",
    text: "Llevamos 6 meses con su plan de mantenimiento mensual y la diferencia es abismal. Profesionales, puntuales y muy detallistas.",
    stars: 5,
  },
  {
    name: "Jorge Mendoza",
    role: "Propietario, Catering Mendoza",
    text: "Cumplimos las inspecciones sanitarias sin problemas gracias a Cocina Implacable. Son parte fundamental de nuestra operación.",
    stars: 5,
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-full bg-[#1C1C1E] text-[#F0EDE8]">

      {/* ── NAV ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 nav-blur transition-all duration-300 ${
          scrolled ? "bg-[#1C1C1E]/90 border-b border-[rgba(196,122,53,0.2)]" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo wordmark */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={logoImage}
              alt="Cocina Implacable logo"
              className="h-10 w-10 object-contain"
            />
            <div className="leading-tight">
              <span className="block text-xs font-medium tracking-[0.2em] uppercase text-[#8A8A8A]">Cocina</span>
              <span className="block text-sm font-bold tracking-[0.15em] uppercase text-copper-gradient" style={{ fontFamily: "'Roboto Slab', serif" }}>
                Implacable
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-[#B0ADA8] hover:text-[#C47A35] transition-colors duration-200 tracking-wide"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                className="px-5 py-2 text-sm font-semibold bg-[#C47A35] text-white rounded hover:bg-[#D8954A] transition-colors duration-200"
              >
                Cotizar Ahora
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#C47A35] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span className={`block w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#1C1C1E]/95 border-t border-[rgba(196,122,53,0.2)] px-6 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-[#B0ADA8] hover:text-[#C47A35] transition-colors border-b border-[rgba(255,255,255,0.05)] last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="block mt-4 px-5 py-2.5 text-center font-semibold bg-[#C47A35] text-white rounded hover:bg-[#D8954A] transition-colors"
            >
              Cotizar Ahora
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background kitchen image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1588416820614-f8d6ac6cea56?w=1600&h=900&fit=crop&auto=format"
            alt="Cocina profesional de acero inoxidable"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1E] via-[#1C1C1E]/85 to-[#1C1C1E]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-transparent to-[#1C1C1E]/30" />
        </div>

        {/* Decorative copper line */}
        <div className="absolute left-0 top-1/4 w-1 h-48 bg-gradient-to-b from-transparent via-[#C47A35] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium tracking-widest uppercase text-[#C47A35] border border-[rgba(196,122,53,0.4)] rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C47A35] animate-pulse" />
              Est. 2024 · Santiago, Chile
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-4 tracking-tight">
              COCINA<br />
              <span className="text-copper-gradient">IMPLACABLE</span>
            </h1>
            <p className="text-lg font-light tracking-[0.25em] uppercase text-[#8A8A8A] mb-6">
              El Arte del Aseo en la Cocina
            </p>
            <p className="text-[#B0ADA8] text-lg leading-relaxed max-w-md mb-10">
              Limpieza profunda y sanitización de cocinas industriales y domésticas. Devolvemos el brillo a tu cocina con resultados que hablan por sí solos.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="px-8 py-3.5 font-semibold bg-[#C47A35] text-white rounded hover:bg-[#D8954A] transition-all duration-200 hover:shadow-lg hover:shadow-[rgba(196,122,53,0.3)]"
              >
                Solicitar Cotización
              </a>
              <a
                href="#que-hacemos"
                className="px-8 py-3.5 font-semibold border border-[rgba(196,122,53,0.5)] text-[#C47A35] rounded hover:bg-[rgba(196,122,53,0.1)] transition-all duration-200"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Logo side */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-3xl bg-[rgba(196,122,53,0.15)] scale-110" />
              <img
                src={brandImage}
                alt="Cocina Implacable — El Arte del Aseo en la Cocina"
                className="relative w-72 md:w-96 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs tracking-widest uppercase text-[#8A8A8A]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#C47A35] to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#252527] border-y border-[rgba(196,122,53,0.15)]">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-black text-copper-gradient mb-1">{s.value}</div>
              <div className="text-sm text-[#8A8A8A] tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ── */}
      <section id="quienes-somos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[rgba(196,122,53,0.15)] to-transparent rounded-2xl" />
            <img
              src="https://images.unsplash.com/photo-1663790776711-9283bf614ac2?w=800&h=600&fit=crop&auto=format"
              alt="Cocina industrial limpia y reluciente"
              className="relative w-full h-80 md:h-[480px] object-cover rounded-xl border border-[rgba(196,122,53,0.2)]"
            />
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 clip-hex bg-[#C47A35] flex items-center justify-center text-center p-4 shadow-xl shadow-[rgba(196,122,53,0.3)]">
              <div>
                <div className="text-2xl font-black text-white">2+</div>
                <div className="text-xs font-medium text-white/80 leading-tight">Años de<br/>Excelencia</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C47A35] mb-4">Quiénes Somos</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Expertos en el<br />
              <span className="text-copper-gradient">Arte de la Limpieza</span>
            </h2>
            <div className="w-16 h-1 bg-[#C47A35] mb-8" />
            <p className="text-[#B0ADA8] leading-relaxed mb-6">
              Somos un equipo de profesionales especializados en limpieza y sanitización de cocinas, con un compromiso férreo con la calidad y los resultados visibles. Nacimos en 2024 con una misión clara: devolver el brillo y la higiene que cada cocina merece.
            </p>
            <p className="text-[#B0ADA8] leading-relaxed mb-8">
              Utilizamos productos y técnicas de grado industrial que eliminan hasta la grasa más resistente, sin dañar las superficies ni los equipos. Nuestro trabajo no termina hasta que la cocina brilla como el primer día.
            </p>
            <ul className="space-y-3">
              {["Equipo certificado y capacitado", "Productos seguros y biodegradables", "Garantía de satisfacción total", "Disponibles 7 días a la semana"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#B0ADA8]">
                  <span className="w-5 h-5 rounded-full bg-[rgba(196,122,53,0.2)] border border-[#C47A35] flex items-center justify-center text-[#C47A35] text-xs flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── QUÉ HACEMOS ── */}
      <section id="que-hacemos" className="py-24 px-6 bg-[#252527]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C47A35] mb-4">Nuestros Servicios</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              ¿Qué Hacemos?
            </h2>
            <div className="w-16 h-1 bg-[#C47A35] mx-auto mb-6" />
            <p className="text-[#8A8A8A] max-w-xl mx-auto">
              Ofrecemos soluciones completas de limpieza para todo tipo de cocinas, desde residenciales hasta grandes instalaciones industriales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="group p-7 bg-[#2E2E30] rounded-xl border border-[rgba(196,122,53,0.1)] hover:border-[rgba(196,122,53,0.4)] transition-all duration-300 hover:bg-[#333335]"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#C47A35] transition-colors">{s.title}</h3>
                <p className="text-[#8A8A8A] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[rgba(196,122,53,0.05)] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C47A35] mb-4">Cómo Trabajamos</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Nuestro Proceso</h2>
            <div className="w-16 h-1 bg-[#C47A35] mx-auto" />
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#C47A35]/20 via-[#C47A35]/60 to-[#C47A35]/20" />
            {[
              { num: "01", title: "Diagnóstico", desc: "Evaluamos el estado de tu cocina y generamos una cotización sin costo." },
              { num: "02", title: "Planificación", desc: "Coordinamos el horario que menos afecte tu operación." },
              { num: "03", title: "Limpieza Profunda", desc: "Ejecutamos el servicio con equipos y productos profesionales." },
              { num: "04", title: "Verificación", desc: "Revisamos cada rincón y entregamos un informe fotográfico." },
            ].map((step) => (
              <div key={step.num} className="text-center relative">
                <div className="w-24 h-24 mx-auto mb-6 clip-hex bg-[#252527] border-2 border-[#C47A35] flex items-center justify-center relative z-10">
                  <span className="text-2xl font-black text-copper-gradient">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-[#8A8A8A] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANNER CTA ── */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1708915965975-2a950db0e215?w=1600&h=400&fit=crop&auto=format"
          alt="Cocina industrial impecable"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(28,28,30,0.88)] flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              ¿Tu cocina necesita una <span className="text-copper-gradient">transformación</span>?
            </h2>
            <a
              href="#contacto"
              className="inline-block px-10 py-3.5 font-semibold bg-[#C47A35] text-white rounded hover:bg-[#D8954A] transition-all duration-200 hover:shadow-lg hover:shadow-[rgba(196,122,53,0.4)]"
            >
              Contáctanos Hoy
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section id="testimonios" className="py-24 px-6 bg-[#252527]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C47A35] mb-4">Lo que dicen de nosotros</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Testimonios</h2>
            <div className="w-16 h-1 bg-[#C47A35] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="p-8 bg-[#2E2E30] rounded-xl border border-[rgba(196,122,53,0.1)]">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-[#C47A35] text-lg">★</span>
                  ))}
                </div>
                <p className="text-[#B0ADA8] leading-relaxed mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[rgba(196,122,53,0.1)]">
                  <div className="w-10 h-10 rounded-full bg-[#C47A35] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-[#8A8A8A]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C47A35] mb-4">Contáctanos</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Solicita tu<br />
              <span className="text-copper-gradient">Cotización Gratis</span>
            </h2>
            <div className="w-16 h-1 bg-[#C47A35] mb-8" />
            <p className="text-[#B0ADA8] leading-relaxed mb-10">
              Cuéntanos sobre tu cocina y te enviamos una cotización sin compromiso en menos de 24 horas. Trabajamos en Santiago y sus alrededores.
            </p>

            <div className="space-y-6">
              {[
                { icon: "📞", label: "Teléfono", value: "+56 9 1234 5678" },
                { icon: "📧", label: "Email", value: "contacto@cocinaimplacable.cl" },
                { icon: "📍", label: "Ubicación", value: "Santiago, Región Metropolitana" },
                { icon: "🕐", label: "Horario", value: "Lunes a Sábado 8:00 – 20:00" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(196,122,53,0.1)] border border-[rgba(196,122,53,0.2)] flex items-center justify-center text-xl flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-[#8A8A8A] mb-0.5">{c.label}</div>
                    <div className="font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#252527] rounded-2xl border border-[rgba(196,122,53,0.15)] p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-[rgba(196,122,53,0.15)] border border-[#C47A35] flex items-center justify-center text-4xl mb-6">
                  ✓
                </div>
                <h3 className="text-2xl font-bold mb-3">¡Mensaje Enviado!</h3>
                <p className="text-[#8A8A8A]">Te contactaremos en menos de 24 horas con tu cotización personalizada.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-medium tracking-wider uppercase text-[#8A8A8A] mb-2">Nombre</label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Tu nombre completo"
                    className="w-full bg-[#2E2E30] border border-[rgba(196,122,53,0.2)] rounded-lg px-4 py-3 text-sm text-[#F0EDE8] placeholder-[#555] outline-none focus:border-[#C47A35] transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-[#8A8A8A] mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@email.com"
                      className="w-full bg-[#2E2E30] border border-[rgba(196,122,53,0.2)] rounded-lg px-4 py-3 text-sm text-[#F0EDE8] placeholder-[#555] outline-none focus:border-[#C47A35] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-[#8A8A8A] mb-2">Teléfono</label>
                    <input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      placeholder="+56 9 ..."
                      className="w-full bg-[#2E2E30] border border-[rgba(196,122,53,0.2)] rounded-lg px-4 py-3 text-sm text-[#F0EDE8] placeholder-[#555] outline-none focus:border-[#C47A35] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium tracking-wider uppercase text-[#8A8A8A] mb-2">Mensaje</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder="Cuéntanos sobre tu cocina: tipo, tamaño, servicio que necesitas..."
                    className="w-full bg-[#2E2E30] border border-[rgba(196,122,53,0.2)] rounded-lg px-4 py-3 text-sm text-[#F0EDE8] placeholder-[#555] outline-none focus:border-[#C47A35] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 font-semibold bg-[#C47A35] text-white rounded-lg hover:bg-[#D8954A] transition-all duration-200 hover:shadow-lg hover:shadow-[rgba(196,122,53,0.3)]"
                >
                  Enviar Solicitud
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#141416] border-t border-[rgba(196,122,53,0.15)] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logoImage} alt="Logo Cocina Implacable" className="h-10 w-10 object-contain" />
                <div>
                  <div className="text-xs tracking-widest text-[#8A8A8A] uppercase">Cocina</div>
                  <div className="text-sm font-bold tracking-widest text-copper-gradient uppercase" style={{ fontFamily: "'Roboto Slab', serif" }}>Implacable</div>
                </div>
              </div>
              <p className="text-xs text-[#555] leading-relaxed">
                El Arte del Aseo en la Cocina.<br />Santiago, Chile — Est. 2024
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-[#8A8A8A] mb-4">Navegación</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-[#555] hover:text-[#C47A35] transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-[#8A8A8A] mb-4">Contacto</h4>
              <div className="space-y-2 text-sm text-[#555]">
                <div>📞 +56 9 1234 5678</div>
                <div>📧 contacto@cocinaimplacable.cl</div>
                <div>📍 Santiago, Chile</div>
              </div>
            </div>
          </div>

          <div className="border-t border-[rgba(255,255,255,0.05)] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#444]">© 2024 Cocina Implacable. Todos los derechos reservados.</p>
            <p className="text-xs text-[#444]">Hecho con <span className="text-[#C47A35]">♥</span> en Chile</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
