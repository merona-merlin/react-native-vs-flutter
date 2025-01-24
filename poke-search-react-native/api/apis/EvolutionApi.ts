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


import * as runtime from '../runtime';
import type {
  EvolutionChainDetail,
  EvolutionTriggerDetail,
  PaginatedEvolutionChainSummaryList,
  PaginatedEvolutionTriggerSummaryList,
} from '../models/index';
import {
    EvolutionChainDetailFromJSON,
    EvolutionChainDetailToJSON,
    EvolutionTriggerDetailFromJSON,
    EvolutionTriggerDetailToJSON,
    PaginatedEvolutionChainSummaryListFromJSON,
    PaginatedEvolutionChainSummaryListToJSON,
    PaginatedEvolutionTriggerSummaryListFromJSON,
    PaginatedEvolutionTriggerSummaryListToJSON,
} from '../models/index';

export interface EvolutionChainListRequest {
    limit?: number;
    offset?: number;
    q?: string;
}

export interface EvolutionChainRetrieveRequest {
    id: string;
}

export interface EvolutionTriggerListRequest {
    limit?: number;
    offset?: number;
    q?: string;
}

export interface EvolutionTriggerRetrieveRequest {
    id: string;
}

/**
 * 
 */
export class EvolutionApi extends runtime.BaseAPI {

    /**
     * Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.
     * List evolution chains
     */
    async evolutionChainListRaw(requestParameters: EvolutionChainListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedEvolutionChainSummaryList>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['q'] != null) {
            queryParameters['q'] = requestParameters['q'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/evolution-chain/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedEvolutionChainSummaryListFromJSON(jsonValue));
    }

    /**
     * Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.
     * List evolution chains
     */
    async evolutionChainList(requestParameters: EvolutionChainListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedEvolutionChainSummaryList> {
        const response = await this.evolutionChainListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.
     * Get evolution chain
     */
    async evolutionChainRetrieveRaw(requestParameters: EvolutionChainRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EvolutionChainDetail>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling evolutionChainRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/evolution-chain/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EvolutionChainDetailFromJSON(jsonValue));
    }

    /**
     * Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.
     * Get evolution chain
     */
    async evolutionChainRetrieve(requestParameters: EvolutionChainRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EvolutionChainDetail> {
        const response = await this.evolutionChainRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.
     * List evolution triggers
     */
    async evolutionTriggerListRaw(requestParameters: EvolutionTriggerListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedEvolutionTriggerSummaryList>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['q'] != null) {
            queryParameters['q'] = requestParameters['q'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/evolution-trigger/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedEvolutionTriggerSummaryListFromJSON(jsonValue));
    }

    /**
     * Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.
     * List evolution triggers
     */
    async evolutionTriggerList(requestParameters: EvolutionTriggerListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedEvolutionTriggerSummaryList> {
        const response = await this.evolutionTriggerListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.
     * Get evolution trigger
     */
    async evolutionTriggerRetrieveRaw(requestParameters: EvolutionTriggerRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EvolutionTriggerDetail>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling evolutionTriggerRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/evolution-trigger/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EvolutionTriggerDetailFromJSON(jsonValue));
    }

    /**
     * Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.
     * Get evolution trigger
     */
    async evolutionTriggerRetrieve(requestParameters: EvolutionTriggerRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EvolutionTriggerDetail> {
        const response = await this.evolutionTriggerRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
