import React from "react"
import {View,Text} from "react-native";
import imagem from "../../imgView/alimentacao.png";

export default function ViewAlientacao (props){
       return(
          <View>
              <Text>{props.nome}</Text>            
              <img src={imagem}  width="420"  height="250"  />
          </View>
       )
   }

