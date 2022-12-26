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
    define(['ApiClient', 'model/GetExtendedCampaignStatsGlobalStats', 'model/GetStatsByBrowser', 'model/GetStatsByDevice', 'model/GetStatsByDomain'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetExtendedCampaignStatsGlobalStats'), require('./GetStatsByBrowser'), require('./GetStatsByDevice'), require('./GetStatsByDomain'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetExtendedCampaignStats = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.GetExtendedCampaignStatsGlobalStats, root.SibApiV3Sdk.GetStatsByBrowser, root.SibApiV3Sdk.GetStatsByDevice, root.SibApiV3Sdk.GetStatsByDomain);
  }
}(this, function(ApiClient, GetExtendedCampaignStatsGlobalStats, GetStatsByBrowser, GetStatsByDevice, GetStatsByDomain) {
  'use strict';

  /**
   * The GetExtendedCampaignStats model module.
   * @module model/GetExtendedCampaignStats
   * @version 8.5.0
   */

  /**
   * Constructs a new <code>GetExtendedCampaignStats</code>.
   * @alias module:model/GetExtendedCampaignStats
   * @class
   * @param globalStats {module:model/GetExtendedCampaignStatsGlobalStats} 
   * @param campaignStats {Array.<Object>} List-wise statistics of the campaign.
   * @param mirrorClick {Number} Number of clicks on mirror link
   * @param remaining {Number} Number of remaning emails to send
   * @param linksStats {Object} Statistics about the number of clicks for the links
   * @param statsByDomain {module:model/GetStatsByDomain} 
   * @param statsByDevice {module:model/GetStatsByDevice} Statistics about the campaign on the basis of various devices
   * @param statsByBrowser {module:model/GetStatsByBrowser} Statistics about the campaign on the basis of various browsers
   */
  var exports = function(globalStats, campaignStats, mirrorClick, remaining, linksStats, statsByDomain, statsByDevice, statsByBrowser) {
    this.globalStats = globalStats;
    this.campaignStats = campaignStats;
    this.mirrorClick = mirrorClick;
    this.remaining = remaining;
    this.linksStats = linksStats;
    this.statsByDomain = statsByDomain;
    this.statsByDevice = statsByDevice;
    this.statsByBrowser = statsByBrowser;
  };

  /**
   * Constructs a <code>GetExtendedCampaignStats</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetExtendedCampaignStats} obj Optional instance to populate.
   * @return {module:model/GetExtendedCampaignStats} The populated <code>GetExtendedCampaignStats</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('globalStats'))
        obj.globalStats = GetExtendedCampaignStatsGlobalStats.constructFromObject(data['globalStats']);
      if (data.hasOwnProperty('campaignStats'))
        obj.campaignStats = ApiClient.convertToType(data['campaignStats'], [Object]);
      if (data.hasOwnProperty('mirrorClick'))
        obj.mirrorClick = ApiClient.convertToType(data['mirrorClick'], 'Number');
      if (data.hasOwnProperty('remaining'))
        obj.remaining = ApiClient.convertToType(data['remaining'], 'Number');
      if (data.hasOwnProperty('linksStats'))
        obj.linksStats = ApiClient.convertToType(data['linksStats'], Object);
      if (data.hasOwnProperty('statsByDomain'))
        obj.statsByDomain = GetStatsByDomain.constructFromObject(data['statsByDomain']);
      if (data.hasOwnProperty('statsByDevice'))
        obj.statsByDevice = GetStatsByDevice.constructFromObject(data['statsByDevice']);
      if (data.hasOwnProperty('statsByBrowser'))
        obj.statsByBrowser = GetStatsByBrowser.constructFromObject(data['statsByBrowser']);
    }
    return obj;
  }

  /**
   * @member {module:model/GetExtendedCampaignStatsGlobalStats} globalStats
   */
  exports.prototype.globalStats = undefined;

  /**
   * List-wise statistics of the campaign.
   * @member {Array.<Object>} campaignStats
   */
  exports.prototype.campaignStats = undefined;

  /**
   * Number of clicks on mirror link
   * @member {Number} mirrorClick
   */
  exports.prototype.mirrorClick = undefined;

  /**
   * Number of remaning emails to send
   * @member {Number} remaining
   */
  exports.prototype.remaining = undefined;

  /**
   * Statistics about the number of clicks for the links
   * @member {Object} linksStats
   */
  exports.prototype.linksStats = undefined;

  /**
   * @member {module:model/GetStatsByDomain} statsByDomain
   */
  exports.prototype.statsByDomain = undefined;

  /**
   * Statistics about the campaign on the basis of various devices
   * @member {module:model/GetStatsByDevice} statsByDevice
   */
  exports.prototype.statsByDevice = undefined;

  /**
   * Statistics about the campaign on the basis of various browsers
   * @member {module:model/GetStatsByBrowser} statsByBrowser
   */
  exports.prototype.statsByBrowser = undefined;


  return exports;

}));
