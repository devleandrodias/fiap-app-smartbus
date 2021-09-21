import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import {IRouteCardProps} from './interfaces/route-card.interfaces';

export const RouteCard: React.FC<IRouteCardProps> = ({line}) => {
  const {lc, tp, ts, lt} = line;
  const style = StyleSheet.create({
    viewContainer: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      borderWidth: 1,
      backgroundColor: '#fff',
      marginBottom: 15,
      borderRadius: 15,
    },
    text: {
      marginBottom: 10,
    },
    textFocus: {
      fontWeight: 'bold',
    },
  });

  return (
    <Card style={style.viewContainer}>
      <Text style={style.text}>
        Opera modo circular?
        <Text style={style.textFocus}> {lc ? 'Sim' : 'Não'}</Text>
      </Text>
      <Text style={style.text}>
        Primeira parte do letreiro numérico da linha:{' '}
        <Text style={style.textFocus}>{lt}</Text>
      </Text>
      <Text style={style.text}>
        Letreiro da linha no sentido Terminal Principal para Terminal
        Secundário: <Text style={style.textFocus}>{tp}</Text>
      </Text>
      <Text style={style.text}>
        Letreiro da linha no sentido Terminal Secundário para Terminal
        Principal: <Text style={style.textFocus}>{ts}</Text>
      </Text>
    </Card>
  );
};
