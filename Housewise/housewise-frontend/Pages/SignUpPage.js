import { useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import CustomTextInput from "../Components/CustomTextInput";
import CustomButton from "../Components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  const handleSignup = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match");
      return;
    }

    Alert.alert("Sign Up successful");
    // navigation.navigate("Login");
  };

  const loginHandlePress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          //source={require("../assets/images/signup.png")} // optional image
          style={styles.signupImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.titleText}>Sign Up</Text>

        <View style={styles.inputContainer}>
          <CustomTextInput
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <CustomTextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.input}
          />
          <CustomTextInput
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <CustomTextInput
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            style={styles.input}
          />
        </View>

        <CustomButton
          label="Sign Up"
          onPress={handleSignup}
          style={styles.buttonStyle}
          btnTextStyle={styles.buttonTextStyle}
          btnStyle={styles.button}
        />

        <Text style={styles.baseText}>
          Already have an account?{" "}
          <Text style={styles.linkText} onPress={loginHandlePress}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  signupContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  titleText: {
    fontWeight: "600",
    fontSize: 30,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonStyle: {
    alignSelf: "center",
  },
  buttonTextStyle: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: "#744caf",
  },
  signupImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  baseText: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  linkText: {
    color: "#744caf",
    fontWeight: "800",
  },
});
