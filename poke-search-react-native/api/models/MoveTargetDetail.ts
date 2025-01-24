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
import type { MoveTargetDescription } from './MoveTargetDescription';
import {
    MoveTargetDescriptionFromJSON,
    MoveTargetDescriptionFromJSONTyped,
    MoveTargetDescriptionToJSON,
    MoveTargetDescriptionToJSONTyped,
} from './MoveTargetDescription';
import type { MoveSummary } from './MoveSummary';
import {
    MoveSummaryFromJSON,
    MoveSummaryFromJSONTyped,
    MoveSummaryToJSON,
    MoveSummaryToJSONTyped,
} from './MoveSummary';
import type { MoveTargetName } from './MoveTargetName';
import {
    MoveTargetNameFromJSON,
    MoveTargetNameFromJSONTyped,
    MoveTargetNameToJSON,
    MoveTargetNameToJSONTyped,
} from './MoveTargetName';

/**
 * 
 * @export
 * @interface MoveTargetDetail
 */
export interface MoveTargetDetail {
    /**
     * 
     * @type {number}
     * @memberof MoveTargetDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof MoveTargetDetail
     */
    name: string;
    /**
     * 
     * @type {Array<MoveTargetDescription>}
     * @memberof MoveTargetDetail
     */
    descriptions: Array<MoveTargetDescription>;
    /**
     * 
     * @type {Array<MoveSummary>}
     * @memberof MoveTargetDetail
     */
    moves: Array<MoveSummary>;
    /**
     * 
     * @type {Array<MoveTargetName>}
     * @memberof MoveTargetDetail
     */
    names: Array<MoveTargetName>;
}

/**
 * Check if a given object implements the MoveTargetDetail interface.
 */
export function instanceOfMoveTargetDetail(value: object): value is MoveTargetDetail {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('descriptions' in value) || value['descriptions'] === undefined) return false;
    if (!('moves' in value) || value['moves'] === undefined) return false;
    if (!('names' in value) || value['names'] === undefined) return false;
    return true;
}

export function MoveTargetDetailFromJSON(json: any): MoveTargetDetail {
    return MoveTargetDetailFromJSONTyped(json, false);
}

export function MoveTargetDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoveTargetDetail {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'descriptions': ((json['descriptions'] as Array<any>).map(MoveTargetDescriptionFromJSON)),
        'moves': ((json['moves'] as Array<any>).map(MoveSummaryFromJSON)),
        'names': ((json['names'] as Array<any>).map(MoveTargetNameFromJSON)),
    };
}

export function MoveTargetDetailToJSON(json: any): MoveTargetDetail {
    return MoveTargetDetailToJSONTyped(json, false);
}

export function MoveTargetDetailToJSONTyped(value?: Omit<MoveTargetDetail, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'descriptions': ((value['descriptions'] as Array<any>).map(MoveTargetDescriptionToJSON)),
        'moves': ((value['moves'] as Array<any>).map(MoveSummaryToJSON)),
        'names': ((value['names'] as Array<any>).map(MoveTargetNameToJSON)),
    };
}

