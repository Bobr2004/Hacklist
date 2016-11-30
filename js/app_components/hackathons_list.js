import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  ListView
} from 'react-native';

import HackathonRow from './hackathon_row.js';

var ds;

export default class HackathonsList extends React.Component {
  constructor(props) {
    super(props);

    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this._dataSource = this._dataSource.bind(this);
  }

  _renderRowView(rowData) {
    return (
      <HackathonRow rowData={rowData}/>
    );
  }

  _dataSource() {
    // data comes from main_page component.
    return ds.cloneWithRows(this.props.hackathonsToDisplay)
  }

  render() {
    return (
      <View>
        <View style={styles.navBar}>
          <Text style={styles.navBarTitle}>Hacklist</Text>
        </View>

        <ListView
          dataSource={this._dataSource()}
          renderRow={this._renderRowView}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    height: 70,
    backgroundColor: '#007aff',

    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarTitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 12,
  }
});