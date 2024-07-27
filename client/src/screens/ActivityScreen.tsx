import axios from "axios"
import { useEffect, useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"

interface Activity {
  id: string;
  name: string;
  duration: string;
}

const ActivityScreen = () => {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    fetchActivities();
  })

  const fetchActivities = async () => {
    try {
      const response = await axios.get('http://localhost:3000/activities');
      setActivities(response.data);
    } catch(error){
      console.error('Error fetching activities:', error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Activities</Text>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.activityItem}>
            <Text>{item.name}</Text>
            <Text>{item.duration}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
})

export default ActivityScreen;