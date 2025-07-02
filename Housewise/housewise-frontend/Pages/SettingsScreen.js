// Pages/SettingsScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
} from "react-native";

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [choreReminders, setChoreReminders] = useState(true);
  const [groceryReminders, setGroceryReminders] = useState(false);
  const [expiryReminders, setExpiryReminders] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoImport, setAutoImport] = useState(true);
  const [wifiOnly, setWifiOnly] = useState(false);
  const [groupAnnouncements, setGroupAnnouncements] = useState(true);
  const [showInactiveGroups, setShowInactiveGroups] = useState(true);
  const [snapcartAI, setSnapcartAI] = useState(false);
  const [choreLayoutV2, setChoreLayoutV2] = useState(false);
  const [betaProgram, setBetaProgram] = useState(false);

  const toggle = (setter) => () => setter((prev) => !prev);

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout from all devices?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", onPress: () => console.log("Logged out") },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionHeader}>Notifications</Text>
      <SettingToggle
        label="Enable Notifications"
        value={notifications}
        onToggle={toggle(setNotifications)}
      />
      <SettingToggle
        label="Chore Reminders"
        value={choreReminders}
        onToggle={toggle(setChoreReminders)}
      />
      <SettingToggle
        label="Grocery Reminders"
        value={groceryReminders}
        onToggle={toggle(setGroceryReminders)}
      />
      <SettingToggle
        label="Expiry Alerts"
        value={expiryReminders}
        onToggle={toggle(setExpiryReminders)}
      />

      <Text style={styles.sectionHeader}>Appearance</Text>
      <SettingToggle
        label="Dark Mode"
        value={darkMode}
        onToggle={toggle(setDarkMode)}
      />
      <Text style={styles.placeholder}>Font size selector coming soon</Text>

      <Text style={styles.sectionHeader}>App Behavior</Text>
      <SettingToggle
        label="Auto-import groceries to expiry tracker"
        value={autoImport}
        onToggle={toggle(setAutoImport)}
      />
      <SettingToggle
        label="Upload only on Wi-Fi"
        value={wifiOnly}
        onToggle={toggle(setWifiOnly)}
      />

      <Text style={styles.sectionHeader}>Group Preferences</Text>
      <SettingToggle
        label="Receive announcements"
        value={groupAnnouncements}
        onToggle={toggle(setGroupAnnouncements)}
      />
      <SettingToggle
        label="Show inactive groups"
        value={showInactiveGroups}
        onToggle={toggle(setShowInactiveGroups)}
      />
      <Text style={styles.placeholder}>Default group selector coming soon</Text>

      <Text style={styles.sectionHeader}>Security & Privacy</Text>
      <Button
        title="Change Password"
        onPress={() => console.log("Change Password")}
      />
      <Button title="Clear Cache" onPress={() => console.log("Clear Cache")} />
      <Button title="Logout All Devices" color="red" onPress={handleLogout} />

      <Text style={styles.sectionHeader}>Experimental Features</Text>
      <SettingToggle
        label="Enable SnapCart AI v2"
        value={snapcartAI}
        onToggle={toggle(setSnapcartAI)}
      />
      <SettingToggle
        label="New Chore Layout"
        value={choreLayoutV2}
        onToggle={toggle(setChoreLayoutV2)}
      />
      <SettingToggle
        label="Join Beta Program"
        value={betaProgram}
        onToggle={toggle(setBetaProgram)}
      />

      <Text style={styles.sectionHeader}>About / Support</Text>
      <Text style={styles.placeholder}>App Version: 1.0.0</Text>
      <Button title="Help / FAQ" onPress={() => console.log("Open FAQ")} />
      <Button
        title="Contact Support"
        onPress={() => console.log("Contact Support")}
      />
      <Button
        title="Report a Bug"
        onPress={() => console.log("Report a Bug")}
      />
      <Button
        title="Rate us on Store"
        onPress={() => console.log("Rate App")}
      />
    </ScrollView>
  );
}

function SettingToggle({ label, value, onToggle }) {
  return (
    <View style={styles.settingItem}>
      <Text>{label}</Text>
      <Switch value={value} onValueChange={onToggle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 8,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  placeholder: {
    fontSize: 14,
    color: "#888",
    marginBottom: 12,
  },
});
