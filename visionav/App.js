// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/view/HomeView';

export default function App() {
	// const Stack = createNativeStackNavigator();
	return (
		// <NavigationContainer>
		// 	<Stack.Navigator initialRouteName="Home">
		// 		<Stack.Screen name="Home" component={Home} />
		// 		<Stack.Screen name="Scanner" component={Scanner} />
		// 	</Stack.Navigator>
		// </NavigationContainer>
		<Home/>
	);
}


