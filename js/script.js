/* JavaScript com Jquery */


$(document).ready(function () {
  /* Animações inicio 
     Formulário
  */
  $("#cliqueAqui").click(function () {
    $("#divForm").slideToggle("slow", function () {
      //Se precisar executar algo após o carregamento da animação colocar aqui.
      $("#compartilhe").slideToggle();
    });
  });

  $("#botaoenviar").click(function () {
    $(".containerglassmorph").slideToggle("slow", function () {
      //Se precisar executar algo após o carregamento da animação colocar aqui.
      $('#cliqueAqui').hide()
      $('#divForm').hide()
    });
  });
  /* Animações Tópico Enviado */
  $("#cliqueAqui2").click(function () {
    $("#divForm").slideToggle("slow", function () {
      //Se precisar executar algo após o carregamento da animação colocar aqui.
      $("#compartilhe").slideToggle();
      $('.containerglassmorph').hide()
      $('#compartilhe').hide()
      $('#cliqueAqui').slideToggle(function () {

      });
    });
  });
  /* Animações final */
});



