var app = angular.module("Agenda", ["ngMessages"]);
app.controller("mainCtrl", function($scope) {
    $scope.contatos = [
        { 'nome': 'Guilherme', 'estado': 'RN', 'telefone': '9912-4160', 'email': 'guilherme@tecsoft.info' }, 
        { 'nome': 'Paulo', 'estado': 'RN', 'telefone': '8873-0264', 'email': 'policarpo@tecsoft.info' }, 
        { 'nome': 'Ramon', 'estado': 'RN', 'telefone': '8719-2080', 'email': 'ramon@tecsoft.info' }, 
        { 'nome': 'Lindemberg', 'estado': 'RN', 'telefone': '9951-8501', 'email': 'lindemberg@tecsoft.info' }, 
        { 'nome': 'Vannuty', 'estado': 'RN', 'telefone': '9600-5239', 'email': 'vannuty@tecsoft.info' }, 
        { 'nome': 'Ricardo', 'estado': 'RN', 'telefone': '8873-0260', 'email': 'ricardo@tecsoft.info' }, 
        { 'nome': 'Matheus', 'estado': 'RN', 'telefone': '9648-3609', 'email': 'andrew@tecsoft.info' }, 
        { 'nome': 'Priscila', 'estado': 'RN', 'telefone': '9916-8858', 'email': 'priscila@tecsoft.info' }, 
        { 'nome': 'Vitor', 'estado': 'RN', 'telefone': '8701-4412', 'email': 'vitor@tecsoft.info' }, 
        { 'nome': 'Jones', 'estado': 'RN', 'telefone': '9617-2237', 'email': 'jones@tecsoft.info' }, 
        { 'nome': 'Willie', 'estado': 'RN', 'telefone': '8883-8829', 'email': 'willie@tecsoft.info' }, 
        { 'nome': 'Francisco', 'estado': 'RN', 'telefone': '8872-0760', 'email': 'francisco@tecsoft.info' }
    ];
	$scope.estados = [
        {'nome': 'Acre', 'sigla': 'AC', 'regiao': 'Norte'},
        {'nome': 'Alagoas', 'sigla': 'AL', 'regiao': 'Nordeste'},
        {'nome': 'Amapá', 'sigla': 'AP', 'regiao': 'Norte'},
        {'nome': 'Amazonas', 'sigla': 'AM', 'regiao': 'Norte'},
        {'nome': 'Bahia', 'sigla': 'BA', 'regiao': 'Nordeste'},
        {'nome': 'Ceará', 'sigla': 'CE', 'regiao': 'Nordeste'},
        {'nome': 'Distrito Federal', 'sigla': 'DF', 'regiao': 'Centro-Oeste'},
        {'nome': 'Espírito Santo', 'sigla': 'ES', 'regiao': 'Sudeste'},
        {'nome': 'Goiás', 'sigla': 'GO', 'regiao': 'Centro-Oeste'},
        {'nome': 'Maranhão', 'sigla': 'MA', 'regiao': 'Nordeste'},
        {'nome': 'Mato Grosso', 'sigla': 'MT', 'regiao': 'Centro-Oeste'},
        {'nome': 'Mato Grosso do Sul', 'sigla': 'MS', 'regiao': 'Centro-Oeste'},
        {'nome': 'Minas Gerais', 'sigla': 'MG', 'regiao': 'Sudeste'},
        {'nome': 'Pará', 'sigla': 'PA', 'regiao': 'Norte'},
        {'nome': 'Paraíba', 'sigla': 'PB', 'regiao': 'Nordeste'},
        {'nome': 'Paraná', 'sigla': 'PR', 'regiao': 'Sul'},
        {'nome': 'Pernambuco', 'sigla': 'PE', 'regiao': 'Nordeste'},
        {'nome': 'Piauí', 'sigla': 'PI', 'regiao': 'Nordeste'},
        {'nome': 'Rio de Janeiro', 'sigla': 'RJ', 'regiao': 'Sudeste'},
        {'nome': 'Rio Grande do Norte', 'sigla': 'RN', 'regiao': 'Nordeste'},
        {'nome': 'Rio Grande do Sul', 'sigla': 'RS', 'regiao': 'Sul'},
        {'nome': 'Rondônia', 'sigla': 'RO', 'regiao': 'Norte'},
        {'nome': 'Roraima', 'sigla': 'RR', 'regiao': 'Norte'},
        {'nome': 'Santa Catarina', 'sigla': 'SC', 'regiao': 'Sul'},
        {'nome': 'São Paulo', 'sigla': 'SP', 'regiao': 'Sudeste'},
        {'nome': 'Sergipe', 'sigla': 'SE', 'regiao': 'Nordeste'},
        {'nome': 'Tocantins', 'sigla': 'TO', 'regiao': 'Norte'}
    ];
    
    $scope.adicionarContato = function() {
        if($scope.contatoForm.$valid) {
            $scope.contatos.push(angular.copy($scope.contato));
            console.log($scope.contatos);
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
        }        
    };
});