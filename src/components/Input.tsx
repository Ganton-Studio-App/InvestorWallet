import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Shadow } from 'react-native-shadow-2';
type InputProps = {
	value?: string;
	label?: string;
	placeholder?: string;
	rightElement: FC;
	onChangeText: () => void;
};
export const Input = ({
	value,
	label,
	placeholder,
	rightElement,
	onChangeText,
}: InputProps) => {
	return (
		<Shadow
			viewStyle={styles.shadowStyle}
			sides={['bottom', 'left', 'right', 'top']}
			offset={[0, 3]}
			radius={5}
			distance={6}
			startColor={'rgba(235,235,235,0.65)'}
			finalColor={'#fff'}
			//   corners={["bottomLeft", "bottomRight"]}
		>
			<TextInput
				value={value}
				// mode="outlined"
				label={label}
				placeholder={placeholder}
				right={rightElement}
				style={{ backgroundColor: 'white', borderRadius: 0 }}
				onChangeText={onChangeText}
				activeUnderlineColor={'#826bed'}
				outlineColor={'#fff'}
			/>
		</Shadow>
	);
};
const styles = StyleSheet.create({
	shadowStyle: {
		// height: 70,
		width: '100%',
		paddingHorizontal: 3,
	},
});
export default Input;
