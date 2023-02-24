import { StatusBar } from 'expo-status-bar';
import React,{useRef,useState} from 'react';
import { Animated, Dimensions, Image, ScrollView, View, Text, FlatList,StyleSheet, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Home() {

    const edges = useSafeAreaInsets();

    return (
        <View style={{paddingTop: (edges.top)}}>
             <View style={styles.searchbarSet}>
                <View style={styles.searchBar}> 
                <TextInput style={styles.search} placeholder="원하시는 커뮤니티를 찾아보세요"></TextInput>
                </View>
            </View>
        </View>
    );
}   

const styles = StyleSheet.create({
    searchbarSet: {
        backgroundColor: '#2B3472',
        alignItems: 'center',
        justifyContent: 'center',
        height:150,
        width:"100%",
    },
    searchBar:{
        marginTop:5,
        flexDirection:'row',
        width:"90%",
        backgroundColor:"white",
        borderRadius:10,
        alignItems:'center',
        padding:10
    },
    search:{
        fontSize:15,
    }
  });
  