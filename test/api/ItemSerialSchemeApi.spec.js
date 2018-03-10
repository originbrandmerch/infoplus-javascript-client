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
    instance = new infoplus.ItemSerialSchemeApi();
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

  describe('ItemSerialSchemeApi', function() {
    describe('addItemSerialScheme', function() {
      it('should call addItemSerialScheme successfully', function(done) {
        //uncomment below and update the code to test addItemSerialScheme
        //instance.addItemSerialScheme(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemSerialSchemeAudit', function() {
      it('should call addItemSerialSchemeAudit successfully', function(done) {
        //uncomment below and update the code to test addItemSerialSchemeAudit
        //instance.addItemSerialSchemeAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemSerialSchemeTag', function() {
      it('should call addItemSerialSchemeTag successfully', function(done) {
        //uncomment below and update the code to test addItemSerialSchemeTag
        //instance.addItemSerialSchemeTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItemSerialScheme', function() {
      it('should call deleteItemSerialScheme successfully', function(done) {
        //uncomment below and update the code to test deleteItemSerialScheme
        //instance.deleteItemSerialScheme(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItemSerialSchemeTag', function() {
      it('should call deleteItemSerialSchemeTag successfully', function(done) {
        //uncomment below and update the code to test deleteItemSerialSchemeTag
        //instance.deleteItemSerialSchemeTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateItemSerialSchemeById', function() {
      it('should call getDuplicateItemSerialSchemeById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateItemSerialSchemeById
        //instance.getDuplicateItemSerialSchemeById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemSerialSchemeByFilter', function() {
      it('should call getItemSerialSchemeByFilter successfully', function(done) {
        //uncomment below and update the code to test getItemSerialSchemeByFilter
        //instance.getItemSerialSchemeByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemSerialSchemeById', function() {
      it('should call getItemSerialSchemeById successfully', function(done) {
        //uncomment below and update the code to test getItemSerialSchemeById
        //instance.getItemSerialSchemeById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemSerialSchemeTags', function() {
      it('should call getItemSerialSchemeTags successfully', function(done) {
        //uncomment below and update the code to test getItemSerialSchemeTags
        //instance.getItemSerialSchemeTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateItemSerialScheme', function() {
      it('should call updateItemSerialScheme successfully', function(done) {
        //uncomment below and update the code to test updateItemSerialScheme
        //instance.updateItemSerialScheme(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
