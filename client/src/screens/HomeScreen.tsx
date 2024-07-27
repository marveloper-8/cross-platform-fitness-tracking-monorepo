import { FC } from "react";
import { StyleSheet, Text, View } from "react-native"

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Fitness Tracker</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default HomeScreen;