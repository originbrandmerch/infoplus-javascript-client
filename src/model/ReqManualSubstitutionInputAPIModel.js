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
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ReqManualSubstitutionInputAPIModel = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReqManualSubstitutionInputAPIModel model module.
   * @module model/ReqManualSubstitutionInputAPIModel
   * @version beta
   */

  /**
   * Constructs a new <code>ReqManualSubstitutionInputAPIModel</code>.
   * @alias module:model/ReqManualSubstitutionInputAPIModel
   * @class
   * @param editType {String} 
   */
  var exports = function(editType) {
    var _this = this;








    _this['editType'] = editType;
  };

  /**
   * Constructs a <code>ReqManualSubstitutionInputAPIModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReqManualSubstitutionInputAPIModel} obj Optional instance to populate.
   * @return {module:model/ReqManualSubstitutionInputAPIModel} The populated <code>ReqManualSubstitutionInputAPIModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('orderNoList')) {
        obj['orderNoList'] = ApiClient.convertToType(data['orderNoList'], ['Number']);
      }
      if (data.hasOwnProperty('originalSKU')) {
        obj['originalSKU'] = ApiClient.convertToType(data['originalSKU'], 'String');
      }
      if (data.hasOwnProperty('originalKitSKU')) {
        obj['originalKitSKU'] = ApiClient.convertToType(data['originalKitSKU'], 'String');
      }
      if (data.hasOwnProperty('originalQuantity')) {
        obj['originalQuantity'] = ApiClient.convertToType(data['originalQuantity'], 'Number');
      }
      if (data.hasOwnProperty('originalComponentSKU')) {
        obj['originalComponentSKU'] = ApiClient.convertToType(data['originalComponentSKU'], 'String');
      }
      if (data.hasOwnProperty('newSKU')) {
        obj['newSKU'] = ApiClient.convertToType(data['newSKU'], 'String');
      }
      if (data.hasOwnProperty('newQuantity')) {
        obj['newQuantity'] = ApiClient.convertToType(data['newQuantity'], 'Number');
      }
      if (data.hasOwnProperty('editType')) {
        obj['editType'] = ApiClient.convertToType(data['editType'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<Number>} orderNoList
   */
  exports.prototype['orderNoList'] = undefined;
  /**
   * @member {String} originalSKU
   */
  exports.prototype['originalSKU'] = undefined;
  /**
   * @member {String} originalKitSKU
   */
  exports.prototype['originalKitSKU'] = undefined;
  /**
   * @member {Number} originalQuantity
   */
  exports.prototype['originalQuantity'] = undefined;
  /**
   * @member {String} originalComponentSKU
   */
  exports.prototype['originalComponentSKU'] = undefined;
  /**
   * @member {String} newSKU
   */
  exports.prototype['newSKU'] = undefined;
  /**
   * @member {Number} newQuantity
   */
  exports.prototype['newQuantity'] = undefined;
  /**
   * @member {String} editType
   */
  exports.prototype['editType'] = undefined;



  return exports;
}));


