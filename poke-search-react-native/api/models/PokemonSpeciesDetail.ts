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
import type { PokemonSpeciesDetailPalParkEncountersInner } from './PokemonSpeciesDetailPalParkEncountersInner';
import {
    PokemonSpeciesDetailPalParkEncountersInnerFromJSON,
    PokemonSpeciesDetailPalParkEncountersInnerFromJSONTyped,
    PokemonSpeciesDetailPalParkEncountersInnerToJSON,
    PokemonSpeciesDetailPalParkEncountersInnerToJSONTyped,
} from './PokemonSpeciesDetailPalParkEncountersInner';
import type { PokemonSpeciesDetailVarietiesInner } from './PokemonSpeciesDetailVarietiesInner';
import {
    PokemonSpeciesDetailVarietiesInnerFromJSON,
    PokemonSpeciesDetailVarietiesInnerFromJSONTyped,
    PokemonSpeciesDetailVarietiesInnerToJSON,
    PokemonSpeciesDetailVarietiesInnerToJSONTyped,
} from './PokemonSpeciesDetailVarietiesInner';
import type { GenerationSummary } from './GenerationSummary';
import {
    GenerationSummaryFromJSON,
    GenerationSummaryFromJSONTyped,
    GenerationSummaryToJSON,
    GenerationSummaryToJSONTyped,
} from './GenerationSummary';
import type { PokemonFormDetailFormNamesInner } from './PokemonFormDetailFormNamesInner';
import {
    PokemonFormDetailFormNamesInnerFromJSON,
    PokemonFormDetailFormNamesInnerFromJSONTyped,
    PokemonFormDetailFormNamesInnerToJSON,
    PokemonFormDetailFormNamesInnerToJSONTyped,
} from './PokemonFormDetailFormNamesInner';
import type { PokemonSpeciesDetailGeneraInner } from './PokemonSpeciesDetailGeneraInner';
import {
    PokemonSpeciesDetailGeneraInnerFromJSON,
    PokemonSpeciesDetailGeneraInnerFromJSONTyped,
    PokemonSpeciesDetailGeneraInnerToJSON,
    PokemonSpeciesDetailGeneraInnerToJSONTyped,
} from './PokemonSpeciesDetailGeneraInner';
import type { PokemonSpeciesDescription } from './PokemonSpeciesDescription';
import {
    PokemonSpeciesDescriptionFromJSON,
    PokemonSpeciesDescriptionFromJSONTyped,
    PokemonSpeciesDescriptionToJSON,
    PokemonSpeciesDescriptionToJSONTyped,
} from './PokemonSpeciesDescription';
import type { PokemonDexEntry } from './PokemonDexEntry';
import {
    PokemonDexEntryFromJSON,
    PokemonDexEntryFromJSONTyped,
    PokemonDexEntryToJSON,
    PokemonDexEntryToJSONTyped,
} from './PokemonDexEntry';
import type { PokemonSpeciesFlavorText } from './PokemonSpeciesFlavorText';
import {
    PokemonSpeciesFlavorTextFromJSON,
    PokemonSpeciesFlavorTextFromJSONTyped,
    PokemonSpeciesFlavorTextToJSON,
    PokemonSpeciesFlavorTextToJSONTyped,
} from './PokemonSpeciesFlavorText';
import type { PokemonColorSummary } from './PokemonColorSummary';
import {
    PokemonColorSummaryFromJSON,
    PokemonColorSummaryFromJSONTyped,
    PokemonColorSummaryToJSON,
    PokemonColorSummaryToJSONTyped,
} from './PokemonColorSummary';
import type { PokemonShapeSummary } from './PokemonShapeSummary';
import {
    PokemonShapeSummaryFromJSON,
    PokemonShapeSummaryFromJSONTyped,
    PokemonShapeSummaryToJSON,
    PokemonShapeSummaryToJSONTyped,
} from './PokemonShapeSummary';
import type { AbilityDetailPokemonInnerPokemon } from './AbilityDetailPokemonInnerPokemon';
import {
    AbilityDetailPokemonInnerPokemonFromJSON,
    AbilityDetailPokemonInnerPokemonFromJSONTyped,
    AbilityDetailPokemonInnerPokemonToJSON,
    AbilityDetailPokemonInnerPokemonToJSONTyped,
} from './AbilityDetailPokemonInnerPokemon';
import type { GrowthRateSummary } from './GrowthRateSummary';
import {
    GrowthRateSummaryFromJSON,
    GrowthRateSummaryFromJSONTyped,
    GrowthRateSummaryToJSON,
    GrowthRateSummaryToJSONTyped,
} from './GrowthRateSummary';
import type { PokemonHabitatSummary } from './PokemonHabitatSummary';
import {
    PokemonHabitatSummaryFromJSON,
    PokemonHabitatSummaryFromJSONTyped,
    PokemonHabitatSummaryToJSON,
    PokemonHabitatSummaryToJSONTyped,
} from './PokemonHabitatSummary';
import type { EvolutionChainSummary } from './EvolutionChainSummary';
import {
    EvolutionChainSummaryFromJSON,
    EvolutionChainSummaryFromJSONTyped,
    EvolutionChainSummaryToJSON,
    EvolutionChainSummaryToJSONTyped,
} from './EvolutionChainSummary';
import type { PokemonSpeciesSummary } from './PokemonSpeciesSummary';
import {
    PokemonSpeciesSummaryFromJSON,
    PokemonSpeciesSummaryFromJSONTyped,
    PokemonSpeciesSummaryToJSON,
    PokemonSpeciesSummaryToJSONTyped,
} from './PokemonSpeciesSummary';

