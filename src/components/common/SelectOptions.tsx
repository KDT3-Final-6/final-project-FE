import React from 'react'

interface ISelectOptions {
  items: number[]
  value: number
  unit: string
  onChange: React.ChangeEventHandler<HTMLSelectElement>
}

const SelectOptions = ({ items, value, unit, onChange }: ISelectOptions) => {
  return (
    <select onChange={onChange} value={value}>
      {items.map((item) => (
        <option key={item} value={item}>
          {item} {unit}
        </option>
      ))}
    </select>
  )
}

export default SelectOptions
