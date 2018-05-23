/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  | 
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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.SendReportEmail = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SendReportEmail model module.
   * @module model/SendReportEmail
   * @version 7.x.x
   */

  /**
   * Constructs a new <code>SendReportEmail</code>.
   * Email sending credentials including subject, body, to, cc etc.
   * @alias module:model/SendReportEmail
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>SendReportEmail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendReportEmail} obj Optional instance to populate.
   * @return {module:model/SendReportEmail} The populated <code>SendReportEmail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], ['String']);
      }
      if (data.hasOwnProperty('contentType')) {
        obj['contentType'] = ApiClient.convertToType(data['contentType'], 'String');
      }
      if (data.hasOwnProperty('bcc')) {
        obj['bcc'] = ApiClient.convertToType(data['bcc'], ['String']);
      }
      if (data.hasOwnProperty('cc')) {
        obj['cc'] = ApiClient.convertToType(data['cc'], ['String']);
      }
      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }
    }
    return obj;
  }

  /**
   * Subject of the email message
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * Email addresses of the recipients
   * @member {Array.<String>} to
   */
  exports.prototype['to'] = undefined;
  /**
   * Type of the message body
   * @member {module:model/SendReportEmail.ContentTypeEnum} contentType
   */
  exports.prototype['contentType'] = undefined;
  /**
   * Email addresses of the recipients in bcc
   * @member {Array.<String>} bcc
   */
  exports.prototype['bcc'] = undefined;
  /**
   * Email addresses of the recipients in cc
   * @member {Array.<String>} cc
   */
  exports.prototype['cc'] = undefined;
  /**
   * Body of the email message
   * @member {String} body
   */
  exports.prototype['body'] = undefined;


  /**
   * Allowed values for the <code>contentType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ContentTypeEnum = {
    /**
     * value: "text"
     * @const
     */
    "text": "text",
    /**
     * value: "html"
     * @const
     */
    "html": "html"  };


  return exports;
}));


