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
    describe('GetInboundEmailEventsByUuid', function() {
      beforeEach(function() {
        instance = new SibApiV3Sdk.GetInboundEmailEventsByUuid();
      });

      it('should create an instance of GetInboundEmailEventsByUuid', function() {
        // TODO: update the code to test GetInboundEmailEventsByUuid
        expect(instance).to.be.a(SibApiV3Sdk.GetInboundEmailEventsByUuid);
      });

      it('should have the property receivedAt (base name: "receivedAt")', function() {
        // TODO: update the code to test the property receivedAt
        expect(instance).to.have.property('receivedAt');
        // expect(instance.receivedAt).to.be(expectedValueLiteral);
      });

      it('should have the property deliveredAt (base name: "deliveredAt")', function() {
        // TODO: update the code to test the property deliveredAt
        expect(instance).to.have.property('deliveredAt');
        // expect(instance.deliveredAt).to.be(expectedValueLiteral);
      });

      it('should have the property recipient (base name: "recipient")', function() {
        // TODO: update the code to test the property recipient
        expect(instance).to.have.property('recipient');
        // expect(instance.recipient).to.be(expectedValueLiteral);
      });

      it('should have the property sender (base name: "sender")', function() {
        // TODO: update the code to test the property sender
        expect(instance).to.have.property('sender');
        // expect(instance.sender).to.be(expectedValueLiteral);
      });

      it('should have the property messageId (base name: "messageId")', function() {
        // TODO: update the code to test the property messageId
        expect(instance).to.have.property('messageId');
        // expect(instance.messageId).to.be(expectedValueLiteral);
      });

      it('should have the property subject (base name: "subject")', function() {
        // TODO: update the code to test the property subject
        expect(instance).to.have.property('subject');
        // expect(instance.subject).to.be(expectedValueLiteral);
      });

      it('should have the property attachments (base name: "attachments")', function() {
        // TODO: update the code to test the property attachments
        expect(instance).to.have.property('attachments');
        // expect(instance.attachments).to.be(expectedValueLiteral);
      });

      it('should have the property logs (base name: "logs")', function() {
        // TODO: update the code to test the property logs
        expect(instance).to.have.property('logs');
        // expect(instance.logs).to.be(expectedValueLiteral);
      });

    });
  });

}));
