import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sobre Nós</Text>
      <Text style={styles.paragrafo}>A identificação botânica pode ser realizada de diversas formas. Normalmente, não se encontra flores e frutos nas espécies florestais, sendo necessário recorrer as folhas e outras caraterísticas morfológicas, como o tronco.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3FBC3",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color:"#000000",
    fontSize: 20,
    margin: 20,
  },

  paragrafo: {
    fontSize: 15,
    textAlign: "center",
    margin: 20,
  },

  button: {
    fontSize: 10,
    textDecorationLine: 'underline',
  },

  image: {
    width: 200,
    height: 100,
  }
  
})