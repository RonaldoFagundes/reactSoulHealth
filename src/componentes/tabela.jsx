import React, { Component } from "react";
import { View, Text, Button } from "react-native";



export default class TabelaImc extends Component {

  state = {
    imc: this.props.imc,
    result: " Resultado ",
  }
  render() {
    return (

      <View >
        <Text>Imc:{this.state.imc}</Text>
        <Text>{this.state.result}</Text>

        <Button title=" Verificar " color="#2F4F4F"
          onPress={
            () => this.setState({
              result: this.props.res,
            })
          } />
      </View>
    )
  }







}