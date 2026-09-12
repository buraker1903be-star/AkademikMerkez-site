// Anasayfa "Analiz stüdyosu" kartlarındaki dekoratif görseller. Tamamı saf SVG/HTML'dir.

type Token = [string, string?];

const CODE: Token[][] = [
  [["import", "k"], [" pandas "], ["as", "k"], [" pd"]],
  [["import", "k"], [" statsmodels.formula.api "], ["as", "k"], [" smf"]],
  [["from", "k"], [" scipy "], ["import", "k"], [" stats"]],
  [],
  [["df = pd."], ["read_csv", "f"], ["("], ['"anket_verisi.csv"', "s"], [")"]],
  [["t, p = stats."], ["ttest_ind", "f"], ["(df.grup_a, df.grup_b)"]],
  [["print", "b"], ["("], ['f"t = {t:.2f}, p = {p:.3f}"', "s"], [")"]],
  [],
  [["# Çoklu doğrusal regresyon", "c"]],
  [["model = smf."], ["ols", "f"], ["("], ['"basari ~ motivasyon + sure"', "s"], [", df)."], ["fit", "f"], ["()"]],
  [["print", "b"], ["(model."], ["summary", "f"], ["())"]],
];

export function PythonCode() {
  return (
    <div className="code" aria-hidden="true">
      <div className="code-bar">
        <i />
        <i />
        <i />
        <span>analiz.ipynb</span>
      </div>
      <pre>
        <code>
          {CODE.map((line, i) => (
            <span key={i}>
              {line.map(([text, kind], j) =>
                kind ? (
                  <span key={j} className={`tok-${kind}`}>
                    {text}
                  </span>
                ) : (
                  text
                )
              )}
              {"\n"}
            </span>
          ))}
        </code>
      </pre>
      <div className="code-out">→ t = 3.41, p = 0.001 · R² = 0.46</div>
    </div>
  );
}

export function MeshVisual() {
  const shape = "M24 36 H206 Q244 36 244 74 V184 H176 V104 H24 Z";
  return (
    <svg className="viz" viewBox="0 0 320 200" aria-hidden="true">
      <defs>
        <radialGradient id="am-fea" cx="176" cy="104" r="190" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#e5484d" />
          <stop offset="0.14" stopColor="#f5a524" />
          <stop offset="0.3" stopColor="#f5d90a" />
          <stop offset="0.5" stopColor="#46c882" />
          <stop offset="0.72" stopColor="#1fb2d6" />
          <stop offset="1" stopColor="#3350d8" />
        </radialGradient>
        <linearGradient id="am-legend" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e5484d" />
          <stop offset="0.3" stopColor="#f5d90a" />
          <stop offset="0.6" stopColor="#46c882" />
          <stop offset="1" stopColor="#3350d8" />
        </linearGradient>
        <pattern id="am-mesh" width="14" height="14" patternUnits="userSpaceOnUse">
          <path d="M0 0H14V14H0Z M0 14L14 0" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth=".6" />
        </pattern>
      </defs>
      <path d={shape} fill="url(#am-fea)" />
      <path d={shape} fill="url(#am-mesh)" stroke="rgba(0,0,0,.28)" strokeWidth="1" />
      <circle cx="210" cy="150" r="11" fill="#fff" stroke="rgba(0,0,0,.28)" />
      <rect x="284" y="36" width="10" height="148" rx="5" fill="url(#am-legend)" />
      <text x="280" y="30" fontSize="9" fill="#86868b" textAnchor="end">
        Maks.
      </text>
      <text x="280" y="198" fontSize="9" fill="#86868b" textAnchor="end">
        Min.
      </text>
    </svg>
  );
}

export function QualVisual() {
  return (
    <div aria-hidden="true">
      <div className="qual-doc">
        <span className="hl hl-a">Ekip arkadaşlarımın desteği</span> olmasa bu süreci atlatamazdım. İlk
        aylarda <span className="hl hl-b">kendimi yalnız hissettim</span>; ama{" "}
        <span className="hl hl-c">danışmanım</span> her adımda yanımdaydı.
      </div>
      <div className="qual-codes">
        <span className="code-tag a">Sosyal destek</span>
        <span className="code-tag b">Yalnızlık</span>
        <span className="code-tag c">Mentorluk</span>
      </div>
    </div>
  );
}

export function StatsVisual() {
  const bars = [58, 84, 70, 108, 94, 134];
  return (
    <svg className="viz" viewBox="0 0 300 180" aria-hidden="true">
      <defs>
        <linearGradient id="am-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a3a3c" />
          <stop offset="1" stopColor="#1d1d1f" />
        </linearGradient>
        <linearGradient id="am-bar-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ecd08e" />
          <stop offset="1" stopColor="#a97b2d" />
        </linearGradient>
      </defs>
      <text x="0" y="14" fontSize="12" fill="#86868b" fontFamily="ui-monospace, monospace">
        β = 0.42 · p &lt; .001
      </text>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={16 + i * 46}
          y={164 - h}
          width="30"
          height={h}
          rx="7"
          fill={i === bars.length - 1 ? "url(#am-bar-gold)" : "url(#am-bar)"}
        />
      ))}
      <polyline
        points={bars.map((h, i) => `${31 + i * 46},${150 - h}`).join(" ")}
        fill="none"
        stroke="#b8893b"
        strokeWidth="2"
        strokeDasharray="4 5"
        strokeLinecap="round"
      />
      <line x1="0" y1="165" x2="300" y2="165" stroke="rgba(0,0,0,.12)" />
    </svg>
  );
}
