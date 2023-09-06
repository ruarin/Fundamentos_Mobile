import {Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from '../Components/Participant';
import { useState } from 'react';

export default function Home(){
    const [produts, setProduts] = useState<String[]>([]);
    const [produtsName, setProdutstName] = useState('')

    function handleParticipantAdd(){

        if(produtsName.trim().length > 0){

            if(produts.includes(produtsName)){
                setProdutstName('')
                return Alert.alert("Problema", "-> Participante já existe")
               
            }
        
        setProduts([...produts, produtsName.trimStart()])
        setProdutstName('')
        }else{
            Alert.alert("Problema ao adicionar produto", "-> Nome esta vazio")
        }
    }

    function handleParticipantRemove(name: String){
        Alert.alert('Remover', `Deseja remover o(a) ${name}`,
        [
            {
                text: 'Sim',
                onPress: () => 
                // prevStates é o estado atual da lista, ou seja, pega os dados da lista 
                // filter serve para filtrar 
                    setProduts(prevState => prevState.filter( partic => partic != name))
                    //igual a setParticipants(participants.filter (partic => partic != name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]
        )
    }

    return(
    <View style={styles.container}>
        <Text style={styles.title}>Lista de Compras</Text>
        <Text style={styles.data}> Quarta, 23 de Agosto de 2023. </Text>
        
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder='Nome do Produto'
                placeholderTextColor={"#414144"}
                onChangeText={text => setProdutstName(text)}
                value={produtsName}

            />

            <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleParticipantAdd}>
                <Text style={styles.textButton}> Adicionar </Text>

            </TouchableOpacity>
        </View>

        <Text style={styles.title}>Produtos</Text>

        {/*<ScrollView>
        {
            participants.map(participant => (
                <Participant key={participant} name={participant} onRemove={handleParticipantRemove}/> 
            ))
        }
        </ScrollView>
    */}
       

       <FlatList
       data={produts}
       keyExtractor={item => item}
       renderItem={({item}) => (
        <Participant key={item}
                     name={item}
                     onRemove={() => handleParticipantRemove(item)}/>

       )}
       ListEmptyComponent={() =>
        <Text style={styles.listEmpty}>Não existe produto na sua lista de compra</Text>
    
    }
       />


        
        
  </View>

    )
}