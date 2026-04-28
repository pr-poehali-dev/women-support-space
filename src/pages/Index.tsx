import { useState } from "react";
import Icon from "@/components/ui/icon";

const IRINA_PHOTO = "https://cdn.poehali.dev/projects/5a47bcfa-593e-404b-a1e5-22f719dc66db/files/fae2eb97-a77b-4c33-a16f-f325fc274626.jpg";

const TARIFFS = [
  {
    id: "main",
    name: "Основной",
    price: "4 900 ₽ / мес",
    features: [
      "Закрытый клуб участниц",
      "Еженедельные встречи в Zoom",
      "Личная обратная связь от Ирины",
      "Доступ к материалам и записям",
      "Чат поддержки и общения",
    ],
    accent: true,
  },
  {
    id: "guest",
    name: "Гостевой",
    price: "990 ₽",
    features: [
      "Одна открытая встреча",
      "Знакомство с сообществом",
      "Доступ на 7 дней",
    ],
    accent: false,
  },
];

export default function Index() {
  const [selectedTariff, setSelectedTariff] = useState("main");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-golos">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-cormorant text-xl font-light tracking-widest text-foreground/70 uppercase">
            Ирина Плотникова
          </span>
          <button
            onClick={() => scrollTo("join")}
            className="text-sm font-golos font-light tracking-wide text-primary hover:text-foreground transition-colors"
          >
            Вступить в клуб
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6 animate-fade-up animate-delay-1">
              Женский клуб
            </p>
            <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-8 animate-fade-up animate-delay-2">
              Пространство,<br />
              где хочется<br />
              <em>возвращаться</em>
            </h1>
            <p className="text-base font-light leading-relaxed text-muted-foreground mb-10 max-w-sm animate-fade-up animate-delay-3">
              Камерный клуб для женщин, которые хотят расти осознанно — без давления, суеты и пустых советов.
            </p>
            <button
              onClick={() => scrollTo("join")}
              className="animate-fade-up animate-delay-4 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-light tracking-wide hover:bg-primary/90 transition-all duration-300 hover:gap-4"
            >
              Вступить в клуб
              <Icon name="ArrowRight" size={16} />
            </button>
          </div>
          <div className="relative animate-fade-up animate-delay-2">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={IRINA_PHOTO}
                alt="Ирина Плотникова"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/40 -z-10" />
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          <div className="md:col-span-1">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">О клубе</p>
            <h2 className="font-cormorant text-4xl font-light leading-snug">
              Философия<br />клуба
            </h2>
          </div>
          <div className="md:col-span-2 flex flex-col justify-center gap-6 pt-4">
            <p className="text-base font-light leading-relaxed text-muted-foreground">
              Мы не торопимся. Клуб — это место, где можно выдохнуть, сверить ориентиры и почувствовать поддержку живых людей рядом.
            </p>
            <p className="text-base font-light leading-relaxed text-muted-foreground">
              Здесь нет марафонов с дедлайнами и обещаний быстрого результата. Только честный разговор, практика и сообщество, которое тебя видит.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "Heart", title: "Поддержка", desc: "Живое общение и честная обратная связь — без маски и оценок" },
            { icon: "Sprout", title: "Рост", desc: "Шаг за шагом, в своём темпе — к себе настоящей" },
            { icon: "Users", title: "Сообщество", desc: "Женщины, которые вдохновляют и понимают без лишних слов" },
          ].map((item) => (
            <div key={item.title} className="p-8 bg-card border border-border hover:border-accent transition-colors duration-300">
              <Icon name={item.icon} fallback="Circle" size={20} className="text-primary mb-4" />
              <h3 className="font-cormorant text-2xl font-light mb-3">{item.title}</h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* ABOUT IRINA */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Об Ирине</p>
            <h2 className="font-cormorant text-4xl font-light leading-snug mb-8">
              Ирина<br />Плотникова
            </h2>
            <div className="space-y-5 text-base font-light leading-relaxed text-muted-foreground">
              <p>
                Более 10 лет Ирина сопровождает женщин в поиске себя — через коучинг, групповую работу и личные практики.
              </p>
              <p>
                Её подход — бережный и честный. Без инструментов давления, без искусственного позитива. Только то, что работает.
              </p>
              <p>
                Клуб стал естественным продолжением этого пути — пространством, где каждая участница важна.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { num: "10+", label: "лет опыта" },
                { num: "500+", label: "участниц" },
                { num: "4", label: "года клубу" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-cormorant text-4xl font-light text-primary">{s.num}</div>
                  <div className="text-xs text-muted-foreground mt-1 font-light">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card border border-border p-10 flex flex-col gap-5">
            <Icon name="Quote" size={28} className="text-accent" />
            <blockquote className="font-cormorant text-2xl font-light leading-relaxed text-foreground">
              «Я создала клуб для тех, кто устал идти в одиночку. Здесь мы идём вместе — и это меняет всё.»
            </blockquote>
            <p className="text-sm text-muted-foreground font-light mt-2">— Ирина Плотникова</p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* TARIFFS */}
      <section id="tariffs" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Участие</p>
          <h2 className="font-cormorant text-4xl font-light leading-snug">Форматы участия</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {TARIFFS.map((t) => (
            <div
              key={t.id}
              className={`p-10 border transition-all duration-300 cursor-pointer ${
                t.accent
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border hover:border-accent"
              }`}
              onClick={() => {
                setSelectedTariff(t.id);
                scrollTo("join");
              }}
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className={`text-xs uppercase tracking-[0.2em] mb-2 ${t.accent ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                    {t.id === "main" ? "Основной" : "Пробный"}
                  </p>
                  <h3 className="font-cormorant text-3xl font-light">{t.name}</h3>
                </div>
                <div className="text-right">
                  <div className="font-cormorant text-2xl font-light">{t.price}</div>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm font-light">
                    <Icon name="Check" size={14} className={`mt-0.5 shrink-0 ${t.accent ? "text-primary-foreground/70" : "text-primary"}`} />
                    <span className={t.accent ? "text-primary-foreground/90" : "text-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className={`text-sm font-light tracking-wide flex items-center gap-2 ${t.accent ? "text-primary-foreground" : "text-primary"}`}>
                Выбрать тариф <Icon name="ArrowRight" size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* JOIN FORM */}
      <section id="join" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Вступление</p>
            <h2 className="font-cormorant text-4xl font-light leading-snug mb-6">
              Оставьте заявку
            </h2>
            <p className="text-base font-light leading-relaxed text-muted-foreground mb-8">
              Ирина лично рассматривает каждую заявку и свяжется с вами в течение дня.
            </p>
            <div className="space-y-6">
              {[
                { icon: "MessageCircle", label: "Telegram", value: "@irina_plotnikova" },
                { icon: "Instagram", label: "Instagram", value: "@plotnikova.club" },
                { icon: "Mail", label: "Email", value: "hello@plotnikova.club" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-border">
                    <Icon name={c.icon} fallback="Circle" size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-light">{c.label}</div>
                    <div className="text-sm font-light">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 bg-card border border-border">
                <Icon name="CheckCircle" size={40} className="text-primary mb-6" />
                <h3 className="font-cormorant text-3xl font-light mb-3">Заявка отправлена</h3>
                <p className="text-sm font-light text-muted-foreground">
                  Ирина свяжется с вами в ближайшее время. Ждите сообщения 🤍
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-3">
                    Тариф
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {TARIFFS.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedTariff(t.id)}
                        className={`p-4 border text-sm font-light text-left transition-all duration-200 ${
                          selectedTariff === t.id
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-card hover:border-accent"
                        }`}
                      >
                        <div className="font-medium mb-1">{t.name}</div>
                        <div className={`text-xs ${selectedTariff === t.id ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                          {t.price}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-card border border-border px-4 py-3.5 text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-card border border-border px-4 py-3.5 text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-card border border-border px-4 py-3.5 text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 text-sm font-light tracking-wide hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-3 hover:gap-4"
                >
                  Отправить заявку
                  <Icon name="ArrowRight" size={16} />
                </button>

                <p className="text-xs text-muted-foreground font-light text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-cormorant text-lg font-light tracking-widest text-foreground/50 uppercase">
            Ирина Плотникова
          </span>
          <p className="text-xs font-light text-muted-foreground">
            © {new Date().getFullYear()} Клуб Ирины Плотниковой
          </p>
        </div>
      </footer>
    </div>
  );
}