import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function Product() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Código do Produto" />
      <TextInput style={styles.input} placeholder="Nome do Produto" />
      <TextInput style={styles.input} placeholder="Quantidade" />
      <TextInput style={styles.input} placeholder="Categoria" />
      <Button title="Enviar Formulário" onPress={() => {}} />
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
  input: {
    width: '80%',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});