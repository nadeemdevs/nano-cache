import { Cache } from "../src/cache";

describe("Cache", () => {
  let cache: Cache;

  beforeEach(() => {
    cache = new Cache();
  });

  test("set and get values", () => {
    cache.set("a", 123);
    expect(cache.get("a")).toBe(123);
  });

  test("delete key", () => {
    cache.set("a", 1);
    cache.delete("a");
    expect(cache.get("a")).toBeNull();
  });

  test("ttl expiration", (done) => {
    cache.set("temp", "data", 1);
    setTimeout(() => {
      expect(cache.get("temp")).toBeNull();
      done();
    }, 1100);
  });
});
