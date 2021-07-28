import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/style';



export default function CalcImc() {


    const [state, setState] = useState({
        altura: 0,
        peso: 0,
        res: 0
    })
    const handleInputChange = (atributo, valor) => {
        setState({
            ...state, [atributo]: valor
        })
    }

    const calcularImc = () => {
        setState({
            ...state, res: (state.peso / (Math.pow(state.altura, 2)))
        })

    }

    const warningImc = () => {

        if (state.res > 0 && state.res < 17) {
            return " ";
        }
        else if (state.res >= 17 && state.res <= 18.4) {
            return " Abaixo do peso - Fadiga, stress, ansiedade";
        }
        else if (state.res >= 18.5 && state.res <= 24.9) {
            return " Peso normal - Menor risco de doenças cardíacas e vasculares ";
        }
        else if (state.res >= 25 && state.res <= 29.9) {
            return " Acima do peso Fadiga, má circulação, varizes ";
        } if (state.res > 30) {
            return "  Obsidade , todos os riscos ";
        }
    }

    return (
        <View>
            <TextInput style={styles.TextInput}
                placeholder=" digite a sua altura! " placeholderTextColor='#7FFF00'
                onChangeText={
                    (valor) => handleInputChange("altura", parseFloat(valor))
                }
            />

            <TextInput style={styles.TextInput}
                placeholder=" digite a seu peso! " placeholderTextColor='#7FFF00'
                onChangeText={
                    (valor) => handleInputChange("peso", parseFloat(valor))
                }
            />

            <TouchableOpacity style={styles.BtnCalc}>
                <Text style={styles.BtnText} onPress={calcularImc}>Calcular</Text>
            </TouchableOpacity>

            <View style={styles.ViewWarning}>
                <Text style={styles.ResultImc}>{` seu Imc ${state.res.toFixed(2)}`}</Text>
                <Text style={styles.ResultWarn}>{warningImc()}</Text>
            </View>

        </View>

    )

}

