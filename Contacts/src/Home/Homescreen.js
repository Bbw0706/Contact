import React, {Component} from 'react';
import {Platform, StyleSheet, View, StatusBar} from 'react-native';
import {Content, Fab, Button, Text, Icon, Spinner} from "native-base"
import axios from "axios";

import ListItems from "./component/ListItems"

export default class Homescreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      data : [],
      nama : "",
      nomor: "",
      email: "",
      page : 1,
      loading: false
    }
  }

  makeRemoteRequest = () => {
    const {page} = this.state
    this.setState({loading:true})
    setTimeout(() => {
      axios.get(`http://192.168.0.23:5000/contact/${page}`)
      .then(res => {
        const newData = this.state.data.concat(res.data);
        this.setState({
          loading:false,
          data : newData
        })
      })
      .catch(err => {
        throw err;
      });
    }, 1500)
  }

  componentDidMount(){
    this.makeRemoteRequest()
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
    const {nama, email, nomor} = this.state;
    axios.post('http://192.168.0.23:5000/contact', {
      nama,email,nomor
    })
    .then((response) => {
      const newData = this.state.data.concat(response.data);
      this.setState({
        data : newData,
        nama : "",
        email : "",
        nomor : ""
      })
      this.props.navigation.popToTop()
    })
    .catch((error) => {
      throw error
    });
  }

  handleDelete = (id, index) => {
    axios.delete(`http://192.168.0.23:5000/contact/${id}`)
    .then(res => {
      const newData = this.state.data.concat();
      newData.splice(index, 1);

      this.setState({
        data : newData
      })
    })
    .catch(err => {
      throw err;
    });
  }

  handleEdit = (id) => {
    const {nama, email, nomor} = this.state;
    axios.put(`http://192.168.0.23:5000/contact/edit/${id}`, {
      nama,email,nomor
    })
    .then((response) => {
      this.setState({
        data : response.data,
        nama : "",
        email : "",
        nomor : ""
      })
      this.props.navigation.popToTop()
    })
    .catch((error) => {
      throw error
    });
  }

  handleLoadMore = () => {
    this.setState({
      page : this.state.page + 1
    }, () => {
      this.makeRemoteRequest()
    })
  }

  renderFooter = () => {
    if(this.state.loading === false) return null;

    return (
        <View>
          <Spinner color='#1e88e5' />
          <Text 
            style={{color:"#aaa", fontSize:12, textAlign:'center', bottom:10}}
          >
            Load more data
          </Text>
        </View>
    )
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
            <ListItems 
              {...this.props}
              data={this.state.data}
              handleDelete={this.handleDelete}
              handleName={this.handleName}
              handleEmail={this.handleEmail}
              handleNomor={this.handleNomor}
              handleEdit={this.handleEdit}
              handleLoadMore={this.handleLoadMore}
              renderFooter={this.renderFooter}
            />
        </View>

        <Fab
            style={{ backgroundColor: '#1e88e5' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate("Add", {
                                                                  handleName:this.handleName, 
                                                                  handlePostClick:this.handlePostClick,
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
