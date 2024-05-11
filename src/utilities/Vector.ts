import random from "./random";

export default class Vector {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(other: Vector) {
    this.x += other.x;
    this.y += other.y;

    return this;
  }

  scale(n: number) {
    this.x *= n;
    this.y *= n;

    return this;
  }

  copy(other: Vector) {
    this.x = other.x;
    this.y = other.y;
  }

  clone() {
    return new Vector(this.x, this.y);
  }

  set(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static random_vector(size: number = 1) {
    const angle = random(0, Math.PI * 2);
    const x = size * Math.cos(angle);
    const y = size * Math.sin(angle);

    return new Vector(x, y);
  }

  static add(u: Vector, v: Vector) {
    return new Vector(u.x + v.x, u.y + v.y);
  }
}
