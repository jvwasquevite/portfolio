import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

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
    },
  },
  en: {
    translation: {
      head: {
        subheader: 'About me',
        header: `What's up? I'm <b>João</b>.`,
        content: `Graduating in Computer Science at
        <a href="https://portal.ufpel.edu.br/" target="_blank" rel="noreferrer">
        Universidade Federal de Pelotas</a>, I work as a freelance developer and CEO at
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
