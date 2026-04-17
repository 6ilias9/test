// App root — SPA navigation + tweaks

const { useState, useEffect } = React;

function applyTweaks(t) {
  const root = document.documentElement;
  // accent swap
  const accents = {
    rose: { primary: "oklch(68% 0.15 8)", soft: "oklch(82% 0.09 10)" },
    matcha: { primary: "oklch(55% 0.13 145)", soft: "oklch(82% 0.08 140)" },
    honey: { primary: "oklch(62% 0.15 70)", soft: "oklch(85% 0.09 75)" },
    taro: { primary: "oklch(55% 0.13 310)", soft: "oklch(82% 0.08 310)" },
  };
  const a = accents[t.accent] || accents.rose;
  root.style.setProperty("--rose-strong", a.primary);
  root.style.setProperty("--rose", a.soft);

  // pattern swap
  if (t.pattern === "grid") {
    document.body.style.setProperty("--pattern", "grid");
  }
  const bgs = {
    dots: "radial-gradient(circle at 1px 1px, rgba(28,25,23,.06) 1px, transparent 0)",
    grid: "linear-gradient(rgba(28,25,23,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(28,25,23,.05) 1px, transparent 1px)",
    none: "none"
  };
  // apply to ::before via custom prop
  const style = document.getElementById("pattern-style") || document.createElement("style");
  style.id = "pattern-style";
  style.textContent = `body::before { background-image: ${bgs[t.pattern] || bgs.dots}; }`;
  document.head.appendChild(style);

  // display font
  root.style.setProperty("--font-display", `"${t.displayFont}", serif`);
}

function TweaksPanel({ tweaks, setTweaks }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onMsg = (e) => {
      if (e.data?.type === "__activate_edit_mode") setOpen(true);
      if (e.data?.type === "__deactivate_edit_mode") setOpen(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const update = (key, val) => {
    const next = { ...tweaks, [key]: val };
    setTweaks(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [key]: val } }, "*");
  };

  const accents = [
    { id: "rose", color: "oklch(68% 0.15 8)" },
    { id: "matcha", color: "oklch(55% 0.13 145)" },
    { id: "honey", color: "oklch(62% 0.15 70)" },
    { id: "taro", color: "oklch(55% 0.13 310)" },
  ];

  return (
    <div className={`tweaks-panel ${open ? "open" : ""}`}>
      <h4>Tweaks</h4>
      <div className="row">
        <span>Accent</span>
        <div className="swatch-row">
          {accents.map(a => (
            <div key={a.id}
                 className={`swatch ${tweaks.accent === a.id ? "active" : ""}`}
                 style={{background: a.color}}
                 onClick={() => update("accent", a.id)}
                 title={a.id}/>
          ))}
        </div>
      </div>
      <div className="row">
        <span>Motif fond</span>
        <select className="tweak-select" value={tweaks.pattern} onChange={(e) => update("pattern", e.target.value)}>
          <option value="dots">Dots</option>
          <option value="grid">Grille</option>
          <option value="none">Aucun</option>
        </select>
      </div>
      <div className="row">
        <span>Titre</span>
        <select className="tweak-select" value={tweaks.displayFont} onChange={(e) => update("displayFont", e.target.value)}>
          <option value="DM Serif Display">DM Serif</option>
          <option value="Fraunces">Fraunces</option>
          <option value="Nunito">Nunito</option>
        </select>
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState(() => localStorage.getItem("mp:page") || "home");
  const [tweaks, setTweaks] = useState(window.TWEAKS);

  useEffect(() => {
    localStorage.setItem("mp:page", page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  useEffect(() => { applyTweaks(tweaks); }, [tweaks]);

  const pages = {
    home: <HomePage setPage={setPage} />,
    menu: <MenuPage />,
    infos: <InfosPage />,
    about: <AboutPage />,
  };

  return (
    <>
      <Header page={page} setPage={setPage} />
      <main>{pages[page] || pages.home}</main>
      <Footer setPage={setPage} />
      <TweaksPanel tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
}

// Load Fraunces for tweak
const fraunces = document.createElement("link");
fraunces.rel = "stylesheet";
fraunces.href = "https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;1,400&display=swap";
document.head.appendChild(fraunces);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
