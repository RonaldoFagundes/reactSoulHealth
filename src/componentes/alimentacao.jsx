import React, { Component } from "react";
import { View, Text, Linking } from "react-native";
import { styles } from "../../styles/style";


export default class Alimentacao extends Component {
    render() {
        return (
            <View>
                <Text style={styles.TextAlimentacao}>Ter uma alimentação saudável é fundamental para que as funções do organismo funcionem de foma equilibrada. De forma prática, uma alimentação saudável é aquela composta por todos os macro e micronutrientes.
                </Text>


                <Text style={styles.TextAlimentacao}>
                    Alimentação saudável contém:
                    Os macronutrientes, que são os carboidratos (pães, massas e batatas, entre outros), gorduras (como os óleos, as oleaginosas, abacate e outros) e proteínas (peixes, ovos, carnes vermelhas, carne de frango, entre outros).
                </Text>
                <Text style={styles.TextLink} onPress={() =>
                    Linking.openURL('https://saudebrasil.saude.gov.br/alimentacao-saudavel')}>
                    ref : minhavida
                </Text>
            </View>
        )
    }
}