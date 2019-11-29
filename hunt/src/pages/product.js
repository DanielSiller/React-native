//Para usar o react-native-webview é necessário rodar dois comandos;
//react-native link react-native-webview ; react-native run android.
import React from 'react';

import {WebView} from 'react-native-webview';


const Product = ({ navigation }) => (
    <WebView source ={{ uri: navigation.state.params.product.url}} />
);

Product.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.product.title
});

export default  Product;