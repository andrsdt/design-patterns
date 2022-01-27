import { Singleton } from './Singleton';

export default function main() {
  console.log('\n=============== START Singleton pattern ===============\n');

  const singleton1 = Singleton.getInstance();
  const singleton2 = Singleton.getInstance();

  console.log('\nUsing singleton1...\n');

  singleton1.doSomething();
  singleton1.doSomething();
  singleton1.doSomething();

  console.log('\nUsing singleton2...\n');

  singleton2.doSomething();
  singleton2.doSomething();
  singleton2.doSomething();

  console.log('\n================ END Singleton pattern ================\n');
}
