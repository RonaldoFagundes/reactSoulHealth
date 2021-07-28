import { StyleSheet, TouchableWithoutFeedback } from "react-native";

export const styles = StyleSheet.create(
  {
    /* config default dos omponetes */
    Body: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    HeaderContener: {
      backgroundColor: "#2F4F4F",
      width: "100%",
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      zIndex: 100,
      shadowRadius: 30,
      marginBottom: 2340
    },
    HeaderText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: "orange"
    },
    ContentContener: {
      backgroundColor: "#00008B",
      width: "100%",
      flex: 35,
      alignItems: 'center'

    },
    FooterConterner: {
      backgroundColor: "#2F4F4F",
      width: "100%",
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    FooterText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: "orange"
    },




    /* conf expecifica de componentes  */

    ViewWelco: {
      backgroundColor: "#191970",
      width: 440,
      height: 150,
      padding: 20,
      marginTop: 60,
    },
    TextWelcome: {
      fontSize: 25,
      fontWeight: 'bold',
      color: "orange"
    },
    ViewInfo: {
      backgroundColor: "orange",
      width: 440,
      height: 250,
      padding: 20
    },
    TextInfo: {
      fontSize: 17,
      color: "#00008B"
    },
    ViewTabela: {
      backgroundColor: "#191970",
      width: 440,
      height: 410,
      padding: 20,
      alignItems: 'center',
      shadowRadius: 30
    },
    TextTabela: {
      color: "#00FA9A",
      fontSize: 15,
      fontWeight: 'bold',
      padding: 5
    },
    ViewCalcule: {
      backgroundColor: "#008080",
      width: 440,
      height: 330,
      padding: 20,
      alignItems: 'center',
      shadowRadius: 30
    },
    TextCalcule: {
      color: "#7FFF00",
      fontSize: 25,
      fontWeight: 'bold',
      padding: 5
    },
    TextInput: {
      borderWidth: 1,
      backgroundColor: '#2F4F4F',
      padding: 5,
      marginBottom: 10,
      color: "#00FFFF"
    },
    BtnCalc: {
      borderWidth: 1,
      padding: 5,
      width: 100,
      marginLeft: 80,
      borderRadius: 50,
      alignItems: "center",
      backgroundColor: "#00008B",
    },
    BtnText: {
      color: "#7FFF00",
      fontSize: 15,
      fontWeight: 'bold',
    },
    ResultImc: {
      color: "#7FFF00",
      fontSize: 15,
      fontWeight: 'bold',
    },
    ViewWarning: {
      width: 250,
      padding: 15,
      margin: 5,
      shadowRadius: 30
    },
    ResultWarn: {
      color: "#7FFF00",
      fontSize: 15,
      fontWeight: 'bold',
      width: 200
    },

    TextTitleImg: {
      fontSize: 17,
      color: "#00008B"
    },
    ViewAlimentaImg: {
      backgroundColor: "yellow",
      width: 440,
      height: 300,
      padding: 10,
      shadowRadius: 50
    },

    ViewAlimentacao: {
      backgroundColor: "tomato",
      width: 440,
      height: 300,
      padding: 10,
      shadowRadius: 30

    },
    TextAlimentacao: {
      fontSize: 17,
      color: "#00008B"
    },

    ViewSportImg: {
      backgroundColor: "yellow",
      width: 440,
      height: 300,
      padding: 10,
      shadowRadius: 30
    },

    ViewSport: {
      backgroundColor: "orange",
      width: 440,
      height: 300,
      padding: 20,
      shadowRadius: 30
    },
    TextSport: {
      fontSize: 17,
      color: "#00008B"
    },
    TextLink: {
      textDecorationLine: "underline",
      color: "white"
    }



  })


/* borderWidth:1, */