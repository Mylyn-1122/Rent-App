import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';



export default class Login extends React.Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor:"#021C42"}}>
                
                <ScrollView>
                    
                    <Image
                    
                        source={require("../assets/logo.png")}
                        style={{width:"75%",height: 250, alignSelf:"center", marginTop:"10%", resizeMode: 'contain'}}
                    />

                    <View style={{width:"70%", backgroundColor:"#FCFCFC", alignSelf:"center"}}>
                        <Text style={{fontSize:30, margin:10}}>Login</Text>

                        <TextInput 
                        style={{
                            width:"80%", 
                            height:"10%", 
                            marginLeft:"3%", 
                            borderBottomColor:"black", 
                            borderBottomWidth:1}} 
                        placeholder="Username"/>

                        <TextInput 
                        style={{
                            width:"80%", 
                            height:"10%", 
                            marginLeft:"3%", 
                            borderBottomColor:"black", 
                            borderBottomWidth:1,
                            marginTop:"2%"}} 
                        placeholder="Password"/>

                        <TouchableOpacity>
                            <Text
                            style={{
                                color:"#0A2463",
                                alignSelf:"flex-end",
                                marginRight:"10%"
                            }}
                            >Forgot Password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={{
                            alignItems:'center',
                            alignSelf:'center',
                            backgroundColor:"#0A2463",
                            width:"40%",
                            height:20,
                            borderRadius:20,
                            marginTop:10
                        }}
                        //onPress={()=>{
                            //this.props.navigation.navigate('Home')
                        //}}
                        >
                            <Text style={{color:"#FCFCFC", alignSelf:"center"}}>Login</Text>
                        </TouchableOpacity>

                        <Text style={{alignSelf:"center", color:"grey"}}>New user? <Text style={{color:"#0A2463"}}>Register</Text></Text>
                    </View>
                    
                </ScrollView>

                
            </View>
        )
    }
}