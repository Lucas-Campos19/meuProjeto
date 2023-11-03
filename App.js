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
              uri: 'https://via.placeholder.com/150',
            }}
          />
          <Text style={styles.text}>Produto 1 - R$10.00</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://via.placeholder.com/150',
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
              uri: 'https://via.placeholder.com/150',
            }}
          />
          <Text style={styles.text}>Produto 3 - R$20.00</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://via.placeholder.com/150',
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
