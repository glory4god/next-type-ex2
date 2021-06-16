const lists: Array<any> = [
  {
    id: '1',
    name: 'hayoung',
  },
  {
    id: '2',
    name: 'youngari',
  },
];

export function getData(id: string) {
  const data = lists[+id - 1];
  const name = data.name;
  return { id, name };
}

export function getAllIds() {
  const paths = lists.map((arr) => {
    return {
      params: {
        id: arr.id,
      },
    };
  });
  return paths;
}
