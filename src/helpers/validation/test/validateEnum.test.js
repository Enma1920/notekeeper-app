import { describe, expect, test } from "vitest";
import { validateEnum } from "../validateEnum";
const exemple1 = {
  notes: [
    {
      id: "0WaR1-1714233765588",
      name: "Walk the dog",
      description: "Go to the park",
      important: false,
      status: "pending",
      due_date: "4/27/2024",
      created_at: 1714233765597,
    },
  ],
};
describe("Given validateEnum function", () => {
  test("When the object notes is invoked. Then returns true if the note status corresponds to one of the allowed values, otherwise returns false", () => {
    exemple1.notes.map((note) => {
      const isEnum = validateEnum(note);

      expect(isEnum).toEqual(true);
    });
  });
});
