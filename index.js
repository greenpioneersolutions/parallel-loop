module.exports = function parallel (n, each, done) {
  if (n === 0) return done()
  if (!done) done = () => {}
  let counter = 0
  let i = -1

  while (++i < n) {
    call(i)
  }

  function call (i) {
    let unlock = true

    each(() => {
      if (!unlock) return
      unlock = undefined

      if (++counter === n) done && done()
    }, i)
  }
}
