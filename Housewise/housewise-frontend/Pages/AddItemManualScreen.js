import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
import { GroceryContext } from "../Context/GroceryContext";

export default function AddItemManualScreen({ navigation }) {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [items, setItems] = useState([]);

  const { setGroceryItems } = useContext(GroceryContext);

  const handleAdd = () => {
    if (!itemName.trim()) {
      Alert.alert("Please enter an item name");
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      name: itemName.trim(),
      category: category.trim() || "Uncategorized",
    };

    setItems((prev) => [...prev, newItem]);
    setItemName("");
    setCategory("");
  };

  const handleSaveAndView = () => {
    setGroceryItems(items); // Save globally
    navigation.navigate("GroceryList"); // No need to pass items via route now
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemCard}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemCategory}>📦 {item.category}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manually Add Grocery Items</Text>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        style={styles.input}
        placeholder="Category (optional)"
        value={category}
        onChangeText={setCategory}
      />
      <Button title="Add Item" onPress={handleAdd} />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ marginTop: 16 }}
      />

      <Button
        title="Save & View List"
        onPress={handleSaveAndView}
        disabled={items.length === 0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "600", marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
  itemCard: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemName: { fontSize: 16, fontWeight: "bold" },
  itemCategory: { fontSize: 14, color: "#555" },
});
