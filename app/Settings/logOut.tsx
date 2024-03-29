import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ThankYouScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thank you for using</Text>
      <Image
        source={require('../../assets/images/Shopmate (2).png')}

        style={styles.image}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    bottom: 30,
  },
  shopmate: {
    fontSize: 33,
    fontWeight: 'bold',
    color: 'black',
    bottom: 30,
  },
  image: {
    width: 200, // Adjust as needed
    height: 70, // Adjust as needed
    marginBottom: 20,
    bottom: 50,
  },
});

export default ThankYouScreen;

