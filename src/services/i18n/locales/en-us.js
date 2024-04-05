import ufpel from "../../../assets/images/resume/ufpel.webp"
import hut8 from "../../../assets/images/resume/hut8.webp"

const en = {
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
      integration: `Integrated with <a href="https://firebase.google.com/docs/firestore" target="_blank" rel="noreferrer">Cloud Firestore</a>`,
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
}

export default en
