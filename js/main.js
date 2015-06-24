var Chequeado;

;(function(global, document, $){

    "use strict";

    Chequeado = global.Chequeado = global.Chequeado || {};

    /*Chequeado.data = [
        {
            id: 0,
            active: true,
            party: "Frente para la Victoria",
            color: "#02A2DC",
            presi:{
                name: "Daniel SCIOLI",
                pic: "img/scioli.png",
                bio: "Gobernador de la Provincia de Buenos Aires"
            },
            vice:{
                name: "Carlos ZANNINI",
                pic: "img/zannini.png",
                bio: "Secretario Legal y Técnica de la Presidencia de la Nación"
            }
        },
        {
            id:1,
            activo: false,
            party: "PRO",
            color: "#FFD202",
            presi:{
                name: "Mauricio MACRI",
                pic: "img/macri.jpg",
                bio: "Jefe de Gobierno de la Ciudad de Buenos Aires"
            },
            vice:{
                name: "Gabriela MICHETTI",
                pic: "img/michetti.jpg",
                bio: "Secretario Legal y Técnica de la Presidencia de la Nación"
            }
        }
    ];*/

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

    Chequeado.init = function(key){

        Tabletop.init( { key: key,
                callback: Chequeado.dataLoaded,
                parseNumbers: true,
                simpleSheet: true }
            );

    };

    Chequeado.dataLoaded = function(data, tabletop){
        console.log(data);
        
        Chequeado.data = data;

        $('.carousel-inner').render(Chequeado.data,Chequeado.directives);
        $('.carousel-indicators').render(Chequeado.data,Chequeado.directives_indicators);
        setTimeout(function(){
            $('#carousel-candidatos').carousel();
        },2000);
    };

})(window, document,jQuery);
