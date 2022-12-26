/*
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.26
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

  describe('(package)', function() {
    describe('GetDeviceBrowserStats', function() {
      beforeEach(function() {
        instance = new SibApiV3Sdk.GetDeviceBrowserStats();
      });

      it('should create an instance of GetDeviceBrowserStats', function() {
        // TODO: update the code to test GetDeviceBrowserStats
        expect(instance).to.be.a(SibApiV3Sdk.GetDeviceBrowserStats);
      });

      it('should have the property clickers (base name: "clickers")', function() {
        // TODO: update the code to test the property clickers
        expect(instance).to.have.property('clickers');
        // expect(instance.clickers).to.be(expectedValueLiteral);
      });

      it('should have the property uniqueClicks (base name: "uniqueClicks")', function() {
        // TODO: update the code to test the property uniqueClicks
        expect(instance).to.have.property('uniqueClicks');
        // expect(instance.uniqueClicks).to.be(expectedValueLiteral);
      });

      it('should have the property viewed (base name: "viewed")', function() {
        // TODO: update the code to test the property viewed
        expect(instance).to.have.property('viewed');
        // expect(instance.viewed).to.be(expectedValueLiteral);
      });

      it('should have the property uniqueViews (base name: "uniqueViews")', function() {
        // TODO: update the code to test the property uniqueViews
        expect(instance).to.have.property('uniqueViews');
        // expect(instance.uniqueViews).to.be(expectedValueLiteral);
      });

    });
  });

}));
