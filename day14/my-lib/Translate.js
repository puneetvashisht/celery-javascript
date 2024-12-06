;(function(global){

    var  Translate = function(name, language){
        // this.name = name;
        // this.language = language
        return new Translate.init(name, language)
    }

    Translate.prototype = {

        sayHello : function(){
            return this.language +  ' ' + this.name 
        }
    }

    Translate.init = function(name, language){
        var self = this;
        self.name = name || ''
        self.language = language || ''
    }

    Translate.init.prototype = Translate.prototype

    global.Translate = global.T$ = Translate;

}(window));