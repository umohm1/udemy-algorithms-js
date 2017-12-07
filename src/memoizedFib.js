function memoizedFib(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] = memoizedFib(index - 1, cache) + memoizedFib(index - 2, cache);
    }
  }
  return cache[index];
}

memoizedFib(50);
