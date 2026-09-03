import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type HeroKey = "a1" | "a2" | "a3";

type HeroContent = {
  headline: string;
  subheadline: string;
  cta: string;
};

const CHECKOUT_URL = "";

const heroContent: Record<HeroKey, HeroContent> = {
  a1: {
    headline:
      "Se você trabalha muito e mesmo assim o dinheiro não sobra: em 3 horas, num sábado de manhã, você vai mapear a engrenagem que te devolve no mesmo ponto todo ano, e sair com o primeiro movimento definido.",
    subheadline:
      "Workshop Raio-X do Ciclo Financeiro. Ao vivo, pelo Zoom, com o método Engrenagem da Repetição e um material na sua mão pra fazer o diagnóstico durante a aula. Com Cezar Linzmeyer, que estuda psicanálise e comportamento aplicados à vida financeira.",
    cta: "Quero entender meu ciclo financeiro",
  },
  a2: {
    headline:
      "Se você tem entre 35 e 45 e trabalha por conta: em 3 horas você aplica uma estrutura de 6 etapas sobre uma situação real da sua vida financeira, e sai com um padrão identificado e um comportamento definido pra observar.",
    subheadline:
      "Workshop Raio-X do Ciclo Financeiro. Programa em 5 blocos, material de diagnóstico incluso, replay por 3 dias. Método Engrenagem da Repetição, construído a partir de psicanálise, tipologia junguiana e análise de perfil comportamental.",
    cta: "Ver o programa completo e garantir a vaga",
  },
  a3: {
    headline:
      "Coisas sobre dinheiro que talvez ninguém lá em casa tenha tido como te ensinar: em 3 horas, num sábado de manhã, você separa o que veio da sua origem do que é decisão sua hoje.",
    subheadline:
      "Workshop Raio-X do Ciclo Financeiro. Ao vivo pelo Zoom, com o método Engrenagem da Repetição. Sua origem explica parte da sua trajetória. Ela não precisa determinar o seu destino. Com Cezar Linzmeyer.",
    cta: "Quero separar origem de destino",
  },
};

const transformation = [
  'Você sai de "eu não sei por que continuo assim" para "agora eu consigo ver onde eu começo a repetir".',
  "Você sai de tentar resolver com mais esforço para saber qual comportamento específico observar primeiro.",
  "Você sai de achar que falta disciplina para entender por que disciplina sozinha nunca sustentou.",
  "Você sai de mais um ano igual para um primeiro movimento definido, com data e tamanho.",
];

const discoveries = [
  "Por que saber o que fazer com dinheiro e conseguir fazer são duas capacidades diferentes, e o que separa uma da outra.",
  "Como uma decisão financeira que parece isolada é, quase sempre, a mesma decisão repetida em situações diferentes.",
  "A sequência exata que faz o seu dinheiro percorrer sempre o mesmo caminho: situação, interpretação, emoção, decisão, resultado e repetição.",
  "Como identificar, numa situação real da sua vida, qual peça dessa sequência trava a sua.",
  "Qual é o primeiro comportamento que precisa mudar, e por que não são todos ao mesmo tempo.",
];

const detailedDiscoveries = [
  {
    title: "A diferença entre saber e conseguir fazer.",
    text: "Você vai entender por que informação financeira, sozinha, não vira comportamento, e por que quase metade das pessoas que compram um curso a distância no Brasil larga antes de terminar. Não é sobre o conteúdo. É sobre o que acontece entre entender e executar.",
  },
  {
    title: "Como um ciclo se monta.",
    text: "História de vida, ambiente, experiências e crenças participam da formação de decisões que hoje parecem automáticas. Sem afirmar que toda dificuldade financeira vem da mente, porque isso não é verdade.",
  },
  {
    title: "O ciclo financeiro, peça por peça.",
    text: "Situação, interpretação, emoção, comportamento, consequência e repetição. Você vai aprender a identificar essa sequência do jeito que ela aparece na sua vida, não em exemplo genérico.",
  },
  {
    title: "O seu Raio-X pessoal.",
    text: "Com o material na mão, você escolhe uma situação real que se repete e mapeia o que costuma acontecer, o que você sente, o que pensa, como reage e qual resultado aquilo gera.",
  },
  {
    title: "O primeiro movimento.",
    text: "Você escolhe um comportamento específico para observar e começar a mudar nos próximos dias. Um. Não uma lista de quinze.",
  },
];

