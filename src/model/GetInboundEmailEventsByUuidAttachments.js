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
    root.SibApiV3Sdk.GetInboundEmailEventsByUuidAttachments = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetInboundEmailEventsByUuidAttachments model module.
   * @module model/GetInboundEmailEventsByUuidAttachments
   * @version 8.3.0
   */

  /**
   * Constructs a new <code>GetInboundEmailEventsByUuidAttachments</code>.
   * @alias module:model/GetInboundEmailEventsByUuidAttachments
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetInboundEmailEventsByUuidAttachments</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetInboundEmailEventsByUuidAttachments} obj Optional instance to populate.
   * @return {module:model/GetInboundEmailEventsByUuidAttachments} The populated <code>GetInboundEmailEventsByUuidAttachments</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('contentType'))
        obj.contentType = ApiClient.convertToType(data['contentType'], 'String');
      if (data.hasOwnProperty('contentId'))
        obj.contentId = ApiClient.convertToType(data['contentId'], 'String');
      if (data.hasOwnProperty('contentLength'))
        obj.contentLength = ApiClient.convertToType(data['contentLength'], 'Number');
    }
    return obj;
  }

  /**
   * filename specified in the Content-Disposition header of the attachment
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * value of the Content-Type header of the attachment
   * @member {String} contentType
   */
  exports.prototype.contentType = undefined;

  /**
   * value of the Content-ID header of the attachment.
   * @member {String} contentId
   */
  exports.prototype.contentId = undefined;

  /**
   * size of the attachment in bytes
   * @member {Number} contentLength
   */
  exports.prototype.contentLength = undefined;


  return exports;

}));
