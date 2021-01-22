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
    instance = new infoplus.CustomerInvoiceTemplate();
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

  describe('CustomerInvoiceTemplate', function() {
    it('should create an instance of CustomerInvoiceTemplate', function() {
      // uncomment below and update the code to test CustomerInvoiceTemplate
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be.a(infoplus.CustomerInvoiceTemplate);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property poNo (base name: "poNo")', function() {
      // uncomment below and update the code to test the property poNo
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property costCenter (base name: "costCenter")', function() {
      // uncomment below and update the code to test the property costCenter
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property terms (base name: "terms")', function() {
      // uncomment below and update the code to test the property terms
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property specialInstructions (base name: "specialInstructions")', function() {
      // uncomment below and update the code to test the property specialInstructions
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property lobId (base name: "lobId")', function() {
      // uncomment below and update the code to test the property lobId
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property billingPeriod (base name: "billingPeriod")', function() {
      // uncomment below and update the code to test the property billingPeriod
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property remitToAttention (base name: "remitToAttention")', function() {
      // uncomment below and update the code to test the property remitToAttention
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property remitToCompany (base name: "remitToCompany")', function() {
      // uncomment below and update the code to test the property remitToCompany
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property remitToStreet (base name: "remitToStreet")', function() {
      // uncomment below and update the code to test the property remitToStreet
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property remitToStreet2 (base name: "remitToStreet2")', function() {
      // uncomment below and update the code to test the property remitToStreet2
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property remitToStreet3 (base name: "remitToStreet3")', function() {
      // uncomment below and update the code to test the property remitToStreet3
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property remitToCity (base name: "remitToCity")', function() {
      // uncomment below and update the code to test the property remitToCity
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property remitToState (base name: "remitToState")', function() {
      // uncomment below and update the code to test the property remitToState
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property remitToZip (base name: "remitToZip")', function() {
      // uncomment below and update the code to test the property remitToZip
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property remitToCountry (base name: "remitToCountry")', function() {
      // uncomment below and update the code to test the property remitToCountry
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property remitToPhone (base name: "remitToPhone")', function() {
      // uncomment below and update the code to test the property remitToPhone
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property remitToEmail (base name: "remitToEmail")', function() {
      // uncomment below and update the code to test the property remitToEmail
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property billToAttention (base name: "billToAttention")', function() {
      // uncomment below and update the code to test the property billToAttention
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property billToCompany (base name: "billToCompany")', function() {
      // uncomment below and update the code to test the property billToCompany
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property billToStreet (base name: "billToStreet")', function() {
      // uncomment below and update the code to test the property billToStreet
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property billToStreet2 (base name: "billToStreet2")', function() {
      // uncomment below and update the code to test the property billToStreet2
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property billToStreet3 (base name: "billToStreet3")', function() {
      // uncomment below and update the code to test the property billToStreet3
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property billToCity (base name: "billToCity")', function() {
      // uncomment below and update the code to test the property billToCity
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property billToState (base name: "billToState")', function() {
      // uncomment below and update the code to test the property billToState
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property billToZip (base name: "billToZip")', function() {
      // uncomment below and update the code to test the property billToZip
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property billToCountry (base name: "billToCountry")', function() {
      // uncomment below and update the code to test the property billToCountry
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property billToPhone (base name: "billToPhone")', function() {
      // uncomment below and update the code to test the property billToPhone
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property billToEmail (base name: "billToEmail")', function() {
      // uncomment below and update the code to test the property billToEmail
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property lineItems (base name: "lineItems")', function() {
      // uncomment below and update the code to test the property lineItems
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.CustomerInvoiceTemplate();
      //expect(instance).to.be();
    });

  });

}));
