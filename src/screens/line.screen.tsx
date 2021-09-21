import React, {useState} from 'react';
import {TextInput, View, ScrollView, ActivityIndicator} from 'react-native';

import {apiSpTrans} from '../api/api';
import {global} from '../styles/global';
import {ILine} from '../interfaces/line.model';
import {RouteCard} from '../components/route-card';
import {Authenticate} from '../auth/auth.helper';

export const LinesScreen = () => {
  const [search, setSearch] = useState<string>();

  const [data, setData] = useState<ILine[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  async function handleFetch() {
    try {
      setLoading(true);

      await Authenticate();

      const response = await apiSpTrans.get(
        `Linha/Buscar?termosBusca="${search}"`,
      );

      setData(response.data);

      setLoading(false);
    } catch (error) {
      console.error('API Indisponível');

      setLoading(false);
    }
  }

  return (
    <View style={global.viewContainer}>
      <TextInput
        style={global.inputStyle}
        placeholderTextColor="gray"
        onSubmitEditing={handleFetch}
        placeholder="Digite a linha de ônibus"
        onChangeText={text => setSearch(text)}
      />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <ScrollView>
          {data.map(line => (
            <RouteCard key={line.cl} line={line} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};
