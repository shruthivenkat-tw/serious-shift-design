const scenarios = [
  {
    label: "SCENARIO 1 · SOCIETY",
    title: "Governance Void, Power Rush",
    question: "Who fills the void when no one is governing AI?",
    color: "#3A7CE0",
  },
  {
    label: "SCENARIO 2 · ORGANISATIONS",
    title: "Post-Capital Labour",
    question: "Who gets rich when intelligence becomes cheap?",
    color: "#0F766E",
  },
  {
    label: "SCENARIO 3 · ECONOMY",
    title: "Agentic Everyday",
    question: "How do you build loyalty when AI knows your customers better than you do?",
    color: "#8215B5",
  },
  {
    label: "SCENARIO 4 · CONSUMERS",
    title: "The Liquid Firm",
    question: "What does leadership mean when AI makes better decisions faster?",
    color: "#FF007A",
  },
];

const thinkers = [
  ["Reid Kurzwell", "ACCELERATIONALIST", "10 claims"],
  ["Nadia Voss", "SKEPTIC", "207 claims"],
  ["Henrick Lund", "POST-CAPITALIST", "32 claims"],
  ["Mei Tanaka", "DOOMER", "87 claims"],
  ["Owen Park", "BRAND PURIST", "143 claims"],
  ["Alex Brenner", "PRAGMATIST", "65 claims"],
];

