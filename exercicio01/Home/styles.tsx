import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    container : {
      flex:1, padding:24, backgroundColor:'#131016'},
  
    title : {color:'#ffff',
    fontSize:24,
    fontWeight:'bold',
    marginTop:48
    },
  
    data : {
      color:'#414144',
      fontSize: 14
    },

    input : {
        height: 100,
        width: 350,
        backgroundColor: '#1b1a1b',
        color:'#fff',
        paddingLeft: 20,
        borderRadius: 5,
        fontSize: 15,
        flex : 1,

    },

    button : {
        height:50,
        width: 350,
        backgroundColor: '#45c550',
        color:'#fff',
        borderRadius: 5,
        fontSize: 18,
        alignItems : 'center',
        justifyContent: 'center',
       

    },

    textButton : {
       fontSize : 28,
       color: '#fff'
    },

    form : {
        height : 120,
        flexDirection : 'column',
        marginTop : 20,
        gap : 10
    },

    listEmpty :{
        color: '#fff',
        fontSize:14,
        textAlign: 'center',
        marginTop :  40
    }
  })