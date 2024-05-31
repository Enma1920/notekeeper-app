import { describe, expect, test } from "vitest";
import { validateNonEmpty } from "../validateNonEmpty";
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
  test("When notes properties corresponds to the correct type. Then it returns true, otherwise false ", () => {
    exemple1.notes.map((notes) => {
      expect(validateNonEmpty({ note: notes })).toEqual(true);
    });
  });
});
