import React , {Component} from "react";
import { View, Text } from "react-native";



 export default class Welcome extends Component{
     state={
        head:this.props.cabeca,  
        saudacao:this.props.saudar,
        titulo:this.props.title, 
        footer:this.props.rodape,
     }

     render (){
         return(
             <View>
                 <Text>{this.state.head}</Text>
                 <Text>{this.state.saudacao}</Text>
                 <Text>{this.state.titulo}</Text>
                 <Text>{this.state.footer}</Text>
             </View>
         )
     }
 }