import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from "./src/componentes/Header";
import Content from "./src/componentes/Content";
import Footer from "./src/componentes/Footer";
import { styles } from "././styles/style";


export default function App() {
  return (
    <SafeAreaView  style={styles.Body}>
     

        <Header />
        <Content />
        <Footer />

       
        <StatusBar style="auto" />
    
    </SafeAreaView>
  );
}





