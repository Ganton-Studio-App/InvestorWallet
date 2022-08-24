import { signIn } from '@actions';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import AuthForm from '../components/AuthForm';

const LoginScreen = (props) => {
  const { container } = styles;
  const { signIn } = props;
  return (
    <ScrollView
      style={container}
      contentContainerStyle={container}
      showsVerticalScrollIndicator={false}>
      <AuthForm
        variant="register"
        onSubmit={() => {
          console.log('submit2');
          signIn();
        }}
      />
    </ScrollView>
  );
};

const mapStateToProps = (state: { auth: { pending: any; token: any } }) => ({
  pending: state.auth.pending,

  token: state.auth.token,
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
// export default LoginScreen;
export default connect(mapStateToProps, { signIn })(LoginScreen);
