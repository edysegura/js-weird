const a = {
  value: 1,

  valueOf() {
    return this.value++;
  }
}

console.log(a == 1 && a == 2 && a == 3)
//false or true??