const principles = [
  {
    title: "Você não precisa reprogramar quem você é",
    text: "O mercado inteiro repete que, pra mudar sua vida financeira, você precisa reprogramar suas crenças. Isso transforma o problema em algo grande demais e vago demais pra ser trabalhado. Você não precisa reprogramar nada. Precisa ver a engrenagem que você repete.",
  },
  {
    title: "Disciplina é resultado, não ponto de partida",
    text: "Se disciplina fosse o começo, ninguém precisaria de método. Disciplina aparece depois que a pessoa entende o que está fazendo e por quê. Cobrar disciplina de quem ainda não enxerga o próprio padrão é cobrar o fim antes do início.",
  },
  {
    title: "Nem todo problema financeiro é emocional",
    text: "Mercado existe. Preço existe. Renda existe. Oportunidade existe. Quem promete que tudo se resolve na mente está te vendendo simplificação. O que este trabalho faz é não ignorar o seu comportamento dentro dessas condições reais.",
  },
  {
    title: "Esperar a condição ideal faz parte do ciclo",
    text: "Começar quando sobrar dinheiro, quando tiver mais tempo, quando aparecer a oportunidade certa. Se essas frases já se repetiram por alguns anos, elas não são o plano. Elas são uma das peças da engrenagem.",
  },
];

const schedule = [
  {
    time: "aprox. 25 min",
    title: "Por que saber não é fazer",
    text: "Por que uma pessoa com conhecimento, habilidade e capacidade profissional continua repetindo comportamentos que dificultam o crescimento dela. Aqui entra o dado, não a motivação.",
  },
  {
    time: "aprox. 30 min",
    title: "Como um ciclo é construído",
    text: "De que forma história de vida, ambiente, experiências, crenças e emoções participam das decisões de hoje. Explicado de forma simples, sem exigir que você entenda nada de psicanálise.",
  },
  {
    time: "aprox. 30 min",
    title: "O ciclo financeiro",
    text: "A sequência que organiza o método: situação, pensamento e interpretação, emoção, comportamento, consequência, repetição. Você aprende a identificar cada peça.",
  },
  {
    time: "aprox. 60 min",
    title: "O seu Raio-X pessoal",
    text: "A parte mais longa e a mais importante. Você escolhe uma situação real e recorrente da sua vida financeira e preenche o mapa: o que costuma acontecer, o que você sente, o que pensa, como reage, que resultado aquilo gera e como esse resultado alimenta o ciclo de novo.",
  },
  {
    time: "aprox. 25 min",
    title: "O primeiro movimento",
    text: "Você escolhe um comportamento específico para observar e começar a mudar. Sai da aula com esse ponto definido, e não com uma lista de intenções.",
  },
];

const audiences = [
  "Autônomo ou prestador de serviço que trabalha muito, entrega bem, e mesmo assim vê a vida financeira parada no mesmo nível há anos.",
  "Quem já comprou curso, baixou planilha, fez meta em janeiro, e em algum momento parou. E não sabe explicar por quê.",
  "Quem tem medo de investir ou de arriscar e perder o pouco que já construiu, e por isso adia decisões importantes.",
  "Quem cobra menos do que gostaria, aceita quase todo trabalho e nunca consegue estruturar o próprio negócio porque vive apagando incêndio.",
  'Quem olha para trás e pensa "eu deveria estar melhor nessa altura", e não fala isso para ninguém.',
];

