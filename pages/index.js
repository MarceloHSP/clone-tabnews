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
        topic: "Aritmética/Consumo",
        xp: 100,
        question: `Uma pessoa pretende instalar um kit de gás natural veicular (GNV) em seu carro. Na loja que escolheu para realizar a compra e instalação desse kit, havia cinco modelos de cilindro para armazenamento do gás, cujas capacidades, em metro cúbico, eram, respectivamente: 10, 14, 17, 21 e 25.

O preço do cilindro é proporcional à sua capacidade. Esse carro rodará 30 km diariamente, 7 dias por semana, e o consumo do GNV é de 1 m³ a cada 13 km rodados.

A pessoa escolherá o modelo de cilindro de menor preço e que garanta apenas um abastecimento semanal.

Nessas condições, qual será a capacidade, em metro cúbico, do cilindro escolhido por essa pessoa?

A) 10
B) 14
C) 17
D) 21
E) 25`,
        explanation: `✅ **Gabarito: Letra C**

Precisamos descobrir quantos metros cúbicos (m³) o carro gasta em uma semana inteira.

1. **Quilometragem Semanal:**
30 km por dia x 7 dias = **210 km**.

2. **Cálculo do Gás Necessário:**
O carro faz 13 km com 1 m³. Para rodar 210 km, dividimos:
210 ÷ 13 ≈ 16,15 m³.

3. **Escolha do Cilindro:**
O motorista precisa de **16,15 m³**.
* O cilindro de 14 m³ não aguenta (vai faltar gás).
* O cilindro de 17 m³ aguenta (sobra um pouquinho e é o mais barato entre os que servem).
* O de 21 m³ serve, mas é mais caro.

Logo, a melhor opção econômica é o de **17 m³**.`,
      },
      {
        id: "q163",
        code: "Q.163",
        topic: "Interpretação de Gráficos",
        xp: 100,
        image: "/q163.png",
        question: `Em uma escola, todos os estudantes do ensino médio praticam uma das três modalidades esportivas oferecidas como atividade física, e cada um deles pratica somente uma dessas atividades. 

Os gráficos trazem alguns dados relativos aos quantitativos de estudantes que praticam essas modalidades esportivas nessa escola, apesar de algumas quantidades não terem sido informadas.

(Considere o gráfico de barras mostrando as 3 séries e o gráfico de pizza mostrando a distribuição total).

Qual é a quantidade de estudantes no ensino médio dessa escola?

A) 720
B) 360
C) 320
D) 288
E) 240`,
        explanation: `✅ **Gabarito: Letra B**

Vamos resolver usando a lógica visual e eliminação:

1. **O Gráfico de Pizza (O Segredo):**
Olhe para a parte azul (Futebol). Ela ocupa exatamente **METADE** do círculo.
Isso significa que **Futebol = 50%** e a soma de **(Vôlei + Basquete) = 50%**.
Logo: Total de Futebol = Total de Vôlei + Total de Basquete.

2. **O Dado Numérico:**
O gráfico diz que **Basquete = 80** alunos.

3. **O Gráfico de Barras (Quem é maior?):**
Compare as barras amarelas (Vôlei) com as roxas (Basquete):
- Na 2ª e 3ª série, elas têm o mesmo tamanho.
- Mas na 1ª série, a barra de **Vôlei é maior**.
Conclusão: O total de alunos do Vôlei é **MAIOR** que o do Basquete (V > 80).

4. **Testando as Alternativas:**
Sabemos que o Total Geral é o dobro de (Vôlei + Basquete).
Vamos testar as opções:

* **Se o total fosse 320 (Letra C):** Metade seria 160. Se Basquete é 80, o Vôlei teria que ser 80 também. (Errado, pois Vôlei > Basquete).
* **Se o total fosse 288 (Letra D):** Metade seria 144. Se Basquete é 80, o Vôlei teria que ser 64. (Errado, pois Vôlei seria menor que Basquete).
* **Se o total fosse 360 (Letra B):** Metade seria 180. Se Basquete é 80, o Vôlei seria 100.
    * Vôlei (100) > Basquete (80)? **SIM!** Faz todo sentido visualmente.

Resposta: **360**.`,
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
        topic: "Lógica Espacial / Mapa",
        xp: 150,
        image: "/q161.png",
        question: `Os quadrados em cinza na figura representam os quarteirões de uma parte do bairro onde moram João e seu amigo.
        
O quadrado pequeno (A), pintado em preto e localizado no canto superior esquerdo de um quadrado maior, indica a casa do amigo de João. João também mora em uma casa de esquina, mas na extremidade nordeste de um quarteirão.

Para chegar à casa de seu amigo, ao sair de casa, João deve caminhar pelo quarteirão onde mora na direção oeste, dobrar à direita, caminhar por três quarteirões na direção norte e dobrar à esquerda. A casa de seu amigo fica no segundo quarteirão a oeste.

O quarteirão onde se encontra a casa de João é representado pelo quadrado com a letra:

A) P.
B) Q.
C) R.
D) S.
E) T.`,
        explanation: `✅ **Gabarito: Letra A**

A melhor técnica para essa questão é o **Caminho Inverso** (fazer de trás para frente). Vamos sair da Casa A e "desfazer" os movimentos até achar a casa do João.

1. **O Final:** "A casa fica no 2º quarteirão a Oeste após virar à esquerda."
* *Inverso:* Saindo de A, vamos 2 quarteirões para **LESTE**.
* *Onde paramos:* Chegamos na rua vertical que fica à direita do bloco S.

2. **O Meio:** "Caminhar 3 quarteirões na direção Norte."
* *Inverso:* Vamos descer 3 quarteirões na direção **SUL**.
* *Contagem:* Passamos pelo bloco S (1), pelo bloco abaixo dele (2) e chegamos no bloco P (3).

3. **O Início:** "Caminhar para Oeste e dobrar à direita (para subir)."
* *Inverso:* Se ele subiu vindo do Oeste, o ponto de partida está à direita.
* *Verificação:* O enunciado diz que João mora na extremidade **Nordeste** (canto superior direito).
* Olhando para o Bloco **P**, o canto Nordeste é exatamente onde nossa volta terminou.

**Conclusão:** João mora no quarteirão **P**.`,
      },
      {
        id: "q144",
        code: "Q.144",
        topic: "Geometria Espacial",
        xp: 150,
        question: `Uma fábrica utilizou uma impressora 3D para produzir o protótipo de uma peça. O protótipo tem forma de um poliedro convexo, obtido pela justaposição de dois sólidos distintos:
        
1. Um prisma hexagonal regular reto.
2. Um tronco de pirâmide hexagonal reta.

A base maior do tronco de pirâmide coincide com uma das bases do prisma (elas foram coladas uma na outra).

Após a impressão do protótipo, ele foi encaminhado ao setor de customização para realização da pintura de sua superfície. O critério definido para realização da pintura considera que faces congruentes entre si (iguais em forma e tamanho) devem ser pintadas com uma mesma cor, e faces não congruentes entre si devem apresentar cores distintas.

Qual é a quantidade de cores utilizadas para pintar o protótipo?

A) 9
B) 8
C) 6
D) 4
E) 3`,
        explanation: `✅ **Gabarito: Letra D**

Vamos "desmontar" o objeto mentalmente e contar os tipos de faces visíveis. Lembre-se: a face onde os dois sólidos se encostam é interna e **não é pintada**.

**Parte 1: O Prisma (embaixo)**
* **Face Lateral:** São 6 retângulos idênticos. (1ª Cor)
* **Base de Baixo:** É um hexágono regular. (2ª Cor)
* *Base de Cima:* Está colada no tronco, então não conta.

**Parte 2: O Tronco de Pirâmide (em cima)**
* **Face Lateral:** São 6 trapézios idênticos. (3ª Cor)
* **Base de Cima:** É um hexágono menor (tampinha). (4ª Cor)
* *Base de Baixo:* Está colada no prisma, não conta.

**Análise das Bases:**
A base do prisma (hexágono grande) é diferente da base do topo do tronco (hexágono pequeno), pois o tronco vai afunilando. Logo, são cores diferentes.

**Total de Cores:**
1. Retângulos (laterais do prisma)
2. Hexágono Grande (fundo)
3. Trapézios (laterais do tronco)
4. Hexágono Pequeno (topo)

Resultado: **4 Cores**.`,
      },
      {
        id: "q165",
        code: "Q.165",
        topic: "Estatística (Desvio Padrão)",
        xp: 150,
        image: "/q165.png",
        question: `Em um estudo clínico, 55 mulheres foram distribuídas, aleatoriamente, em 5 grupos de 11 pessoas. Para testar uma nova medicação, será escolhido um grupo no qual a maioria das mulheres tenham idades entre 20 e 30 anos. Os demais grupos tomarão placebo ou medicações já existentes no mercado.

O quadro, parcialmente preenchido, informa alguns dados relativos às idades das mulheres desses grupos.

Mesmo com o quadro incompleto, foi possível selecionar um desses grupos porque, apenas com os dados apresentados no quadro, foi identificado um grupo que, certamente, atendia ao critério de escolha.

O grupo escolhido foi o:

A) 1.
B) 2.
C) 3.
D) 4.
E) 5.`,
        explanation: `✅ **Gabarito: Letra D**

O objetivo é ter a maioria das pessoas perto dos **25 anos** (entre 20 e 30).

Vamos analisar as ferramentas que temos:
1. **Média, Mediana e Moda:** Mostram o "centro". Todos os grupos giram em torno de 25. Isso é bom, mas não garante nada. (Eu posso ter média 25 com uma pessoa de 0 anos e outra de 50).
2. **Desvio Padrão:** Mostra a **DISPERSÃO** (o espalhamento). É aqui que matamos a questão.

* Quanto **MAIOR** o desvio padrão, mais bagunçado e espalhado é o grupo (podem ter idosos e crianças misturados).
* Quanto **MENOR** o desvio padrão, mais **HOMOGÊNEO** é o grupo (todo mundo tem quase a mesma idade).

Olhe para o **Grupo 4**:
* Média: 25.
* **Desvio Padrão: 1**.

Um desvio de apenas 1 significa que as idades variam pouquíssimo (provavelmente 24, 25, 26...). É matematicamente certo que a maioria absoluta está entre 20 e 30.

Já o Grupo 1 (Desvio 10) e Grupo 2 (Desvio 9) são muito "espalhados", com alto risco de ter gente fora da faixa.`,
      },
      {
        id: "q168",
        code: "Q.168",
        topic: "Matemática Financeira",
        xp: 150,
        image: "/q168.png",
        question: `Em um país, a primeira etapa para obtenção da carteira de motorista é a contratação de três produtos:

• pacote com 20 aulas teóricas;
• pacote com 10 aulas práticas;
• aluguel do veículo para realização das aulas práticas.

Uma pessoa que pretende obter a carteira de motorista pesquisou o valor do aluguel do veículo e os valores de cada aula teórica e de cada aula prática em três autoescolas. O quadro apresenta esses valores.

Ela contratará os três produtos numa mesma autoescola de modo que o custo total nessa primeira etapa seja o menor possível.

A autoescola que será contratada é a:

A) I, com o custo total de R$ 1 400,00.
B) II, com o custo total de R$ 280,00.
C) II, com o custo total de R$ 1 300,00.
D) III, com o custo total de R$ 460,00.
E) III, com o custo total de R$ 1 200,00.`,
        explanation: `✅ **Gabarito: Letra E**

Para resolver, precisamos calcular o **Custo Total** de cada autoescola.
A fórmula é:
(20 x Preço Teórica) + (10 x Preço Prática) + (Aluguel Veículo).

Vamos calcular uma por uma:

**1. Autoescola I:**
* Teórica: 20 x 10 = 200
* Prática: 10 x 80 = 800
* Aluguel: 400
* **Total:** 200 + 800 + 400 = **R$ 1.400,00**

**2. Autoescola II:**
* Teórica: 20 x 30 = 600
* Prática: 10 x 50 = 500
* Aluguel: 200
* **Total:** 600 + 500 + 200 = **R$ 1.300,00**

**3. Autoescola III:**
* Teórica: 20 x 20 = 400
* Prática: 10 x 40 = 400
* Aluguel: 400
* **Total:** 400 + 400 + 400 = **R$ 1.200,00**

Comparando os totais (1400, 1300, 1200), a mais barata é a **Autoescola III** com custo de **R$ 1.200,00**.`,
      },
      {
        id: "q159",
        code: "Q.159",
        topic: "Conversão de Unidades",
        xp: 150,
        question: `O dono de uma sorveteria armazena sorvete em potes de 20.000 cm³. Ele serve o sorvete em taças, em porções de 250 mL.

A quantidade de taças que ele consegue servir a partir de um pote cheio de sorvete é:

A) 5.
B) 8.
C) 50.
D) 80.
E) 800.`,
        explanation: `✅ **Gabarito: Letra D**

Para resolver essa questão, você precisa da **Chave de Ouro** das unidades de volume:

💧 **1 cm³ = 1 mL**

Isso mesmo, é uma troca direta. Um dado de 1 centímetro cúbico comporta exatamente 1 mililitro de água (ou sorvete).

1. **Converter o Pote:**
Se o pote tem 20.000 cm³, ele tem **20.000 mL**.

2. **Fazer a Divisão:**
Queremos saber quantas taças de 250 mL cabem no pote.
Conta: 20.000 ÷ 250

*Cortando um zero de cada lado para facilitar:*
2.000 ÷ 25

*Dica de cálculo mental:*
- 100 ÷ 25 = 4
- 1.000 ÷ 25 = 40
- 2.000 ÷ 25 = **80**

Resposta: **80 taças**.`,
      },
      {
        id: "q141",
        code: "Q.141",
        topic: "Lógica Aritmética",
        xp: 150,
        question: `Uma distribuidora de combustível possui caminhões-tanque com capacidade de 30.000 litros cada. Em qualquer transporte realizado por esses caminhões, um mesmo volume de combustível é descartado, pois fica com muitas impurezas. Esse volume descartado independe da quantidade transportada.

Um posto de combustível encomendou 10.000 litros de gasolina dessa distribuidora, que enviou 10.200 litros, considerando o volume descartado no transporte. Mesmo assim, a quantidade de gasolina entregue ao posto foi de 9.900 litros.

Em um novo pedido, esse posto solicitou que fosse entregue exatamente o dobro do volume de gasolina encomendado no pedido anterior.

Utilizando o mesmo caminhão da entrega anterior, qual é o volume mínimo de gasolina, em litro, que a distribuidora deverá enviar para garantir a entrega da quantidade encomendada nesse novo pedido?

A) 20 100
B) 20 200
C) 20 300
D) 20 400
E) 20 600`,
        explanation: `✅ **Gabarito: Letra C**

Para resolver, precisamos descobrir duas coisas: o **Volume Descartado (Lixo)** e o **Novo Pedido**.

1. **Descobrindo o Desperdício (Fixo):**
A distribuidora enviou 10.200, mas só chegaram 9.900.
Onde foi parar o resto? No lixo (impurezas).
Conta: 10.200 - 9.900 = **300 Litros**.
*O texto diz que esse valor é FIXO (independe da quantidade).*

2. **O Novo Pedido:**
O posto quer o dobro do volume encomendado antes (10.000).
Novo Pedido: 2 x 10.000 = **20.000 Litros**.

3. **Quanto a distribuidora deve enviar?**
Ela precisa enviar os 20.000 que o cliente quer **MAIS** os 300 que vão se perder no caminho.

Conta Final: 20.000 + 300 = **20.300 Litros**.

🚨 **A Pegadinha (Letra E):** Muita gente dobra o desperdício (300 x 2 = 600) achando que é proporcional. Não caia nessa! O enunciado diz que o volume descartado **independe** da quantidade.`,
      },
      {
        id: "q150",
        code: "Q.150",
        topic: "Regra de Três Composta",
        xp: 150,
        question: `Uma fábrica de tijolos ecológicos com 3 funcionários, cada um trabalhando 6 horas diárias, produz 720 unidades por dia.

Para atender ao crescimento da demanda por esse tipo de tijolo, essa fábrica passou a ter 5 funcionários, cada um trabalhando 9 horas por dia, aumentando, assim, sua capacidade de produção. Todos os funcionários produzem igual quantidade de tijolos a cada hora, independentemente de trabalharem 6 ou 9 horas diárias.

O número de tijolos fabricados diariamente após o aumento da capacidade de produção é:

A) 800.
B) 1 080.
C) 1 200.
D) 1 800.
E) 2 520.`,
        explanation: `✅ **Gabarito: Letra D**

Podemos resolver usando a lógica da "Força de Trabalho" (ou Regra de Três Composta).

**Passo 1: Calcular a "Potência" inicial**
Tínhamos 3 pessoas trabalhando 6 horas.
Esforço total = 3 x 6 = **18 horas de trabalho** para fazer 720 tijolos.

**Passo 2: Descobrir a velocidade da fábrica**
Se com 18 horas de trabalho eles fazem 720 tijolos, quanto se faz em 1 hora?
720 ÷ 18 = **40 tijolos por hora de trabalho**.

**Passo 3: Calcular a "Potência" nova**
Agora temos 5 pessoas trabalhando 9 horas.
Novo esforço total = 5 x 9 = **45 horas de trabalho**.

**Passo 4: Resultado Final**
Se a velocidade é 40 tijolos por hora, e agora temos 45 horas de força:
45 x 40 = **1.800 tijolos**.

---
*Ou pela fórmula direta da Regra de Três:*
(720 / x) = (3 / 5) * (6 / 9)
720 / x = 18 / 45
18x = 720 * 45
x = 32400 / 18
x = **1.800**`,
      },
      {
        id: "q157",
        code: "Q.157",
        topic: "Álgebra / Equação de 1º Grau",
        xp: 150,
        question: `O cortisol é um hormônio produzido pelas glândulas adrenais e pode ser considerado um importante marcador do estresse fisiológico. Em um estudo desenvolvido com enfermeiros, foi verificado que a concentração de cortisol salivar em um dia de trabalho, denotada por T, era, em média, 1,59 vezes a concentração de cortisol salivar em um dia de folga, denotada por F.

Nesse estudo, a relação obtida entre T e F foi:

A) T = 1,59 + F
B) F = 1,59 + T
C) T / F = 1,59
D) F / T = 1,59
E) F . T = 1,59`,
        explanation: `✅ **Gabarito: Letra C**

Vamos traduzir o enunciado para a matemática passo a passo:

1. **"A concentração no trabalho (T)..."**
2. **"...era (igual)..."**
3. **"...1,59 vezes a concentração na folga (F)."**

Equação montada:
**T = 1,59 . F**

Agora, olhando as alternativas, vemos que elas estão em forma de fração. Para chegar lá, basta passar o **F** (que está multiplicando) para o outro lado **dividindo**:

**T / F = 1,59**

Isso corresponde exatamente à **Letra C**.`,
      },
      {
        id: "q147",
        code: "Q.147",
        topic: "Porcentagem / Gráficos",
        xp: 150,
        image: "/q147.png",
        question: `Uma escola de idiomas oferece cursos de inglês, espanhol, francês e alemão. Os gráficos apresentam a distribuição percentual das matrículas, por idioma, em 2023, e a distribuição da quantidade de matrículas, por idioma, em 2024.

Para planejar as atividades de 2025, o gerente da escola estimou que:
1. O total de matrículas será o mesmo de 2024.
2. A distribuição percentual das matrículas (por idioma) será igual à registrada em 2023.

Segundo essa estimativa, o número de matrículas no curso de francês para o ano de 2025 será:

A) 2.
B) 12.
C) 20.
D) 22.
E) 40.`,
        explanation: `✅ **Gabarito: Letra E**

Para descobrir quantos alunos de Francês teremos em 2025, precisamos de dois números: o **Total de Alunos** e a **Porcentagem de Francês**.

**Passo 1: Descobrir o TOTAL de alunos (usando dados de 2024)**
O enunciado diz que o total será o mesmo de 2024. Vamos somar as barras do gráfico da direita:
* Inglês: 280
* Espanhol: 80
* Francês: 20
* Alemão: 20
Total = 280 + 80 + 20 + 20 = **400 alunos**.

**Passo 2: Descobrir a Porcentagem de Francês (usando dados de 2023)**
O enunciado diz que a porcentagem será a mesma de 2023. Olhando o gráfico de pizza (esquerda):
* Francês (verde) = **10%**.

**Passo 3: A conta final**
Quanto é 10% de 400?
0,10 x 400 = **40 alunos**.

Resposta: **40**.`,
      },
      {
        id: "q156",
        code: "Q.156",
        topic: "Escalas",
        xp: 150,
        image: "/q156.png",
        question: `Um artista, que costuma fazer desenhos com areia na praia, pediu a um banhista que fizesse um pequeno desenho, que serviria de esboço para uma grande obra de arte a ser feita na areia. Esse desenho está representado na figura (um sol com medidas indicadas de 20 cm).

Após a conclusão, a obra de arte obtida manteve as mesmas proporções do desenho feito pelo banhista, sendo que as medidas indicadas na figura (20 cm) foram ampliadas para 30 m.

Em qual escala esse desenho representa a obra de arte?

A) 1 : 1,5
B) 1 : 2,25
C) 1 : 10
D) 1 : 100
E) 1 : 150`,
        explanation: `✅ **Gabarito: Letra E**

Para calcular a escala, usamos a regra de ouro:
**Escala = Tamanho no Desenho / Tamanho Real**

Mas CUIDADO! 🚨
As unidades precisam ser iguais. Não podemos dividir cm por m.

1. **Dados:**
* Desenho (d): 20 cm
* Real (D): 30 m

2. **Conversão (O Pulo do Gato):**
Vamos passar metros para centímetros (multiplicando por 100).
30 m = **3.000 cm**.

3. **Cálculo da Escala:**
E = 20 / 3.000

Agora simplificamos a fração (corta um zero de cada lado):
E = 2 / 300

Dividindo em cima e embaixo por 2:
E = **1 / 150**

Ou seja, escala **1 : 150**.`,
      },
      {
        id: "q166",
        code: "Q.166",
        topic: "Média e Tempo (Pace)",
        xp: 150,
        image: "/q166.png",
        question: `Pace é um termo usado por um corredor para denominar o seu ritmo médio em uma corrida. Representa o tempo médio, em segundo, que esse corredor leva para percorrer 1 km.

O esquema apresenta o tempo, em segundo, que um corredor levou para cruzar as marcas que definem os quatro primeiros trechos de 1 km, em uma corrida de 5 km, e o tempo gasto para percorrer cada trecho de 1 km.

Para que consiga repetir nessa corrida seu melhor pace em corridas de 5 km (considere que seu melhor pace seja de 4 min 41 s, ou 281 s/km), seu tempo, no 5º trecho, deve ser quantos segundos menor do que o que ele gastou para percorrer o 4º trecho?

A) 1
B) 2
C) 8
D) 9
E) 15`,
        explanation: `✅ **Gabarito: Letra E**

Para resolver, precisamos descobrir quanto tempo ele tem para correr o último quilômetro (5º trecho) para atingir a meta total.

1. **Definir a Meta (Tempo Total):**
O "Melhor Pace" é de **281 segundos por km**.
Como a corrida tem 5 km, o tempo total deve ser:
5 x 281 = 1.405 segundos.

2. **Calcular o Tempo Gasto até agora (4 km):**
Olhando a linha azul do gráfico (tempo acumulado), ao cruzar a marca de 4 km, o cronômetro marcava **1.132 s**.

3. **Descobrir o tempo para o 5º Trecho:**
Tempo Restante = Meta Total - Tempo Já Gasto
1.405 - 1.132 = 273 segundos.
Ou seja, ele precisa correr o último km em **273 s**.

4. **Comparar com o 4º Trecho:**
O gráfico mostra (linha verde) que ele correu o 4º trecho em **288 s**.
A pergunta é: "Quanto o novo tempo (273) deve ser **menor** que o anterior (288)?"

Conta: 288 - 273 = **15 segundos**.`,
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
        topic: "Geometria Espacial (Vértices)",
        xp: 150,
        image: "/q149.png",
        question: `A cúpula pentagonal giralongada é um poliedro de Johnson, cujas faces são polígonos regulares, mas que não é um poliedro de Platão, de Arquimedes, prisma ou antiprisma.
        
As figuras apresentam esse poliedro em duas posições e uma de suas planificações.

Quantos vértices tem esse poliedro?

A) 21
B) 25
C) 55
D) 80
E) 110`,
        explanation: `✅ **Gabarito: Letra B**

Vamos resolver contando os vértices por "camadas", olhando para a estrutura do objeto 3D:

1. **O Topo (Tampinha):**
A figura mostra que o topo é um **Pentágono** (face verde).
Logo, temos **5 vértices** na camada superior.

2. **A Base (Fundo):**
Na planificação (desenho aberto), vemos um polígono vermelho grande de **10 lados** (Decágono).
Isso significa que a base do objeto é um decágono.
Logo, temos **10 vértices** na camada inferior.

3. **O Meio (A conexão):**
A forma geométrica é uma "Cúpula" (que alarga de 5 para 10) conectada a uma base.
Para ligar o pentágono do topo (5 pontas) à base de decágono (10 pontas) através de uma estrutura "giralongada" (que adiciona altura), existe um anel intermediário onde a cúpula termina e a extensão começa.
Esse anel intermediário tem o mesmo tamanho da base maior da cúpula, ou seja, **10 vértices**.

**Somando as camadas:**
* Anel Superior: 5 vértices
* Anel do Meio (Junção): 10 vértices
* Anel Inferior (Base): 10 vértices

Total: 5 + 10 + 10 = **25 vértices**.`,
      },
      {
        id: "q176",
        code: "Q.176",
        topic: "Regra de Três / Proporção",
        xp: 100,
        question: `A final de um campeonato de futebol foi disputada em 2 tempos regulamentares, de 45 minutos cada, sem acréscimos, com uma prorrogação de 30 minutos, também sem acréscimos.

Um jogador entrou no início do segundo tempo, com um equipamento para medir a distância percorrida durante sua participação no jogo.

Ao final do segundo tempo regulamentar, esse jogador havia percorrido 4,5 km. Ele manteve na prorrogação a mesma velocidade média que havia mantido no segundo tempo regulamentar.

A distância percorrida por esse jogador durante sua participação na partida, em quilômetro, foi:

A) 4,5.
B) 6,0.
C) 7,5.
D) 9,0.
E) 12,0.`,
        explanation: `✅ **Gabarito: Letra C**

Vamos resolver usando a lógica dos números "amigos":

1. **Análise do 2º Tempo:**
O jogador correu **4,5 km** em **45 minutos**.
Olhe para os números: 4,5 e 45.
Isso significa que a velocidade dele é de **0,1 km por minuto** (basta dividir 4,5 por 45).

2. **Cálculo da Prorrogação:**
A prorrogação dura **30 minutos**.
Se ele corre 0,1 km a cada minuto:
30 x 0,1 = **3,0 km**.

3. **Total da Participação:**
A questão pede a distância TOTAL (2º Tempo + Prorrogação).
4,5 km (que ele já tinha corrido) + 3,0 km (da prorrogação) = **7,5 km**.

---
*Ou pela Regra de Três direta:*
45 min --- 4,5 km
30 min --- x km

45x = 135
x = 3 km.

Total: 4,5 + 3 = **7,5 km**.`,
      },
      {
        id: "q158",
        code: "Q.158",
        topic: "Matemática Financeira",
        xp: 150,
        question: `Um estacionamento possui 120 vagas para veículos, e todas essas vagas estão ocupadas. Cada cliente paga uma mensalidade para utilizar uma vaga, que é calculada com base nas despesas mensais do estacionamento e no lucro pretendido.

As despesas mensais do estacionamento são: R$ 14 240,00 com manutenção mais R$ 36,00 de seguro por veículo.

O lucro do estacionamento é determinado pela diferença do valor arrecadado com as mensalidades pelas despesas efetuadas. A partir do mês seguinte, o valor do seguro por veículo aumentará em 20%, e as despesas com manutenção permanecerão sem alterações.

Com isso, o dono do estacionamento reajustará as mensalidades para obter um lucro mensal de R$ 10 000,00. Apesar desse reajuste, todas as vagas continuarão ocupadas.

O valor, em real, da mensalidade reajustada será:

A) 185,60.
B) 226,09.
C) 245,20.
D) 268,93.
E) 285,60.`,
        explanation: `✅ **Gabarito: Letra C**

Para descobrir o valor da mensalidade (preço por pessoa), precisamos saber o **TOTAL** de dinheiro que o dono precisa arrecadar e dividir pelo número de clientes (120).

**Passo 1: Calcular o novo valor do Seguro**
O seguro era R$ 36,00 e aumentou 20%.
20% de 36 = 7,20.
Novo Seguro = 36 + 7,20 = **R$ 43,20 por carro**.

**Passo 2: Calcular as Despesas Totais**
* Manutenção Fixa: R$ 14.240,00
* Seguro Total (120 carros x R$ 43,20): R$ 5.184,00
* **Despesa Total:** 14.240 + 5.184 = **R$ 19.424,00**.

**Passo 3: Adicionar o Lucro Desejado**
O dono quer pagar as contas (19.424) E AINDA sobrar R$ 10.000 no bolso.
Receita Necessária = 19.424 + 10.000 = **R$ 29.424,00**.

**Passo 4: Dividir pelos Clientes**
Agora dividimos o montante total pelos 120 clientes.
Mensalidade = 29.424 ÷ 120

*Conta:*
29.424 ÷ 120 = **245,20**

**Resultado:** R$ 245,20.`,
      },
      {
        id: "q167",
        code: "Q.167",
        topic: "Interpretação de Gráficos",
        xp: 150,
        image: "/q167.png",
        question: `Uma pessoa tem um carro bicombustível, que funciona a gás natural veicular (GNV) e a gasolina. O rendimento do carro depende da velocidade em que o carro trafega, conforme os gráficos.

Durante um feriado, essa pessoa realizou uma viagem de 240 km. Para obter uma estimativa de gasto de combustível, assuma que em todo o trajeto se manteve uma velocidade constante de 60 km/h.

Considere que, durante metade do caminho, foi utilizado apenas GNV e, na outra metade, apenas gasolina. O preço do metro cúbico de GNV é R$ 2,00 e o do litro de gasolina é R$ 3,00.

Qual foi a diferença, em real, entre os gastos totais com gasolina e com GNV?

A) 4
B) 8
C) 14
D) 21
E) 30`,
        explanation: `✅ **Gabarito: Letra D**

Vamos dividir o problema em passos. A viagem total é de 240 km, sendo metade (120 km) com cada combustível.

**Passo 1: Ler os gráficos na velocidade de 60 km/h**
* **GNV (Gráfico da Esquerda):** Olhando no eixo X em 60, a linha azul sobe até bater na marca de **10 km/m³**.
* **Gasolina (Gráfico da Direita):** Olhando no eixo X em 60, a linha azul sobe até bater na marca de **8 km/L**.

**Passo 2: Calcular o Gasto com GNV**
* Distância: 120 km.
* Rendimento: 10 km/m³.
* Volume necessário: 120 ÷ 10 = **12 m³**.
* Custo: 12 x R$ 2,00 = **R$ 24,00**.

**Passo 3: Calcular o Gasto com Gasolina**
* Distância: 120 km.
* Rendimento: 8 km/L.
* Volume necessário: 120 ÷ 8 = **15 Litros**.
* Custo: 15 x R$ 3,00 = **R$ 45,00**.

**Passo 4: A Diferença**
A questão pede a diferença entre os gastos:
45,00 (Gasolina) - 24,00 (GNV) = **R$ 21,00**.`,
      },
      {
        id: "q139",
        code: "Q.139",
        topic: "Geometria Circular",
        xp: 150,
        image: "/q139.png",
        question: `No entorno de uma lagoa circular, cujo raio mede 1 km, há uma ciclovia. Devido aos frequentes roubos de bicicleta, a prefeitura planeja alocar policiais em posições estratégicas para patrulhar essa ciclovia.

Um ponto da ciclovia é considerado protegido se houver pelo menos um policial a, no máximo, 200 m de distância daquele ponto.
Desconsidere a largura da pista da ciclovia e utilize 3 como aproximação para π (pi).

Nessas condições, a quantidade mínima necessária de policiais a serem alocados ao longo dessa ciclovia para torná-la protegida é:

A) 4.
B) 8.
C) 15.
D) 30.
E) 60.`,
        explanation: `✅ **Gabarito: Letra C**

Para resolver, precisamos de dois números: o **Tamanho Total da Ciclovia** e o **Tamanho que cada Policial cobre**.

1. **Calculando a Ciclovia (Circunferência):**
A fórmula é C = 2 x pi x R.
* Raio (R) = 1 km = **1.000 metros**.
* Pi = 3.

Conta:
C = 2 x 3 x 1.000 = **6.000 metros**.

2. **Calculando a Cobertura do Policial:**
O enunciado diz que o policial protege quem está a até 200 m de distância.
Isso significa que ele protege 200 m para a esquerda **E** 200 m para a direita.

Cobertura por Policial = 200 + 200 = **400 metros**.

3. **Quantos policiais precisamos?**
Basta dividir o total pela cobertura de cada um.
6.000 ÷ 400

*Cortando dois zeros:*
60 ÷ 4 = **15**.

Resposta: **15 Policiais**.`,
      },
      {
        id: "q170",
        code: "Q.170",
        topic: "Geometria Espacial / Volume",
        xp: 150,
        image: "/q170.png",
        question: `Uma caixa de descarga, acoplada a um vaso sanitário, tem a forma de paralelepípedo reto retângulo cujas dimensões internas da base são 2,5 dm e 1,5 dm. Nessa caixa há uma boia que interrompe o abastecimento quando a altura da coluna de água atinge 2 dm, conforme a figura.

A cada acionamento da descarga, todo o volume de água contida na caixa é despejado no vaso. Para reduzir o volume de água despejado a cada acionamento, uma pessoa colocará, no interior dessa caixa, garrafas de 300 mL, cheias de areia e tampadas, de modo a ficarem submersas quando o abastecimento for interrompido.

Para garantir o funcionamento eficiente, o mínimo de água despejada a cada acionamento deve ser de 5 L.

A quantidade máxima de garrafas que serão colocadas nessa caixa, garantindo um funcionamento eficiente, é igual a:

A) 10.
B) 8.
C) 4.
D) 3.
E) 2.`,
        explanation: `✅ **Gabarito: Letra B**

Vamos passo a passo organizar as unidades e os volumes.

**Passo 1: Calcular o Volume Total da Caixa**
A caixa é um paralelepípedo. O volume é: Comprimento x Largura x Altura.
V = 2,5 dm x 1,5 dm x 2 dm
V = 7,5 dm³

💡 **Conversão Mágica:**
Como 1 dm³ = 1 Litro, a caixa comporta **7,5 Litros** de água.

**Passo 2: Calcular o "Espaço para as Garrafas"**
A caixa tem 7,5 L, mas precisamos garantir que **5 L sejam de água pura**.
O espaço que sobra pode ser ocupado pelas garrafas.
Espaço Livre = 7,5 L (Total) - 5,0 L (Água necessária)
Espaço Livre = **2,5 Litros**.

**Passo 3: Quantas garrafas cabem nesse espaço?**
Cada garrafa tem **300 mL**.
Vamos converter 2,5 Litros para mL para facilitar a conta (x 1000):
2,5 L = **2.500 mL**.

Agora basta dividir:
Número de garrafas = 2.500 ÷ 300
Corta os zeros: 25 ÷ 3 = **8,33...**

Como não podemos colocar "0,33 de uma garrafa", o número máximo inteiro é **8 garrafas**.

Resposta: **8**.`,
      },
      {
        id: "q180",
        code: "Q.180",
        topic: "Lógica Algébrica",
        xp: 150,
        image: "/q180.png",
        question: `Quatro amigos, cada um com 100 moedas, criaram um jogo, no qual cada um assume uma das quatro posições, 1, 2, 3 ou 4, indicadas na figura, e nela permanece até o final.

O desenvolvimento do jogo se dá em rodadas e, em todas elas, cada jogador transfere e recebe uma quantidade de moedas, da seguinte maneira:
• o jogador na posição 1 transfere 1 moeda para o jogador na posição 2;
• o jogador na posição 2 transfere 2 moedas para o jogador na posição 3;
• o jogador na posição 3 transfere 3 moedas para o jogador na posição 4;
• o jogador na posição 4 transfere 4 moedas para o jogador na posição 1, completando a rodada.

Ao final da rodada n, qual é a expressão algébrica que representa o número de moedas do jogador na posição 1?

A) 103 + 4n
B) 103 + 3n
C) 100 + 4n
D) 100 + 3n
E) 99 + 4n`,
        explanation: `✅ **Gabarito: Letra D**

Vamos analisar apenas o "Bolso" do **Jogador 1**.

1. **Saldo Inicial:**
Ele começa com **100** moedas.

2. **O que acontece em CADA rodada (n)?**
* **Sai (Paga):** Ele transfere **1 moeda** para o jogador 2. (-1)
* **Entra (Recebe):** Ele recebe **4 moedas** do jogador 4. (+4)

3. **Saldo Líquido da Rodada:**
Lucro = Entra - Sai
Lucro = 4 - 1 = **+3 moedas por rodada**.

4. **Montando a Fórmula:**
Total = (Começo) + (Ganho por rodada x Número de rodadas)
Total = 100 + 3n.

**Resposta:** 100 + 3n.`,
      },
      {
        id: "q171",
        code: "Q.171",
        topic: "Geometria Espacial",
        xp: 150,
        question: `Um confeiteiro passou a produzir tortas em formato de cilindro circular reto, com raio da base variando entre 12 cm e 16 cm e altura de 6 cm. Essas tortas deverão ser embaladas em caixas com formato de prisma reto de base quadrada, de modo que seja possível acomodar a torta em seu interior e ainda restar pelo menos 1 cm de distância entre a torta e as superfícies internas da caixa, lateral e superior.

Ele dispõe, originalmente, de caixas no formato pretendido, cujas dimensões internas são 14 cm de comprimento do lado da base e 7 cm de altura, que não atendem às suas necessidades. Portanto, ele comprará novas caixas, com o mesmo formato das caixas originais, mas com comprimento do lado da base maior, que sejam adequadas para embalar todos os tipos de torta que produz.

A aresta da base das novas caixas deve ser, no mínimo, quantos centímetros maior do que a das caixas originais?

A) 4
B) 12
C) 16
D) 18
E) 20`,
        explanation: `✅ **Gabarito: Letra E**

Para resolver, precisamos dimensionar a caixa para caber a **MAIOR** torta possível.

1. **Dimensões da Maior Torta:**
* Raio máximo = 16 cm.
* O que importa para a base da caixa é a **Largura Total (Diâmetro)**.
* Diâmetro = 2 x 16 = **32 cm**.

2. **Calculando a Folga (O Pulo do Gato):**
A questão pede 1 cm de distância das paredes.
Imagine a torta no meio da caixa. Precisa sobrar 1 cm na esquerda **E** 1 cm na direita.
Tamanho necessário = Diâmetro + Folga Esquerda + Folga Direita
Tamanho necessário = 32 + 1 + 1 = **34 cm**.

3. **Comparando com a Caixa Antiga:**
* Caixa Nova (necessária): 34 cm de lado.
* Caixa Antiga (original): 14 cm de lado.

4. **A Diferença:**
A questão pergunta quantos centímetros a nova deve ser **maior**.
34 - 14 = **20 cm**.

Resposta: **20**.`,
      },
      {
        id: "q162",
        code: "Q.162",
        topic: "Matemática Financeira / Equações",
        xp: 150,
        question: `Uma empresa produziu, em um determinado mês, 110 toneladas de plástico a partir de derivados de petróleo e 80 toneladas a partir de plásticos reciclados.

O custo para reciclar uma tonelada de plástico é de R$ 500,00, que equivale a 5% do custo para produzir a mesma quantidade de plástico a partir de derivados de petróleo.

Para o mês seguinte, a meta dessa empresa é produzir a mesma quantidade de plástico que foi produzida nesse mês, mas com redução de, pelo menos, 50% no custo de produção.

Para que no mês seguinte a empresa atinja a meta, a quantidade mínima de toneladas de plástico que devem ser produzidas a partir de reciclagem deverá ser:

A) 135.
B) 140.
C) 155.
D) 160.
E) 175.`,
        explanation: `✅ **Gabarito: Letra B**

Vamos resolver passo a passo, descobrindo os preços e montando a equação do custo.

**Passo 1: Descobrir o preço do Plástico de Petróleo**
O enunciado diz que o Reciclado (R$ 500) é **5%** do preço do Petróleo.
* 500 = 0,05 . P
* P = 500 ÷ 0,05
* P = **10.000** (O plástico de petróleo custa R$ 10 mil a tonelada).

**Passo 2: Calcular o Custo Atual (Cenário Velho)**
* Petróleo: 110 ton x 10.000 = 1.100.000
* Reciclado: 80 ton x 500 = 40.000
* **Custo Total Atual:** R$ 1.140.000,00.
* **Produção Total:** 110 + 80 = **190 toneladas**.

**Passo 3: Definir a Meta (Cenário Novo)**
A meta é reduzir o custo em 50%.
* Meta de Custo = 1.140.000 ÷ 2 = **R$ 570.000,00**.
A produção total deve continuar sendo **190 toneladas**.

**Passo 4: Montar a Equação**
Vamos chamar de **x** a quantidade de plástico reciclado.
Logo, a quantidade de petróleo será **(190 - x)**.

500x + 10.000(190 - x) = 570.000

*Simplificando (cortando dois zeros de tudo para facilitar):*
5x + 100(190 - x) = 5.700
5x + 19.000 - 100x = 5.700
-95x = 5.700 - 19.000
-95x = -13.300  *(multiplica por -1)*
95x = 13.300
x = 13.300 ÷ 95
x = **140**

Resposta: **140 toneladas** de plástico reciclado.`,
      },
      {
        id: "q174",
        code: "Q.174",
        topic: "Equações / Matemática Financeira",
        xp: 150,
        question: `Um carro que custa 60 mil reais é comercializado por uma revendedora que oferece duas opções de pagamento, todas sem entrada e sem juros:

• opção 1: pagamento em n parcelas iguais;
• opção 2: pagamento em 6 parcelas a mais do que na opção 1 e, com isso, o valor de cada parcela se torna R$ 500,00 menor do que o valor da parcela na opção 1.

Nas duas opções de pagamento, o valor total a ser pago pelo carro é o mesmo.

Qual é a quantidade n de parcelas contidas na opção 1 de pagamento?

A) 18
B) 24
C) 30
D) 42
E) 48`,
        explanation: `✅ **Gabarito: Letra B**

Você pode resolver montando uma equação gigante, ou pode usar a **Técnica da Tentativa Inteligente** (que é muito mais rápida).

O valor total é **R$ 60.000,00**.
Precisamos achar um número "n" (Opção 1) e um número "n+6" (Opção 2) que dividam 60.000 e a diferença das parcelas seja 500.

**Vamos testar a Letra B (24 parcelas):**

1. **Cenário 1 (n = 24):**
60.000 ÷ 24 = **R$ 2.500,00** por parcela.

2. **Cenário 2 (n + 6 parcelas):**
Se n=24, então n+6 = **30 parcelas**.
60.000 ÷ 30 = **R$ 2.000,00** por parcela.

3. **A Prova Real:**
A diferença entre as parcelas foi de 500 reais?
2.500 - 2.000 = **500**.
Sim! Bateu exatamente com o enunciado.

Resposta: **24 parcelas**.

---
*Se fosse fazer pela álgebra:*
(60000/n) - 500 = 60000/(n+6)
Isso daria uma equação de 2º grau: n² + 6n - 720 = 0.
Resolvendo Bhaskara, você acharia n = 24.`,
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
    if (xp > 2500) return "Mestra Foca";
    if (xp > 1000) return "Foca caçadora";
    return "Foca novata";
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
        <h1>🦭Foca no ENEM 2025🦭</h1>
        <p className="subtitle">
          Prova de Matemática, 📘Caderno Azul📘. Ajude a 🦭foca🦭 a resolvê-la.
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
