
# My Personal Website

This project is my personal portfolio website, showcasing my professional projects, skills, and experiences in web development. It is built using React, TypeScript, and Vite for fast and efficient development.

## Getting Started

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/personal-website.git
   cd personal-website
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Development

To start the development server with hot module replacement:
```sh
npm run dev
```

### Build

To build the project for production:
```sh
npm run build
```

### Preview

To preview the production build:
```sh
npm run preview
```

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
