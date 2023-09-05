export const dataTable: Data[] = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    joinDate: new Date()
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '11 Downing Street',
    joinDate: new Date(new Date().setDate(new Date().getDate() + 1))
  },
  {
    key: '3',
    name: 'Doe',
    age: 23,
    address: '',
    joinDate: new Date(new Date().setDate(new Date().getDate() + 2))
  },
  {
    key: '4',
    name: 'Other',
    age: 24,
    address: '121 Downing Street',
    joinDate: new Date(new Date().setDate(new Date().getDate() + 5))
  },
  {
    key: '5',
    name: 'Alex',
    age: 44,
    address: '14 Downing Street',
    joinDate: new Date(new Date().setFullYear(new Date().getFullYear() - 5))
  },
  {
    key: '6',
    name: 'Mrmr',
    age: 74,
    address: '18 Downing Street',
    joinDate: new Date(new Date().setFullYear(new Date().getFullYear() + 4))
  },
  {
    key: '7',
    name: 'Nappun Yoja',
    age: 27,
    address: '1 Downing Street',
    joinDate: new Date(new Date().setDate(new Date().getDate() + 7))
  },
  {
    key: '8',
    name: 'Bibi famous',
    age: 28,
    address: '13 Downing Street',
    joinDate: new Date(new Date().setDate(new Date().getDate() - 7))
  },
  {
    key: '9',
    name: 'Yoona',
    age: 22,
    address: '15 Downing Street',
    joinDate: new Date(new Date().setFullYear(new Date().getFullYear() - 2))
  },
  {
    key: '10',
    name: 'Jaesuk',
    age: 47,
    address: '12 Downing Street',
    joinDate: new Date(new Date().setDate(new Date().getDate() + 17))
  },
  {
    key: '11',
    name: 'Jihyo',
    age: 41,
    address: '12 Downing Street',
    joinDate: new Date(new Date().setDate(new Date().getDate() + 9))
  }
];

interface Data {
  key: string
  name: string
  address: string
  age: number
  joinDate: Date
}
