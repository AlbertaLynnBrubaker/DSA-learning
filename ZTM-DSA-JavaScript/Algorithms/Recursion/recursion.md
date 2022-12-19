# Recursion

Recursion is when you define something by part of the definition including itself. Confused.

In coding, this is simply when we take a function declaration and the call the function inside the definition as part of the original declaration.

``` 
function inception(parent) {
  if(something something) {
    do something
  } else {
    newParent = child
    inception(newParent)
  }  
}
```

## Stack overflow

Each time we call a recursive function it adds that function to the call stack. The call stack has a finite amount of memory to store function calls in it, though. A recursive function has to have a base case, to prevent to call stack from filling up and causing "stack overflow."

## Anatomy of Recursion

A base case is just some condition that says NOT to call the recursive case. By doing so, we break out of the recursion and prevent hitting our call stack limit and stack overflow.

The recursive case is just the other conditions that cause the function to be invoked again and again until the base case is satisfied.

The return of a recursive function occuring before the recursive case fires, will return to the top layer of the recursive function NOT into the higher order that calls the recursive function initially. So a return statement at the bottom of the recursive function needs to exist if you are trying to return something that is being retrieved recursively.

Save your base case into a variable or call ```return inception()``` on the recursive call.

1. Identify the base case
2. Identify the recursive case
3. Get closer and closer and return when needed. Usually you have 2 returns. One for the base case and one for the recursive case.

## When to use Recursion

Every time we are using a tree or converting something into a tree
  1. A problem can be divided into a number of subproblems that are smaller instances of the same problem

  2. Each instance of the subproblem is identical in nature

  3. The solutions of each subproblem can be combined to solve the entire problem