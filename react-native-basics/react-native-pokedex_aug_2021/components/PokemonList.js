import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function PokemonList(props) {
    return (
        <ScrollView>
            {props.list.map((pokemon, i) => {
                return (
                    <View key={i} style={styles.pokemon}>
                        <Text style={{ fontSize: 20 }}>
                            {pokemon.name}
                        </Text>
                    </View>
                )
            })}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    pokemon: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "grey"
    }
})