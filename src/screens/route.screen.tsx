import React from 'react';

import {View, TextInput} from 'react-native';

import {global} from '../styles/global';
import {RouteCard} from '../components/route-card';
import {IconHeader} from '../components/icon-header';

export const RouteScreen = () => {
  return (
    <View style={global.viewContainer}>
      <IconHeader name="map-signs" />
      <TextInput style={global.inputStyle} placeholder="Digite a origem" />
      <TextInput style={global.inputStyle} placeholder="Digite o destino" />
      <RouteCard previsaoSaida="14:00h" previsaoChegada="15:00h" />
      <RouteCard previsaoSaida="17:50h" previsaoChegada="18:24h" />
      <RouteCard previsaoSaida="19:42h" previsaoChegada="21:34h" />
    </View>
  );
};
