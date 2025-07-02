import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddChoreScreen = ({ navigation }) => {
  const [choreName, setChoreName] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [recurrence, setRecurrence] = useState("");

  const handleSubmit = () => {
    if (!choreName) {
      Alert.alert("Please enter a chore name.");
      return;
    }

    // You can post this to backend here

    Alert.alert(
      "Chore Added!",
      `${choreName} is due on ${dueDate.toDateString()}`
    );
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Chore Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Clean the bathroom"
        value={choreName}
        onChangeText={setChoreName}
      />

      <Text style={styles.label}>Due Date</Text>
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={styles.dateButton}
      >
        <Text>{dueDate.toDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={dueDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || dueDate;
            setShowDatePicker(false);
            setDueDate(currentDate);
          }}
        />
      )}

      <Text style={styles.label}>Recurrence</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Daily, Weekly"
        value={recurrence}
        onChangeText={setRecurrence}
      />

      <Button title="Add Chore" onPress={handleSubmit} />
    </View>
  );
};

export default AddChoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginTop: 8,
    borderRadius: 8,
  },
  dateButton: {
    padding: 12,
    backgroundColor: "#eee",
    borderRadius: 8,
    marginTop: 8,
  },
});
