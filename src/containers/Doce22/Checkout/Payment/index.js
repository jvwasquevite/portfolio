import React, { useState } from 'react'
import Background from '../../Background'
import Foot from '../../Foot'
import Head from '../../Head'
import Arrow from '../../Arrow'

import './style.css'

const Payment = () => {
  const [coupon, setCoupon] = useState('')
  const [invalid, setInvalid] = useState('none')
  const [valid, setValid] = useState('none')
  const [apply, setApply] = useState(false)

  const content = [
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg/2560px-Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg.png',
      title: 'Pagar R$40 no PIX',
      description: [
        'Use o ',
        <b>QR Code</b>,
        ' abaixo, ',
        <a
          href="https://nubank.com.br/pagar/28o2/pN2fTyXVgX"
          target="_blank"
          rel="noreferrer"
        >
          clique aqui
        </a>,
        ' ou use chave CPF: ',
        <b>029.678.090-12</b>,
        ' (NuBank).',
      ],
      qrcode: 'https://i.imgur.com/G65ApDv.jpg',
    },
    {
      logo: 'https://logodownload.org/wp-content/uploads/2018/05/picpay-logo-2.png',
      title: 'Pagar R$40 no Cartão',
      description: [
        'Use o ',
        <b>QR Code</b>,
        ' abaixo, ',
        <a
          href="https://picpay.me/jvwasquevite/40.0"
          target="_blank"
          rel="noreferrer"
        >
          clique aqui
        </a>,
        ', ou use o user ',
        <b>@jvwasquevite</b>,
        ' no app do ',
        <b>PicPay</b>,
        '.',
      ],
      qrcode: 'https://i.imgur.com/mdi5saC.jpg',
    },
    {
      logo: 'https://logodownload.org/wp-content/uploads/2018/10/sympla-logo.png',
      title: 'Pagar R$40 no Cartão',
      description: [
        'Use o ',
        <b>QR Code</b>,
        ' abaixo ou ',
        <b>
          <a
            href="https://www.sympla.com.br/meusdoce22__1573332"
            target="_blank"
            rel="noreferrer"
          >
            clique aqui
          </a>
        </b>,
        ' para comprar seu ingresso pelo ',
        <b>Sympla</b>,
        '.',
      ],
      qrcode: 'https://i.imgur.com/XimMnMI.png',
    },
  ]

  const contentDisc = [
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg/2560px-Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg.png',
      title: [
        'Pagar R̶$̶3̶5̶ ',
        <b style={{ color: 'rgb(0, 210, 84)' }}>$30</b>,
        ' no PIX',
      ],
      description: [
        'Use o ',
        <b>QR Code</b>,
        ' abaixo no app do seu banco ou a chave CPF: ',
        <b>029.678.090-12</b>,
        ' (NuBank).',
      ],
      qrcode: 'https://i.imgur.com/y1wcEMu.jpg',
    },
    {
      logo: 'https://logodownload.org/wp-content/uploads/2018/05/picpay-logo-2.png',
      title: [
        'Pagar R̶$̶3̶5̶ ',
        <b style={{ color: 'rgb(0, 210, 84)' }}>$30</b>,
        ' no Cartão',
      ],
      description: [
        'Use o ',
        <b>QR Code</b>,
        ' abaixo ou o user ',
        <b>@jvwasquevite</b>,
        ' no app do seu ',
        <b>PicPay</b>,
        '.',
      ],
      qrcode: 'https://i.imgur.com/avDsqrr.jpg',
    },
    {
      logo: 'https://logodownload.org/wp-content/uploads/2018/10/sympla-logo.png',
      title: [
        'Pagar R̶$̶3̶5̶ ',
        <b style={{ color: 'rgb(0, 210, 84)' }}>$30</b>,
        ' no Cartão',
      ],
      description: [
        'Use o ',
        <b>QR Code</b>,
        ' abaixo ou ',
        <b>
          <a
            href="https://www.sympla.com.br/meusdoce22__1573332"
            target="_blank"
            rel="noreferrer"
          >
            clique aqui
          </a>
        </b>,
        ' para comprar seu ingresso pelo ',
        <b>Sympla</b>,
        '.',
      ],
      qrcode: 'https://i.imgur.com/XimMnMI.png',
    },
  ]

  const handleChange = event => {
    setCoupon(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (coupon === '5off' || coupon === '5OFF' || coupon === '5Off') {
      setInvalid('none')
      setValid('block')
      setApply(true)
    } else {
      setInvalid('block')
      setApply(false)
    }
  }

  return (
    <div className="Doce22">
      <Background />
      <div className="section full-screen">
        <Head />
        <div>
          <h3 className="sub-title">Pagamento</h3>
          <h1 className="title">VIP List</h1>
        </div>
        <Arrow to="payment" title="Continuar" />
      </div>
      <div className="Payment" id="payment">
        <div className="content">
          <div className="box">
            <h3 className="sub-title">Cupom de desconto</h3>
            <p>
              Insira um <b>cupom válido</b> abaixo.
            </p>
            <div className="coupon-form">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={coupon}
                  placeholder="Insira o código aqui"
                  onChange={handleChange}
                />
                <input type="submit" value="Validar" />
              </form>
            </div>
            <div className="invalid-coupon" style={{ display: invalid }}>
              <span>Código inválido, tente novamente.</span>
            </div>
            <div className="valid-coupon" style={{ display: valid }}>
              <span>Cupom de desconto expirado.</span>
            </div>
          </div>
          {content.map(item => (
            <div className="box">
              <img src={item.logo} className="logo-pay" alt="Logo" />
              <h3 className="sub-title">{item.title}</h3>
              <p>{item.description}</p>
              <img src={item.qrcode} alt="QR Code" />
            </div>
          ))}
        </div>
        <Foot />
      </div>
    </div>
  )
}

export default Payment
