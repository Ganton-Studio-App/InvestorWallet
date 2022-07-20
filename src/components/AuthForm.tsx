/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import { Input, Block, GradientButton } from '@components';

interface AuthFormProps {
	variant: string;
	onSubmit: () => void;
}
export const AuthForm = ({ variant, onSubmit }: AuthFormProps) => {
	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			onSubmit={(val) => console.log(val)}
		>
			{(props) => (
				<Block variant={'verticalCenter'}>
					{variant === 'register' && (
						<>
							<Input
								placeholder={'e-mail'}
								value={props.values.email}
								onChangeText={props.handleChange('email')}
							/>
							<View style={{ height: 15 }} />
						</>
					)}
					<Input
						placeholder={'e-mail'}
						value={props.values.email}
						onChangeText={props.handleChange('email')}
					/>
					<View style={{ height: 15 }} />
					{variant !== 'forgot' && (
						<>
							<Input
								placeholder={'password'}
								value={props.values.password}
								onChangeText={props.handleChange('password')}
							/>
							<View style={{ height: 45 }} />
						</>
					)}
					<GradientButton onPress={onSubmit} title={'Sing in'} />
				</Block>
			)}
		</Formik>
	);
};
export default AuthForm;
