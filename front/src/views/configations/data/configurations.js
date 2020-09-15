let Configurations = [
    { id: (Math.random() * (5000 - 1000) + 10).toFixed(0), requester: 'Escola Frei Artur', destination: 'Ponto Eletrônico', typeService: 'Alterar horário', initials: 'SMAG', term: 4, priority: 'Alta' },
    { id: (Math.random() * (5000 - 1000) + 10).toFixed(0), requester: 'Escola Raimunda Nonato', destination: 'Destino', typeService: 'Excluir Servidor', initials: 'SMAG', term: 5, priority: 'Alta' },
    { id: (Math.random() * (5000 - 1000) + 10).toFixed(0), requester: 'Escola Janio Quadro', destination: 'Teste', typeService: 'Inserir Servidor', initials: 'SMAG', term: 2 , priority: 'Média'},
    { id: (Math.random() * (5000 - 1000) + 10).toFixed(0), requester: 'Francisca de Assis', destination: 'Ponto Eletrônico', typeService: 'Outros', initials: 'SMAG', term: 1 , priority: 'Pequena'},
    { id: (Math.random() * (5000 - 1000) + 10).toFixed(0), requester: 'Francisca de Assis', destination: 'Ponto Eletrônico', typeService: 'Outros', initials: 'SMAG', term: 5 , priority: 'Pequena'},
    { id: (Math.random() * (5000 - 1000) + 10).toFixed(0), requester: 'Francisca de Assis', destination: 'Ponto Eletrônico', typeService: 'Outros', initials: 'SMEC', term: 5 , priority: 'Pequena'},
]


// quem solicita
// tipo de sv (inclusao, correcao)
// prazo
// nivel de prioridade

export default Configurations;