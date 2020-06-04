import React, { Component } from 'react';
import { Emails, Text } from './styles';

import api from '../../services/api';

export default class Email extends Component {
  state = {
    emails: [],
    users: '',
  }

  handleGetEmails = async e => {

    const response = await api.get('/emails');
    const data = response.data

    this.setState({
      emails: [...data],
    })

  }

  componentDidMount() {
    this.handleGetEmails()
  }

  componentDidUpdate(_, prevState) {
    if (prevState.emails !== this.state.emails) {
      const { emails } = this.state
      console.log(emails)
      const usersNumber = emails.length
      this.setState({
        users: usersNumber,
      })
    }
  }

  render() {
    const { emails } = this.state
    return (
      <>
        <Text>Usuários cadastrados</Text>
        <Text>Total = {this.state.users}</Text>
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