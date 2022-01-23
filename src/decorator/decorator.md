# Decorator pattern

## The problem

For example, consider the following scenario while developing a videogame:

- We may have an `Enemy` class.
- An enemy can wear an armor, something that modifies his behavior (e.g. he walks or behaves differently). We would create then an `EnemyArmor` class, that inherits from game.
- Now we want to implement another mechanic: an enemy can now wear a helmet too. This would lead us to the creation of a new class: `EnemyHelmet`.

This solution is, indeed, not scalable. We would also have to consider the combination of both, `EnemyArmorHelmet`, and creating another type of enemy would result in us having to implement **four** new classes, highly copuled and with a lot of repeated code:

- `EnemyA`, `EnemyAarmor`, `EnemyAHelmet`, `EnemyAArmorHelmet`
- `EnemyB`, `EnemyBarmor`, `EnemyBHelmet`, `EnemyBArmorHelmet`

## The solution

Decorator pattern can be useful when we want to **add** functionality to an existing object, without relying on a complex inheritance hierarchy. This pattern is called Wrapped, since the way we apply it is by **wrapping** an existing object (i.e. the `Enemy`), in a wrapper class that contains the base object, but adds extra functionality on top of it (i.e., a `Helmet` decorator). This is a clear use of **composition instead of inheritance**, in which we can decide the intended behavior of the entity at runtime.
