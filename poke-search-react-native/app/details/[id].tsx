import {Text, View, TextInput, FlatList, ListRenderItem, ListRenderItemInfo, ActivityIndicator} from "react-native";
import React, {useMemo} from "react";
import {useState, useEffect} from "react"
import {PokemonApi, PokemonSummary} from "@/api";
import {useLocalSearchParams, useSearchParams} from "expo-router/build/hooks";

export default function DetailScreen() {
    const { id } = useLocalSearchParams();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding:16,
                gap:8
            }}
        >
            <Text style={{textTransform:"capitalize"}}> {id}</Text>
        </View>
    );
}
