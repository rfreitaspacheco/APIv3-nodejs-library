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
    define(['ApiClient', 'model/GetSmsCampaignOverview'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetSmsCampaignOverview'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetSmsCampaign = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.GetSmsCampaignOverview);
  }
}(this, function(ApiClient, GetSmsCampaignOverview) {
  'use strict';




  /**
   * The GetSmsCampaign model module.
   * @module model/GetSmsCampaign
   * @version 7.x.x
   */

  /**
   * Constructs a new <code>GetSmsCampaign</code>.
   * @alias module:model/GetSmsCampaign
   * @class
   * @implements module:model/GetSmsCampaignOverview
   * @param id {Number} ID of the SMS Campaign
   * @param name {String} Name of the SMS Campaign
   * @param status {module:model/GetSmsCampaignOverview.StatusEnum} Status of the SMS Campaign
   * @param content {String} Content of the SMS Campaign
   * @param scheduledAt {Date} UTC date-time on which SMS campaign is scheduled. Should be in YYYY-MM-DDTHH:mm:ss.SSSZ format
   * @param sender {String} Sender of the SMS Campaign
   * @param createdAt {Date} Creation UTC date-time of the SMS campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @param modifiedAt {Date} UTC date-time of last modification of the SMS campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @param recipients {Object} 
   * @param statistics {Object} 
   */
  var exports = function(id, name, status, content, scheduledAt, sender, createdAt, modifiedAt, recipients, statistics) {
    var _this = this;

    GetSmsCampaignOverview.call(_this, id, name, status, content, scheduledAt, sender, createdAt, modifiedAt);
    _this['recipients'] = recipients;
    _this['statistics'] = statistics;
  };

  /**
   * Constructs a <code>GetSmsCampaign</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSmsCampaign} obj Optional instance to populate.
   * @return {module:model/GetSmsCampaign} The populated <code>GetSmsCampaign</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      GetSmsCampaignOverview.constructFromObject(data, obj);
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = ApiClient.convertToType(data['recipients'], Object);
      }
      if (data.hasOwnProperty('statistics')) {
        obj['statistics'] = ApiClient.convertToType(data['statistics'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Object} recipients
   */
  exports.prototype['recipients'] = undefined;
  /**
   * @member {Object} statistics
   */
  exports.prototype['statistics'] = undefined;

  // Implement GetSmsCampaignOverview interface:
  /**
   * ID of the SMS Campaign
   * @member {Number} id
   */
exports.prototype['id'] = undefined;

  /**
   * Name of the SMS Campaign
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  /**
   * Status of the SMS Campaign
   * @member {module:model/GetSmsCampaignOverview.StatusEnum} status
   */
exports.prototype['status'] = undefined;

  /**
   * Content of the SMS Campaign
   * @member {String} content
   */
exports.prototype['content'] = undefined;

  /**
   * UTC date-time on which SMS campaign is scheduled. Should be in YYYY-MM-DDTHH:mm:ss.SSSZ format
   * @member {Date} scheduledAt
   */
exports.prototype['scheduledAt'] = undefined;

  /**
   * Sender of the SMS Campaign
   * @member {String} sender
   */
exports.prototype['sender'] = undefined;

  /**
   * Creation UTC date-time of the SMS campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {Date} createdAt
   */
exports.prototype['createdAt'] = undefined;

  /**
   * UTC date-time of last modification of the SMS campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {Date} modifiedAt
   */
exports.prototype['modifiedAt'] = undefined;



  return exports;
}));


