import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ThankYouScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thank you for using</Text>
      <Text style={styles.shopmate}>ShopMate</Text>
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
});

export default ThankYouScreen;

