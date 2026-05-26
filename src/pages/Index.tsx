import { useState } from "react";
import Icon from "@/components/ui/icon";

const IRINA_PHOTO = "https://cdn.poehali.dev/projects/5a47bcfa-593e-404b-a1e5-22f719dc66db/bucket/9cccb9ed-ce76-498f-88d7-9e6e2fadac73.jpg";
const TG_LINK = "https://t.me/irina151718";
const MAX_LINK = "https://max.ru/u/f9LHodD0cOIDJO7b3GsFDqo7AwyJ6K_ZfksSWOiFwxRekcOz8X-iY9E9bvQ";

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
              Ирина Пархоменко
            </span>
            <span className="text-xs font-light tracking-[0.2em] text-muted-foreground">психолог</span>
          </div>
          <button
            onClick={() => scrollTo("join")}
            className="text-sm font-golos font-light tracking-wide text-primary border border-[hsl(350,40%,85%)] bg-[hsl(350,40%,97%)] px-4 py-2 hover:bg-[hsl(350,40%,93%)] transition-colors"
          >
            Войти в клуб
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-24 pb-6 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4 animate-fade-up animate-delay-1">
              Женский клуб
            </p>
            <h1 className="font-golos text-5xl md:text-6xl font-light leading-tight mb-6 animate-fade-up animate-delay-2">
              «Я Есть»
            </h1>
            <p className="text-base font-light leading-relaxed text-foreground/80 mb-6 animate-fade-up animate-delay-3">
              Пространство для женщин, которые устали жить в напряжении рядом с мужчиной и хотят снова почувствовать себя живыми.
            </p>
            <div className="mb-6 space-y-1 text-sm font-light text-muted-foreground animate-fade-up animate-delay-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Когда ты слишком долго:</p>
              <p>— терпишь</p>
              <p>— молчишь</p>
              <p>— подстраиваешься</p>
              <p>— боишься обидеть или разозлить</p>
              <p>— соглашаешься, когда внутри «не хочу»</p>
              <p>— живёшь так, будто всё время нужно быть удобной и сильной</p>
            </div>
            <button
              onClick={() => scrollTo("join")}
              className="animate-fade-up animate-delay-4 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-light tracking-wide hover:bg-primary/90 transition-all duration-300 hover:gap-4"
            >
              Войти в клуб
              <Icon name="ArrowRight" size={16} />
            </button>
          </div>
          <div className="relative animate-fade-up animate-delay-2">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={IRINA_PHOTO} alt="Ирина Пархоменко" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/40 -z-10" />
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-border" /></div>

      {/* NOTICED */}
      <section className="py-6 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-card border border-border">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">И в какой-то момент заметила:</p>
            <div className="space-y-2 text-sm font-light leading-relaxed text-muted-foreground">
              <p>— тело стало уставшим и зажатым</p>
              <p>— рядом с мужчиной пропало спокойствие</p>
              <p>— всё чаще хочется закрыться</p>
              <p>— стало меньше лёгкости, радости и желания жить</p>
              <p>— внутри как будто всё время напряжение</p>
            </div>
          </div>
          <div className="p-8 bg-card border border-border">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Этот клуб — место, где ты постепенно начинаешь:</p>
            <div className="space-y-2 text-sm font-light leading-relaxed text-muted-foreground">
              <p>— выдыхать</p>
              <p>— расслабляться</p>
              <p>— снова слышать себя</p>
              <p>— чувствовать лёгкость в теле</p>
              <p>— переставать жить «через силу»</p>
              <p>— возвращать вкус к жизни</p>
              <p>— расправлять свои крылышки рядом с собой, а не сжиматься от тревоги</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-border" /></div>

      {/* FOR WHOM */}
      <section id="forwhom" className="py-6 px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Аудитория</p>
          <h2 className="font-cormorant text-4xl font-light leading-snug">Кому подойдёт</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-card border border-border">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Это для тебя, если:</p>
            <div className="space-y-2 text-sm font-light leading-relaxed text-muted-foreground">
              <p>— ты устала тащить всё на себе</p>
              <p>— рядом с мужчиной часто тревожно и тяжело</p>
              <p>— тебе сложно говорить о своих желаниях</p>
              <p>— ты боишься конфликтов и чужой реакции</p>
              <p>— внутри много усталости и напряжения</p>
              <p>— хочется просто спокойно жить, а не всё время держаться</p>
              <p>— пропадает желание близости и ты не понимаешь, что с тобой происходит</p>
              <p>— хочется снова чувствовать себя женщиной, а не человеком, который всё терпит</p>
            </div>
          </div>
          <div className="p-8 bg-primary text-primary-foreground border border-primary flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-6">И внутри всё чаще:</p>
            <blockquote className="font-cormorant text-3xl font-light leading-relaxed text-primary-foreground">
              «я хочу снова почувствовать себя живой»
            </blockquote>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-border" /></div>

      {/* WHAT HAPPENS */}
      <section id="how" className="py-6 px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Формат</p>
          <h2 className="font-cormorant text-4xl font-light leading-snug">Что происходит<br />в клубе</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[
            { icon: "Video", title: "Живые встречи", desc: "Регулярные встречи, где ты можешь прийти со своим состоянием «как есть»" },
            { icon: "Heart", title: "Разборы ситуаций", desc: "Разборы ситуаций участниц, в которых ты начинаешь узнавать себя" },
            { icon: "Feather", title: "Мягкие практики", desc: "Практики, которые помогают расслабить тело, выдохнуть и вернуть контакт с собой" },
          ].map((item) => (
            <div key={item.title} className="p-8 bg-card border border-border hover:border-accent transition-colors duration-300">
              <Icon name={item.icon} fallback="Circle" size={20} className="text-primary mb-4" />
              <h3 className="font-cormorant text-2xl font-light mb-3">{item.title}</h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-card border border-border">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Разговоры о том:</p>
            <div className="space-y-2 text-sm font-light leading-relaxed text-muted-foreground">
              <p>— почему тело сжимается рядом с мужчиной</p>
              <p>— почему хочется отдалиться</p>
              <p>— почему пропадает желание близости</p>
              <p>— почему так страшно сказать: «я не хочу»</p>
            </div>
          </div>
          <div className="p-8 bg-card border border-border">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Пространство, где не нужно быть:</p>
            <div className="space-y-2 text-sm font-light leading-relaxed text-muted-foreground">
              <p>— сильной</p>
              <p>— правильной</p>
              <p>— удобной</p>
            </div>
            <p className="mt-6 text-sm font-light italic text-foreground/70 leading-relaxed">
              Это место, где ты постепенно перестаёшь выживать и начинаешь жить.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-border" /></div>

      {/* RESULT */}
      <section id="result" className="py-6 px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Итог</p>
          <h2 className="font-cormorant text-4xl font-light leading-snug">Что ты получишь</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-card border border-border">
            <div className="space-y-3 text-sm font-light leading-relaxed text-muted-foreground">
              <p>— внутри становится тише и спокойнее</p>
              <p>— тело начинает расслабляться рядом с мужчиной</p>
              <p>— появляется больше лёгкости и воздуха внутри</p>
              <p>— ты начинаешь лучше слышать себя и свои желания</p>
              <p>— уменьшается страх: «если я скажу о себе — меня не поймут»</p>
              <p>— появляется ощущение безопасности, которого так давно не хватало</p>
              <p>— постепенно возвращается желание жить, радоваться, смеяться, дышать полной грудью</p>
              <p>— ты перестаёшь всё время сжиматься и начинаешь снова расправляться внутри</p>
            </div>
          </div>
          <div className="p-8 bg-primary text-primary-foreground border border-primary flex flex-col justify-center gap-4">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">И появляется ощущение:</p>
            <p className="font-cormorant text-2xl font-light text-primary-foreground">«мне можно быть собой»</p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-border" /></div>

      {/* IMPORTANT */}
      <section id="important" className="py-6 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Важно</p>
            <h2 className="font-cormorant text-4xl font-light leading-snug">Важно<br />знать</h2>
          </div>
          <div className="md:col-span-2 flex flex-col justify-center gap-4 pt-4">
            <p className="text-base font-light leading-relaxed text-muted-foreground">
              Это не место, где тебя будут ломать или заставлять резко менять жизнь.
            </p>
            <p className="text-base font-light leading-relaxed text-muted-foreground">Это пространство, где ты постепенно:</p>
            <div className="space-y-2 text-base font-light leading-relaxed text-muted-foreground">
              <p>— возвращаешь себя себе</p>
              <p>— учишься выбирать себя без чувства вины</p>
              <p>— перестаёшь жить в постоянном напряжении</p>
              <p>— и снова начинаешь чувствовать вкус к жизни</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-border" /></div>

      {/* ABOUT */}
      <section id="about" className="py-6 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">Об авторе</p>
            <div className="text-base font-light leading-relaxed text-muted-foreground space-y-4">
              <p>Я — Ирина Пархоменко, психолог и сама прошла этот путь</p>
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
              <p className="italic text-foreground/60">Это не про советы и указания, как тебе жить, а рядом, в контакте, по-настоящему</p>
            </div>
          </div>
          <div className="bg-card border border-border p-10 flex flex-col gap-5">
            <Icon name="Quote" size={28} className="text-accent" />
            <blockquote className="font-cormorant text-2xl font-light leading-relaxed text-foreground">
              «Я создала клуб для тех, кто устал идти в одиночку. Здесь мы идём вместе — и это меняет всё.»
            </blockquote>
            <p className="text-sm text-muted-foreground font-light mt-2">— Ирина Пархоменко</p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-border" /></div>

      {/* TARIFFS */}
      <section id="tariffs" className="py-6 px-6 max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Участие</p>
          <h2 className="font-cormorant text-4xl font-light leading-snug">Форматы участия</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div
            className="p-10 border bg-primary text-primary-foreground border-primary cursor-pointer transition-all duration-300 hover:opacity-95"
            onClick={() => { setSelectedTariff("main"); scrollTo("join"); }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-1">Основной тариф</p>
            <h3 className="font-cormorant text-3xl font-light mb-5">9 месяцев</h3>
            <p className="text-xs uppercase tracking-[0.15em] text-primary-foreground/60 mb-3">Что внутри:</p>
            <ul className="space-y-2 mb-6">
              {["Еженедельные встречи", "Поддержка в чате", "Разборы состояний и жизненных ситуаций", "Мягкие телесные практики", "Работа с темой отношений, безопасности, тела и близости", "База «Записи и практики»"].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm font-light">
                  <Icon name="Check" size={14} className="mt-0.5 shrink-0 text-primary-foreground/70" />
                  <span className="text-primary-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs uppercase tracking-[0.15em] text-primary-foreground/60 mb-3">Результат:</p>
            <div className="space-y-1 mb-8 text-sm font-light text-primary-foreground/90">
              <p>— ты перестаёшь жить в постоянном напряжении</p>
              <p>— тело начинает чувствовать больше спокойствия и лёгкости</p>
              <p>— становится легче говорить о себе и своих желаниях</p>
              <p className="italic mt-3">«я живая» · «я могу дышать» · «мне снова хочется жить»</p>
            </div>
            <div className="font-cormorant text-3xl font-light mb-4">35 000 ₽ / 9 месяцев</div>
            <div className="text-sm font-light tracking-wide flex items-center gap-2 text-primary-foreground">
              Вступить в клуб <Icon name="ArrowRight" size={14} />
            </div>
          </div>

          <div
            className="p-10 border bg-card border-border hover:border-accent cursor-pointer transition-all duration-300"
            onClick={() => { setSelectedTariff("guest"); scrollTo("join"); }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Гостевой доступ</p>
            <h3 className="font-cormorant text-3xl font-light mb-3">1 месяц</h3>
            <p className="text-sm font-light text-muted-foreground mb-6 leading-relaxed">
              Формат, чтобы познакомиться с клубом, почувствовать атмосферу и увидеть первые изменения.
            </p>
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">Ты сможешь:</p>
            <ul className="space-y-2 mb-4">
              {["Прийти на встречи и почувствовать поддержку", "Разобрать свою ситуацию", "Увидеть, как тело связано с тревогой, напряжением и отношениями", "Попробовать практики, после которых внутри становится спокойнее и легче"].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm font-light">
                  <Icon name="Check" size={14} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm font-light italic text-muted-foreground mb-5">«я не одна» · «со мной всё не так не потому, что я слабая»</p>
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">Результат:</p>
            <div className="space-y-1 mb-8 text-sm font-light text-muted-foreground">
              <p>— внутри становится чуть тише</p>
              <p>— тело начинает понемногу расслабляться</p>
              <p>— появляется больше лёгкости и воздуха внутри</p>
              <p>— начинаешь лучше слышать себя</p>
              <p className="italic mt-2">«я снова оживаю»</p>
            </div>
            <div className="font-cormorant text-3xl font-light text-foreground mb-4">6 000 ₽</div>
            <div className="text-sm font-light tracking-wide flex items-center gap-2 text-primary">
              Попробовать клуб <Icon name="ArrowRight" size={14} />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-border" /></div>

      {/* FINAL BLOCK */}
      <section id="final" className="py-6 px-6 max-w-5xl mx-auto">
        <div className="bg-card border border-border p-10 md:p-14 max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">Для кого</p>
          <h2 className="font-cormorant text-4xl font-light leading-snug mb-8">Этот клуб для тебя, если ты устала:</h2>
          <div className="text-base font-light leading-relaxed text-muted-foreground space-y-1 text-left max-w-sm mx-auto mb-8">
            <p>— всё время держаться</p>
            <p>— молчать о себе</p>
            <p>— жить в тревоге и напряжении</p>
            <p>— сжиматься рядом с мужчиной</p>
            <p>— и чувствовать, как жизнь проходит мимо</p>
          </div>
          <p className="text-base font-light leading-relaxed text-muted-foreground mb-3">Здесь ты постепенно возвращаешь:</p>
          <div className="text-base font-light leading-relaxed text-muted-foreground space-y-1 text-left max-w-xs mx-auto mb-6">
            <p>— себя</p>
            <p>— своё спокойствие</p>
            <p>— лёгкость в теле</p>
            <p>— вкус к жизни</p>
          </div>
          <p className="font-cormorant text-2xl font-light italic text-foreground/70 mb-10">«я снова живая»</p>
          <button
            onClick={() => scrollTo("join")}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-sm font-light tracking-wide hover:bg-primary/90 transition-all duration-300 hover:gap-4"
          >
            Хочу в клуб
            <Icon name="ArrowRight" size={16} />
          </button>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-border" /></div>

      {/* JOIN FORM */}
      <section id="join" className="py-6 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Вступление</p>
            <h2 className="font-cormorant text-4xl font-light leading-snug mb-4">Оставьте заявку</h2>
            <p className="text-base font-light leading-relaxed text-muted-foreground mb-8">
              Я лично свяжусь с вами в течение дня.
            </p>
            <div className="space-y-3">
              <p className="text-sm font-light text-muted-foreground">Или напишите напрямую:</p>
              <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-border bg-card hover:border-accent transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center bg-[#2AABEE]/10">
                  <Icon name="Send" size={18} className="text-[#2AABEE]" />
                </div>
                <div>
                  <div className="text-sm font-medium">Telegram</div>
                  <div className="text-xs text-muted-foreground font-light">@irina151718</div>
                </div>
                <Icon name="ArrowRight" size={14} className="ml-auto text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={MAX_LINK} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-border bg-card hover:border-accent transition-colors group">
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
              <div className="flex flex-col items-center justify-center text-center p-10 bg-card border border-border">
                <Icon name="CheckCircle" size={40} className="text-primary mb-6" />
                <h3 className="font-cormorant text-3xl font-light mb-3">Спасибо за заявку!</h3>
                <p className="text-sm font-light text-muted-foreground mb-8">
                  Напишите мне «Хочу в Клуб» — я отвечу в течение дня 🤍
                </p>
                <div className="w-full space-y-3">
                  <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full border border-[#2AABEE]/40 bg-[#2AABEE]/5 text-[#2AABEE] py-4 text-sm font-light hover:bg-[#2AABEE]/10 transition-colors">
                    <Icon name="Send" size={16} />
                    Написать в Telegram
                  </a>
                  <a href={MAX_LINK} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full border border-border bg-card text-primary py-4 text-sm font-light hover:border-accent transition-colors">
                    <Icon name="MessageSquare" size={16} />
                    Написать в Max
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-3">Тариф</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: "main", name: "Основной", price: "35 000 ₽" },
                      { id: "guest", name: "Гостевой", price: "6 000 ₽" },
                    ].map((t) => (
                      <button key={t.id} type="button" onClick={() => setSelectedTariff(t.id)}
                        className={`p-4 border text-sm font-light text-left transition-all duration-200 ${
                          selectedTariff === t.id
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-card hover:border-accent"
                        }`}>
                        <div className="font-medium mb-1">{t.name}</div>
                        <div className={`text-xs ${selectedTariff === t.id ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{t.price}</div>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-2">Имя</label>
                  <input type="text" required placeholder="Ваше имя" value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-card border border-border px-4 py-3.5 text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-2">Email</label>
                  <input type="email" required placeholder="your@email.com" value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-card border border-border px-4 py-3.5 text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-2">Телефон</label>
                  <input type="tel" placeholder="+7 (___) ___-__-__" value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-card border border-border px-4 py-3.5 text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <button type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 text-sm font-light tracking-wide hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-3 hover:gap-4">
                  Оставить заявку
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
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-cormorant text-lg font-light tracking-widest text-foreground/50 uppercase">
            Ирина Пархоменко
          </span>
          <p className="text-xs font-light text-muted-foreground">
            © {new Date().getFullYear()} Женский клуб «Я Есть»
          </p>
        </div>
      </footer>
    </div>
  );
}