import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

import { useAuth } from '../../Contexts';

const Dashboard: React.FC = () => {
  const { SignOut, user } = useAuth();

  function hadleLogOut(): void {
    SignOut();
  }
  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
      <Button title="Log Out" onPress={hadleLogOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;
