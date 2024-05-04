import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/view/HomeView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scanner from './src/view/ScannerView';

export default function App() {
	Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
		 	<Stack.Navigator initialRouteName="Home">
		 		<Stack.Screen name="Home" component={Home} />
		 		<Stack.Screen name="Scanner" component={Scanner} />
		 	</Stack.Navigator>
		</NavigationContainer>
	);
}

