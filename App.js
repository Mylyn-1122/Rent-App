import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Login from "./screens/login"
import MainStack from "./Navigation/navigate";
import { NavigationContainer } from "@react-navigation/native";

export default class App extends React.Component{

  constructor(){
    super();
    this.state={

    }
  }

  render(){
    return(
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    )
  }
}