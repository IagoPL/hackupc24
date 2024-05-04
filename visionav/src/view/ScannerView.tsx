import { useRef } from "react";
import { Camera } from 'expo-camera';
import { View } from "react-native";

const Scanner = ({ navigation }) => {
	const cameraRef = useRef(null);
	const startScanning = async () => {
		if (cameraRef.current) {

		}
	}
	return (
		<View style={{flex: 1}}>
			<Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} ref={cameraRef}/>
		</View>
	);
}

export default Scanner;