import { createStackNavigator, createAppContainer } from 'react-navigation';
import firebase from 'firebase';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

import config from './secret';

firebase.initializeApp(config);

const MainNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  Home: { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit: { screen: MemoEditScreen },
}, {
  defaultNavigationOptions: {
    headerTitle: 'MemoT',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#265366',
      shadowOffset: { width: 0, height: 0 },
      shadowColor: '#000',
      shadowOpacity: 0.5,
      shadowRadius: 3,
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 18,
    },
  },
});

const App = createAppContainer(MainNavigator);

export default App;
