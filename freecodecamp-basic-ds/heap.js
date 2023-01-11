// In a heap, indices start at 1. Leave index 0 as null.
// left child: index * 2
// right child: index * 2 + 1
// parent: Math.floor(index / 2)

const MinHeap = function() {
  const heap = [null]

  this.print = () => {
    const result = []
    for(let i = 0; i < heap.length; i++) {
      result.push(heap[i])
    }
    console.log(result)
    return result
  };

  this.insert = function(num) {
    heap.push(num)
    if(heap.length > 2) {
      let index = heap.length -1
      while(heap[index] < heap[Math.floor(index/2)]) {
        if(index >= 1) {
          [heap[Math.floor(index/2)], heap[index]] = [heap[index]], heap[Math.floor(index/2)]
          if(Math.floor(index/2) > 1) {
            index = Math.floor(index/2)
          } else {
            break
          }
        }
      }
    }
  }

  this.remove = function() {
    let smallest = heap[1]
    if(heap.length > 2) {
      heap[1] = heap[heap.length - 1]
      heap.splice(heap.length - 1)
      if(heap.length === 3) {
        if(heap[1] > heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]]
        }
        return smallest
      }
      let index = 1
      let left = 2 * index
      let right = 2 * index + 1
      while(heap[index] >= heap[left] || heap[index] >= heap[right]) {
        if(heap[left] < heap[right]) {
          [heap[index], heap[left]] = [heap[left], heap[index]]
          index = 2 * index + 1
        }
        left = 2 * index
        right = 2 * index + 1
        if(heap[left] === undefined || heap[right] === undefined) {
          break
        }
      }
    } else if(heap.length === 2) {
      heap.slice(1, 1)
    } else {
      return null
    }
    return smallest
  }

  this.sort = function() {
    const result = new Array()
    while(heap.length > 1) {
      result.push(this.remove())
    }
    return result
  }
}

const MaxHeap = function() {
	
	const heap = [null];
	
	this.print = () => heap;

	this.insert = function(num) {
		heap.push(num);
		if (heap.length > 2) {
			let idx = heap.length - 1;
			while (heap[idx] > heap[Math.floor(idx/2)]) {
				if (idx >= 1) {
					[heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
					if (Math.floor(idx/2) > 1) {
						idx = Math.floor(idx/2);
					} else {
						break;
					};
				};
			};
		};
	};
	
	this.remove = function() {
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length == 3) {
				if (heap[1] < heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
				if (heap[left] > heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
		} else if (heap.length == 2) {
			heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};

  this.sort = function() {
    const result = new Array()
    while(heap.length > 1) {
      result.push(this.remove())
    }
    return result
  }
};

const mh = new MaxHeap()
mh.insert(2)
mh.insert(7)
mh.insert(4)
mh.insert(1)
mh.insert(8)
mh.insert(1)

console.log(mh.print())