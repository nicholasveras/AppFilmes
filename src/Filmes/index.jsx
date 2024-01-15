import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Filmes({ data }) {
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome}</Text>
        <Image source={{ uri: data.foto }} style={styles.capa} />

        <TouchableOpacity style={styles.botao} onPress={() => {}}>
          <Text style={styles.botaoTexto}>LEIA MAIS</Text>
        </TouchableOpacity>
      </View>
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
