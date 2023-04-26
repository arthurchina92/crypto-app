import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

function CoinItem({ coin }) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.coinName}>
        <Image style={styles.coinImage} source={{ uri: coin.image }} />
        <Text style={styles.coinText}>{coin.name}</Text>
      </View>
      <Text style={styles.coinText}>$1000000</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#d0d0",
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  coinText: {
    color: "#ffff",
  },
  coinImage: {
    height: 30,
    width: 30,
  },
  coinName: {
    flexDirection: "row",
  },
});

export { CoinItem };
