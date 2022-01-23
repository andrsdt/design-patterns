import { EnemyDecorator } from './EnemyDecorator';

export class HelmetDecorator extends EnemyDecorator {
  receiveDamage(damage: number): void {
    // Using a helmet blocks the damage completely
    this.enemy.receiveDamage(0);
  }
}
