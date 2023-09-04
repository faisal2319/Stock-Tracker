import React from "react";
import {View, Text, ActivityIndicator, TouchableOpacity, FlatList} from 'react-native'
import {useRouter} from 'expo-router'
import styles from './search.style'
import StockCard from "../Stocks/StockCard";
import useStocksQuery from "../../../hook/useStocksQuery";
import { MMKV } from "react-native-mmkv";

const Search = () => {
    const router = useRouter()
    const storage = new MMKV()
    
    const [dataList, setDataList] = React.useState([])
    const [filter, setFilter] = React.useState(false)
    const [favoritedStocks, setFavoritedStocks] = React.useState([])
    const {data, isLoading, error } = useStocksQuery(); 


    if (data && dataList.length === 0) {
            setDataList(data); 
        }
    
    React.useEffect(() => {
        const loadFavoritedStocks = async () => {
            if (dataList.length === 0) {
            const storedData =  storage.getString('user.fav');
            if (storedData && storedData.length > 0) {
            setDataList(JSON.parse(storedData));
            }
            }  
            const filteredStocks = dataList.filter((item) => item.favorite);
            setFavoritedStocks(filteredStocks);
        };

        loadFavoritedStocks();
        }, [dataList, data]);


    const toggleFavorite = (itemSymbol) => {
        const updatedDataList = dataList.map((item) =>
    item.symbol === itemSymbol ? { ...item, favorite: !item.favorite } : item
  );

        storage.set('user.fav', JSON.stringify(updatedDataList))
        setDataList(updatedDataList)
    }


    const toggleFilter = () => {
        setFilter(!filter)
    }

    return (
        <View>
             <View style={styles.topPart}>
                <View >
                    <Text style={styles.userName}>Hello Faisal</Text>
                    <Text style={styles.welcomeMessage}>Search Stocks</Text>            
                </View>
                <TouchableOpacity style={styles.showFav} onPress={toggleFilter}><Text>Fav</Text></TouchableOpacity>
            </View>

            
                {isLoading ? (<ActivityIndicator size='large'/> 
                ) : error ? (
                    <Text>Something Went Wrong</Text>
                ): 
                    <FlatList
                    data={filter ? favoritedStocks : dataList}
                    keyExtractor={item => item.symbol}
                    renderItem={({item}) => (
                    <StockCard
                    item={item}
                    toggleFavorite={toggleFavorite}
                    setFilter={setFilter}
                    filter={filter}
                    />
                    )}
                />
                }
                
        </View>
    )
}

export default Search;




