// All 10 course modules
const D = window.COURSE_DATA;

// =========================================================
// MODULE 0 — Welcome
// =========================================================
function Module0({ onNext }) {
  const [accepted, setAccepted] = useState([false, false, false, false]);
  const toggle = (i) => setAccepted(a => a.map((v, j) => j === i ? !v : v));
  const options = [
    "Знаю, как надо жить, но не могу воплотить. Книги прочитаны — ничего не меняется.",
    "Чувствую, что застрял(а) — в отношениях, работе, привычках — и не понимаю почему.",
    "Хочу понимать людей глубже и влиять на ситуации без манипуляций.",
    "Интересно, как на самом деле работает мой разум — не на уровне «думай позитивно»."
  ];
  const count = accepted.filter(Boolean).length;

  return (
    <div className="enter">
      <H1 num="00" title="Добро пожаловать" subtitle="Это курс о том, как перестать быть пленником своего разума и стать его архитектором." />

      <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-start">
        <div>
          <P>
            Представьте, что вы живёте в доме. Вы видите стены, мебель, окна. Всё кажется реальным и единственно возможным.
          </P>
          <P>
            А теперь представьте, что кто-то говорит вам: «Ты <Em>сам</Em> построил этот дом. Ты выбрал планировку, расставил мебель, решил, какие двери будут открываться, а какие — заколочены навсегда. И ты забыл, что сделал всё это.»
          </P>
          <P>
            Этот дом — ваш разум. Его стены — это <Em>фреймы</Em>. И этот курс — инструкция, как стать архитектором собственного дома вместо того, чтобы быть его пленником.
          </P>
        </div>

        <Card className="sticky top-8">
          <div className="tag text-violet mb-3">Как устроен каждый модуль</div>
          <ul className="space-y-3">
            {[
              ["Теория", "концепция простым языком, без академического тумана"],
              ["Ключевые идеи", "выжимка в нескольких фразах"],
              ["Практика", "упражнения прямо в процессе"],
              ["Домашнее задание", "то, что делаете в реальной жизни между модулями"],
              ["Проверь себя", "вопросы, которые покажут глубину понимания"]
            ].map(([t, d], i) => (
              <li key={i} className="flex gap-3">
                <span className="font-mono text-xs text-mute mt-1 w-5">0{i + 1}</span>
                <div>
                  <div className="text-ink font-medium">{t}</div>
                  <div className="text-sm text-mute leading-snug">{d}</div>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <H2 eyebrow="Интерактив · 01">Этот курс для вас, если...</H2>
      <P>Отметьте всё, что про вас. Это не тест — это способ настроить намерение.</P>

      <div className="grid md:grid-cols-2 gap-3 mt-6">
        {options.map((txt, i) => (
          <CheckItem key={i} checked={accepted[i]} onToggle={() => toggle(i)}>{txt}</CheckItem>
        ))}
      </div>

      {count > 0 && (
        <div className="mt-6 p-5 rounded-xl pop" style={{ background: "rgba(167,139,250,0.06)", border: "1px solid rgba(167,139,250,0.25)" }}>
          <div className="flex items-center gap-3 text-violet">
            <Icon name="sparkles" size={18} />
            <span className="font-medium">
              {count === 1 && "Одного совпадения уже достаточно. Пойдёмте дальше."}
              {count === 2 && "Две точки входа — хорошая причина пройти курс до конца."}
              {count === 3 && "Три из четырёх — курс написан для вас."}
              {count === 4 && "Полное попадание. Начинайте прямо сейчас."}
            </span>
          </div>
        </div>
      )}

      <KeyIdea>
        Этот курс меняет то, как вы смотрите на мир. Буквально. После Модуля 4 вы начнёте замечать фреймы повсюду. Это цель, а не побочный эффект.
      </KeyIdea>

      <div className="dotline h-px my-16" />

      <div className="flex items-center gap-4 text-mute font-mono text-sm">
        <span>Готовы?</span>
        <div className="flex-1 h-px bg-line" />
        <span>Тогда начнём →</span>
      </div>

      <NavButtons onPrev={() => {}} onNext={onNext} prevDisabled prevLabel="Начало" nextLabel="М1 · Что такое фреймы" />
    </div>
  );
}

// =========================================================
// MODULE 1 — What are frames (interactive: one fact, three frames)
// =========================================================
function Module1({ onPrev, onNext }) {
  const [active, setActive] = useState(0);
  const f = D.threeFrames[active];

  return (
    <div className="enter">
      <H1 num="01" title={<>Что такое фреймы<br/>и почему они правят всем</>} subtitle="Фрейм — это ментальная рамка, через которую вы смотрите на событие. Он определяет, что вы видите, чувствуете и как реагируете." />

      <H2 eyebrow="Эксперимент · 01">Один факт, три фрейма</H2>
      <P>Переключайте фрейм и наблюдайте, как меняется ваше восприятие человека по имени Сергей.</P>

      <div className="mt-8 rounded-3xl border border-line overflow-hidden">
        <div className="grid grid-cols-3 border-b border-line">
          {D.threeFrames.map((frame, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="p-4 text-left border-r border-line last:border-r-0 transition-all"
              style={{
                background: active === i ? "var(--panel-2)" : "transparent",
                color: active === i ? "var(--ink)" : "var(--ink-mute)"
              }}
            >
              <div className="tag mb-1" style={{ color: active === i ? "var(--violet)" : "var(--ink-mute)" }}>
                Фрейм {i + 1}
              </div>
              <div className="font-medium leading-tight text-sm md:text-base">{frame.label}</div>
            </button>
          ))}
        </div>
        <div className="p-8 md:p-12 relative min-h-[280px]" style={{
          background: f.tone === "positive" ? "radial-gradient(400px 200px at 20% 20%, rgba(134,239,172,0.06), transparent)" :
                     f.tone === "negative" ? "radial-gradient(400px 200px at 20% 20%, rgba(252,165,165,0.06), transparent)" :
                     "radial-gradient(400px 200px at 20% 20%, rgba(167,139,250,0.06), transparent)"
        }}>
          <div key={active} className="pop">
            <div className="font-serif text-2xl md:text-4xl leading-tight text-ink mb-8" style={{ textWrap: "balance" }}>
              «{f.text}»
            </div>
            <div className="flex items-center gap-3 text-dim">
              <Icon name="arrow-right" size={16} className="text-violet" />
              <span className="italic">{f.feeling}</span>
            </div>
          </div>
        </div>
      </div>

      <P className="mt-8">
        Заметили? Один и тот же факт — «человек отдал деньги другим людям» — вызывает совершенно разные реакции в зависимости от рамки. Ничего не изменилось в реальности. Изменился только фрейм.
      </P>

      <KeyIdea>
        Не событие определяет вашу реакцию. Фрейм, через который вы смотрите на событие, определяет реакцию. Измените фрейм — изменится всё.
      </KeyIdea>

      <H2 eyebrow="Пример · 02">Утренняя пробежка в четырёх фреймах</H2>
      <div className="grid md:grid-cols-2 gap-3 mt-6">
        {[
          ["Фрейм наказания", "«Я должен бегать, иначе растолстею. Опять вставать в эту рань…»", "Бросит через 2 недели.", "rose"],
          ["Фрейм инвестиции", "«Каждый километр — вклад в здоровье на 20 лет вперёд.»", "Выдержит 3–6 месяцев.", "amber"],
          ["Фрейм игры", "«Интересно, смогу ли я сегодня быстрее, чем вчера?»", "Продержится год.", "violet"],
          ["Фрейм идентичности", "«Я — человек, который бегает по утрам.»", "Будет бегать годами.", "mint"]
        ].map(([name, quote, out, tone], i) => (
          <Card key={i} className="!p-6">
            <Pill tone={tone}>{name}</Pill>
            <div className="font-serif text-xl mt-3 mb-4 leading-snug text-ink">«{quote}»</div>
            <div className="flex items-center gap-2 text-sm text-mute">
              <Icon name="arrow-right" size={14} /> {out}
            </div>
          </Card>
        ))}
      </div>

      <H2 eyebrow="Разбор · 03">Почему «просто думай позитивно» не работает</H2>
      <P>Позитивное мышление пытается поменять <Em>содержимое</Em> внутри фрейма, не меняя сам фрейм. Это как навести порядок в комнате, не замечая, что стены кривые, а дверь заколочена.</P>
      <P>Фрейм — это не то, <Em>что</Em> вы думаете. Фрейм — это <Em>как</Em> вы думаете. Аффирмации говорят «я достоин». Фрейм отвечает: «Ага, конечно. Посмотри на доказательства.» И фрейм побеждает, потому что он — структура, а аффирмация — лишь содержимое.</P>

      <KeyIdea>Проблема — никогда не в вас как в человеке. Проблема — во фрейме. Вы — тот, кто может выбирать свои фреймы.</KeyIdea>

      <NavButtons onPrev={onPrev} onNext={onNext} prevLabel="М0 · Добро пожаловать" nextLabel="М2 · Архитектура разума" />
    </div>
  );
}

// =========================================================
// MODULE 2 — Architecture of mind (5 stages animation)
// =========================================================
function Module2({ onPrev, onNext }) {
  const [stage, setStage] = useState(1);
  const s = D.stages[stage - 1];

  // Auto-advance
  useEffect(() => {
    const t = setTimeout(() => {
      if (stage < 5) setStage(stage + 1);
    }, 3200);
    return () => clearTimeout(t);
  }, [stage]);

  const [metaPrim, setMetaPrim] = useState("раздражение");
  const [metaMeta, setMetaMeta] = useState("принятие");
  const combos = {
    "принятие": { result: "Небольшое облачко. Быстро пройдёт.", tone: "mint" },
    "любопытство": { result: "Превращается в данные. «Что я узнал о себе?»", tone: "mint" },
    "стыд": { result: "Снежный ком. Вы расстроены тем, что расстроены.", tone: "rose" },
    "злость на себя": { result: "Бесконечная спираль. Дракон, питающий сам себя.", tone: "rose" },
    "юмор": { result: "Обезоруживает. «Ну, опять я завёлся из-за ерунды.»", tone: "amber" }
  };
  const metaKey = metaMeta;

  return (
    <div className="enter">
      <H1 num="02" title="Архитектура разума" subtitle="Никто не рождается с фреймами. Они формируются послойно — как снег, который постепенно превращается в лёд." />

      <H2 eyebrow="Пять стадий · 01">Как переживание становится матрицей</H2>
      <P>Нажмите на стадию, чтобы изучить её подробнее — или дождитесь автоматической анимации.</P>

      <div className="mt-10 mb-6 relative">
        <div className="flex items-center justify-between relative">
          {D.stages.map((st, i) => (
            <React.Fragment key={i}>
              <button
                onClick={() => setStage(st.n)}
                className="flex flex-col items-center gap-2 relative z-10 group"
              >
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-mono text-sm transition-all"
                  style={{
                    background: stage >= st.n ? "var(--violet)" : "var(--panel)",
                    color: stage >= st.n ? "#0b0f1a" : "var(--ink-mute)",
                    border: `2px solid ${stage === st.n ? "var(--amber)" : stage > st.n ? "var(--violet)" : "var(--line)"}`,
                    boxShadow: stage === st.n ? "0 0 0 6px rgba(251,191,36,0.12)" : "none"
                  }}
                >
                  {st.n}
                </div>
                <div className="text-[10px] md:text-xs text-center max-w-[80px] leading-tight"
                  style={{ color: stage >= st.n ? "var(--ink)" : "var(--ink-mute)" }}>
                  {st.name.split(" ")[0]}
                </div>
              </button>
              {i < 4 && (
                <div className="flex-1 h-px relative mx-1" style={{ marginTop: "-28px" }}>
                  <div className="absolute inset-0" style={{ background: "var(--line)" }}/>
                  <div className="absolute inset-y-0 left-0 transition-all duration-700"
                    style={{ background: "var(--violet)", width: stage > i + 1 ? "100%" : "0%" }}/>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div key={stage} className="mt-8 pop">
        <Card>
          <div className="flex items-start gap-6 flex-col md:flex-row">
            <div className="font-serif text-7xl md:text-8xl leading-none text-violet opacity-70">
              {String(s.n).padStart(2, "0")}
            </div>
            <div className="flex-1">
              <Pill tone="violet">Стадия {s.n}</Pill>
              <div className="font-serif text-3xl md:text-4xl text-ink mt-3 mb-3 leading-tight">{s.name}</div>
              <P className="!mb-4">{s.desc}</P>
              <div className="mt-4 p-4 rounded-lg font-mono text-sm text-amber" style={{ background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.15)" }}>
                Пример: {s.example}
              </div>
            </div>
          </div>
        </Card>
      </div>

      <KeyIdea>
        Переживание → Запись → Ориентир → Фрейм ума → Матрица. Каждая стадия делает фрейм менее заметным и более автоматическим.
      </KeyIdea>

      <H2 eyebrow="Этажи · 02">Первичные состояния и мета-состояния</H2>
      <P>Ваш разум работает на нескольких уровнях одновременно — как многоэтажное здание. Вы чувствуете не просто раздражение. Вы чувствуете что-то <Em>по поводу</Em> раздражения. И именно мета-уровень определяет качество переживания.</P>

      <Card className="mt-6">
        <div className="tag text-mute mb-4">Соберите свою эмоциональную комбинацию</div>
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
          <div>
            <div className="text-xs text-mute mb-2">Первичная эмоция (1 этаж)</div>
            <div className="flex flex-wrap gap-2">
              {["раздражение", "тревога", "грусть"].map(p => (
                <button key={p} onClick={() => setMetaPrim(p)}
                  className="px-3 py-2 rounded-lg border text-sm transition-all"
                  style={{ borderColor: metaPrim === p ? "var(--violet)" : "var(--line)", background: metaPrim === p ? "rgba(167,139,250,0.1)" : "transparent", color: metaPrim === p ? "var(--ink)" : "var(--ink-dim)" }}>
                  {p}
                </button>
              ))}
            </div>
          </div>
          <div className="text-center font-serif text-3xl text-violet">+</div>
          <div>
            <div className="text-xs text-mute mb-2">Мета-отношение (2 этаж)</div>
            <div className="flex flex-wrap gap-2">
              {Object.keys(combos).map(m => (
                <button key={m} onClick={() => setMetaMeta(m)}
                  className="px-3 py-2 rounded-lg border text-sm transition-all"
                  style={{ borderColor: metaMeta === m ? "var(--amber)" : "var(--line)", background: metaMeta === m ? "rgba(251,191,36,0.1)" : "transparent", color: metaMeta === m ? "var(--ink)" : "var(--ink-dim)" }}>
                  {m}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-line" key={metaPrim + metaMeta}>
          <div className="tag text-mute mb-2">Результат</div>
          <div className="font-serif text-2xl md:text-3xl leading-tight pop" style={{ color: combos[metaKey].tone === "rose" ? "var(--rose)" : combos[metaKey].tone === "mint" ? "var(--mint)" : "var(--amber)" }}>
            {metaPrim} + {metaMeta} = {combos[metaKey].result}
          </div>
        </div>
      </Card>

      <KeyIdea>
        Не первичные эмоции создают проблемы. Проблемы создаёт то, что вы думаете и чувствуете по поводу своих эмоций. Фреймы живут на верхних этажах.
      </KeyIdea>

      <H2 eyebrow="Ресурс · 03">Ваша Зона Силы</H2>
      <P>У вас есть четыре базовые способности — инструменты, с которыми вы будете работать весь курс.</P>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
        {[
          ["Мышление", "Я могу думать о своих мыслях", "brain"],
          ["Чувствование", "Я могу менять отношение к чувствам", "heart"],
          ["Речь", "Я могу выбирать слова", "message-circle"],
          ["Действие", "Я могу поступать по-новому", "zap"]
        ].map(([n, d, ic], i) => (
          <Card key={i} className="!p-5">
            <Icon name={ic} size={22} className="text-violet mb-3" />
            <div className="font-medium text-ink mb-1">{n}</div>
            <div className="text-sm text-mute leading-snug">{d}</div>
          </Card>
        ))}
      </div>

      <NavButtons onPrev={onPrev} onNext={onNext} prevLabel="М1 · Что такое фреймы" nextLabel="М3 · 15 законов" />
    </div>
  );
}

// =========================================================
// MODULE 3 — 15 Laws (accordion)
// =========================================================
function Module3({ onPrev, onNext }) {
  const [open, setOpen] = useState(1);
  return (
    <div className="enter">
      <H1 num="03" title="15 законов фрейм-игр" subtitle="Шахматный гроссмейстер знает не только ходы. Он знает принципы. Эти 15 законов — не теория, а рабочие инструменты." />

      <H2 eyebrow="Сборник законов · 01">Принципы, на которых держится вся система</H2>
      <P>Прочитайте все. Затем вернитесь к тем, что зацепили. Именно с них стоит начать практику.</P>

      <div className="mt-8 space-y-2">
        {D.laws.map(law => {
          const isOpen = open === law.n;
          return (
            <div key={law.n}
              className="rounded-xl border overflow-hidden transition-all"
              style={{ borderColor: isOpen ? "rgba(167,139,250,0.4)" : "var(--line)", background: isOpen ? "rgba(167,139,250,0.04)" : "var(--panel)" }}>
              <button
                onClick={() => setOpen(isOpen ? 0 : law.n)}
                className="w-full p-5 md:p-6 flex items-start gap-5 text-left"
              >
                <div className="font-serif text-3xl md:text-4xl leading-none w-14 md:w-16 flex-shrink-0"
                  style={{ color: isOpen ? "var(--amber)" : "var(--ink-mute)" }}>
                  {String(law.n).padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-ink text-lg leading-snug">{law.title}</div>
                  {isOpen && (
                    <div className="pop mt-4 space-y-4">
                      <div className="text-dim leading-relaxed">{law.body}</div>
                      <div className="p-4 rounded-lg flex gap-3 items-start" style={{ background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.15)" }}>
                        <Icon name="lightbulb" size={16} className="text-amber mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-amber leading-relaxed">{law.hint}</div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-2 text-mute transition-transform" style={{ transform: isOpen ? "rotate(45deg)" : "none" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </div>
              </button>
            </div>
          );
        })}
      </div>

      <KeyIdea>
        Энергия течёт за вниманием. Внимание — за намерением. Определите своё высшее намерение — и остальные фреймы выстроятся под ним.
      </KeyIdea>

      <NavButtons onPrev={onPrev} onNext={onNext} prevLabel="М2 · Архитектура" nextLabel="М4 · Детектив фреймов" />
    </div>
  );
}

// =========================================================
// MODULE 4 — Detective (12 traps checklist + 8 tools)
// =========================================================
function Module4({ onPrev, onNext }) {
  const [checked, setChecked] = useState({});
  const [activeTool, setActiveTool] = useState(1);
  const toggle = (n) => setChecked(c => ({ ...c, [n]: !c[n] }));
  const count = Object.values(checked).filter(Boolean).length;
  const grouped = D.traps.reduce((acc, t) => ((acc[t.group] = acc[t.group] || []).push(t), acc), {});

  return (
    <div className="enter">
      <H1 num="04" title="Детектив фреймов" subtitle="Вы не можете изменить то, чего не видите. Этот модуль — ваш фонарик. После него вы будете видеть фреймы везде." />

      <H2 eyebrow="Чеклист · 01">12 ловушек мышления</H2>
      <P>Отметьте те, которые узнаёте в себе. Честность здесь — больше, чем «правильный» ответ. Это только для вас.</P>

      <div className="mt-6 flex items-center gap-3 text-sm">
        <div className="flex-1 h-1.5 bg-panel-2 rounded-full overflow-hidden">
          <div className="h-full transition-all" style={{ width: `${(count / 12) * 100}%`, background: "var(--violet)" }}/>
        </div>
        <span className="font-mono text-dim">{count} / 12</span>
      </div>

      <div className="mt-8 space-y-8">
        {Object.entries(grouped).map(([group, items]) => (
          <div key={group}>
            <div className="flex items-center gap-3 mb-4">
              <span className="tag text-violet">{group}</span>
              <div className="flex-1 h-px bg-line" />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {items.map(t => (
                <div key={t.n}
                  onClick={() => toggle(t.n)}
                  className="p-5 rounded-xl border cursor-pointer lift"
                  style={{
                    borderColor: checked[t.n] ? "rgba(167,139,250,0.4)" : "var(--line)",
                    background: checked[t.n] ? "rgba(167,139,250,0.06)" : "var(--panel)"
                  }}>
                  <div className="flex items-start gap-3">
                    <span className="chk mt-0.5" data-on={!!checked[t.n]}>
                      {checked[t.n] && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0b0f1a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                    </span>
                    <div className="flex-1">
                      <div className="font-medium text-ink mb-1">{t.n}. {t.name}</div>
                      <div className="text-sm text-dim mb-2">{t.desc}</div>
                      <div className="font-mono text-[11px] text-mute mb-2">МАРКЕР · {t.marker}</div>
                      <div className="text-sm italic text-amber">«{t.example}»</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {count >= 3 && (
        <div className="mt-8 p-6 rounded-xl pop" style={{ background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.2)" }}>
          <div className="tag text-amber mb-2">Обратная связь</div>
          <div className="font-serif text-xl text-ink leading-snug">
            {count <= 4 && "Честно и по делу. У вас есть работа над несколькими ловушками — этого достаточно для начала."}
            {count >= 5 && count <= 8 && "Типичный срез человека, внимательного к себе. Не пытайтесь закрыть всё сразу — возьмите две-три."}
            {count >= 9 && "Вы сейчас или очень честны, или переоцениваете проблему. Попробуйте выбрать три самые болезненные и работать только с ними."}
          </div>
        </div>
      )}

      <H2 eyebrow="Инструменты · 02">8 линз для обнаружения фреймов</H2>
      <P>Каждый инструмент — отдельный способ искать скрытые фреймы. Попробуйте разные — один из них подойдёт именно вам.</P>

      <div className="mt-8 grid md:grid-cols-[240px_1fr] gap-6">
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
          {D.detectiveTools.map(tool => (
            <button
              key={tool.n}
              onClick={() => setActiveTool(tool.n)}
              className="p-4 rounded-lg text-left border flex-shrink-0 md:flex-shrink whitespace-nowrap md:whitespace-normal transition-all"
              style={{
                borderColor: activeTool === tool.n ? "var(--violet)" : "var(--line)",
                background: activeTool === tool.n ? "rgba(167,139,250,0.08)" : "transparent",
                color: activeTool === tool.n ? "var(--ink)" : "var(--ink-dim)"
              }}>
              <div className="font-mono text-[11px] text-mute mb-1">0{tool.n}</div>
              <div className="font-medium text-sm">{tool.name}</div>
            </button>
          ))}
        </div>
        <Card key={activeTool} className="pop">
          {(() => {
            const t = D.detectiveTools[activeTool - 1];
            return <>
              <Pill tone="violet">Инструмент {t.n}</Pill>
              <div className="font-serif text-3xl md:text-4xl text-ink mt-3 mb-4">{t.name}</div>
              <P>{t.desc}</P>
              {t.n === 3 && (
                <div className="grid sm:grid-cols-3 gap-3 mt-4">
                  {[["«но»", "→ «и»"], ["«должен»", "→ «выбираю»"], ["«не могу»", "→ «пока не умею»"]].map(([a, b], i) => (
                    <div key={i} className="p-4 rounded-lg bg-panel-2 border border-line">
                      <div className="font-mono text-rose mb-1">{a}</div>
                      <div className="font-mono text-mint text-sm">{b}</div>
                    </div>
                  ))}
                </div>
              )}
              {t.n === 5 && (
                <div className="mt-4 space-y-2 font-mono text-sm">
                  <div className="text-rose">У меня <u>была</u> проблема с уверенностью <span className="text-mute"> — прошлое, уже неактуально</span></div>
                  <div className="text-dim">У меня <u>есть</u> проблема с уверенностью <span className="text-mute"> — настоящее, тяжёлое</span></div>
                  <div className="text-mint">Я <u>осваиваю</u> уверенность <span className="text-mute"> — движение, надежда</span></div>
                </div>
              )}
              {t.n === 8 && (
                <div className="grid sm:grid-cols-2 gap-3 mt-4 text-sm">
                  {[["должен", "тяжесть, обязательства", "rose"], ["хочу", "мечтания, мало действий", "amber"], ["могу", "возможности, открытость", "mint"], ["не могу", "стены, закрытость", "rose"]].map(([w, d, tone], i) => (
                    <div key={i} className="p-3 rounded-lg border border-line">
                      <span className="font-mono" style={{ color: tone === "rose" ? "var(--rose)" : tone === "mint" ? "var(--mint)" : "var(--amber)" }}>«{w}»</span>
                      <span className="text-mute ml-2">— {d}</span>
                    </div>
                  ))}
                </div>
              )}
            </>;
          })()}
        </Card>
      </div>

      <KeyIdea>Пока фрейм высвечивает содержание — он прячет себя. Обнаружение — навык, который меняет всё. Увидели фрейм — у вас появился выбор.</KeyIdea>

      <NavButtons onPrev={onPrev} onNext={onNext} prevLabel="М3 · 15 законов" nextLabel="М5 · Щитовая стена" />
    </div>
  );
}

Object.assign(window, { Module0, Module1, Module2, Module3, Module4 });
