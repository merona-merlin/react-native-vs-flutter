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
import type { VersionGroupSummary } from './VersionGroupSummary';
import {
    VersionGroupSummaryFromJSON,
    VersionGroupSummaryFromJSONTyped,
    VersionGroupSummaryToJSON,
    VersionGroupSummaryToJSONTyped,
} from './VersionGroupSummary';
import type { MoveSummary } from './MoveSummary';
import {
    MoveSummaryFromJSON,
    MoveSummaryFromJSONTyped,
    MoveSummaryToJSON,
    MoveSummaryToJSONTyped,
} from './MoveSummary';
import type { ItemSummary } from './ItemSummary';
import {
    ItemSummaryFromJSON,
    ItemSummaryFromJSONTyped,
    ItemSummaryToJSON,
    ItemSummaryToJSONTyped,
} from './ItemSummary';

/**
 * 
 * @export
 * @interface MachineDetail
 */
export interface MachineDetail {
    /**
     * 
     * @type {number}
     * @memberof MachineDetail
     */
    readonly id: number;
    /**
     * 
     * @type {ItemSummary}
     * @memberof MachineDetail
     */
    item: ItemSummary;
    /**
     * 
     * @type {VersionGroupSummary}
     * @memberof MachineDetail
     */
    versionGroup: VersionGroupSummary;
    /**
     * 
     * @type {MoveSummary}
     * @memberof MachineDetail
     */
    move: MoveSummary;
}

/**
 * Check if a given object implements the MachineDetail interface.
 */
export function instanceOfMachineDetail(value: object): value is MachineDetail {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('item' in value) || value['item'] === undefined) return false;
    if (!('versionGroup' in value) || value['versionGroup'] === undefined) return false;
    if (!('move' in value) || value['move'] === undefined) return false;
    return true;
}

export function MachineDetailFromJSON(json: any): MachineDetail {
    return MachineDetailFromJSONTyped(json, false);
}

export function MachineDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): MachineDetail {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'item': ItemSummaryFromJSON(json['item']),
        'versionGroup': VersionGroupSummaryFromJSON(json['version_group']),
        'move': MoveSummaryFromJSON(json['move']),
    };
}

export function MachineDetailToJSON(json: any): MachineDetail {
    return MachineDetailToJSONTyped(json, false);
}

export function MachineDetailToJSONTyped(value?: Omit<MachineDetail, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'item': ItemSummaryToJSON(value['item']),
        'version_group': VersionGroupSummaryToJSON(value['versionGroup']),
        'move': MoveSummaryToJSON(value['move']),
    };
}

