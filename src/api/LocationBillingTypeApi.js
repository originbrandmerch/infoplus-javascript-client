/**
 * Infoplus API
 * Infoplus API.
 *
 * OpenAPI spec version: beta
 * Contact: api@infopluscommerce.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiResponse', 'model/LocationBillingType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/LocationBillingType'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.LocationBillingTypeApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.LocationBillingType);
  }
}(this, function(ApiClient, ApiResponse, LocationBillingType) {
  'use strict';

  /**
   * LocationBillingType service.
   * @module api/LocationBillingTypeApi
   * @version beta
   */

  /**
   * Constructs a new LocationBillingTypeApi. 
   * @alias module:api/LocationBillingTypeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addLocationBillingType operation.
     * @callback module:api/LocationBillingTypeApi~addLocationBillingTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationBillingType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a locationBillingType
     * Inserts a new locationBillingType using the specified data.
     * @param {module:model/LocationBillingType} body LocationBillingType to be inserted.
     * @param {module:api/LocationBillingTypeApi~addLocationBillingTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LocationBillingType}
     */
    this.addLocationBillingType = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addLocationBillingType");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LocationBillingType;

      return this.apiClient.callApi(
        '/beta/locationBillingType', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addLocationBillingTypeAudit operation.
     * @callback module:api/LocationBillingTypeApi~addLocationBillingTypeAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a locationBillingType
     * Adds an audit to an existing locationBillingType.
     * @param {Number} locationBillingTypeId Id of the locationBillingType to add an audit to
     * @param {String} locationBillingTypeAudit The audit to add
     * @param {module:api/LocationBillingTypeApi~addLocationBillingTypeAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addLocationBillingTypeAudit = function(locationBillingTypeId, locationBillingTypeAudit, callback) {
      var postBody = null;

      // verify the required parameter 'locationBillingTypeId' is set
      if (locationBillingTypeId === undefined || locationBillingTypeId === null) {
        throw new Error("Missing the required parameter 'locationBillingTypeId' when calling addLocationBillingTypeAudit");
      }

      // verify the required parameter 'locationBillingTypeAudit' is set
      if (locationBillingTypeAudit === undefined || locationBillingTypeAudit === null) {
        throw new Error("Missing the required parameter 'locationBillingTypeAudit' when calling addLocationBillingTypeAudit");
      }


      var pathParams = {
        'locationBillingTypeId': locationBillingTypeId,
        'locationBillingTypeAudit': locationBillingTypeAudit
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/locationBillingType/{locationBillingTypeId}/audit/{locationBillingTypeAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addLocationBillingTypeTag operation.
     * @callback module:api/LocationBillingTypeApi~addLocationBillingTypeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a locationBillingType.
     * Adds a tag to an existing locationBillingType.
     * @param {Number} locationBillingTypeId Id of the locationBillingType to add a tag to
     * @param {String} locationBillingTypeTag The tag to add
     * @param {module:api/LocationBillingTypeApi~addLocationBillingTypeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addLocationBillingTypeTag = function(locationBillingTypeId, locationBillingTypeTag, callback) {
      var postBody = null;

      // verify the required parameter 'locationBillingTypeId' is set
      if (locationBillingTypeId === undefined || locationBillingTypeId === null) {
        throw new Error("Missing the required parameter 'locationBillingTypeId' when calling addLocationBillingTypeTag");
      }

      // verify the required parameter 'locationBillingTypeTag' is set
      if (locationBillingTypeTag === undefined || locationBillingTypeTag === null) {
        throw new Error("Missing the required parameter 'locationBillingTypeTag' when calling addLocationBillingTypeTag");
      }


      var pathParams = {
        'locationBillingTypeId': locationBillingTypeId,
        'locationBillingTypeTag': locationBillingTypeTag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/locationBillingType/{locationBillingTypeId}/tag/{locationBillingTypeTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLocationBillingType operation.
     * @callback module:api/LocationBillingTypeApi~deleteLocationBillingTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a locationBillingType
     * Deletes the locationBillingType identified by the specified id.
     * @param {Number} locationBillingTypeId Id of the locationBillingType to be deleted.
     * @param {module:api/LocationBillingTypeApi~deleteLocationBillingTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteLocationBillingType = function(locationBillingTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'locationBillingTypeId' is set
      if (locationBillingTypeId === undefined || locationBillingTypeId === null) {
        throw new Error("Missing the required parameter 'locationBillingTypeId' when calling deleteLocationBillingType");
      }


      var pathParams = {
        'locationBillingTypeId': locationBillingTypeId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/locationBillingType/{locationBillingTypeId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLocationBillingTypeTag operation.
     * @callback module:api/LocationBillingTypeApi~deleteLocationBillingTypeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a locationBillingType.
     * Deletes an existing locationBillingType tag using the specified data.
     * @param {Number} locationBillingTypeId Id of the locationBillingType to remove tag from
     * @param {String} locationBillingTypeTag The tag to delete
     * @param {module:api/LocationBillingTypeApi~deleteLocationBillingTypeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteLocationBillingTypeTag = function(locationBillingTypeId, locationBillingTypeTag, callback) {
      var postBody = null;

      // verify the required parameter 'locationBillingTypeId' is set
      if (locationBillingTypeId === undefined || locationBillingTypeId === null) {
        throw new Error("Missing the required parameter 'locationBillingTypeId' when calling deleteLocationBillingTypeTag");
      }

      // verify the required parameter 'locationBillingTypeTag' is set
      if (locationBillingTypeTag === undefined || locationBillingTypeTag === null) {
        throw new Error("Missing the required parameter 'locationBillingTypeTag' when calling deleteLocationBillingTypeTag");
      }


      var pathParams = {
        'locationBillingTypeId': locationBillingTypeId,
        'locationBillingTypeTag': locationBillingTypeTag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/locationBillingType/{locationBillingTypeId}/tag/{locationBillingTypeTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateLocationBillingTypeById operation.
     * @callback module:api/LocationBillingTypeApi~getDuplicateLocationBillingTypeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationBillingType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a locationBillingType by id
     * Returns a duplicated locationBillingType identified by the specified id.
     * @param {Number} locationBillingTypeId Id of the locationBillingType to be duplicated.
     * @param {module:api/LocationBillingTypeApi~getDuplicateLocationBillingTypeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LocationBillingType}
     */
    this.getDuplicateLocationBillingTypeById = function(locationBillingTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'locationBillingTypeId' is set
      if (locationBillingTypeId === undefined || locationBillingTypeId === null) {
        throw new Error("Missing the required parameter 'locationBillingTypeId' when calling getDuplicateLocationBillingTypeById");
      }


      var pathParams = {
        'locationBillingTypeId': locationBillingTypeId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = LocationBillingType;

      return this.apiClient.callApi(
        '/beta/locationBillingType/duplicate/{locationBillingTypeId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLocationBillingTypeByFilter operation.
     * @callback module:api/LocationBillingTypeApi~getLocationBillingTypeByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LocationBillingType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search locationBillingTypes by filter
     * Returns the list of locationBillingTypes that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/LocationBillingTypeApi~getLocationBillingTypeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/LocationBillingType>}
     */
    this.getLocationBillingTypeByFilter = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
        'page': opts['page'],
        'limit': opts['limit'],
        'sort': opts['sort'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [LocationBillingType];

      return this.apiClient.callApi(
        '/beta/locationBillingType/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLocationBillingTypeById operation.
     * @callback module:api/LocationBillingTypeApi~getLocationBillingTypeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationBillingType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a locationBillingType by id
     * Returns the locationBillingType identified by the specified id.
     * @param {Number} locationBillingTypeId Id of the locationBillingType to be returned.
     * @param {module:api/LocationBillingTypeApi~getLocationBillingTypeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LocationBillingType}
     */
    this.getLocationBillingTypeById = function(locationBillingTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'locationBillingTypeId' is set
      if (locationBillingTypeId === undefined || locationBillingTypeId === null) {
        throw new Error("Missing the required parameter 'locationBillingTypeId' when calling getLocationBillingTypeById");
      }


      var pathParams = {
        'locationBillingTypeId': locationBillingTypeId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = LocationBillingType;

      return this.apiClient.callApi(
        '/beta/locationBillingType/{locationBillingTypeId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLocationBillingTypeTags operation.
     * @callback module:api/LocationBillingTypeApi~getLocationBillingTypeTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a locationBillingType.
     * Get all existing locationBillingType tags.
     * @param {Number} locationBillingTypeId Id of the locationBillingType to get tags for
     * @param {module:api/LocationBillingTypeApi~getLocationBillingTypeTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getLocationBillingTypeTags = function(locationBillingTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'locationBillingTypeId' is set
      if (locationBillingTypeId === undefined || locationBillingTypeId === null) {
        throw new Error("Missing the required parameter 'locationBillingTypeId' when calling getLocationBillingTypeTags");
      }


      var pathParams = {
        'locationBillingTypeId': locationBillingTypeId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/locationBillingType/{locationBillingTypeId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLocationBillingType operation.
     * @callback module:api/LocationBillingTypeApi~updateLocationBillingTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a locationBillingType
     * Updates an existing locationBillingType using the specified data.
     * @param {module:model/LocationBillingType} body LocationBillingType to be updated.
     * @param {module:api/LocationBillingTypeApi~updateLocationBillingTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateLocationBillingType = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateLocationBillingType");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/locationBillingType', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLocationBillingTypeCustomFields operation.
     * @callback module:api/LocationBillingTypeApi~updateLocationBillingTypeCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a locationBillingType custom fields
     * Updates an existing locationBillingType custom fields using the specified data.
     * @param {module:model/LocationBillingType} body LocationBillingType to be updated.
     * @param {module:api/LocationBillingTypeApi~updateLocationBillingTypeCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateLocationBillingTypeCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateLocationBillingTypeCustomFields");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/locationBillingType/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
