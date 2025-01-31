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
import type { MoveDetailMachinesInnerMachine } from './MoveDetailMachinesInnerMachine';
import {
    MoveDetailMachinesInnerMachineFromJSON,
    MoveDetailMachinesInnerMachineFromJSONTyped,
    MoveDetailMachinesInnerMachineToJSON,
    MoveDetailMachinesInnerMachineToJSONTyped,
} from './MoveDetailMachinesInnerMachine';
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
 * @interface MoveDetailMachinesInner
 */
export interface MoveDetailMachinesInner {
    /**
     * 
     * @type {MoveDetailMachinesInnerMachine}
     * @memberof MoveDetailMachinesInner
     */
    machine: MoveDetailMachinesInnerMachine;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof MoveDetailMachinesInner
     */
    versionGroup: AbilityDetailPokemonInnerPokemon;
}

/**
 * Check if a given object implements the MoveDetailMachinesInner interface.
 */
export function instanceOfMoveDetailMachinesInner(value: object): value is MoveDetailMachinesInner {
    if (!('machine' in value) || value['machine'] === undefined) return false;
    if (!('versionGroup' in value) || value['versionGroup'] === undefined) return false;
    return true;
}

export function MoveDetailMachinesInnerFromJSON(json: any): MoveDetailMachinesInner {
    return MoveDetailMachinesInnerFromJSONTyped(json, false);
}

export function MoveDetailMachinesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoveDetailMachinesInner {
    if (json == null) {
        return json;
    }
    return {
        
        'machine': MoveDetailMachinesInnerMachineFromJSON(json['machine']),
        'versionGroup': AbilityDetailPokemonInnerPokemonFromJSON(json['version_group']),
    };
}

export function MoveDetailMachinesInnerToJSON(json: any): MoveDetailMachinesInner {
    return MoveDetailMachinesInnerToJSONTyped(json, false);
}

export function MoveDetailMachinesInnerToJSONTyped(value?: MoveDetailMachinesInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'machine': MoveDetailMachinesInnerMachineToJSON(value['machine']),
        'version_group': AbilityDetailPokemonInnerPokemonToJSON(value['versionGroup']),
    };
}

