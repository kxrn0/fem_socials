import Vector from "./Vector";

export default function is_point_in_circle(
  point: Vector,
  circle: { center: Vector; radius: number }
) {
  const x = circle.center.x - point.x;
  const y = circle.center.y - point.y;
  const rdsq = circle.radius * circle.radius;
  const sq = x * x + y * y;

  return sq <= rdsq;
}
