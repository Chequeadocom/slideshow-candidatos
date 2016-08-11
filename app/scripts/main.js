var Chequeado;

;(function(global, document, $){

    'use strict';

    Chequeado = {};

    Chequeado.directives = {
        color: {
            class: function(){
                return (this.activo)?'item color active':'item color';
            },
            style: function(){
                return 'background-color:'+this.color;
            },
            text: function(){
                return '';
            }
        },
        foto:{
            src: function(){
                return this.foto;
            }
        },
        foto1:{
            src: function(){
                return this.foto1;
            }
        },
        foto2:{
            src: function(){
                return this.foto2;
            }
        }
    };

    Chequeado.directives_indicators = {
        color:{
            class: function(){
                return (this.activo)?'active':'';
            },
            'data-slide-to': function(params){
                return this.id;
            },
            text: function(){
                return '';
            }
        }
    };

    Chequeado.getParam = function(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
            results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    Chequeado.init = function(){
        var pymChild = pym.Child({ polling: 1000 });
        var key = Chequeado.getParam('key');
        if(key){
            try {
                Tabletop.init( { key: key,
                        callback: Chequeado.dataLoaded,
                        parseNumbers: true,
                        simpleSheet: true });
            }
            catch(err) {
                alert('Error al leer la planilla: '+err.message);
            }
        }else{
            alert('Falta el parámetro "key" en la url.');
        }


    };

    Chequeado.dataLoaded = function(data, tabletop){        
        Chequeado.data = data;

        $('.carousel-inner').render(Chequeado.data,Chequeado.directives);
        $('.carousel-indicators').render(Chequeado.data,Chequeado.directives_indicators);
        setTimeout(function(){
            $('#carousel-candidatos').carousel();
        },2000);
    };

})(window, document, jQuery);
