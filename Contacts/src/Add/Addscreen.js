import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Label, Thumbnail } from 'native-base';

import Headers from "./Headers.js"

export default class Addscreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      nama : "", 
      nomor : "",
      email : ""
    }
  }

  handleName = (val) => {
    this.setState({
      nama : val
    })
  }

  handleNomor = (val) => {
    this.setState({
      nomor : val
    })
  }

  handleEmail = (val) => {
    this.setState({
      email : val
    })
  }

  handlePostClick = () => {
    const {nama,email,nomor} = this.state;
    this.props.navigation.state.params.handlePostClick(nama,email,nomor)
    this.setState({
      nama : "",
      nomor : "",
      email : ""
    })
  }

  render() {
    return (
      <Container>
        <Headers navigation={this.props.navigation} handlePostClick={this.handlePostClick}/>
        <Content>
          <Thumbnail style={{marginTop : 20,marginBottom:10, alignSelf:"center", backgroundColor:"#1e88e5"}} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png"}} />
          <Form style={{marginRight:20, marginLeft:5}}>
            <Item floatingLabel>
              <Label>Nama</Label>
              <Input value={this.state.nama} onChangeText={this.handleName} required/>
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input value={this.state.email} onChangeText={this.handleEmail} required/>
            </Item>
            <Item floatingLabel>
              <Label>Nomor</Label>
              <Input value={this.state.nomor} onChangeText={this.handleNomor} required/>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}