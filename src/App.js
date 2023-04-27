import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { CoinItem } from "./CoinItem";

function App() {
  const [coins, setCoins] = useState([]);
  const loadData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    );
    const data = await res.json();
    console.log(data);
    setCoins(data);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <View style={styles.header}>
        <Text style={styles.title}>Crypto Market</Text>
        <TextInput style={styles.searchInput} />
      </View>
      <FlatList
        style={styles.list}
        data={coins}
        renderItem={({ item }) => {
          return <CoinItem coin={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 25,
    marginTop: 30,
  },
  list: {
    width: "85%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 15,
  },
  searchInput: {
    marginTop: 35,
    color: "#fff",
    borderBottomColor: "#4657CE",
    borderBottomWidth: 1,
    width: "40%",
    height: "40%",
    textAlign: "center",
    justifyContent: "center",
  },
});

export { App };
