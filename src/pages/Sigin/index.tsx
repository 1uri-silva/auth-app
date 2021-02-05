import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

import { useAuth } from '../../Contexts';

const Sigin: React.FC = () => {
  const { SignIn } = useAuth();

  function hadleLogIn(): void {
    SignIn();
  }
  return (
    <View style={styles.container}>
      <Button title="Log In" onPress={hadleLogIn} />
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

export default Sigin;
