import { StyleSheet } from "react-native";
import { Image, type ImageSource } from 'expo-image';
const img = require('@/assets/images/placeHolderImage.jpg');

type Props = {
  imgSource: ImageSource;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
  return <Image source={imageSource} style={styles.image} />;
}


const styles = StyleSheet.create({
  image: {
    minWidth: 400,
    minHeight: 400,
  },
});