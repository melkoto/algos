Promise.prototype.finally = function(fn) {
  // Код здесь
  let onFinally = async function(value) {
    return await Promise.resolve(fn()).then(value)
  }
  return this.then(
    res => onFinally(() => res),
    err => onFinally(() => Promise.reject(err)),
  )
}

function generateKey(args) {
  return args.map(arg => `${typeof(arg)}<${String(arg)}>`).join(',');
}

function memoize(fn, timeout) {
  const cache = {};

  return function (...args) {
    const key = generateKey(args);
    const result = cache[key];

    if (typeof result === 'undefined' || Date.now() > result.expire) {
      return Promise.resolve(fn(...args)).then(value => {
        cache[key] = { value, expire: Date.now() + timeout };
        return value;
      });
    }

    return Promise.resolve(result.value);
  };
} 