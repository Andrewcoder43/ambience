import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import VolumeSlider from 'react-native-volume-slider';

class AudioComponent extends Component {
  volumeChange(value) {
    // Handle volume change
  }

  render() {
    return (
      <View>
        <VolumeSlider
          style={styles.slider}
          thumbSize={{ width: 8, height: 8 }}
          thumbTintColor="rgb(146,146,157)"
          minimumTrackTintColor="rgb(146,146,157)"
          maximumTrackTintColor="rgba(255,255,255, 0.1)"
          showsRouteButton={true}
          onValueChange={this.volumeChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slider: {
    // Add any custom styles for the slider
  },
});

export default AudioComponent;
