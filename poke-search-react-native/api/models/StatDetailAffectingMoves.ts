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
import type { StatDetailAffectingMovesIncreaseInner } from './StatDetailAffectingMovesIncreaseInner';
import {
    StatDetailAffectingMovesIncreaseInnerFromJSON,
    StatDetailAffectingMovesIncreaseInnerFromJSONTyped,
    StatDetailAffectingMovesIncreaseInnerToJSON,
    StatDetailAffectingMovesIncreaseInnerToJSONTyped,
} from './StatDetailAffectingMovesIncreaseInner';

/**
 * 
 * @export
 * @interface StatDetailAffectingMoves
 */
export interface StatDetailAffectingMoves {
    /**
     * 
     * @type {Array<StatDetailAffectingMovesIncreaseInner>}
     * @memberof StatDetailAffectingMoves
     */
    increase: Array<StatDetailAffectingMovesIncreaseInner>;
    /**
     * 
     * @type {Array<StatDetailAffectingMovesIncreaseInner>}
     * @memberof StatDetailAffectingMoves
     */
    decrease: Array<StatDetailAffectingMovesIncreaseInner>;
}

/**
 * Check if a given object implements the StatDetailAffectingMoves interface.
 */
export function instanceOfStatDetailAffectingMoves(value: object): value is StatDetailAffectingMoves {
    if (!('increase' in value) || value['increase'] === undefined) return false;
    if (!('decrease' in value) || value['decrease'] === undefined) return false;
    return true;
}

export function StatDetailAffectingMovesFromJSON(json: any): StatDetailAffectingMoves {
    return StatDetailAffectingMovesFromJSONTyped(json, false);
}

export function StatDetailAffectingMovesFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatDetailAffectingMoves {
    if (json == null) {
        return json;
    }
    return {
        
        'increase': ((json['increase'] as Array<any>).map(StatDetailAffectingMovesIncreaseInnerFromJSON)),
        'decrease': ((json['decrease'] as Array<any>).map(StatDetailAffectingMovesIncreaseInnerFromJSON)),
    };
}

export function StatDetailAffectingMovesToJSON(json: any): StatDetailAffectingMoves {
    return StatDetailAffectingMovesToJSONTyped(json, false);
}

export function StatDetailAffectingMovesToJSONTyped(value?: StatDetailAffectingMoves | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'increase': ((value['increase'] as Array<any>).map(StatDetailAffectingMovesIncreaseInnerToJSON)),
        'decrease': ((value['decrease'] as Array<any>).map(StatDetailAffectingMovesIncreaseInnerToJSON)),
    };
}

