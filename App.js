import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import WriteComplaint from './screens/WriteComplaint';
import ReadComplaint from './screens/ReadCompaint';

export default class App extends React.Component {
  render(){
    return(  
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteComplaint: WriteComplaint,
  ReadComplaint: ReadComplaint,
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName);

      if(routeName === "WriteComplaint"){
        return(
          <Image
          source={require("./assets/complaint.webp")}
          style={{width:40, height:40}}
        />
        );
      }
      else if(routeName === "ReadComplaint"){
        return(
          <Image
          source={require("./assets/readC.png")}
          style={{width:31, height:31}}
        />)
        
      }
    }
  })
}
  )

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
