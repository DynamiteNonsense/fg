// Modules 5-9
const D2 = window.COURSE_DATA;

// =========================================================
// MODULE 5 — Shield wall (4 reject techniques)
// =========================================================
function Module5({ onPrev, onNext }) {
  const [tech, setTech] = useState(1);
  const [dragon, setDragon] = useState("");
  const [dragonName, setDragonName] = useState("");
  const t = D2.rejectTechniques[tech - 1];

  return (
    <div className="enter">
      <H1 num="05" title="Щитовая стена" subtitle="Чтобы сказать настоящее «Да» жизни, которую вы хотите, — нужно уметь сказать настоящее «Нет» тому, что вас разрушает." />

      <H2 eyebrow="Предупреждение · 01">Драконьи состояния: когда вы воюете с собой</H2>
      <P>Первичная эмоция маленькая — она прошла бы сама. Но если вы добавляете к ней негативный мета-фрейм — создаёте дракона. Стыд за стыд. Страх страха. Злость на злость.</P>

      <div className="grid md:grid-cols-2 gap-3 mt-6">
        {[
          ["Самобичевание", "«Я должен быть лучше» + ошибка", "Бесконечный цикл самокритики."],
          ["Тревожная спираль", "«Тревожиться плохо» + тревога", "Тревога по поводу тревоги."],
          ["Паралич перфекциониста", "«Ошибка недопустима» + страх", "Невозможность начать."],
          ["Эмоциональная тюрьма", "«Нельзя злиться» + естественная злость", "Подавление, затем взрыв."]
        ].map(([n, frm, res], i) => (
          <Card key={i} className="!p-5">
            <div className="flex items-center gap-2 mb-2">
              <Icon name="flame" size={16} className="text-rose" />
              <span className="font-medium text-ink">{n}</span>
            </div>
            <div className="text-sm font-mono text-dim mb-1">{frm}</div>
            <div className="text-sm text-mute">= {res}</div>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-5 rounded-xl" style={{ background: "rgba(167,139,250,0.04)", border: "1px solid rgba(167,139,250,0.2)" }}>
        <div className="tag text-violet mb-3">Назови своего дракона</div>
        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-mute mb-1 block">Какой дракон чаще всего приходит к вам?</label>
            <input
              value={dragon} onChange={e => setDragon(e.target.value)}
              placeholder="напр., раздражение на собственную тревогу"
              className="w-full p-3 bg-panel border border-line rounded-lg text-ink placeholder:text-mute focus-ring"
            />
          </div>
          <div>
            <label className="text-xs text-mute mb-1 block">Дайте ему яркое имя</label>
            <input
              value={dragonName} onChange={e => setDragonName(e.target.value)}
              placeholder="напр., Марафон Самобичевания"
              className="w-full p-3 bg-panel border border-line rounded-lg text-ink placeholder:text-mute focus-ring"
            />
          </div>
        </div>
        {dragonName && (
          <div className="mt-4 font-serif text-xl text-amber pop">
            «Привет, {dragonName}! Вижу, ты опять пришёл. Спасибо, но сегодня без тебя.»
          </div>
        )}
      </div>

      <KeyIdea>Проблема — не в первичной эмоции. Проблема — во фрейме, который вы накладываете на эмоцию. Перестаньте воевать со своими чувствами.</KeyIdea>

      <H2 eyebrow="Четыре техники · 02">От мягкого называния до жёсткого разрушения</H2>
      <P>Выбирайте технику по ситуации: для мелких привычных — называние, для глубоких — нейрологическое «Нет», для «логичных» — расфреймирование, для упрямых — разрушение.</P>

      <div className="mt-8 flex flex-wrap gap-2">
        {D2.rejectTechniques.map(rt => (
          <button
            key={rt.n}
            onClick={() => setTech(rt.n)}
            className="px-4 py-3 rounded-lg border transition-all text-left"
            style={{
              borderColor: tech === rt.n ? "var(--violet)" : "var(--line)",
              background: tech === rt.n ? "rgba(167,139,250,0.08)" : "var(--panel)"
            }}>
            <div className="font-mono text-[11px] text-mute">Техника {rt.n}</div>
            <div className="text-sm font-medium text-ink whitespace-nowrap">{rt.name}</div>
          </button>
        ))}
      </div>

      <Card key={tech} className="mt-6 pop">
        <Pill tone="violet">Техника {t.n}</Pill>
        <div className="font-serif text-3xl md:text-4xl text-ink mt-3 mb-2">{t.name}</div>
        <div className="text-dim mb-8">{t.tagline}</div>

        <div className="space-y-0">
          {t.steps.map((st, i) => (
            <Step key={i} n={i + 1} title={st.t}>{st.d}</Step>
          ))}
        </div>
      </Card>

      <KeyIdea>
        Для мелких — называйте. Для глубоких — нейрологическое «Нет». Для логичных — разбирайте. Для упрямых — ломайте.
      </KeyIdea>

      <NavButtons onPrev={onPrev} onNext={onNext} prevLabel="М4 · Детектив" nextLabel="М6 · Алхимия разума" />
    </div>
  );
}

// =========================================================
// MODULE 6 — Alchemy (5-step recipe)
// =========================================================
function Module6({ onPrev, onNext }) {
  const [step, setStep] = useState(1);
  const s = D2.recipe[step - 1];
  const [oldFrame, setOldFrame] = useState("");
  const [newFrame, setNewFrame] = useState("");

  return (
    <div className="enter">
      <H1 num="06" title="Алхимия разума" subtitle="Убрать токсичный фрейм недостаточно. Пустое место притянет старый фрейм обратно. Нужна трансформация — превратить свинец в золото." />

      <H2 eyebrow="Базовый рецепт · 01">Пять шагов, которые работают для любого фрейма</H2>

      <div className="mt-10 grid md:grid-cols-5 gap-3">
        {D2.recipe.map(r => (
          <button
            key={r.n}
            onClick={() => setStep(r.n)}
            className="p-4 rounded-xl border text-left transition-all relative overflow-hidden"
            style={{
              borderColor: step === r.n ? "var(--amber)" : "var(--line)",
              background: step === r.n ? "linear-gradient(180deg, rgba(251,191,36,0.1), rgba(251,191,36,0.02))" : "var(--panel)"
            }}>
            <div className="font-mono text-[11px] text-mute mb-1">ШАГ {r.n}</div>
            <div className="font-serif text-xl leading-tight text-ink mb-1">{r.name}</div>
            <div className="text-xs text-dim">{r.verb}</div>
            {step === r.n && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: "var(--amber)" }}/>
            )}
          </button>
        ))}
      </div>

      <Card className="mt-6" key={step}>
        <div className="pop flex items-start gap-6 flex-col md:flex-row">
          <div className="font-serif text-8xl leading-none text-amber opacity-80">
            {s.n}
          </div>
          <div className="flex-1">
            <Pill tone="amber">{s.name}</Pill>
            <div className="font-serif text-3xl md:text-4xl text-ink mt-3 mb-4">{s.verb}</div>
            <P className="!mb-0">{s.desc}</P>
          </div>
        </div>
      </Card>

      <KeyIdea>ДОСТУП → АНАЛИЗ → УСИЛЕНИЕ → ПРИМЕНЕНИЕ → ЗАКРЕПЛЕНИЕ. Пять шагов. Один рецепт. Запомните наизусть.</KeyIdea>

      <H2 eyebrow="Практика · 02">Великолепная Ошибочность</H2>
      <P>Классический пример трансформации. Старый фрейм: «Я ошибся → я неудачник → со мной что-то не так.» Замена: ошибочность — не дефект, а фича человека. Попробуйте применить рецепт к своему ограничивающему фрейму:</P>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div>
          <div className="tag text-rose mb-2">Старый фрейм</div>
          <textarea
            value={oldFrame} onChange={e => setOldFrame(e.target.value)}
            placeholder="Например: «Я не справляюсь с публичными выступлениями»"
            className="w-full p-4 bg-panel border border-line rounded-xl text-ink placeholder:text-mute focus-ring min-h-[120px] resize-y"
          />
        </div>
        <div>
          <div className="tag text-mint mb-2">Новый фрейм</div>
          <textarea
            value={newFrame} onChange={e => setNewFrame(e.target.value)}
            placeholder="Например: «Мой голос заслуживает быть услышанным. Я расту с каждым выступлением»"
            className="w-full p-4 bg-panel border border-line rounded-xl text-ink placeholder:text-mute focus-ring min-h-[120px] resize-y"
            style={{ borderColor: newFrame ? "rgba(134,239,172,0.3)" : undefined }}
          />
        </div>
      </div>

      {oldFrame && newFrame && (
        <div className="mt-6 p-6 rounded-xl pop" style={{ background: "rgba(134,239,172,0.04)", border: "1px solid rgba(134,239,172,0.2)" }}>
          <div className="tag text-mint mb-3">Ваша алхимическая формула</div>
          <div className="font-serif text-xl md:text-2xl leading-snug text-ink">
            <span className="text-rose line-through">«{oldFrame}»</span>
            <span className="mx-3 text-amber">→</span>
            <span>«{newFrame}»</span>
          </div>
          <div className="text-sm text-mute mt-4">
            Теперь пройдите рецепт: вспомните момент, когда вы уже были таким (доступ) · проверьте экологию · раскачайте ощущение · наложите на ситуацию · представьте будущее.
          </div>
        </div>
      )}

      <H2 eyebrow="Парадокс · 03">Впускание негативного</H2>
      <P>Чем яростнее вы боретесь с негативной эмоцией, тем сильнее она становится. Это китайская ловушка для пальцев: чем сильнее тянешь — тем крепче сжимает. Решение? Перестаньте тянуть. Впустите.</P>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <Card className="!p-5">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="swords" size={16} className="text-rose" />
            <span className="tag text-rose">Сопротивление</span>
          </div>
          <div className="text-ink font-medium mb-2">«Нельзя тревожиться, перестань!»</div>
          <div className="text-sm text-mute">Усиливает эмоцию. Тратит энергию на борьбу вместо действия.</div>
        </Card>
        <Card className="!p-5">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="hand-heart" size={16} className="text-mint" />
            <span className="tag text-mint">Принятие</span>
          </div>
          <div className="text-ink font-medium mb-2">«Привет, тревога. Спасибо, что пришла. Заходи.»</div>
          <div className="text-sm text-mute">Обезоруживает. Фрейм теряет силу, когда вы перестаёте с ним сражаться.</div>
        </Card>
      </div>

      <KeyIdea>Сопротивление усиливает фрейм. Принятие обезоруживает его. Это не пассивность — это стратегия.</KeyIdea>

      <NavButtons onPrev={onPrev} onNext={onNext} prevLabel="М5 · Щитовая стена" nextLabel="М7 · Установка" />
    </div>
  );
}

