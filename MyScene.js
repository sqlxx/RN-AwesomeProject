import React, {Component, PropTypes} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

export default class MyScene extends Component{
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }

  render() {
    return (
    <View style={{flex:1}}>
      <Text style={{flex:1}}>Current Scene {this.props.title} </Text>
      <TouchableHighlight style={{flex:1}} onPress={this.props.onForward} >
        <Text>Press to forward</Text>
      </TouchableHighlight>
      <TouchableHighlight style={{flex:1}} onPress={this.props.onBack} >
        <Text>Press to backward</Text>
      </TouchableHighlight>
    </View>
    )
  }
}
