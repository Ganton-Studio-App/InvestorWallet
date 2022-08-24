import React from 'react';

import { ScrollView, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

const DashboardScreen = () => {
  const { container } = styles;
  return (
    <ScrollView
      style={container}
      contentContainerStyle={container}
      showsVerticalScrollIndicator={false}>
      <Text>test</Text>
    </ScrollView>
  );
};

const mapStateToProps = (state: { auth: { pending: any; token: any } }) => ({
  pending: state.auth.pending,

  token: state.auth.token,
});
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default connect(mapStateToProps, {})(DashboardScreen);
