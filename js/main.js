var Chequeado;

;(function(global, document, $){

    "use strict";

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
        presi_foto:{
            src: function(){
                return this.presi_foto;
            }
        },
        vice_foto:{
            src: function(){
                return this.vice_foto;
            }
        }
    };

    Chequeado.directives_indicators = {
        color:{
            class: function(){
                return (this.activo)?'active':'';
            },
            "data-slide-to": function(params){
                return this.id;
            },
            text: function(){
                return '';
            }
        }
    };

    Chequeado.getParam = function(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };

    Chequeado.init = function(){
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

    Chequeado.initGenerador = function(){
        $('#test').on('click',function(){
            var sheet = $('#sheet').val();
            var height = $('#height').val();

            if(sheet && height){
                var url = location.origin + location.pathname + 'viz.html?key='+sheet;
                $('iframe').attr('src',url).attr('height',height);
                $('textarea').html('<iframe src="'+url+'" frameborder="0" height="'+height+'" width="100%"></iframe>');
            } else {
                alert('Complete todos los campos');
            }
        });
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
