import React, { Component } from "react";
import { View, Text } from "react-native";



export default class Info extends Component {
  render() {
    return (
      <View>
        <Text>IMC significa Índice de Massa Corporal e trata-se de uma medida do peso de cada pessoa, sendo uma relação entre a massa da pessoa e a sua altura ao quadrado.
        </Text>
        <Text>
          A partir desse cálculo é possível avaliar se a pessoa está com um peso ideal ou se está abaixo ou acima do peso. Tanto níveis abaixo, como níveis acima do peso ideal, podem oferecer riscos à saúde do indivíduo.
        </Text>
      </View>
    )
  }
}