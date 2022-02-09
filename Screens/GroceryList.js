import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import Search from "../components/Search";

const GroceryList = () => {
  return (
    <View style={styles.Container}>
      <Search />
    </View>
  );
};

export default GroceryList;

const styles = StyleSheet.create({
  Container: {
    marginTop: 25,
    
  },
});
