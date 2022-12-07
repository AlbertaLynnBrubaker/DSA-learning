## Hash Function

is a function that generates a value of fixed length for a specific input

If I hand, say, the md5 Hash Generator a string, it will always hash to the same string of letters and numbers.

In a hash table, things work the same way. We are hashing the key to the input into a memory location and the computer knows where exactly to find that key. Then the key and the value are stored side by side in memory. This allows for extremely fast lookups because we have the exact address in memory of any given key once it is hashed.

## Collisions

Any hashing function is going to allocate only so much memory for the hash table. Inevitably, two inputs will hash to the same address, which is known as a collision.

There are a lot of different ways to deal with collisions, but a common one is to add the two values into a linked list. The consquence of this is that the typically very fast hash table O(1) will become O(n). So the rule of thumb that we are always talking about the worst case scenario when we talk about Big O notation has an exception. Collisions are rare, so we talk about average Big O with hash tables and still give them a O(1) time complexity. Still, it would be good to mention collisions.