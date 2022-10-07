import React, {useState} from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import TaskInput from 'to-do-prototype/TaskInput.js';
import Task from 'to-do-prototype/Task.js';

//testing commits and git
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
          if (index === 0) { //if its the first task (based on index)
            return (
              <View key={index} style={styles.taskContainerFirst}>
                <Task index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
              </View>
            );
          }
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
  taskContainerFirst: { //different formatting for inital task
    marginTop: 135,
  },
  taskContainer: { 
    marginTop: 20,
  },
});