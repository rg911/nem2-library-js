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
import DirectionEnum from './DirectionEnum';
import UInt64DTO from './UInt64DTO';





/**
* The MosaicSupplyChangeTransactionBodyDTO model module.
* @module model/MosaicSupplyChangeTransactionBodyDTO
* @version 0.7.15
*/
export default class MosaicSupplyChangeTransactionBodyDTO {
    /**
    * Constructs a new <code>MosaicSupplyChangeTransactionBodyDTO</code>.
    * @alias module:model/MosaicSupplyChangeTransactionBodyDTO
    * @class
    * @param mosaicId {module:model/UInt64DTO} 
    * @param direction {module:model/DirectionEnum} 
    * @param delta {module:model/UInt64DTO} 
    */

    constructor(mosaicId, direction, delta) {
        



        this['mosaicId'] = mosaicId;this['direction'] = direction;this['delta'] = delta;

        
    }

    /**
    * Constructs a <code>MosaicSupplyChangeTransactionBodyDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MosaicSupplyChangeTransactionBodyDTO} obj Optional instance to populate.
    * @return {module:model/MosaicSupplyChangeTransactionBodyDTO} The populated <code>MosaicSupplyChangeTransactionBodyDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MosaicSupplyChangeTransactionBodyDTO();

            
            
            

            if (data.hasOwnProperty('mosaicId')) {
                obj['mosaicId'] = UInt64DTO.constructFromObject(data['mosaicId']);
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = DirectionEnum.constructFromObject(data['direction']);
            }
            if (data.hasOwnProperty('delta')) {
                obj['delta'] = UInt64DTO.constructFromObject(data['delta']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/UInt64DTO} mosaicId
    */
    mosaicId = undefined;
    /**
    * @member {module:model/DirectionEnum} direction
    */
    direction = undefined;
    /**
    * @member {module:model/UInt64DTO} delta
    */
    delta = undefined;








}

