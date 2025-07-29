import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const NoteInput = ({value, onChangeText, onAdd}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Add Notes..."
      value={value}
      onChangeText={onChangeText}
      multiline
    />
    <TouchableOpacity style={styles.button} onPress={onAdd}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {marginVertical: 10},
  input: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 8,
    height: 80,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#90d7af',
    padding: 12,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 8,
  },
  buttonText: {color: '#fff', fontWeight: 'bold'},
});

export default NoteInput;
