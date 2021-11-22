import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
      .then(res => res.json())
      .then(data => {
        if (data) {
          setPokemonList(data.results)
        }
      }).catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Text>
          List here
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 5
  }
});
