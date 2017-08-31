$(document).ready(function(){
    //Se muestra el primer panel
    $('.panel__contenido').first().slideDown();

    //Se agrega un event listener (de un click) a la cabecera de cualquier panel
    $('.panel__cabecera').click(function(evt){
      evt.preventDefault();
      //Se cierran todos los paneles que no sean en el que se hizo click
      $('.panel__contenido').not(this).each(function(){
        $(this).slideUp();
      })
      //Se muestra el contenido del panel/Se esconde el contenido del panel  ~Alternador
      $(this).siblings('.panel__contenido').slideToggle();

    })
})
