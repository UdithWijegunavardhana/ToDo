import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {quoteSagaActions} from '../redux/sagas/QuoteSaga';
import NoteInput from '../components/NoteInput';
import QuoteBox from '../components/QuoteBox';
import TodoItem from '../components/ToDoCard';
import colors from '../theme/Colors';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {data: quoteData, loading, error} = useSelector(state => state.quote);

  const [note, setNote] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    dispatch(quoteSagaActions.fetchQuoteRequest());
  }, [dispatch]);

  const handleAdd = () => {
    if (note.trim()) {
      setTodos([...todos, note]);
      setNote('');
      navigation.navigate('Todo', {
        todos,
        onDelete: handleDelete,
        onEdit: handleEdit,
      });
    }
  };

  const handleDelete = index => {
    const updated = [...todos];
    updated.splice(index, 1);
    setTodos(updated);
  };

  const handleEdit = index => {
    setNote(todos[index]);
    handleDelete(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, padding: 20}}>
        <NoteInput value={note} onChangeText={setNote} onAdd={handleAdd} />
        <QuoteBox
          quote={
            loading
              ? 'Loading...'
              : error
              ? 'Failed to load quote.'
              : quoteData?.quote || 'No quote available'
          }
        />
        <TouchableOpacity
          style={styles.viewTodosButton}
          onPress={() => navigation.navigate('Todo')}>
          <Text style={styles.viewTodosText}>View Todos</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  viewTodosButton: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#222',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  viewTodosText: {
    color: 'white',
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalSheet: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '75%',
  },
  modalHeader: {
    width: 60,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 15,
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    marginVertical: 20,
  },
  closeText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#007AFF',
    fontWeight: '600',
  },
});

export default HomeScreen;
