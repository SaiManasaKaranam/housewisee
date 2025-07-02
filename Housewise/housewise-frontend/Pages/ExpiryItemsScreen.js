// Pages/Expiry/ExpiryItemsScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const mockItems = [
  { id: "1", name: "Milk", expiryDate: "2025-07-01" },
  { id: "2", name: "Eggs", expiryDate: "2025-06-28" },
  { id: "3", name: "Spinach", expiryDate: "2025-06-27" },
];

const getUrgencyColor = (expiryDate) => {
  const today = new Date();
  const expiry = new Date(expiryDate);
  const diff = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));

  if (diff <= 0) return "#f44336"; // red: expired
  if (diff <= 3) return "#ff9800"; // orange: expiring soon
  return "#4caf50"; // green: safe
};

export default function ExpiryItemsScreen() {
  const [items, setItems] = useState(mockItems);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.card,
        { borderLeftColor: getUrgencyColor(item.expiryDate) },
      ]}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.date}>🗓️ {item.expiryDate}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tracked Expiry Items</Text>

      {items.length === 0 ? (
        <Text>No items yet.</Text>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddExpiryItem")}
      >
        <Text style={styles.addText}>➕ Add Item</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  card: {
    padding: 12,
    backgroundColor: "#f9f9f9",
    borderLeftWidth: 6,
    borderRadius: 6,
    marginBottom: 12,
  },
  name: { fontSize: 16, fontWeight: "bold" },
  date: { fontSize: 14, color: "#555" },
  addButton: {
    marginTop: 16,
    padding: 12,
    backgroundColor: "#007bff",
    borderRadius: 8,
    alignItems: "center",
  },
  addText: {
    color: "#fff",
    fontSize: 16,
  },
});
