import React from 'react';
import {View, TextInput} from 'react-native';
import {global} from '../styles/global';

export const ArrivalForecastScreen = () => {
  return (
    <View style={global.viewContainer}>
      <TextInput style={global.inputStyle} placeholder="Digite a origem" />
      <TextInput style={global.inputStyle} placeholder="Digite o destino" />
    </View>
  );
};
