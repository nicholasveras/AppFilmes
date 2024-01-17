import React, {useState} from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";

import Detalhes from "../Modal";

export default function Filmes({ data }) {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome}</Text>
        <Image source={{ uri: data.foto }} style={styles.capa} />

        <TouchableOpacity style={styles.botao} onPress={() => setVisibleModal(true)}>
          <Text style={styles.botaoTexto}>LEIA MAIS</Text>
        </TouchableOpacity>
      </View>

      <Modal transparent={true} animationType="slide" visible={visibleModal}>
        <Detalhes filme={data} voltar={() => setVisibleModal(false)}/>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    margin: 20,
    elevation: 2,
    position: "relative",
  },
  capa: {
    height: 220,
    zIndex: 2,
  },
  titulo: {
    padding: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  botao: {
    width: 100,
    backgroundColor: "#09A6FF",
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    position: "absolute",
    bottom: 10,
    right: 0,
    zIndex: 3,
  },
  botaoTexto: {
    color: "#FFF",
    textAlign: "center",
  },
});
