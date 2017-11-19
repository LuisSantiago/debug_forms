$('#form_interno').on('shown.bs.modal', function (e) {
  function agregar_div_selector(){
                 $('#debug_selector').remove();
                $('body').append('<div id="debug_selector" class="debug_selector" style="padding:10px; position: absolute; right:0px; bottom:0px; font-size:12px; background-color: #0284A8; color:#fff; display: block; z-index:999999" id="debug_selector" type="text"></div>');
                // Inputs
                $('.debug_selector').append('<input data-select_elemento="input" id="debug_input" class="debugs_selectors" type="checkbox" name="debug_input" value="debug_input"> Mostrar IDS de los INPUTS<br>');
                // Textareas
                $('.debug_selector').append('<input data-select_elemento="textarea" id="debug_textarea" class="debugs_selectors" type="checkbox" name="debug_textarea" value="debug_textarea"> Mostrar IDS de los TEXTAREAS<br>');
                // Divs
                $('.debug_selector').append('<input data-select_elemento="div" id="debug_div" class="debugs_selectors" type="checkbox" name="debug_div" value="debug_div"> Mostrar IDS de los DIVS<br>');
                // Tabs
                $('.debug_selector').append('<input data-select_elemento="button" id="debug_button" class="debugs_selectors" type="checkbox" name="debug_button" value="debug_button"> Mostrar IDS de los BOTONES<br>');
            };

            agregar_div_selector();
            
            function agregar_ids_elemento(elemento){
                $(elemento).not(".debugs_selectors").each(function() {
                    var id = $(this).attr("id");
                        if( id != undefined){
                            $(this).parent('div').prepend('<input data-elemento="'+elemento+'" class="debug_inputs_texto" style="font-size:13px; background-color: #0284A8; color:#fff; display: block;" id="luis_'+id+'" type="text" value="'+id+'">');
                            if(document.getElementById('luis_'+id)){
                                 document.getElementById('luis_'+id).onclick = function() {
                                     this.select();
                                     document.execCommand('copy');
                                     $(this).css('color', '#0284A8').css('background-color', '#fff');
                                 }
                             }
                        }
                });
            }
           function destruir_ids_elemento(elemento){
               $('input[data-elemento='+elemento+']').remove();
           }
           
           $('input.debugs_selectors').change(function() {
                var data_elemento = $(this).data("select_elemento");
               if(this.checked) {
                    agregar_ids_elemento(data_elemento);
                }else{
                    destruir_ids_elemento(data_elemento);
                }
            });
           

})    
$('#form_interno').on('hidden.bs.modal', function (e) {
   $('#debug_selector').hide();
        
   function destruir_ids_elemento(elemento){
           $('input[data-elemento='+elemento+']').remove();
   }
    
    var data_elemento = $(this).data("select_elemento");
    destruir_ids_elemento(data_elemento);       
});    