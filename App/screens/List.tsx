import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { connect, useDispatch } from "react-redux";
import { stateProps } from "../store/reducers/ListReducer";
import store from "../store/configureStore";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { actionProps } from "../store/reducers/ListReducer";

const List = () => {
  const navigation = useNavigation();
  const state = store.getState();
  const dispatch = useDispatch();

  const _deleteList = (item: string) => {
    const action: actionProps = { type: "DELETE_LIST", value: item };
    dispatch(action);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="ios-arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <ScrollView>
        {state.shoppingList.map((item: string) => (
          <View key={item} style={styles.itemContainer}>
            <Text style={styles.textStyle}>{item}</Text>
            <TouchableOpacity onPress={() => _deleteList(item)}>
              <MaterialIcons name="delete" size={24} color="purple" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    marginLeft: 25,
  },
  itemContainer: {
    height: 50,
    margin: 10,
    paddingHorizontal: 10,
    borderColor: "purple",
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textStyle: {
    fontSize: 20,
  },
});

const mapStateToProps = (state: stateProps) => {
  return state;
};

export default connect(mapStateToProps)(List);
