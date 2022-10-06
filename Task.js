import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function MyCheckbox({
    checked,
    onChange,
}) {
    function onCheckmarkPress() {
        onChange(!checked);
    }

    return(
        <Pressable style={[styles.checkboxBase, checked && styles.checkboxChecked]} onPress={onCheckmarkPress}>
            {checked && <Ionicons name='checkmark' size={24} color='white'/>}
        </Pressable>
    );
}

export default Task = (props) => {
    const [checked, onChange] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.indexContainer}>
                <MyCheckbox checked={checked} onChange={onChange}/>
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
        flexDirection: 'row', //puts index box and text box into single row
        marginHorizontal: 20,
    },
    indexContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        borderColor: '#000000',
        borderWidth: 0,
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
        flexDirection: 'row', //puts text and delete icon in same row
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
    checkboxBase: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'transparent',
    },
    checkboxChecked: {
        backgroundColor: '#000000',
    }
});