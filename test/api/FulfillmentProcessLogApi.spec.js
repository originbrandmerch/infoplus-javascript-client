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
    instance = new infoplus.FulfillmentProcessLogApi();
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

  describe('FulfillmentProcessLogApi', function() {
    describe('addFulfillmentProcessLogAudit', function() {
      it('should call addFulfillmentProcessLogAudit successfully', function(done) {
        //uncomment below and update the code to test addFulfillmentProcessLogAudit
        //instance.addFulfillmentProcessLogAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addFulfillmentProcessLogTag', function() {
      it('should call addFulfillmentProcessLogTag successfully', function(done) {
        //uncomment below and update the code to test addFulfillmentProcessLogTag
        //instance.addFulfillmentProcessLogTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFulfillmentProcessLogTag', function() {
      it('should call deleteFulfillmentProcessLogTag successfully', function(done) {
        //uncomment below and update the code to test deleteFulfillmentProcessLogTag
        //instance.deleteFulfillmentProcessLogTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateFulfillmentProcessLogById', function() {
      it('should call getDuplicateFulfillmentProcessLogById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateFulfillmentProcessLogById
        //instance.getDuplicateFulfillmentProcessLogById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFulfillmentProcessLogByFilter', function() {
      it('should call getFulfillmentProcessLogByFilter successfully', function(done) {
        //uncomment below and update the code to test getFulfillmentProcessLogByFilter
        //instance.getFulfillmentProcessLogByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFulfillmentProcessLogById', function() {
      it('should call getFulfillmentProcessLogById successfully', function(done) {
        //uncomment below and update the code to test getFulfillmentProcessLogById
        //instance.getFulfillmentProcessLogById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFulfillmentProcessLogTags', function() {
      it('should call getFulfillmentProcessLogTags successfully', function(done) {
        //uncomment below and update the code to test getFulfillmentProcessLogTags
        //instance.getFulfillmentProcessLogTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
