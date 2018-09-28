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
    define(['ApiClient', 'model/ApiResponse', 'model/ApplyOrderWarehouseFulfillmentPlanInput', 'model/ApplyOrderWarehouseFulfillmentPlanOutput', 'model/EditLineItemFulfillmentStrategyInputAPIModel', 'model/GetOrderWarehouseFulfillmentDataInput', 'model/GetOrderWarehouseFulfillmentDataOutput', 'model/Order', 'model/ProcessOutputAPIModel', 'model/ReqManualSubstitutionInputAPIModel', 'model/RunFulfillmentPlanInputAPIModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/ApplyOrderWarehouseFulfillmentPlanInput'), require('../model/ApplyOrderWarehouseFulfillmentPlanOutput'), require('../model/EditLineItemFulfillmentStrategyInputAPIModel'), require('../model/GetOrderWarehouseFulfillmentDataInput'), require('../model/GetOrderWarehouseFulfillmentDataOutput'), require('../model/Order'), require('../model/ProcessOutputAPIModel'), require('../model/ReqManualSubstitutionInputAPIModel'), require('../model/RunFulfillmentPlanInputAPIModel'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.OrderApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.ApplyOrderWarehouseFulfillmentPlanInput, root.infoplus.ApplyOrderWarehouseFulfillmentPlanOutput, root.infoplus.EditLineItemFulfillmentStrategyInputAPIModel, root.infoplus.GetOrderWarehouseFulfillmentDataInput, root.infoplus.GetOrderWarehouseFulfillmentDataOutput, root.infoplus.Order, root.infoplus.ProcessOutputAPIModel, root.infoplus.ReqManualSubstitutionInputAPIModel, root.infoplus.RunFulfillmentPlanInputAPIModel);
  }
}(this, function(ApiClient, ApiResponse, ApplyOrderWarehouseFulfillmentPlanInput, ApplyOrderWarehouseFulfillmentPlanOutput, EditLineItemFulfillmentStrategyInputAPIModel, GetOrderWarehouseFulfillmentDataInput, GetOrderWarehouseFulfillmentDataOutput, Order, ProcessOutputAPIModel, ReqManualSubstitutionInputAPIModel, RunFulfillmentPlanInputAPIModel) {
  'use strict';

  /**
   * Order service.
   * @module api/OrderApi
   * @version beta
   */

  /**
   * Constructs a new OrderApi. 
   * @alias module:api/OrderApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addOrder operation.
     * @callback module:api/OrderApi~addOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Order} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an order
     * Inserts a new order using the specified data.
     * @param {module:model/Order} body Order to be inserted.
     * @param {module:api/OrderApi~addOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Order}
     */
    this.addOrder = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addOrder");
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
      var returnType = Order;

      return this.apiClient.callApi(
        '/beta/order', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrderAudit operation.
     * @callback module:api/OrderApi~addOrderAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an order
     * Adds an audit to an existing order.
     * @param {Number} orderId Id of the order to add an audit to
     * @param {String} orderAudit The audit to add
     * @param {module:api/OrderApi~addOrderAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderAudit = function(orderId, orderAudit, callback) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling addOrderAudit");
      }

      // verify the required parameter 'orderAudit' is set
      if (orderAudit === undefined || orderAudit === null) {
        throw new Error("Missing the required parameter 'orderAudit' when calling addOrderAudit");
      }


      var pathParams = {
        'orderId': orderId,
        'orderAudit': orderAudit
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
        '/beta/order/{orderId}/audit/{orderAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrderTag operation.
     * @callback module:api/OrderApi~addOrderTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an order.
     * Adds a tag to an existing order.
     * @param {Number} orderId Id of the order to add a tag to
     * @param {String} orderTag The tag to add
     * @param {module:api/OrderApi~addOrderTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderTag = function(orderId, orderTag, callback) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling addOrderTag");
      }

      // verify the required parameter 'orderTag' is set
      if (orderTag === undefined || orderTag === null) {
        throw new Error("Missing the required parameter 'orderTag' when calling addOrderTag");
      }


      var pathParams = {
        'orderId': orderId,
        'orderTag': orderTag
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
        '/beta/order/{orderId}/tag/{orderTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the applyOrderWarehouseFulfillmentPlan operation.
     * @callback module:api/OrderApi~applyOrderWarehouseFulfillmentPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplyOrderWarehouseFulfillmentPlanOutput} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run the Apply Order Warehouse Fulfillment Plan method.
     * 
     * @param {module:model/ApplyOrderWarehouseFulfillmentPlanInput} body Input data for Apply Order Warehouse Fulfillment Plan process.
     * @param {module:api/OrderApi~applyOrderWarehouseFulfillmentPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplyOrderWarehouseFulfillmentPlanOutput}
     */
    this.applyOrderWarehouseFulfillmentPlan = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling applyOrderWarehouseFulfillmentPlan");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApplyOrderWarehouseFulfillmentPlanOutput;

      return this.apiClient.callApi(
        '/beta/order/applyOrderWarehouseFulfillmentPlan', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrder operation.
     * @callback module:api/OrderApi~deleteOrderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an order
     * Deletes the order identified by the specified id.
     * @param {Number} orderId Id of the order to be deleted.
     * @param {module:api/OrderApi~deleteOrderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrder = function(orderId, callback) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling deleteOrder");
      }


      var pathParams = {
        'orderId': orderId
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
        '/beta/order/{orderId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrderTag operation.
     * @callback module:api/OrderApi~deleteOrderTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an order.
     * Deletes an existing order tag using the specified data.
     * @param {Number} orderId Id of the order to remove tag from
     * @param {String} orderTag The tag to delete
     * @param {module:api/OrderApi~deleteOrderTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrderTag = function(orderId, orderTag, callback) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling deleteOrderTag");
      }

      // verify the required parameter 'orderTag' is set
      if (orderTag === undefined || orderTag === null) {
        throw new Error("Missing the required parameter 'orderTag' when calling deleteOrderTag");
      }


      var pathParams = {
        'orderId': orderId,
        'orderTag': orderTag
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
        '/beta/order/{orderId}/tag/{orderTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editFulfillmentChannel operation.
     * @callback module:api/OrderApi~editFulfillmentChannelCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProcessOutputAPIModel>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run the EditLineItemFulfillmentStrategy process.
     * 
     * @param {module:model/EditLineItemFulfillmentStrategyInputAPIModel} body Input data for EditLineItemFulfillmentStrategy process.
     * @param {module:api/OrderApi~editFulfillmentChannelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProcessOutputAPIModel>}
     */
    this.editFulfillmentChannel = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling editFulfillmentChannel");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [ProcessOutputAPIModel];

      return this.apiClient.callApi(
        '/beta/order/editFulfillmentChannel', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editLineItems operation.
     * @callback module:api/OrderApi~editLineItemsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProcessOutputAPIModel>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run the ReqManualSubstitution process.
     * 
     * @param {module:model/ReqManualSubstitutionInputAPIModel} body Input data for ReqManualSubstitution process.
     * @param {module:api/OrderApi~editLineItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProcessOutputAPIModel>}
     */
    this.editLineItems = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling editLineItems");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [ProcessOutputAPIModel];

      return this.apiClient.callApi(
        '/beta/order/editLineItems', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateOrderById operation.
     * @callback module:api/OrderApi~getDuplicateOrderByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Order} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an order by id
     * Returns a duplicated order identified by the specified id.
     * @param {Number} orderId Id of the order to be duplicated.
     * @param {module:api/OrderApi~getDuplicateOrderByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Order}
     */
    this.getDuplicateOrderById = function(orderId, callback) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getDuplicateOrderById");
      }


      var pathParams = {
        'orderId': orderId
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
      var returnType = Order;

      return this.apiClient.callApi(
        '/beta/order/duplicate/{orderId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderByFilter operation.
     * @callback module:api/OrderApi~getOrderByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Order>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search orders by filter
     * Returns the list of orders that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/OrderApi~getOrderByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Order>}
     */
    this.getOrderByFilter = function(opts, callback) {
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
      var returnType = [Order];

      return this.apiClient.callApi(
        '/beta/order/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderById operation.
     * @callback module:api/OrderApi~getOrderByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Order} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an order by id
     * Returns the order identified by the specified id.
     * @param {Number} orderId Id of the order to be returned.
     * @param {module:api/OrderApi~getOrderByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Order}
     */
    this.getOrderById = function(orderId, callback) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getOrderById");
      }


      var pathParams = {
        'orderId': orderId
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
      var returnType = Order;

      return this.apiClient.callApi(
        '/beta/order/{orderId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderTags operation.
     * @callback module:api/OrderApi~getOrderTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an order.
     * Get all existing order tags.
     * @param {Number} orderId Id of the order to get tags for
     * @param {module:api/OrderApi~getOrderTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getOrderTags = function(orderId, callback) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getOrderTags");
      }


      var pathParams = {
        'orderId': orderId
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
        '/beta/order/{orderId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderWarehouseFulfillmentData operation.
     * @callback module:api/OrderApi~getOrderWarehouseFulfillmentDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetOrderWarehouseFulfillmentDataOutput} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run the Get Order Warehouse Fulfillment Plan method.
     * 
     * @param {module:model/GetOrderWarehouseFulfillmentDataInput} body Input data for Get Order Warehouse Fulfillment Plan process.
     * @param {module:api/OrderApi~getOrderWarehouseFulfillmentDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetOrderWarehouseFulfillmentDataOutput}
     */
    this.getOrderWarehouseFulfillmentData = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getOrderWarehouseFulfillmentData");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetOrderWarehouseFulfillmentDataOutput;

      return this.apiClient.callApi(
        '/beta/order/getOrderWarehouseFulfillmentData', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the runFulfillmentPlan operation.
     * @callback module:api/OrderApi~runFulfillmentPlanCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProcessOutputAPIModel>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run the RunFulfillmentPlan process.
     * 
     * @param {module:model/RunFulfillmentPlanInputAPIModel} body Input data for RunFulfillmentPlan process.
     * @param {module:api/OrderApi~runFulfillmentPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProcessOutputAPIModel>}
     */
    this.runFulfillmentPlan = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling runFulfillmentPlan");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [ProcessOutputAPIModel];

      return this.apiClient.callApi(
        '/beta/order/runFulfillmentPlan', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOrder operation.
     * @callback module:api/OrderApi~updateOrderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an order
     * Updates an existing order using the specified data.
     * @param {module:model/Order} body Order to be updated.
     * @param {module:api/OrderApi~updateOrderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateOrder = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateOrder");
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
        '/beta/order', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOrderCustomFields operation.
     * @callback module:api/OrderApi~updateOrderCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an order custom fields
     * Updates an existing order custom fields using the specified data.
     * @param {module:model/Order} body Order to be updated.
     * @param {module:api/OrderApi~updateOrderCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateOrderCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateOrderCustomFields");
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
        '/beta/order/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
