import { Enemy } from '../enemies/Enemy';

export class Helmet {
  enemy: Enemy;

  constructor(enemy: Enemy) {
    this.enemy = enemy;
  }

  receiveDamage(damage: number): void {
    // Using a helmet blocks the damage completely
    this.enemy.receiveDamage(0);
  }
}
