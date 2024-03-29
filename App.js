import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

const DEFAULT_STATE = 'Not Connected'

export default class App extends React.Component {
  state = {
    status: DEFAULT_STATE
  }

  connectToTor() {
    this.setState({status: 'Connected!'})
  }

  disconnect() {
    this.setState({status: DEFAULT_STATE})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Status: {this.state.status}</Text>
        <View style={styles.actions}>
          <Button onPress={() => this.connectToTor()} title='Connect'/>
          <Button onPress={() => this.disconnect()} title='Disconnect'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    marginTop: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
