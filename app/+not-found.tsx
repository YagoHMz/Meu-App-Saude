import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from 'expo-router';

export default function Index() {
  return (
    <>
    <Stack.Screen options={{title: 'Página não Encontrada!'}}></Stack.Screen>
    <View style={styles.container}>
      <Link href="/" style={styles.button}>
        Home Screen
      </Link>
    </View>
    </>
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
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
  }
  
})