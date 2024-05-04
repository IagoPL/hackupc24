import React, { ComponentProps } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Commons from '../../styles/Commons';
import Ionicons from '@expo/vector-icons/Ionicons';

type buttonProps = {
	icon: ComponentProps<typeof Ionicons>['name'],
	accText: string,
	onPress: () => void
}

const SquareButton = (prop: buttonProps) => {
	return (
		<TouchableOpacity style={[Commons.centredContainer, Commons.infoButton]} onPress={prop.onPress}>
			<Ionicons style={{alignSelf: "center"}} name={prop.icon} size={60} accessible={true} accessibilityLabel={prop.accText} color="white" />
		</TouchableOpacity>
	);
}

export default SquareButton;