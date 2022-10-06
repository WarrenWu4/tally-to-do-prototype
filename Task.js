import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default Task = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.indexContainer}>
                <Text style={styles.index}>{props.index}</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{props.task}</Text>
                <TouchableOpacity onPress={() => props.deleteTask()}>
                    <MaterialIcons style={styles.delete} name="delete" size={18} color='#000' />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    indexContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        borderColor: '#000000',
        borderWidth: 2,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    index: {
        color: '#000000',
        fontSize: 20,
    },
    taskContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        borderColor: '#000000',
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50,
    },
    task: {
        color: '#000000',
        width: '90%',
        fontSize: 16,
    },
    delete: {
        marginLeft: 10,
    },
});