// =========================================================
// MODULE 7 — Install (10 methods as cards)
// =========================================================
function Module7({ onPrev, onNext }) {
  const [selected, setSelected] = useState([]);
  const toggleSel = (n) => setSelected(s => s.includes(n) ? s.filter(x => x !== n) : s.length < 3 ? [...s, n] : s);

  return (
    <div className="enter">
      <H1 num="07" title="Установка" subtitle="Трансформация — это прозрение: «Можно по-другому». Установка — это когда «по-другому» становится вашим дефолтом. Без неё — понедельничная мотивация." />

      <H2 eyebrow="10 способов · 01">Выберите свою тройку</H2>
      <P>Каждый способ воздействует через свой канал. Отметьте 3, которые резонируют с вами лично. Именно эту комбинацию стоит применять к своему новому фрейму.</P>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-panel-2 rounded-full overflow-hidden">
          <div className="h-full transition-all" style={{ width: `${(selected.length / 3) * 100}%`, background: "var(--violet)" }}/>
        </div>
        <span className="font-mono text-sm text-dim">{selected.length} / 3</span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
        {D2.installMethods.map(m => {
          const isSel = selected.includes(m.n);
          return (
            <div
              key={m.n}
              onClick={() => toggleSel(m.n)}
              className="p-5 rounded-xl border cursor-pointer lift relative"
              style={{
                borderColor: isSel ? "var(--violet)" : "var(--line)",
                background: isSel ? "linear-gradient(180deg, rgba(167,139,250,0.12), rgba(167,139,250,0.03))" : "var(--panel)"
              }}>
              <div className="flex items-start justify-between mb-3">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ background: isSel ? "rgba(167,139,250,0.18)" : "var(--panel-2)" }}>
                  <Icon name={m.icon} size={20} className={isSel ? "text-violet" : "text-dim"} />
                </div>
                <span className="font-mono text-[11px] text-mute">{String(m.n).padStart(2, "0")}</span>
              </div>
              <div className="font-medium text-ink mb-2 leading-snug">{m.name}</div>
              <div className="text-sm text-dim leading-relaxed">{m.desc}</div>
              {isSel && (
                <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-violet flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0b0f1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selected.length === 3 && (
        <div className="mt-8 p-6 rounded-xl pop" style={{ background: "rgba(167,139,250,0.06)", border: "1px solid rgba(167,139,250,0.3)" }}>
          <div className="tag text-violet mb-3">Ваша тройка установки</div>
          <div className="flex flex-wrap gap-2 mb-4">
            {selected.map(n => {
              const m = D2.installMethods.find(x => x.n === n);
              return (
                <div key={n} className="px-4 py-2 rounded-full bg-panel-2 border border-violet/30 flex items-center gap-2">
                  <Icon name={m.icon} size={14} className="text-violet" />
                  <span className="text-ink font-medium text-sm">{m.name}</span>
                </div>
              );
            })}
          </div>
          <div className="text-dim">
            План на 3 недели: неделя 1 — {D2.installMethods.find(x => x.n === selected[0])?.name.toLowerCase()}, неделя 2 — добавьте {D2.installMethods.find(x => x.n === selected[1])?.name.toLowerCase()}, неделя 3 — {D2.installMethods.find(x => x.n === selected[2])?.name.toLowerCase()}. Не больше трёх одновременно.
          </div>
        </div>
      )}

      <H2 eyebrow="Разбор · 02">Метод «Мысль-в-Мускул»</H2>
      <P>Один из самых мощных методов: провести идею через все 6 уровней — от понимания до действия и обратно.</P>

      <div className="mt-6 space-y-0">
        {[
          ["Понимание", "«Я понимаю, что ошибки — это данные для обучения.»"],
          ["Убеждение", "«Я верю, что каждая ошибка делает меня умнее.»"],
          ["Решение", "«Я решаю встречать каждую ошибку с любопытством.»"],
          ["Состояние", "«Я чувствую азарт исследователя, когда что-то идёт не по плану.»"],
          ["Действие", "«Сегодня, когда что-то пойдёт не так, я скажу вслух: Любопытно! Что я могу извлечь?»"],
          ["Интеграция", "Пройти все уровни сверху вниз и снова вверх 3–5 раз. Связи укрепляются."]
        ].map(([n, q], i) => (
          <Step key={i} n={i + 1} title={n} kind="amber">{q}</Step>
        ))}
      </div>

      <KeyIdea>Вопрос устанавливает фрейм быстрее утверждения. «Что бы я сделал, если бы был полностью уверен?» — и мозг ищет ответ, временно принимая фрейм.</KeyIdea>

      <NavButtons onPrev={onPrev} onNext={onNext} prevLabel="М6 · Алхимия" nextLabel="М8 · Правила победы" />
    </div>
  );
}

// =========================================================
// MODULE 8 — Rules (audit your rules)
// =========================================================
function Module8({ onPrev, onNext }) {
  const [area, setArea] = useState("успешен");
  const [rule, setRule] = useState("");
  const [criteria, setCriteria] = useState({ self: null, today: null, process: null, often: null });

  const setC = (k, v) => setCriteria(c => ({ ...c, [k]: v }));
  const answered = Object.values(criteria).filter(v => v !== null).length;
  const score = Object.values(criteria).filter(v => v === true).length;

  return (
    <div className="enter">
      <H1 num="08" title="Правила победы" subtitle="Правила, по которым вы играете, определяют, можете ли вы вообще выиграть. Некоторые игры непобедимы по конструкции — не потому что вы слабый." />

      <H2 eyebrow="Примеры · 01">Непобедимые игры — как они выглядят</H2>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {[
          ["Саша", "Успех = быть на первом месте.", "Всегда найдётся кто-то с большей зарплатой. Проигрыш запрограммирован."],
          ["Лена", "Хорошая мать = дети никогда не плачут.", "Дети плачут. Это нормально. По её правилам она проигрывает каждый день."],
          ["Марк", "Я достаточно хорош, когда у меня миллион.", "Сейчас 50к → 950к ежедневного «недостаточно»."],
          ["Вера", "Я счастлива, когда все вокруг довольны.", "Не контролирует чужие чувства. Проигрывает постоянно."]
        ].map(([n, rule, out], i) => (
          <Card key={i} className="!p-5">
            <div className="tag text-rose mb-2">{n}</div>
            <div className="font-serif text-lg text-ink mb-2 leading-snug">«{rule}»</div>
            <div className="text-sm text-mute">→ {out}</div>
          </Card>
        ))}
      </div>

      <KeyIdea>
        Если вы постоянно чувствуете, что «не дотягиваете» — проблема может быть не в вас, а в правилах вашей игры.
      </KeyIdea>

      <H2 eyebrow="Аудит · 02">Проверьте своё правило</H2>
      <P>Выберите область жизни, запишите одно текущее правило — и прогоните его через 4 критерия выигрышной игры.</P>

      <Card className="mt-6">
        <div className="tag text-mute mb-3">Шаг 1 · Выберите область</div>
        <div className="flex flex-wrap gap-2 mb-6">
          {["успешен", "любим", "достоин", "здоров", "хороший родитель"].map(a => (
            <button key={a} onClick={() => setArea(a)}
              className="px-4 py-2 rounded-full border transition-all"
              style={{
                borderColor: area === a ? "var(--violet)" : "var(--line)",
                background: area === a ? "rgba(167,139,250,0.1)" : "transparent",
                color: area === a ? "var(--ink)" : "var(--ink-dim)"
              }}>
              {a}
            </button>
          ))}
        </div>

        <div className="tag text-mute mb-2">Шаг 2 · Откуда я знаю, что я {area}?</div>
        <textarea
          value={rule} onChange={e => setRule(e.target.value)}
          placeholder={`Например: «Я знаю, что я ${area}, когда…»`}
          className="w-full p-4 bg-panel-2 border border-line rounded-xl text-ink placeholder:text-mute focus-ring min-h-[80px] resize-y mb-6"
        />

        {rule && (
          <div className="pop">
            <div className="tag text-mute mb-3">Шаг 3 · Прогоните через 4 критерия</div>
            <div className="space-y-3">
              {D2.ruleCriteria.map(c => (
                <div key={c.key} className="p-4 rounded-lg border border-line bg-panel-2">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <div>
                      <div className="text-ink font-medium">{c.name}</div>
                      <div className="text-sm text-mute">{c.desc}</div>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => setC(c.key, true)}
                        className="px-3 py-1.5 rounded-md text-sm transition-all"
                        style={{
                          background: criteria[c.key] === true ? "rgba(134,239,172,0.15)" : "transparent",
                          color: criteria[c.key] === true ? "var(--mint)" : "var(--ink-mute)",
                          border: `1px solid ${criteria[c.key] === true ? "var(--mint)" : "var(--line)"}`
                        }}>Да</button>
                      <button
                        onClick={() => setC(c.key, false)}
                        className="px-3 py-1.5 rounded-md text-sm transition-all"
                        style={{
                          background: criteria[c.key] === false ? "rgba(252,165,165,0.15)" : "transparent",
                          color: criteria[c.key] === false ? "var(--rose)" : "var(--ink-mute)",
                          border: `1px solid ${criteria[c.key] === false ? "var(--rose)" : "var(--line)"}`
                        }}>Нет</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {answered === 4 && (
              <div className="mt-6 p-5 rounded-xl pop"
                style={{ background: score >= 3 ? "rgba(134,239,172,0.06)" : "rgba(252,165,165,0.06)",
                  border: `1px solid ${score >= 3 ? "rgba(134,239,172,0.3)" : "rgba(252,165,165,0.3)"}` }}>
                <div className="tag mb-2" style={{ color: score >= 3 ? "var(--mint)" : "var(--rose)" }}>
                  {score}/4 · {score >= 3 ? "Выигрышное правило" : "Непобедимая игра"}
                </div>
                <div className="font-serif text-xl text-ink leading-snug">
                  {score === 4 && "Отлично. Это правило даёт вам побеждать часто и с удовольствием. Оставьте его."}
                  {score === 3 && "Почти идеально. Один критерий не выполнен — посмотрите, как его усилить."}
                  {score === 2 && "Это пограничное правило. Его стоит переписать: сделать зависящим от вас и достижимым сегодня."}
                  {score <= 1 && "Это непобедимая игра. Обязательно перепишите правило — иначе вы будете проигрывать по умолчанию."}
                </div>
              </div>
            )}
          </div>
        )}
      </Card>

      <H2 eyebrow="Принципы · 03">4 принципа хороших правил</H2>
      <div className="grid sm:grid-cols-2 gap-3 mt-6">
        {D2.ruleCriteria.map((c, i) => (
          <Card key={i} className="!p-5">
            <div className="font-mono text-[11px] text-violet mb-2">Принцип {i + 1}</div>
            <div className="font-serif text-xl text-ink mb-2">{c.name}</div>
            <div className="text-sm text-dim leading-relaxed">{c.desc}</div>
          </Card>
        ))}
      </div>

      <KeyIdea>Правила изобретены вами — значит, вы можете изобрести новые. Это не снижение стандартов. Это инженерия мотивации.</KeyIdea>

      <NavButtons onPrev={onPrev} onNext={onNext} prevLabel="М7 · Установка" nextLabel="М9 · Мастерство" />
    </div>
  );
}

// =========================================================
// MODULE 9 — Mastery (final map + checklist)
// =========================================================
function Module9({ onPrev, onNext, onGoTo }) {
  const [checked, setChecked] = useState({});
  const toggle = (i) => setChecked(c => ({ ...c, [i]: !c[i] }));
  const count = Object.values(checked).filter(Boolean).length;

  const journey = [
    { m: "01–02", name: "Осознание", d: "Фреймы существуют. Вы знаете, как они формируются и почему невидимы.", ms: [1, 2] },
    { m: "03", name: "Законы", d: "15 принципов работы фрейм-игр — ваш навигатор по системе.", ms: [3] },
    { m: "04", name: "Обнаружение", d: "8 инструментов детектива. Вы видите то, что другие не видят.", ms: [4] },
    { m: "05", name: "Отказ", d: "4 техники от мягкого называния до разрушения. Вы умеете сказать «Нет».", ms: [5] },
    { m: "06", name: "Трансформация", d: "Базовый рецепт из 5 шагов. Вы превращаете свинец в золото.", ms: [6] },
    { m: "07", name: "Установка", d: "10 способов сделать новый фрейм постоянным.", ms: [7] },
    { m: "08", name: "Правила", d: "Вы проектируете игры так, чтобы побеждать каждый день.", ms: [8] }
  ];

  return (
    <div className="enter">
      <H1 num="09" title="Мастерство" subtitle="Вы прошли весь путь. Теперь — карта всего, что у вас теперь есть, и финальная проверка себя." />

      <H2 eyebrow="Карта · 01">Полный цикл работы с фреймами</H2>

      <div className="mt-8 space-y-3">
        {journey.map((j, i) => (
          <div key={i} className="flex items-stretch gap-4">
            <div className="w-20 flex-shrink-0 flex flex-col items-center pt-4">
              <div className="font-mono text-xs text-mute">{j.m}</div>
              <div className="font-serif text-4xl text-violet mt-1">{String(i + 1).padStart(2, "0")}</div>
            </div>
            <Card className="flex-1 !p-5 cursor-pointer lift" onClick={() => onGoTo && onGoTo(j.ms[0])}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="font-serif text-2xl text-ink mb-1">{j.name}</div>
                  <div className="text-dim">{j.d}</div>
                </div>
                <Icon name="arrow-up-right" size={18} className="text-mute mt-1" />
              </div>
            </Card>
          </div>
        ))}
      </div>

      <H2 eyebrow="Четыре стадии навыка · 02">Где вы сейчас</H2>
      <div className="grid md:grid-cols-4 gap-3 mt-6">
        {[
          ["Неосознанная некомпетентность", "Не знали, что фреймы существуют", "До курса"],
          ["Осознанная некомпетентность", "Знаете о фреймах, но нужно усилие", "Сейчас"],
          ["Осознанная компетентность", "Умеете, но сознательно", "Через 2–3 месяца"],
          ["Неосознанная компетентность", "Автоматический навык", "Цель"]
        ].map(([n, d, when], i) => (
          <Card key={i} className="!p-5 relative" style={{ borderColor: i === 1 ? "var(--violet)" : "var(--line)", background: i === 1 ? "rgba(167,139,250,0.06)" : undefined }}>
            <div className="font-mono text-[11px] mb-2" style={{ color: i === 1 ? "var(--violet)" : "var(--ink-mute)" }}>Стадия {i + 1}</div>
            <div className="font-medium text-ink mb-2 leading-snug">{n}</div>
            <div className="text-sm text-dim mb-3">{d}</div>
            <div className="font-mono text-[11px] text-mute">{when}</div>
            {i === 1 && (
              <div className="absolute -top-2 -right-2 bg-amber text-xs font-mono px-2 py-0.5 rounded-full text-[#0b0f1a]">ВЫ ЗДЕСЬ</div>
            )}
          </Card>
        ))}
      </div>

      <H2 eyebrow="Проверь себя · 03">Финальный чеклист</H2>
      <P>Отметьте пункты, где вы чувствуете твёрдое «да». Те, что без галочки, — зоны для практики в ближайший месяц.</P>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-panel-2 rounded-full overflow-hidden">
          <div className="h-full transition-all" style={{ width: `${(count / D2.finalChecklist.length) * 100}%`,
            background: count === D2.finalChecklist.length ? "var(--mint)" : "var(--violet)" }}/>
        </div>
        <span className="font-mono text-sm text-dim">{count} / {D2.finalChecklist.length}</span>
      </div>

      <div className="mt-6 space-y-2">
        {D2.finalChecklist.map((item, i) => (
          <CheckItem key={i} checked={!!checked[i]} onToggle={() => toggle(i)}>{item}</CheckItem>
        ))}
      </div>

      {count === D2.finalChecklist.length && (
        <div className="mt-8 p-8 rounded-2xl pop text-center" style={{ background: "radial-gradient(400px 200px at 50% 0%, rgba(134,239,172,0.15), transparent), var(--panel)", border: "1px solid rgba(134,239,172,0.3)" }}>
          <div className="tag text-mint mb-3">Поздравляю</div>
          <div className="font-serif text-4xl text-ink mb-3">Курс пройден</div>
          <div className="text-dim max-w-md mx-auto">Теперь — играйте. Ежедневная практика: один обнаруженный фрейм, одно новое действие, одна маленькая победа. Три минуты в день.</div>
        </div>
      )}

      <KeyIdea>
        Вы — не пленник своего разума. Вы — его архитектор. Помните об этом каждый день. Даже когда старые стены начинают восстанавливаться.
      </KeyIdea>

      <div className="mt-12 p-8 rounded-2xl text-center" style={{ background: "linear-gradient(180deg, rgba(167,139,250,0.08), transparent)", border: "1px solid var(--line)" }}>
        <div className="tag text-violet mb-4">Финальный вопрос</div>
        <div className="font-serif text-3xl md:text-5xl text-ink leading-tight mb-6" style={{ textWrap: "balance" }}>
          Каково ваше намерение?
        </div>
        <div className="text-dim italic">
          Энергия течёт за вниманием, а внимание — за намерением.
        </div>
      </div>

      <NavButtons onPrev={onPrev} onNext={() => onGoTo(0)} prevLabel="М8 · Правила победы" nextLabel="Начать заново" />
    </div>
  );
}

Object.assign(window, { Module5, Module6, Module7, Module8, Module9 });