/**
 * 
 * @export
 * @interface PokemonSpeciesDetail
 */
export interface PokemonSpeciesDetail {
    /**
     * 
     * @type {number}
     * @memberof PokemonSpeciesDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof PokemonSpeciesDetail
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof PokemonSpeciesDetail
     */
    order?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PokemonSpeciesDetail
     */
    genderRate?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PokemonSpeciesDetail
     */
    captureRate?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PokemonSpeciesDetail
     */
    baseHappiness?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof PokemonSpeciesDetail
     */
    isBaby?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PokemonSpeciesDetail
     */
    isLegendary?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PokemonSpeciesDetail
     */
    isMythical?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PokemonSpeciesDetail
     */
    hatchCounter?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof PokemonSpeciesDetail
     */
    hasGenderDifferences?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PokemonSpeciesDetail
     */
    formsSwitchable?: boolean;
    /**
     * 
     * @type {GrowthRateSummary}
     * @memberof PokemonSpeciesDetail
     */
    growthRate: GrowthRateSummary;
    /**
     * 
     * @type {Array<PokemonDexEntry>}
     * @memberof PokemonSpeciesDetail
     */
    pokedexNumbers: Array<PokemonDexEntry>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof PokemonSpeciesDetail
     */
    eggGroups: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {PokemonColorSummary}
     * @memberof PokemonSpeciesDetail
     */
    color: PokemonColorSummary;
    /**
     * 
     * @type {PokemonShapeSummary}
     * @memberof PokemonSpeciesDetail
     */
    shape: PokemonShapeSummary;
    /**
     * 
     * @type {PokemonSpeciesSummary}
     * @memberof PokemonSpeciesDetail
     */
    evolvesFromSpecies: PokemonSpeciesSummary;
    /**
     * 
     * @type {EvolutionChainSummary}
     * @memberof PokemonSpeciesDetail
     */
    evolutionChain: EvolutionChainSummary;
    /**
     * 
     * @type {PokemonHabitatSummary}
     * @memberof PokemonSpeciesDetail
     */
    habitat: PokemonHabitatSummary;
    /**
     * 
     * @type {GenerationSummary}
     * @memberof PokemonSpeciesDetail
     */
    generation: GenerationSummary;
    /**
     * 
     * @type {Array<PokemonFormDetailFormNamesInner>}
     * @memberof PokemonSpeciesDetail
     */
    names: Array<PokemonFormDetailFormNamesInner>;
    /**
     * 
     * @type {Array<PokemonSpeciesDetailPalParkEncountersInner>}
     * @memberof PokemonSpeciesDetail
     */
    palParkEncounters: Array<PokemonSpeciesDetailPalParkEncountersInner>;
    /**
     * 
     * @type {Array<PokemonSpeciesDescription>}
     * @memberof PokemonSpeciesDetail
     */
    formDescriptions: Array<PokemonSpeciesDescription>;
    /**
     * 
     * @type {Array<PokemonSpeciesFlavorText>}
     * @memberof PokemonSpeciesDetail
     */
    flavorTextEntries: Array<PokemonSpeciesFlavorText>;
    /**
     * 
     * @type {Array<PokemonSpeciesDetailGeneraInner>}
     * @memberof PokemonSpeciesDetail
     */
    genera: Array<PokemonSpeciesDetailGeneraInner>;
    /**
     * 
     * @type {Array<PokemonSpeciesDetailVarietiesInner>}
     * @memberof PokemonSpeciesDetail
     */
    varieties: Array<PokemonSpeciesDetailVarietiesInner>;
}

