export class Car {
  constructor(private _nameeee: string, private _speeddaze: number) {}

  public get name(): string {
    return this._nameeee;
  }

  public set name(name: string) {
    this._nameeee = name;
  }

  public get speed(): number {
    return this._speeddaze;
  }

  public set speed(speed: number) {
    this._speeddaze = speed;
  }
}
