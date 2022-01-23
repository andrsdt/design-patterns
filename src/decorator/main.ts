import { Armor } from './decorators/Armor';
import { Helmet } from './decorators/Helmet';
import { Koopa } from './enemies/Koopa';

export default function decorator() {
  const koopa = new Koopa();
  const koopaWithArmor = new Armor(koopa);
  const koopaWithHelmet = new Helmet(koopa);
  const koopaWithArmorAndHelmet = new Helmet(koopaWithArmor);
  const koopaWithHelmetAndArmor = new Armor(koopaWithHelmet);

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
