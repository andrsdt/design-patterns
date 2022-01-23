import { Enemy } from '../enemies/Enemy';

export class Armor {
  enemy: Enemy;

  constructor(enemy: Enemy) {
    this.enemy = enemy;
  }

  receiveDamage(damage: number): void {
    // Using an armor reduces the damage by half
    this.enemy.receiveDamage(damage / 2);
  }
}
