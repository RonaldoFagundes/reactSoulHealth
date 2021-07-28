
import {View,Text, SafeAreaView} from "react-native";
import React from "react";
import {styles} from "../../styles/style";
import Welcome from "./welcome";


  export default function Header(){
       return(
         <View style={styles.HeaderContener}>
           <View>
             <Text style={styles.HeaderText}><Welcome cabeca ="App-React-SouthHealth"/></Text>
           </View>
         </View>
           
       )
  }