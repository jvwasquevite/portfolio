import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

// Resume images
import ufpel from "../assets/images/resume/ufpel.webp"
import hut8 from "../assets/images/resume/hut8.webp"

const resources = {
  pt: {
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
  },

  en: {
    translation: {
      head: {
        subheader: "About me",
        header: `What's up? I'm <b>João</b>.`,
        content: `<mark>Computer Scientist Bachelor</mark> at Federal University of Pelotas. 
        <mark>Fullstack developer</mark> studying <mark>software engineering</mark> in free time. 
        Passionate about data science, technological innovation, entrepreneurship and 
        creative processes: from design to programming.`,
        menu: [
          { path: "Resume", name: "Resume" },
          { path: "Skills", name: "Skills" },
          { path: "Portfolio", name: "Portfolio" },
          { path: "Projects", name: "Projects" },
          { path: "Articles", name: "Articles" },
          { path: "Contact", name: "Contact" },
        ],
      },
      resume: {
        main: [
          {
            subheader: "Academic Background",
            header: "Federal University of Pelotas",
            description: "Graduation in Computer Science",
            secondarytext: "Software engineering and architecture",
            image: `${ufpel}`,
          },
          {
            subheader: "Experience",
            header: "Hut8 Junior Enterprise",
            description: "Fullstack web developer",
            secondarytext: "President and Project Diretor",
            image: `${hut8}`,
          },
        ],
        secondary: [
          {
            subheader: "Experience",
            header: "Software engineer",
            secondarytext: "Architecture and scalability",
          },
          {
            subheader: "Certified",
            header: "Cambridge English Certificate",
            secondarytext: "Cambridge Assessment English",
          },
        ],
        button: "More on LinkedIn",
      },
      skills: {
        content: [
          {
            subheader: "Frontend",
            header: "React and Vue.js + TypeScript",
            secondarytext: "Intermediate to advanced",
            level: "80%",
          },
          {
            subheader: "Backend",
            header: "Node.js + TypeScript",
            secondarytext: "Intermediate to advanced",
            level: "90%",
          },
          {
            subheader: "Software engineering",
            header: "Software Architect, Product Manager e Scrum Master",
            secondarytext: "Advanced",
            level: "98%",
          },
          {
            subheader: "UI/UX Design",
            header: "UX Designer with Figma",
            secondarytext: "Intermediate to advanced",
            level: "70%",
          },
        ],
        other: `<b>Other skills:</b> IA and Machine Learning with Python, Landing Pages with Wordpress, Inbound Marketing, Copywriting e SEO.`,
      },
      portfolio: {
        button: {
          name: "More on Behance",
          url: "https://www.behance.net/jvwasquevite",
        },
      },
      projects: {
        integration: `Integrated with <a href="https://docs.github.com/en/rest" target="_blank" rel="noreferrer">GitHub API</a>`,
        button: {
          name: "More on GitHub",
          url: "https://github.com/jvwasquevite",
        },
      },
      articles: {
        integration: `Integrated with <a href="https://github.com/Medium/medium-api-docs" target="_blank" rel="noreferrer">Medium API</a>`,
        button: {
          name: "More on Medium",
          url: "https://medium.com/@jvwasquevite",
        },
      },
      contact: {
        subheader: "Talk to me",
        header: `Let's <b>talk</b>?`,
        content: [
          {
            subheader: "My WhatsApp",
            header: "+55 51 9 9527 0276",
          },
          {
            subheader: "My Email",
            header: "jvwasquevite@gmail.com",
          },
          {
            subheader: "Somewhere between",
            header: "Alegrete and Pelotas/RS",
          },
        ],
        button: { name: "View resume in PDF", url: "/curriculo.pdf" },
      },
      foot: {
        text: `Made with <a href="https://pt-br.reactjs.org/" target="_blank" rel="noreferrer">React</a>, lots of coffee and patience.`,
        links: [
          {
            name: "View source code on GitHub",
            url: "https://github.com/jvwasquevite/portfolio",
          },
          {
            name: "See layout on Figma",
            url: "https://www.figma.com/file/pMUBIGLHYHFXXrlWafPH3v/jvwasquevite",
          },
        ],
      },
    },
  },
}

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
  })

export default i18next
