interface Data {
  label: string,
  value: string,
  parentValue?: string
}

let data: Data[] = [
{label: 'a', value: 1, parentValue: 3},
{label: 'b', value: 2, parentValue: 3},
{label: 'c', value: 3},
]

interface Output {
label: string,
value: string,
children: Output[]
}

{
label:'c',
value: 3,
children: [
  {label: 'a', value: 1},
  {label: 'b', value: 2}
]
}
