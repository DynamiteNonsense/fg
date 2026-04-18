// Main app: sidebar + module viewport
const { useState: uS, useEffect: uE, useRef: uR } = React;

const MODS = window.COURSE_DATA.modules;
const MODULE_COMPONENTS = [
  window.Module0, window.Module1, window.Module2, window.Module3, window.Module4,
  window.Module5, window.Module6, window.Module7, window.Module8, window.Module9
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
        <rect x="3" y="3" width="34" height="34" rx="8" stroke="#a78bfa" strokeWidth="1.5"/>
        <rect x="9" y="9" width="22" height="22" rx="4" stroke="#fbbf24" strokeWidth="1.5"/>
        <circle cx="20" cy="20" r="4" fill="#a78bfa"/>
      </svg>
      <div>
        <div className="font-serif text-xl leading-none text-ink">Игры Разума</div>
        <div className="font-mono text-[10px] text-mute mt-1 tracking-widest uppercase">Управление фреймами</div>
      </div>
    </div>
  );
}

function Sidebar({ current, onSelect, completed, open, onClose }) {
  const done = Object.values(completed).filter(Boolean).length;

  return (
    <>
      {open && <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={onClose} />}
      <aside className={`sidebar bg-panel border-r border-line h-screen overflow-y-auto ${open ? "open" : ""}`}
        style={{ width: 300, position: "fixed", top: 0, left: 0, zIndex: 45 }}>
        <div className="p-6 border-b border-line">
          <Logo />
        </div>

        <div className="p-6 border-b border-line">
          <div className="flex items-center gap-4">
            <ProgressRing done={done} total={MODS.length} size={52} />
            <div className="flex-1">
              <div className="text-sm text-ink font-medium">Прогресс</div>
              <div className="text-xs text-mute mt-0.5">
                {done === 0 && "Только начали"}
                {done > 0 && done < MODS.length && `${done} из ${MODS.length} модулей`}
                {done === MODS.length && "Пройдено полностью"}
              </div>
            </div>
          </div>
        </div>

        <nav className="p-3">
          {MODS.map(m => {
            const isCurrent = current === m.id;
            const isDone = completed[m.id];
            return (
              <button
                key={m.id}
                onClick={() => { onSelect(m.id); onClose(); }}
                className="w-full text-left p-3 rounded-lg flex items-start gap-3 mb-1 transition-all"
                style={{
                  background: isCurrent ? "rgba(167,139,250,0.08)" : "transparent",
                  borderLeft: `2px solid ${isCurrent ? "var(--violet)" : "transparent"}`
                }}>
                <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs transition-all"
                  style={{
                    background: isCurrent ? "var(--violet)" : isDone ? "rgba(134,239,172,0.12)" : "var(--panel-2)",
                    color: isCurrent ? "#0b0f1a" : isDone ? "var(--mint)" : "var(--ink-mute)"
                  }}>
                  {isDone && !isCurrent ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : m.num}
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className={`text-sm font-medium leading-snug ${isCurrent ? "text-ink" : "text-dim"}`}>{m.title}</div>
                  <div className="text-[11px] text-mute mt-0.5 truncate">{m.subtitle}</div>
                </div>
              </button>
            );
          })}
        </nav>

        <div className="p-6 mt-auto border-t border-line">
          <div className="text-[11px] text-mute leading-relaxed">
            Курс основан на работах Л. М. Холла и Института Нейро-Семантики.
          </div>
        </div>
      </aside>
    </>
  );
}

function TopBar({ current, completed, onToggleMenu, onToggleComplete }) {
  const done = Object.values(completed).filter(Boolean).length;
  const mod = MODS[current];
  const pct = (done / MODS.length) * 100;

  return (
    <div className="sticky top-0 z-30 bg-bg/85 backdrop-blur-md border-b border-line">
      <div className="max-w-[860px] mx-auto px-4 md:px-10 py-4 flex items-center gap-4">
        <button onClick={onToggleMenu} className="md:hidden p-2 -ml-2 text-dim">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
        <div className="flex-1 min-w-0">
          <div className="font-mono text-[10px] text-mute tracking-widest uppercase">Модуль {mod.num}</div>
          <div className="text-ink font-medium truncate text-sm">{mod.title}</div>
        </div>
        <CompleteButton completed={!!completed[current]} onToggle={onToggleComplete} />
      </div>
      <div className="h-0.5 bg-panel-2">
        <div className="h-full transition-all duration-500" style={{ width: `${pct}%`, background: "linear-gradient(90deg, var(--violet), var(--amber))" }}/>
      </div>
    </div>
  );
}

function App() {
  const [current, setCurrent] = uS(0);
  const [completed, setCompleted] = uS({});
  const [menuOpen, setMenuOpen] = uS(false);
  const scrollRef = uR(null);

  uE(() => {
    if (scrollRef.current) scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [current]);

  const goTo = (i) => {
    if (i < 0 || i >= MODS.length) return;
    setCurrent(i);
  };

  const toggleComplete = () => {
    setCompleted(c => ({ ...c, [current]: !c[current] }));
  };

  const Comp = MODULE_COMPONENTS[current];

  return (
    <div className="min-h-screen flex">
      <Sidebar current={current} onSelect={goTo} completed={completed} open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="flex-1 min-w-0 relative halo" style={{ marginLeft: 300 }}>
        <TopBar current={current} completed={completed} onToggleMenu={() => setMenuOpen(true)} onToggleComplete={toggleComplete} />
        <div ref={scrollRef} className="max-w-[860px] mx-auto px-4 md:px-10 py-14 md:py-20 relative z-10">
          <Comp
            onPrev={() => { goTo(current - 1); markDone(); }}
            onNext={() => { goTo(current + 1); markDone(); }}
            onGoTo={goTo}
          />
        </div>
      </main>
      <style>{`
        @media (max-width: 900px) {
          main { margin-left: 0 !important; }
        }
      `}</style>
    </div>
  );

  function markDone() {
    setCompleted(c => c[current] ? c : ({ ...c, [current]: true }));
  }
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