const faqs = [
  {
    question: "Isso é terapia?",
    answer:
      "Não. É um workshop de desenvolvimento humano aplicado ao comportamento financeiro. Não há atendimento clínico, não há diagnóstico e não há tratamento.",
  },
  {
    question: "Vou precisar expor minha vida pessoal na aula?",
    answer:
      "Não. Você participa até o limite em que se sentir confortável. O exercício é seu e fica com você. Falar é opcional.",
  },
  {
    question: "Eu já fiz curso e treinamento antes. O que muda aqui?",
    answer:
      "Aqui você não recebe mais informação. Você aplica uma estrutura sobre uma situação real da sua vida e sai com um diagnóstico. A diferença não é o conteúdo, é o que você faz com ele durante as 3 horas.",
  },
  {
    question: "Em 3 horas dá pra ter resultado de verdade?",
    answer:
      "Dá pra ter o resultado que está prometido: identificar pelo menos um padrão que se repete e sair sabendo por onde começar. Não é uma promessa de resolver a vida financeira inteira numa manhã, e ninguém aqui vai dizer que é.",
  },
  {
    question: "E se o meu problema for realmente falta de dinheiro, e não emocional?",
    answer:
      "Pode ser. O workshop não parte da ideia de que todo problema financeiro nasce na emoção. Mercado, renda, preço e oportunidade influenciam de verdade. A proposta é entender se, dentro dessas condições, existem padrões de decisão agravando a sua situação.",
  },
  {
    question: "Preciso entender de psicanálise pra acompanhar?",
    answer:
      "Não. Tudo é explicado de forma simples e prática. Você não precisa concordar com nenhuma teoria pra fazer o exercício.",
  },
  {
    question: "E se eu não puder assistir ao vivo?",
    answer:
      "O replay fica disponível por 3 dias. Mas a terceira hora é de aplicação com acompanhamento, então o ao vivo rende muito mais.",
  },
  {
    question: "Se eu comprar e não gostar, consigo reembolso?",
    answer: "Sim. Sete dias, sem justificativa. Você pede e recebe de volta.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4 10 4 4 8-9" />
    </svg>
  );
}

function GuaranteeSeal() {
  return (
    <div className="guarantee-seal" aria-label="Garantia de 7 dias">
      <span className="guarantee-seal__label">Garantia</span>
      <strong className="guarantee-seal__number">7</strong>
      <span className="guarantee-seal__unit">dias</span>
    </div>
  );
}

function CTA({ children, className = "" }: { children: ReactNode; className?: string }) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!CHECKOUT_URL) {
      event.preventDefault();
      document.querySelector("#oferta")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      className={`cta ${className}`}
      href={CHECKOUT_URL || "#oferta"}
      onClick={handleClick}
      data-checkout-status={CHECKOUT_URL ? "ready" : "pending"}
    >
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function SectionTitle({ eyebrow, children }: { eyebrow?: string; children: ReactNode }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{children}</h2>
    </div>
  );
}

function Hero({ content }: { content: HeroContent }) {
  return (
    <header className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <nav className="nav container" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="Raio-X do Ciclo Financeiro">
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span>Raio-X do Ciclo Financeiro</span>
        </a>
        <a className="nav-link" href="#programa">
          O QUE ACONTECE DURANTE AS 3 HORAS
        </a>
      </nav>

      <div className="hero-grid container" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">Workshop Raio-X do Ciclo Financeiro</p>
          <h1>{content.headline}</h1>
          <p className="hero-subheadline">{content.subheadline}</p>
          <p className="support-line">Sem promessa de renda. Sem fórmula. Sem palco.</p>
          <CTA>{content.cta}</CTA>
          <div className="hero-trust" aria-label="Informações do workshop">
            <span>3 horas ao vivo, no sábado de manhã</span>
            <span>Material de diagnóstico incluso</span>
            <span>Replay por 3 dias</span>
            <span>7 dias de garantia, sem justificativa</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="portrait-shell">
            <img
              src="/cezar-hero.png"
              alt="Cezar Linzmeyer em retrato profissional"
              width="1106"
              height="1382"
              fetchPriority="high"
            />
          </div>
          <div className="image-note">
            <span>Engrenagem da Repetição</span>
            <strong>Sem promessa de renda. Sem fórmula. Sem palco.</strong>
          </div>
        </div>
      </div>
    </header>
  );
}

