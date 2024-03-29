import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';


export default class DemonOnLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0
    };

    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  onLayoutChange(event) {
    const { width, height } = event.nativeEvent.layout;
    this.setState({ width, height });
  }

  render() {
    return (
      <View onLayout={this.onLayoutChange} style={styles.container}>
        <Text style={styles.text}>Width: {this.state.width}, Height: {this.state.height}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18
  }
});
