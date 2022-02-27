import React from "react"
import AddPayments from "../screens/addpayments"
import AddProperty from "../screens/addproperty"
import AddTenant from "../screens/addtenants"
import AllTenants from "../screens/alltenants"
import Home from "../screens/home"
import Login from "../screens/login"
import Payments from "../screens/payments"
import Properties from "../screens/properties"
import SignUp from "../screens/signUp"
import Tenant from "../screens/tenants"

import { createStackNavigator } from '@react-navigation/stack';


const Stack1 = createStackNavigator();

function LoginStack() {
  return (
    <Stack1.Navigator screenOptions={{headerShown: false}}>
      <Stack1.Screen name="Login" component={Login} />
      <Stack1.Screen name="SignUp" component={SignUp} />
      <Stack1.Screen name="Home" component={HomeStack} />
    </Stack1.Navigator>
  );
}

const Stack2 = createStackNavigator();

function HomeStack() {
  return (
    <Stack2.Navigator screenOptions={{headerShown: false}}>
      <Stack2.Screen name="Home" component={Home} />
      <Stack2.Screen name="Properties" component={PropertyStack} />
      <Stack2.Screen name="Payments" component={Payments} />
    </Stack2.Navigator>
  );
}

const Stack3 = createStackNavigator()

function PropertyStack() {
  return(
    <Stack3.Navigator screenOptions={{headerShown: false}}>
      <Stack3.Screen name="Properties" component={{Properties}} />
      <Stack3.Screen name="AddProperty" component={{AddProperty}} />
      <Stack3.Screen name="Tenant" component={{Tenant}} />
      <Stack3.Screen name="AddTenant" component={{AddTenant}} />
    </Stack3.Navigator>
  )
}



export default PropertyStack