import * as React from 'react';
import { View,Button } from "react-native";

import BoxCenter from './../components/box-center'
import Box from './../components/box'
import { Bookmark,Logo } from './../components/icons/'

function SearchView({navigation}) {
  return (
    <BoxCenter>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detay')}
      />
      <Logo width={86} heigth={40} color="red"/>
    </BoxCenter>
  );
}


export default SearchView;