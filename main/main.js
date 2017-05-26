module.exports = function main(strObj) {
    var nieoLine1 = '._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.'
    var nieoArray1 = nieoLine1.split('   ')
    var nieoLine2 = '|.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|'
    var nieoArray2 = nieoLine2.split('   ')
    var nieoLine3 = '|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|'
    var nieoArray3 = nieoLine3.split('   ')
    var resArray1 = []
    var resArray2 = []
    var resArray3 = []
    for (var idx = 0; idx < strObj.length; idx++) {
        var currentNum = parseInt(strObj[idx])
        resArray1.push(nieoArray1[currentNum])
        resArray2.push(nieoArray2[currentNum])
        resArray3.push(nieoArray3[currentNum])
    }
    var resLine1 = resArray1.join(' ')
    var resLine2 = resArray2.join(' ')
    var resLine3 = resArray3.join(' ')
    return resLine1 + '\n' + resLine2 + '\n' + resLine3 + '\n';
};