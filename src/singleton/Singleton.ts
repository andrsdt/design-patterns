export class Singleton {
  private static instance: Singleton;

  private constructor() {
    /**
     * Having a private constructor is essential since it
     * does not allow the arbitrary initialization of the
     * class. The end user can only access the getInstance()
     * method, that will be responsible for creating the instance
     * if it does not exist.
     * */
  }

  public static getInstance(): Singleton {
    this.instance = this.instance || new Singleton();
    return this.instance;
  }

  // ------------------------------------------------------- //

  private counter = 0; // Note that this is not a static property

  public doSomething(): void {
    console.log('counter -> ' + this.counter++);
  }
}
