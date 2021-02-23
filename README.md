# Gyroscope animation effect for React Native

[![npm Version](https://img.shields.io/npm/v/react-native-gyroscope-animation.svg)](https://www.npmjs.com/package/react-native-gyroscope-animation) [![License](https://img.shields.io/npm/l/react-native-gyroscope-animation.svg)](https://www.npmjs.com/package/react-native-gyroscope-animation)

Gyroscope animation effect for React Native (iOS and Android)

This module is designed for easy implementation of interactive animation that responds to changing the position of the device in real time

## Installing (React Native >= 0.60.0)

Install `react-native-gyroscope-animation` (latest):

```
yarn add react-native-gyroscope-animation react-native-sensors
```

or

```
npm i --save react-native-gyroscope-animation react-native-sensors
```

## Usage


GyroscopeAnimation can be used in a declarative way:

```jsx
import React from 'react';
import GyroscopeAnimation from 'react-native-gyroscope-animation';
import Logo from './assets/images/logo.png';

export default class BasicExample extends React.Component {
  render() {
    return <GyroscopeAnimation><Image source={Logo} style={{width:200, height:200}} /></GyroscopeAnimation>;
  }
}
```

Changing animation parameters

```jsx
import React from 'react';
import GyroscopeAnimation from 'react-native-gyroscope-animation';
import Logo from './assets/images/logo.png';

export default class BasicExample extends React.Component {
  render() {
    return <GyroscopeAnimation angle={45} distance={50} perspective={250} ><Image source={Logo} style={{width:200, height:200}} /></GyroscopeAnimation>;
  }
}
```

## API

| Prop               | Description                                                                                                                                                                                                                                                                     | Default                                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **`style`**        | Style attributes for the view, as expected in a standard [`View`](https://facebook.github.io/react-native/docs/layout-props.html).                                                                                                                                              | _None_                                                                                                              |
| **`angle`**        | The maximum angle of deviation of the object when animating the rotation.                                                                                                                                                                                                       | `35`                                                                                                                |
| **`distance`**     | The Maximum movement of the object when animating the translate.                                                                                                                                                                                                                | `40`                                                                                                                |
| **`perspective`**  | The magnitude of the perspective when animating the object.                                                                                                                                                                                                                     | `250`                                                                                                               |
