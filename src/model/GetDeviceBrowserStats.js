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
    root.SibApiV3Sdk.GetDeviceBrowserStats = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetDeviceBrowserStats model module.
   * @module model/GetDeviceBrowserStats
   * @version 8.3.0
   */

  /**
   * Constructs a new <code>GetDeviceBrowserStats</code>.
   * @alias module:model/GetDeviceBrowserStats
   * @class
   * @param clickers {Number} Number of total clicks for the campaign using the particular browser
   * @param uniqueClicks {Number} Number of unique clicks for the campaign using the particular browser
   * @param viewed {Number} Number of openings for the campaign using the particular browser
   * @param uniqueViews {Number} Number of unique openings for the campaign using the particular browser
   */
  var exports = function(clickers, uniqueClicks, viewed, uniqueViews) {
    this.clickers = clickers;
    this.uniqueClicks = uniqueClicks;
    this.viewed = viewed;
    this.uniqueViews = uniqueViews;
  };

  /**
   * Constructs a <code>GetDeviceBrowserStats</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDeviceBrowserStats} obj Optional instance to populate.
   * @return {module:model/GetDeviceBrowserStats} The populated <code>GetDeviceBrowserStats</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('clickers'))
        obj.clickers = ApiClient.convertToType(data['clickers'], 'Number');
      if (data.hasOwnProperty('uniqueClicks'))
        obj.uniqueClicks = ApiClient.convertToType(data['uniqueClicks'], 'Number');
      if (data.hasOwnProperty('viewed'))
        obj.viewed = ApiClient.convertToType(data['viewed'], 'Number');
      if (data.hasOwnProperty('uniqueViews'))
        obj.uniqueViews = ApiClient.convertToType(data['uniqueViews'], 'Number');
    }
    return obj;
  }

  /**
   * Number of total clicks for the campaign using the particular browser
   * @member {Number} clickers
   */
  exports.prototype.clickers = undefined;

  /**
   * Number of unique clicks for the campaign using the particular browser
   * @member {Number} uniqueClicks
   */
  exports.prototype.uniqueClicks = undefined;

  /**
   * Number of openings for the campaign using the particular browser
   * @member {Number} viewed
   */
  exports.prototype.viewed = undefined;

  /**
   * Number of unique openings for the campaign using the particular browser
   * @member {Number} uniqueViews
   */
  exports.prototype.uniqueViews = undefined;


  return exports;

}));
