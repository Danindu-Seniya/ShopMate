import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Image } from 'react-native';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.profileImage} 
      source={require('../../assets/images/maleAvatar.jpg')}        
        />
      <Text style={styles.username}>Danny Fernando</Text>
      <Text style={styles.age}>Age: 25</Text>
      <Text style={styles.gender}>Gender: Male</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  age: {
    fontSize: 20,
  },
  gender: {
    fontSize: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  profileImage: {
    width: 200,
    height: 200,
    paddingTop: 10,
  },
});
