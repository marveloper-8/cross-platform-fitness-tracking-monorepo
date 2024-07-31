import { FC } from "react";
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
}

const Button: FC<ButtonProps> = ({onPress, title}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16
  }
})

export default Button