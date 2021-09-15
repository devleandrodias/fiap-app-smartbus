import React from 'react';
import {View} from 'react-native';
import {global} from '../../styles/global';

import Icon from 'react-native-vector-icons/FontAwesome';

interface IIconHeaderProps {
  name: string;
}

export const IconHeader: React.FC<IIconHeaderProps> = ({name}) => {
  return (
    <View style={global.iconStyle}>
      <Icon name={name} size={50} color="#999" />
    </View>
  );
};
