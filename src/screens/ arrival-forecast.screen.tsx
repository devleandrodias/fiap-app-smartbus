import React, {useCallback, useState} from 'react';
import {View, TextInput, ScrollView} from 'react-native';

import {global} from '../styles/global';
import {arrivalForecastMock} from '../mock/arrivial-forecast.screen';
import {IArrivalForecast} from '../interfaces/arrival-forecast.model';
import {ArrivalForecastCard} from '../components/arrival-forecast-card';

export const ArrivalForecastScreen = () => {
  const [search, setSearch] = useState<string>();

  const [data, setData] = useState<IArrivalForecast[]>([]);

  const handleFetch = useCallback(async () => {
    try {
      console.log('Chamada a api retorna dados...');
      console.warn(search);
    } catch (error) {
      console.error(error);
    }

    setData(arrivalForecastMock);
  }, [search]);

  return (
    <View style={global.viewContainer}>
      <TextInput
        style={global.inputStyle}
        onSubmitEditing={handleFetch}
        placeholder="Digite o código da parada"
        onChangeText={text => setSearch(text)}
      />
      <TextInput
        style={global.inputStyle}
        onSubmitEditing={handleFetch}
        placeholder="Digite o código da linha"
        onChangeText={text => setSearch(text)}
      />
      <ScrollView>
        {data.map(arrivalForecast => (
          <ArrivalForecastCard
            key={arrivalForecast.p.cp}
            arrivalForecast={arrivalForecast}
          />
        ))}
      </ScrollView>
    </View>
  );
};
