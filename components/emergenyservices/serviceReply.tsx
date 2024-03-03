import { View, Text, SafeAreaView,Image,} from 'react-native'
import React from 'react'


const ServiceReply = () => {
  return (
    <SafeAreaView>
      <View style={{alignItems:'center'}}>
      <Image style={{
        width: 130,
        height: 130,
        marginTop: '40%',
      }}
      source={require("../../assets/images/map .png")}/>
      </View>
      <View style={{
        marginTop: 40,
        alignContent: "center",
        alignItems: "center",
      }}>
        <Text style={{
            fontSize:40,
            fontWeight:'bold',
            textAlign:'center'
        }}>
            {'Found your\n location'}
        </Text>
        <Text style={{
            fontSize:15,
            fontWeight:'bold',
            marginTop:20,
            textAlign:'center'
        }}>
            {'Staff is on their way to \nhelp you.'}
        </Text>
      </View>

    </SafeAreaView>
  )
}

export default ServiceReply