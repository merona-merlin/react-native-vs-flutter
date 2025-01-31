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
import type { GenerationSummary } from './GenerationSummary';
import {
    GenerationSummaryFromJSON,
    GenerationSummaryFromJSONTyped,
    GenerationSummaryToJSON,
    GenerationSummaryToJSONTyped,
} from './GenerationSummary';
import type { VersionSummary } from './VersionSummary';
import {
    VersionSummaryFromJSON,
    VersionSummaryFromJSONTyped,
    VersionSummaryToJSON,
    VersionSummaryToJSONTyped,
} from './VersionSummary';
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
 * @interface VersionGroupDetail
 */
export interface VersionGroupDetail {
    /**
     * 
     * @type {number}
     * @memberof VersionGroupDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof VersionGroupDetail
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof VersionGroupDetail
     */
    order?: number | null;
    /**
     * 
     * @type {GenerationSummary}
     * @memberof VersionGroupDetail
     */
    generation: GenerationSummary;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof VersionGroupDetail
     */
    moveLearnMethods: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof VersionGroupDetail
     */
    pokedexes: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof VersionGroupDetail
     */
    regions: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {Array<VersionSummary>}
     * @memberof VersionGroupDetail
     */
    versions: Array<VersionSummary>;
}

/**
 * Check if a given object implements the VersionGroupDetail interface.
 */
export function instanceOfVersionGroupDetail(value: object): value is VersionGroupDetail {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('generation' in value) || value['generation'] === undefined) return false;
    if (!('moveLearnMethods' in value) || value['moveLearnMethods'] === undefined) return false;
    if (!('pokedexes' in value) || value['pokedexes'] === undefined) return false;
    if (!('regions' in value) || value['regions'] === undefined) return false;
    if (!('versions' in value) || value['versions'] === undefined) return false;
    return true;
}

export function VersionGroupDetailFromJSON(json: any): VersionGroupDetail {
    return VersionGroupDetailFromJSONTyped(json, false);
}

export function VersionGroupDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionGroupDetail {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'order': json['order'] == null ? undefined : json['order'],
        'generation': GenerationSummaryFromJSON(json['generation']),
        'moveLearnMethods': ((json['move_learn_methods'] as Array<any>).map(AbilityDetailPokemonInnerPokemonFromJSON)),
        'pokedexes': ((json['pokedexes'] as Array<any>).map(AbilityDetailPokemonInnerPokemonFromJSON)),
        'regions': ((json['regions'] as Array<any>).map(AbilityDetailPokemonInnerPokemonFromJSON)),
        'versions': ((json['versions'] as Array<any>).map(VersionSummaryFromJSON)),
    };
}

export function VersionGroupDetailToJSON(json: any): VersionGroupDetail {
    return VersionGroupDetailToJSONTyped(json, false);
}

export function VersionGroupDetailToJSONTyped(value?: Omit<VersionGroupDetail, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'order': value['order'],
        'generation': GenerationSummaryToJSON(value['generation']),
        'move_learn_methods': ((value['moveLearnMethods'] as Array<any>).map(AbilityDetailPokemonInnerPokemonToJSON)),
        'pokedexes': ((value['pokedexes'] as Array<any>).map(AbilityDetailPokemonInnerPokemonToJSON)),
        'regions': ((value['regions'] as Array<any>).map(AbilityDetailPokemonInnerPokemonToJSON)),
        'versions': ((value['versions'] as Array<any>).map(VersionSummaryToJSON)),
    };
}

