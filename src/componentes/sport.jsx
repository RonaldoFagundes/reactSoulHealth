import React, { Component } from "react";
import { View, Text, Linking } from "react-native";
import { styles } from "../../styles/style";


export default class Sport extends Component {
    render() {
        return (
            <View>
                <Text style={styles.TextSport}>Exercícios físicos em casa: rotina com vídeos. Várias são as razões pelas quais decidimos nos exercitar em casa: seja por falta de tempo de ir à academia ou outro ambiente dedicado a exercícios, porque a grana está curta, por nos sentirmos mais à vontade sozinhos ou qualquer outro motivo.
                </Text>
                <Text style={styles.TextSport}>
                    Várias são as razões pelas quais decidimos nos exercitar em casa: seja por falta de tempo de ir à academia ou outro ambiente dedicado a exercícios, porque a grana está curta, por nos sentirmos mais à vontade sozinhos ou qualquer outro motivo.
                </Text>
                <Text style={styles.TextLink} onPress={() =>
                    Linking.openURL('https://brasilescola.uol.com.br/educacao-fisica/esporte-saude.htm')}>
                    ref:brasilescola
                </Text>
            </View>
        )
    }
}