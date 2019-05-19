/**
 * Catapult REST API Reference
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.7.15
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import AccountLinkTransactionBodyDTO from './AccountLinkTransactionBodyDTO';
import EmbeddedTransactionDTO from './EmbeddedTransactionDTO';
import EntityTypeEnum from './EntityTypeEnum';
import LinkActionEnum from './LinkActionEnum';
import NetworkTypeEnum from './NetworkTypeEnum';
import UInt64DTO from './UInt64DTO';





/**
* The EmbeddedAccountLinkTransactionDTO model module.
* @module model/EmbeddedAccountLinkTransactionDTO
* @version 0.7.15
*/
export default class EmbeddedAccountLinkTransactionDTO {
    /**
    * Constructs a new <code>EmbeddedAccountLinkTransactionDTO</code>.
    * @alias module:model/EmbeddedAccountLinkTransactionDTO
    * @class
    * @implements module:model/EmbeddedTransactionDTO
    * @implements module:model/AccountLinkTransactionBodyDTO
    * @param signer {String} The public key of the entity signer formatted as hexadecimal.
    * @param version {module:model/NetworkTypeEnum} 
    * @param type {module:model/EntityTypeEnum} 
    * @param maxFee {module:model/UInt64DTO} 
    * @param deadline {module:model/UInt64DTO} 
    * @param remoteAccountKey {String} The public key of the remote account.
    * @param linkAction {module:model/LinkActionEnum} 
    */

    constructor(signer, version, type, maxFee, deadline, remoteAccountKey, linkAction) {
        



        

        
    }

    /**
    * Constructs a <code>EmbeddedAccountLinkTransactionDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/EmbeddedAccountLinkTransactionDTO} obj Optional instance to populate.
    * @return {module:model/EmbeddedAccountLinkTransactionDTO} The populated <code>EmbeddedAccountLinkTransactionDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmbeddedAccountLinkTransactionDTO();

            
            
            EmbeddedTransactionDTO.constructFromObject(data, obj);AccountLinkTransactionBodyDTO.constructFromObject(data, obj);

        }
        return obj;
    }



    // Implement EmbeddedTransactionDTO interface:
    /**
    * The public key of the entity signer formatted as hexadecimal.
    * @member {String} signer
    */
    signer = undefined;
/**
    * @member {module:model/NetworkTypeEnum} version
    */
    version = undefined;
/**
    * @member {module:model/EntityTypeEnum} type
    */
    type = undefined;
/**
    * @member {module:model/UInt64DTO} max_fee
    */
    max_fee = undefined;
/**
    * @member {module:model/UInt64DTO} deadline
    */
    deadline = undefined;

    // Implement AccountLinkTransactionBodyDTO interface:
    /**
    * The public key of the remote account.
    * @member {String} remoteAccountKey
    */
    remoteAccountKey = undefined;
/**
    * @member {module:model/LinkActionEnum} linkAction
    */
    linkAction = undefined;







}

