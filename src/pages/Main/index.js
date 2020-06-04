import React, { Component } from 'react';
import { Page, Container, A, Slogan, Paragrafo, Butao, Header, SubmitButton, Text } from './styles'
import logo from '../../assets/logo.svg';
import { MdEmail, MdSchool } from 'react-icons/md';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { BsArrowBarRight } from 'react-icons/bs';
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
  }

  render() {
    const { newEmail, loading } = this.state;

    return (
      <>
        <Page>
          <div>
            <Header>
              <header>
                <img src={logo} alt="logomarca"></img>
                <A>
                  <span />
                  <a href="/">Em Breve</a>
                </A>
              </header>
            </Header>

            <Container>
              <main>
                <Slogan>O Assistente Virtual que decola seus estudos!</Slogan>
                <Paragrafo>
                  O SAVE é um universo de funcionalidades, feito exclusivamente para salvar você, estudante do IFRN.
                </Paragrafo>
                <Text>
                  <MdSchool />  Vinculado ao SUAP. <br />
                  <AiOutlinePaperClip /> Acesse materiais, crie notificações e muito mais.
                </Text>
                <Text>Cadastre-se abaixo, e receba um e-mail durante o lançamento.</Text>
                <form schema={schema} autocomplete="off" onSubmit={this.handleSubmit}>
                  <Butao>
                    <input
                      name="email"
                      type="email"
                      placeholder="Digite o seu melhor e-mail"
                      value={newEmail}
                      onChange={this.handleInputChange}
                    />
                    <SubmitButton loading={loading}><BsArrowBarRight /></SubmitButton>
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