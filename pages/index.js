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
        topic: "Interpretação de Gráfico",
        xp: 100,
        image: "/q154.png",
        question: `Uma livraria comercializa livros dos seguintes gêneros literários: ficção científica, autoajuda, romance e biografia. O gráfico apresenta o estoque dos livros que essa livraria tem, por gênero literário e por nacionalidade do autor, bem como a demanda por gênero literário, obtida por meio de uma enquete feita com seus clientes habituais.

O gerente da livraria fará a encomenda de novos exemplares somente do gênero cuja quantidade em estoque seja insuficiente para atender a demanda constatada pela enquete.

O gênero de livro do qual o gerente deverá encomendar mais exemplares é:

A) ficção, pois é o que apresenta maior demanda.
B) biografia, pois é o gênero que tem a menor demanda.
C) autoajuda, pois a quantidade em estoque é inferior à demanda.
D) biografia, pois é o gênero que tem a menor quantidade de livros em estoque.
E) romance, pois é o que apresenta o menor estoque de livros de autores brasileiros.`,
        explanation: `✅ **Gabarito: Letra C**

O segredo dessa questão é **SOMAR o Estoque Total** (Nacional + Estrangeiro) antes de comparar com a linha da Demanda.

Vamos analisar gênero por gênero:

1. **Ficção Científica:**
   Estoque: 120 (Estrangeiro) + 80 (Nacional) = **200**.
   Demanda: 160.
   -> Estoque sobra (200 > 160).

2. **Autoajuda:**
   Estoque: 80 (Estrangeiro) + 50 (Nacional) = **130**.
   Demanda: **135**.
   🚨 **PROBLEMA:** O estoque (130) é menor que a demanda (135). Faltam 5 livros.

3. **Romance:**
   Estoque: 105 + 40 = 145.
   Demanda: 140.
   -> Estoque sobra.

4. **Biografia:**
   Estoque: 50 + 45 = 95.
   Demanda: 80.
   -> Estoque sobra.

**Conclusão:** O gerente precisa encomendar **Autoajuda**.`,
      },
      {
        id: "q137",
        code: "Q.137",
        topic: "Probabilidade Condicional",
        xp: 100,
        image: "/q137.png",
        question: `A reportagem de uma revista abordou o uso de redes sociais pelos internautas brasileiros. Alguns dos dados apurados pela reportagem estão apresentados no infográfico.

(Considere o gráfico onde mostra que 90% dos internautas acessam redes sociais. Desses que acessam, 60% são mulheres).

Segundo os dados do infográfico, ao se escolher aleatoriamente um internauta brasileiro no período ao qual se refere a reportagem, a probabilidade de ele ser um homem que acessa alguma rede social é:

A) 30/90
B) 36/100
C) 40/100
D) 40/90
E) 46/90`,
        explanation: `✅ **Gabarito: Letra B**

O segredo aqui é a palavra "DE". Queremos calcular uma porcentagem **DE** outra porcentagem.

1. **Quantos acessam redes sociais?**
O gráfico diz que **90%** dos internautas acessam.

2. **Desses que acessam, quantos são homens?**
O gráfico diz que 60% são mulheres. Logo, o restante (**40%**) são homens.

3. **A conta final:**
Precisamos calcular **40% DE 90%**.
Na matemática, "DE" vira multiplicação:

P = 0,40 x 0,90
P = 0,36

Transformando em fração: **36/100**.

🚨 **A Pegadinha:** Muita gente marca 40/100 achando que é só olhar a porcentagem de homens, mas esquece que eles são uma parte apenas do grupo que acessa a rede (os 90%), e não do total de brasileiros.`,
      },
      {
        id: "q179",
        code: "Q.179",
        topic: "Análise Dimensional",
        xp: 100,
        question: `A luminância de um objeto é a grandeza que descreve a quantidade de luz produzida ou refletida por sua superfície. Ela está definida como a razão entre a intensidade luminosa, medida em candela (cd), e o quadrado da distância do objeto até o foco de luz, medida em metro (m).

A unidade de medida da luminância de um objeto é:

A) cd / m²
B) m² / cd
C) cd / m
D) m / cd
E) m / cd²`,
        explanation: `✅ **Gabarito: Letra A**

A questão pede a "unidade de medida" baseada na definição dada no texto. Vamos traduzir o português para "matematiquês":

1. **"Razão"** significa **Divisão** (fração).
2. O numerador (parte de cima) é a "intensidade luminosa", que o texto diz ser medida em **cd**.
3. O denominador (parte de baixo) é o "quadrado da distância", que o texto diz ser medida em **m²**.

Montando a fração:
Numerador: cd
Denominator: m²

Resultado: **cd / m²** (Opção A).`,
      },
      {
        id: "q145",
        code: "Q.145",
        topic: "Interpretação de Gráfico",
        xp: 100,
        image: "/q145.png",
        question: `Pesquisas na área de neurobiologia confirmam que a prática meditativa é responsável por diminuir consideravelmente a frequência respiratória para praticantes avançados, que, após iniciarem a meditação, têm suas frequências respiratórias reduzidas até se estabilizarem em um nível mais baixo.

O gráfico apresenta a relação da frequência respiratória, em incursões de respirações por minuto (rpm), em relação ao tempo, em minuto, de um praticante avançado, em que (f1) representa a frequência no instante t1, no qual se inicia a prática meditativa; e (f2), a frequência no instante t2, a partir do qual esta se estabiliza durante a meditação.

A partir do instante t1, em que se inicia a prática meditativa, o comportamento da frequência respiratória, em relação ao tempo:

A) mantém-se constante.
B) é diretamente proporcional ao tempo.
C) é inversamente proporcional ao tempo.
D) diminui até o instante t2, a partir do qual se torna constante.
E) diminui de forma proporcional ao tempo, tanto entre t1 e t2 quanto após t2.`,
        explanation: `✅ **Gabarito: Letra D**

Para matar essa questão, basta conectar o texto com o visual do gráfico:

1. **O intervalo entre t1 e t2:**
O texto diz: *"têm suas frequências respiratórias **reduzidas**"*.
No gráfico, a linha **cai** (diminui).

2. **O momento t2 em diante:**
O texto diz: *"até se **estabilizarem**"*.
Na linguagem dos gráficos, "estabilizar" significa virar uma **linha reta horizontal** (função constante). O valor não muda mais.

Logo, a frequência **diminui** (cai) até chegar em t2 e depois fica **constante** (reta).`,
      },
      {
        id: "q142",
        code: "Q.142",
        topic: "Estatística (Mediana)",
        xp: 100,
        question: `Uma empresa de tecnologia vai padronizar a velocidade de conexão de internet que oferece a seus clientes em dez cidades. A direção da empresa decide que seu novo padrão de velocidade de referência será a mediana dos valores das velocidades de referência de conexões nessas dez cidades. Esses valores, em megabyte por segundo (MB/s), são apresentados no quadro.

Cidades e Velocidade (MB/s):
C1: 390 | C2: 380
C3: 320 | C4: 390
C5: 340 | C6: 380
C7: 390 | C8: 400
C9: 350 | C10: 360

A velocidade de referência, em megabyte por segundo, a ser adotada por essa empresa é:

A) 360.
B) 370.
C) 380.
D) 390.
E) 400.`,
        explanation: `✅ **Gabarito: Letra C**

Para calcular a **MEDIANA**, o primeiro passo obrigatório é **ORGANIZAR O ROL** (colocar os números em ordem crescente).

1. **Lista Original:**
390, 380, 320, 390, 340, 380, 390, 400, 350, 360.

2. **Lista ORDENADA (Crescente):**
320, 340, 350, 360, **380, 380**, 390, 390, 390, 400.

3. **Encontrar o Meio:**
Como temos 10 números (número par), a mediana é a média dos dois termos centrais (o 5º e o 6º).

5º termo: 380
6º termo: 380

Cálculo: (380 + 380) / 2 = **380**.

**Resposta:** 380 MB/s.`,
      },
      {
        id: "q143",
        code: "Q.143",
        topic: "Aritmética/Rótulos",
        xp: 100,
        question: `Na cantina de uma escola, há cinco alimentos vendidos em pacotes com diferentes quantidades de porções. As informações nutricionais contidas nos rótulos desses produtos estão indicadas abaixo:

• Batata chips: Pacote com 3 porções. (170 mg de sódio por porção)
• Palitos salgados: Pacote com 4 porções. (501 mg de sódio por porção)
• Biscoito multigrãos: Pacote com 8 porções. (264 mg de sódio por porção)
• Biscoito de polvilho: Pacote com 6 porções. (175 mg de sódio por porção)
• Biscoito de água e sal: Pacote com 5 porções. (166 mg de sódio por porção)

Uma estudante opta sempre pelo alimento com a menor quantidade total de sódio por pacote.

Qual desses produtos deve ser o escolhido pela estudante?

A) Batata chips.
B) Palitos salgados.
C) Biscoito multigrãos.
D) Biscoito de polvilho.
E) Biscoito de água e sal.`,
        explanation: `✅ **Gabarito: Letra A**

A questão pede o MENOR sódio TOTAL por pacote.
A conta é simples: **Número de Porções x Sódio da Porção**.

Vamos calcular um por um:

1. **Batata chips:**
3 x 170 = **510 mg** (O campeão! 🏆)

2. **Palitos salgados:**
4 x 501 = 2004 mg

3. **Biscoito multigrãos:**
8 x 264 = 2112 mg (Muito alto!)

4. **Biscoito de polvilho:**
6 x 175 = 1050 mg

5. **Biscoito de água e sal:**
5 x 166 = 830 mg

Comparando os totais (510, 2004, 2112, 1050, 830), o menor valor é o da **Batata chips**.`,
      },
      {
        id: "q146",
        code: "Q.146",
        topic: "Aritmética/Decimais",
        xp: 100,
        question: `No atletismo, um grande desafio da prova de 100 metros rasos é a sua conclusão num tempo abaixo da marca de referência dos 10,00 segundos. Vários atletas já alcançaram esse feito. Em 2009, o jamaicano Usain Bolt estabeleceu o recorde mundial masculino dessa prova, com o tempo de 9,58 segundos.

Qual é a diferença, em segundo, entre a marca de referência e a marca estabelecida por Usain Bolt em 2009?

A) 0,02
B) 0,42
C) 0,52
D) 1,02
E) 1,42`,
        explanation: `✅ **Gabarito: Letra B**

A palavra "diferença" na matemática é uma ordem direta para fazer uma **SUBTRAÇÃO** (conta de menos).

Temos:
• Referência: 10,00
• Bolt: 9,58

Conta: **10,00 - 9,58**

💡 **Dica Mental (Dinheiro):**
Pense como se fosse dinheiro para não errar o "empresta um".
R$ 10,00 menos R$ 9,58.
- De 9,58 para 9,60 faltam 0,02.
- De 9,60 para 10,00 faltam 0,40.
- Total: **0,42**.

Ou montando a conta clássica:
  10,00
- 09,58
_______
  00,42`,
      },
      {
        id: "q148",
        code: "Q.148",
        topic: "Escalas",
        xp: 100,
        question: `O controle remoto de um carrinho de brinquedo vem equipado com uma tela que ajusta automaticamente a escala empregada na exibição de cada deslocamento. A tela apresenta a imagem do deslocamento, a escala utilizada na geração dessa imagem e o comprimento desse deslocamento, em centímetro, em conformidade com a escala empregada.
        
As figuras representam a tela do controle remoto exibindo os dados de cinco deslocamentos realizados por esse carrinho:

• Figura I: Deslocamento de 9 cm na escala 1 : 100
• Figura II: Deslocamento de 5 cm na escala 1 : 300
• Figura III: Deslocamento de 5 cm na escala 1 : 600
• Figura IV: Deslocamento de 3 cm na escala 1 : 700
• Figura V: Deslocamento de 2 cm na escala 1 : 1000

A opção que indica o deslocamento de maior comprimento realizado pelo carrinho de brinquedo é:

A) I.
B) II.
C) III.
D) IV.
E) V.`,
        explanation: `✅ **Gabarito: Letra C**

Para achar o **Tamanho Real**, basta multiplicar o tamanho do desenho pelo fator da escala (o denominador).

Vamos calcular um por um:

1. **Figura I:**
9 cm x 100 = **900 cm**

2. **Figura II:**
5 cm x 300 = **1.500 cm**

3. **Figura III:**
5 cm x 600 = **3.000 cm** (O maior até agora!) 🏆

4. **Figura IV:**
3 cm x 700 = **2.100 cm**

5. **Figura V:**
2 cm x 1.000 = **2.000 cm**

Comparando todos (900, 1500, 3000, 2100, 2000), o maior deslocamento real é o da **Figura III**.`,
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

  function formatText(text) {
    if (!text) return "";
    return text
      .split("**")
      .map((part, index) =>
        index % 2 === 1 ? <strong key={index}>{part}</strong> : part,
      );
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
                            {formatText(quest.question)}
                          </div>
                          {quest.image && (
                            <div className="image-container">
                              <img
                                src={quest.image}
                                alt={`Imagem da questão ${quest.code}`}
                              />
                            </div>
                          )}
                          <details className="resolution-box">
                            <summary>Ver Resolução e Gabarito</summary>
                            <div className="resolution-text">
                              {formatText(quest.explanation)}
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

        .image-container {
          margin: 15px 0;
          text-align: center; /* Centraliza a imagem */
        }

        .image-container img {
          max-width: 100%; /* Não deixa passar da largura do card */
          height: auto; /* Mantém a proporção */
          border-radius: 8px; /* Borda arredondada bonitinha */
          border: 1px solid #444;
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
