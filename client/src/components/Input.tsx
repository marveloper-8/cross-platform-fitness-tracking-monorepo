import { FC } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const Input: FC<InputProps> = ({ value, onChangeText, placeholder, secureTextEntry}) => (
  <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
  />
)

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10
  }
})

export default Input;