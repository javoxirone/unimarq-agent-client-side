import { NavigationContainer } from '@react-navigation/native';
import AuthContext, { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/home/Home";
import Organizations from './pages/organizations/Organizations';
import Navigation from './components/navigation/Navigation';
import OrgCreate from './pages/orgcreate/OrgCreate';
import Login from "./pages/login/Login";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from "react";

const Stack = createNativeStackNavigator();

const App = () => {
  const { accessToken, setTokens } = useContext(AuthContext);

  return (
    <NavigationContainer>

      <Stack.Navigator>
        {accessToken ? (
          <>
            <Stack.Screen name="Home" component={Home} options={{title: "Asosiy"}} />
            <Stack.Screen name="Organizations" component={Organizations} options={{title: "Tashkilotlar"}} />
            <Stack.Screen name="OrgCreate" component={OrgCreate} options={{title: "Yangi Tashkilot Qo'shish"}} />
          </>
        ) : (
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
          >
            {(props) => <Login {...props} setTokens={setTokens} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
      {accessToken ? <Navigation /> : <></>}


    </NavigationContainer>
  );
};

const AppWrapper = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default AppWrapper;
