/**
 * Created by thanh on 25/04/17.
 */
exports.chia_2_so = (a,b) =>{
    let a_ = parseFloat(a);
    let b_ = parseFloat(b);
    if(isNaN(a_)){
        throw new Error('a is notg number');
    }
    if(isNaN(b_)){
        throw new Error('b is not number');
    }
    if(b_===0){
        throw new Error('Divide to zero');
    }
    return parseFloat(a_) / parseFloat(b_);
};