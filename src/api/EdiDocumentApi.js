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
    define(['ApiClient', 'model/ApiResponse', 'model/EdiDocument', 'model/RecordFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/EdiDocument'), require('../model/RecordFile'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.EdiDocumentApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.EdiDocument, root.infoplus.RecordFile);
  }
}(this, function(ApiClient, ApiResponse, EdiDocument, RecordFile) {
  'use strict';

  /**
   * EdiDocument service.
   * @module api/EdiDocumentApi
   * @version beta
   */

  /**
   * Constructs a new EdiDocumentApi. 
   * @alias module:api/EdiDocumentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addEdiDocument operation.
     * @callback module:api/EdiDocumentApi~addEdiDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EdiDocument} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an ediDocument
     * Inserts a new ediDocument using the specified data.
     * @param {module:model/EdiDocument} body EdiDocument to be inserted.
     * @param {module:api/EdiDocumentApi~addEdiDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EdiDocument}
     */
    this.addEdiDocument = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addEdiDocument");
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
      var returnType = EdiDocument;

      return this.apiClient.callApi(
        '/beta/ediDocument', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addEdiDocumentAudit operation.
     * @callback module:api/EdiDocumentApi~addEdiDocumentAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an ediDocument
     * Adds an audit to an existing ediDocument.
     * @param {Number} ediDocumentId Id of the ediDocument to add an audit to
     * @param {String} ediDocumentAudit The audit to add
     * @param {module:api/EdiDocumentApi~addEdiDocumentAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addEdiDocumentAudit = function(ediDocumentId, ediDocumentAudit, callback) {
      var postBody = null;

      // verify the required parameter 'ediDocumentId' is set
      if (ediDocumentId === undefined || ediDocumentId === null) {
        throw new Error("Missing the required parameter 'ediDocumentId' when calling addEdiDocumentAudit");
      }

      // verify the required parameter 'ediDocumentAudit' is set
      if (ediDocumentAudit === undefined || ediDocumentAudit === null) {
        throw new Error("Missing the required parameter 'ediDocumentAudit' when calling addEdiDocumentAudit");
      }


      var pathParams = {
        'ediDocumentId': ediDocumentId,
        'ediDocumentAudit': ediDocumentAudit
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
        '/beta/ediDocument/{ediDocumentId}/audit/{ediDocumentAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addEdiDocumentFile operation.
     * @callback module:api/EdiDocumentApi~addEdiDocumentFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to an ediDocument
     * Adds a file to an existing ediDocument.
     * @param {Number} ediDocumentId Id of the ediDocument to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/EdiDocumentApi~addEdiDocumentFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addEdiDocumentFile = function(ediDocumentId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'ediDocumentId' is set
      if (ediDocumentId === undefined || ediDocumentId === null) {
        throw new Error("Missing the required parameter 'ediDocumentId' when calling addEdiDocumentFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addEdiDocumentFile");
      }


      var pathParams = {
        'ediDocumentId': ediDocumentId,
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
        '/beta/ediDocument/{ediDocumentId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addEdiDocumentFileByURL operation.
     * @callback module:api/EdiDocumentApi~addEdiDocumentFileByURLCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to an ediDocument by URL.
     * Adds a file to an existing ediDocument by URL.
     * @param {module:model/RecordFile} body The url and optionly fileName to be used.
     * @param {Number} ediDocumentId Id of the ediDocument to add an file to
     * @param {module:api/EdiDocumentApi~addEdiDocumentFileByURLCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addEdiDocumentFileByURL = function(body, ediDocumentId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addEdiDocumentFileByURL");
      }

      // verify the required parameter 'ediDocumentId' is set
      if (ediDocumentId === undefined || ediDocumentId === null) {
        throw new Error("Missing the required parameter 'ediDocumentId' when calling addEdiDocumentFileByURL");
      }


      var pathParams = {
        'ediDocumentId': ediDocumentId
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
        '/beta/ediDocument/{ediDocumentId}/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addEdiDocumentTag operation.
     * @callback module:api/EdiDocumentApi~addEdiDocumentTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an ediDocument.
     * Adds a tag to an existing ediDocument.
     * @param {Number} ediDocumentId Id of the ediDocument to add a tag to
     * @param {String} ediDocumentTag The tag to add
     * @param {module:api/EdiDocumentApi~addEdiDocumentTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addEdiDocumentTag = function(ediDocumentId, ediDocumentTag, callback) {
      var postBody = null;

      // verify the required parameter 'ediDocumentId' is set
      if (ediDocumentId === undefined || ediDocumentId === null) {
        throw new Error("Missing the required parameter 'ediDocumentId' when calling addEdiDocumentTag");
      }

      // verify the required parameter 'ediDocumentTag' is set
      if (ediDocumentTag === undefined || ediDocumentTag === null) {
        throw new Error("Missing the required parameter 'ediDocumentTag' when calling addEdiDocumentTag");
      }


      var pathParams = {
        'ediDocumentId': ediDocumentId,
        'ediDocumentTag': ediDocumentTag
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
        '/beta/ediDocument/{ediDocumentId}/tag/{ediDocumentTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteEdiDocumentFile operation.
     * @callback module:api/EdiDocumentApi~deleteEdiDocumentFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file for an ediDocument.
     * Deletes an existing ediDocument file using the specified data.
     * @param {Number} ediDocumentId Id of the ediDocument to remove file from
     * @param {Number} fileId Id of the file to delete
     * @param {module:api/EdiDocumentApi~deleteEdiDocumentFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteEdiDocumentFile = function(ediDocumentId, fileId, callback) {
      var postBody = null;

      // verify the required parameter 'ediDocumentId' is set
      if (ediDocumentId === undefined || ediDocumentId === null) {
        throw new Error("Missing the required parameter 'ediDocumentId' when calling deleteEdiDocumentFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteEdiDocumentFile");
      }


      var pathParams = {
        'ediDocumentId': ediDocumentId,
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
        '/beta/ediDocument/{ediDocumentId}/file/{fileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteEdiDocumentTag operation.
     * @callback module:api/EdiDocumentApi~deleteEdiDocumentTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an ediDocument.
     * Deletes an existing ediDocument tag using the specified data.
     * @param {Number} ediDocumentId Id of the ediDocument to remove tag from
     * @param {String} ediDocumentTag The tag to delete
     * @param {module:api/EdiDocumentApi~deleteEdiDocumentTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteEdiDocumentTag = function(ediDocumentId, ediDocumentTag, callback) {
      var postBody = null;

      // verify the required parameter 'ediDocumentId' is set
      if (ediDocumentId === undefined || ediDocumentId === null) {
        throw new Error("Missing the required parameter 'ediDocumentId' when calling deleteEdiDocumentTag");
      }

      // verify the required parameter 'ediDocumentTag' is set
      if (ediDocumentTag === undefined || ediDocumentTag === null) {
        throw new Error("Missing the required parameter 'ediDocumentTag' when calling deleteEdiDocumentTag");
      }


      var pathParams = {
        'ediDocumentId': ediDocumentId,
        'ediDocumentTag': ediDocumentTag
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
        '/beta/ediDocument/{ediDocumentId}/tag/{ediDocumentTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateEdiDocumentById operation.
     * @callback module:api/EdiDocumentApi~getDuplicateEdiDocumentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EdiDocument} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an ediDocument by id
     * Returns a duplicated ediDocument identified by the specified id.
     * @param {Number} ediDocumentId Id of the ediDocument to be duplicated.
     * @param {module:api/EdiDocumentApi~getDuplicateEdiDocumentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EdiDocument}
     */
    this.getDuplicateEdiDocumentById = function(ediDocumentId, callback) {
      var postBody = null;

      // verify the required parameter 'ediDocumentId' is set
      if (ediDocumentId === undefined || ediDocumentId === null) {
        throw new Error("Missing the required parameter 'ediDocumentId' when calling getDuplicateEdiDocumentById");
      }


      var pathParams = {
        'ediDocumentId': ediDocumentId
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
      var returnType = EdiDocument;

      return this.apiClient.callApi(
        '/beta/ediDocument/duplicate/{ediDocumentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEdiDocumentByFilter operation.
     * @callback module:api/EdiDocumentApi~getEdiDocumentByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EdiDocument>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search ediDocuments by filter
     * Returns the list of ediDocuments that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/EdiDocumentApi~getEdiDocumentByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/EdiDocument>}
     */
    this.getEdiDocumentByFilter = function(opts, callback) {
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
      var returnType = [EdiDocument];

      return this.apiClient.callApi(
        '/beta/ediDocument/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEdiDocumentById operation.
     * @callback module:api/EdiDocumentApi~getEdiDocumentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EdiDocument} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an ediDocument by id
     * Returns the ediDocument identified by the specified id.
     * @param {Number} ediDocumentId Id of the ediDocument to be returned.
     * @param {module:api/EdiDocumentApi~getEdiDocumentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EdiDocument}
     */
    this.getEdiDocumentById = function(ediDocumentId, callback) {
      var postBody = null;

      // verify the required parameter 'ediDocumentId' is set
      if (ediDocumentId === undefined || ediDocumentId === null) {
        throw new Error("Missing the required parameter 'ediDocumentId' when calling getEdiDocumentById");
      }


      var pathParams = {
        'ediDocumentId': ediDocumentId
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
      var returnType = EdiDocument;

      return this.apiClient.callApi(
        '/beta/ediDocument/{ediDocumentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEdiDocumentFiles operation.
     * @callback module:api/EdiDocumentApi~getEdiDocumentFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the files for an ediDocument.
     * Get all existing ediDocument files.
     * @param {Number} ediDocumentId Id of the ediDocument to get files for
     * @param {module:api/EdiDocumentApi~getEdiDocumentFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getEdiDocumentFiles = function(ediDocumentId, callback) {
      var postBody = null;

      // verify the required parameter 'ediDocumentId' is set
      if (ediDocumentId === undefined || ediDocumentId === null) {
        throw new Error("Missing the required parameter 'ediDocumentId' when calling getEdiDocumentFiles");
      }


      var pathParams = {
        'ediDocumentId': ediDocumentId
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
        '/beta/ediDocument/{ediDocumentId}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEdiDocumentTags operation.
     * @callback module:api/EdiDocumentApi~getEdiDocumentTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an ediDocument.
     * Get all existing ediDocument tags.
     * @param {Number} ediDocumentId Id of the ediDocument to get tags for
     * @param {module:api/EdiDocumentApi~getEdiDocumentTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getEdiDocumentTags = function(ediDocumentId, callback) {
      var postBody = null;

      // verify the required parameter 'ediDocumentId' is set
      if (ediDocumentId === undefined || ediDocumentId === null) {
        throw new Error("Missing the required parameter 'ediDocumentId' when calling getEdiDocumentTags");
      }


      var pathParams = {
        'ediDocumentId': ediDocumentId
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
        '/beta/ediDocument/{ediDocumentId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
