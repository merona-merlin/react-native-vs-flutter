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
  ItemAttributeDetail,
  ItemCategoryDetail,
  ItemDetail,
  ItemFlingEffectDetail,
  ItemPocketDetail,
  PaginatedItemAttributeSummaryList,
  PaginatedItemCategorySummaryList,
  PaginatedItemFlingEffectSummaryList,
  PaginatedItemPocketSummaryList,
  PaginatedItemSummaryList,
} from '../models/index';
import {
    ItemAttributeDetailFromJSON,
    ItemAttributeDetailToJSON,
    ItemCategoryDetailFromJSON,
    ItemCategoryDetailToJSON,
    ItemDetailFromJSON,
    ItemDetailToJSON,
    ItemFlingEffectDetailFromJSON,
    ItemFlingEffectDetailToJSON,
    ItemPocketDetailFromJSON,
    ItemPocketDetailToJSON,
    PaginatedItemAttributeSummaryListFromJSON,
    PaginatedItemAttributeSummaryListToJSON,
    PaginatedItemCategorySummaryListFromJSON,
    PaginatedItemCategorySummaryListToJSON,
    PaginatedItemFlingEffectSummaryListFromJSON,
    PaginatedItemFlingEffectSummaryListToJSON,
    PaginatedItemPocketSummaryListFromJSON,
    PaginatedItemPocketSummaryListToJSON,
    PaginatedItemSummaryListFromJSON,
    PaginatedItemSummaryListToJSON,
} from '../models/index';

export interface ItemAttributeListRequest {
    limit?: number;
    offset?: number;
    q?: string;
}

export interface ItemAttributeRetrieveRequest {
    id: string;
}

export interface ItemCategoryListRequest {
    limit?: number;
    offset?: number;
    q?: string;
}

export interface ItemCategoryRetrieveRequest {
    id: string;
}

export interface ItemFlingEffectListRequest {
    limit?: number;
    offset?: number;
    q?: string;
}

export interface ItemFlingEffectRetrieveRequest {
    id: string;
}

export interface ItemListRequest {
    limit?: number;
    offset?: number;
    q?: string;
}

export interface ItemPocketListRequest {
    limit?: number;
    offset?: number;
    q?: string;
}

export interface ItemPocketRetrieveRequest {
    id: string;
}

export interface ItemRetrieveRequest {
    id: string;
}

/**
 * 
 */
export class ItemsApi extends runtime.BaseAPI {

    /**
     * Item attributes define particular aspects of items, e.g.\"usable in battle\" or \"consumable\".
     * List item attributes
     */
    async itemAttributeListRaw(requestParameters: ItemAttributeListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedItemAttributeSummaryList>> {
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
            path: `/api/v2/item-attribute/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedItemAttributeSummaryListFromJSON(jsonValue));
    }

    /**
     * Item attributes define particular aspects of items, e.g.\"usable in battle\" or \"consumable\".
     * List item attributes
     */
    async itemAttributeList(requestParameters: ItemAttributeListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedItemAttributeSummaryList> {
        const response = await this.itemAttributeListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Item attributes define particular aspects of items, e.g.\"usable in battle\" or \"consumable\".
     * Get item attribute
     */
    async itemAttributeRetrieveRaw(requestParameters: ItemAttributeRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ItemAttributeDetail>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling itemAttributeRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/item-attribute/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ItemAttributeDetailFromJSON(jsonValue));
    }

    /**
     * Item attributes define particular aspects of items, e.g.\"usable in battle\" or \"consumable\".
     * Get item attribute
     */
    async itemAttributeRetrieve(requestParameters: ItemAttributeRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ItemAttributeDetail> {
        const response = await this.itemAttributeRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Item categories determine where items will be placed in the players bag.
     * List item categories
     */
    async itemCategoryListRaw(requestParameters: ItemCategoryListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedItemCategorySummaryList>> {
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
            path: `/api/v2/item-category/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedItemCategorySummaryListFromJSON(jsonValue));
    }

    /**
     * Item categories determine where items will be placed in the players bag.
     * List item categories
     */
    async itemCategoryList(requestParameters: ItemCategoryListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedItemCategorySummaryList> {
        const response = await this.itemCategoryListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Item categories determine where items will be placed in the players bag.
     * Get item category
     */
    async itemCategoryRetrieveRaw(requestParameters: ItemCategoryRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ItemCategoryDetail>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling itemCategoryRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/item-category/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ItemCategoryDetailFromJSON(jsonValue));
    }

    /**
     * Item categories determine where items will be placed in the players bag.
     * Get item category
     */
    async itemCategoryRetrieve(requestParameters: ItemCategoryRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ItemCategoryDetail> {
        const response = await this.itemCategoryRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The various effects of the move\"Fling\" when used with different items.
     * List item fling effects
     */
    async itemFlingEffectListRaw(requestParameters: ItemFlingEffectListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedItemFlingEffectSummaryList>> {
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
            path: `/api/v2/item-fling-effect/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedItemFlingEffectSummaryListFromJSON(jsonValue));
    }

    /**
     * The various effects of the move\"Fling\" when used with different items.
     * List item fling effects
     */
    async itemFlingEffectList(requestParameters: ItemFlingEffectListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedItemFlingEffectSummaryList> {
        const response = await this.itemFlingEffectListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The various effects of the move\"Fling\" when used with different items.
     * Get item fling effect
     */
    async itemFlingEffectRetrieveRaw(requestParameters: ItemFlingEffectRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ItemFlingEffectDetail>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling itemFlingEffectRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/item-fling-effect/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ItemFlingEffectDetailFromJSON(jsonValue));
    }

    /**
     * The various effects of the move\"Fling\" when used with different items.
     * Get item fling effect
     */
    async itemFlingEffectRetrieve(requestParameters: ItemFlingEffectRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ItemFlingEffectDetail> {
        const response = await this.itemFlingEffectRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.
     * List items
     */
    async itemListRaw(requestParameters: ItemListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedItemSummaryList>> {
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
            path: `/api/v2/item/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedItemSummaryListFromJSON(jsonValue));
    }

    /**
     * An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.
     * List items
     */
    async itemList(requestParameters: ItemListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedItemSummaryList> {
        const response = await this.itemListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Pockets within the players bag used for storing items by category.
     * List item pockets
     */
    async itemPocketListRaw(requestParameters: ItemPocketListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedItemPocketSummaryList>> {
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
            path: `/api/v2/item-pocket/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedItemPocketSummaryListFromJSON(jsonValue));
    }

    /**
     * Pockets within the players bag used for storing items by category.
     * List item pockets
     */
    async itemPocketList(requestParameters: ItemPocketListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedItemPocketSummaryList> {
        const response = await this.itemPocketListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Pockets within the players bag used for storing items by category.
     * Get item pocket
     */
    async itemPocketRetrieveRaw(requestParameters: ItemPocketRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ItemPocketDetail>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling itemPocketRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/item-pocket/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ItemPocketDetailFromJSON(jsonValue));
    }

    /**
     * Pockets within the players bag used for storing items by category.
     * Get item pocket
     */
    async itemPocketRetrieve(requestParameters: ItemPocketRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ItemPocketDetail> {
        const response = await this.itemPocketRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.
     * Get item
     */
    async itemRetrieveRaw(requestParameters: ItemRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ItemDetail>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling itemRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/item/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ItemDetailFromJSON(jsonValue));
    }

    /**
     * An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.
     * Get item
     */
    async itemRetrieve(requestParameters: ItemRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ItemDetail> {
        const response = await this.itemRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
