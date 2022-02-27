Array.prototype.myFind = function(callback){
    for(let i = 0; i < this.length; i++){
        let res = callback(this[i],i);
        if(res) {
            return this[i];
        }
    }
    return undefined;
}