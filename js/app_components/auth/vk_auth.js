import React from 'react';
import {
  WebView,
  AsyncStorage
} from 'react-native';

import Environment from '../../environment/environment';
import AuthUtils from '../../util/auth_utils'

export default class VkAuthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client_token: AuthUtils.generateUID()
    }
  }

  render() {
    return (
      // TODO: back button
      <WebView
        source={{uri: buildUri(this.state.client_token)}}
        onNavigationStateChange={
          onNavigationStateChangeCallback.bind(this)
        }
        startInLoadingState={true}
        contentInset={{top: 40, left: 0, bottom: 0, right: 0}}
      />
    );
  }
}

function buildUri(client_token) {
  return Environment.vkOauth + 'state=' + client_token;
}

function onNavigationStateChangeCallback(state) {
  const redirect = state.url.search('code=') !== -1;
  if (redirect) {
    AsyncStorage.setItem(
      'client_token', JSON.stringify(this.state.client_token)
    );
    this.props.navigator.resetTo({
      id: 'main'
    });
  }
}
