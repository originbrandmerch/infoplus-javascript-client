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
    define(['ApiClient', 'model/ApiResponse', 'model/ItemSerial'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/ItemSerial'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemSerialApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.ItemSerial);
  }
}(this, function(ApiClient, ApiResponse, ItemSerial) {
  'use strict';

  /**
   * ItemSerial service.
   * @module api/ItemSerialApi
   * @version beta
   */

  /**
   * Constructs a new ItemSerialApi. 
   * @alias module:api/ItemSerialApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addItemSerial operation.
     * @callback module:api/ItemSerialApi~addItemSerialCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemSerial} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an itemSerial
     * Inserts a new itemSerial using the specified data.
     * @param {module:model/ItemSerial} body ItemSerial to be inserted.
     * @param {module:api/ItemSerialApi~addItemSerialCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemSerial}
     */
    this.addItemSerial = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addItemSerial");
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
      var returnType = ItemSerial;

      return this.apiClient.callApi(
        '/beta/itemSerial', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemSerialAudit operation.
     * @callback module:api/ItemSerialApi~addItemSerialAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an itemSerial
     * Adds an audit to an existing itemSerial.
     * @param {Number} itemSerialId Id of the itemSerial to add an audit to
     * @param {String} itemSerialAudit The audit to add
     * @param {module:api/ItemSerialApi~addItemSerialAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemSerialAudit = function(itemSerialId, itemSerialAudit, callback) {
      var postBody = null;

      // verify the required parameter 'itemSerialId' is set
      if (itemSerialId === undefined || itemSerialId === null) {
        throw new Error("Missing the required parameter 'itemSerialId' when calling addItemSerialAudit");
      }

      // verify the required parameter 'itemSerialAudit' is set
      if (itemSerialAudit === undefined || itemSerialAudit === null) {
        throw new Error("Missing the required parameter 'itemSerialAudit' when calling addItemSerialAudit");
      }


      var pathParams = {
        'itemSerialId': itemSerialId,
        'itemSerialAudit': itemSerialAudit
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
        '/beta/itemSerial/{itemSerialId}/audit/{itemSerialAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemSerialFile operation.
     * @callback module:api/ItemSerialApi~addItemSerialFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to an itemSerial
     * Adds a file to an existing itemSerial.
     * @param {Number} itemSerialId Id of the itemSerial to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/ItemSerialApi~addItemSerialFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemSerialFile = function(itemSerialId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'itemSerialId' is set
      if (itemSerialId === undefined || itemSerialId === null) {
        throw new Error("Missing the required parameter 'itemSerialId' when calling addItemSerialFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addItemSerialFile");
      }


      var pathParams = {
        'itemSerialId': itemSerialId,
        'fileName': fileName
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
        '/beta/itemSerial/{itemSerialId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemSerialTag operation.
     * @callback module:api/ItemSerialApi~addItemSerialTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an itemSerial.
     * Adds a tag to an existing itemSerial.
     * @param {Number} itemSerialId Id of the itemSerial to add a tag to
     * @param {String} itemSerialTag The tag to add
     * @param {module:api/ItemSerialApi~addItemSerialTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemSerialTag = function(itemSerialId, itemSerialTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemSerialId' is set
      if (itemSerialId === undefined || itemSerialId === null) {
        throw new Error("Missing the required parameter 'itemSerialId' when calling addItemSerialTag");
      }

      // verify the required parameter 'itemSerialTag' is set
      if (itemSerialTag === undefined || itemSerialTag === null) {
        throw new Error("Missing the required parameter 'itemSerialTag' when calling addItemSerialTag");
      }


      var pathParams = {
        'itemSerialId': itemSerialId,
        'itemSerialTag': itemSerialTag
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
        '/beta/itemSerial/{itemSerialId}/tag/{itemSerialTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemSerial operation.
     * @callback module:api/ItemSerialApi~deleteItemSerialCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an itemSerial
     * Deletes the itemSerial identified by the specified id.
     * @param {Number} itemSerialId Id of the itemSerial to be deleted.
     * @param {module:api/ItemSerialApi~deleteItemSerialCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemSerial = function(itemSerialId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSerialId' is set
      if (itemSerialId === undefined || itemSerialId === null) {
        throw new Error("Missing the required parameter 'itemSerialId' when calling deleteItemSerial");
      }


      var pathParams = {
        'itemSerialId': itemSerialId
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
        '/beta/itemSerial/{itemSerialId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemSerialTag operation.
     * @callback module:api/ItemSerialApi~deleteItemSerialTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an itemSerial.
     * Deletes an existing itemSerial tag using the specified data.
     * @param {Number} itemSerialId Id of the itemSerial to remove tag from
     * @param {String} itemSerialTag The tag to delete
     * @param {module:api/ItemSerialApi~deleteItemSerialTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemSerialTag = function(itemSerialId, itemSerialTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemSerialId' is set
      if (itemSerialId === undefined || itemSerialId === null) {
        throw new Error("Missing the required parameter 'itemSerialId' when calling deleteItemSerialTag");
      }

      // verify the required parameter 'itemSerialTag' is set
      if (itemSerialTag === undefined || itemSerialTag === null) {
        throw new Error("Missing the required parameter 'itemSerialTag' when calling deleteItemSerialTag");
      }


      var pathParams = {
        'itemSerialId': itemSerialId,
        'itemSerialTag': itemSerialTag
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
        '/beta/itemSerial/{itemSerialId}/tag/{itemSerialTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateItemSerialById operation.
     * @callback module:api/ItemSerialApi~getDuplicateItemSerialByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemSerial} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an itemSerial by id
     * Returns a duplicated itemSerial identified by the specified id.
     * @param {Number} itemSerialId Id of the itemSerial to be duplicated.
     * @param {module:api/ItemSerialApi~getDuplicateItemSerialByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemSerial}
     */
    this.getDuplicateItemSerialById = function(itemSerialId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSerialId' is set
      if (itemSerialId === undefined || itemSerialId === null) {
        throw new Error("Missing the required parameter 'itemSerialId' when calling getDuplicateItemSerialById");
      }


      var pathParams = {
        'itemSerialId': itemSerialId
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
      var returnType = ItemSerial;

      return this.apiClient.callApi(
        '/beta/itemSerial/duplicate/{itemSerialId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemSerialByFilter operation.
     * @callback module:api/ItemSerialApi~getItemSerialByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemSerial>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemSerials by filter
     * Returns the list of itemSerials that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ItemSerialApi~getItemSerialByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ItemSerial>}
     */
    this.getItemSerialByFilter = function(opts, callback) {
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
      var returnType = [ItemSerial];

      return this.apiClient.callApi(
        '/beta/itemSerial/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemSerialById operation.
     * @callback module:api/ItemSerialApi~getItemSerialByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemSerial} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemSerial by id
     * Returns the itemSerial identified by the specified id.
     * @param {Number} itemSerialId Id of the itemSerial to be returned.
     * @param {module:api/ItemSerialApi~getItemSerialByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemSerial}
     */
    this.getItemSerialById = function(itemSerialId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSerialId' is set
      if (itemSerialId === undefined || itemSerialId === null) {
        throw new Error("Missing the required parameter 'itemSerialId' when calling getItemSerialById");
      }


      var pathParams = {
        'itemSerialId': itemSerialId
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
      var returnType = ItemSerial;

      return this.apiClient.callApi(
        '/beta/itemSerial/{itemSerialId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemSerialTags operation.
     * @callback module:api/ItemSerialApi~getItemSerialTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an itemSerial.
     * Get all existing itemSerial tags.
     * @param {Number} itemSerialId Id of the itemSerial to get tags for
     * @param {module:api/ItemSerialApi~getItemSerialTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getItemSerialTags = function(itemSerialId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSerialId' is set
      if (itemSerialId === undefined || itemSerialId === null) {
        throw new Error("Missing the required parameter 'itemSerialId' when calling getItemSerialTags");
      }


      var pathParams = {
        'itemSerialId': itemSerialId
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
        '/beta/itemSerial/{itemSerialId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItemSerial operation.
     * @callback module:api/ItemSerialApi~updateItemSerialCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an itemSerial
     * Updates an existing itemSerial using the specified data.
     * @param {module:model/ItemSerial} body ItemSerial to be updated.
     * @param {module:api/ItemSerialApi~updateItemSerialCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateItemSerial = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateItemSerial");
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
        '/beta/itemSerial', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
