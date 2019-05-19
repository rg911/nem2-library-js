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
import AccountPropertyTypeEnum from './AccountPropertyTypeEnum';





/**
* The AccountPropertyDTO model module.
* @module model/AccountPropertyDTO
* @version 0.7.15
*/
export default class AccountPropertyDTO {
    /**
    * Constructs a new <code>AccountPropertyDTO</code>.
    * @alias module:model/AccountPropertyDTO
    * @class
    * @param propertyType {module:model/AccountPropertyTypeEnum} 
    * @param values {Array.<Object>} The address, transaction type or mosaic id to filter.
    */

    constructor(propertyType, values) {
        



        this['propertyType'] = propertyType;this['values'] = values;

        
    }

    /**
    * Constructs a <code>AccountPropertyDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AccountPropertyDTO} obj Optional instance to populate.
    * @return {module:model/AccountPropertyDTO} The populated <code>AccountPropertyDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountPropertyDTO();

            
            
            

            if (data.hasOwnProperty('propertyType')) {
                obj['propertyType'] = AccountPropertyTypeEnum.constructFromObject(data['propertyType']);
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [Object]);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/AccountPropertyTypeEnum} propertyType
    */
    propertyType = undefined;
    /**
    * The address, transaction type or mosaic id to filter.
    * @member {Array.<Object>} values
    */
    values = undefined;








}


