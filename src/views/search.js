import * as React from 'react';
import { View,Button } from "react-native";

import BoxCenter from './../components/box-center'
import Box from './../components/box'
import { Bookmark } from './../components/icons/'

function SearchView({navigation}) {
  return (
    <BoxCenter>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detay')}
      />
    </BoxCenter>
  );
}


export default SearchView;