import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, FlatList, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const mockGroups = [
    {
      id: "1",
      name: "Family Group",
      members: 4,
      chores: 3,
      groceries: 2,
      expiryAlerts: 1,
    },
    {
      id: "2",
      name: "Apartment Mates",
      members: 3,
      chores: 1,
      groceries: 0,
      expiryAlerts: 0,
    },
  ];

  const renderGroupCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("GroupTabs", {
          groupId: item.id,
          groupName: item.name,
        })
      }
    >
      <Text style={styles.groupName}>{item.name}</Text>
      <Text style={styles.item}>👥 {item.members} members</Text>
      <Text style={styles.item}>
        ✅ {item.chores} chores • 🛒 {item.groceries} groceries
      </Text>
      <Text style={styles.item}>⏰ {item.expiryAlerts} expiry alerts</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your groups !</Text>
      <View>
        <FlatList
          data={mockGroups}
          keyExtractor={(item) => item.id}
          renderItem={renderGroupCard}
          contentContainerStyle={styles.list}
        />
      </View>
      <View>
        <Button title="Join a Group" />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  list: {
    paddingBottom: 24,
  },
  groupName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
  },
  item: {
    marginVertical: 10,
  },
});
