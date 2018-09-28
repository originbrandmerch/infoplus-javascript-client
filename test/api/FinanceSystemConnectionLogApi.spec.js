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
    instance = new infoplus.FinanceSystemConnectionLogApi();
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

  describe('FinanceSystemConnectionLogApi', function() {
    describe('addFinanceSystemConnectionLog', function() {
      it('should call addFinanceSystemConnectionLog successfully', function(done) {
        //uncomment below and update the code to test addFinanceSystemConnectionLog
        //instance.addFinanceSystemConnectionLog(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addFinanceSystemConnectionLogAudit', function() {
      it('should call addFinanceSystemConnectionLogAudit successfully', function(done) {
        //uncomment below and update the code to test addFinanceSystemConnectionLogAudit
        //instance.addFinanceSystemConnectionLogAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addFinanceSystemConnectionLogTag', function() {
      it('should call addFinanceSystemConnectionLogTag successfully', function(done) {
        //uncomment below and update the code to test addFinanceSystemConnectionLogTag
        //instance.addFinanceSystemConnectionLogTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFinanceSystemConnectionLog', function() {
      it('should call deleteFinanceSystemConnectionLog successfully', function(done) {
        //uncomment below and update the code to test deleteFinanceSystemConnectionLog
        //instance.deleteFinanceSystemConnectionLog(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFinanceSystemConnectionLogTag', function() {
      it('should call deleteFinanceSystemConnectionLogTag successfully', function(done) {
        //uncomment below and update the code to test deleteFinanceSystemConnectionLogTag
        //instance.deleteFinanceSystemConnectionLogTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateFinanceSystemConnectionLogById', function() {
      it('should call getDuplicateFinanceSystemConnectionLogById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateFinanceSystemConnectionLogById
        //instance.getDuplicateFinanceSystemConnectionLogById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFinanceSystemConnectionLogByFilter', function() {
      it('should call getFinanceSystemConnectionLogByFilter successfully', function(done) {
        //uncomment below and update the code to test getFinanceSystemConnectionLogByFilter
        //instance.getFinanceSystemConnectionLogByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFinanceSystemConnectionLogById', function() {
      it('should call getFinanceSystemConnectionLogById successfully', function(done) {
        //uncomment below and update the code to test getFinanceSystemConnectionLogById
        //instance.getFinanceSystemConnectionLogById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFinanceSystemConnectionLogTags', function() {
      it('should call getFinanceSystemConnectionLogTags successfully', function(done) {
        //uncomment below and update the code to test getFinanceSystemConnectionLogTags
        //instance.getFinanceSystemConnectionLogTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFinanceSystemConnectionLog', function() {
      it('should call updateFinanceSystemConnectionLog successfully', function(done) {
        //uncomment below and update the code to test updateFinanceSystemConnectionLog
        //instance.updateFinanceSystemConnectionLog(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
