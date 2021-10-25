const cards = [
    {
      id: 'card-1',
      title: 'Conception technique',
    },
    {
      id: 'card-2',
      title: 'Conception graphique',
    },
    {
      id: 'card-3',
      title: 'UML',
    },
  ];
  
  const data = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'Todo',
        cards,
      },
      'list-2': {
        id: 'list-2',
        title: 'Doing',
        cards: [],
      },
    },
    listIds: ['list-1', 'list-2'],
  };
  
  export default data;
  