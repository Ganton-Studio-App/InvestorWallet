import React, { FC } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

type BlockProps = {
	value?: string;
	variant?: string;
};
export const Block: FC<BlockProps> = ({ children, variant }) => {
	return (
		<SafeAreaView style={[styles.container, styles[variant]]}>
			{children}
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 20,
	},
	verticalCenter: {
		justifyContent: 'center',
	},
});
export default Block;
