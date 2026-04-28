import { useState } from "react";
import Icon from "@/components/ui/icon";

const IRINA_PHOTO = "https://cdn.poehali.dev/projects/5a47bcfa-593e-404b-a1e5-22f719dc66db/bucket/e0cb6d32-7906-4b2c-947a-47b1d1a5a3fb.jpg";

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
          <div>
            <span className="font-cormorant text-xl font-light tracking-widest text-foreground/70 uppercase block">
              Ирина Плотникова
            </span>
            <span className="text-xs font-light tracking-[0.2em] text-muted-foreground">психолог</span>
          </div>
          <button
            onClick={() => scrollTo("join")}
            className="text-sm font-golos font-light tracking-wide text-primary border border-[hsl(350,40%,85%)] bg-[hsl(350,40%,97%)] px-4 py-2 hover:bg-[hsl(350,40%,93%)] transition-colors"
          >
            Вступить в клуб
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-28 pb-12 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6 animate-fade-up animate-delay-1">
              Женский клуб
            </p>
            <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6 animate-fade-up animate-delay-2">
              Пространство,<br />
              где хочется<br />
              <em>возвращаться</em>
            </h1>
            <p className="text-base font-light leading-relaxed text-foreground/80 mb-4 animate-fade-up animate-delay-3">
              Поддерживающее пространство для женщин, которые хотят закрепить новое состояние, не откатываться назад и жить в контакте с собой каждый день.
            </p>
            <p className="text-base font-light leading-relaxed text-muted-foreground mb-8 max-w-sm animate-fade-up animate-delay-3">
              Тёплый клуб для женщин, которые хотят расти осознанно — без давления, суеты и пустых советов.
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
                className="w-full h-full object-cover object-top"
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
      <section id="philosophy" className="py-12 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <div className="md:col-span-1">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">О клубе</p>
            <h2 className="font-cormorant text-4xl font-light leading-snug">
              Философия<br />клуба
            </h2>
          </div>
          <div className="md:col-span-2 flex flex-col justify-center gap-5 pt-4">
            <p className="text-base font-light leading-relaxed text-muted-foreground">
              Клуб — это место, где можно выдохнуть, сверить ориентиры и почувствовать поддержку живых людей рядом.
            </p>
            <p className="text-base font-light leading-relaxed text-muted-foreground">
              Здесь нет марафонов со строгими сроками и обещаний быстрого результата. Только честный разговор, практика и сообщество, которое тебя видит. Мы не торопимся.
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
      <section id="about" className="py-12 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Об авторе</p>
            <h2 className="font-cormorant text-4xl font-light leading-snug mb-6">
              Ирина<br />Плотникова
            </h2>
            <div className="text-base font-light leading-relaxed text-muted-foreground space-y-4">
              <p>Я — Ирина Плотникова, психолог и сама прошла этот путь</p>
              <div className="space-y-1">
                <p className="font-medium text-foreground/80 mb-2">Я знаю, как это:</p>
                <p>— терять себя и не понимать, где ты настоящая</p>
                <p>— жить через «надо», даже когда внутри всё сопротивляется</p>
                <p>— возвращаться к себе… и снова откатываться назад</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground/80 mb-2">И моя задача здесь:</p>
                <p>— быть рядом и не оставлять тебя одну в этом состоянии</p>
                <p>— поддержать в моменты, когда тебе тяжело и ты снова хочешь «сдаться»</p>
                <p>— помочь тебе не потерять себя снова и закрепить то, к чему ты приходишь</p>
              </div>
              <p className="italic text-foreground/60">
                Это не про советы и указания, как тебе жить, а рядом, в контакте, по-настоящему
              </p>
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
      <section id="tariffs" className="py-12 px-6 max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Участие</p>
          <h2 className="font-cormorant text-4xl font-light leading-snug">Форматы участия</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">

          {/* MAIN TARIFF */}
          <div
            className="p-10 border bg-primary text-primary-foreground border-primary cursor-pointer transition-all duration-300 hover:opacity-95"
            onClick={() => { setSelectedTariff("main"); scrollTo("join"); }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-1">Основной тариф</p>
            <h3 className="font-cormorant text-3xl font-light mb-1">9 месяцев</h3>
            <p className="text-sm font-light text-primary-foreground/80 mb-6 leading-relaxed">
              Пространство, где ты живёшь в поддержке и не возвращаешься в прежнее состояние
            </p>
            <p className="text-xs uppercase tracking-[0.15em] text-primary-foreground/60 mb-3">Что внутри:</p>
            <ul className="space-y-2 mb-6">
              {[
                "Еженедельные встречи, где ты разбираешь свои реальные ситуации",
                "Разборы состояний, в которых ты теряешь себя и не понимаешь, что с тобой происходит",
                "Поддержка в чате, чтобы ты не оставалась одна и не откатывалась обратно",
                "Практики и объяснения, которые помогают тебе применять это в жизни",
                "«Записи и практики», чтобы ты могла возвращаться и закреплять изменения",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm font-light">
                  <Icon name="Check" size={14} className="mt-0.5 shrink-0 text-primary-foreground/70" />
                  <span className="text-primary-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs uppercase tracking-[0.15em] text-primary-foreground/60 mb-3">Результат:</p>
            <ul className="space-y-2 mb-8">
              {[
                "Ты не откатываешься обратно в прежнее состояние",
                "Быстрее выходишь из тяжёлых состояний и не застреваешь в них",
                "Продолжаешь выбирать себя в жизни, а не только понимать это",
                "Чувствуешь стабильность и внутреннюю опору",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm font-light">
                  <Icon name="Sparkles" size={14} className="mt-0.5 shrink-0 text-primary-foreground/70" />
                  <span className="text-primary-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
            <div className="font-cormorant text-3xl font-light mb-4">35 000 ₽ / 9 месяцев</div>
            <div className="text-sm font-light tracking-wide flex items-center gap-2 text-primary-foreground">
              Вступить в клуб <Icon name="ArrowRight" size={14} />
            </div>
          </div>

          {/* GUEST TARIFF */}
          <div
            className="p-10 border bg-card border-border hover:border-accent cursor-pointer transition-all duration-300"
            onClick={() => { setSelectedTariff("guest"); scrollTo("join"); }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Гостевой доступ</p>
            <h3 className="font-cormorant text-3xl font-light mb-1">1 месяц</h3>
            <p className="text-sm font-light text-muted-foreground mb-6 leading-relaxed">
              Формат, чтобы попробовать и почувствовать, как это — быть в поддержке
            </p>
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">Ты сможешь:</p>
            <ul className="space-y-2 mb-5">
              {[
                "Прийти на встречи и разобрать свою ситуацию",
                "Задать свои вопросы и получить ответы под свою жизнь",
                "Почувствовать атмосферу и формат работы",
                "Получить первые изменения и увидеть, как это работает",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm font-light">
                  <Icon name="Check" size={14} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">Без доступа:</p>
            <ul className="space-y-2 mb-5">
              {[
                "К полной базе «Записи и практики»",
                "К глубокой части клуба",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm font-light">
                  <Icon name="Minus" size={14} className="mt-0.5 shrink-0 text-muted-foreground" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">Результат:</p>
            <ul className="space-y-2 mb-8">
              {[
                "Становится легче в теле и внутри",
                "Появляется ощущение, что ты не одна",
                "Начинаешь замечать, где теряешь себя",
                "Появляются первые реальные изменения",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm font-light">
                  <Icon name="Sparkles" size={14} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <div className="font-cormorant text-3xl font-light text-foreground mb-4">6 000 ₽</div>
            <div className="text-sm font-light tracking-wide flex items-center gap-2 text-primary">
              Попробовать клуб <Icon name="ArrowRight" size={14} />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* FOR YOU */}
      <section id="foryou" className="py-12 px-6 max-w-5xl mx-auto">
        <div className="bg-card border border-border p-10 md:p-14 max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">Для кого</p>
          <h2 className="font-cormorant text-4xl font-light leading-snug mb-8">
            Этот клуб для тебя, если:
          </h2>
          <div className="text-base font-light leading-relaxed text-muted-foreground space-y-2 text-left max-w-sm mx-auto mb-8">
            <p>— ты устала всё проживать одна</p>
            <p>— устала начинать и снова откатываться</p>
            <p>— и хочешь наконец удержать себя</p>
          </div>
          <p className="text-base font-light leading-relaxed text-muted-foreground mb-8">
            Тебе не нужно снова искать, разбираться и начинать с нуля. Можно быть в поддержке, не откатываться и идти к себе спокойно.
          </p>
          <p className="font-cormorant text-xl font-light italic text-foreground/70 mb-10">
            Если у тебя в теле, особенно в груди, откликается сжатием, тяжестью или, наоборот, теплом и лёгкостью — значит тебе сюда
          </p>
          <button
            onClick={() => scrollTo("join")}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-sm font-light tracking-wide hover:bg-primary/90 transition-all duration-300 hover:gap-4"
          >
            Хочу в клуб
            <Icon name="ArrowRight" size={16} />
          </button>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* JOIN FORM */}
      <section id="join" className="py-12 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Вступление</p>
            <h2 className="font-cormorant text-4xl font-light leading-snug mb-4">
              Оставьте заявку
            </h2>
            <p className="text-base font-light leading-relaxed text-muted-foreground mb-8">
              Я лично свяжусь с вами в течение дня.
            </p>
            <div className="space-y-4">
              <p className="text-sm font-light text-muted-foreground">Или напишите мне напрямую:</p>
              <a
                href="https://t.me/irina151718"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-border bg-card hover:border-accent transition-colors group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#2AABEE]/10">
                  <Icon name="Send" size={18} className="text-[#2AABEE]" />
                </div>
                <div>
                  <div className="text-sm font-medium">Telegram</div>
                  <div className="text-xs text-muted-foreground font-light">@irina151718</div>
                </div>
                <Icon name="ArrowRight" size={14} className="ml-auto text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://max.ru/u/f9LHodD0cOIDJO7b3GsFDqo7AwyJ6K_ZfksSWOiFwxRekcOz8X-iY9E9bvQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-border bg-card hover:border-accent transition-colors group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10">
                  <Icon name="MessageSquare" size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium">Max</div>
                  <div className="text-xs text-muted-foreground font-light">Написать в Max</div>
                </div>
                <Icon name="ArrowRight" size={14} className="ml-auto text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </a>
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
                    {[
                      { id: "main", name: "Основной", price: "35 000 ₽" },
                      { id: "guest", name: "Гостевой", price: "6 000 ₽" },
                    ].map((t) => (
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
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-2">Имя</label>
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
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-2">Email</label>
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
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-2">Телефон</label>
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

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://t.me/irina151718"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-[#2AABEE]/40 bg-[#2AABEE]/5 text-[#2AABEE] py-3.5 text-sm font-light hover:bg-[#2AABEE]/10 transition-colors"
                  >
                    <Icon name="Send" size={15} />
                    Telegram
                  </a>
                  <a
                    href="https://max.ru/u/f9LHodD0cOIDJO7b3GsFDqo7AwyJ6K_ZfksSWOiFwxRekcOz8X-iY9E9bvQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-border bg-card text-primary py-3.5 text-sm font-light hover:border-accent transition-colors"
                  >
                    <Icon name="MessageSquare" size={15} />
                    Max
                  </a>
                </div>

                <p className="text-xs text-muted-foreground font-light text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8 px-6">
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
