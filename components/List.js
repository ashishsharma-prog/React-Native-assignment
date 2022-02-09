import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import React from "react";

const List = ({ item }) => {
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView style={styles.listItemContainer}>
        <View
          style={{ height: 1, backgroundColor: "black", width: 350 }}
        ></View>
        <Text style={styles.list}>{item.title}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  Container: {
    marginTop: 13,
  },
  txt: {
    fontSize: 20,
    fontWeight: "900",
    margin: 5,
    fontStyle: "italic",
  },
  
  list: {
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
});
