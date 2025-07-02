import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { GroceryContext } from "../Context/GroceryContext";

export default function GroceryListScreen() {
  const { groceryItems } = useContext(GroceryContext);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.category}>📦 {item.category}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Grocery List</Text>
      {groceryItems.length === 0 ? (
        <Text>No items yet.</Text>
      ) : (
        <FlatList
          data={groceryItems}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "600", marginBottom: 16 },
  card: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: { fontSize: 16, fontWeight: "bold" },
  category: { fontSize: 14, color: "#666" },
});
