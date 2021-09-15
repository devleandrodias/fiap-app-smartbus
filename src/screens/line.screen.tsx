import React from 'react';
import {TextInput, View} from 'react-native';

import {global} from '../styles/global';
import {RouteCard} from '../components/route-card';
import {IconHeader} from '../components/icon-header';

export const LinesScreen = () => {
  return (
    <View style={global.viewContainer}>
      <IconHeader name="bus" />
      <TextInput
        style={global.inputStyle}
        placeholder="Digite a linha de ônibus"
      />
      <RouteCard previsaoSaida="14:00h" previsaoChegada="15:00h" />
      <RouteCard previsaoSaida="17:50h" previsaoChegada="18:24h" />
    </View>
  );
};
