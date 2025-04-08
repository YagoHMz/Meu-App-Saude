import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import { Image } from "react-native";
import ImageViewer from '../components/ImageViewer';
import Button from "../components/button";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
const img = require('@/assets/images/placeHolderImage.jpg');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('Você não selecionou nenhuma imagem...');
    }
  };

  return (
    <View style={styles.container}>
      <ImageViewer imgSource={img} selectedImage={selectedImage}/>
      <Text style={styles.paragrafo}>Plantas ou vegetais são organismos vivos que se destacam por serem multicelulares, eucariontes, e que realizam fotossíntese em sua grande maioria. Plantas têm muitas diferenças de uma espécie para outra, porém todas possuem mais de uma célula e células eucariontes.</Text>
      <Button theme="primary" label="Alterar Imagem" onPress={pickImageAsync}/>
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
    width:599
  },

  button: {
    fontSize: 10,
    textDecorationLine: 'underline',
  },
  
})