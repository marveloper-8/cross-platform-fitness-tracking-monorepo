import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type Activity = {
  type: string;
  duration: number;
  date: string;
}

interface ActivityItemProps {
  activity: Activity;
}

const ActivityItem: FC<ActivityItemProps> = ({activity}) => (
  <View style={styles.container}>
    <Text style={styles.type}>{activity.type}</Text>
    <Text style={styles.duration}>{activity.duration} minutes</Text>
    <Text style={styles.date}>{new Date(activity.date).toLocaleDateString()}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  type: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  duration: {
    fontSize: 16,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
})

export default ActivityItem