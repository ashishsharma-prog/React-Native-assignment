import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  ScrollView,
  SafeAreaView
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import List from "./List";

const Search = () => {
  const [searchResults, setSearchResults] = useState("");

  const [data, setData] = useState([]);
  const [mainData, setmainData] = useState(data);
  const addList = () => {
    setmainData([
      ...data,
      { key: Math.random().toString(), title: searchResults },
    ]);
    setData([...data, { key: Math.random().toString(), title: searchResults }]);
    console.log(mainData);

    setSearchResults("");
  };

  const searchFilter = (text) => {
    if (text) {
      const newData = data.filter((item) => {
        console.log(item);
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();

        const textData = text.toUpperCase();

        return itemData.indexOf(textData) > -1;
      });

      setmainData(newData);
      setSearchResults(text);
    } else {
      setmainData(data);
      setSearchResults(text);
    }
  };

  const emptyList = (
    <View style={{ margin: 60 }}>
      <Text style={{ fontStyle: "italic", fontSize: 20, color: "grey" }}>
        Add Your Grocery Item!!
      </Text>
    </View>
  );

  return (
    <View style={{height:'100%'}}>
      <View style={styles.Container}>
        <TextInput
          style={{
            ...styles.search,
            backgroundColor: "lightgrey",
            color: "black",
            margin: 10,
          }}
          value={searchResults}
          onChangeText={(text) => searchFilter(text)}
          placeholder="Search for grocery List"
          placeholderTextColor={"grey"}
        />
        <View style={styles.hrLine}></View>
        <View style={styles.icon}>
          <AntDesign name="plus" size={30} color="black" onPress={addList} />
        </View>
      </View>
      <View style={{ height: 1, backgroundColor: "black", width: 350 }}></View>
      {mainData.length == 0 ? (
        emptyList
      ) : (
       <View style={{position:'relative',marginBottom:100}} >
 <FlatList
         
         initialNumToRender={mainData.length}
          data={mainData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => ( <List item={item} />
          
          )}
          
        />
       </View>
       
        
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    marginLeft: 15,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: "#FFF",
    borderWidth: 1,
    width: 260,
  },
  Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    position: "relative"
  },
  icon: {
    marginTop: 15,
    marginRight: 10,
  },
  hrLine: {
    height: 67,
    backgroundColor: "black",
    width: 1,
  },
});
