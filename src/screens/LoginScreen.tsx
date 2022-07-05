import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {signIn} from '@actions';

const LoginScreen = props => {
  const {container} = styles;
  return (
    <ScrollView
      style={container}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'always'}>
      <Text>Login</Text>
    </ScrollView>
  );
};

LoginScreen.propTypes = {
  pending: PropTypes.bool.isRequired,
};

const mapStateToProps = (state: {auth: {pending: any; token: any}}) => ({
  pending: state.auth.pending,

  token: state.auth.token,
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(mapStateToProps, {signIn})(LoginScreen);
