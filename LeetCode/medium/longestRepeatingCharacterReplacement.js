
var characterReplacement = function(s, k) {
  let start = 0
  let end = 0
  let charCount = 0
  const visited = {}

  while(end < s.length) {
    const idx = s[end]
    if(visited[idx]) visited[idx]++
    else visited[idx] = 1

    if(visited[idx] > charCount) charCount = visited[idx]

    // if the number of characters different than s[end] exceeds k, then we move the window
    if(end - start + 1 - charCount > k) {
      visited[s[start]]--
      start++
    }
    end++
  }
  
  return end - start
};

characterReplacement("ABBB", 1)