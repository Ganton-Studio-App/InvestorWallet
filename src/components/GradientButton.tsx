import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type ButtonProps = {
	value: string;
	onPress: () => void;
};
export const GradientButton: React.FC<ButtonProps> = ({ value, onPress }) => {
	return (
		<TouchableOpacity style={{ height: 45 }} onPress={onPress}>
			<LinearGradient
				colors={['#a85be7', '#826bed', '#4b84f8']}
				style={styles.linearGradient}
				start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 1 }}
			>
				<Text style={styles.buttonText}>{value}</Text>
			</LinearGradient>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	linearGradient: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5,
	},
	buttonText: {
		fontSize: 18,
		fontFamily: 'Gill Sans',
		textAlign: 'center',
		margin: 10,
		color: '#ffffff',
		backgroundColor: 'transparent',
	},
});
export default GradientButton;
