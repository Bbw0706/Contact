import React, { Component } from 'react';
import { Container, List, Left,Body,Right, Thumbnail,ListItem,Content, Form, Item, Input, Button, Text, Label } from 'native-base';
import {FlatList} from "react-native"
import Headers from "./Headers.js"
import axios from "axios"

export default class Editscreen extends Component {
  constructor(props){
    super(props)

    this.state = {
      data : []
    }
  }

  componentDidMount(){
    axios.get(`http://192.168.0.23:5000/contact/${this.props.navigation.state.params.id}`)
    .then(res => {
      const newData = this.state.data.concat(res.data);
      this.setState({
        data : newData
      })
    })
    .catch(err => {
      throw err;
    });
  }

  render() {
    const {
      id,
      handleName,
      handleEdit, 
      handleEmail, 
      handleNomor
      } = this.props.navigation.state.params;

    return (
      <Container>
        <Headers navigation={this.props.navigation} handleEdit={handleEdit} id={id}/>
        <Content>
          <List style={{marginTop:10}}>
          <FlatList
              data={this.state.data}
              keyExtractor={(item, index) => item._id}
              renderItem={({item, index}) => (
                <ListItem 
                  style={{marginRight:20}}
                  avatar 
                >
                  <Left>
                    <Thumbnail style={{backgroundColor:"#1e88e5"}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png' }} />
                  </Left>
                  <Body>
                    <Text>{item.nama}</Text>
                    <Text note>{item.email}</Text>
                    <Text note>{item.nomor}</Text>
                  </Body>
                </ListItem>
              )}
            />
          </List>
          
          <Text style={{alignSelf:"center", marginTop:20, marginBottom:20, color : "#aaa"}}>Fill the form to edit</Text>

          <Form style={{marginRight:20, marginLeft:5}}>
            <Item stackedLabel>
              <Label>Nama</Label>
              <Input onChangeText={handleName}/>
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input onChangeText={handleEmail}/>
            </Item>
            <Item stackedLabel>
              <Label>Nomor</Label>
              <Input onChangeText={handleNomor}/>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}