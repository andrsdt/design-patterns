import { Enemy } from './Enemy';

export class Koopa implements Enemy {
  receiveDamage(damage: number): void {
    console.log(`Koopa received ${damage} damage`);
  }
}
