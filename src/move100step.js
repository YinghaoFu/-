function fib(n) {
    let array = new Array(n + 1).fill(null)
    array[0] = 1
    array[1] = 2
    array[2] = 4
    for (let i = 3; i <= n-1; i++) {
      array[i] = array[i - 1] + array[i - 2]+array[i - 3]
    }
    return array[n-1]
  }
 console.log(fib(100));
 