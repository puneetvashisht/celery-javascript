import { log } from "console";

console.log(window);


function foo(){
    console.log("foo called...");
    console.log(this);
    console.log(window);
    
}

foo();



var obj = {
    name: 'John',
    log : function(){
        console.log(this)
        var _self = this;

        var setName = function(newname){
            console.log(this);
            // this.name = newname;
            _self.name = newname;
        }
        setName('Jane');
    }
}

obj.log();
console.log(obj.name);
