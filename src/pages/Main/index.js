import React, { Component } from 'react';
import { Page, Container, A, Slogan, Paragrafo, Butao, Header, SubmitButton, Text } from './styles'
import logo from '../../assets/logo.svg';
import { MdEmail, MdSchool } from 'react-icons/md';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { BsArrowBarRight } from 'react-icons/bs';
import { toast } from 'react-toastify';
import api from '../../services/api';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  em: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório')
})

export default class Main extends Component {
  state = {
    newEmail: '',
    loading: false,
  };

  handleInputChange = e => {
    this.setState({ newEmail: e.target.value })
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true })

    const { newEmail } = this.state

    await api.post('/emails', {
      em: newEmail,
    })

    this.setState({
      newEmail: '',
      loading: false,
    })

    toast.success('E-mail enviado com sucesso')
  }

  render() {
    const { newEmail, loading } = this.state;

    return (
      <>
        <Page id="page-home">
          <div>
            <Header>
              <header>
                <img src={logo} alt="logomarca"></img>
                <A id="a">
                  <span id="embreve" />
                  <a href="/">Em Breve</a>
                </A>
              </header>
            </Header>

            <Container id="content">
              <main>
                <Slogan>O Assistente Virtual que decola seus estudos!</Slogan>
                <Paragrafo id="par">
                  O SAVE é um universo de funcionalidades, feito exclusivamente para salvar você, estudante do IFRN.
                </Paragrafo>
                <Text id="txt">
                  <MdSchool />  Vinculado ao SUAP. <br />
                  <AiOutlinePaperClip /> Acesse materiais, crie notificações e muito mais.
                </Text>
                <Text id="txt2">Cadastre-se abaixo, e receba um e-mail durante o lançamento.</Text>
                <form schema={schema} autocomplete="off" onSubmit={this.handleSubmit}>
                  <Butao id="butao">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Digite o seu melhor e-mail"
                      value={newEmail}
                      onChange={this.handleInputChange}
                    />
                    <SubmitButton id="button" loading={loading}><BsArrowBarRight id="svgsubmit" /></SubmitButton>
                    <MdEmail />
                  </Butao>
                </form>
              </main>
            </Container>
          </div>
        </Page>
      </>
    );
  }
}