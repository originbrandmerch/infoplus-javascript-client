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
    define(['ApiClient', 'model/ApiResponse', 'model/BillOfLading', 'model/RecordFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/BillOfLading'), require('../model/RecordFile'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.BillOfLadingApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.BillOfLading, root.infoplus.RecordFile);
  }
}(this, function(ApiClient, ApiResponse, BillOfLading, RecordFile) {
  'use strict';

  /**
   * BillOfLading service.
   * @module api/BillOfLadingApi
   * @version beta
   */

  /**
   * Constructs a new BillOfLadingApi. 
   * @alias module:api/BillOfLadingApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addBillOfLading operation.
     * @callback module:api/BillOfLadingApi~addBillOfLadingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillOfLading} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a billOfLading
     * Inserts a new billOfLading using the specified data.
     * @param {module:model/BillOfLading} body BillOfLading to be inserted.
     * @param {module:api/BillOfLadingApi~addBillOfLadingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillOfLading}
     */
    this.addBillOfLading = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addBillOfLading");
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
      var returnType = BillOfLading;

      return this.apiClient.callApi(
        '/beta/billOfLading', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addBillOfLadingAudit operation.
     * @callback module:api/BillOfLadingApi~addBillOfLadingAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a billOfLading
     * Adds an audit to an existing billOfLading.
     * @param {Number} billOfLadingId Id of the billOfLading to add an audit to
     * @param {String} billOfLadingAudit The audit to add
     * @param {module:api/BillOfLadingApi~addBillOfLadingAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addBillOfLadingAudit = function(billOfLadingId, billOfLadingAudit, callback) {
      var postBody = null;

      // verify the required parameter 'billOfLadingId' is set
      if (billOfLadingId === undefined || billOfLadingId === null) {
        throw new Error("Missing the required parameter 'billOfLadingId' when calling addBillOfLadingAudit");
      }

      // verify the required parameter 'billOfLadingAudit' is set
      if (billOfLadingAudit === undefined || billOfLadingAudit === null) {
        throw new Error("Missing the required parameter 'billOfLadingAudit' when calling addBillOfLadingAudit");
      }


      var pathParams = {
        'billOfLadingId': billOfLadingId,
        'billOfLadingAudit': billOfLadingAudit
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
        '/beta/billOfLading/{billOfLadingId}/audit/{billOfLadingAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addBillOfLadingFile operation.
     * @callback module:api/BillOfLadingApi~addBillOfLadingFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a billOfLading
     * Adds a file to an existing billOfLading.
     * @param {Number} billOfLadingId Id of the billOfLading to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/BillOfLadingApi~addBillOfLadingFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addBillOfLadingFile = function(billOfLadingId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'billOfLadingId' is set
      if (billOfLadingId === undefined || billOfLadingId === null) {
        throw new Error("Missing the required parameter 'billOfLadingId' when calling addBillOfLadingFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addBillOfLadingFile");
      }


      var pathParams = {
        'billOfLadingId': billOfLadingId,
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
        '/beta/billOfLading/{billOfLadingId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addBillOfLadingFileByURL operation.
     * @callback module:api/BillOfLadingApi~addBillOfLadingFileByURLCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a billOfLading by URL.
     * Adds a file to an existing billOfLading by URL.
     * @param {module:model/RecordFile} body The url and optionly fileName to be used.
     * @param {Number} billOfLadingId Id of the billOfLading to add an file to
     * @param {module:api/BillOfLadingApi~addBillOfLadingFileByURLCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addBillOfLadingFileByURL = function(body, billOfLadingId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addBillOfLadingFileByURL");
      }

      // verify the required parameter 'billOfLadingId' is set
      if (billOfLadingId === undefined || billOfLadingId === null) {
        throw new Error("Missing the required parameter 'billOfLadingId' when calling addBillOfLadingFileByURL");
      }


      var pathParams = {
        'billOfLadingId': billOfLadingId
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
        '/beta/billOfLading/{billOfLadingId}/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addBillOfLadingTag operation.
     * @callback module:api/BillOfLadingApi~addBillOfLadingTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a billOfLading.
     * Adds a tag to an existing billOfLading.
     * @param {Number} billOfLadingId Id of the billOfLading to add a tag to
     * @param {String} billOfLadingTag The tag to add
     * @param {module:api/BillOfLadingApi~addBillOfLadingTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addBillOfLadingTag = function(billOfLadingId, billOfLadingTag, callback) {
      var postBody = null;

      // verify the required parameter 'billOfLadingId' is set
      if (billOfLadingId === undefined || billOfLadingId === null) {
        throw new Error("Missing the required parameter 'billOfLadingId' when calling addBillOfLadingTag");
      }

      // verify the required parameter 'billOfLadingTag' is set
      if (billOfLadingTag === undefined || billOfLadingTag === null) {
        throw new Error("Missing the required parameter 'billOfLadingTag' when calling addBillOfLadingTag");
      }


      var pathParams = {
        'billOfLadingId': billOfLadingId,
        'billOfLadingTag': billOfLadingTag
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
        '/beta/billOfLading/{billOfLadingId}/tag/{billOfLadingTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBillOfLading operation.
     * @callback module:api/BillOfLadingApi~deleteBillOfLadingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a billOfLading
     * Deletes the billOfLading identified by the specified id.
     * @param {Number} billOfLadingId Id of the billOfLading to be deleted.
     * @param {module:api/BillOfLadingApi~deleteBillOfLadingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBillOfLading = function(billOfLadingId, callback) {
      var postBody = null;

      // verify the required parameter 'billOfLadingId' is set
      if (billOfLadingId === undefined || billOfLadingId === null) {
        throw new Error("Missing the required parameter 'billOfLadingId' when calling deleteBillOfLading");
      }


      var pathParams = {
        'billOfLadingId': billOfLadingId
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
        '/beta/billOfLading/{billOfLadingId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBillOfLadingFile operation.
     * @callback module:api/BillOfLadingApi~deleteBillOfLadingFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file for a billOfLading.
     * Deletes an existing billOfLading file using the specified data.
     * @param {Number} billOfLadingId Id of the billOfLading to remove file from
     * @param {Number} fileId Id of the file to delete
     * @param {module:api/BillOfLadingApi~deleteBillOfLadingFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBillOfLadingFile = function(billOfLadingId, fileId, callback) {
      var postBody = null;

      // verify the required parameter 'billOfLadingId' is set
      if (billOfLadingId === undefined || billOfLadingId === null) {
        throw new Error("Missing the required parameter 'billOfLadingId' when calling deleteBillOfLadingFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteBillOfLadingFile");
      }


      var pathParams = {
        'billOfLadingId': billOfLadingId,
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
        '/beta/billOfLading/{billOfLadingId}/file/{fileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBillOfLadingTag operation.
     * @callback module:api/BillOfLadingApi~deleteBillOfLadingTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a billOfLading.
     * Deletes an existing billOfLading tag using the specified data.
     * @param {Number} billOfLadingId Id of the billOfLading to remove tag from
     * @param {String} billOfLadingTag The tag to delete
     * @param {module:api/BillOfLadingApi~deleteBillOfLadingTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBillOfLadingTag = function(billOfLadingId, billOfLadingTag, callback) {
      var postBody = null;

      // verify the required parameter 'billOfLadingId' is set
      if (billOfLadingId === undefined || billOfLadingId === null) {
        throw new Error("Missing the required parameter 'billOfLadingId' when calling deleteBillOfLadingTag");
      }

      // verify the required parameter 'billOfLadingTag' is set
      if (billOfLadingTag === undefined || billOfLadingTag === null) {
        throw new Error("Missing the required parameter 'billOfLadingTag' when calling deleteBillOfLadingTag");
      }


      var pathParams = {
        'billOfLadingId': billOfLadingId,
        'billOfLadingTag': billOfLadingTag
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
        '/beta/billOfLading/{billOfLadingId}/tag/{billOfLadingTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillOfLadingByFilter operation.
     * @callback module:api/BillOfLadingApi~getBillOfLadingByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BillOfLading>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search billOfLadings by filter
     * Returns the list of billOfLadings that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/BillOfLadingApi~getBillOfLadingByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BillOfLading>}
     */
    this.getBillOfLadingByFilter = function(opts, callback) {
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
      var returnType = [BillOfLading];

      return this.apiClient.callApi(
        '/beta/billOfLading/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillOfLadingById operation.
     * @callback module:api/BillOfLadingApi~getBillOfLadingByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillOfLading} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a billOfLading by id
     * Returns the billOfLading identified by the specified id.
     * @param {Number} billOfLadingId Id of the billOfLading to be returned.
     * @param {module:api/BillOfLadingApi~getBillOfLadingByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillOfLading}
     */
    this.getBillOfLadingById = function(billOfLadingId, callback) {
      var postBody = null;

      // verify the required parameter 'billOfLadingId' is set
      if (billOfLadingId === undefined || billOfLadingId === null) {
        throw new Error("Missing the required parameter 'billOfLadingId' when calling getBillOfLadingById");
      }


      var pathParams = {
        'billOfLadingId': billOfLadingId
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
      var returnType = BillOfLading;

      return this.apiClient.callApi(
        '/beta/billOfLading/{billOfLadingId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillOfLadingFiles operation.
     * @callback module:api/BillOfLadingApi~getBillOfLadingFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the files for a billOfLading.
     * Get all existing billOfLading files.
     * @param {Number} billOfLadingId Id of the billOfLading to get files for
     * @param {module:api/BillOfLadingApi~getBillOfLadingFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getBillOfLadingFiles = function(billOfLadingId, callback) {
      var postBody = null;

      // verify the required parameter 'billOfLadingId' is set
      if (billOfLadingId === undefined || billOfLadingId === null) {
        throw new Error("Missing the required parameter 'billOfLadingId' when calling getBillOfLadingFiles");
      }


      var pathParams = {
        'billOfLadingId': billOfLadingId
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
        '/beta/billOfLading/{billOfLadingId}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillOfLadingTags operation.
     * @callback module:api/BillOfLadingApi~getBillOfLadingTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a billOfLading.
     * Get all existing billOfLading tags.
     * @param {Number} billOfLadingId Id of the billOfLading to get tags for
     * @param {module:api/BillOfLadingApi~getBillOfLadingTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getBillOfLadingTags = function(billOfLadingId, callback) {
      var postBody = null;

      // verify the required parameter 'billOfLadingId' is set
      if (billOfLadingId === undefined || billOfLadingId === null) {
        throw new Error("Missing the required parameter 'billOfLadingId' when calling getBillOfLadingTags");
      }


      var pathParams = {
        'billOfLadingId': billOfLadingId
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
        '/beta/billOfLading/{billOfLadingId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateBillOfLadingById operation.
     * @callback module:api/BillOfLadingApi~getDuplicateBillOfLadingByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillOfLading} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a billOfLading by id
     * Returns a duplicated billOfLading identified by the specified id.
     * @param {Number} billOfLadingId Id of the billOfLading to be duplicated.
     * @param {module:api/BillOfLadingApi~getDuplicateBillOfLadingByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillOfLading}
     */
    this.getDuplicateBillOfLadingById = function(billOfLadingId, callback) {
      var postBody = null;

      // verify the required parameter 'billOfLadingId' is set
      if (billOfLadingId === undefined || billOfLadingId === null) {
        throw new Error("Missing the required parameter 'billOfLadingId' when calling getDuplicateBillOfLadingById");
      }


      var pathParams = {
        'billOfLadingId': billOfLadingId
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
      var returnType = BillOfLading;

      return this.apiClient.callApi(
        '/beta/billOfLading/duplicate/{billOfLadingId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBillOfLading operation.
     * @callback module:api/BillOfLadingApi~updateBillOfLadingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a billOfLading
     * Updates an existing billOfLading using the specified data.
     * @param {module:model/BillOfLading} body BillOfLading to be updated.
     * @param {module:api/BillOfLadingApi~updateBillOfLadingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBillOfLading = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateBillOfLading");
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
        '/beta/billOfLading', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBillOfLadingCustomFields operation.
     * @callback module:api/BillOfLadingApi~updateBillOfLadingCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a billOfLading custom fields
     * Updates an existing billOfLading custom fields using the specified data.
     * @param {module:model/BillOfLading} body BillOfLading to be updated.
     * @param {module:api/BillOfLadingApi~updateBillOfLadingCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBillOfLadingCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateBillOfLadingCustomFields");
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
        '/beta/billOfLading/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
