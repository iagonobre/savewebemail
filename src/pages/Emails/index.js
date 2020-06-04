import React, { Component } from 'react';
import { Emails, Text } from './styles';

import api from '../../services/api';

export default class Email extends Component {
  state = {
    emails: [],
  }

  handleGetEmails = async e => {

    const response = await api.get('/emails');

    const data = response.data

    this.setState({
      emails: [...data]
    })
  }

  componentDidMount() {
    this.handleGetEmails()
  }

  render() {
    const { emails } = this.state

    return (
      <>
        <Text>Usuários cadastrados</Text>
        <Emails>
          {emails.map(emails => (
            <li key={emails.email}>
              <span>{emails.email}</span>
            </li>
          ))}
        </Emails >
      </>
    );
  }
}