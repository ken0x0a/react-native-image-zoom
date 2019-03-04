import * as React from 'react';
import { Image, Dimensions } from 'react-native';
import { SplashScreen } from 'expo';
import ImageZoom from './built';

const img = require('./file_1080.jpg');
const { width, height } = Dimensions.get('window');

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <ImageZoom
        cropWidth={width}
        cropHeight={height}
        imageWidth={width}
        imageHeight={height}
        // enableSwipeDown={true}
      >
        <Image
          enableHorizontalBounce={true}
          style={{
            width: width,
            height: height
          }}
          source={img}
        />
      </ImageZoom>
    );
  }
}
