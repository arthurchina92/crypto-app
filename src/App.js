import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { CoinItem } from "./CoinItem";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(false);

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
        <TextInput
          style={styles.searchInput}
          placeholder="Search a coin"
          placeholderTextColor="#858585"
          onChangeText={(text) => setSearch(text)}
        />
      </View>
      <FlatList
        style={styles.list}
        data={coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(search.toLowerCase())
        )}
        renderItem={({ item }) => {
          return <CoinItem coin={item} />;
        }}
        showsVerticalScrollIndicator={false}
        refreshing={refresh}
        onRefresh={async () => {
          setRefresh(true);
          await loadData();
          setRefresh(false);
        }}
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
  },
  list: {
    width: "85%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    marginBottom: 15,
    marginTop: 70,
  },
  searchInput: {
    marginTop: 15,
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
