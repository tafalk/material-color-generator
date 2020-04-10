import { GetColor } from "../index";

test("My GetColor Test", () => {
  const res1 = GetColor("vahdet", "dark");
  const res1Length = res1.length;
  const res2 = GetColor("vahdet", "dark");
  const res2Length = res2.length;
  
  // The calls must be idempotent
  expect(res1Length).toBe(6);
  expect(res2Length).toBe(6);
  expect(res1).toBe(res2);
});
