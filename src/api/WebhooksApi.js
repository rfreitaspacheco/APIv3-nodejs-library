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
    define(['ApiClient', 'model/CreateModel', 'model/CreateWebhook', 'model/ErrorModel', 'model/GetWebhook', 'model/GetWebhooks', 'model/UpdateWebhook'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateModel'), require('../model/CreateWebhook'), require('../model/ErrorModel'), require('../model/GetWebhook'), require('../model/GetWebhooks'), require('../model/UpdateWebhook'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.WebhooksApi = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.CreateModel, root.SibApiV3Sdk.CreateWebhook, root.SibApiV3Sdk.ErrorModel, root.SibApiV3Sdk.GetWebhook, root.SibApiV3Sdk.GetWebhooks, root.SibApiV3Sdk.UpdateWebhook);
  }
}(this, function(ApiClient, CreateModel, CreateWebhook, ErrorModel, GetWebhook, GetWebhooks, UpdateWebhook) {
  'use strict';

  /**
   * Webhooks service.
   * @module api/WebhooksApi
   * @version 7.x.x
   */

  /**
   * Constructs a new WebhooksApi. 
   * @alias module:api/WebhooksApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a webhook
     * @param {module:model/CreateWebhook} createWebhook Values to create a webhook
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateModel} and HTTP response
     */
    this.createWebhookWithHttpInfo = function(createWebhook) {
      var postBody = createWebhook;

      // verify the required parameter 'createWebhook' is set
      if (createWebhook === undefined || createWebhook === null) {
        throw new Error("Missing the required parameter 'createWebhook' when calling createWebhook");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateModel;

      return this.apiClient.callApi(
        '/webhooks', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a webhook
     * @param {module:model/CreateWebhook} createWebhook Values to create a webhook
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateModel}
     */
    this.createWebhook = function(createWebhook) {
      return this.createWebhookWithHttpInfo(createWebhook)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a webhook
     * @param {Number} webhookId Id of the webhook
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteWebhookWithHttpInfo = function(webhookId) {
      var postBody = null;

      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling deleteWebhook");
      }


      var pathParams = {
        'webhookId': webhookId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/webhooks/{webhookId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a webhook
     * @param {Number} webhookId Id of the webhook
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteWebhook = function(webhookId) {
      return this.deleteWebhookWithHttpInfo(webhookId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a webhook details
     * @param {Number} webhookId Id of the webhook
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetWebhook} and HTTP response
     */
    this.getWebhookWithHttpInfo = function(webhookId) {
      var postBody = null;

      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling getWebhook");
      }


      var pathParams = {
        'webhookId': webhookId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetWebhook;

      return this.apiClient.callApi(
        '/webhooks/{webhookId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a webhook details
     * @param {Number} webhookId Id of the webhook
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetWebhook}
     */
    this.getWebhook = function(webhookId) {
      return this.getWebhookWithHttpInfo(webhookId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all webhooks
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type Filter on webhook type (default to transactional)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetWebhooks} and HTTP response
     */
    this.getWebhooksWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'type': opts['type'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetWebhooks;

      return this.apiClient.callApi(
        '/webhooks', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all webhooks
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type Filter on webhook type (default to transactional)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetWebhooks}
     */
    this.getWebhooks = function(opts) {
      return this.getWebhooksWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a webhook
     * @param {Number} webhookId Id of the webhook
     * @param {module:model/UpdateWebhook} updateWebhook Values to update a webhook
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateWebhookWithHttpInfo = function(webhookId, updateWebhook) {
      var postBody = updateWebhook;

      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling updateWebhook");
      }

      // verify the required parameter 'updateWebhook' is set
      if (updateWebhook === undefined || updateWebhook === null) {
        throw new Error("Missing the required parameter 'updateWebhook' when calling updateWebhook");
      }


      var pathParams = {
        'webhookId': webhookId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/webhooks/{webhookId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a webhook
     * @param {Number} webhookId Id of the webhook
     * @param {module:model/UpdateWebhook} updateWebhook Values to update a webhook
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateWebhook = function(webhookId, updateWebhook) {
      return this.updateWebhookWithHttpInfo(webhookId, updateWebhook)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
