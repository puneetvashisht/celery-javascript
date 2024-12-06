;(function(global, $){

    var  Translate = function(name, language){
        // this.name = name;
        // this.language = language
        return new Translate.init(name, language)
    }

    var supportedLanguages = ['en', 'jp']

    var greetings = {
        en: 'Hello',
        jp: 'Konichiwa!'
    }

    // common methods be defined here...
    Translate.prototype = {

        sayHello : function(){
            return this.language +  ' ' + this.name 
        },

        validate: function(){
            if(supportedLanguages.indexOf(this.language) === -1 ){
                throw "Invalid language!"
            }
        },

        greeting: function(){
            return greetings[this.language] + ' ' + this.name;
        },

        setLanguage: function(language){
            this.language = language;
            this.validate();
            return this;
        },

        log: function(){
            if(console){
                console.log(this.language +  ' ' + this.name);
            }
            return this;
        },

        HTMLGreeting: function(selector){
            if(!$){
                throw 'jQuery not loaded'
            }
            if(!selector){
                throw 'Missing selector!'
            }

            $(selector).html(this.greeting())
            return this;
        }

    }

    Translate.init = function(name, language){
        var self = this;
        self.name = name || ''
        self.language = language || ''
    }

    Translate.init.prototype = Translate.prototype

    global.Translate = global.T$ = Translate;

}(window, jQuery));