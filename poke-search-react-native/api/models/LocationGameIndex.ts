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

/**
 * 
 * @export
 * @interface LocationGameIndex
 */
export interface LocationGameIndex {
    /**
     * 
     * @type {number}
     * @memberof LocationGameIndex
     */
    gameIndex: number;
    /**
     * 
     * @type {GenerationSummary}
     * @memberof LocationGameIndex
     */
    generation: GenerationSummary;
}

/**
 * Check if a given object implements the LocationGameIndex interface.
 */
export function instanceOfLocationGameIndex(value: object): value is LocationGameIndex {
    if (!('gameIndex' in value) || value['gameIndex'] === undefined) return false;
    if (!('generation' in value) || value['generation'] === undefined) return false;
    return true;
}

export function LocationGameIndexFromJSON(json: any): LocationGameIndex {
    return LocationGameIndexFromJSONTyped(json, false);
}

export function LocationGameIndexFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationGameIndex {
    if (json == null) {
        return json;
    }
    return {
        
        'gameIndex': json['game_index'],
        'generation': GenerationSummaryFromJSON(json['generation']),
    };
}

export function LocationGameIndexToJSON(json: any): LocationGameIndex {
    return LocationGameIndexToJSONTyped(json, false);
}

export function LocationGameIndexToJSONTyped(value?: LocationGameIndex | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'game_index': value['gameIndex'],
        'generation': GenerationSummaryToJSON(value['generation']),
    };
}

