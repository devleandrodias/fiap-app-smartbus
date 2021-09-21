import React, {useCallback, useState} from 'react';
import {ScrollView, TextInput, View} from 'react-native';

import {global} from '../styles/global';
import {stopsMock} from '../mock/stops.mock';
import {IStop} from '../interfaces/stops.model';
import {StopCard} from '../components/stop-card';

export const StopScreen = () => {
  const [search, setSearch] = useState<string>();

  const [data, setData] = useState<IStop[]>([]);

  const handleFetch = useCallback(async () => {
    try {
      console.log('Chamada a api retorna dados...');
      console.warn(search);
    } catch (error) {
      console.error(error);
    }

    setData(stopsMock);
  }, [search]);

  return (
    <View style={global.viewContainer}>
      <TextInput
        style={global.inputStyle}
        onSubmitEditing={handleFetch}
        placeholder="Digite a localização da parada"
        onChangeText={text => setSearch(text)}
      />
      <ScrollView>
        {data.map(stop => (
          <StopCard key={stop.cp} stop={stop} />
        ))}
      </ScrollView>
    </View>
  );
};
