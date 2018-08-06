import React, {Component} from "react";
import {createStackNavigator} from "react-navigation";

import Homescreen from "../Home/Homescreen.js"
import Addscreen from "../Add/Addscreen.js"
import Editscreen from "../Edit/Editscreen.js"

const Rootstack = createStackNavigator(
	{
		Home : {
			screen : Homescreen,
			navigationOptions: ({ navigation }) => ({
		      title: "Contact List",
		    }),
		},
		Add : {
			screen : Addscreen,
			navigationOptions: ({ navigation }) => ({
		      header : null
		    }),
		},
		Edit : {
			screen : Editscreen,
			navigationOptions: ({ navigation }) => ({
		      header : null
		    }),
		}
	},
	{
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#1e88e5',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        left : 107,
      },
    },
  }
)

export default Rootstack;