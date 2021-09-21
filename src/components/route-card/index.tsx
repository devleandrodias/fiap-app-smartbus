import React from 'react';
import {Text} from 'react-native';
import {Card} from 'react-native-shadow-cards';

import {global} from '../../styles/global';
import {IRouteCardProps} from './interfaces/route-card.interfaces';

export const RouteCard: React.FC<IRouteCardProps> = ({line}) => {
  const {lc, tp, ts, lt} = line;

  return (
    <Card style={global.viewCardContainer}>
      <Text style={global.text}>
        Opera modo circular?
        <Text style={global.textFocus}> {lc ? 'Sim' : 'Não'}</Text>
      </Text>
      <Text style={global.text}>
        Primeira parte do letreiro numérico da linha:{' '}
        <Text style={global.textFocus}>{lt}</Text>
      </Text>
      <Text style={global.text}>
        Letreiro da linha no sentido Terminal Principal para Terminal
        Secundário: <Text style={global.textFocus}>{tp}</Text>
      </Text>
      <Text style={global.text}>
        Letreiro da linha no sentido Terminal Secundário para Terminal
        Principal: <Text style={global.textFocus}>{ts}</Text>
      </Text>
    </Card>
  );
};
