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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.RecordFile = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RecordFile model module.
   * @module model/RecordFile
   * @version beta
   */

  /**
   * Constructs a new <code>RecordFile</code>.
   * @alias module:model/RecordFile
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>RecordFile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecordFile} obj Optional instance to populate.
   * @return {module:model/RecordFile} The populated <code>RecordFile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('fileName')) {
        obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
      }
      if (data.hasOwnProperty('extension')) {
        obj['extension'] = ApiClient.convertToType(data['extension'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('roleName')) {
        obj['roleName'] = ApiClient.convertToType(data['roleName'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('printerTypeId')) {
        obj['printerTypeId'] = ApiClient.convertToType(data['printerTypeId'], 'Number');
      }
      if (data.hasOwnProperty('userFullName')) {
        obj['userFullName'] = ApiClient.convertToType(data['userFullName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} fileName
   */
  exports.prototype['fileName'] = undefined;
  /**
   * @member {String} extension
   */
  exports.prototype['extension'] = undefined;
  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {String} roleName
   */
  exports.prototype['roleName'] = undefined;
  /**
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;
  /**
   * @member {Number} printerTypeId
   */
  exports.prototype['printerTypeId'] = undefined;
  /**
   * @member {String} userFullName
   */
  exports.prototype['userFullName'] = undefined;



  return exports;
}));


