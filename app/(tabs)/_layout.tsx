import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#C5F9BC',
        },
        tabBarStyle : {
          backgroundColor: '#C5F9BC',
        }
      }}
    >
      <Tabs.Screen name="index" options={{
        title: 'Saúde Mais',
        tabBarIcon: ({color, focused}) => (
          <Ionicons name={focused ? 'home' : 'home-outline' } color={color} size = {20}/>
        )
      }} 
      />
      <Tabs.Screen name="about" options={{
        title: 'About',
        tabBarIcon: ({color, focused}) => (
          <Ionicons name={focused ? 'game-controller' : 'game-controller-outline'} color={color} size = {20}/>
        )
      }} 
      />

    <Tabs.Screen name="toDoList" options={{
        title: 'To Do List',
        tabBarIcon: ({color, focused}) => (
          <Ionicons name={focused ? 'list-sharp' : 'list-outline'} color={color} size = {20}/>
        )
      }} 
      />
    </Tabs>
  );
}
