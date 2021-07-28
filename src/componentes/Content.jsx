import { ScrollView, View, Text, SafeAreaView } from "react-native";
import React from "react";
import { styles } from "../../styles/style";
import Welcome from "./welcome";
import Info from "./info";
import TabelaImc from "./tabela";
import CalcImc from "./CalcImc";
import ViewAlientacao from "./ViewAlientacao";
import Alimentacao from "./alimentacao";
import ViewSport from "./ViewSport"
import Sport from "./sport";



export default function Content() {
  return (
    <SafeAreaView style={styles.ContentContener}>

      <ScrollView>
        <View style={styles.ViewWelco}>
          <Text style={styles.TextWelcome}>
            <Welcome saudar="Olá Bem vindos!" />
          </Text>

          <Text style={styles.TextWelcome}>
            <Welcome title=" Conhecendo o imc !" />
          </Text>
        </View>

        <View style={styles.ViewInfo}>
          <Text style={styles.TextInfo}><Info /></Text>
        </View>


        <View style={styles.ViewTabela}>
          <Text style={styles.TextTabela}><TabelaImc imc="  Menos do que 18,5" res="  Abaixo do peso" /></Text>
          <Text style={styles.TextTabela}><TabelaImc imc="  Entre 18,5 e 24,9" res="  Peso normal" /> </Text>
          <Text style={styles.TextTabela}><TabelaImc imc="  Entre 25 e 29,9" res="  Sobrepeso" /></Text>
          <Text style={styles.TextTabela}><TabelaImc imc="  Entre 30 e 34,9" res="  Obesidade grau 1" /></Text>
        </View>


        <View style={styles.ViewCalcule}>
          <Text style={styles.TextCalcule}>
            Calcule aqui o seu imc
          </Text>
          <CalcImc />
        </View>


        <View style={styles.ViewAlimentaImg}>
          <Text style={styles.TextTitleImg}><ViewAlientacao nome="Alimentação Saúdavel" /></Text>
        </View>


        <View style={styles.ViewAlimentacao}>
          <Text style={styles.TextTitleImg}><Alimentacao /></Text>
        </View>


        <View style={styles.ViewSportImg}>
          <Text style={styles.TextTitleImg}><ViewSport nome="Pratique esportes" /></Text>
        </View>

        <View style={styles.ViewSport}>
          <Text style={styles.TextTitleImg}><Sport /></Text>
        </View>
      </ScrollView>


    </SafeAreaView>


  )
}