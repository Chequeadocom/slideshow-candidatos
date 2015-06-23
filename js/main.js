var Chequeado;

;(function(global, document, $){

    "use strict";

    Chequeado = global.Chequeado = global.Chequeado || {};

    Chequeado.data = [
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
            active: false,
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
    ];

    Chequeado.directives = {
        color: {
            class: function(){
                return (this.active)?'item color active':'item color';
            },
            style: function(){
                return 'background-color:'+this.color;
            },
            text: function(){
                return '';
            }
        },
        presi:{
            pic: {
                src: function(){
                    return this.pic;
                }
            }            
        },
        vice:{
            pic: {
                src: function(){
                    return this.pic;
                }
            }            
        }

    };

    Chequeado.directives_indicators = {
        color:{
            class: function(){
                return (this.active)?'active':'';
            },
            "data-slide-to": function(params){
                return this.id;
            },
            text: function(){
                return '';
            }
        }
    };

    Chequeado.init = function(){
        $('.carousel-inner').render(Chequeado.data,Chequeado.directives);
        $('.carousel-indicators').render(Chequeado.data,Chequeado.directives_indicators);
        setTimeout(function(){
            $('#carousel-candidatos').carousel();
        },2000);
        //$('#carousel-candidatos').carousel(0);
    };

})(window, document,jQuery);
