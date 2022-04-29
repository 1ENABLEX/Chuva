/* JavaScript com Jquery */


$(document).ready(function () {
  /* Animações inicio 
     Formulário
  */
  $("#cliqueAqui").click(function () {
    $("#divForm").toggle("slow", function () {
      //Se precisar executar algo após o carregamento da animação colocar aqui.
      $("#compartilhe").toggle();
    });
  });

  $("#botaoenviar").click(function () {
    $(".containerglassmorph").toggle("slow", function () {
      //Se precisar executar algo após o carregamento da animação colocar aqui.
      $('#cliqueAqui').hide()
      $('#divForm').hide()
    });
  });
  /* Animações Tópico Enviado */
  $("#cliqueAqui2").click(function () {
    $("#divForm").toggle("slow", function () {
      //Se precisar executar algo após o carregamento da animação colocar aqui.
      $("#compartilhe").toggle();
      $('.containerglassmorph').hide()
      $('#compartilhe').hide()
      $('#cliqueAqui').toggle(function () {

      });
    });
  });
  /* Animações final */
});



