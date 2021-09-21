import axios from 'axios';
import React, {useState} from 'react';
import {TextInput, View, ScrollView} from 'react-native';

import {global} from '../styles/global';
import {ILine} from '../interfaces/line.model';
import {RouteCard} from '../components/route-card';

export const LinesScreen = () => {
  const [search, setSearch] = useState<string>();

  const [data, setData] = useState<ILine[]>([]);

  async function handleFetch() {
    try {
      await axios.post(
        'http://api.olhovivo.sptrans.com.br/v2.1/Login/Autenticar?token=7fc0bb36d1d3fff64efe266cb9dd3ab4dcd6b97b30685a0029800208bb6c274a',
      );

      const response = await axios.get(
        `http://api.olhovivo.sptrans.com.br/v2.1/Linha/Buscar?termosBusca="${search}"`,
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
