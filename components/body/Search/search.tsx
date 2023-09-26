import React from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import styles from "./search.style";
import StockCard from "../Stocks/StockCard";
import useStocksQuery from "../../../hook/useStocksQuery";
import { MMKV } from "react-native-mmkv";
import { FlashList } from "@shopify/flash-list";

export function Search() {
  const storage = new MMKV();

  const [filter, setFilter] = React.useState(false);
  const { data, isLoading, error } = useStocksQuery();

  const toggleFavorite = (itemSymbol: string): undefined => {
    const favArr = JSON.parse(storage.getString("user.fav") ?? "");

    const index = favArr.findIndex((item: any) => item.symbol === itemSymbol);

    if (index !== -1) {
      favArr.splice(index, 1);
    } else {
      data.forEach((item: any) => {
        if (item.symbol === itemSymbol) {
          favArr.push(item);
        }
      });
    }

    storage.set("user.fav", JSON.stringify(favArr));
  };

  const toggleFilter = (): undefined => {
    setFilter(!filter);
    return undefined;
  };

  return (
    <View style={{ height: "100%" }}>
      <View style={styles.topPart}>
        <View>
          <Text style={styles.userName}>Hello Faisal</Text>
          <Text style={styles.welcomeMessage}>Search Stocks</Text>
        </View>
        <TouchableOpacity style={styles.showFav} onPress={toggleFilter}>
          <Text>Fav</Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text>Something Went Wrong</Text>
      ) : (
        <View style={{ minHeight: 2 }}>
          <FlashList
            data={
              filter ? JSON.parse(storage.getString("user.fav") ?? "") : data
            }
            keyExtractor={(item: any) => item.symbol}
            renderItem={({ item }) => (
              <StockCard
                item={item}
                toggleFavorite={toggleFavorite}
                storage={storage}
              />
            )}
            estimatedItemSize={140}
          />
        </View>
      )}
    </View>
  );
}

export default Search;
