// Shared components and UI primitives
const { useState, useEffect, useRef, useMemo, useReducer } = React;

// ---------- Lucide icon helper (renders a named icon) ----------
function Icon({ name, size = 18, className = "", strokeWidth = 1.7 }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = "";
      const svg = window.lucide.createElement(window.lucide.icons[toPascal(name)] || window.lucide.icons.Circle);
      svg.setAttribute("width", size);
      svg.setAttribute("height", size);
      svg.setAttribute("stroke-width", strokeWidth);
      ref.current.appendChild(svg);
    }
  }, [name, size, strokeWidth]);
  return <span ref={ref} className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }} />;
}
function toPascal(s) { return s.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(""); }

// ---------- Key Idea block ----------
function KeyIdea({ children, label = "Ключевая идея" }) {
  return (
    <div className="relative my-10 pl-6 border-l-2" style={{ borderColor: "var(--amber)" }}>
      <div className="tag text-amber mb-2 flex items-center gap-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </svg>
        {label}
      </div>
      <div className="font-serif text-2xl md:text-[28px] leading-[1.3] text-ink">
        {children}
      </div>
    </div>
  );
}

// ---------- Section heading ----------
function H1({ num, title, subtitle }) {
  return (
    <header className="mb-12">
      <div className="tag text-violet mb-4">Модуль {num}</div>
      <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] text-ink mb-4">{title}</h1>
      {subtitle && <p className="text-dim text-lg md:text-xl max-w-2xl leading-relaxed">{subtitle}</p>}
    </header>
  );
}

function H2({ children, eyebrow }) {
  return (
    <div className="mt-16 mb-6">
      {eyebrow && <div className="tag text-mute mb-2">{eyebrow}</div>}
      <h2 className="font-serif text-3xl md:text-4xl leading-tight text-ink">{children}</h2>
    </div>
  );
}

function H3({ children }) {
  return <h3 className="text-lg md:text-xl font-semibold mt-8 mb-3 text-ink">{children}</h3>;
}

function P({ children, className = "" }) {
  return <p className={`text-dim leading-[1.75] md:text-[17px] text-[16px] mb-5 ${className}`} style={{ textWrap: "pretty" }}>{children}</p>;
}

function Em({ children }) {
  return <em className="not-italic text-ink font-medium">{children}</em>;
}

// ---------- Card ----------
function Card({ children, className = "" }) {
  return (
    <div className={`bg-panel border border-line rounded-2xl p-6 md:p-7 ${className}`}>
      {children}
    </div>
  );
}

// ---------- Checklist Item ----------
function CheckItem({ checked, onToggle, children, sub }) {
  return (
    <button
      onClick={onToggle}
      className="w-full text-left flex gap-4 items-start p-4 rounded-xl border border-line bg-panel-2 lift hover:border-violet/50 group"
    >
      <span className="chk mt-0.5" data-on={checked}>
        {checked && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0b0f1a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        )}
      </span>
      <span className="flex-1">
        <span className={`block ${checked ? "text-ink" : "text-dim"} font-medium leading-snug`}>{children}</span>
        {sub && <span className="block text-mute text-sm mt-1 leading-snug">{sub}</span>}
      </span>
    </button>
  );
}

// ---------- Numbered step ----------
function Step({ n, title, children, active, onClick, kind = "violet" }) {
  const color = kind === "violet" ? "var(--violet)" : "var(--amber)";
  return (
    <div className={`flex gap-5 ${onClick ? "cursor-pointer" : ""}`} onClick={onClick}>
      <div className="flex flex-col items-center">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm border-2 transition-all"
          style={{
            borderColor: active ? color : "#2b3350",
            background: active ? color : "transparent",
            color: active ? "#0b0f1a" : "var(--ink-dim)"
          }}
        >
          {n}
        </div>
        <div className="flex-1 w-px mt-2 border-l border-dashed" style={{ borderColor: "#2b3350" }} />
      </div>
      <div className="flex-1 pb-8">
        <div className="font-medium text-ink mb-1">{title}</div>
        <div className="text-dim leading-relaxed text-[15px]">{children}</div>
      </div>
    </div>
  );
}

