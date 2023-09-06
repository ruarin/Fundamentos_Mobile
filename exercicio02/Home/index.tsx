import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function Home() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [imc, setImc] = useState('');

  function imcCalculator() {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

      const calculateImc = (weightValue / (heightValue * heightValue));
      setImc(calculateImc.toFixed(2)); 

      if(calculateImc < 18.5) {
        setImc("Baixo Peso")
        }else if (18.5 <= calculateImc && calculateImc < 24.9)
        setImc("Peso Normal") 
        else if(25 <= calculateImc && calculateImc < 29.9)
        setImc("Sobrepeso")
        else if(30 <= calculateImc && calculateImc < 34.9)
        setImc("Obesidade Grau I")
        else if(35 <= calculateImc && calculateImc < 39.9)
        setImc("Obesidade Grau II")
        else
        setImc("Obesidade Mórbida")
    }

  function validationImc() {
    if (weight && height) {
      imcCalculator();
    } else {
      setImc('');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Calculadora de IMC</Text>
        <Text style={styles.data}>
         
          Descubra qual o seu índice de Massa Corporal
        </Text>

        <View style={styles.form1}>
          <Text style={styles.inputText}>Peso (Kg)</Text>
          <Text style={styles.inputText}>Altura (m)</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input1}
            onChangeText={setWeight}
            value={weight}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input2}
            onChangeText={setHeight}
            value={height}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => validationImc()}>
          <Text style={styles.textButton}> Calcular </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.listEmpty}>Seu índice de massa corporal é </Text>
      <Text style={styles.resultado}> {imc} </Text>

      <View style={styles.footer}>
        <Text style={styles.footerText}> Cesul </Text>
      </View>
    </View>
  );
}
