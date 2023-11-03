import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from './Product';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductForm" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.item}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://static.riachuelo.com.br/RCHLO/12242365001/portrait/perfume-nina-ricci-feminino-eau-de-toilette-80ml-12242365_foto1_frontal.jpg',
            }}
          />
          <Text style={styles.text}>Produto 1 - R$10.00</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://th.bing.com/th/id/R.904c5e742896eb657b98c20e88f87323?rik=xTUMxA15h8Hx6g&pid=ImgRaw&r=0',
            }}
          />
          <Text style={styles.text}>Produto 2 - R$15.00</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.item}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://seuencanto.com.br/wp-content/uploads/2022/12/Perfume-Eudora-Feminino-Royal.jpg',
            }}
          />
          <Text style={styles.text}>Produto 3 - R$20.00</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://http2.mlstatic.com/eudora-eau-de-parfum-75ml-indulgent-cream-250g-novo-frasco-D_NQ_NP_974890-MLB29843303273_042019-O.jpg',
            }}
          />
          <Text style={styles.text}>Produto 4 - R$25.00</Text>
        </View>
      </View>
      <Button
        title="Ir para o formulário de cadastro"
        onPress={() => navigation.navigate('ProductForm')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    marginTop: 10,
  },
});
