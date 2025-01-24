/* tslint:disable */
/* eslint-disable */
/**
 * PokéAPI
 * All the Pokémon data you\'ll ever need in one place, easily accessible through a modern free open-source RESTful API.  ## What is this?  This is a full RESTful API linked to an extensive database detailing everything about the Pokémon main game series.  We\'ve covered everything from Pokémon to Berry Flavors.  ## Where do I start?  We have awesome [documentation](https://pokeapi.co/docs/v2) on how to use this API. It takes minutes to get started.  This API will always be publicly available and will never require any extensive setup process to consume.  Created by [**Paul Hallett**(]https://github.com/phalt) and other [**PokéAPI contributors***](https://github.com/PokeAPI/pokeapi#contributing) around the world. Pokémon and Pokémon character names are trademarks of Nintendo.     
 *
 * The version of the OpenAPI document: 2.7.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { AbilityDetailPokemonInnerPokemon } from './AbilityDetailPokemonInnerPokemon';
import {
    AbilityDetailPokemonInnerPokemonFromJSON,
    AbilityDetailPokemonInnerPokemonFromJSONTyped,
    AbilityDetailPokemonInnerPokemonToJSON,
    AbilityDetailPokemonInnerPokemonToJSONTyped,
} from './AbilityDetailPokemonInnerPokemon';

/**
 * 
 * @export
 * @interface PalParkAreaDetailPokemonEncountersInner
 */
export interface PalParkAreaDetailPokemonEncountersInner {
    /**
     * 
     * @type {number}
     * @memberof PalParkAreaDetailPokemonEncountersInner
     */
    baseScore: number;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof PalParkAreaDetailPokemonEncountersInner
     */
    pokemonSpecies: AbilityDetailPokemonInnerPokemon;
    /**
     * 
     * @type {number}
     * @memberof PalParkAreaDetailPokemonEncountersInner
     */
    rate: number;
}

/**
 * Check if a given object implements the PalParkAreaDetailPokemonEncountersInner interface.
 */
export function instanceOfPalParkAreaDetailPokemonEncountersInner(value: object): value is PalParkAreaDetailPokemonEncountersInner {
    if (!('baseScore' in value) || value['baseScore'] === undefined) return false;
    if (!('pokemonSpecies' in value) || value['pokemonSpecies'] === undefined) return false;
    if (!('rate' in value) || value['rate'] === undefined) return false;
    return true;
}

export function PalParkAreaDetailPokemonEncountersInnerFromJSON(json: any): PalParkAreaDetailPokemonEncountersInner {
    return PalParkAreaDetailPokemonEncountersInnerFromJSONTyped(json, false);
}

export function PalParkAreaDetailPokemonEncountersInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PalParkAreaDetailPokemonEncountersInner {
    if (json == null) {
        return json;
    }
    return {
        
        'baseScore': json['base_score'],
        'pokemonSpecies': AbilityDetailPokemonInnerPokemonFromJSON(json['pokemon-species']),
        'rate': json['rate'],
    };
}

export function PalParkAreaDetailPokemonEncountersInnerToJSON(json: any): PalParkAreaDetailPokemonEncountersInner {
    return PalParkAreaDetailPokemonEncountersInnerToJSONTyped(json, false);
}

export function PalParkAreaDetailPokemonEncountersInnerToJSONTyped(value?: PalParkAreaDetailPokemonEncountersInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'base_score': value['baseScore'],
        'pokemon-species': AbilityDetailPokemonInnerPokemonToJSON(value['pokemonSpecies']),
        'rate': value['rate'],
    };
}

