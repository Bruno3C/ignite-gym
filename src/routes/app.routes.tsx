import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

//sreens
import { Home } from '@screens/Home';
import { Profile } from '@screens/Profile';
import { History } from '@screens/History';
import { Exercise } from '@screens/Exercise';

type AppRoutes = {
  Home: undefined;
  History: undefined;
  Profile: undefined;
  Exercise: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="History"
        component={History}
      />
      <Screen
        name="Profile"
        component={Profile}
      />
      <Screen
        name="Exercise"
        component={Exercise}
      />
    </Navigator>
  )
}