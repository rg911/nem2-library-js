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
import ReceiptDTO from './ReceiptDTO';
import ReceiptTypeEnum from './ReceiptTypeEnum';
import UInt64DTO from './UInt64DTO';





/**
* The ArtifactExpiryReceiptDTO model module.
* @module model/ArtifactExpiryReceiptDTO
* @version 0.7.15
*/
export default class ArtifactExpiryReceiptDTO {
    /**
    * Constructs a new <code>ArtifactExpiryReceiptDTO</code>.
    * An artifact namespace or mosaic expired.
    * @alias module:model/ArtifactExpiryReceiptDTO
    * @class
    * @implements module:model/ReceiptDTO
    * @param version {Number} The version of the receipt.
    * @param type {module:model/ReceiptTypeEnum} 
    * @param artifactId {module:model/UInt64DTO} 
    */

    constructor(version, type, artifactId) {
        



        this['artifactId'] = artifactId;

        
    }

    /**
    * Constructs a <code>ArtifactExpiryReceiptDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ArtifactExpiryReceiptDTO} obj Optional instance to populate.
    * @return {module:model/ArtifactExpiryReceiptDTO} The populated <code>ArtifactExpiryReceiptDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArtifactExpiryReceiptDTO();

            
            
            ReceiptDTO.constructFromObject(data, obj);

            if (data.hasOwnProperty('artifactId')) {
                obj['artifactId'] = UInt64DTO.constructFromObject(data['artifactId']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/UInt64DTO} artifactId
    */
    artifactId = undefined;


    // Implement ReceiptDTO interface:
    /**
    * The version of the receipt.
    * @member {Number} version
    */
    version = undefined;
/**
    * @member {module:model/ReceiptTypeEnum} type
    */
    type = undefined;







}

