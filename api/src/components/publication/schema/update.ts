import * as I from 'interface';

const updatePublicationSchema: I.Schema = {
    type: 'object',
    properties: {
        title: {
            type: 'string'
        },
        licence: {
            type: 'string',
            enum: <I.LicenceType[]>['CC_BY', 'CC_BY_SA', 'CC_BY_ND', 'CC_BY_NC', 'CC_BY_NC_SA', 'CC_BY_NC_ND']
        },
        content: {
            type: 'string'
        },
        id: {
            type: 'string'
        },
        conflictOfInterestStatus: {
            type: 'boolean'
        },
        conflictOfInterestSupportText: {
            type: 'string'
        },
        conflictOfInterestExplanatoryText: {
            type: 'string'
        }
    },
    additionalProperties: false
};

export default updatePublicationSchema;
