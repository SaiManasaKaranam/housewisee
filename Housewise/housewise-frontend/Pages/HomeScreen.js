import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, FlatList, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";

const API_BASE_URL = "http://localhost:7071/api";

const HomeScreen = () => {
  const navigation = useNavigation();

  const fetchChores = async () => {
    console.log("📡 Fetching chores...");
    try {
      const response = await fetch(
        "http://localhost:7071/api/chores/list?groupId=testgroup"
      );

      const text = await response.text(); // <-- Parse raw text first for debugging
      console.log("📥 Raw text response:", text);

      const data = JSON.parse(text); // <-- Now safely parse it
      console.log("✅ Parsed JSON chores:", data);

      // You can now use `data` to update state
      // setChores(data);
    } catch (error) {
      console.error("❌ Error fetching chores:", error);
      Alert.alert("Fetch Error", error.message);
    }
  };

  useEffect(() => {
    fetchChores();
  }, []);

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
