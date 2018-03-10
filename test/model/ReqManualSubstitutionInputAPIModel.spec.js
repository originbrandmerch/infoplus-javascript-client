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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.infoplus);
  }
}(this, function(expect, infoplus) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new infoplus.ReqManualSubstitutionInputAPIModel();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ReqManualSubstitutionInputAPIModel', function() {
    it('should create an instance of ReqManualSubstitutionInputAPIModel', function() {
      // uncomment below and update the code to test ReqManualSubstitutionInputAPIModel
      //var instane = new infoplus.ReqManualSubstitutionInputAPIModel();
      //expect(instance).to.be.a(infoplus.ReqManualSubstitutionInputAPIModel);
    });

    it('should have the property orderNoList (base name: "orderNoList")', function() {
      // uncomment below and update the code to test the property orderNoList
      //var instane = new infoplus.ReqManualSubstitutionInputAPIModel();
      //expect(instance).to.be();
    });

    it('should have the property originalSKU (base name: "originalSKU")', function() {
      // uncomment below and update the code to test the property originalSKU
      //var instane = new infoplus.ReqManualSubstitutionInputAPIModel();
      //expect(instance).to.be();
    });

    it('should have the property originalKitSKU (base name: "originalKitSKU")', function() {
      // uncomment below and update the code to test the property originalKitSKU
      //var instane = new infoplus.ReqManualSubstitutionInputAPIModel();
      //expect(instance).to.be();
    });

    it('should have the property originalQuantity (base name: "originalQuantity")', function() {
      // uncomment below and update the code to test the property originalQuantity
      //var instane = new infoplus.ReqManualSubstitutionInputAPIModel();
      //expect(instance).to.be();
    });

    it('should have the property originalComponentSKU (base name: "originalComponentSKU")', function() {
      // uncomment below and update the code to test the property originalComponentSKU
      //var instane = new infoplus.ReqManualSubstitutionInputAPIModel();
      //expect(instance).to.be();
    });

    it('should have the property newSKU (base name: "newSKU")', function() {
      // uncomment below and update the code to test the property newSKU
      //var instane = new infoplus.ReqManualSubstitutionInputAPIModel();
      //expect(instance).to.be();
    });

    it('should have the property newQuantity (base name: "newQuantity")', function() {
      // uncomment below and update the code to test the property newQuantity
      //var instane = new infoplus.ReqManualSubstitutionInputAPIModel();
      //expect(instance).to.be();
    });

    it('should have the property editType (base name: "editType")', function() {
      // uncomment below and update the code to test the property editType
      //var instane = new infoplus.ReqManualSubstitutionInputAPIModel();
      //expect(instance).to.be();
    });

  });

}));
