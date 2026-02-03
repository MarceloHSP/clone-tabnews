import { useState, useEffect } from "react";

// --- DADOS DO JOGO ---
const gameData = [
  {
    id: "fase1",
    title: "Fase 1: O Aquecimento",
    color: "#00b894",
    minXpToUnlock: 0,
    quests: [
      {
        id: "q151",
        code: "Q.151",
        topic: "Lógica Sequencial",
        xp: 100,
        question: `Para acompanhar o fluxo de visitantes em seu prédio, uma empresa estabeleceu um código de identificação para a visitação. De acordo com a regra estabelecida, cada visitante será identificado com um código sequencial numérico com 7 dígitos, determinado, da esquerda para a direita, da seguinte forma:

• o primeiro dígito indica o andar ao qual o visitante se dirige, que é um número de 1 a 4;
• os dois próximos dígitos correspondem ao número do setor da empresa ao qual o visitante se destina. Esse número varia de 01 a 20;
• os três dígitos seguintes correspondem ao número do funcionário da empresa com quem o visitante irá se reunir. Esse número varia de 001 a 135;
• o último dígito indica se o visitante chegou à empresa pela manhã, dígito 0, ou à tarde, dígito 1.

Um visitante chegou à empresa às 10 horas da manhã para se reunir com o funcionário identificado pelo número 109, que trabalha no setor 08 da empresa, localizado no 2º andar.

O código de identificação desse visitante é:

A) 0109082.
B) 0281090.
C) 1010982.
D) 2081090.
E) 2810910.`,
        explanation: `✅ **Gabarito: Letra D**

Vamos montar o código passo a passo:

1. ANDAR (1º dígito):
O visitante foi ao 2º andar.
-> Código começa com 2.

2. SETOR (2º e 3º dígitos):
Setor 08.
-> Código agora é 2 08.

3. FUNCIONÁRIO (4º, 5º e 6º dígitos):
Funcionário 109.
-> Código agora é 2 08 109.

4. TURNO (7º dígito):
10h da manhã = Manhã (dígito 0).
-> Código final: 2 08 109 0.

Juntando tudo: 2081090.`,
      },
      {
        id: "q154",
        code: "Q.154",
        topic: "Gráfico Barras",
        xp: 100,
        question: "Texto da questão...",
        explanation: "Resolução...",
      },
      {
        id: "q137",
        code: "Q.137",
        topic: "Probabilidade",
        xp: 100,
        question: "Texto da questão...",
        explanation: "Resolução...",
      },
      {
        id: "q179",
        code: "Q.179",
        topic: "Unidades",
        xp: 100,
        question: "Texto da questão...",
        explanation: "Resolução...",
      },
      {
        id: "q145",
        code: "Q.145",
        topic: "Interp. Gráfico",
        xp: 100,
        question: "Texto da questão...",
        explanation: "Resolução...",
      },
      {
        id: "q142",
        code: "Q.142",
        topic: "Mediana",
        xp: 100,
        question: "Texto da questão...",
        explanation: "Resolução...",
      },
      {
        id: "q143",
        code: "Q.143",
        topic: "Rótulos",
        xp: 100,
        question: "Texto da questão...",
        explanation: "Resolução...",
      },
      {
        id: "q146",
        code: "Q.146",
        topic: "Aritmética",
        xp: 100,
        question: "Texto da questão...",
        explanation: "Resolução...",
      },
      {
        id: "q148",
        code: "Q.148",
        topic: "Escalas",
        xp: 100,
        question: "Texto da questão...",
        explanation: "Resolução...",
      },
      {
        id: "q136",
        code: "Q.136",
        topic: "Custo-benefício",
        xp: 100,
        question: "Texto da questão...",
        explanation: "Resolução...",
      },
      {
        id: "q163",
        code: "Q.163",
        topic: "Visual/Lógica",
        xp: 100,
        question: "Texto da questão...",
        explanation: "Resolução...",
      },
    ],
  },
  {
    id: "fase2",
    title: "Fase 2: A Escalada",
    color: "#fdcb6e",
    minXpToUnlock: 800,
    quests: [
      {
        id: "q161",
        code: "Q.161",
        topic: "Mapa/Lógica",
        xp: 150,
        question: "Texto da questão...",
        explanation: "Resolução...",
      },
      {
        id: "q144",
        code: "Q.144",
        topic: "Geometria/Pintura",
        xp: 150,
        question: "Texto da questão...",
        explanation: "Resolução...",
      },
      {
        id: "q165",
        code: "Q.165",
        topic: "Estatística",
        xp: 150,
        question: "Texto da questão...",
        explanation: "Resolução...",
      },
      {
        id: "q168",
        code: "Q.168",
        topic: "Otimização",
        xp: 150,
        question: "Texto da questão...",
        explanation: "Resolução...",
      },
      {
        id: "q159",
        code: "Q.159",
        topic: "Divisão",
        xp: 150,
        question: "Texto da questão...",
        explanation: "Resolução...",
      },
      {
        id: "q141",
        code: "Q.141",
        topic: "Proporção",
        xp: 150,
        question: "Texto da questão...",
        explanation: "Resolução...",
      },
      {
        id: "q150",
        code: "Q.150",
        topic: "Regra de Três",
        xp: 150,
        question: "Texto da questão...",
        explanation: "Resolução...",
      },
      {
        id: "q157",
        code: "Q.157",
        topic: "Álgebra Simples",
        xp: 150,
        question: "Texto da questão...",
        explanation: "Resolução...",
      },
      {
        id: "q147",
        code: "Q.147",
        topic: "Porcentagem",
        xp: 150,
        question: "Texto da questão...",
        explanation: "Resolução...",
      },
      {
        id: "q156",
        code: "Q.156",
        topic: "Escalas",
        xp: 150,
        question: "Texto da questão...",
        explanation: "Resolução...",
      },
      {
        id: "q166",
        code: "Q.166",
        topic: "Pace/Média",
        xp: 150,
        question: "Texto da questão...",
        explanation: "Resolução...",
      },
    ],
  },
  {
    id: "fase3",
    title: "Fase 3: O Boss Final",
    color: "#d63031",
    minXpToUnlock: 2000,
    quests: [
      {
        id: "q149",
        code: "Q.149",
        topic: "Poliedro",
        xp: 200,
        question: "Texto...",
        explanation: "Resolução...",
      },
      {
        id: "q176",
        code: "Q.176",
        topic: "Velocidade",
        xp: 200,
        question: "Texto...",
        explanation: "Resolução...",
      },
      {
        id: "q158",
        code: "Q.158",
        topic: "Financeira",
        xp: 200,
        question: "Texto...",
        explanation: "Resolução...",
      },
      {
        id: "q167",
        code: "Q.167",
        topic: "Carro Flex",
        xp: 200,
        question: "Texto...",
        explanation: "Resolução...",
      },
      {
        id: "q139",
        code: "Q.139",
        topic: "Ciclovia",
        xp: 200,
        question: "Texto...",
        explanation: "Resolução...",
      },
      {
        id: "q170",
        code: "Q.170",
        topic: "Arquimedes",
        xp: 200,
        question: "Texto...",
        explanation: "Resolução...",
      },
      {
        id: "q180",
        code: "Q.180",
        topic: "Moedas",
        xp: 200,
        question: "Texto...",
        explanation: "Resolução...",
      },
      {
        id: "q171",
        code: "Q.171",
        topic: "Caixas",
        xp: 200,
        question: "Texto...",
        explanation: "Resolução...",
      },
      {
        id: "q162",
        code: "Q.162",
        topic: "Reciclagem",
        xp: 200,
        question: "Texto...",
        explanation: "Resolução...",
      },
      {
        id: "q174",
        code: "Q.174",
        topic: "Parcelas",
        xp: 200,
        question: "Texto...",
        explanation: "Resolução...",
      },
      {
        id: "q169",
        code: "Q.169",
        topic: "Produtividade",
        xp: 200,
        question: "Texto...",
        explanation: "Resolução...",
      },
    ],
  },
];

