import React from 'react';
import { StyleSheet, Text, TextInput, View, ListView, ToolbarAndroid, KeyboardAvoidingView, Button  } from 'react-native';
import * as firebase from 'firebase';
import ListItem from './components/ListItem';
import FloatingActionButton from 'react-native-action-button';
import styles from './styles.js';
const firebaseConfig = {
  apiKey: "AIzaSyDrWF0WiDC1gNJ_96zMPa8FTvu7cna9sh4",
  authDomain: "todoapp-rn.firebaseapp.com",
  databaseURL: "https://todoapp-rn.firebaseio.com",
  projectId: "todoapp-rn",
  storageBucket: "todoapp-rn.appspot.com",
  messagingSenderId: "68573548018"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.tasksRef = firebaseApp.database().ref();
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: dataSource,
      newTask: ""
    };
  }
  
  componentDidMount() {
    // start listening for firebase updates
    this.listenForTasks(this.tasksRef);
  }
  
  render() {
    
    
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.navbar}>
            <Text style={styles.navbarTitle}>What todo!</Text>
          </View>
          <ListView
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={this._renderItem.bind(this)}
          style={styles.listView}/>
        <TextInput
          value={this.state.newTask}
          style={styles.textEdit}
          onChangeText={(text) => this.setState({newTask: text})}
          placeholder="New Task"
        />
        <Button
  onPress={this._addTask.bind(this)}
  title="Add!"
  color="#FF3234"
  style={styles.textSubmit}
  accessibilityLabel="Add your todo"
/>
        {/* <Button 
         
          
          onPress= value="Add"/> */}
      </KeyboardAvoidingView>
    );
  }
  _renderItem(task) {
    
    // a method for building each list item
    const onTaskCompletion = () => {
      // removes the item from the list
      this.tasksRef.child(task._key).remove();
      alert('Congrats! You have completed your task!')
    };
    return (
      <ListItem task={task} onTaskCompletion={onTaskCompletion} />
    );
  }
  _addTask() {
    if (this.state.newTask === "") {
      return;
    }
    this.tasksRef.push({ name: this.state.newTask});
    this.setState({newTask: ""});
  }
  listenForTasks(tasksRef) {
    tasksRef.on('value', (dataSnapshot) => {
      // transform the children to an array
      var tasks = [];
      dataSnapshot.forEach((child) => {
        tasks.push({
          name: child.val().name,
          _key: child.key
        });
      });

      // Update the state with the new tasks
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(tasks)
      });
    });
  }
  
}
