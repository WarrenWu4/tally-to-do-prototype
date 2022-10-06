import React, {useState} from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import TaskInput from 'to-do-prototype/TaskInput.js';
import Task from 'to-do-prototype/Task.js';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <Task index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
            </View>
          );
        })
      }
      </ScrollView>
      <TaskInput addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});