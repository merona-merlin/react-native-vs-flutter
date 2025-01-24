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
 * @interface PokemonDetailMovesInnerVersionGroupDetailsInner
 */
export interface PokemonDetailMovesInnerVersionGroupDetailsInner {
    /**
     * 
     * @type {number}
     * @memberof PokemonDetailMovesInnerVersionGroupDetailsInner
     */
    levelLearnedAt: number;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof PokemonDetailMovesInnerVersionGroupDetailsInner
     */
    moveLearnMethod: AbilityDetailPokemonInnerPokemon;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof PokemonDetailMovesInnerVersionGroupDetailsInner
     */
    versionGroup: AbilityDetailPokemonInnerPokemon;
}

/**
 * Check if a given object implements the PokemonDetailMovesInnerVersionGroupDetailsInner interface.
 */
export function instanceOfPokemonDetailMovesInnerVersionGroupDetailsInner(value: object): value is PokemonDetailMovesInnerVersionGroupDetailsInner {
    if (!('levelLearnedAt' in value) || value['levelLearnedAt'] === undefined) return false;
    if (!('moveLearnMethod' in value) || value['moveLearnMethod'] === undefined) return false;
    if (!('versionGroup' in value) || value['versionGroup'] === undefined) return false;
    return true;
}

export function PokemonDetailMovesInnerVersionGroupDetailsInnerFromJSON(json: any): PokemonDetailMovesInnerVersionGroupDetailsInner {
    return PokemonDetailMovesInnerVersionGroupDetailsInnerFromJSONTyped(json, false);
}

export function PokemonDetailMovesInnerVersionGroupDetailsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PokemonDetailMovesInnerVersionGroupDetailsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'levelLearnedAt': json['level_learned_at'],
        'moveLearnMethod': AbilityDetailPokemonInnerPokemonFromJSON(json['move_learn_method']),
        'versionGroup': AbilityDetailPokemonInnerPokemonFromJSON(json['version_group']),
    };
}

export function PokemonDetailMovesInnerVersionGroupDetailsInnerToJSON(json: any): PokemonDetailMovesInnerVersionGroupDetailsInner {
    return PokemonDetailMovesInnerVersionGroupDetailsInnerToJSONTyped(json, false);
}

export function PokemonDetailMovesInnerVersionGroupDetailsInnerToJSONTyped(value?: PokemonDetailMovesInnerVersionGroupDetailsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'level_learned_at': value['levelLearnedAt'],
        'move_learn_method': AbilityDetailPokemonInnerPokemonToJSON(value['moveLearnMethod']),
        'version_group': AbilityDetailPokemonInnerPokemonToJSON(value['versionGroup']),
    };
}

