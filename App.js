import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from 'react-native-vector-icons';
import Home from "./src/pages/Home";
import AsyncStorageComponent from "./src/pages/AsyncStorageComponent";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: "https://ac641cdc2fe16b46520f0d2f5934b146@o4507797112684544.ingest.de.sentry.io/4507797114519632",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for tracing.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
  _experiments: {
    // profilesSampleRate is relative to tracesSampleRate.
    // Here, we'll capture profiles for 100% of transactions.
    profilesSampleRate: 1.0,
  },
});

const Tab = createBottomTabNavigator();

const App = () => {
  throw new Error('My first Sentry error!');

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="home" color={color} size={size} />
              )
            }}
          />
          <Tab.Screen
            name="AsyncStorageComponent"
            component={AsyncStorageComponent}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="database" color='#007bff' size={23} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

// export default App;
export default Sentry.wrap(App);

/*
<FontAwesome name="database" color={color} size={size} />
  - here, name should be a valid fontawesome icon
*/

/*
If you get an error when clicking on AsyncStorage tab :
  "NativeViewGestureHandler must be used as a descendant of GestureHandlerRootView. 
  Otherwise the gestures will not be recognized. 
  See https://docs.swmansion.com/react-native-gesture-handler/docs/installation
  for more details."
Soln: 
  - The error you're encountering indicates that "react-native-gesture-handler"
    needs to wrap your application’s root component with GestureHandlerRootView.
    This ensures that gesture handlers are recognized and work properly.
  - Import GestureHandlerRootView from react-native-gesture-handler
  - Wrap your app’s main component (usually where NavigationContainer is used) 
    with GestureHandlerRootView.

  - GestureHandlerRootView: This component from react-native-gesture-handler wraps
    the entire app or the specific part of your app where you need gesture 
    handling, ensuring gestures are recognized.
  - style={{ flex: 1 }}: Ensures that the GestureHandlerRootView covers
    the entire screen.
*/
