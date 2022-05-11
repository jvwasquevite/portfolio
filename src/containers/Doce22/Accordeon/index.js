import React from 'react'
import './style.css'

const Accordeon = () => {
  const faq = [
    {
      question: 'O que é o #MeusDoce22?',
      answer:
        'O #MeusDoce22 é um evento open bar para comemorar os meus 22 anos.',
    },
    {
      question: 'Quando e onde acontecerá o evento?',
      answer:
        'O evento ocorrerá no dia 10 de junho de 2022, sexta-feira, das 23h às 05h na área externa do Hype Pub em Pelotas, localizado na R. Santa Cruz, 2252.',
    },
    {
      question: 'O que será oferecido no openbar?',
      answer: 'Litrão de Polar e Kit (Vodka com energético).',
    },
    {
      question: 'Quanto custa os ingressos para o openbar?',
      answer:
        'R$ 30 no primeiro lote; R$ 35 no segundo lote e R$ 40 no terceiro lote.',
    },
    {
      question: 'Quais as formas de pagamento dos ingressos?',
      answer:
        'Pix, dinheiro físico (assim como faziam os Maias) ou cartão de crédito via Sympla ou PicPay (consultar as taxas de cada plataforma).',
    },
    {
      question: 'O evento será privado ou aberto ao público?',
      answer:
        'A venda de ingressos terá prioridade para amigos e conhecidos por meio do VIP Passcode. Caso sobre ingressos disponíveis, será disponibilizado a venda ao público em geral.',
    },
    {
      question: 'Posso convidar um amigo para o evento?',
      answer:
        'Sim, caso você já esteja na VIP List. Para solicitar, me mande uma mensagem via Whatsapp ou Instagram com os nomes completos e os telefones com DDD.',
    },
    {
      question: 'O que é o VIP Passcode?',
      answer:
        'O VIP Passcode é um código de acesso para acessar a área de compra dos ingressos, restrito para amigos e conhecidos.',
    },
    {
      question: 'Como consigo reservar meu ingresso?',
      answer:
        'A reserva de ingressos é realizada apenas com a efetuação do pagamento. Caso não consiga ir, o valor total do ingresso poderá ser devolvido.',
    },
    {
      question: 'O que será solicitado na entrada do evento?',
      answer:
        'É necessário levar um documento com foto e comprovante de vacinação com no mínimo 2 doses, podendo ser fotos no celular ou cópias.',
    },
    {
      question: 'Como consigo retirar a minha pulseira do evento?',
      answer:
        'Na entrada do evento será entregue a pulseira para todos que estiverem com seus nomes na lista, por meio da apresentação de um documento válido com foto.',
    },
    {
      question: 'Que atrações terão no evento?',
      answer:
        'Atrações principais: DJs Guto na Gaiola e Myah Michelle. Outras atrações: Cobertura fotográfica, rodadas de tequila, pistola com destilados, petiscos, balas e doces, beerpong, playlist colaborativa, adesivos semáforo, carimbo temático, mensagens anônimas no telão e tinder interno.',
    },
    {
      question: 'O que será os adesivos semáforo?',
      answer:
        'Ao preencher seus dados no checkout da compra do ingresso, será solicitado seu status de relacionamento e orientação sexual. Na entrada será entregue um adesivo semáforo para ser colado na roupa, indicando a orientação sexual e o atual status de relacionamento: vermelho para os comprometidos, amarelo para os enrolados e em relacionamento aberto e verde para os solteiros.',
    },
    {
      question: 'O que será o tinder interno?',
      answer:
        'Ao preencher seus dados no checkout da compra do ingresso, você poderá optar ou não por deixar seus dados públicos (nome, status de relacionamento, orientação sexual e @ do Instagram) para os outros convidados.',
    },
    {
      question: 'Como funcionará as mensagens anônimas no telão?',
      answer:
        'Durante o evento, por meio de um QR Code, você poderá mandar uma mensagem anônima para algum convidado, que aparecerá no telão do palco.',
    },
  ]
  return (
    <div className="Accordeon">
      <div className="tabs">
        {faq.map((item, i) => (
          <div className="tab" key={i}>
            <input type="radio" id={i} name="rd" />
            <label className="tab-label" htmlFor={i}>
              {item.question}
            </label>
            <div className="tab-content">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Accordeon
