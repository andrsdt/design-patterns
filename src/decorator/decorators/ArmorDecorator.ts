import { EnemyDecorator } from './EnemyDecorator';

export class ArmorDecorator extends EnemyDecorator {
  receiveDamage(damage: number): void {
    // Using an armor reduces the damage by half
    this.enemy.receiveDamage(damage / 2);
  }
}
