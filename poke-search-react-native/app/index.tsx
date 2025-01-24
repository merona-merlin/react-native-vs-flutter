import {Text, View, TextInput, FlatList, ListRenderItem, ListRenderItemInfo, ActivityIndicator} from "react-native";
import React, {useMemo} from "react";
import {useState, useEffect} from "react"
import {PokemonApi, PokemonSummary} from "@/api";
import {Link} from "expo-router";

export default function Index() {
    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState<PokemonSummary[]>([]);
    const [loading, setLoading] = useState(false);
    const api = new PokemonApi();

    const pokemonFiltered = useMemo<PokemonSummary[]>(() => {
        return pokemon.filter((p) => p.name.includes(search.toLowerCase()))
    }, [pokemon, search]);

    useEffect(() => {
        setLoading(true)
        api.pokemonList({limit: 9999999})
            .then((response) => setPokemon(response.results ?? []))
            .finally(() => setLoading(false))
    }, [])

    const pokemonListRender = (itemInfo: ListRenderItemInfo<PokemonSummary>) => {
        return <Link
            href={`/details/${itemInfo.item.name}`}
            style={{textTransform: "capitalize"}}
        >{itemInfo.item.name}</Link>
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 16,
                gap: 8
            }}
        >
            <View style={{
                flexDirection: "row-reverse",
                borderColor: "#000",
                borderWidth: 1,
                padding: 10,
                gap: 10,
                width: "100%"
            }}>
                {loading && <ActivityIndicator/>}

                <TextInput
                    style={{flex: 1}}
                    placeholder={"search for pokemon!"}
                    onChangeText={setSearch} value={search}/>
            </View>

            <FlatList
                style={{flex: 1, width: "100%", gap: 12}}
                contentContainerStyle={{gap: 8}}
                data={pokemonFiltered}
                ListEmptyComponent={<Text>Keine Pokemon gefunden</Text>}
                renderItem={pokemonListRender}
            />
        </View>
    );
}