function SalesPage({ variant }: { variant: HeroKey }) {
  return (
    <main>
      <Hero content={heroContent[variant]} />

      <section className="section paper transformation-section">
        <div className="container">
          <SectionTitle>QUAL A TRANSFORMAÇÃO</SectionTitle>
          <div className="transformation-grid">
            {transformation.map((item, index) => (
              <article className="transformation-card" key={item}>
                <span className="card-number">0{index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ink discovery-section">
        <div className="container">
          <SectionTitle>O QUE VOCÊ VAI DESCOBRIR</SectionTitle>
        </div>
        <div className="container discovery-list">
          {discoveries.map((item, index) => (
            <div className="discovery-item" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section paper lots-section" id="oferta">
        <div className="container lots-grid">
          <div>
            <SectionTitle>LOTES</SectionTitle>
            <p className="lots-rule">
              A sala ao vivo tem limite de participantes porque a terceira hora é de aplicação individual, com o Cezar comentando casos. Quando enchia, o lote virava. Não é contagem regressiva de enfeite.
            </p>
            <CTA>Garantir minha vaga no lote atual</CTA>
          </div>
          <div className="price-stack" aria-label="Lotes do workshop">
            <article className="price-card current">
              <div>
                <span>Lote 1</span>
                <small>enquanto durar o primeiro lote</small>
              </div>
              <strong>R$29,90</strong>
            </article>
            <article className="price-card">
              <div>
                <span>Lote 2</span>
                <small>a partir do preenchimento do primeiro lote</small>
              </div>
              <strong>R$39,90</strong>
            </article>
            <article className="price-card">
              <div>
                <span>Lote 3</span>
                <small>últimas vagas da sala</small>
              </div>
              <strong>R$59,90</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="section warm authority-section">
        <div className="container authority-grid">
          <div className="authority-image">
            <img
              src="/cezar-autoridade.png"
              alt="Cezar Linzmeyer em seu ambiente de estudo"
              width="1452"
              height="1086"
              loading="lazy"
            />
          </div>
          <div className="authority-copy">
            <SectionTitle>APRESENTAMOS CEZAR LINZMEYER</SectionTitle>
            <p>
              Cezar Linzmeyer estuda psicanálise, comportamento e desenvolvimento humano há cerca de quatro anos, aplicados a uma pergunta específica: por que uma pessoa que sabe o que precisa fazer com dinheiro continua não fazendo. Ele não chegou nesse tema pela teoria. Chegou porque viveu anos decidindo a partir do medo de faltar, e só percebeu isso quando o filho pediu um espetinho de cinco reais e o peso daquilo não tinha nada a ver com cinco reais. A partir daí ele parou de olhar quanto entrava e começou a olhar que caminho o dinheiro fazia dentro da cabeça dele antes de sair. O método que ele ensina hoje nasceu desse percurso, e foi organizado com base em psicanálise, na teoria dos tipos psicológicos e em ferramentas de análise de perfil comportamental.
            </p>
          </div>
        </div>
      </section>

      <section className="section paper expanded-section">
        <div className="container narrow">
          <SectionTitle>A TRANSFORMAÇÃO, EXPANDIDA</SectionTitle>
          <div className="editorial-copy">
            <p>
              Existe uma diferença entre estar parado e estar dando voltas. Quem está parado sabe que está. Quem dá voltas trabalha o mês inteiro, resolve problema atrás de problema, chega em dezembro exausto e com a sensação estranha de não ter saído do lugar. E aí promete que ano que vem vai ser diferente.
            </p>
            <p>
              No ano seguinte, a promessa se repete quase com as mesmas palavras. Não porque a pessoa seja preguiçosa. Ela geralmente trabalha mais que muita gente em situação melhor. Mas porque existe uma sequência acontecendo por baixo das decisões dela, e essa sequência ninguém nunca mostrou.
            </p>
            <p className="accent-paragraph">
              O que muda no Raio-X não é a sua renda. É que você para de olhar só para o resultado e começa a ver o caminho que produz aquele resultado. E quando você vê o caminho, você consegue escolher onde interromper. Não em tudo. Em um ponto. O primeiro.
            </p>
          </div>
        </div>
      </section>

      <section className="section ink details-section">
        <div className="container">
          <SectionTitle>O QUE VOCÊ VAI DESCOBRIR, DETALHADO</SectionTitle>
          <div className="detail-grid">
            {detailedDiscoveries.map((item, index) => (
              <article className="detail-card" key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section paper principles-section">
        <div className="container">
          <SectionTitle>AS PRIMEIRAS COISAS QUE EU PRECISO QUE VOCÊ ENTENDA</SectionTitle>
          <div className="principle-list">
            {principles.map((item, index) => (
              <article className="principle" key={item.title}>
                <span>{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section copper format-section">
        <div className="container format-grid">
          <SectionTitle>O QUE É O WORKSHOP E COMO FUNCIONA</SectionTitle>
          <div className="format-copy">
            <p>
              O Raio-X do Ciclo Financeiro é um workshop ao vivo de aproximadamente 3 horas, pelo Zoom, num sábado de manhã. Não é aula gravada, não é imersão de quatro dias e não é terapia. É um encontro de trabalho, com conteúdo, exercício prático e um diagnóstico que você faz sobre a sua própria vida financeira, com um material impresso ou digital na mão.
            </p>
            <p>
              Você entra num grupo de WhatsApp alguns dias antes, recebe o material e as orientações, participa da aula ao vivo e tem replay por 3 dias caso aconteça algum imprevisto. A participação é aberta: você fala se quiser, e o quanto quiser. Ninguém é chamado para expor a vida pessoal.
            </p>
          </div>
        </div>
      </section>

      <section className="section paper schedule-section" id="programa">
        <div className="container">
          <SectionTitle>O QUE ACONTECE DURANTE AS 3 HORAS</SectionTitle>
          <div className="timeline">
            {schedule.map((item, index) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="timeline-content">
                  <span>{item.time}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
            <article className="timeline-item closing">
              <div className="timeline-index">+</div>
              <div className="timeline-content">
                <h3>Encerramento</h3>
                <p>Espaço de perguntas e orientação sobre como usar o material nos dias seguintes.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section statistic-section">
        <div className="container statistic-grid">
          <div className="stat-number" aria-label="Quarenta e dois por cento">42%</div>
          <div>
            <SectionTitle>AINDA NÃO ENTENDEU POR QUE ISSO É ESSENCIAL?</SectionTitle>
            <div className="editorial-copy compact">
              <p>
                A Serasa acompanhou dez anos de inadimplência no Brasil. Quarenta e dois por cento das pessoas negativadas hoje já estavam negativadas dez anos atrás. São trinta e quatro milhões de pessoas dando a mesma volta por uma década inteira.
              </p>
              <p>
                Esses trinta e quatro milhões não são gente sem caráter, sem esforço ou sem inteligência. É gente que nunca teve como enxergar a própria engrenagem, porque ninguém mostra.
              </p>
              <p>
                E o custo maior disso nem sempre é financeiro. O maior custo do ciclo costuma ser o tempo que a pessoa passa sem perceber que existiam outros caminhos. Esse custo não aparece em extrato nenhum.
              </p>
              <p className="stat-close">Três horas de um sábado. É esse o tamanho do que estamos falando aqui.</p>
              <CTA>Quero fazer meu Raio-X</CTA>
            </div>
          </div>
        </div>
      </section>

      <section className="section paper audience-section">
        <div className="container">
          <SectionTitle>PRA QUEM FAZ SENTIDO</SectionTitle>
          <div className="audience-grid">
            {audiences.map((item) => (
              <article className="audience-card" key={item}>
                <CheckIcon />
                <p>{item}</p>
              </article>
            ))}
          </div>
          <div className="not-for">
            <p className="eyebrow">Pra quem NÃO é</p>
            <p>
              Não é para quem procura fórmula rápida de enriquecer, promessa de dinheiro fácil, ou alguém que diga exatamente o que fazer sem exigir nenhuma participação sua. E não é para quem não está disposto a olhar para os próprios comportamentos.
            </p>
          </div>
        </div>
      </section>

      <section className="section ink difference-section">
        <div className="container difference-grid">
          <SectionTitle>O DIFERENCIAL</SectionTitle>
          <div className="editorial-copy compact">
            <p>
              A maior parte do mercado que fala de dinheiro e comportamento faz duas coisas: ou ensina o que fazer com o dinheiro, ou promete reprogramar suas crenças num evento de vários dias.
            </p>
            <p>
              Aqui é diferente em três pontos. Primeiro, o trabalho começa entendendo por que você continua fazendo o que já sabe que não deveria, e não listando o que você deveria fazer. Segundo, o processo é em grupo, mas a leitura é individual: cada pessoa trabalha uma situação da própria vida, com o próprio material. Terceiro, são 3 horas num sábado de manhã, pelo Zoom, sem palco, sem gritaria e sem catarse.
            </p>
            <p className="accent-paragraph dark-accent">
              E tem um quarto ponto que talvez seja o mais importante: aqui não existe promessa de renda, de prazo ou de prosperidade garantida. O que este workshop entrega é diagnóstico e o primeiro passo. É isso que ele promete e é isso que ele faz.
            </p>
          </div>
        </div>
      </section>

      <section className="section warm founder-section">
        <div className="container founder-grid">
          <div className="founder-label">
            <span className="founder-kicker">Primeira turma</span>
            <GuaranteeSeal />
          </div>
          <div>
            <SectionTitle>Não tem depoimento aqui. E eu vou te explicar por quê.</SectionTitle>
            <div className="editorial-copy compact">
              <p>
                Esta é a primeira turma do Raio-X do Ciclo Financeiro. Então eu não tenho uma parede de depoimentos pra te mostrar, e eu não vou inventar uma.
              </p>
              <p>
                O que eu tenho é isto. O problema está medido: a Serasa mostra que 42% dos negativados de hoje já estavam negativados há dez anos, e o Semesp mostra que 41,9% de quem compra curso a distância no Brasil abandona antes de terminar. O Sebrae mostra que 61% dos pequenos empreendedores pagam contas da empresa com a conta pessoal e metade tem controle financeiro precário ou nenhum. Não é falta de vontade coletiva. É uma engrenagem rodando na vida de muita gente ao mesmo tempo.
              </p>
              <p>
                E o que eu tenho de mais concreto é a minha própria trajetória. Eu cheguei na vida adulta preparado pra sobreviver dentro do mundo que eu conhecia, e não pra construir outro. Levei perto de quarenta anos pra perceber isso, e mudei a minha realidade financeira depois que percebi. Esse percurso é o que deu origem ao método.
              </p>
              <p>
                Se isso não for suficiente pra você, é justo. Tem a garantia de 7 dias, sem justificativa, exatamente pra que essa decisão não custe nada além de três horas do seu sábado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section paper faq-section">
        <div className="container faq-grid">
          <SectionTitle>DÚVIDAS FREQUENTES</SectionTitle>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <details className="faq-item" key={item.question} open={index === 0}>
                <summary>
                  <span>{item.question}</span>
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-offer" aria-labelledby="final-title">
        <div className="container final-card">
          <div>
            <p className="eyebrow">Workshop Raio-X do Ciclo Financeiro</p>
            <h2 id="final-title">Três horas de um sábado. É esse o tamanho do que estamos falando aqui.</h2>
            <div className="final-details">
              <span>Material de diagnóstico incluso</span>
              <span>Replay por 3 dias</span>
              <span>7 dias de garantia, sem justificativa</span>
            </div>
          </div>
          <div className="final-action">
            <span className="price-label">Lote 1</span>
            <strong>R$29,90</strong>
            <CTA>Garantir minha vaga no lote atual</CTA>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <nav className="nav container">
        <a className="brand" href="/a1" aria-label="Raio-X do Ciclo Financeiro">
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span>Raio-X do Ciclo Financeiro</span>
        </a>
      </nav>
      <section className="thank-you container">
        <div className="thank-you-copy">
          <p className="eyebrow">Inscrição recebida</p>
          <h1>Seu próximo movimento começa antes da aula.</h1>
          <p>
            Guarde a confirmação da compra. As informações de acesso, o material de diagnóstico e o convite para o grupo de WhatsApp serão enviados antes do encontro pelos canais informados na compra.
          </p>
          <div className="next-steps">
            <article>
              <span>01</span>
              <div>
                <h2>Confira a confirmação</h2>
                <p>Verifique os dados da sua inscrição no canal usado durante a compra.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h2>Aguarde as orientações</h2>
                <p>Você receberá o acesso, o material de diagnóstico e o convite para o grupo antes do workshop.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h2>Separe três horas</h2>
                <p>O encontro será ao vivo pelo Zoom, num sábado de manhã. A data e o horário serão confirmados pela equipe.</p>
              </div>
            </article>
          </div>
          <p className="safe-note">
            Se os dados operacionais ainda não aparecerem na sua confirmação, aguarde a comunicação oficial. Nenhum contato ou endereço adicional foi informado até o momento.
          </p>
        </div>
        <div className="thank-you-visual">
          <div className="thank-ring ring-a" aria-hidden="true" />
          <div className="thank-ring ring-b" aria-hidden="true" />
          <div className="check-seal">
            <CheckIcon />
          </div>
          <p>Um padrão identificado. Um primeiro movimento definido.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand footer-brand">
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span>Raio-X do Ciclo Financeiro</span>
        </div>
        <p>Cezar Linzmeyer</p>
        <a href="https://www.instagram.com/psicezarlinzmeyer/" target="_blank" rel="noreferrer">
          @psicezarlinzmeyer
        </a>
      </div>
    </footer>
  );
}

function App() {
  const route = window.location.pathname.split("/").filter(Boolean)[0] || "a1";

  if (route === "obrigado") {
    return <ThankYouPage />;
  }

  const variant: HeroKey = route === "a2" || route === "a3" ? route : "a1";
  return <SalesPage variant={variant} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
