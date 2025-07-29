import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';

import {authSagaActions} from '../redux/sagas/AuthSaga';

const UnlockScreen = ({onUnlockSuccess}) => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');

  const handleUnlock = () => {
    if (password === 'AbcD') {
      Alert.alert('Success', 'Todo list unlocked!');
      // dispatch(authSagaActions.login());
      onUnlockSuccess();
    } else {
      Alert.alert('Error', 'Incorrect password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      <Text style={styles.label}>Enter Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="************"
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.button} onPress={handleUnlock}>
        <Text style={styles.buttonText}>Unlock</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UnlockScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#6ED6A5',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    width: '60%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
