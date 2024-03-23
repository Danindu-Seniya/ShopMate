import { View, Text, ImageBackground, TouchableOpacity ,StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const emergency = () => {
  return (
    <View>
        <SafeAreaView>
        <ImageBackground source={require('../../assets/images/EmergencyTabBG.png')} style={{ width: '100%', height: '100%' }} />

        <TouchableOpacity
    style={styles.editButton}
    onPress={() => handle()}
  >
    <Text style={styles.editButtonText}>Edit Bio</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.editButton}
    onPress={() => handle()}
  >
    <Text style={styles.editButtonText}>Edit Bio</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.editButton}
    onPress={() => handle()}
  >
    <Text style={styles.editButtonText}>Edit Bio</Text>
  </TouchableOpacity>

      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    editButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        color: 'black',
        borderRadius: 5,
        padding: 10,
    },
    editButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },

})

export default emergency