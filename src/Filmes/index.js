import React from "react";
import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native'

export default function Filmes({data}){
  return(
    <SafeAreaView>

    <View>

      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome}</Text>
        <Image
        source={{uri: data.foto}}
        style={styles.capa}
        />
      </View>

      <View style={styles.areaBotao}>
        <TouchableOpacity style={styles.botao} onPress={() => {}}>
        <Text style={styles.botaoTexto}>LEIA MAIS</Text>
        </TouchableOpacity>
      </View>

    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    margin: 20,
    elevation: 2
  },
  capa: {
    height: 220,
    zIndex: 2,
  },
  titulo: {
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold'
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -60,
    zIndex: 9,
  },
  botao: {
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  botaoTexto: {
    color: '#FFF',
    textAlign: 'center'
  }

});