import { Enemy } from '../enemies/Enemy';

export abstract class EnemyDecorator implements Enemy {
  // The decorator must implement the Enemy interface because, to the outside, it must behave as a regular enemy
  protected enemy: Enemy;

  constructor(decoratedEnemy: Enemy) {
    this.enemy = decoratedEnemy;
  }

  receiveDamage(damage: number): void {
    return this.enemy.receiveDamage(damage);
  }
}
