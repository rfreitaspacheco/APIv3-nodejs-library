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
    root.SibApiV3Sdk.UpdateBatchContactsContacts = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpdateBatchContactsContacts model module.
   * @module model/UpdateBatchContactsContacts
   * @version 8.5.0
   */

  /**
   * Constructs a new <code>UpdateBatchContactsContacts</code>.
   * @alias module:model/UpdateBatchContactsContacts
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateBatchContactsContacts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateBatchContactsContacts} obj Optional instance to populate.
   * @return {module:model/UpdateBatchContactsContacts} The populated <code>UpdateBatchContactsContacts</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('sms'))
        obj.sms = ApiClient.convertToType(data['sms'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = ApiClient.convertToType(data['attributes'], {'String': Object});
      if (data.hasOwnProperty('emailBlacklisted'))
        obj.emailBlacklisted = ApiClient.convertToType(data['emailBlacklisted'], 'Boolean');
      if (data.hasOwnProperty('smsBlacklisted'))
        obj.smsBlacklisted = ApiClient.convertToType(data['smsBlacklisted'], 'Boolean');
      if (data.hasOwnProperty('listIds'))
        obj.listIds = ApiClient.convertToType(data['listIds'], ['Number']);
      if (data.hasOwnProperty('unlinkListIds'))
        obj.unlinkListIds = ApiClient.convertToType(data['unlinkListIds'], ['Number']);
      if (data.hasOwnProperty('smtpBlacklistSender'))
        obj.smtpBlacklistSender = ApiClient.convertToType(data['smtpBlacklistSender'], ['String']);
    }
    return obj;
  }

  /**
   * Email address of the user to be updated (For each operation only pass one of the supported contact identifiers. Email, id or sms)
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * id of the user to be updated (For each operation only pass one of the supported contact identifiers. Email, id or sms)
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * SMS of the user to be updated (For each operation only pass one of the supported contact identifiers. Email, id or sms)
   * @member {String} sms
   */
  exports.prototype.sms = undefined;

  /**
   * Pass the set of attributes to be updated. **These attributes must be present in your account**. To update existing email address of a contact with the new one please pass EMAIL in attribtes. For example, **{ \"EMAIL\":\"newemail@domain.com\", \"FNAME\":\"Ellie\", \"LNAME\":\"Roger\"}**. Keep in mind transactional attributes can be updated the same way as normal attributes. Mobile Number in **SMS** field should be passed with proper country code. For example: **{\"SMS\":\"+91xxxxxxxxxx\"} or {\"SMS\":\"0091xxxxxxxxxx\"}** 
   * @member {Object.<String, Object>} attributes
   */
  exports.prototype.attributes = undefined;

  /**
   * Set/unset this field to blacklist/allow the contact for emails (emailBlacklisted = true)
   * @member {Boolean} emailBlacklisted
   */
  exports.prototype.emailBlacklisted = undefined;

  /**
   * Set/unset this field to blacklist/allow the contact for SMS (smsBlacklisted = true)
   * @member {Boolean} smsBlacklisted
   */
  exports.prototype.smsBlacklisted = undefined;

  /**
   * Ids of the lists to add the contact to
   * @member {Array.<Number>} listIds
   */
  exports.prototype.listIds = undefined;

  /**
   * Ids of the lists to remove the contact from
   * @member {Array.<Number>} unlinkListIds
   */
  exports.prototype.unlinkListIds = undefined;

  /**
   * transactional email forbidden sender for contact. Use only for email Contact
   * @member {Array.<String>} smtpBlacklistSender
   */
  exports.prototype.smtpBlacklistSender = undefined;


  return exports;

}));
