import React, {Component} from 'react'
import {NavigationExperimental, PixelRatio, ScrollView, StyleSheet, Text, TouchableHighlight} from 'react-native'

const {CardStack: NavigationCardStack,
       StateUtils: NavigationStateUtils} = NavigationExperimental

export default class BleedingEdgeApplication extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {navigationState: {
      index :0,
      routes: [{key: 'My Initial Scene'}]
    }}

    this._onNavigationChange = this._onNavigationChange.bind(this)
  }

  _onNavigationChange(type) {
    let {navigationState} = this.state;

    switch (type) {
      case 'push':
        const route = {key: 'Route-' + Date.now()}
        navigationState = NavigationStateUtils.push(navigationState, route)
        break;
      case 'pop':
        navigationState = NavigationStateUtils.pop(navigationState);
        break;
    }

    if (this.state.navigationState !== navigationState) {
      this.setState({navigationState})
    }
  }

  render() {
    return (
        <MyVerySimpleNavigator
          navigationState={this.state.navigationState}
          onNavigationChange={this._onNavigationChange}
          onExit={this._exit} />
        )
  }
}

class TappableRow extends Component {
  render() {
    return (
        <TouchableHighlight style={styles.row}
          underlayColor="#D0D0D0"
          onPress={this.props.onPress}>
          <Text style={styles.buttonText}>
            {this.props.text}
          </Text>
        </TouchableHighlight>
        )
  }
}

class MyVeryComplexScene extends Component {
  render() {
    return (
        <ScrollView style={styles.crollView}>
          <Text style={styles.row}>
            Route: {this.props.route.key}
          </Text>

          <TappableRow text="Tap me to next Scene" onPress={this.props.onPushRoute}/>
          <TappableRow text="Tap me to go back" onPress={this.props.onPopRoute}/>
        </ScrollView>)
  }
}

class MyVerySimpleNavigator extends Component {
  constructor(props, context) {
    super(props, context);

    this._onPushRoute = this.props.onNavigationChange.bind(null, 'push');
    this._onPopRoute = this.props.onNavigationChange.bind(null, 'pop');
    this._renderScene = this._renderScene.bind(this);
  }

  render() {
    return (
        <NavigationCardStack
          onNavigationBack={this._onPopRoute}
          navigationState={this.props.navigationState}
          renderScene={this._renderScene}
          style={styles.navigator}
          />
        )
  }

  _renderScene(sceneProps) {
    return(
        <MyVeryComplexScene
          route={sceneProps.scene.route}
          onPushRoute={this._onPushRoute}
          onPopRoute={this._onPopRoute}
          onExit={this.props.onExit}
          />
        )
  }
}

const styles = StyleSheet.create({
    navigator: {
      flex: 1,
    },
    scrollView: {
      marginTop: 64
    },
    row: {
      padding: 15,
      backgroundColor: 'white',
      borderBottomWidth: 1 / PixelRatio.get(),
      borderBottomColor: '#CDCDCD',
    },
    rowText: {
      fontSize: 17,
    },
    buttonText: {
      fontSize: 17,
      fontWeight: '500',
    },
});
