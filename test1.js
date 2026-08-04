/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */

define(['N/record', 'N/log'], (record, log) => {

    const beforeLoad = (context) => {
        try {
            log.debug({
                title: 'Before Load Trigger',
                details: 'User Event executed before loading record'
            });

            log.debug({
                title: 'Event Type',
                details: context.type
            });

            log.debug({
                title: 'Record Type',
                details: context.newRecord.type
            });

        } catch (e) {
            log.error({
                title: 'Before Load Error',
                details: e
            });
        }
    };


    const beforeSubmit = (context) => {
        try {
            let newRecord = context.newRecord;

            log.debug({
                title: 'Before Submit Trigger',
                details: 'User Event executed before saving record'
            });

            log.debug({
                title: 'Record ID',
                details: newRecord.id
            });

            // Example: Set a field value
            // newRecord.setValue({
            //     fieldId: 'custbody_test_field',
            //     value: 'Testing User Event'
            // });

        } catch (e) {
            log.error({
                title: 'Before Submit Error',
                details: e
            });
        }
    };


    const afterSubmit = (context) => {
        try {
            let newRecord = context.newRecord;

            log.debug({
                title: 'After Submit Trigger',
                details: 'User Event executed after saving record'
            });

            log.debug({
                title: 'Created Record ID',
                details: newRecord.id
            });

        } catch (e) {
            log.error({
                title: 'After Submit Error',
                details: e
            });
        }
    };


    return {
        beforeLoad,
        beforeSubmit,
        afterSubmit
    };

});