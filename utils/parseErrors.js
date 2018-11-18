const _ = require('lodash');




exports.parseErrors = function(errors){

        const result={};
        
        _.forEach(errors, (val,key) => {
            result[key] = val.message;     
        })
        
        console.log(result);
        
        return result;

    }
