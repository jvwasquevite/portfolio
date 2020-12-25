import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import ufpel from '../assets/images/resume/ufpel.png'
import hut8 from '../assets/images/resume/hut8.png'

const resources = {
  pt: {
    translation: {
      head: {
        subheader: 'Sobre mim',
        header: `Prazer, sou o <b>João</b>.`,
        content: `Graduando em Ciência da Computação pela
        <a href="https://portal.ufpel.edu.br/" target="_blank" rel="noreferrer">
        Universidade Federal de Pelotas</a>, atuo como desenvolvedor freelancer
        e diretor presidente na <a href="http://hut8.com.br/" target="_blank" rel="noreferrer">
        Hut8</a>. Sou apaixonado por tudo relacionado a inovação tecnológica,
        empreendedorismo e processos criativos: desde o design até a
        programação.`,
        menu: [
          { path: 'Resume', name: 'Resumo' },
          { path: 'Skills', name: 'Skills' },
          { path: 'Portfolio', name: 'Portfólio' },
          { path: 'Articles', name: 'Artigos' },
          { path: 'Contact', name: 'Contato' },
        ],
      },
      resume: {
        main: [
          {
            subheader: 'Formação acadêmica',
            header: 'Universidade Federal de Pelotas',
            description: 'Graduando em Ciência da Computação',
            secondarytext: '2019 – <b>Em progresso</b>',
            image: `${ufpel}`,
          },
          {
            subheader: 'Experiência',
            header: 'Empresa Júnior Hut8',
            description: 'Presidente e Desenvolvedor Frontend',
            secondarytext: '<b>Anterior:</b> Diretor de Projetos',
            image: `${hut8}`,
          },
        ],
        secondary: [
          {
            subheader: 'Certificado',
            header: 'Cambridge English Certificate',
            secondarytext: 'Cambridge Assessment English',
          },
          {
            subheader: 'Experiência',
            header: 'Desenvolvimento web',
            secondarytext: 'Freelancer',
          },
        ],
        button: 'Ver no LinkedIn',
      },
      skills: [
        {
          subheader: 'Fullstack',
          header: 'Node, React e Vue.js',
          secondarytext: 'Intermediário a avançado',
          level: '80%',
        },
        {
          subheader: 'Data Science',
          header: 'Python Pandas',
          secondarytext: 'Intermediário',
          level: '50%',
        },
        {
          subheader: 'Design UI/UX',
          header: 'Figma e Adobe XD',
          secondarytext: 'Intermediário a avançado',
          level: '70%',
        },
        {
          subheader: 'Gestão empresarial',
          header: 'Modelagem e metodologias ágeis',
          secondarytext: 'Avançado',
          level: '90%',
        },
      ],
    },
  },
  en: {
    translation: {
      head: {
        subheader: 'About me',
        header: `What's up? I'm <b>João</b>.`,
        content: `Graduating in Computer Science at
        <a href="https://portal.ufpel.edu.br/" target="_blank" rel="noreferrer">
        Federal University of Pelotas</a>, I work as a freelance developer and president at
        <a href="http://hut8.com.br/" target="_blank" rel="noreferrer">
        Hut8</a>. I'm passionate about everything related to technological innovation, 
        entrepreneurship and creative processes: from design to programming.`,
        menu: [
          { path: 'Resume', name: 'Resume' },
          { path: 'Skills', name: 'Skills' },
          { path: 'Portfolio', name: 'Portfolio' },
          { path: 'Articles', name: 'Articles' },
          { path: 'Contact', name: 'Contact' },
        ],
      },
      resume: {
        main: [
          {
            subheader: 'Academic Background',
            header: 'Federal University of Pelotas',
            description: 'Graduating in Computer Science',
            secondarytext: '2019 – <b>In progress</b>',
            image: `${ufpel}`,
          },
          {
            subheader: 'Experience',
            header: 'Hut8 Junior Enterprise',
            description: 'President and Frontend Developer',
            secondarytext: '<b>Previous:</b> Project Director',
            image: `${hut8}`,
          },
        ],
        secondary: [
          {
            subheader: 'Certified',
            header: 'Cambridge English Certificate',
            secondarytext: 'Cambridge Assessment English',
          },
          {
            subheader: 'Experience',
            header: 'Web development',
            secondarytext: 'Freelancer',
          },
        ],
        button: 'See on LinkedIn',
      },
    },
  },
}

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18next