function Home() {
  const [completedQuests, setCompletedQuests] = useState([]);
  const [currentXP, setCurrentXP] = useState(0);
  const [expandedQuest, setExpandedQuest] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("triGameSave");
    if (saved) {
      const data = JSON.parse(saved);
      setCompletedQuests(data.completedQuests || []);
      setCurrentXP(data.currentXP || 0);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "triGameSave",
      JSON.stringify({ completedQuests, currentXP }),
    );
  }, [completedQuests, currentXP]);

  function toggleQuest(questId, xpValue) {
    if (completedQuests.includes(questId)) {
      setCompletedQuests((prev) => prev.filter((id) => id !== questId));
      setCurrentXP((prev) => prev - xpValue);
    } else {
      setCompletedQuests((prev) => [...prev, questId]);
      setCurrentXP((prev) => prev + xpValue);
    }
  }

  function toggleExpand(questId) {
    if (expandedQuest === questId) {
      setExpandedQuest(null);
    } else {
      setExpandedQuest(questId);
    }
  }

  function getLevel(xp) {
    if (xp > 2500) return "Mestra do ENEM";
    if (xp > 1000) return "Caçadora de TRI";
    return "Novata";
  }

  return (
    <div className="container">
      <div className="hud">
        <span className="level-badge">Nível: {getLevel(currentXP)}</span>
        <span className="xp-display">XP: {currentXP}</span>
      </div>

      <div className="content">
        <h1>Operação TRI 2025</h1>
        <p className="subtitle">
          Oculte as questões tóxicas. Foque no tesouro.
        </p>

        {gameData.map((phase) => {
          const isLocked = currentXP < phase.minXpToUnlock;

          return (
            <div
              key={phase.id}
              className={`phase-section ${isLocked ? "locked" : ""}`}
            >
              <h2 style={{ borderColor: phase.color }}>
                {phase.title}
                {isLocked && (
                  <small> (Precisa de {phase.minXpToUnlock} XP)</small>
                )}
              </h2>

              <div className="cards-container">
                {phase.quests.map((quest) => {
                  const isExpanded = expandedQuest === quest.id;

                  return (
                    <div
                      key={quest.id}
                      className={`quest-card ${isExpanded ? "expanded" : ""}`}
                    >
                      <div className="card-header">
                        <div
                          className="quest-info"
                          onClick={() => toggleExpand(quest.id)}
                        >
                          <h3>
                            {quest.code} {isExpanded ? "🔽" : "▶️"}
                          </h3>
                          <p>
                            {quest.topic}{" "}
                            <span style={{ color: phase.color }}>
                              (+{quest.xp} XP)
                            </span>
                          </p>
                        </div>
                        <div className="checkbox-wrapper">
                          <input
                            type="checkbox"
                            checked={completedQuests.includes(quest.id)}
                            onChange={() => toggleQuest(quest.id, quest.xp)}
                            disabled={isLocked}
                          />
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="card-body">
                          <div className="question-text">
                            <strong>Enunciado:</strong>
                            <br />
                            {quest.question}
                          </div>

                          <details className="resolution-box">
                            <summary>Ver Resolução e Gabarito</summary>
                            <div className="resolution-text">
                              {quest.explanation}
                            </div>
                          </details>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: "Inter", sans-serif;
          background-color: #1a1a1a;
          color: #e0e0e0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding-bottom: 50px;
        }

        .hud {
          background: rgba(0, 0, 0, 0.9);
          padding: 15px 20px;
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid #333;
          backdrop-filter: blur(5px);
        }
        .xp-display {
          font-size: 1.5rem;
          font-weight: bold;
          color: #00b894;
        }
        .level-badge {
          background: #333;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          text-transform: uppercase;
        }

        .content {
          padding: 20px;
        }
        h1 {
          margin-bottom: 5px;
          text-align: center;
        }
        .subtitle {
          text-align: center;
          color: #888;
          margin-bottom: 30px;
          font-size: 0.9rem;
        }
        h2 {
          border-left: 5px solid #fff;
          padding-left: 15px;
          margin-top: 40px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        h2 small {
          font-size: 0.8rem;
          opacity: 0.6;
          font-weight: normal;
        }
        .locked {
          opacity: 0.4;
          pointer-events: none;
          filter: grayscale(1);
        }

        .quest-card {
          background: #2d2d2d;
          margin: 10px 0;
          border-radius: 12px;
          border: 1px solid #3d3d3d;
          overflow: hidden;
          transition: all 0.2s;
        }
        .quest-card.expanded {
          border-color: #777;
          background: #333;
        }

        .card-header {
          padding: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .quest-info {
          cursor: pointer;
          flex-grow: 1;
        }
        .quest-info:hover h3 {
          color: #fff;
        }
        .quest-info h3 {
          margin: 0;
          font-size: 1.1rem;
        }
        .quest-info p {
          margin: 4px 0 0;
          font-size: 0.8rem;
          color: #aaa;
        }

        .card-body {
          padding: 0 15px 20px 15px;
          border-top: 1px solid #444;
          animation: fadeIn 0.3s;
        }

        /* AQUI ESTÁ A MÁGICA QUE ARRUMA O TEXTO */
        .question-text {
          margin-top: 15px;
          line-height: 1.6;
          color: #ddd;
          font-size: 0.95rem;
          white-space: pre-wrap; /* Garante quebras de linha */
        }

        .resolution-box {
          margin-top: 20px;
          background: #222;
          padding: 10px;
          border-radius: 8px;
          border: 1px dashed #555;
        }
        .resolution-box summary {
          cursor: pointer;
          color: #00b894;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .resolution-text {
          color: #bbb;
          white-space: pre-wrap; /* Garante quebras de linha na resolução também */
          line-height: 1.6;
        }

        input[type="checkbox"] {
          width: 25px;
          height: 25px;
          cursor: pointer;
          accent-color: #00b894;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
