import Vector from "./Vector";

type ColorType = {
  red: number;
  green: number;
  blue: number;
  alpha: number;
};

export default class Body {
  context: CanvasRenderingContext2D;
  position: Vector;
  velocity: Vector;
  acceleration: Vector;
  radius: number;
  mass: number;
  fillStyle: ColorType;

  constructor(
    context: CanvasRenderingContext2D,
    position: Vector,
    velocity: Vector,
    radius: number,
    mass: number,
    fillStyle: ColorType
  ) {
    this.context = context;
    this.position = position.clone();
    this.velocity = velocity.clone();
    this.radius = radius;
    this.mass = mass;
    this.fillStyle = fillStyle;
    this.acceleration = new Vector(0, 0);
  }

  apply_force(force: Vector) {
    force = force.clone().scale(1 / this.mass);

    this.acceleration.add(force);
  }

  move() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.scale(0);
  }

  draw() {
    this.context.beginPath();
    this.context.fillStyle = `rgb(${this.fillStyle.red}, ${this.fillStyle.green}, ${this.fillStyle.blue}, ${this.fillStyle.alpha})`;
    this.context.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      Math.PI * 2
    );
    this.context.fill();
  }
}