/**
 * Check if a given object implements the PokemonSpeciesDetail interface.
 */
export function instanceOfPokemonSpeciesDetail(value: object): value is PokemonSpeciesDetail {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('growthRate' in value) || value['growthRate'] === undefined) return false;
    if (!('pokedexNumbers' in value) || value['pokedexNumbers'] === undefined) return false;
    if (!('eggGroups' in value) || value['eggGroups'] === undefined) return false;
    if (!('color' in value) || value['color'] === undefined) return false;
    if (!('shape' in value) || value['shape'] === undefined) return false;
    if (!('evolvesFromSpecies' in value) || value['evolvesFromSpecies'] === undefined) return false;
    if (!('evolutionChain' in value) || value['evolutionChain'] === undefined) return false;
    if (!('habitat' in value) || value['habitat'] === undefined) return false;
    if (!('generation' in value) || value['generation'] === undefined) return false;
    if (!('names' in value) || value['names'] === undefined) return false;
    if (!('palParkEncounters' in value) || value['palParkEncounters'] === undefined) return false;
    if (!('formDescriptions' in value) || value['formDescriptions'] === undefined) return false;
    if (!('flavorTextEntries' in value) || value['flavorTextEntries'] === undefined) return false;
    if (!('genera' in value) || value['genera'] === undefined) return false;
    if (!('varieties' in value) || value['varieties'] === undefined) return false;
    return true;
}

export function PokemonSpeciesDetailFromJSON(json: any): PokemonSpeciesDetail {
    return PokemonSpeciesDetailFromJSONTyped(json, false);
}

