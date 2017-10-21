import React from 'react';
import { StyleSheet, Text, View, ListView, ToolbarAndroid  } from 'react-native';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  listView: {
    flex: 1,
  },
  listItem: {
    borderBottomColor: '#ccc',
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth: 1,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:20,
    paddingRight:20
  },
  listItemTitle: {
    // flex: 6,
    color: '#000',
    fontSize: 16,
  },
  listItemAction: {
    // flex: 1,
    width: 25,
    height: 25,
    marginRight: 15
  },
  navbar: {
    // alignItems: 'center',
    backgroundColor: '#FF3234',
    // justifyContent: '',
    // height: 64,
    // flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,

  },
  navbarTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: "700"
  },
  textEdit: {
      paddingBottom: 10,
      paddingLeft: 4, 
      fontSize: 16
  },
  textSubmit: {
      padding: 20
  }
})

export default styles;