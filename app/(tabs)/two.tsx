import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Events from '../Events';

const TabTwoScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}></View>
      <Text style={styles.text}>Hello Jane!</Text>
      <Text style={styles.text1}>What are you looking for?</Text>
      <View style={styles.locationBox}></View>
      <View style={styles.iconBox}></View>
      <Text style={styles.text2}>Current Location</Text>
      <Text style={styles.text3}>Kzone Shopping Mall</Text>
      <FontAwesome5 name="map-marker-alt" size={24} color="black" marginLeft={60} bottom={-75}/>

      {/* Profile Photo */}
      <Image
        source={require('../../assets/images/Profile_photo.png')}
        style={styles.profilePhoto}
      />

      {/* Promotions */}
      <Text style={styles.promotionsText}>Promotions</Text>
      <Image
        source={require('../../assets/images/offer.png')}
        style={styles.promotionsImage}
      />

      {/* Event Calendar */}
      
      {/* <Text style={styles.eventsText}>Upcoming Events</Text>
      <Text style={styles.date}>Today</Text>
      <View style={styles.eventBox1}></View>
      <View style={styles.eventBox2}></View> */}

      <Events />
      
      </ScrollView>



    
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7F4', // Changed background color
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 40,
    marginTop: -60,
    color:'white'
  },
  text1: {
    fontSize: 18,
    marginLeft: 40,
    marginTop: -5,
    color:'white'
  },
  text2: {
    fontSize: 11,
    marginLeft: 140,
    marginTop: -5,
    bottom: -100,
    color:'#2E77E5'
  },
  text3: {
    fontSize: 16,
    marginLeft: 140,
    marginTop: -5,
    bottom: -105,
    color:'black',
    fontWeight: 'bold',
  },
  box: {
    width: 358,
    height: 200,
    backgroundColor: '#2E77E5',
    marginTop: -80, // Adjust this value as needed
    alignSelf: 'center', // Centers the box horizontally
    marginLeft: 2, 
    borderRadius: 25,
    bottom: -100,
  },
  locationBox: {
    width: 278,
    height: 45,
    backgroundColor: 'white',
    marginTop: -80, // Adjust this value as needed
    alignSelf: 'center', // Centers the box horizontally
    marginLeft: 150, 
    borderRadius: 25,
    bottom: -100,
  },
  iconBox: {
    width: 180,
    height: 45,
    backgroundColor: 'white',
    marginTop: -80, // Adjust this value as needed
    alignSelf: 'center', // Centers the box horizontally
    marginLeft: -350, 
    borderRadius: 25,
    bottom: -135,
  },
  promotionsText:{
    fontSize: 18,
    marginLeft: 30,
    marginTop: -5,
    bottom: -155,
    color:'black',
    fontWeight: 'bold',
  },
  profilePhoto: {
    width: 65,
    height: 65,
    borderRadius: 50,
    marginTop: -80,
    alignSelf: 'center',
    bottom: -45,
    marginLeft: 240
  },
  promotionsImage: {
    width: 220,
    height: 220,
    borderRadius: 10,
    marginTop: 120,
    alignSelf: 'center',
    bottom: -45,
    
  },
  eventsText:{
    fontSize: 18,
    marginLeft: 30,
    bottom: -65,
    color:'black',
    fontWeight: 'bold',
  },
  eventBox1: {
    width: 280,
    height: 130,
    backgroundColor: 'white',
    marginTop: -80, // Adjust this value as needed
    alignSelf: 'center', // Centers the box horizontally
    marginLeft: 2, 
    borderRadius: 25,
    bottom: -220,
  },
  eventBox2: {
    width: 280,
    height: 130,
    backgroundColor: 'white',
    marginTop: -80, // Adjust this value as needed
    alignSelf: 'center', // Centers the box horizontally
    marginLeft: 2, 
    borderRadius: 25,
    bottom: -120,
  },
  date: {
    fontSize: 16,
    marginLeft: 140,
    marginTop: -5,
    bottom: -145,
    color:'black',
    fontWeight: 'bold',
  },
});

export default TabTwoScreen;