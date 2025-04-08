import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light"/>

      <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#C5F9BC',
        }
      }}
      >
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        <Stack.Screen name="+not-found" options={{}}/>
      </Stack>
    </>
  );
}
