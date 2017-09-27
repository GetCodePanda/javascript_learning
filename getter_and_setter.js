console.log("!!!!!!!!!!!!  GETTERS !!!!!!!!!!!!!");
var obj = {
    log: ['test'],
    get latest(){
        if (this.log.length == 0) return undefined;
        return this.log[this.log.length - 1];
    }
}

console.log(obj.latest);
// delete obj.latest;
console.log(obj)

Object.defineProperty(obj,'first', {get:function(){return this.log[0];}});

console.log(obj.first);

console.log("!!!!!!!!!!!!  SETTERS !!!!!!!!!!!!!");

const language  = {
    set current (name){
        this.log.push(name);
    },
    log: []
}
language.current = "EN";
console.log(language.log);
language.current = "IN";
console.log(language.log);