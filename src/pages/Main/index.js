import React, { Component } from 'react';
import { Page, Container, A, Slogan, Paragrafo, Butao, Header, SubmitButton, Text } from './styles'
import logo from '../../assets/logo.svg';
import { MdEmail, MdSchool } from 'react-icons/md';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { BsArrowBarRight } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import axios from 'axios';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  em: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório')
})

export default class Main extends Component {
  state = {
    newEmail: '',
    loading: false,
    place: 'Digite o seu melhor e-mail'
  };

  handleInputChange = e => {
    this.setState({ newEmail: e.target.value })
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true })

    const { newEmail } = this.state

    if (newEmail === '') {
      this.setState({ loading: false })
      return toast.error('Preencha todos os campos')
    }

    this.setState({
      newEmail: '',
      place: 'Enviando...'
    })

    const buff = new Buffer(newEmail);
    const emailCodificado = buff.toString('base64');
    const response = await axios.get(`https://optin.safetymails.com/main/safetyRT/00c4b923361423fcdb287dc2ab24fad20f263b85/5d69e8f213d91fbf4f76b76cf252f2b630441052/${emailCodificado}`)
    const result = response.data.StatusEmail
    console.log(response)
    if (result === 'INVALIDO') {
      this.setState({
        place: 'Digite o seu melhor e-mail',
        loading: false
      })
      return toast.error('Email inválido ou inexistente')
    }

    await api.post('/emails', {
      em: newEmail,
    })

    this.setState({
      newEmail: '',
      place: 'Digite o seu melhor e-mail',
      loading: false,
    })

    toast.success('E-mail enviado com sucesso')
  }

  render() {
    const { newEmail, loading, place } = this.state;

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
                      placeholder={place}
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