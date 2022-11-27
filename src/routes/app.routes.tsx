import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//sreens
import { Home } from '@screens/Home';
import { Profile } from '@screens/Profile';
import { History } from '@screens/History';
import { Exercise } from '@screens/Exercise';

const { Navigator, Screen } = createBottomTabNavigator();

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