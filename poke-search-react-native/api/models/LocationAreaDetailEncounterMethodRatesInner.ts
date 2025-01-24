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
import type { LocationAreaDetailEncounterMethodRatesInnerVersionDetailsInner } from './LocationAreaDetailEncounterMethodRatesInnerVersionDetailsInner';
import {
    LocationAreaDetailEncounterMethodRatesInnerVersionDetailsInnerFromJSON,
    LocationAreaDetailEncounterMethodRatesInnerVersionDetailsInnerFromJSONTyped,
    LocationAreaDetailEncounterMethodRatesInnerVersionDetailsInnerToJSON,
    LocationAreaDetailEncounterMethodRatesInnerVersionDetailsInnerToJSONTyped,
} from './LocationAreaDetailEncounterMethodRatesInnerVersionDetailsInner';
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
 * @interface LocationAreaDetailEncounterMethodRatesInner
 */
export interface LocationAreaDetailEncounterMethodRatesInner {
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof LocationAreaDetailEncounterMethodRatesInner
     */
    encounterMethod: AbilityDetailPokemonInnerPokemon;
    /**
     * 
     * @type {Array<LocationAreaDetailEncounterMethodRatesInnerVersionDetailsInner>}
     * @memberof LocationAreaDetailEncounterMethodRatesInner
     */
    versionDetails: Array<LocationAreaDetailEncounterMethodRatesInnerVersionDetailsInner>;
}

/**
 * Check if a given object implements the LocationAreaDetailEncounterMethodRatesInner interface.
 */
export function instanceOfLocationAreaDetailEncounterMethodRatesInner(value: object): value is LocationAreaDetailEncounterMethodRatesInner {
    if (!('encounterMethod' in value) || value['encounterMethod'] === undefined) return false;
    if (!('versionDetails' in value) || value['versionDetails'] === undefined) return false;
    return true;
}

export function LocationAreaDetailEncounterMethodRatesInnerFromJSON(json: any): LocationAreaDetailEncounterMethodRatesInner {
    return LocationAreaDetailEncounterMethodRatesInnerFromJSONTyped(json, false);
}

export function LocationAreaDetailEncounterMethodRatesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationAreaDetailEncounterMethodRatesInner {
    if (json == null) {
        return json;
    }
    return {
        
        'encounterMethod': AbilityDetailPokemonInnerPokemonFromJSON(json['encounter_method']),
        'versionDetails': ((json['version_details'] as Array<any>).map(LocationAreaDetailEncounterMethodRatesInnerVersionDetailsInnerFromJSON)),
    };
}

export function LocationAreaDetailEncounterMethodRatesInnerToJSON(json: any): LocationAreaDetailEncounterMethodRatesInner {
    return LocationAreaDetailEncounterMethodRatesInnerToJSONTyped(json, false);
}

export function LocationAreaDetailEncounterMethodRatesInnerToJSONTyped(value?: LocationAreaDetailEncounterMethodRatesInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'encounter_method': AbilityDetailPokemonInnerPokemonToJSON(value['encounterMethod']),
        'version_details': ((value['versionDetails'] as Array<any>).map(LocationAreaDetailEncounterMethodRatesInnerVersionDetailsInnerToJSON)),
    };
}

