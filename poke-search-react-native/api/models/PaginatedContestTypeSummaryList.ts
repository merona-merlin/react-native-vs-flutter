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
import type { ContestTypeSummary } from './ContestTypeSummary';
import {
    ContestTypeSummaryFromJSON,
    ContestTypeSummaryFromJSONTyped,
    ContestTypeSummaryToJSON,
    ContestTypeSummaryToJSONTyped,
} from './ContestTypeSummary';

/**
 * 
 * @export
 * @interface PaginatedContestTypeSummaryList
 */
export interface PaginatedContestTypeSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedContestTypeSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedContestTypeSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedContestTypeSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<ContestTypeSummary>}
     * @memberof PaginatedContestTypeSummaryList
     */
    results?: Array<ContestTypeSummary>;
}

/**
 * Check if a given object implements the PaginatedContestTypeSummaryList interface.
 */
export function instanceOfPaginatedContestTypeSummaryList(value: object): value is PaginatedContestTypeSummaryList {
    return true;
}

export function PaginatedContestTypeSummaryListFromJSON(json: any): PaginatedContestTypeSummaryList {
    return PaginatedContestTypeSummaryListFromJSONTyped(json, false);
}

export function PaginatedContestTypeSummaryListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedContestTypeSummaryList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'] == null ? undefined : json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': json['results'] == null ? undefined : ((json['results'] as Array<any>).map(ContestTypeSummaryFromJSON)),
    };
}

export function PaginatedContestTypeSummaryListToJSON(json: any): PaginatedContestTypeSummaryList {
    return PaginatedContestTypeSummaryListToJSONTyped(json, false);
}

export function PaginatedContestTypeSummaryListToJSONTyped(value?: PaginatedContestTypeSummaryList | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(ContestTypeSummaryToJSON)),
    };
}

