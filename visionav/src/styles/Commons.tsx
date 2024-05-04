import { StyleSheet } from "react-native";

const Commons = StyleSheet.create({
	actionButton: {
		backgroundColor: "#F6F740",
		borderStyle: "solid",
		borderColor: "#000000",
		borderWidth: 4,
		borderRadius: 20,
		padding: 15,
		margin: 10,
		width: 305,
	},
	infoButton: {
		backgroundColor: "#EB8258",
		width: 140, 
		height: 140, 
		borderRadius: 20, 
		padding: 5,
		margin: 10
	},
	textInput: {
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
    },
	darkTextColor: {
        color: "#000000",
    },
	lightTextColor: {
        color: "#FFFFFF",
    },
	centerText: {
		textAlign: "center"
	},
	flexDirectionRow: {
        flexDirection: 'row',
        flexWrap: "wrap"
    },
	centredContainer: {
        alignContent: "center",
        justifyContent: "center",
    },
	defaultPadding: {
        padding: 30
    },
});

export default Commons;