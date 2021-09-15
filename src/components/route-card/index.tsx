import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IRouteCardProps} from './interfaces/route-card.interfaces';

export const RouteCard: React.FC<IRouteCardProps> = ({
  previsaoSaida,
  previsaoChegada,
}) => {
  const style = StyleSheet.create({
    viewContainer: {
      paddingVertical: 30,
      paddingHorizontal: 15,
      borderWidth: 1,
      backgroundColor: '#fff',
      marginBottom: 15,
      borderRadius: 15,
    },
  });

  return (
    <View style={style.viewContainer}>
      <Text>Previsão saída: {previsaoSaida}</Text>
      <Text>Previsão chegada: {previsaoChegada}</Text>
    </View>
  );
};
