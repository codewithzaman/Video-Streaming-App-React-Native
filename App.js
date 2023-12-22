import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './App/Screens/HomeScreen';
import Colors from './App/Shared/Colors';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    padding:20,
    margintop:20,

    
  },
});
