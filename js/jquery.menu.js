/*
 *  Project: Mi biblia - componente separador de libro
 *  Description: Es un proyecto donde desarrollamos componentes para enrequecer la palabra de Dios
 *  Author: Mauricio Gallo Ocampo
 *  License: 
 */

;(function ( $, window, undefined ) {
		
		var pluginName = 'MenuSepador',
				document = window.document,
				defaults = {
						colorFondo: '#ED0E0E',
						ancho: '50'
				};

		function MenuSepador( element, options ) {
				this.element = element;
				this.options = $.extend( {}, defaults, options) ;
 
				this._defaults = defaults;
				this._name = pluginName;
				this.$element = $(element);
				this.$contenedor = this.$element.children().eq(0);


				$('.jmenu').css('width', this.options.ancho+"px");
				$('#jm-message').css('background', this.options.colorFondo);
				$('#jm-frame').css('background', this.options.colorFondo);
				$('#jm-frame li ul').css('margin-left', this.options.ancho+"px");

				$('#border-superior').attr({ 'width': this.options.ancho+"px", height: "30px" });
				$('#border-inferior').attr({ 'width': this.options.ancho+"px", height: "20px" });

				var cwidth = $("#border-inferior").width();
				var cheight = $("#border-inferior").height();        
				
				this.init();
				this.fn_border_inferior(cwidth, cheight);
				this.fn_border_superior();
		}

	MenuSepador.prototype={

		init : function () {      
			 $(".jmenu").hover(  function () { $('#rss').show("slow");   },   function () {    $('#rss').hide("slow"); }); 

              $("#rss li").each(function(i){
				  $(this).hover(
	                function () { var li = $(this); 
	                	li.children('li ul').show("slow"); },   
	                function () {   var li = $(this);
	                	 li.children('li ul').hide("slow"); });
				 }); 
			
		},
		fn_border_inferior: function(cwidth, cheight){
				ctx = $('#border-inferior')[0].getContext('2d');
				ctx.beginPath();
				ctx.fillStyle = this.options.colorFondo;
				ctx.moveTo(0,0);
				ctx.lineTo (0, cheight);
				ctx.lineTo ((cwidth / 2), (cheight / 2));
				ctx.lineTo (cwidth, cheight);
				ctx.lineTo (cwidth, 0);                     
				ctx.lineTo (0, 0);                        
				ctx.closePath();
				ctx.fill();
				},
		fn_border_superior: function(){
			 ctx = $('#border-superior')[0].getContext('2d');
			 var grd=ctx.createLinearGradient(0,0,0,12);
			 grd.addColorStop(0.8,this.options.colorFondo);
			 grd.addColorStop(0.1,this.options.colorFondo);
			 grd.addColorStop(0.1,"#ffffff");
			 ctx.fillStyle=grd;
			 ctx.fillRect(0,0,this.options.ancho,100);
		}
	 }
		

		$.fn.menu = function ( options ) {
				return this.each(function () {
						if (!$.data(this, 'plugin_' + pluginName)) {
								$.data(this, 'plugin_' + pluginName, new MenuSepador( this, options ));
						}
				});
		};

}(jQuery, window));