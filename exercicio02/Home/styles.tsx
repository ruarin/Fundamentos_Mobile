import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    
    container : {
        flex:1, 
        backgroundColor:'#ffff',
        justifyContent: 'space-between'
    },
        

    header : {
        height: 420,
        backgroundColor: '#967ADC',
        alignItems: 'center'
    },  

    footer : {   
        height: 80,
        backgroundColor: '#967ADC',
        marginTop: 165,
        alignItems : 'center',
        justifyContent: 'center',
    },

    footerText : {
        fontSize: 32,
        color:'#ffff'
    },
  
    title : {color:'#ffff',
        fontSize:26,
        fontWeight:'bold',
        marginTop:48,
    },
  
    data : {
      color:'#ffff',
      fontSize: 16,
    },

    input1 : {
        height: 50,
        width: 160,
        backgroundColor: '#ffff',
        color:'#967ADC',
        borderRadius: 5,
        fontSize: 32,
        textAlign: 'center',
        alignItems: 'center'
    },

    input2 : {
        height: 50,
        width: 160,
        backgroundColor: '#ffff',
        color:'#967ADC',
        borderRadius: 5,
        fontSize: 32,
        textAlign: 'center', 
        alignItems: 'center'
    },

    inputText : {
        color: '#fff',
        marginRight: 90,    
    },

    button : {
        height: 60,
        width: 360,
        backgroundColor: '#ffff',
        color:'#967ADC',
        borderRadius: 5,
        fontSize: 58,
        alignItems : 'center',
        justifyContent: 'center',
    },

    textButton : {
       fontSize : 32,
       color: '#967ADC'
    },

    form : {
        height : 120,
        flexDirection : 'row',
        marginTop : 20,
        gap: 40,    
    },

    form1 : {
        flexDirection : 'row',
        gap: 50,  
        marginTop : 50,    
       
    },

    resultado : {
        fontSize : 36,
        color: '#967ADC',
        textAlign: 'center',
        marginTop: 30,
    },

    listEmpty :{
        color: '#967ADC',
        fontSize: 16,
        textAlign: 'center',
        marginTop :  100
    }
  })