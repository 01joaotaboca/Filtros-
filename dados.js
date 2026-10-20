// BASE DE FILTROS — edite este arquivo para cadastrar os filtros definitivos.
// Cada item = um filtro e todos os códigos equivalentes dele.
// Os itens abaixo são EXEMPLOS DE TESTE (fictícios). Substitua pelos dados dos catálogos.
const FILTROS = [
  {
    tipo: "Óleo",
    descricao: "Exemplo de teste — filtro de óleo lubrificante",
    codigos: [
      { marca: "Marca A", codigo: "EX-1001" },
      { marca: "Marca B", codigo: "TB 2002" },
      { marca: "Marca C", codigo: "C-3003" }
    ],
    aplicacoes: ["Trator exemplo 1 (motor X)", "Colheitadeira exemplo 2"]
  },
  {
    tipo: "Combustível",
    descricao: "Exemplo de teste — filtro de combustível",
    codigos: [
      { marca: "Marca A", codigo: "EX-2001" },
      { marca: "Marca B", codigo: "TB 4004" }
    ],
    aplicacoes: ["Trator exemplo 1", "Pulverizador exemplo 3"]
  },
  {
    tipo: "Ar",
    descricao: "Exemplo de teste — elemento de filtro de ar",
    codigos: [
      { marca: "Marca A", codigo: "EX-3001" },
      { marca: "Marca C", codigo: "C-5005" }
    ],
    aplicacoes: ["Caminhão exemplo 4"]
  }
];
