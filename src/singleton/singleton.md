# Singleton pattern

## The problem

We find the need in our project to have an object that is instantiated only once. In other words, we don't want to have, under any circumstances, two objects of the same class.

## The solution

The Singleton design pattern is appropiate for this purpose. This pattern's power resides in having a `private constructor() {}`, which will prevent the user from creating new objects of the class via `new [className]();`. We delegate this responsability to a `public getInstance()` method with a simple logic:

> _If there is not an instance of the class, create it and return it. Else, return the existing instance_.

---

## Caveats

As discussed in [The Clean Code Talks - "Global State and Singletons"](https://www.youtube.com/watch?v=-FRm3VPhseI), this pattern might be considered an anti-pattern by some. The main flaw of this approach is that it makes it almost mandatory to have another instance of the class for unit testing, and in most of the cases, the singleton approach can be substituted by a cleaner alternative.
