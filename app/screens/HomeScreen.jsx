import React, {useState} from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';

import NoteInput from '../components/NoteInput';
import QuoteBox from '../components/QuoteBox';
import TodoItem from '../components/ToDoCard';
import colors from '../theme/Colors';

const HomeScreen = () => {
  const [note, setNote] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {};

  const handleDelete = () => {};

  const handleEdit = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, padding: 20}}>
        <NoteInput value={note} onChangeText={setNote} onAdd={handleAdd} />
        <QuoteBox quote="Happiness is the absence of suffering..." />
        <ScrollView style={{marginBottom: 60}}>
          {todos.map((item, idx) => (
            <TodoItem
              key={idx}
              text={item}
              onDelete={() => handleDelete(idx)}
              onEdit={() => handleEdit(idx)}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
});

export default HomeScreen;
