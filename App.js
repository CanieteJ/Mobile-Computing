import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const onPress = () => {
    if (text.trim()) { 
      setItems([...items, text]); 
      setText(''); 
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container2}>
        <Text style={styles.text}>To-Do List</Text>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Add To Do"
        />
        <View style={{ marginVertical: 20 }}>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>Add to List</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />

        <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <View style={styles.container3}>
            <Text key={index} style={styles.item}>
              {item}
            </Text>
            <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(index)}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
          
        )}
          keyExtractor={(_, index) => index.toString()}
          style={styles.list}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  container2: {
    backgroundColor: '#f0f1f5',
    width: 350,
    padding: 20,
    marginTop: 100,
    alignItems: 'center',
    
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },

  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },

  divider: {
    backgroundColor: 'black',
    height: 1,
    alignSelf: 'stretch',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: -10,
  },

  list: {
    width: 350,
    backgroundColor: '#f0f1f5',
  },

  item: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
  },

  removeButton: {
    backgroundColor: '#ff6b6b',
    padding: 5,
    borderRadius: 5,
  },

  removeButtonText: {
    color: '#fff',
    fontSize: 12,
  },

  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    borderColor: '#ccc',
  },
});