// ---------- Nav buttons ----------
function NavButtons({ onPrev, onNext, prevLabel, nextLabel, prevDisabled, nextDisabled }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-20 pt-8 border-t border-line">
      <button
        onClick={onPrev}
        disabled={prevDisabled}
        className="flex-1 p-5 rounded-xl border border-line bg-panel lift text-left disabled:opacity-30 disabled:cursor-not-allowed hover:border-violet/40"
      >
        <div className="tag text-mute mb-1 flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          Назад
        </div>
        <div className="text-ink font-medium">{prevLabel || "Предыдущий модуль"}</div>
      </button>
      <button
        onClick={onNext}
        disabled={nextDisabled}
        className="flex-1 p-5 rounded-xl text-left disabled:opacity-30 disabled:cursor-not-allowed lift"
        style={{ background: "linear-gradient(180deg, rgba(167,139,250,0.18), rgba(167,139,250,0.08))", borderWidth: 1, borderColor: "rgba(167,139,250,0.4)" }}
      >
        <div className="tag text-violet mb-1 flex items-center justify-end gap-1">
          Дальше
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
        <div className="text-ink font-medium text-right">{nextLabel || "Следующий модуль"}</div>
      </button>
    </div>
  );
}

// ---------- Mark module complete button ----------
function CompleteButton({ completed, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all"
      style={{
        borderColor: completed ? "var(--mint)" : "var(--line)",
        color: completed ? "var(--mint)" : "var(--ink-dim)",
        background: completed ? "rgba(134,239,172,0.08)" : "transparent"
      }}
    >
      {completed ? (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Модуль пройден
        </>
      ) : (
        <>
          <span className="w-3.5 h-3.5 rounded-full border border-current" />
          Отметить как пройденный
        </>
      )}
    </button>
  );
}

// ---------- Progress ring (SVG) ----------
function ProgressRing({ done, total, size = 56, stroke = 4 }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = total > 0 ? done / total : 0;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size/2} cy={size/2} r={r} strokeWidth={stroke} fill="none" className="ring-track"/>
        <circle
          cx={size/2} cy={size/2} r={r} strokeWidth={stroke} fill="none" className="ring-fill"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - c * pct}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-mono text-[11px] text-dim">
        {done}/{total}
      </div>
    </div>
  );
}

// ---------- Striped placeholder (for decorative imagery) ----------
function Placeholder({ label, h = 200 }) {
  return (
    <div className="stripes rounded-xl border border-line flex items-center justify-center" style={{ height: h }}>
      <span className="font-mono text-xs text-mute uppercase tracking-widest">{label}</span>
    </div>
  );
}

// ---------- Pill tag ----------
function Pill({ children, tone = "violet" }) {
  const tones = {
    violet: { bg: "rgba(167,139,250,0.12)", color: "#c4b5fd" },
    amber: { bg: "rgba(251,191,36,0.12)", color: "#fcd34d" },
    mute: { bg: "rgba(107,114,147,0.12)", color: "var(--ink-dim)" },
    mint: { bg: "rgba(134,239,172,0.12)", color: "#86efac" },
    rose: { bg: "rgba(252,165,165,0.12)", color: "#fca5a5" }
  };
  const s = tones[tone] || tones.violet;
  return (
    <span className="tag px-2.5 py-1 rounded-full" style={{ background: s.bg, color: s.color }}>
      {children}
    </span>
  );
}

// Export to window so modules.jsx + app.jsx can use them
Object.assign(window, {
  Icon, KeyIdea, H1, H2, H3, P, Em, Card, CheckItem, Step, NavButtons, CompleteButton, ProgressRing, Placeholder, Pill,
  useState, useEffect, useRef, useMemo, useReducer
});
