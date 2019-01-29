import { createStackNavigator, createAppContainer } from 'react-navigation';

import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const MainNavigator = createStackNavigator({
  MemoList: { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit: { screen: MemoEditScreen },
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
}, {
  defaultNavigationOptions: {
    headerTitle: 'MemoT',
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
