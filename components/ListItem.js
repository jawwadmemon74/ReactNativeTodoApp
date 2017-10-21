import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
  import styles from '../styles.js';
  
  class ListItem extends React.Component {
    render() {
        // We are going to return a simple list item with just a title for now
        return (
          <View style={styles.listItem}>
              <TouchableHighlight onPress={this.props.onTaskCompletion}>
              <Image style={styles.listItemAction} source={ require('../assets/uncheck.png') } />
            </TouchableHighlight>
            <Text style={styles.listItemTitle}>{this.props.task.name}</Text>
            
           
          </View>
        );
      }
  }
  
  module.exports = ListItem;