

var checkIfPangram = function(sentence) {
  const set = new Set

  for(let l of sentence) {
    set.add(l)
  }

  return set.size === 26
};

c({res: checkIfPangram("bababooey")})