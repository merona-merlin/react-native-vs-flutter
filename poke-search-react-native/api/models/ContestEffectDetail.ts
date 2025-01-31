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
import type { ContestEffectEffectText } from './ContestEffectEffectText';
import {
    ContestEffectEffectTextFromJSON,
    ContestEffectEffectTextFromJSONTyped,
    ContestEffectEffectTextToJSON,
    ContestEffectEffectTextToJSONTyped,
} from './ContestEffectEffectText';
import type { ContestEffectFlavorText } from './ContestEffectFlavorText';
import {
    ContestEffectFlavorTextFromJSON,
    ContestEffectFlavorTextFromJSONTyped,
    ContestEffectFlavorTextToJSON,
    ContestEffectFlavorTextToJSONTyped,
} from './ContestEffectFlavorText';

/**
 * 
 * @export
 * @interface ContestEffectDetail
 */
export interface ContestEffectDetail {
    /**
     * 
     * @type {number}
     * @memberof ContestEffectDetail
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof ContestEffectDetail
     */
    appeal: number;
    /**
     * 
     * @type {number}
     * @memberof ContestEffectDetail
     */
    jam: number;
    /**
     * 
     * @type {Array<ContestEffectEffectText>}
     * @memberof ContestEffectDetail
     */
    effectEntries: Array<ContestEffectEffectText>;
    /**
     * 
     * @type {Array<ContestEffectFlavorText>}
     * @memberof ContestEffectDetail
     */
    flavorTextEntries: Array<ContestEffectFlavorText>;
}

/**
 * Check if a given object implements the ContestEffectDetail interface.
 */
export function instanceOfContestEffectDetail(value: object): value is ContestEffectDetail {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('appeal' in value) || value['appeal'] === undefined) return false;
    if (!('jam' in value) || value['jam'] === undefined) return false;
    if (!('effectEntries' in value) || value['effectEntries'] === undefined) return false;
    if (!('flavorTextEntries' in value) || value['flavorTextEntries'] === undefined) return false;
    return true;
}

export function ContestEffectDetailFromJSON(json: any): ContestEffectDetail {
    return ContestEffectDetailFromJSONTyped(json, false);
}

export function ContestEffectDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContestEffectDetail {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'appeal': json['appeal'],
        'jam': json['jam'],
        'effectEntries': ((json['effect_entries'] as Array<any>).map(ContestEffectEffectTextFromJSON)),
        'flavorTextEntries': ((json['flavor_text_entries'] as Array<any>).map(ContestEffectFlavorTextFromJSON)),
    };
}

export function ContestEffectDetailToJSON(json: any): ContestEffectDetail {
    return ContestEffectDetailToJSONTyped(json, false);
}

export function ContestEffectDetailToJSONTyped(value?: Omit<ContestEffectDetail, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appeal': value['appeal'],
        'jam': value['jam'],
        'effect_entries': ((value['effectEntries'] as Array<any>).map(ContestEffectEffectTextToJSON)),
        'flavor_text_entries': ((value['flavorTextEntries'] as Array<any>).map(ContestEffectFlavorTextToJSON)),
    };
}

