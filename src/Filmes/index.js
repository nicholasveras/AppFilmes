import React from "react";
import {View, Text, SafeAreaView} from 'react-native'

export default function Filmes({data}){
  return(
    <SafeAreaView>

    <View>
    <Text>{data.nome}</Text>
    </View>

    </SafeAreaView>
  );
}