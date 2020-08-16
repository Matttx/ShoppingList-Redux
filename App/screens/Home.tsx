import React, { useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect, useDispatch } from "react-redux";
import { stateProps, actionProps } from "../store/reducers/ListReducer";

const Home = () => {
  const [text, setText] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const _addList = () => {
    if (text !== "") {
      const action: actionProps = { type: "ADD_LIST", value: text };
      dispatch(action);
      setText("");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <StatusBar barStyle="dark-content" />
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.title}>Shopping</Text>
        <Text style={[styles.title, { color: "purple" }]}> List</Text>
      </View>
      <TextInput
        style={styles.textInput}
        value={text}
        placeholder="Buy Chips"
        onSubmitEditing={() => _addList()}
        onChangeText={(text: string) => setText(text)}
      />
      <TouchableOpacity
        style={styles.buttonList}
        onPress={() => navigation.navigate("List")}
      >
        <Text style={styles.textButtonList}>See my List</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  textInput: {
    marginTop: 40,
    height: 50,
    width: 250,
    backgroundColor: "white",
    fontSize: 20,
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonList: {
    marginTop: 40,
    height: 40,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "purple",
    borderRadius: 10,
  },
  textButtonList: {
    color: "white",
    fontSize: 20,
  },
});

const mapStateToProps = (state: stateProps) => {
  return state;
};

export default connect(mapStateToProps)(Home);
