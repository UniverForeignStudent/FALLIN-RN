import React, { useEffect,useRef } from 'react';
import {Animated, Text,Image, View, Dimensions,StatusBar } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Logo from '../assets/logowhite.png';
import Home from './Home';

export default function Foreign() {

    const edges = useSafeAreaInsets(); //safearea value

    const startAnimation = useRef(new Animated.Value(0)).current; //animation values

    const scaleLogo = useRef(new Animated.Value(1)).current;
    const scaleTitle = useRef(new Animated.Value(1)).current;

    const moveLogo = useRef(new Animated.ValueXY({x:0,y:0})).current;
    const moveTitle = useRef(new Animated.ValueXY({x:0,y:0})).current;

    // Animating COntent...
    const contentTransition = useRef(new Animated.Value(Dimensions.get('window').height)).current;
    
    useEffect(()=>{

        //starting anime after 500ms
        setTimeout(()=>{
            
            //sequence anime
            Animated.parallel([
                Animated.timing(
                    startAnimation,
                    {
                        toValue:-Dimensions.get('window').height+(edges.top + 38),
                        useNativeDriver:true
                    }
                ),
                Animated.timing(
                    scaleLogo,
                    {
                        toValue:0.3,
                        useNativeDriver:true
                    },
                ),
                Animated.timing(
                    scaleTitle,
                    {
                        toValue:1.0,
                        useNativeDriver:true
                    },
                ),
                Animated.timing(
                    moveLogo,
                    {
                        toValue:{
                            x: (Dimensions.get("window").width/2)-45,
                            y: (Dimensions.get("window").height/2)+10
                        },
                        useNativeDriver:true
                    },
                ),
                Animated.timing(
                    moveTitle,
                    {
                        toValue:{
                            x: 0,
                            y: (Dimensions.get("window").height/2)-78
                        },
                        useNativeDriver:true
                    },
                ),
                Animated.timing(
                    contentTransition,
                    {
                        toValue: 0,
                        useNativeDriver: true
                    }
                )
            ])
            .start();
        }, 3000);
    },[]);
  return (
    <View style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }}>
        <StatusBar barStyle="light-content" />
        <Animated.View style={{
            flex: 1,
            zIndex: 1,
            backgroundColor:"#2B3472",
            transform:[{translateY: startAnimation}]
        }}>
            <Animated.View style={{flex:1, alignItems:'center', justifyContent:'center',}}>
                <Animated.Image source={Logo} style={{
                    width:200,
                    height:115,
                    marginBottom:20,
                    transform:[{translateX: moveLogo.x},{translateY: moveLogo.y},{scale:scaleLogo}]
                }}></Animated.Image>
                <Animated.Text style={{fontSize:24, fontWeight:'bold',color:'white',
                transform:[{translateX: moveTitle.x},{translateY: moveTitle.y},{scale:scaleTitle}]}}>FALLIN</Animated.Text>
                <Text style={{fontSize:12,fontWeight:'bold',color:'white'}}>재외국민들을 위한 하나뿐인 커뮤니티</Text>
            </Animated.View>
        </Animated.View>
        <Animated.View style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,0.04)',
                zIndex: 0,
                transform: [
                    { translateY: contentTransition }
                ]
            }}>
                <Home></Home>
            </Animated.View>
    </View>    
  );
} 