import { ArmorDecorator } from './decorators/ArmorDecorator';
import { HelmetDecorator } from './decorators/HelmetDecorator';
import { Koopa } from './enemies/Koopa';

export default function main() {
  const koopa = new Koopa();
  const koopaWithArmor = new ArmorDecorator(koopa);
  const koopaWithHelmet = new HelmetDecorator(koopa);
  const koopaWithArmorAndHelmet = new HelmetDecorator(koopaWithArmor);
  const koopaWithHelmetAndArmor = new ArmorDecorator(koopaWithHelmet);

  console.log('\n=============== START Decorator pattern ===============\n');

  console.log('Dealing 100 damage to Koopa');
  koopa.receiveDamage(100);

  console.log('-----------------------------');

  console.log('Dealing 100 damage to Koopa with armor');
  koopaWithArmor.receiveDamage(100);

  console.log('-----------------------------');

  console.log('Dealing 100 damage to Koopa with helmet');
  koopaWithHelmet.receiveDamage(100);

  console.log('-----------------------------');

  console.log('Dealing 100 damage to Koopa with armor and helmet');
  koopaWithArmorAndHelmet.receiveDamage(100);

  console.log('-----------------------------');

  console.log('Dealing 100 damage to Koopa with helmet and armor');
  koopaWithHelmetAndArmor.receiveDamage(100);

  console.log('\n================ END Decorator pattern ================\n');
}
