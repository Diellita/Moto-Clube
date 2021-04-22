var input = {
    Marca: $('[name="Marca"]'),
    Modelo: $('[name="Modelo"]'),
    Ano: $('[name="Ano"]'),
    Cor: $('[name="Cor"]'),
    Customizacao: $('[name="Customizacao"]'),
    Preco: $('[name="Preco"]'),
    Contato: $('[name="Contato"]'),
    Nome:$("#nome_cad"),
}

var documento = $(document);
var linhas = $("#tabela tbody");

documento.on("click", "[data-acao='adicionar']", function onAdicionarClick() {
    var item = {
        Marca: input.Marca.val(),
        Modelo: input.Modelo.val(),
        Ano: input.Ano.val(),
        Cor: input.Cor.val(),
        Customizacao: input.Customizacao.val(),
        Preco: input.Preco.val(),
        Contato: input.Contato.val()
    };    
    
    if ($.trim(item.Marca) == "" || $.trim(item.Modelo) == "" || $.trim(item.Ano) == "" || $.trim(item.Cor) == "" || $.trim(item.Customizacao) == "" || $.trim(item.Preco) == "" ||  $.trim(item.Contato) == "" ) {
        return;
    }
 
    var linha = $("<tr>");
    var marca = $("<td>").attr("data-column", "Marca");
    var modelo = $("<td>").attr("data-column", "Modelo");
    var ano = $("<td>").attr("data-column", "Ano");  
    var cor = $("<td>").attr("data-column", "Cor");
    var customizacao = $("<td>").attr("data-column", "Customizacao");  
    var preco = $("<td>").attr("data-column", "Preco");
    var contato = $("<td>").attr("data-column", "Contato");  
    var acoes = $("<td>").attr("data-column", "Acoes");
    var excluir = $("<button>").attr("data-acao", "excluir").html("Excluir");
  
    marca.html(item.Marca).data("value", item.Marca);
    modelo.html(item.Modelo).data("value", item.Modelo);
    ano.html(item.Ano).data("value", item.Ano);
    cor.html(item.Cor).data("value", item.Cor);
    customizacao.html(item.Customizacao).data("value", item.Customizacao);
    preco.html(item.Preco).data("value", item.Preco);
    contato.html(item.Contato).data("value", item.Contato);
    acoes.append(excluir);
    
    linha.append(marca);
    linha.append(modelo);
    linha.append(ano);
    linha.append(cor);
    linha.append(customizacao);
    linha.append(preco);
    linha.append(contato);
    linha.append(acoes);
    linhas.append(linha);
    return false;
});
                 
documento.on("click", "[data-acao='excluir']", function onExcluirClick() {
    var self = $(this);
    var linha = self.closest("tr");
    linha.remove();
    return false;
});

documento.on("click", "#CPF", function redirecionaPorTipo1(){
    $("#cadastro").addClass("row").removeClass("d-none");
    $("#voltar").addClass("row").removeClass("d-none");
    $("#escolha").addClass("d-none");
});
documento.on("click", "#CNPJ", function redirecionaPorTipo2(){
    $("#cadastro2").addClass("row").removeClass("d-none");
    $("#voltar").addClass("row").removeClass("d-none");
    $("#escolha").addClass("d-none");
});
documento.on("click", "#voltar", function redirecionaPorTipo2(){
    $("#escolha").addClass("row").removeClass("d-none");
    $("#cadastro").addClass("d-none");
    $("#cadastro2").addClass("d-none");
    $("#voltar").addClass("d-none");
});

function cadastrar(){
    window.location.href = "http://127.0.0.1:5500/cadastro.html";
}
