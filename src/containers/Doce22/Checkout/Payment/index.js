import React from 'react'
import Background from '../../Background'
import Foot from '../../Foot'
import Head from '../../Head'
import ArrowDown from '../../ArrowDown'

import './style.css'

const Payment = () => {
  return (
    <div className="Doce22">
      <Background />
      <div className="section full-screen">
        <Head />
        <div>
          <h3 className="sub-title">Pagamento</h3>
          <h1 className="title">VIP List</h1>
        </div>
        <ArrowDown to="payment" title="Continuar" />
      </div>
      <div className="Payment" id="payment">
        <div className="content">
          <div className="box">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg/2560px-Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg.png"
              className="logo-pay"
              alt="PIX"
            />
            <h3 className="sub-title">Pagar com PIX</h3>
            <p>
              Use o <b>QR Code</b> abaixo no app do seu banco ou a{' '}
              <b>chave CPF</b> abaixo.
            </p>
            <img src="https://i.imgur.com/N3ct6vy.jpg" alt="PIX" />
            <span>NuBank</span>
            <span className="primary">029.678.090-12</span>
          </div>
          <div className="box">
            <img
              src="https://logodownload.org/wp-content/uploads/2018/05/picpay-logo-2.png"
              className="logo-pay"
              alt="PicPay"
            />
            <h3 className="sub-title">Pagar com Cartão</h3>
            <p>
              Use o <b>QR Code</b> abaixo ou meu <b>user</b> no seu{' '}
              <b>PicPay</b> e pague utilizando o seu cartão cadastrado no app.
            </p>
            <img src="https://i.imgur.com/S5iIrmv.jpg" alt="PicPay" />
            <span>PicPay</span>
            <span className="primary user">@jvwasquevite</span>
          </div>
          <div className="box">
            <img
              src="https://logodownload.org/wp-content/uploads/2018/10/sympla-logo.png"
              className="logo-pay"
              alt="Sympla"
            />
            <h3 className="sub-title">Pagar com Cartão</h3>
            <p>
              Use o <b>QR Code</b> abaixo ou{' '}
              <b>
                <a
                  href="https://www.sympla.com.br/meusdoce22__1573332"
                  target="_blank"
                  rel="noreferrer"
                >
                  clique aqui
                </a>
              </b>{' '}
              para comprar seu ingresso pelo <b>Sympla</b>.
            </p>
            <img src="https://i.imgur.com/XimMnMI.png" alt="Sympla" />
          </div>
        </div>
        <Foot />
      </div>
    </div>
  )
}

export default Payment
