import React, {useState} from 'react';
import {ActivityIndicator, ScrollView, TextInput, View} from 'react-native';

import {apiSpTrans} from '../api/api';
import {global} from '../styles/global';
import {IStop} from '../interfaces/stops.model';
import {StopCard} from '../components/stop-card';
import {Authenticate} from '../auth/auth.helper';

export const StopScreen = () => {
  const [search, setSearch] = useState<string>();

  const [data, setData] = useState<IStop[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  async function handleFetch() {
    try {
      setLoading(true);

      await Authenticate();

      const response = await apiSpTrans.get(
        `Parada/Buscar?termosBusca="${search}"`,
      );

      setData(response.data);

      setLoading(false);
    } catch (error) {
      console.error('API indisponível temporáriamente');

      setLoading(false);
    }
  }

  return (
    <View style={global.viewContainer}>
      <TextInput
        style={global.inputStyle}
        placeholderTextColor="gray"
        onSubmitEditing={handleFetch}
        placeholder="Digite a localização da parada"
        onChangeText={text => setSearch(text)}
      />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <ScrollView>
          {data.map(stop => (
            <StopCard key={stop.cp} stop={stop} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};
