import React from 'react';
import {Text} from 'react-native';
import {Card} from 'react-native-shadow-cards';

import {global} from '../../styles/global';
import {IStopCardProps} from './interfaces/stop-card.interfaces';

export const StopCard: React.FC<IStopCardProps> = ({stop}) => {
  const {np, ed} = stop;

  return (
    <Card style={global.viewCardContainer}>
      <Text style={global.text}>
        Parada: <Text style={global.textFocus}>{np}</Text>
      </Text>
      <Text style={global.text}>
        Endereço: <Text style={global.textFocus}>{ed}</Text>
      </Text>
    </Card>
  );
};
