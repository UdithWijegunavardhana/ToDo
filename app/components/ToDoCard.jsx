import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const TodoItem = ({text, onDelete, onEdit}) => (
  <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
    <View style={styles.actions}>
      <TouchableOpacity
        style={[styles.button, styles.delete]}
        onPress={onDelete}>
        <Icon name="trash-2" size={18} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.edit]} onPress={onEdit}>
        <Icon name="edit-3" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    marginBottom: 5,
  },
  text: {fontSize: 14, marginBottom: 5},
  actions: {flexDirection: 'row', justifyContent: 'flex-end'},
  button: {
    padding: 8,
    borderRadius: 6,
    marginLeft: 10,
  },
  delete: {backgroundColor: '#ef5350'},
  edit: {backgroundColor: '#66bb6a'},
});

export default TodoItem;
