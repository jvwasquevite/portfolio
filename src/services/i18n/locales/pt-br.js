import ufpel from "../../../assets/images/resume/ufpel.webp"
import hut8 from "../../../assets/images/resume/hut8.webp"

const pt = {
  translation: {
    head: {
      subheader: "Sobre mim",
      header: `Prazer, sou o <b>João</b>.`,
      content: `<mark>Cientista da Computação</mark> pela Universidade Federal de Pelotas.
      <mark>Desenvolvedor fullstack</mark> estudando <mark>engenharia de software</mark> no tempo livre.
      Apaixonado por ciência de dados, inovação tecnológica, empreendedorismo e
      processos criativos: desde o design até a programação.`,
      menu: [
        { path: "Resume", name: "Resumo" },
        { path: "Skills", name: "Skills" },
        { path: "Portfolio", name: "Portfólio" },
        { path: "Projects", name: "Projetos" },
        { path: "Articles", name: "Artigos" },
        { path: "Contact", name: "Contato" },
      ],
    },
    resume: {
      main: [
        {
          subheader: "Formação acadêmica",
          header: "Universidade Federal de Pelotas",
          description: "Graduação em Ciência da Computação",
          secondarytext: "Engenharia e Arquitetura de Software",
          image: `${ufpel}`,
        },
        {
          subheader: "Experiência",
          header: "Empresa Júnior Hut8",
          description: "Desenvolvedor web fullstack",
          secondarytext: "Presidente e Diretor de Projetos",
          image: `${hut8}`,
        },
      ],
      secondary: [
        {
          subheader: "Experiência",
          header: "Engenheiro de Software",
          secondarytext: "Arquitetura e escabilidade",
        },
        {
          subheader: "Certificado",
          header: "Cambridge English Certificate",
          secondarytext: "Cambridge Assessment English",
        },
      ],
      button: "Mais no LinkedIn",
    },
    skills: {
      content: [
        {
          subheader: "Frontend",
          header: "React e Vue.js + TypeScript",
          secondarytext: "Intermediário a avançado",
          level: "80%",
        },
        {
          subheader: "Backend",
          header: "Node.js + TypeScript",
          secondarytext: "Intermediário a avançado",
          level: "90%",
        },
        {
          subheader: "Engenharia de Software",
          header: "Software Architect, Product Manager e Scrum Master",
          secondarytext: "Avançado",
          level: "98%",
        },
        {
          subheader: "Design UI/UX",
          header: "UX Designer com Figma",
          secondarytext: "Intermediário a avançado",
          level: "70%",
        },
      ],
      other: `<b>Outras habilidades:</b> IA e Machine Learning com Python, Landing Pages em Wordpress, Inbound Marketing,
      Copywriting e SEO.`,
    },
    portfolio: {
      integration: `Integrado com o <a href="https://firebase.google.com/docs/firestore" target="_blank" rel="noreferrer">Cloud Firestore</a>`,
      button: {
        name: "Mais no Behance",
        url: "https://www.behance.net/jvwasquevite",
      },
    },
    projects: {
      integration: `Integrado com a <a href="https://docs.github.com/pt/rest" target="_blank" rel="noreferrer">API do GitHub</a>`,
      button: {
        name: "Mais no Github",
        url: "https://github.com/jvwasquevite",
      },
    },
    articles: {
      integration: `Integrado com a <a href="https://github.com/Medium/medium-api-docs" target="_blank" rel="noreferrer">API do Medium</a>`,
      button: {
        name: "Mais no Medium",
        url: "https://medium.com/@jvwasquevite",
      },
    },
    contact: {
      subheader: "Fale comigo",
      header: `Vamos <b>conversar</b>?`,
      content: [
        {
          subheader: "Meu WhatsApp",
          header: "+55 51 9 9527 0276",
        },
        {
          subheader: "Meu Email",
          header: "jvwasquevite@gmail.com",
        },
        {
          subheader: "Em algum lugar entre",
          header: "Alegrete e Pelotas/RS",
        },
      ],
      button: { name: "Ver currículo em PDF", url: "/curriculo.pdf" },
    },
    foot: {
      text: `Feito com <a href="https://pt-br.reactjs.org/" target="_blank" rel="noreferrer">React</a>, muito café e paciência.`,
      links: [
        {
          name: "Ver código fonte no GitHub",
          url: "https://github.com/jvwasquevite/portfolio",
        },
        {
          name: "Ver layout no Figma",
          url: "https://www.figma.com/file/pMUBIGLHYHFXXrlWafPH3v/jvwasquevite",
        },
      ],
    },
  },
}

export default pt
