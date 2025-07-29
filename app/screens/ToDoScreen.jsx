import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import TodoItem from '../components/ToDoCard';

const TodoScreen = () => {
  const route = useRoute();
  const {todos = [], onDelete, onEdit} = route.params || {};

  return (
    <View style={{flex: 1, padding: 20}}>
      <Text style={styles.heading}>Todo Screen</Text>
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <TodoItem
            text={item}
            onDelete={() => onDelete(index)}
            onEdit={() => onEdit(index)}
          />
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No todos yet</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  emptyText: {
    color: '#666',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default TodoScreen;
