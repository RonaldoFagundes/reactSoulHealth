import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import {styles} from "../../styles/style";
import Welcome from "./welcome";



export default function Footer() {
    return (
        <SafeAreaView style={styles.FooterConterner}>
         <View >
           <Text style={styles.FooterText}><Welcome rodape ="Dev@RFagundes"/></Text> 
        </View>
        </SafeAreaView>
        
    )
}
