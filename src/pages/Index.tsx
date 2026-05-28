import { useState } from "react";
import Icon from "@/components/ui/icon";

const IRINA_PHOTO = "https://cdn.poehali.dev/projects/5a47bcfa-593e-404b-a1e5-22f719dc66db/bucket/9cccb9ed-ce76-498f-88d7-9e6e2fadac73.jpg";
const TG_LINK = "https://t.me/irina151718";
const MAX_LINK = "https://max.ru/u/f9LHodD0cOIDJO7b3GsFDqo7AwyJ6K_ZfksSWOiFwxRekcOz8X-iY9E9bvQ";

const Divider = () => (
  <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-border" /></div>
);

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
            <span className="text-xs font-light tracking-[0.2em] text-muted-foreground">психолог · психосоматолог</span>
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
              Пространство для тех женщин, которые уже начали выходить из молчания, из напряжения, из жизни ради отношений и привычки терпеть — но у которых ещё нет укреплённой внутренней опоры и которые боятся откатиться назад.
            </p>
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

      <Divider />

      {/* NOT THERAPY */}
      <section className="py-6 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-card border border-border">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Этот клуб — не терапия</p>
            <div className="space-y-3 text-sm font-light leading-relaxed text-muted-foreground">
              <p>Здесь нет глубинной проработки детства, ран и долгих разборов «почему так случилось».</p>
              <p>Это место, где ты встраиваешь в свою жизнь новое — и тебя поддерживают, когда становится тяжело.</p>
              <p>Мы не «работаем» над собой через силу, через «надо» и усталость.</p>
            </div>
          </div>
          <div className="p-8 bg-card border border-border">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Мы встраиваем новое:</p>
            <div className="space-y-1 text-sm font-light leading-relaxed text-muted-foreground mb-5">
              <p>— поведение</p>
              <p>— мышление</p>
              <p>— голос</p>
              <p>— границы</p>
              <p>— тело</p>
              <p>— привычки</p>
              <p>— отношения</p>
            </div>
            <p className="text-sm font-light text-muted-foreground italic">…в реальную жизнь не в теории. Так, чтобы оно становилось вашим естественным состоянием.</p>
          </div>
        </div>
        <div className="mt-4 p-6 bg-accent/20 border border-accent/30">
          <p className="text-sm font-light leading-relaxed text-foreground/80">
            И мы делаем это не только через понимание «в голове», а ещё через тело, через его память, через его реакции.
          </p>
        </div>
        <div className="mt-4 p-8 bg-card border border-border">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Сюда приходят, когда:</p>
          <div className="space-y-1 text-sm font-light text-muted-foreground">
            <p>— уже поняла, что «так больше нельзя»</p>
            <p>— уже начала слышать себя</p>
            <p>— но боишься, что одна не удержишь новое состояние</p>
          </div>
        </div>
      </section>

      <Divider />

      {/* FOR WHOM */}
      <section id="forwhom" className="py-6 px-6 max-w-5xl mx-auto">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Аудитория</p>
          <h2 className="font-cormorant text-4xl font-light leading-snug">Для кого этот клуб</h2>
        </div>
        <div className="mb-4 p-8 bg-card border border-border">
          <p className="text-sm font-light leading-relaxed text-muted-foreground mb-4">Вы пока не готовы к глубокой индивидуальной работе, но хотите уже сейчас начать:</p>
          <div className="space-y-1 text-sm font-light text-muted-foreground">
            <p>— выдыхать</p>
            <p>— расслаблять тело</p>
            <p>— слышать себя</p>
            <p>— и быть в пространстве, где тебя понимают</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-card border border-border">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Вы здесь, если слишком долго:</p>
            <div className="space-y-1 text-sm font-light leading-relaxed text-muted-foreground">
              <p>— терпели и молчали</p>
              <p>— боялись обидеть или разозлить</p>
              <p>— соглашались на близость, когда внутри было «не хочу»</p>
              <p>— жили так, будто всё время нужно быть удобной и сильной</p>
            </div>
          </div>
          <div className="p-8 bg-card border border-border">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">И в какой-то момент заметили:</p>
            <div className="space-y-1 text-sm font-light leading-relaxed text-muted-foreground">
              <p>— камень в груди, ком в горле, будто нечем дышать</p>
              <p>— болит спина, шея, а врачи говорят «всё нормально»</p>
              <p>— тело стало уставшим, зажатым, тяжёлым</p>
              <p>— рядом с ним пропало спокойствие</p>
              <p>— всё чаще хочется закрыться, отвернуться, молчать</p>
              <p>— лёгкость, радость и желание жить куда-то ушли</p>
              <p>— внутри — как будто всё время напряжение, даже когда «всё нормально»</p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* WHAT HAPPENS */}
      <section id="how" className="py-6 px-6 max-w-5xl mx-auto">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Формат</p>
          <h2 className="font-cormorant text-4xl font-light leading-snug">Что происходит<br />в клубе</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[
            { icon: "MessageCircle", title: "Честные разговоры", desc: "Обо всей жизни женщины: почему тело сжимается, почему молчим, как перестать жить на автомате" },
            { icon: "Activity", title: "Психосоматика", desc: "Разбираем, что тело пытается сказать через камень в груди, ком в горле, боль в спине и шее" },
            { icon: "Feather", title: "Мягкие практики", desc: "Помогают расслабить то, что годами было зажато, выдохнуть и вернуть контакт с собой" },
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
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Поддержка в чате</p>
            <p className="text-sm font-light leading-relaxed text-muted-foreground">Чтобы не откатываться в молчание и напряжение. Пространство, где не нужно быть сильной, правильной и удобной.</p>
          </div>
          <div className="p-8 bg-primary text-primary-foreground border border-primary flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-6">…и это ещё не всё</p>
            <blockquote className="font-cormorant text-2xl font-light leading-relaxed text-primary-foreground">
              «Здесь не нужно быть сильной»
            </blockquote>
          </div>
        </div>
      </section>

      <Divider />

      {/* SKILLS */}
      <section className="py-6 px-6 max-w-5xl mx-auto">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Навыки</p>
          <h2 className="font-cormorant text-4xl font-light leading-snug">Чему мы учимся в клубе</h2>
          <p className="text-sm font-light text-muted-foreground mt-3">Клуб — это не только практики для тела и разговоры о боли. Это ещё и реальные навыки новой жизни. Шаг за шагом, с примерами, в поддержке.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "О новом поведении",
              items: [
                "Как поступать по-другому в той самой ситуации, где раньше ты всегда молчала",
                "Как не сжиматься, когда он подходит обнять",
                "Как говорить «нет» и не проваливаться в вину",
                "Как перестать быть удобной и «хорошей»",
                "Как не спасать его и не брать на себя его ответственность",
              ]
            },
            {
              title: "О новом мышлении",
              items: [
                "Почему ты годами думала, что «терпеть — это любовь»",
                "Откуда взялось убеждение «если я скажу о себе — меня бросят»",
                "Как перестать оправдывать его поведение и обвинять себя",
                "Почему выбирать себя — это не эгоизм",
              ]
            },
            {
              title: "О том, как перестать молчать",
              items: [
                "Почему горло перехватывает, когда нужно сказать важное",
                "Как произносить «мне больно», «я не хочу», «со мной так нельзя» — без страха",
                "Как говорить о своих чувствах и спрашивать о его чувствах",
                "Как учиться разговаривать открыто",
              ]
            },
            {
              title: "О личных границах",
              items: [
                "Где заканчиваетесь вы и начинается он",
                "Почему трудно сказать «нет» и как это менять",
                "Как не брать на себя его эмоции, обиды и ответственность",
                "Что значит «моё тело сказало нет» — и почему это важно",
              ]
            },
            {
              title: "О доверии и радости",
              items: [
                "Как учиться доверять и делить ответственность, а не тащить всё одной",
                "Как принимать заботу от него — и проявлять в ответ",
                "Как осознанно радовать себя — даже мелочами",
                "Как говорить себе комплименты и замечать свои победы",
              ]
            },
            {
              title: "О телесной памяти",
              items: [
                "Каждый раз, когда у вас получилось по-новому — обязательно радоваться",
                "Говорить: «я смогла», «ура», «я могу», «получилось!»",
                "Тереть ладошки, обнимать себя, плясать, подпрыгивать",
                "Чтобы старые сценарии уходили, а новые привычки записывались в теле — радостью, а не через силу",
              ]
            },
          ].map((block) => (
            <div key={block.title} className="p-8 bg-card border border-border">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">{block.title}</p>
              <div className="space-y-1 text-sm font-light leading-relaxed text-muted-foreground">
                {block.items.map((item, i) => (
                  <p key={i}>— {item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* RESULT */}
      <section id="result" className="py-6 px-6 max-w-5xl mx-auto">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Итог</p>
          <h2 className="font-cormorant text-4xl font-light leading-snug">Что ты получишь</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-card border border-border space-y-1 text-sm font-light leading-relaxed text-muted-foreground">
            <p>— Ты перестаёшь бояться откатов — есть место, где помогут вернуться</p>
            <p>— Ты начинаешь замечать тот момент, где раньше автоматически молчала</p>
            <p>— Ты учишься говорить о себе — без страха и вины</p>
            <p>— Ты перестаёшь жить «на автомате» и начинаешь выбирать себя осознанно</p>
            <p>— Ты учишься просить помощь и принимать заботу</p>
            <p>— Ты учишься благодарить и хвалить — себя и его</p>
            <p>— Ты начинаешь радоваться своим победам</p>
          </div>
          <div className="p-8 bg-card border border-border space-y-1 text-sm font-light leading-relaxed text-muted-foreground">
            <p>— Камень в груди начинает отпускать</p>
            <p>— Горло перестаёт сжиматься, когда нужно сказать важное</p>
            <p>— Напряжение в спине и шее постепенно уходит</p>
            <p>— Тело начинает расслабляться рядом с мужчиной</p>
            <p>— Внутри становится тише и спокойнее</p>
            <p>— Появляется ощущение безопасности, которого давно не хватало</p>
            <p>— И постепенно возвращается вкус к жизни</p>
          </div>
        </div>
      </section>

      <Divider />

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

      <Divider />

      {/* TARIFFS */}
      <section id="tariffs" className="py-6 px-6 max-w-5xl mx-auto">
        <div className="mb-6">
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
              {[
                "Еженедельные встречи",
                "Поддержка в чате",
                "Честные разговоры обо всей жизни женщины",
                "Разборы психосоматических симптомов: камень в груди, ком в горле, боль в спине и шее",
                "Навыки новой жизни: просить помощь, говорить комплименты, доверять, радоваться, хвалить себя",
                "Практики, которые переписывают телесную память",
                "Мягкие телесные практики для расслабления и выдоха",
                "База «Записи и практики»",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm font-light">
                  <Icon name="Check" size={14} className="mt-0.5 shrink-0 text-primary-foreground/70" />
                  <span className="text-primary-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs uppercase tracking-[0.15em] text-primary-foreground/60 mb-3">Результат:</p>
            <div className="space-y-1 mb-8 text-sm font-light text-primary-foreground/90">
              <p>— Ты перестаёшь жить в постоянном напряжении</p>
              <p>— Тело начинает чувствовать больше спокойствия и лёгкости</p>
              <p>— Становится легче говорить о себе и своих желаниях</p>
              <p>— Ты учишься жить по-новому — без предательства себя</p>
              <p className="italic mt-3">«Я живая» · «Я могу дышать полной грудью» · «Мне снова хочется жить»</p>
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
              Попробовать, не вкладываясь сразу.
            </p>
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">Что внутри:</p>
            <ul className="space-y-2 mb-4">
              {[
                "Доступ ко всем встречам клуба на месяц",
                "Ты можешь просто сидеть и слушать — или задать свой вопрос",
                "Разбор своей ситуации",
                "Практики, после которых внутри становится спокойнее и легче",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm font-light">
                  <Icon name="Check" size={14} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">Что ты почувствуешь:</p>
            <div className="space-y-1 mb-8 text-sm font-light text-muted-foreground">
              <p>— «Я не одна»</p>
              <p>— «То, что со мной происходит — это не слабость. Это усталость»</p>
              <p>— Внутри становится чуть тише</p>
              <p>— Тело начинает понемногу расслабляться</p>
              <p className="italic mt-2">«Я снова оживаю»</p>
            </div>
            <div className="font-cormorant text-3xl font-light text-foreground mb-4">6 000 ₽</div>
            <div className="text-sm font-light tracking-wide flex items-center gap-2 text-primary">
              Попробовать клуб <Icon name="ArrowRight" size={14} />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* FINAL BLOCK */}
      <section id="final" className="py-6 px-6 max-w-5xl mx-auto">
        <div className="bg-card border border-border p-10 md:p-14 max-w-2xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl font-light leading-snug mb-8">Этот клуб для тебя, если ты устала:</h2>
          <div className="text-base font-light leading-relaxed text-muted-foreground space-y-1 text-left max-w-sm mx-auto mb-8">
            <p>— всё время держаться</p>
            <p>— молчать о себе</p>
            <p>— жить в тревоге и напряжении</p>
            <p>— сжиматься рядом с мужчиной</p>
            <p>— чувствовать, как жизнь проходит мимо</p>
          </div>
          <p className="text-base font-light leading-relaxed text-muted-foreground mb-3">Здесь ты постепенно возвращаешь:</p>
          <div className="text-base font-light leading-relaxed text-muted-foreground space-y-1 text-left max-w-xs mx-auto mb-6">
            <p>— себя</p>
            <p>— своё спокойствие</p>
            <p>— лёгкость в теле</p>
            <p>— вкус к жизни</p>
          </div>
          <p className="font-cormorant text-2xl font-light italic text-foreground/70 mb-6">«Я снова живая»</p>
          <div className="text-sm font-light text-muted-foreground space-y-1 mb-10">
            <p>Клуб «Я есть» — это место, где ты:</p>
            <p>— не одна · не обязана быть сильной · не боишься откатов</p>
            <p>— учишься жить по-новому</p>
            <p className="italic mt-2">Не через «надо». А через жизнь.</p>
          </div>
          <button
            onClick={() => scrollTo("join")}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-sm font-light tracking-wide hover:bg-primary/90 transition-all duration-300 hover:gap-4"
          >
            Хочу в клуб
            <Icon name="ArrowRight" size={16} />
          </button>
        </div>
      </section>

      <Divider />

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
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border mt-6">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-cormorant text-lg font-light tracking-widest text-foreground/60 uppercase">
              Женский клуб «Я Есть»
            </span>
          </div>
          <div className="flex gap-4">
            <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide">
              Telegram
            </a>
            <a href={MAX_LINK} target="_blank" rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide">
              Max
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}