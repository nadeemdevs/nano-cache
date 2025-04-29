type CacheEntry = {
  value: any;
  expiresAt?: number;
};

export class Cache {
  private store: Map<string, CacheEntry> = new Map();

  set(key: string, value: any, ttl?: number) {
    const expiresAt = ttl ? Date.now() + ttl * 1000 : undefined;
    this.store.set(key, { value, expiresAt });
  }

  get(key: string) {
    const data = this.store.get(key);

    if (!data) return null;

    if (data.expiresAt && data.expiresAt < Date.now()) {
      this.store.delete(key);
      return null;
    }

    return data.value;
  }

  delete(key: string) {
    return this.store.delete(key);
  }
  flush() {
    this.store.clear();
  }
}
