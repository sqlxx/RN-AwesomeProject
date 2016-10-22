/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator
} from 'react-native';
import MyScene from './MyScene'
import Playground from './Playground'
import BleedingEdgeApplication from './BleedingEdgeApplication'

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://dev.maycur.com/images/logo.png'
    }
    return (<View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around'}}>
        <Image source={pic} style={{height:100, width:200}} />
        <Blink text='A simple test' style={{height:100, width:200}}/>
        </View>
        )
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {display: true} 
    setInterval(() => {this.setState({display: !this.state.display})}, 1000)

  }

  render() {
    let text = this.state.display? this.props.text : ''

      return (<Text>{text}</Text>)
  }
}

class NavScene extends Component {
  render() {
    return (<Navigator initialRoute={{title:'initial title', index:0}}
        renderScene={(route, navigator) => <MyScene title={route.title} 
        onForward={()=> {
          const nextIndex = route.index + 1
          navigator.push({title:'title idx ' + nextIndex, index: nextIndex})
        }}
        onBack={()=>{
          if (route.index > 0) {
            navigator.pop()
          }
        }} />
        
        }
        />
        )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => BleedingEdgeApplication);
