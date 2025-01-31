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
import type { AbilityDetailPokemonInner } from './AbilityDetailPokemonInner';
import {
    AbilityDetailPokemonInnerFromJSON,
    AbilityDetailPokemonInnerFromJSONTyped,
    AbilityDetailPokemonInnerToJSON,
    AbilityDetailPokemonInnerToJSONTyped,
} from './AbilityDetailPokemonInner';
import type { AbilityName } from './AbilityName';
import {
    AbilityNameFromJSON,
    AbilityNameFromJSONTyped,
    AbilityNameToJSON,
    AbilityNameToJSONTyped,
} from './AbilityName';
import type { GenerationSummary } from './GenerationSummary';
import {
    GenerationSummaryFromJSON,
    GenerationSummaryFromJSONTyped,
    GenerationSummaryToJSON,
    GenerationSummaryToJSONTyped,
} from './GenerationSummary';
import type { AbilityChange } from './AbilityChange';
import {
    AbilityChangeFromJSON,
    AbilityChangeFromJSONTyped,
    AbilityChangeToJSON,
    AbilityChangeToJSONTyped,
} from './AbilityChange';
import type { AbilityEffectText } from './AbilityEffectText';
import {
    AbilityEffectTextFromJSON,
    AbilityEffectTextFromJSONTyped,
    AbilityEffectTextToJSON,
    AbilityEffectTextToJSONTyped,
} from './AbilityEffectText';
import type { AbilityFlavorText } from './AbilityFlavorText';
import {
    AbilityFlavorTextFromJSON,
    AbilityFlavorTextFromJSONTyped,
    AbilityFlavorTextToJSON,
    AbilityFlavorTextToJSONTyped,
} from './AbilityFlavorText';

/**
 * 
 * @export
 * @interface AbilityDetail
 */
export interface AbilityDetail {
    /**
     * 
     * @type {number}
     * @memberof AbilityDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof AbilityDetail
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof AbilityDetail
     */
    isMainSeries?: boolean;
    /**
     * 
     * @type {GenerationSummary}
     * @memberof AbilityDetail
     */
    generation: GenerationSummary;
    /**
     * 
     * @type {Array<AbilityName>}
     * @memberof AbilityDetail
     */
    names: Array<AbilityName>;
    /**
     * 
     * @type {Array<AbilityEffectText>}
     * @memberof AbilityDetail
     */
    effectEntries: Array<AbilityEffectText>;
    /**
     * 
     * @type {Array<AbilityChange>}
     * @memberof AbilityDetail
     */
    effectChanges: Array<AbilityChange>;
    /**
     * 
     * @type {Array<AbilityFlavorText>}
     * @memberof AbilityDetail
     */
    flavorTextEntries: Array<AbilityFlavorText>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInner>}
     * @memberof AbilityDetail
     */
    pokemon: Array<AbilityDetailPokemonInner>;
}

/**
 * Check if a given object implements the AbilityDetail interface.
 */
export function instanceOfAbilityDetail(value: object): value is AbilityDetail {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('generation' in value) || value['generation'] === undefined) return false;
    if (!('names' in value) || value['names'] === undefined) return false;
    if (!('effectEntries' in value) || value['effectEntries'] === undefined) return false;
    if (!('effectChanges' in value) || value['effectChanges'] === undefined) return false;
    if (!('flavorTextEntries' in value) || value['flavorTextEntries'] === undefined) return false;
    if (!('pokemon' in value) || value['pokemon'] === undefined) return false;
    return true;
}

export function AbilityDetailFromJSON(json: any): AbilityDetail {
    return AbilityDetailFromJSONTyped(json, false);
}

export function AbilityDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbilityDetail {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'isMainSeries': json['is_main_series'] == null ? undefined : json['is_main_series'],
        'generation': GenerationSummaryFromJSON(json['generation']),
        'names': ((json['names'] as Array<any>).map(AbilityNameFromJSON)),
        'effectEntries': ((json['effect_entries'] as Array<any>).map(AbilityEffectTextFromJSON)),
        'effectChanges': ((json['effect_changes'] as Array<any>).map(AbilityChangeFromJSON)),
        'flavorTextEntries': ((json['flavor_text_entries'] as Array<any>).map(AbilityFlavorTextFromJSON)),
        'pokemon': ((json['pokemon'] as Array<any>).map(AbilityDetailPokemonInnerFromJSON)),
    };
}

export function AbilityDetailToJSON(json: any): AbilityDetail {
    return AbilityDetailToJSONTyped(json, false);
}

export function AbilityDetailToJSONTyped(value?: Omit<AbilityDetail, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'is_main_series': value['isMainSeries'],
        'generation': GenerationSummaryToJSON(value['generation']),
        'names': ((value['names'] as Array<any>).map(AbilityNameToJSON)),
        'effect_entries': ((value['effectEntries'] as Array<any>).map(AbilityEffectTextToJSON)),
        'effect_changes': ((value['effectChanges'] as Array<any>).map(AbilityChangeToJSON)),
        'flavor_text_entries': ((value['flavorTextEntries'] as Array<any>).map(AbilityFlavorTextToJSON)),
        'pokemon': ((value['pokemon'] as Array<any>).map(AbilityDetailPokemonInnerToJSON)),
    };
}

