// Pages

const Header = ({ page, setPage }) => {
  const items = [
    { id: "home", label: "Accueil" },
    { id: "menu", label: "Menu" },
    { id: "infos", label: "Infos" },
    { id: "about", label: "À propos" },
  ];
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); setPage("home"); }}>
          <img src="images/logo.png" alt="Mr. Panda" />
          <div>
            <div>Mr. Panda</div>
            <span className="brand-sub">Bubble Tea · Lyon</span>
          </div>
        </a>
        <nav className="main-nav">
          {items.map(it => (
            <a key={it.id} href="#"
               className={page === it.id ? "active" : ""}
               onClick={(e) => { e.preventDefault(); setPage(it.id); }}>
              {it.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="https://www.ubereats.com/fr/store/mr-panda-lyon/nvxVQEbeXgez3bb3LeBilQ" target="_blank" rel="noopener">
          <img src="images/logo-uber-eat.png" alt="" />
          Commander
        </a>
      </div>
    </header>
  );
};

const Footer = ({ setPage }) => (
  <footer className="site-footer">
    <div className="footer-inner">
      <div>
        <h2 className="footer-brand">Mr. <em>Panda</em></h2>
        <p>Le temple du bubble tea artisanal au cœur de Lyon, préparé avec soin depuis 2019.</p>
      </div>
      <div>
        <h4>Navigation</h4>
        <a href="#" onClick={(e) => { e.preventDefault(); setPage("home"); }}>Accueil</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setPage("menu"); }}>Menu</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setPage("infos"); }}>Infos pratiques</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setPage("about"); }}>À propos</a>
      </div>
      <div>
        <h4>Visite</h4>
        <a>14 Rue Victor Hugo</a>
        <a>69002 Lyon</a>
        <a href="tel:0984271473">09 84 27 14 73</a>
        <a>Lun–Sam · 12h–19h30</a>
      </div>
      <div>
        <h4>Suivez-nous</h4>
        <a href="https://www.instagram.com/mr.pandalyon/" target="_blank" rel="noopener">Instagram @mr.pandalyon</a>
        <a href="https://www.ubereats.com/fr/store/mr-panda-lyon/nvxVQEbeXgez3bb3LeBilQ" target="_blank" rel="noopener">Uber Eats</a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2025 Mr. Panda · Avec amour depuis Lyon</span>
      <span>Mentions légales · CGV · Cookies</span>
    </div>
  </footer>
);

const HomePage = ({ setPage }) => (
  <div className="page">
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow"><span className="dot"></span> Bubble Tea artisanal · Lyon 2</span>
        <h1 className="display" style={{marginTop: 18}}>
          Le goût de l'Asie,<br/>
          <em>fait maison</em><br/>
          à Lyon.
        </h1>
        <p className="lede">
          Thés infusés chaque matin, fruits frais, perles de tapioca cuites sur place. Chez Mr. Panda, chaque boisson est préparée minute, juste pour vous.
        </p>
        <div className="hero-ctas">
          <button className="btn btn-primary" onClick={() => setPage("menu")}>
            Voir le menu <Icon.Arrow />
          </button>
          <a className="btn btn-secondary" href="https://www.ubereats.com/fr/store/mr-panda-lyon/nvxVQEbeXgez3bb3LeBilQ" target="_blank" rel="noopener">
            <img src="images/logo-uber-eat.png" alt="" /> Commander
          </a>
        </div>
      </div>
      <div className="hero-art">
        <div className="blob"></div>
        <div className="circle"></div>
        <img className="panda" src="images/panda-kawaii.png" alt="Panda mascotte" />
        <div className="hero-badge hero-badge--top">
          <span className="emoji-dot" style={{background:"var(--matcha)"}}></span>
          Matcha bio
        </div>
        <div className="hero-badge hero-badge--mid">
          <span className="emoji-dot" style={{background:"var(--honey)"}}></span>
          Fruits frais
        </div>
        <div className="hero-badge hero-badge--bot">
          <span className="emoji-dot" style={{background:"var(--rose-strong)"}}></span>
          Tapioca maison
        </div>
      </div>
    </section>

    <div className="usp-strip">
      <div className="usp">
        <div className="usp-icon"><Icon.Leaf /></div>
        <div className="usp-text"><strong>Thés premium</strong><span>Jasmin, noir, oolong</span></div>
      </div>
      <div className="usp-icon-wrapper usp">
        <div className="usp-icon"><Icon.Sparkle /></div>
        <div className="usp-text"><strong>Fait minute</strong><span>Préparation devant vous</span></div>
      </div>
      <div className="usp">
        <div className="usp-icon"><Icon.Heart /></div>
        <div className="usp-text"><strong>13 signatures</strong><span>Nos créations maison</span></div>
      </div>
      <div className="usp">
        <div className="usp-icon"><Icon.Truck /></div>
        <div className="usp-text"><strong>Livraison Lyon</strong><span>Via Uber Eats</span></div>
      </div>
    </div>

    <div className="section-head">
      <div>
        <span className="eyebrow"><span className="dot"></span> Les signatures</span>
        <h2 className="display" style={{marginTop: 12}}>Nos <em>coups de cœur</em>.</h2>
      </div>
      <span className="label">13 boissons · 6,90€</span>
    </div>

    <div className="menu-grid">
      {SPECIALS.slice(0, 6).map(s => <MenuCard key={s.id} item={s} />)}
    </div>

    <div style={{textAlign:"center", marginTop: 40}}>
      <button className="btn btn-secondary" onClick={() => setPage("menu")}>
        Voir tout le menu <Icon.Arrow />
      </button>
    </div>
  </div>
);

