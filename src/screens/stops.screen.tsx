import axios from 'axios';
import React, {useState} from 'react';
import {ScrollView, TextInput, View} from 'react-native';

import {global} from '../styles/global';
import {IStop} from '../interfaces/stops.model';
import {StopCard} from '../components/stop-card';

export const StopScreen = () => {
  const [search, setSearch] = useState<string>();

  const [data, setData] = useState<IStop[]>([]);

  async function handleFetch() {
    try {
      await axios.post(
        'http://api.olhovivo.sptrans.com.br/v2.1/Login/Autenticar?token=7fc0bb36d1d3fff64efe266cb9dd3ab4dcd6b97b30685a0029800208bb6c274a',
      );

      const response = await axios.get(
        `http://api.olhovivo.sptrans.com.br/v2.1/Parada/Buscar?termosBusca="${search}"`,
      );

      setData(response.data);
    } catch (error) {
      console.error('API Indisponível');
    }
  }

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
