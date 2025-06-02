![CI Pipeline Badge](https://github.com/deepthought42/github-actions-demo/actions/workflows/ci-cd.yml/badge.svg)

# GitHub Actions Demo

A simple npm package demonstrating basic TypeScript setup with testing and linting.

## Installation

```bash
npm install github-actions-demo
```

## Usage

```typescript
import { greet, isEmpty } from 'github-actions-demo';

// Greet someone
console.log(greet('World')); // Output: Hello, World!

// Check if a string is empty
console.log(isEmpty('')); // Output: true
console.log(isEmpty('hello')); // Output: false
```

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the package:
   ```bash
   npm run build
   ```
4. Run tests:
   ```bash
   npm test
   ```
5. Run linting:
   ```bash
   npm run lint
   ```

## License

MIT