const MenuCard = ({ item, onClick }) => (
  <div className="menu-card" onClick={() => onClick && onClick(item)}>
    <div className="menu-card-img">
      <img src={item.img} alt={item.title} />
      <span className="menu-card-tag">{item.tag}</span>
    </div>
    <div className="menu-card-body">
      <h3>{item.title}</h3>
      <p className="ingredients">{item.desc}</p>
      <div className="menu-card-footer">
        <span className="price">{item.price}</span>
        <span className="plus">+</span>
      </div>
    </div>
  </div>
);

const MenuPage = () => {
  const [active, setActive] = React.useState(null);
  return (
    <div className="page">
      <section style={{padding: "56px 0 20px", maxWidth: 780}}>
        <span className="eyebrow"><span className="dot"></span> Menu</span>
        <h1 className="display" style={{marginTop: 16}}>
          Chaque boisson, <em>composée</em> pour vous.
        </h1>
        <p className="lede" style={{color: "var(--muted)", fontSize: 18, marginTop: 20}}>
          13 créations signatures, plus nos fruit tea et milk tea 100 % personnalisables.
        </p>
      </section>

      <div className="section-head">
        <div>
          <span className="eyebrow"><span className="dot"></span> Signatures</span>
          <h2 className="display" style={{marginTop: 10}}>Spécialités <em>au lait frais</em>.</h2>
        </div>
        <span className="label">13 boissons · 6,90€</span>
      </div>

      <div className="menu-grid">
        {SPECIALS.map(s => <MenuCard key={s.id} item={s} onClick={setActive} />)}
      </div>

      <div className="section-head">
        <div>
          <span className="eyebrow"><span className="dot"></span> Sur-mesure</span>
          <h2 className="display" style={{marginTop: 10}}>Composez <em>le vôtre</em>.</h2>
        </div>
        <span className="label">2 formats · 14 fruits · 3 thés</span>
      </div>

      <div className="builder-row">
        <div className="builder-card builder-card--fruit">
          <span className="eyebrow"><span className="dot"></span> Fruit Tea</span>
          <h3>Thé aux fruits frais</h3>
          <div className="builder-list">
            <div className="row"><span className="label">Thé</span><span className="val">{TEAS.join(" · ")}</span></div>
            <div className="row"><span className="label">Fruits</span><span className="val">{FRUITS.join(" · ")}</span></div>
          </div>
          <div className="builder-pricing">
            <div className="size-pill">
              <div className="size">500 ml</div>
              <div className="size-price">5,00€</div>
            </div>
            <div className="size-pill">
              <div className="size">700 ml</div>
              <div className="size-price">6,00€</div>
            </div>
          </div>
        </div>

        <div className="builder-card builder-card--milk">
          <span className="eyebrow"><span className="dot"></span> Milk Tea</span>
          <h3>Thé au lait frais</h3>
          <div className="builder-list">
            <div className="row"><span className="label">Thé</span><span className="val">{TEAS.join(" · ")}</span></div>
            <div className="row"><span className="label">Parfums</span><span className="val">Comme Fruit Tea + base lait frais</span></div>
          </div>
          <div className="builder-pricing">
            <div className="size-pill">
              <div className="size">500 ml</div>
              <div className="size-price">5,50€</div>
            </div>
            <div className="size-pill">
              <div className="size">700 ml</div>
              <div className="size-price">6,50€</div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-head">
        <div>
          <span className="eyebrow"><span className="dot"></span> Toppings</span>
          <h2 className="display" style={{marginTop: 10}}>Les petits <em>extras</em>.</h2>
        </div>
        <span className="label">À ajouter sur toutes nos boissons</span>
      </div>

      <div className="supps">
        {SUPPS.map(s => (
          <div key={s.name} className="supp-item">
            <span className="name">{s.name}</span>
            <span className="amt">{s.price}</span>
          </div>
        ))}
      </div>

      {active && (
        <div className="popup-overlay open" onClick={() => setActive(null)}>
          <div className="popup-inner" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setActive(null)}>×</button>
            <img className="hero-img" src={active.img} alt={active.title} />
            <div className="popup-body">
              <span className="eyebrow"><span className="dot"></span> {active.tag}</span>
              <h3 style={{marginTop: 10}}>{active.title}</h3>
              <p>{active.desc}</p>
              <div className="popup-price-row">
                <span style={{fontSize: 13, color: "var(--muted)", fontFamily: "var(--font-mono)"}}>500 ml · fait minute</span>
                <span className="big-price">{active.price}</span>
              </div>
              <a className="btn btn-primary" style={{width: "100%", justifyContent: "center"}} href="https://www.ubereats.com/fr/store/mr-panda-lyon/nvxVQEbeXgez3bb3LeBilQ" target="_blank" rel="noopener">
                Commander sur Uber Eats <Icon.Arrow />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const InfosPage = () => (
  <div className="page">
    <section style={{padding: "56px 0 10px", maxWidth: 780}}>
      <span className="eyebrow"><span className="dot"></span> Infos pratiques</span>
      <h1 className="display" style={{marginTop: 16}}>
        Venez nous <em>voir</em>.
      </h1>
      <p className="lede" style={{color: "var(--muted)", fontSize: 18, marginTop: 20}}>
        14 Rue Victor Hugo, juste à côté de la place Bellecour.
      </p>
    </section>

    <div className="info-hero">
      <div className="address-card">
        <div>
          <span className="tag">Notre adresse</span>
          <h3>Lyon 2<br/><em>Presqu'île</em></h3>
          <div className="address" style={{marginTop: 18}}>
            14 Rue Victor Hugo<br/>
            69002 Lyon, France
          </div>
        </div>
        <div>
          <span className="tag">Horaires</span>
          <div className="hours-list">
            <div><span className="open">●</span> Lundi — Samedi · 12h00 → 19h30</div>
            <div style={{opacity:.5}}>● Dimanche · Fermé</div>
          </div>
        </div>
      </div>
      <div className="map-card">
        <div className="fake-map"></div>
        <div className="pin">
          <div className="pin-badge">Mr. Panda</div>
          <div className="pin-stick"></div>
          <div className="pin-base"></div>
        </div>
      </div>
    </div>

    <div className="section-head">
      <div>
        <span className="eyebrow"><span className="dot"></span> Nous joindre</span>
        <h2 className="display" style={{marginTop: 10}}>Contact & <em>commande</em>.</h2>
      </div>
    </div>

    <div className="stack-cards">
      <div className="stack-card">
        <div className="icon"><Icon.Phone /></div>
        <h3>Téléphone</h3>
        <p>Appelez-nous pour toute question ou pour réserver un gros volume.</p>
        <a className="btn btn-secondary" style={{marginTop: 14}} href="tel:0984271473">09 84 27 14 73</a>
      </div>
      <div className="stack-card">
        <div className="icon"><Icon.Instagram /></div>
        <h3>Instagram</h3>
        <p>Suivez nos nouveautés, édition limitée et la vie du shop.</p>
        <a className="btn btn-secondary" style={{marginTop: 14}} href="https://www.instagram.com/mr.pandalyon/" target="_blank" rel="noopener">@mr.pandalyon</a>
      </div>
      <div className="stack-card">
        <div className="icon"><Icon.Truck /></div>
        <h3>Livraison</h3>
        <p>Toutes nos boissons sont disponibles à la livraison via Uber Eats.</p>
        <a className="btn btn-primary" style={{marginTop: 14}} href="https://www.ubereats.com/fr/store/mr-panda-lyon/nvxVQEbeXgez3bb3LeBilQ" target="_blank" rel="noopener">
          Commander <Icon.Arrow />
        </a>
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="page">
    <section style={{padding: "56px 0 20px", maxWidth: 820}}>
      <span className="eyebrow"><span className="dot"></span> À propos</span>
      <h1 className="display" style={{marginTop: 16}}>
        Une histoire de <em>passion</em>,<br/>une tasse à la fois.
      </h1>
      <p className="lede" style={{color: "var(--muted)", fontSize: 19, marginTop: 24, maxWidth: "60ch"}}>
        Mr. Panda est né d'un rêve simple : offrir à Lyon un bubble tea authentique, préparé comme à Taïwan, avec des ingrédients frais et un soin artisanal du premier au dernier geste.
      </p>
    </section>

    <div className="stack-cards">
      <div className="stack-card">
        <div className="icon"><Icon.Cup /></div>
        <h3>Notre mission</h3>
        <p>Offrir une expérience unique autour du bubble tea, alliant authenticité asiatique et créativité locale — sans jamais transiger sur la qualité.</p>
      </div>
      <div className="stack-card">
        <div className="icon"><Icon.Leaf /></div>
        <h3>Nos spécialités</h3>
        <p>Du Milk Tea classique aux créations originales comme le Mangue Pomelo Sagou ou le Matcha Coco, chaque recette est pensée pour surprendre.</p>
      </div>
      <div className="stack-card">
        <div className="icon"><Icon.Heart /></div>
        <h3>Une ambiance</h3>
        <p>Mr. Panda, c'est un lieu où convivialité et détente se rencontrent. Notre équipe vous accueille avec le sourire, toujours.</p>
      </div>
      <div className="stack-card">
        <div className="icon"><Icon.Pin /></div>
        <h3>Où nous trouver</h3>
        <p>14 Rue Victor Hugo, 69002 Lyon. Ouvert du lundi au samedi de 12h à 19h30.</p>
      </div>
    </div>

    <section style={{marginTop: 80, background: "var(--ink)", color: "var(--cream)", borderRadius: 28, padding: "56px 48px", textAlign: "center"}}>
      <h2 className="display" style={{color: "var(--cream)", maxWidth: "20ch", margin: "0 auto"}}>
        Envie d'un <em style={{color: "var(--rose)"}}>bubble tea</em> ?
      </h2>
      <p style={{opacity: .75, maxWidth: "40ch", margin: "20px auto 32px"}}>
        Venez nous rendre visite, ou commandez directement en ligne.
      </p>
      <div style={{display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap"}}>
        <a className="btn" style={{background: "var(--cream)", color: "var(--ink)"}} href="https://www.ubereats.com/fr/store/mr-panda-lyon/nvxVQEbeXgez3bb3LeBilQ" target="_blank" rel="noopener">
          <img src="images/logo-uber-eat.png" alt="" style={{height: 16}} /> Commander
        </a>
        <a className="btn" style={{background: "transparent", color: "var(--cream)", border: "1.5px solid var(--cream)"}} href="https://www.instagram.com/mr.pandalyon/" target="_blank" rel="noopener">
          Suivez-nous <Icon.Arrow />
        </a>
      </div>
    </section>
  </div>
);

window.Header = Header;
window.Footer = Footer;
window.HomePage = HomePage;
window.MenuPage = MenuPage;
window.InfosPage = InfosPage;
window.AboutPage = AboutPage;
