/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
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
    factory(root.expect, root.SibApiV3Sdk);
  }
}(this, function(expect, SibApiV3Sdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SibApiV3Sdk.GetDeviceBrowserStats();
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

  describe('GetDeviceBrowserStats', function() {
    it('should create an instance of GetDeviceBrowserStats', function() {
      // uncomment below and update the code to test GetDeviceBrowserStats
      //var instane = new SibApiV3Sdk.GetDeviceBrowserStats();
      //expect(instance).to.be.a(SibApiV3Sdk.GetDeviceBrowserStats);
    });

    it('should have the property clickers (base name: "clickers")', function() {
      // uncomment below and update the code to test the property clickers
      //var instane = new SibApiV3Sdk.GetDeviceBrowserStats();
      //expect(instance).to.be();
    });

    it('should have the property uniqueClicks (base name: "uniqueClicks")', function() {
      // uncomment below and update the code to test the property uniqueClicks
      //var instane = new SibApiV3Sdk.GetDeviceBrowserStats();
      //expect(instance).to.be();
    });

    it('should have the property viewed (base name: "viewed")', function() {
      // uncomment below and update the code to test the property viewed
      //var instane = new SibApiV3Sdk.GetDeviceBrowserStats();
      //expect(instance).to.be();
    });

    it('should have the property uniqueViews (base name: "uniqueViews")', function() {
      // uncomment below and update the code to test the property uniqueViews
      //var instane = new SibApiV3Sdk.GetDeviceBrowserStats();
      //expect(instance).to.be();
    });

  });

}));
