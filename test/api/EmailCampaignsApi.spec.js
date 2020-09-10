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
    instance = new SibApiV3Sdk.EmailCampaignsApi();
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

  describe('EmailCampaignsApi', function() {
    describe('createEmailCampaign', function() {
      it('should call createEmailCampaign successfully', function(done) {
        //uncomment below and update the code to test createEmailCampaign
        //instance.createEmailCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteEmailCampaign', function() {
      it('should call deleteEmailCampaign successfully', function(done) {
        //uncomment below and update the code to test deleteEmailCampaign
        //instance.deleteEmailCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('emailExportRecipients', function() {
      it('should call emailExportRecipients successfully', function(done) {
        //uncomment below and update the code to test emailExportRecipients
        //instance.emailExportRecipients(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAbTestCampaignResult', function() {
      it('should call getAbTestCampaignResult successfully', function(done) {
        //uncomment below and update the code to test getAbTestCampaignResult
        //instance.getAbTestCampaignResult(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailCampaign', function() {
      it('should call getEmailCampaign successfully', function(done) {
        //uncomment below and update the code to test getEmailCampaign
        //instance.getEmailCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailCampaigns', function() {
      it('should call getEmailCampaigns successfully', function(done) {
        //uncomment below and update the code to test getEmailCampaigns
        //instance.getEmailCampaigns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSharedTemplateUrl', function() {
      it('should call getSharedTemplateUrl successfully', function(done) {
        //uncomment below and update the code to test getSharedTemplateUrl
        //instance.getSharedTemplateUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendEmailCampaignNow', function() {
      it('should call sendEmailCampaignNow successfully', function(done) {
        //uncomment below and update the code to test sendEmailCampaignNow
        //instance.sendEmailCampaignNow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendReport', function() {
      it('should call sendReport successfully', function(done) {
        //uncomment below and update the code to test sendReport
        //instance.sendReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendTestEmail', function() {
      it('should call sendTestEmail successfully', function(done) {
        //uncomment below and update the code to test sendTestEmail
        //instance.sendTestEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCampaignStatus', function() {
      it('should call updateCampaignStatus successfully', function(done) {
        //uncomment below and update the code to test updateCampaignStatus
        //instance.updateCampaignStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateEmailCampaign', function() {
      it('should call updateEmailCampaign successfully', function(done) {
        //uncomment below and update the code to test updateEmailCampaign
        //instance.updateEmailCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadImageToGallery', function() {
      it('should call uploadImageToGallery successfully', function(done) {
        //uncomment below and update the code to test uploadImageToGallery
        //instance.uploadImageToGallery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