export default function App() {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logo}>
          <div style={styles.logoMark}></div>
          <div>
            <strong>Serious</strong> <strong>Shi(f)t</strong>
            <p style={styles.powered}>powered by TrendWatching</p>
          </div>
        </div>

        <nav style={styles.nav}>
          <a>Thinkers</a>
          <a>Predictions</a>
          <a>Keynote</a>
          <a>Community</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.h1}>
            Four worlds are <strong>coming</strong>.
            <br />
            The thinkers can't agree which one.
          </h1>

          <p style={styles.subtitle}>
            Dive into any of the 4 worlds. Debate what others have to say.
          </p>

          <div style={styles.pills}>
            {scenarios.map((s, i) => (
              <button
                key={s.title}
                style={{
                  ...styles.pill,
                  background: i === 0 ? s.color : "white",
                  color: i === 0 ? "white" : "#101010",
                  borderColor: s.color,
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div style={styles.stats}>
            4 Scenarios · 16 Areas · 70 Thinkers · 400 AI Claims
          </div>
        </div>

        <div style={styles.featureCard}>
          <p style={styles.kicker}>ACCELERATING NOW</p>
          <h2 style={styles.featureTitle}>Governance Void, Power Rush</h2>
          <p style={styles.quote}>“Who fills the void when no one is governing AI?”</p>
          <p style={styles.meta}>
            SCENARIO 1 · SOCIETY · 2027–2032 · 21 THINKERS
          </p>
          <div style={styles.vs}>
            <span>
              <strong>Reid Kurzwell</strong>
              <br />
              Futurist, Singularity Labs
            </span>
            <strong>V/S</strong>
            <span>
              <strong>Jian Tao</strong>
              <br />
              Professor of Political Economy, LSE
            </span>
          </div>
        </div>
      </section>

      <section style={styles.thinkersSection}>
        <h2 style={styles.sectionTitle}>Who’s arguing about the future?</h2>

        <div style={styles.thinkerGrid}>
          {thinkers.map(([name, type, claims]) => (
            <article key={name} style={styles.thinkerCard}>
              <p>{claims}</p>
              <h3>{name}</h3>
              <span>{type}</span>
            </article>
          ))}
        </div>
      </section>

      <section style={styles.nowSection}>
        <h2 style={styles.sectionTitle}>What is happening right now?</h2>

        {scenarios.map((s, i) => (
          <article key={s.title} style={styles.scenarioCard}>
            <p style={styles.scenarioLabel}>{s.label}</p>
            <h3 style={styles.scenarioTitle}>{s.title}</h3>
            <p style={styles.scenarioQuestion}>“{s.question}”</p>

            <div style={styles.argumentGrid}>
              <div style={styles.argumentBox}>
                <span style={{ color: "#72E564" }}>THEY BELIEVE</span>
                <p>
                  Distributed AGI will route around captured institutions —
                  governance becomes a protocol, not a building.
                </p>
                <strong>Reid Kurzwell</strong>
              </div>

              <div style={styles.argumentBox}>
                <span style={{ color: "#F65009" }}>THEY DO NOT</span>
                <p>
                  A vacuum doesn't birth democracy — it births the fastest,
                  best-funded actor. That's rarely the public.
                </p>
                <strong>Jian Tao</strong>
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer style={styles.footer}>
        <div>
          <h2>ONE TRANSFORMATION, TOLD FOUR WAYS.</h2>
          <p>
            Cross-scenario inference matches what the thinkers agree on, where
            they fracture, and what's already happening underneath all four
            worlds.
          </p>
        </div>

        <div style={styles.footerLogo}>
          <strong>Serious Shi(f)t</strong>
          <p>powered by TrendWatching</p>
        </div>
      </footer>
    </main>
  );
}

const styles = {
  page: {
    margin: 0,
    minHeight: "100vh",
    background: "#fff",
    color: "#101010",
    fontFamily: "Inter, Arial, sans-serif",
    overflowX: "hidden",
  },
  header: {
    height: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 80px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 18,
    fontSize: 30,
  },
  logoMark: {
    width: 48,
    height: 48,
    background: "#101010",
    borderRadius: 6,
    transform: "rotate(45deg)",
  },
  powered: {
    margin: "8px 0 0",
    fontSize: 14,
    fontWeight: 400,
  },
  nav: {
    display: "flex",
    gap: 36,
    padding: "18px 42px",
    border: "1px solid #101010",
    borderRadius: 999,
    boxShadow: "0 4px 24px rgba(0,0,0,.16)",
  },
  hero: {
    minHeight: 850,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 60,
    padding: "80px",
  },
  heroText: {
    paddingTop: 80,
  },
  h1: {
    fontSize: 64,
    lineHeight: 1.08,
    fontWeight: 300,
    margin: 0,
  },
  subtitle: {
    fontSize: 24,
    marginTop: 48,
  },
  pills: {
    display: "flex",
    flexWrap: "wrap",
    gap: 14,
    marginTop: 36,
  },
  pill: {
    padding: "18px 28px",
    borderRadius: 999,
    border: "1px solid",
    fontSize: 16,
    letterSpacing: 0.5,
    cursor: "pointer",
  },
  stats: {
    marginTop: 140,
    color: "#818181",
    fontSize: 26,
  },
  featureCard: {
    minHeight: 780,
    borderRadius: 32,
    padding: 70,
    color: "white",
    background:
      "radial-gradient(circle at 70% 20%, #A855F7, transparent 35%), radial-gradient(circle at 30% 30%, #3730A3, transparent 45%), linear-gradient(135deg, #0C0E1D, #1D4ED8)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  kicker: {
    fontSize: 22,
    marginBottom: "auto",
  },
  featureTitle: {
    fontSize: 66,
    fontWeight: 300,
    lineHeight: 1.05,
    margin: 0,
  },
  quote: {
    fontSize: 30,
    fontFamily: "serif",
  },
  meta: {
    fontSize: 17,
    letterSpacing: 1,
  },
  vs: {
    borderTop: "1px solid rgba(255,255,255,.6)",
    marginTop: 28,
    paddingTop: 28,
    display: "flex",
    gap: 34,
    alignItems: "center",
  },
  thinkersSection: {
    padding: "80px",
    background:
      "radial-gradient(circle at 80% 0%, #FDFF85, transparent 35%), #fff",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: 40,
    marginBottom: 56,
  },
  thinkerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(220px, 1fr))",
    gap: 24,
  },
  thinkerCard: {
    background: "#0C0C0C",
    color: "white",
    borderRadius: 26,
    padding: 42,
    minHeight: 200,
  },
  nowSection: {
    padding: "80px",
    background:
      "radial-gradient(circle at 90% 0%, rgba(255,178,145,.7), transparent 35%), #fff",
  },
  scenarioCard: {
    marginBottom: 42,
    borderRadius: 32,
    padding: 55,
    color: "white",
    background:
      "radial-gradient(circle at 75% 15%, #A855F7, transparent 30%), linear-gradient(135deg, #0C0E1D, #3730A3)",
    boxShadow: "0 4px 44px rgba(253,255,133,.2)",
  },
  scenarioLabel: {
    textAlign: "center",
    letterSpacing: 1,
  },
  scenarioTitle: {
    textAlign: "center",
    fontSize: 42,
    fontWeight: 300,
    margin: "28px 0 12px",
  },
  scenarioQuestion: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "serif",
  },
  argumentGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 40,
    marginTop: 42,
  },
  argumentBox: {
    background: "#0C0C0C",
    borderRadius: 24,
    padding: 42,
    fontSize: 22,
    lineHeight: 1.35,
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    gap: 40,
    padding: 80,
    borderTop: "1px solid #101010",
    background: "white",
  },
  footerLogo: {
    minWidth: 260,
    fontSize: 26,
  },
};
