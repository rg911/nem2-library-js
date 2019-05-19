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
import MessageDTO from './MessageDTO';
import MosaicDTO from './MosaicDTO';





/**
* The TransferTransactionBodyDTO model module.
* @module model/TransferTransactionBodyDTO
* @version 0.7.15
*/
export default class TransferTransactionBodyDTO {
    /**
    * Constructs a new <code>TransferTransactionBodyDTO</code>.
    * @alias module:model/TransferTransactionBodyDTO
    * @class
    * @param recipient {String} If the bit 0 of byte 0 is not set (like in 0x90), then it is a regular address. Else (e.g. 0x91) it represents a namespace id which starts at byte 1.
    * @param mosaics {Array.<module:model/MosaicDTO>} The array of mosaics sent to the recipient. If the most significant bit of byte 0 is set, a namespaceId (alias) is used instead of a instead of a mosaicId corresponds to a mosaicId.
    * @param message {module:model/MessageDTO} 
    */

    constructor(recipient, mosaics, message) {
        



        this['recipient'] = recipient;this['mosaics'] = mosaics;this['message'] = message;

        
    }

    /**
    * Constructs a <code>TransferTransactionBodyDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TransferTransactionBodyDTO} obj Optional instance to populate.
    * @return {module:model/TransferTransactionBodyDTO} The populated <code>TransferTransactionBodyDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransferTransactionBodyDTO();

            
            
            

            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
            }
            if (data.hasOwnProperty('mosaics')) {
                obj['mosaics'] = ApiClient.convertToType(data['mosaics'], [MosaicDTO]);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = MessageDTO.constructFromObject(data['message']);
            }
        }
        return obj;
    }

    /**
    * If the bit 0 of byte 0 is not set (like in 0x90), then it is a regular address. Else (e.g. 0x91) it represents a namespace id which starts at byte 1.
    * @member {String} recipient
    */
    recipient = undefined;
    /**
    * The array of mosaics sent to the recipient. If the most significant bit of byte 0 is set, a namespaceId (alias) is used instead of a instead of a mosaicId corresponds to a mosaicId.
    * @member {Array.<module:model/MosaicDTO>} mosaics
    */
    mosaics = undefined;
    /**
    * @member {module:model/MessageDTO} message
    */
    message = undefined;








}

