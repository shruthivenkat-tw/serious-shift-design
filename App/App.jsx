export default function App() {
  return (
    <div
      data-layer="MacBook Pro 16 - 14"
      className="MacbookPro1614"
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        background: "#0C0C0C",
        overflow: "hidden",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          padding: "80px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 300,
            lineHeight: 1.1,
            marginBottom: "32px",
          }}
        >
          Four worlds are <strong>coming</strong>.
          <br />
          The thinkers can't agree which one.
        </h1>

        <p
          style={{
            fontSize: "24px",
            opacity: 0.8,
            marginBottom: "48px",
          }}
        >
          Dive into any of the 4 worlds. Debate what others have to say.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "80px",
          }}
        >
          {[
            "SCENARIO 1 · SOCIETY",
            "SCENARIO 2 · ORGANISATIONS",
            "SCENARIO 3 · ECONOMY",
            "SCENARIO 4 · CONSUMERS",
          ].map((item) => (
            <button
              key={item}
              style={{
                padding: "18px 28px",
                borderRadius: "999px",
                border: "1px solid white",
                background: "transparent",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <div
          style={{
            background:
              "linear-gradient(135deg, #3730A3 0%, #A855F7 100%)",
            borderRadius: "32px",
            padding: "60px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              opacity: 0.7,
              marginBottom: "24px",
            }}
          >
            SCENARIO 1 · SOCIETY
          </p>

          <h2
            style={{
              fontSize: "56px",
              fontWeight: 300,
              marginBottom: "24px",
            }}
          >
            Governance Void, Power Rush
          </h2>

          <p
            style={{
              fontSize: "28px",
              maxWidth: "800px",
              opacity: 0.9,
            }}
          >
            “Who fills the void when no one is governing AI?”
          </p>
        </div>
      </div>
    </div>
  );
}
