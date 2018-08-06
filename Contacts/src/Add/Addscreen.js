import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Label } from 'native-base';

import Headers from "./Headers.js"

export default class Addscreen extends Component {
  render() {
    const {
          handleName,
          handleClick, 
          handleEmail, 
          handleNomor
          } = this.props.navigation.state.params
    return (
      <Container>
        <Headers navigation={this.props.navigation} handleClick={handleClick}/>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Nama</Label>
              <Input onChangeText={handleName}/>
            </Item>
            <Item stackedLabel last>
              <Label>Email</Label>
              <Input onChangeText={handleEmail}/>
            </Item>
            <Item stackedLabel last>
              <Label>Nomor</Label>
              <Input onChangeText={handleNomor}/>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}