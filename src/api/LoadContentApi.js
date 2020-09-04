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
    define(['ApiClient', 'model/LoadContent', 'model/RecordFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LoadContent'), require('../model/RecordFile'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.LoadContentApi = factory(root.infoplus.ApiClient, root.infoplus.LoadContent, root.infoplus.RecordFile);
  }
}(this, function(ApiClient, LoadContent, RecordFile) {
  'use strict';

  /**
   * LoadContent service.
   * @module api/LoadContentApi
   * @version beta
   */

  /**
   * Constructs a new LoadContentApi. 
   * @alias module:api/LoadContentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addLoadContentAudit operation.
     * @callback module:api/LoadContentApi~addLoadContentAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a loadContent
     * Adds an audit to an existing loadContent.
     * @param {Number} loadContentId Id of the loadContent to add an audit to
     * @param {String} loadContentAudit The audit to add
     * @param {module:api/LoadContentApi~addLoadContentAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addLoadContentAudit = function(loadContentId, loadContentAudit, callback) {
      var postBody = null;

      // verify the required parameter 'loadContentId' is set
      if (loadContentId === undefined || loadContentId === null) {
        throw new Error("Missing the required parameter 'loadContentId' when calling addLoadContentAudit");
      }

      // verify the required parameter 'loadContentAudit' is set
      if (loadContentAudit === undefined || loadContentAudit === null) {
        throw new Error("Missing the required parameter 'loadContentAudit' when calling addLoadContentAudit");
      }


      var pathParams = {
        'loadContentId': loadContentId,
        'loadContentAudit': loadContentAudit
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
        '/beta/loadContent/{loadContentId}/audit/{loadContentAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addLoadContentFile operation.
     * @callback module:api/LoadContentApi~addLoadContentFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a loadContent
     * Adds a file to an existing loadContent.
     * @param {Number} loadContentId Id of the loadContent to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/LoadContentApi~addLoadContentFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addLoadContentFile = function(loadContentId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'loadContentId' is set
      if (loadContentId === undefined || loadContentId === null) {
        throw new Error("Missing the required parameter 'loadContentId' when calling addLoadContentFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addLoadContentFile");
      }


      var pathParams = {
        'loadContentId': loadContentId,
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
        '/beta/loadContent/{loadContentId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addLoadContentFileByURL operation.
     * @callback module:api/LoadContentApi~addLoadContentFileByURLCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a loadContent by URL.
     * Adds a file to an existing loadContent by URL.
     * @param {module:model/RecordFile} body The url and optionly fileName to be used.
     * @param {Number} loadContentId Id of the loadContent to add an file to
     * @param {module:api/LoadContentApi~addLoadContentFileByURLCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addLoadContentFileByURL = function(body, loadContentId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addLoadContentFileByURL");
      }

      // verify the required parameter 'loadContentId' is set
      if (loadContentId === undefined || loadContentId === null) {
        throw new Error("Missing the required parameter 'loadContentId' when calling addLoadContentFileByURL");
      }


      var pathParams = {
        'loadContentId': loadContentId
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
        '/beta/loadContent/{loadContentId}/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addLoadContentTag operation.
     * @callback module:api/LoadContentApi~addLoadContentTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a loadContent.
     * Adds a tag to an existing loadContent.
     * @param {Number} loadContentId Id of the loadContent to add a tag to
     * @param {String} loadContentTag The tag to add
     * @param {module:api/LoadContentApi~addLoadContentTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addLoadContentTag = function(loadContentId, loadContentTag, callback) {
      var postBody = null;

      // verify the required parameter 'loadContentId' is set
      if (loadContentId === undefined || loadContentId === null) {
        throw new Error("Missing the required parameter 'loadContentId' when calling addLoadContentTag");
      }

      // verify the required parameter 'loadContentTag' is set
      if (loadContentTag === undefined || loadContentTag === null) {
        throw new Error("Missing the required parameter 'loadContentTag' when calling addLoadContentTag");
      }


      var pathParams = {
        'loadContentId': loadContentId,
        'loadContentTag': loadContentTag
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
        '/beta/loadContent/{loadContentId}/tag/{loadContentTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLoadContentFile operation.
     * @callback module:api/LoadContentApi~deleteLoadContentFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file for a loadContent.
     * Deletes an existing loadContent file using the specified data.
     * @param {Number} loadContentId Id of the loadContent to remove file from
     * @param {Number} fileId Id of the file to delete
     * @param {module:api/LoadContentApi~deleteLoadContentFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteLoadContentFile = function(loadContentId, fileId, callback) {
      var postBody = null;

      // verify the required parameter 'loadContentId' is set
      if (loadContentId === undefined || loadContentId === null) {
        throw new Error("Missing the required parameter 'loadContentId' when calling deleteLoadContentFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteLoadContentFile");
      }


      var pathParams = {
        'loadContentId': loadContentId,
        'fileId': fileId
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
        '/beta/loadContent/{loadContentId}/file/{fileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLoadContentTag operation.
     * @callback module:api/LoadContentApi~deleteLoadContentTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a loadContent.
     * Deletes an existing loadContent tag using the specified data.
     * @param {Number} loadContentId Id of the loadContent to remove tag from
     * @param {String} loadContentTag The tag to delete
     * @param {module:api/LoadContentApi~deleteLoadContentTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteLoadContentTag = function(loadContentId, loadContentTag, callback) {
      var postBody = null;

      // verify the required parameter 'loadContentId' is set
      if (loadContentId === undefined || loadContentId === null) {
        throw new Error("Missing the required parameter 'loadContentId' when calling deleteLoadContentTag");
      }

      // verify the required parameter 'loadContentTag' is set
      if (loadContentTag === undefined || loadContentTag === null) {
        throw new Error("Missing the required parameter 'loadContentTag' when calling deleteLoadContentTag");
      }


      var pathParams = {
        'loadContentId': loadContentId,
        'loadContentTag': loadContentTag
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
        '/beta/loadContent/{loadContentId}/tag/{loadContentTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateLoadContentById operation.
     * @callback module:api/LoadContentApi~getDuplicateLoadContentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoadContent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a loadContent by id
     * Returns a duplicated loadContent identified by the specified id.
     * @param {Number} loadContentId Id of the loadContent to be duplicated.
     * @param {module:api/LoadContentApi~getDuplicateLoadContentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoadContent}
     */
    this.getDuplicateLoadContentById = function(loadContentId, callback) {
      var postBody = null;

      // verify the required parameter 'loadContentId' is set
      if (loadContentId === undefined || loadContentId === null) {
        throw new Error("Missing the required parameter 'loadContentId' when calling getDuplicateLoadContentById");
      }


      var pathParams = {
        'loadContentId': loadContentId
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
      var returnType = LoadContent;

      return this.apiClient.callApi(
        '/beta/loadContent/duplicate/{loadContentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoadContentByFilter operation.
     * @callback module:api/LoadContentApi~getLoadContentByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LoadContent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search loadContents by filter
     * Returns the list of loadContents that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/LoadContentApi~getLoadContentByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/LoadContent>}
     */
    this.getLoadContentByFilter = function(opts, callback) {
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
      var returnType = [LoadContent];

      return this.apiClient.callApi(
        '/beta/loadContent/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoadContentById operation.
     * @callback module:api/LoadContentApi~getLoadContentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoadContent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a loadContent by id
     * Returns the loadContent identified by the specified id.
     * @param {Number} loadContentId Id of the loadContent to be returned.
     * @param {module:api/LoadContentApi~getLoadContentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoadContent}
     */
    this.getLoadContentById = function(loadContentId, callback) {
      var postBody = null;

      // verify the required parameter 'loadContentId' is set
      if (loadContentId === undefined || loadContentId === null) {
        throw new Error("Missing the required parameter 'loadContentId' when calling getLoadContentById");
      }


      var pathParams = {
        'loadContentId': loadContentId
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
      var returnType = LoadContent;

      return this.apiClient.callApi(
        '/beta/loadContent/{loadContentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoadContentFiles operation.
     * @callback module:api/LoadContentApi~getLoadContentFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the files for a loadContent.
     * Get all existing loadContent files.
     * @param {Number} loadContentId Id of the loadContent to get files for
     * @param {module:api/LoadContentApi~getLoadContentFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getLoadContentFiles = function(loadContentId, callback) {
      var postBody = null;

      // verify the required parameter 'loadContentId' is set
      if (loadContentId === undefined || loadContentId === null) {
        throw new Error("Missing the required parameter 'loadContentId' when calling getLoadContentFiles");
      }


      var pathParams = {
        'loadContentId': loadContentId
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
        '/beta/loadContent/{loadContentId}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoadContentTags operation.
     * @callback module:api/LoadContentApi~getLoadContentTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a loadContent.
     * Get all existing loadContent tags.
     * @param {Number} loadContentId Id of the loadContent to get tags for
     * @param {module:api/LoadContentApi~getLoadContentTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getLoadContentTags = function(loadContentId, callback) {
      var postBody = null;

      // verify the required parameter 'loadContentId' is set
      if (loadContentId === undefined || loadContentId === null) {
        throw new Error("Missing the required parameter 'loadContentId' when calling getLoadContentTags");
      }


      var pathParams = {
        'loadContentId': loadContentId
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
        '/beta/loadContent/{loadContentId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLoadContentCustomFields operation.
     * @callback module:api/LoadContentApi~updateLoadContentCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a loadContent custom fields
     * Updates an existing loadContent custom fields using the specified data.
     * @param {module:model/LoadContent} body LoadContent to be updated.
     * @param {module:api/LoadContentApi~updateLoadContentCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateLoadContentCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateLoadContentCustomFields");
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
        '/beta/loadContent/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
