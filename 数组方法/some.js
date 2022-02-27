Array.prototype.mySome = function(callback){
    for(let i = 0; i < this.length; i++){
        if(callback(this[i],i)){
            return true
        };
    }
    return false;
}