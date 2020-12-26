import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Resume
import ufpel from '../assets/images/resume/ufpel.png'
import hut8 from '../assets/images/resume/hut8.png'

// Portfolio
import hut8Desktop from '../assets/images/portfolio/hut8.png'
import hut8Mobile from '../assets/images/portfolio/hut8-mobile.png'
import vantumDesktop from '../assets/images/portfolio/vantum.png'
import vantumMobile from '../assets/images/portfolio/vantum-mobile.png'
import hubiaDesktop from '../assets/images/portfolio/hubia.png'
import hubiaMobile from '../assets/images/portfolio/hubia-mobile.png'
import hocDesktop from '../assets/images/portfolio/hoc.png'
import hocMobile from '../assets/images/portfolio/hoc-mobile.png'
import veritasDesktop from '../assets/images/portfolio/veritas.png'
import veritasMobile from '../assets/images/portfolio/veritas-mobile.png'
import leafpayDesktop from '../assets/images/portfolio/leafpay.png'
import leafpayMobile from '../assets/images/portfolio/leafpay-mobile.png'

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
        button: 'Mais no LinkedIn',
      },
      skills: {
        content: [
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
        other: `<b>Outras habilidades:</b> Wordpress/Landing Pages, Copywriting, SEO, 
        Inbound Marketing, Illustrator e Photoshop.`,
      },
      portfolio: {
        content: [
          {
            images: [`${hut8Desktop}`, `${hut8Mobile}`],
            subheader: 'React',
            header: 'Hut8',
            skills: ['Hooks', 'Sass', 'CSS Flexbox', 'CSS Grid'],
            description: `Redesign de site institucional para a Empresa Júnior da Computação 
            da Universidade Federal de Pelotas. Desenvolvido em <b>React</b>, o projeto é <b>integrado 
            com API</b> desenvolvida em Node.js, utiliza <b>recursos visuais animados em SVG</b> e 
            módulo de <b>integração com o WhatsApp</b>.`,
            button: ['Ver projeto', 'http://hut8.com.br/'],
          },
          {
            images: [`${vantumDesktop}`, `${vantumMobile}`],
            subheader: 'Vue',
            header: 'Vantum',
            skills: ['Bootstrap', 'Inbound Marketing', 'Copywriting'],
            description: `Redesign de site institucional para a Vantum. Desenvolvido em <b>Vue</b>, o
            projeto é <b>integrado com o </b><a href="https://br.hubspot.com/" target="_blank" rel="noreferrer">Hubspot</a>,
            utiliza <b>recursos visuais animados em SVG</b> e <b>módulo de chatbot</b> integrado com um funil de vendas.`,
            button: ['Ver projeto', 'https://vantum.com.br/'],
          },
          // {
          //   subheader: 'React',
          //   header: 'Painel administrativo Hut8',
          //   skills: ['Autenticação', 'Axios', 'Hooks', 'Context', 'Sass'],
          //   description: `Desenvolvimento de sistema administrativo para a Empresa Júnior da Computação
          // da Universidade Federal de Pelotas. Desenvolvido em <b>React</b>, o projeto permite gerir os
          // membros e os projetos da empresa em um <b>CRM próprio</b>, além da criação de um <b>painel administrativo
          // direcionado para os clientes</b>.`,
          //   button: null,
          // },
          {
            images: [`${hubiaDesktop}`, `${hubiaMobile}`],
            subheader: 'Wordpress',
            header: 'Hub de Inovação em Inteligência Artifical',
            skills: ['Wordpress', 'Blog'],
            description: `Implementação de layout criado no <a href="https://www.figma.com/" target="_blank" rel="noreferrer">Figma</a>. 
            O projeto foi desenvolvido para <b>divulgar o Hub de Inovação em Inteligência Artificial da Universidade Federal de Pelotas</b>,
            que tem como objetivo alavancar a área de Inteligência Artificial na região.`,
            button: ['Ver projeto', 'http://ia.ufpel.edu.br/'],
          },
          {
            images: [`${hocDesktop}`, `${hocMobile}`],
            subheader: 'Wordpress',
            header: 'Hospital Odontológico Cetao',
            skills: ['Wordpress', 'Inbound Marketing', 'Copywriting'],
            description: `Desenvolvimento de site institucional e landing pages focadas em <b>conversão de leads</b>
            para o Hospital Odontológico Cetao. Por meio da integração com o
            <a href="https://www.rdstation.com/" target="_blank" rel="noreferrer">RD Station</a>, os leads são
            encaminhados para um funil de vendas, permitindo mensurar as campanhas de marketing realizadas pela empresa.`,
            button: ['Ver projeto', 'https://hocetao.com.br/'],
          },
          {
            images: [`${veritasDesktop}`, `${veritasMobile}`],
            subheader: 'Wordpress',
            header: 'Veritas Jurídico',
            skills: ['Wordpress', 'Blog', 'Copywriting'],
            description: `Redesign de site institucional para a Veritas Jurídico. Desenvolvido em Wordpress, o 
            projeto conta com <b>blog integrado</b> e todas as <b>adequações legais necessárias</b> para o 
            cumprimento da nova Lei Geral de Proteção de Dados.`,
            button: ['Ver projeto', 'https://veritasjuridico.com/'],
          },
          {
            images: [`${leafpayDesktop}`, `${leafpayMobile}`],
            subheader: 'Wordpress',
            header: 'LeafPay',
            skills: ['Wordpress', 'Blog', 'Copywriting'],
            description: `Desenvolvimento de site institucional para a LeafPay, escritório contábil especializado 
            em gestão de folha de pagamento. Desenvolvido em Wordpress, o projeto conta com <b>blog integrado</b>, 
            vínculo com o WhatsApp e <b>ilustrações vetorizadas</b>.`,
            button: ['Ver projeto', 'https://leafpayrh.com.br/'],
          },
        ],
        button: `Mais no Behance`,
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
        button: 'More on LinkedIn',
      },
      skills: {
        content: [
          {
            subheader: 'Fullstack',
            header: 'Node, React e Vue.js',
            secondarytext: 'Intermediate to advanced',
            level: '80%',
          },
          {
            subheader: 'Data Science',
            header: 'Python Pandas',
            secondarytext: 'Intermediate',
            level: '50%',
          },
          {
            subheader: 'Design UI/UX',
            header: 'Figma e Adobe XD',
            secondarytext: 'Intermediate to advanced',
            level: '70%',
          },
          {
            subheader: 'Business management',
            header: 'Modeling and agile methodologies',
            secondarytext: 'Advanced',
            level: '90%',
          },
        ],
        other: `<b>Other skills:</b> Wordpress/Landing Pages, Copywriting, SEO, 
        Inbound Marketing, Illustrator e Photoshop.`,
      },
      portfolio: {
        content: [
          {
            images: [`${hut8Desktop}`, `${hut8Mobile}`],
            subheader: 'React',
            header: 'Hut8',
            skills: ['Hooks', 'Sass', 'CSS Flexbox', 'CSS Grid'],
            description: `Institutional website redesign for the Junior Computer Enterprise 
            of the Federal University of Pelotas. Developed with <b>React</b>, the project is <b>integrated 
            with an API</b> developed in Node.js, has <b>animated visual resources in SVG</b> and 
            <b>integration with WhatsApp</b> module.`,
            button: ['See project', 'http://hut8.com.br/'],
          },
          {
            images: [`${vantumDesktop}`, `${vantumMobile}`],
            subheader: 'Vue',
            header: 'Vantum',
            skills: ['Bootstrap', 'Inbound Marketing', 'Copywriting'],
            description: `Institutional website redesign for Vantum. Developed with <b>Vue</b>, the
            project is <b>integrated with</b> <a href="https://www.hubspot.com/" target="_blank" rel="noreferrer">Hubspot</a>,
            has <b>animated visuals resources in SVG</b> and <b>chatbot module</b> integrated with a sales funnel.`,
            button: ['See project', 'https://vantum.com.br/'],
          },
          // {
          //   subheader: 'React',
          //   header: 'Painel administrativo Hut8',
          //   skills: ['Autenticação', 'Axios', 'Hooks', 'Context', 'Sass'],
          //   description: `Desenvolvimento de sistema administrativo para a Empresa Júnior da Computação
          // da Universidade Federal de Pelotas. Desenvolvido em <b>React</b>, o projeto permite gerir os
          // membros e os projetos da empresa em um <b>CRM próprio</b>, além da criação de um <b>painel administrativo
          // direcionado para os clientes</b>.`,
          //   button: null,
          // },
          {
            images: [`${hubiaDesktop}`, `${hubiaMobile}`],
            subheader: 'Wordpress',
            header: 'Artificial Intelligence Innovation Hub',
            skills: ['Wordpress', 'Blog'],
            description: `Implementation of a <a href="https://www.figma.com/" target="_blank" rel="noreferrer">Figma</a> layout.
            The project was developed to <b>disseminate the Artificial Intelligence Innovation Hub of the Federal University of Pelotas</b>,
            which aims to leverage the area of Artificial Intelligence in the region.`,
            button: ['See project', 'http://ia.ufpel.edu.br/'],
          },
          {
            images: [`${hocDesktop}`, `${hocMobile}`],
            subheader: 'Wordpress',
            header: 'Cetao Dental Hospital',
            skills: ['Wordpress', 'Inbound Marketing', 'Copywriting'],
            description: `Development of an institutional website and landing pages focused on <b>lead conversion</b>
            for the Cetao Dental Hospital. Through the integration with 
            <a href="https://www.rdstation.com/" target="_blank" rel="noreferrer">RD Station</a>, leads are
            forwarded to a sales funnel, allowing to measure the marketing campaigns created by the company.`,
            button: ['See project', 'https://hocetao.com.br/'],
          },
          {
            images: [`${veritasDesktop}`, `${veritasMobile}`],
            subheader: 'Wordpress',
            header: 'Veritas Jurídico',
            skills: ['Wordpress', 'Blog', 'Copywriting'],
            description: `Redesign of an institutional website for Veritas Jurídico. Developed with Wordpress, the
            project has an <b>integrated blog</b> and all <b>necessary legal adjustments</b> for the
            compliance with the new General Data Protection Law.`,
            button: ['See project', 'https://veritasjuridico.com/'],
          },
          {
            images: [`${leafpayDesktop}`, `${leafpayMobile}`],
            subheader: 'Wordpress',
            header: 'LeafPay',
            skills: ['Wordpress', 'Blog', 'Copywriting'],
            description: `Development of an institutional website for LeafPay, specialized accounting office
            in payroll management. Developed with Wordpress, the project has an <b>integrated blog</b>,
            integration to WhatsApp and <b>vectorized illustrations</b>.`,
            button: ['See project', 'https://leafpayrh.com.br/'],
          },
        ],
        button: `More on Behance`,
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
