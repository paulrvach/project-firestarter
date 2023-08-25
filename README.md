# React-Tailwindcss-Express Firestater

![Firestarter Design System](https://res.cloudinary.com/dxmqknhgj/image/upload/v1688925123/Firestater_Design_system_header_jw2zcy.png)

Firestarter is a project template for kickstarting your web development projects with webpack, Babel, and other essential tools. It provides a pre-configured `package.json` file that sets up the necessary dependencies and scripts to help you quickly get started.

## Installation

To use Firestarter, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/paulrvach/project-firestarter.git
   ```

2. Navigate to the project directory:
   ```bash
   cd project-firestarter
   ```

3. Install the project dependencies:
   ```bash
   npm install
   ```

## Usage

Firestarter comes with several predefined scripts in the `package.json` file to simplify your development workflow:

- **Build**: Compiles the project for production.
  ```bash
  npm run build
  ```

- **Start**: Runs the compiled project in production mode.
  ```bash
  npm start
  ```

- **Dev**: Starts a development server with hot reloading for both the client and server code.
  ```bash
  npm run dev
  ```

- **Watch**: Watches for changes and recompiles the project.
  ```bash
  npm run watch
  ```

- **Serve**: Starts a development server without hot reloading.
  ```bash
  npm run serve
  ```

- **Test**: Runs the project's tests.
  ```bash
  npm test
  ```

## Project Structure

The project structure is set up as follows:

```
project-firestarter/
├── server/
│   └── server.js
├── src/
│   ├── index.js
│   └── styles.css
├── .babelrc
├── .postcssrc
├── webpack.config.js
└── package.json
```

- The `server` directory contains the server-side code.
- The `src` directory contains the client-side code, including the entry point `index.js` and a sample `styles.css` file.
- The `.babelrc` file configures Babel for transpiling JavaScript code.
- The `.postcssrc` file configures PostCSS for processing CSS.
- The `webpack.config.js` file specifies the webpack configuration for bundling the project.

Feel free to modify the project structure according to your needs.

## Dependencies

Firestarter includes the following dependencies:

- `@babel/core`: Babel core package.
- `@babel/preset-env`: Babel preset for compiling JavaScript to a compatible version.
- `@babel/preset-react`: Babel preset for compiling React JSX code.
- `@webpack-cli/generators`: Webpack CLI generators.
- `autoprefixer`: PostCSS plugin for adding vendor prefixes.
- `babel-loader`: Babel loader for webpack.
- `css-loader`: CSS loader for webpack.
- `html-webpack-plugin`: Webpack plugin for generating an HTML file.
- `postcss`: A tool for transforming CSS with JavaScript.
- `postcss-loader`: PostCSS loader for webpack.
- `postcss-preset-env`: PostCSS preset for future CSS features.
- `prettier`: Opinionated code formatter.
- `style-loader`: Style loader for webpack.
- `tailwindcss`: Utility-first CSS framework.
- `webpack`: Module bundler for JavaScript.
- `webpack-cli`: Command-line interface for webpack.
- `webpack-dev-server`: Development server for webpack.

Firestarter also includes the following runtime dependencies:

- `cookie-parser`: Express middleware for parsing cookies.
- `cors`: Express middleware for enabling Cross-Origin Resource Sharing (CORS).
- `daisyui`: Tailwind

 CSS component library.
- `express`: Web application framework for Node.js.
- `mini-css-extract-plugin`: Extracts CSS into separate files.
- `nodemon`: Utility that automatically restarts the server during development.
- `react`: JavaScript library for building user interfaces.
- `react-dom`: Entry point for working with React DOM.

Please refer to the official documentation for each dependency to learn more about their usage and configuration.
