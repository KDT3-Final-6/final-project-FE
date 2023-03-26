const count = (constant: number[], start:number, end:number) => {
  for (let i = start; i <= end; i++) {
    constant.push(i)
  }
}

export default count