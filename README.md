# nano-memcached

A lightweight, in-memory caching solution for Node.js applications. This package provides a simple and efficient way to store and retrieve data with optional TTL (Time To Live) support.

## Features

- Simple key-value storage
- Optional TTL (Time To Live) for cache entries
- TypeScript support
- Lightweight and zero dependencies
- In-memory storage using Map

## Installation

```bash
npm install nano-memcached
```

## Usage

```typescript
import { Cache } from "nano-memcached";

// Create a new cache instance
const cache = new Cache();

// Set a value with optional TTL (in seconds)
cache.set("key", "value", 60); // Expires in 60 seconds
cache.set("permanent", "value"); // No expiration

// Get a value
const value = cache.get("key");

// Delete a value
cache.delete("key");

// Clear all cache entries
cache.flush();
```

## API

### `Cache` Class

#### `set(key: string, value: any, ttl?: number)`

- `key`: The key to store the value under
- `value`: The value to store (can be any type)
- `ttl`: Optional time to live in seconds

#### `get(key: string)`

- `key`: The key to retrieve
- Returns: The stored value or `null` if not found or expired

#### `delete(key: string)`

- `key`: The key to delete
- Returns: `true` if the key was deleted, `false` if it didn't exist

#### `flush()`

Clears all entries from the cache

## License

ISC
