import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import CustomTextInput from "../Components/CustomTextInput";
import CustomButton from "../Components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const emailInputHandler = (emailText) => {
    setEmail(emailText);
  };

  const passwordInputHandler = (passwordText) => {
    setPassword(passwordText);
  };

  const signUpHandlePress = () => {
    // console.log("Sign up handler....");
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/login.png")}
          style={styles.loginImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.titleText}>Login</Text>
        <View style={styles.inputContainer}>
          <CustomTextInput
            value={email}
            onChangeText={emailInputHandler}
            placeholder="Enter your email"
            keyboardType="email-address"
            style={styles.input}
          />

          <CustomTextInput
            value={password}
            onChangeText={passwordInputHandler}
            placeholder="Enter your password"
            secureText={true}
            style={styles.input}
          />
        </View>
        <CustomButton
          label="Login"
          style={styles.buttonStyle}
          btnTextStyle={styles.buttonTextStyle}
          btnStyle={styles.button}
        />
        <Text style={styles.baseText}>
          New to the app?{" "}
          <Text style={styles.linkText} onPress={signUpHandlePress}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginPage;

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
  loginContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  titleText: {
    fontWeight: "600",
    fontSize: 30,
  },
  login: {
    alignSelf: "center",
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
  loginImage: {
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