export function PokemonSpeciesDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): PokemonSpeciesDetail {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'order': json['order'] == null ? undefined : json['order'],
        'genderRate': json['gender_rate'] == null ? undefined : json['gender_rate'],
        'captureRate': json['capture_rate'] == null ? undefined : json['capture_rate'],
        'baseHappiness': json['base_happiness'] == null ? undefined : json['base_happiness'],
        'isBaby': json['is_baby'] == null ? undefined : json['is_baby'],
        'isLegendary': json['is_legendary'] == null ? undefined : json['is_legendary'],
        'isMythical': json['is_mythical'] == null ? undefined : json['is_mythical'],
        'hatchCounter': json['hatch_counter'] == null ? undefined : json['hatch_counter'],
        'hasGenderDifferences': json['has_gender_differences'] == null ? undefined : json['has_gender_differences'],
        'formsSwitchable': json['forms_switchable'] == null ? undefined : json['forms_switchable'],
        'growthRate': GrowthRateSummaryFromJSON(json['growth_rate']),
        'pokedexNumbers': ((json['pokedex_numbers'] as Array<any>).map(PokemonDexEntryFromJSON)),
        'eggGroups': ((json['egg_groups'] as Array<any>).map(AbilityDetailPokemonInnerPokemonFromJSON)),
        'color': PokemonColorSummaryFromJSON(json['color']),
        'shape': PokemonShapeSummaryFromJSON(json['shape']),
        'evolvesFromSpecies': PokemonSpeciesSummaryFromJSON(json['evolves_from_species']),
        'evolutionChain': EvolutionChainSummaryFromJSON(json['evolution_chain']),
        'habitat': PokemonHabitatSummaryFromJSON(json['habitat']),
        'generation': GenerationSummaryFromJSON(json['generation']),
        'names': ((json['names'] as Array<any>).map(PokemonFormDetailFormNamesInnerFromJSON)),
        'palParkEncounters': ((json['pal_park_encounters'] as Array<any>).map(PokemonSpeciesDetailPalParkEncountersInnerFromJSON)),
        'formDescriptions': ((json['form_descriptions'] as Array<any>).map(PokemonSpeciesDescriptionFromJSON)),
        'flavorTextEntries': ((json['flavor_text_entries'] as Array<any>).map(PokemonSpeciesFlavorTextFromJSON)),
        'genera': ((json['genera'] as Array<any>).map(PokemonSpeciesDetailGeneraInnerFromJSON)),
        'varieties': ((json['varieties'] as Array<any>).map(PokemonSpeciesDetailVarietiesInnerFromJSON)),
    };
}

export function PokemonSpeciesDetailToJSON(json: any): PokemonSpeciesDetail {
    return PokemonSpeciesDetailToJSONTyped(json, false);
}

export function PokemonSpeciesDetailToJSONTyped(value?: Omit<PokemonSpeciesDetail, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'order': value['order'],
        'gender_rate': value['genderRate'],
        'capture_rate': value['captureRate'],
        'base_happiness': value['baseHappiness'],
        'is_baby': value['isBaby'],
        'is_legendary': value['isLegendary'],
        'is_mythical': value['isMythical'],
        'hatch_counter': value['hatchCounter'],
        'has_gender_differences': value['hasGenderDifferences'],
        'forms_switchable': value['formsSwitchable'],
        'growth_rate': GrowthRateSummaryToJSON(value['growthRate']),
        'pokedex_numbers': ((value['pokedexNumbers'] as Array<any>).map(PokemonDexEntryToJSON)),
        'egg_groups': ((value['eggGroups'] as Array<any>).map(AbilityDetailPokemonInnerPokemonToJSON)),
        'color': PokemonColorSummaryToJSON(value['color']),
        'shape': PokemonShapeSummaryToJSON(value['shape']),
        'evolves_from_species': PokemonSpeciesSummaryToJSON(value['evolvesFromSpecies']),
        'evolution_chain': EvolutionChainSummaryToJSON(value['evolutionChain']),
        'habitat': PokemonHabitatSummaryToJSON(value['habitat']),
        'generation': GenerationSummaryToJSON(value['generation']),
        'names': ((value['names'] as Array<any>).map(PokemonFormDetailFormNamesInnerToJSON)),
        'pal_park_encounters': ((value['palParkEncounters'] as Array<any>).map(PokemonSpeciesDetailPalParkEncountersInnerToJSON)),
        'form_descriptions': ((value['formDescriptions'] as Array<any>).map(PokemonSpeciesDescriptionToJSON)),
        'flavor_text_entries': ((value['flavorTextEntries'] as Array<any>).map(PokemonSpeciesFlavorTextToJSON)),
        'genera': ((value['genera'] as Array<any>).map(PokemonSpeciesDetailGeneraInnerToJSON)),
        'varieties': ((value['varieties'] as Array<any>).map(PokemonSpeciesDetailVarietiesInnerToJSON)),
    };
}

