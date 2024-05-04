import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Commons from '../../styles/Commons';

type buttonProps = {
	text: string,
	onPress: () => void
}

const ActionButton = (prop: buttonProps) => {
	return (
		<TouchableOpacity style={[Commons.centredContainer, Commons.actionButton]} onPress={prop.onPress}>
			<Text style={[Commons.darkTextColor, Commons.centerText, {fontWeight: "bold", fontSize: 30}]}>{prop.text}</Text>
		</TouchableOpacity>
	);
}

export default ActionButton;