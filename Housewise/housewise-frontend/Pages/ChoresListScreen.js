import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";

const ChoresListScreen = ({ navigation }) => {
  const [chores, setChores] = useState([
    { id: "1", task: "Do the dishes", done: false },
    { id: "2", task: "Take out trash", done: true },
    { id: "3", task: "Laundry", done: false },
  ]);

  const toggleChore = (id) => {
    setChores((prev) =>
      prev.map((c) => (c.id === id ? { ...c, done: !c.done } : c))
    );
  };

  const renderChore = ({ item }) => (
    <TouchableOpacity
      style={[styles.choreItem, item.done && styles.done]}
      onPress={() => toggleChore(item.id)}
    >
      <Text style={styles.choreText}>{item.task}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chores</Text>
      <FlatList
        data={chores}
        keyExtractor={(item) => item.id}
        renderItem={renderChore}
      />
      <Button
        title="Add Chore"
        onPress={() => navigation.navigate("AddChore")}
      />
    </View>
  );
};

export default ChoresListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  choreItem: {
    padding: 16,
    marginBottom: 10,
    backgroundColor: "#eee",
    borderRadius: 8,
  },
  done: {
    backgroundColor: "#c0ffc0",
  },
  choreText: {
    fontSize: 16,
  },
});
