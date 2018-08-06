import React, {Component} from 'react';
import {Platform, StyleSheet, View, StatusBar} from 'react-native';
import {Content, Fab, Button, Text, Icon} from "native-base"
import axios from "axios";

import ListItems from "./component/ListItems"

export default class Homescreen extends Component {
  constructor(){
    super();

    this.state = {
      data : [],
      nama : "",
      nomor: "",
      email: ""
    }
  }

  componentDidMount(){
    axios.get("http://192.168.0.23:5000/contact")
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

  handleClick = () => {
    alert(this.state.nama)
  }

  render() {
    const {nama, email,nomor} = this.state
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor="#1e88e5"
          barStyle="light-content"
        />
        
        <View style={{flex: 1}}>
          <Content>
            <ListItems data={this.state.data}/>
          </Content>
        </View>

        <Fab
            style={{ backgroundColor: '#1e88e5' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate("Add", {
                                                                  nama, 
                                                                  email, 
                                                                  nomor, 
                                                                  handleName:this.handleName, 
                                                                  handleClick:this.handleClick,
                                                                  handleNomor:this.handleNomor,
                                                                  handleEmail:this.handleEmail
                                                                })}>
            <Icon type="FontAwesome" name="pencil" />
        </Fab>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
