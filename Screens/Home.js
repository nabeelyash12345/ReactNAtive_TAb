import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity, Image,FlatList } from 'react-native';

export default function Home({ navigation }) {

  function renderHeader() {
    return (
      <View style={{ width: "100%", height: 290 }}>
        <ImageBackground
          source={require('../assets/bg.jpg')}
          resizeMode="cover"
          style={{
            flex: 1,
            alignItems:"center"

          }}
        >
          {/* Header bar */}
          <View style={{ width: "100%",alignItems:"flex-end",marginTop:30,padding:10,borderRadius:50}}>
            <TouchableOpacity
              style={{ width: 35, height: 35, alignItems: "center", justifyContent: "center" }}

              onPress={() => console.warn('Notification on pressed')}
            >
              <Image
                source={require('../assets/Noti.png')}
                style={{ width: 35, height: 35,flex:1,borderRadius:50}}
              />
            </TouchableOpacity>

          </View>

          {/* balance */}
          <View style={{alignItems:"center",justifyContent:"center"}}>
            <Text style={{color:"white",fontWeight:"900",fontSize:20}}>Your Protfolio balance</Text>
            <Text style={{color:"white",fontWeight:"500",fontSize:20}}>486 555, 800</Text>
            <Text  style={{color:"white",fontWeight:"300",fontSize:20}}>last 34 Hours</Text>


          </View>
          {/* Trending */}
            <View style={{position:"absolute",bottom:"-30%"}}>

              <Text style={{color:"red",fontSize:30}}>Trending</Text>
              
              <FlatList
              contentContainerStyle={{top:2}}
              data={trending}
              renderItem={renderItem}
              keyExtractor={item =>"${item.id}"}
              horizontal
              showsHorizontalScrollIndicator={false}
              
              />
            </View>

        </ImageBackground>
      </View>
    )
  }
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingBottom: 130 }}>
        {renderHeader()}

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
