import React, {Component} from 'react'
import {Animated} from 'react-native'

export default class Playground extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      bounceValue: new Animated.Value(0),
    }
  }

  render() {
    return (
        <Animated.Image
          source={{uri: 'https://www.maycur.com/images/iphone.png'}}
          style={{
            flex: 1,
            transform: [
              {scale: this.state.bounceValue},
            ]
          }}
          />
        )
  }

  componentDidMount() {
    this.state.bounceValue.setValue(1.5);
    Animated.spring(
        this.state.bounceValue,
        {toValue: 0.8,
          friction:1
        }
        ).start()
  }
}
