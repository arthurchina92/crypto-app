import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

function CoinItem({ coin }) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.coinName}>
        <Image style={styles.coinImage} source={{ uri: coin.image }} />
        <View style={styles.textNameSymbolContainer}>
          <Text style={styles.coinText}>{coin.name}</Text>
          <Text style={styles.symbolText}>{coin.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.coinValueText}>${coin.current_price}</Text>
        <Text
          style={[
            styles.pricePercentage,
            coin.price_change_percentage_24h > 0
              ? styles.priceUp
              : styles.priceDown,
          ]}
        >
          {coin.price_change_percentage_24h}%
        </Text>
      </View>
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
  coinValueText: {
    color: "#ffff",
    textAlign: "right",
  },
  coinImage: {
    height: 30,
    width: 30,
  },
  coinName: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textNameSymbolContainer: {
    marginLeft: 10,
  },
  symbolText: {
    color: "#434343",
    textTransform: "uppercase",
  },
  pricePercentage: {
    textAlign: "right",
  },
  priceUp: {
    color: "green",
  },
  priceDown: {
    color: "red",
  },
});

export { CoinItem };
