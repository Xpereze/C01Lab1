import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
const AddTask = ({ onAddTask }) => {
    const [initialValue, setInitialValue] = useState('');

    const handleAddTask = () => {
        if (initialValue.trim() !== '') {
            onAddTask(initialValue);
            setInitialValue('');
        }
    };

    return (
        <View style={styles.addTask}>
            <TextInput
                style={styles.input}
                placeholder="Enter your new todo"
                value={initialValue}
                onChangeText={(text) => setInitialValue(text)}
                keyboardType="ascii-capable"
                returnKeyType="done"
            />
            <Button title="Add Todo" onPress={handleAddTask} />
        </View>
    );
};


const styles = StyleSheet.create({
    addTask: {
        margin: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});



export default AddTask;