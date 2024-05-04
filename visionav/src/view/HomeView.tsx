import { Text, View } from "react-native";
import Commons from "../styles/Commons";
import React from "react";
import SquareButton from "./components/SquareButton";
import ActionButton from "./components/ActionButton";

const Home = ({ navigation }) => {
	return (
		<View style={{flex: 1, justifyContent: 'center'}}>
			<View style={Commons.defaultPadding}>
				<View style={Commons.flexDirectionRow}>
					<SquareButton accText="Location" icon="location" onPress={() => {}}/>
					<SquareButton accText="Destination" icon="airplane" onPress={() => {}}/>
				</View>
				<View style={Commons.centredContainer}>
					{/* <ActionButton text="START" onPress={navigation.navigate("scanner")}/> */}
					<ActionButton text="START" onPress={() => {}}/>
				</View>
			</View>
		</View>
		
	);
}

export default Home;