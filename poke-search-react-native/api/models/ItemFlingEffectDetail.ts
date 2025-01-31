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
import type { ItemSummary } from './ItemSummary';
import {
    ItemSummaryFromJSON,
    ItemSummaryFromJSONTyped,
    ItemSummaryToJSON,
    ItemSummaryToJSONTyped,
} from './ItemSummary';
import type { ItemFlingEffectEffectText } from './ItemFlingEffectEffectText';
import {
    ItemFlingEffectEffectTextFromJSON,
    ItemFlingEffectEffectTextFromJSONTyped,
    ItemFlingEffectEffectTextToJSON,
    ItemFlingEffectEffectTextToJSONTyped,
} from './ItemFlingEffectEffectText';

/**
 * 
 * @export
 * @interface ItemFlingEffectDetail
 */
export interface ItemFlingEffectDetail {
    /**
     * 
     * @type {number}
     * @memberof ItemFlingEffectDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof ItemFlingEffectDetail
     */
    name: string;
    /**
     * 
     * @type {Array<ItemFlingEffectEffectText>}
     * @memberof ItemFlingEffectDetail
     */
    effectEntries: Array<ItemFlingEffectEffectText>;
    /**
     * 
     * @type {Array<ItemSummary>}
     * @memberof ItemFlingEffectDetail
     */
    items: Array<ItemSummary>;
}

/**
 * Check if a given object implements the ItemFlingEffectDetail interface.
 */
export function instanceOfItemFlingEffectDetail(value: object): value is ItemFlingEffectDetail {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('effectEntries' in value) || value['effectEntries'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function ItemFlingEffectDetailFromJSON(json: any): ItemFlingEffectDetail {
    return ItemFlingEffectDetailFromJSONTyped(json, false);
}

export function ItemFlingEffectDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemFlingEffectDetail {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'effectEntries': ((json['effect_entries'] as Array<any>).map(ItemFlingEffectEffectTextFromJSON)),
        'items': ((json['items'] as Array<any>).map(ItemSummaryFromJSON)),
    };
}

export function ItemFlingEffectDetailToJSON(json: any): ItemFlingEffectDetail {
    return ItemFlingEffectDetailToJSONTyped(json, false);
}

export function ItemFlingEffectDetailToJSONTyped(value?: Omit<ItemFlingEffectDetail, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'effect_entries': ((value['effectEntries'] as Array<any>).map(ItemFlingEffectEffectTextToJSON)),
        'items': ((value['items'] as Array<any>).map(ItemSummaryToJSON)),
    };
}

