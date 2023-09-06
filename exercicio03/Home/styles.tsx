import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
      
    container : {
        flex:1,
        backgroundColor:'#383535',
    },

    form : {
   
        flexDirection : 'row',     
        justifyContent: 'space-around',
        textAlign: 'center', 
        alignItems: 'center',
        gap: 30
    },

    formButton : {
        height: 350,
        flexDirection : 'row',     
        justifyContent: 'center',
        textAlign: 'center', 
        alignItems: 'center',
        gap: 150
    },

    formNos : {
        flexDirection : 'column',     
        justifyContent: 'center',
        textAlign: 'center', 
        gap: 30
    },

    formEles : {
        flexDirection : 'column',     
        justifyContent: 'center',  
        gap: 30
    },

    
    formZerar : { 
        alignItems: 'center',
        justifyContent: 'center', 
        gap: 30
    },

    ponto1 : {
        alignItems: 'center',
        justifyContent: 'center', 
       flex: 1
    },

    ponto2 : {
        alignItems: 'center',
        justifyContent: 'center', 
        flex: 1
    },


    title : {
        fontSize: 32,
        color: '#ffff',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 30,
        marginTop: 60
    },

    nos : {
        fontSize: 24,
        color: '#4AA5F9',
        fontWeight: 'bold'
    },

    eles : {
        fontSize: 24,
        color: '#C08DF3',      
        fontWeight: 'bold'
    },

    buttonMais : {
        height: 60,
        width: 100,
        backgroundColor: '#589D52',
        borderRadius: 5,
        justifyContent: 'center',
    },

    buttonMenos : {
        height: 60,
        width: 100,
        backgroundColor: '#BD1010',
        borderRadius: 5,
        justifyContent: 'center',
    },

    buttonZerar : {
        height: 60,
        width: 320,
        backgroundColor: '#DE9609',
        borderRadius: 5,
        justifyContent: 'center',
    },

    textZerar : {
        fontSize: 24,
        color: '#ffff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    
    textButton : {
        fontSize: 32,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    textPontosNos : {
        fontSize: 130,
        color: '#4AA5F9',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    textPontosEles : {
        fontSize: 130,
        color: '#C08DF3',
        textAlign: 'center',
        fontWeight: 'bold'
    }

})
