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
/**
 * 
 * @export
 * @interface AbilitySummary
 */
export interface AbilitySummary {
    /**
     * 
     * @type {string}
     * @memberof AbilitySummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AbilitySummary
     */
    readonly url: string;
}

/**
 * Check if a given object implements the AbilitySummary interface.
 */
export function instanceOfAbilitySummary(value: object): value is AbilitySummary {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function AbilitySummaryFromJSON(json: any): AbilitySummary {
    return AbilitySummaryFromJSONTyped(json, false);
}

export function AbilitySummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbilitySummary {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'url': json['url'],
    };
}

export function AbilitySummaryToJSON(json: any): AbilitySummary {
    return AbilitySummaryToJSONTyped(json, false);
}

export function AbilitySummaryToJSONTyped(value?: Omit<AbilitySummary, 'url'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
    };
}

