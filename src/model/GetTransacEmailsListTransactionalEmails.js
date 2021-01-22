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
    root.SibApiV3Sdk.GetTransacEmailsListTransactionalEmails = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetTransacEmailsListTransactionalEmails model module.
   * @module model/GetTransacEmailsListTransactionalEmails
   * @version 8.2.0
   */

  /**
   * Constructs a new <code>GetTransacEmailsListTransactionalEmails</code>.
   * @alias module:model/GetTransacEmailsListTransactionalEmails
   * @class
   * @param email {String} Email address to which transactional email has been sent
   * @param subject {String} Subject of the sent email
   * @param messageId {String} Message Id of the sent email
   * @param uuid {String} Unique id of the email sent to a particular contact
   * @param _date {Date} Date on which transactional email was sent
   */
  var exports = function(email, subject, messageId, uuid, _date) {
    var _this = this;

    _this['email'] = email;
    _this['subject'] = subject;

    _this['messageId'] = messageId;
    _this['uuid'] = uuid;
    _this['date'] = _date;


  };

  /**
   * Constructs a <code>GetTransacEmailsListTransactionalEmails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetTransacEmailsListTransactionalEmails} obj Optional instance to populate.
   * @return {module:model/GetTransacEmailsListTransactionalEmails} The populated <code>GetTransacEmailsListTransactionalEmails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('templateId')) {
        obj['templateId'] = ApiClient.convertToType(data['templateId'], 'Number');
      }
      if (data.hasOwnProperty('messageId')) {
        obj['messageId'] = ApiClient.convertToType(data['messageId'], 'String');
      }
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Email address to which transactional email has been sent
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Subject of the sent email
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * Id of the template
   * @member {Number} templateId
   */
  exports.prototype['templateId'] = undefined;
  /**
   * Message Id of the sent email
   * @member {String} messageId
   */
  exports.prototype['messageId'] = undefined;
  /**
   * Unique id of the email sent to a particular contact
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * Date on which transactional email was sent
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * Email address of the sender from which the email was sent
   * @member {String} from
   */
  exports.prototype['from'] = undefined;
  /**
   * Tags used for your email
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;



  return exports;
}));


