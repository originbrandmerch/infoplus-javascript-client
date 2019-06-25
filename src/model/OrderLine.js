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
    define(['ApiClient', 'model/DynamicKitComponentLine'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DynamicKitComponentLine'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.OrderLine = factory(root.infoplus.ApiClient, root.infoplus.DynamicKitComponentLine);
  }
}(this, function(ApiClient, DynamicKitComponentLine) {
  'use strict';




  /**
   * The OrderLine model module.
   * @module model/OrderLine
   * @version beta
   */

  /**
   * Constructs a new <code>OrderLine</code>.
   * @alias module:model/OrderLine
   * @class
   * @param orderNo {Number} 
   * @param lobId {Number} 
   * @param sku {String} 
   * @param itemAccountCodeId {Number} 
   * @param itemLegacyLowStockContactId {Number} 
   * @param itemMajorGroupId {Number} 
   * @param itemSubGroupId {Number} 
   * @param itemSummaryCodeId {Number} 
   * @param fulfillmentChannel {String} 
   */
  var exports = function(orderNo, lobId, sku, itemAccountCodeId, itemLegacyLowStockContactId, itemMajorGroupId, itemSubGroupId, itemSummaryCodeId, fulfillmentChannel) {
    var _this = this;




    _this['orderNo'] = orderNo;
    _this['lobId'] = lobId;
    _this['sku'] = sku;


























    _this['itemAccountCodeId'] = itemAccountCodeId;
    _this['itemLegacyLowStockContactId'] = itemLegacyLowStockContactId;
    _this['itemMajorGroupId'] = itemMajorGroupId;
    _this['itemSubGroupId'] = itemSubGroupId;

    _this['itemSummaryCodeId'] = itemSummaryCodeId;
    _this['fulfillmentChannel'] = fulfillmentChannel;


  };

  /**
   * Constructs a <code>OrderLine</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderLine} obj Optional instance to populate.
   * @return {module:model/OrderLine} The populated <code>OrderLine</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('lineItemId')) {
        obj['lineItemId'] = ApiClient.convertToType(data['lineItemId'], 'Number');
      }
      if (data.hasOwnProperty('customerLineItemNo')) {
        obj['customerLineItemNo'] = ApiClient.convertToType(data['customerLineItemNo'], 'String');
      }
      if (data.hasOwnProperty('orderNo')) {
        obj['orderNo'] = ApiClient.convertToType(data['orderNo'], 'Number');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Number');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('poNoId')) {
        obj['poNoId'] = ApiClient.convertToType(data['poNoId'], 'Number');
      }
      if (data.hasOwnProperty('orderedQty')) {
        obj['orderedQty'] = ApiClient.convertToType(data['orderedQty'], 'Number');
      }
      if (data.hasOwnProperty('allowedQty')) {
        obj['allowedQty'] = ApiClient.convertToType(data['allowedQty'], 'Number');
      }
      if (data.hasOwnProperty('shippedQty')) {
        obj['shippedQty'] = ApiClient.convertToType(data['shippedQty'], 'Number');
      }
      if (data.hasOwnProperty('backorderQty')) {
        obj['backorderQty'] = ApiClient.convertToType(data['backorderQty'], 'Number');
      }
      if (data.hasOwnProperty('revDate')) {
        obj['revDate'] = ApiClient.convertToType(data['revDate'], 'String');
      }
      if (data.hasOwnProperty('chargeCode')) {
        obj['chargeCode'] = ApiClient.convertToType(data['chargeCode'], 'String');
      }
      if (data.hasOwnProperty('distributionCode')) {
        obj['distributionCode'] = ApiClient.convertToType(data['distributionCode'], 'String');
      }
      if (data.hasOwnProperty('upc')) {
        obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
      }
      if (data.hasOwnProperty('vendorSKU')) {
        obj['vendorSKU'] = ApiClient.convertToType(data['vendorSKU'], 'String');
      }
      if (data.hasOwnProperty('orderSourceSKU')) {
        obj['orderSourceSKU'] = ApiClient.convertToType(data['orderSourceSKU'], 'String');
      }
      if (data.hasOwnProperty('unitCost')) {
        obj['unitCost'] = ApiClient.convertToType(data['unitCost'], 'Number');
      }
      if (data.hasOwnProperty('unitSell')) {
        obj['unitSell'] = ApiClient.convertToType(data['unitSell'], 'Number');
      }
      if (data.hasOwnProperty('unitDiscount')) {
        obj['unitDiscount'] = ApiClient.convertToType(data['unitDiscount'], 'Number');
      }
      if (data.hasOwnProperty('unitDeclaredValueOverride')) {
        obj['unitDeclaredValueOverride'] = ApiClient.convertToType(data['unitDeclaredValueOverride'], 'Number');
      }
      if (data.hasOwnProperty('extendedCost')) {
        obj['extendedCost'] = ApiClient.convertToType(data['extendedCost'], 'Number');
      }
      if (data.hasOwnProperty('extendedSell')) {
        obj['extendedSell'] = ApiClient.convertToType(data['extendedSell'], 'Number');
      }
      if (data.hasOwnProperty('extendedDiscount')) {
        obj['extendedDiscount'] = ApiClient.convertToType(data['extendedDiscount'], 'Number');
      }
      if (data.hasOwnProperty('ncExtendedSell')) {
        obj['ncExtendedSell'] = ApiClient.convertToType(data['ncExtendedSell'], 'Number');
      }
      if (data.hasOwnProperty('extendedDeclaredValueOverride')) {
        obj['extendedDeclaredValueOverride'] = ApiClient.convertToType(data['extendedDeclaredValueOverride'], 'Number');
      }
      if (data.hasOwnProperty('itemWeight')) {
        obj['itemWeight'] = ApiClient.convertToType(data['itemWeight'], 'Number');
      }
      if (data.hasOwnProperty('productionLot')) {
        obj['productionLot'] = ApiClient.convertToType(data['productionLot'], 'String');
      }
      if (data.hasOwnProperty('expirationDate')) {
        obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'Date');
      }
      if (data.hasOwnProperty('weightPerWrap')) {
        obj['weightPerWrap'] = ApiClient.convertToType(data['weightPerWrap'], 'Number');
      }
      if (data.hasOwnProperty('sector')) {
        obj['sector'] = ApiClient.convertToType(data['sector'], 'String');
      }
      if (data.hasOwnProperty('orderAssemblyInstructions')) {
        obj['orderAssemblyInstructions'] = ApiClient.convertToType(data['orderAssemblyInstructions'], 'String');
      }
      if (data.hasOwnProperty('itemAccountCodeId')) {
        obj['itemAccountCodeId'] = ApiClient.convertToType(data['itemAccountCodeId'], 'Number');
      }
      if (data.hasOwnProperty('itemLegacyLowStockContactId')) {
        obj['itemLegacyLowStockContactId'] = ApiClient.convertToType(data['itemLegacyLowStockContactId'], 'Number');
      }
      if (data.hasOwnProperty('itemMajorGroupId')) {
        obj['itemMajorGroupId'] = ApiClient.convertToType(data['itemMajorGroupId'], 'Number');
      }
      if (data.hasOwnProperty('itemSubGroupId')) {
        obj['itemSubGroupId'] = ApiClient.convertToType(data['itemSubGroupId'], 'Number');
      }
      if (data.hasOwnProperty('itemProductCodeId')) {
        obj['itemProductCodeId'] = ApiClient.convertToType(data['itemProductCodeId'], 'Number');
      }
      if (data.hasOwnProperty('itemSummaryCodeId')) {
        obj['itemSummaryCodeId'] = ApiClient.convertToType(data['itemSummaryCodeId'], 'Number');
      }
      if (data.hasOwnProperty('fulfillmentChannel')) {
        obj['fulfillmentChannel'] = ApiClient.convertToType(data['fulfillmentChannel'], 'String');
      }
      if (data.hasOwnProperty('dynamicKitComponentList')) {
        obj['dynamicKitComponentList'] = ApiClient.convertToType(data['dynamicKitComponentList'], [DynamicKitComponentLine]);
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} lineItemId
   */
  exports.prototype['lineItemId'] = undefined;
  /**
   * @member {String} customerLineItemNo
   */
  exports.prototype['customerLineItemNo'] = undefined;
  /**
   * @member {Number} orderNo
   */
  exports.prototype['orderNo'] = undefined;
  /**
   * @member {Number} lobId
   */
  exports.prototype['lobId'] = undefined;
  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;
  /**
   * @member {Number} poNoId
   */
  exports.prototype['poNoId'] = undefined;
  /**
   * @member {Number} orderedQty
   */
  exports.prototype['orderedQty'] = undefined;
  /**
   * @member {Number} allowedQty
   */
  exports.prototype['allowedQty'] = undefined;
  /**
   * @member {Number} shippedQty
   */
  exports.prototype['shippedQty'] = undefined;
  /**
   * @member {Number} backorderQty
   */
  exports.prototype['backorderQty'] = undefined;
  /**
   * @member {String} revDate
   */
  exports.prototype['revDate'] = undefined;
  /**
   * @member {String} chargeCode
   */
  exports.prototype['chargeCode'] = undefined;
  /**
   * @member {String} distributionCode
   */
  exports.prototype['distributionCode'] = undefined;
  /**
   * @member {String} upc
   */
  exports.prototype['upc'] = undefined;
  /**
   * @member {String} vendorSKU
   */
  exports.prototype['vendorSKU'] = undefined;
  /**
   * @member {String} orderSourceSKU
   */
  exports.prototype['orderSourceSKU'] = undefined;
  /**
   * @member {Number} unitCost
   */
  exports.prototype['unitCost'] = undefined;
  /**
   * @member {Number} unitSell
   */
  exports.prototype['unitSell'] = undefined;
  /**
   * @member {Number} unitDiscount
   */
  exports.prototype['unitDiscount'] = undefined;
  /**
   * @member {Number} unitDeclaredValueOverride
   */
  exports.prototype['unitDeclaredValueOverride'] = undefined;
  /**
   * @member {Number} extendedCost
   */
  exports.prototype['extendedCost'] = undefined;
  /**
   * @member {Number} extendedSell
   */
  exports.prototype['extendedSell'] = undefined;
  /**
   * @member {Number} extendedDiscount
   */
  exports.prototype['extendedDiscount'] = undefined;
  /**
   * @member {Number} ncExtendedSell
   */
  exports.prototype['ncExtendedSell'] = undefined;
  /**
   * @member {Number} extendedDeclaredValueOverride
   */
  exports.prototype['extendedDeclaredValueOverride'] = undefined;
  /**
   * @member {Number} itemWeight
   */
  exports.prototype['itemWeight'] = undefined;
  /**
   * @member {String} productionLot
   */
  exports.prototype['productionLot'] = undefined;
  /**
   * @member {Date} expirationDate
   */
  exports.prototype['expirationDate'] = undefined;
  /**
   * @member {Number} weightPerWrap
   */
  exports.prototype['weightPerWrap'] = undefined;
  /**
   * @member {String} sector
   */
  exports.prototype['sector'] = undefined;
  /**
   * @member {String} orderAssemblyInstructions
   */
  exports.prototype['orderAssemblyInstructions'] = undefined;
  /**
   * @member {Number} itemAccountCodeId
   */
  exports.prototype['itemAccountCodeId'] = undefined;
  /**
   * @member {Number} itemLegacyLowStockContactId
   */
  exports.prototype['itemLegacyLowStockContactId'] = undefined;
  /**
   * @member {Number} itemMajorGroupId
   */
  exports.prototype['itemMajorGroupId'] = undefined;
  /**
   * @member {Number} itemSubGroupId
   */
  exports.prototype['itemSubGroupId'] = undefined;
  /**
   * @member {Number} itemProductCodeId
   */
  exports.prototype['itemProductCodeId'] = undefined;
  /**
   * @member {Number} itemSummaryCodeId
   */
  exports.prototype['itemSummaryCodeId'] = undefined;
  /**
   * @member {String} fulfillmentChannel
   */
  exports.prototype['fulfillmentChannel'] = undefined;
  /**
   * @member {Array.<module:model/DynamicKitComponentLine>} dynamicKitComponentList
   */
  exports.prototype['dynamicKitComponentList'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));


