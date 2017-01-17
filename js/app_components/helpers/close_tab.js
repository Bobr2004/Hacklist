import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import Route from '../../enums/route';

export default class Spinner extends React.Component {
  constructor() {
    super();

    this.onPressCallback = this.onPressCallback.bind(this);
  }

  render() {
    return (
      <View style={styles.topbar}>
          <TouchableOpacity onPress={this.onPressCallback}>
              <Text style={styles.topbarText}>Закрыть</Text>
          </TouchableOpacity>
      </View>
    );
  }

  onPressCallback() {
    this.props.navigator.resetTo({
        id: Route.chooseAuth
    });
  }
}

const styles = StyleSheet.create({
  topbar: {
    height: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 10
  },
  topbarText: {
    color: 'white'
  }
});
