import React, {useCallback, useState} from 'react';
import {TextInput, View, ScrollView} from 'react-native';

import {global} from '../styles/global';
import {RouteCard} from '../components/route-card';
import {linesMock} from '../mock/lines.mock';
import {ILineResponse} from '../interfaces/line.model';

export const LinesScreen = () => {
  const [search, setSearch] = useState<string>();

  const [data, setData] = useState<ILineResponse[]>([]);

  const handleFetch = useCallback(async () => {
    try {
      console.log('Chamada a api retorna dados...');
      console.warn(search);
    } catch (error) {
      console.error(error);
    }

    setData(linesMock);
  }, [search]);

  return (
    <View style={global.viewContainer}>
      <TextInput
        style={global.inputStyle}
        onSubmitEditing={handleFetch}
        placeholder="Digite a linha de ônibus"
        onChangeText={text => setSearch(text)}
      />
      <ScrollView>
        {data.map(line => (
          <RouteCard key={line.cl} line={line} />
        ))}
      </ScrollView>
    </View>
  );
};
