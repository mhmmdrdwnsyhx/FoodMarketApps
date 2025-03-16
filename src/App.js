import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { SignIn, SplashScreen } from './pages';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SplashScreen/> */}
      <SignIn />
    </NavigationContainer>
  );
};

export default App;