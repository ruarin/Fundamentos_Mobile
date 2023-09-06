import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function Home() {
  const [pontosEles, setPontosEles] = useState(0);
  const [pontosNos, setPontosNos] = useState(0);

  function subirPontoNos() {
    setPontosNos(pontosNos + 1);
  }

  function diminuirPontoNos() {
    setPontosNos(pontosNos - 1);
  }

  function subirPontoEles() {
    setPontosEles(pontosEles + 1);
  }

  function diminuirPontoEles() {
    setPontosEles(pontosEles - 1);
  }

  function zerar() {
    setPontosEles(0);
    setPontosNos(0);
  }

  if(pontosNos > 12 || pontosEles > 12){
    setPontosEles(0);
    setPontosNos(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> MARCADOR DE TRUCO </Text>

      <View style={styles.form}>
        <View style={styles.ponto1}>
          <Text style={styles.nos}> NÓS </Text>
          <Text style={styles.textPontosNos}> {pontosNos} </Text>
        </View>
        <View style={styles.ponto2}>
          <Text style={styles.eles}> ELES </Text>
          <Text style={styles.textPontosEles}> {pontosEles} </Text>
        </View>
      </View>

      <View style={styles.formButton}>
        <View style={styles.formNos}>
          <TouchableOpacity
            style={styles.buttonMais}
            onPress={() => subirPontoNos()}
          >
            <Text style={styles.textButton}> + 1 </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonMenos}
            onPress={() => diminuirPontoNos()}
          >
            <Text style={styles.textButton}> - 1 </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formEles}>
          <TouchableOpacity
            style={styles.buttonMais}
            onPress={() => subirPontoEles()}
          >
            <Text style={styles.textButton}> + 1 </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonMenos}
            onPress={() => diminuirPontoEles()}
          >
            <Text style={styles.textButton}> - 1 </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.formZerar}>
        <TouchableOpacity style={styles.buttonZerar} onPress={() => zerar()}>
          <Text style={styles.textZerar}> Zerar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
