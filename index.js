import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { gyroscope, setUpdateIntervalForType, SensorTypes } from "react-native-sensors";

const GyroscopeAnimation = ({ style, children, angle = 30, distance = 40, perspective = 250 }) => {
  const translate = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current
  useEffect(() => {
    let last_x = [0], last_y = [0];
    setUpdateIntervalForType(SensorTypes.gyroscope, 16)
    let Listener = gyroscope.subscribe(({ x, y }) => {
      last_x.push(Math.round(x / 0.0025))
      last_y.push(Math.round(y / 0.0025))
      if (last_x.length > 10) last_x.shift()
      if (last_y.length > 10) last_y.shift()
      translate.setValue({
        x: last_x.reduce((a, b) => a + b) / last_x.length,
        y: last_y.reduce((a, b) => a + b) / last_y.length
      })
    });
    return () => {
      try { Listener.unsubscribe() } catch (err) { console.log("Gyroscope Animation unsubscribe Error: ", err) }
    }
  }, [])
  const transform = [
    { rotateX: translate.x.interpolate({ inputRange: [-3000, 3000], outputRange: [`-${angle}deg`, `${angle}deg`] }) },
    { rotateY: translate.y.interpolate({ inputRange: [-3000, 3000], outputRange: [`${angle}deg`, `-${angle}deg`] }) },
    { translateX: translate.y.interpolate({ inputRange: [-3000, 3000], outputRange: [-distance, distance] }) },
    { translateY: translate.x.interpolate({ inputRange: [-3000, 3000], outputRange: [distance, -distance] }) },
    { perspective }
  ]
  return <Animated.View style={[style, { transform }]}>{children}</Animated.View>
}

export default GyroscopeAnimation