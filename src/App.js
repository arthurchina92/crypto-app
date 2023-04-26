import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CoinItem } from "./CoinItem";

function App() {
  const [coins,setCoins] = useState([])
  const loadData = async () => {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
      );
      const data = await res.json()
      console.log(data);
      setCoins(data)
  } 
  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
         data={coins}
         renderItem={({item}) => {
          return <CoinItem coin={item}/>
         }}
      
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1414144",
    alignItems: "center",
    justifyContent: "center",
  },
});

export {App};