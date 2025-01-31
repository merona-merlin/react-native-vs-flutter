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
import type { MoveMetaCategorySummary } from './MoveMetaCategorySummary';
import {
    MoveMetaCategorySummaryFromJSON,
    MoveMetaCategorySummaryFromJSONTyped,
    MoveMetaCategorySummaryToJSON,
    MoveMetaCategorySummaryToJSONTyped,
} from './MoveMetaCategorySummary';
import type { MoveMetaAilmentSummary } from './MoveMetaAilmentSummary';
import {
    MoveMetaAilmentSummaryFromJSON,
    MoveMetaAilmentSummaryFromJSONTyped,
    MoveMetaAilmentSummaryToJSON,
    MoveMetaAilmentSummaryToJSONTyped,
} from './MoveMetaAilmentSummary';

/**
 * 
 * @export
 * @interface MoveMeta
 */
export interface MoveMeta {
    /**
     * 
     * @type {MoveMetaAilmentSummary}
     * @memberof MoveMeta
     */
    ailment: MoveMetaAilmentSummary;
    /**
     * 
     * @type {MoveMetaCategorySummary}
     * @memberof MoveMeta
     */
    category: MoveMetaCategorySummary;
    /**
     * 
     * @type {number}
     * @memberof MoveMeta
     */
    minHits?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MoveMeta
     */
    maxHits?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MoveMeta
     */
    minTurns?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MoveMeta
     */
    maxTurns?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MoveMeta
     */
    drain?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MoveMeta
     */
    healing?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MoveMeta
     */
    critRate?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MoveMeta
     */
    ailmentChance?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MoveMeta
     */
    flinchChance?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MoveMeta
     */
    statChance?: number | null;
}

/**
 * Check if a given object implements the MoveMeta interface.
 */
export function instanceOfMoveMeta(value: object): value is MoveMeta {
    if (!('ailment' in value) || value['ailment'] === undefined) return false;
    if (!('category' in value) || value['category'] === undefined) return false;
    return true;
}

export function MoveMetaFromJSON(json: any): MoveMeta {
    return MoveMetaFromJSONTyped(json, false);
}

export function MoveMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoveMeta {
    if (json == null) {
        return json;
    }
    return {
        
        'ailment': MoveMetaAilmentSummaryFromJSON(json['ailment']),
        'category': MoveMetaCategorySummaryFromJSON(json['category']),
        'minHits': json['min_hits'] == null ? undefined : json['min_hits'],
        'maxHits': json['max_hits'] == null ? undefined : json['max_hits'],
        'minTurns': json['min_turns'] == null ? undefined : json['min_turns'],
        'maxTurns': json['max_turns'] == null ? undefined : json['max_turns'],
        'drain': json['drain'] == null ? undefined : json['drain'],
        'healing': json['healing'] == null ? undefined : json['healing'],
        'critRate': json['crit_rate'] == null ? undefined : json['crit_rate'],
        'ailmentChance': json['ailment_chance'] == null ? undefined : json['ailment_chance'],
        'flinchChance': json['flinch_chance'] == null ? undefined : json['flinch_chance'],
        'statChance': json['stat_chance'] == null ? undefined : json['stat_chance'],
    };
}

export function MoveMetaToJSON(json: any): MoveMeta {
    return MoveMetaToJSONTyped(json, false);
}

export function MoveMetaToJSONTyped(value?: MoveMeta | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ailment': MoveMetaAilmentSummaryToJSON(value['ailment']),
        'category': MoveMetaCategorySummaryToJSON(value['category']),
        'min_hits': value['minHits'],
        'max_hits': value['maxHits'],
        'min_turns': value['minTurns'],
        'max_turns': value['maxTurns'],
        'drain': value['drain'],
        'healing': value['healing'],
        'crit_rate': value['critRate'],
        'ailment_chance': value['ailmentChance'],
        'flinch_chance': value['flinchChance'],
        'stat_chance': value['statChance'],
    };
}

