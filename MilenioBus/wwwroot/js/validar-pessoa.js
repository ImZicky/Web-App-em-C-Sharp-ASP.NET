$('document').ready(function(){

    $('#validacao').click(function () {
    var certo = 0;
//NOME
    var validaQualquerTexto = new RegExp("^[a-zA-Z ]+$");
    var nome = $('#nome').val();

    if (!validaQualquerTexto.test(nome)) {
      $('#lblNome').html('<strong class="text-danger">campo invalido</strong>')
      certo = 1;
    } else {
      $('#lblNome').html('<strong class="text-success">campo valido</strong>')
    }
//EMAIL
    var validaEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    var email = $('#email').val();

    if (!validaEmail.test(email)) {
      $('#lblEmail').html('<strong class="text-danger">campo invalido</strong>')
      certo = 1;
    } else {
      $('#lblEmail').html('<strong class="text-success">campo valido</strong>')
    }

//Logradouro
      var validaQualquerLetraOuNumero = new RegExp(/^.*?[a-z]/i);
      var logradouro = $('#logradouro').val();

  if (!validaQualquerLetraOuNumero.test(logradouro)) {
      $('#lblLogradouro').html('<strong class="text-danger">campo invalido</strong>')
      certo = 1;
  } else {
      $('#lblLogradouro').html('<strong class="text-success">campo valido</strong>')
  }

      //Numero
      var validaQualquerNumero = new RegExp("^[0-9]");
      var numero = $('#numero').val();

      if (!validaQualquerNumero.test(numero)) {
          $('#lblNumero').html('<strong class="text-danger">campo invalido</strong>')
          certo = 1;
      } else {
          $('#lblNumero').html('<strong class="text-success">campo valido</strong>')
      }

      //Complemento
      var complemento = $('#complemento').val();

      if (!validaQualquerLetraOuNumero.test(complemento)) {
          $('#lblComplemento').html('<strong class="text-danger">campo invalido</strong>')
          certo = 1;
      } else {
          $('#lblComplemento').html('<strong class="text-success">campo valido</strong>')
      }

      //Bairro
      var bairro = $('#bairro').val();

      if (!validaQualquerTexto.test(bairro)) {
          $('#lblBairro').html('<strong class="text-danger">campo invalido</strong>')
          certo = 1;
      } else {
          $('#lblBairro').html('<strong class="text-success">campo valido</strong>')
      }

      //Cidade
      var cidade = $('#cidade').val();

      if (!validaQualquerTexto.test(cidade)) {
          $('#lblCidade').html('<strong class="text-danger">campo invalido</strong>')
          certo = 1;
      } else {
          $('#lblCidade').html('<strong class="text-success">campo valido</strong>')
      }



//CEP
      var cep = $('#cep').val();
      if (!validaQualquerNumero.test(cep) || cep.length != 8) {
      $("#lblCep").html('<strong class="text-danger">campo invalido</strong>')
      certo = 1;
    } else {
      $("#lblCep").html('<strong class="text-success">campo valido</strong>')
    }

//retorno

    if (certo == 0) {
      $('#envio').prop('disabled', false);
    }else {
      return console.log(1);
    }

  });
});
