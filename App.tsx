import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  const a = 'a';

  return (
    <View className='justify-center items-center flex-1'>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
