# Gemini Project Context: Astrical

**You are working on the Astrical documentation site, an AI-first Astro based CMS and Digital Experience Platform.**

## Project Overview

Astrical is designed to decouple content and structure from the underlying code, enabling AI agents to build and manage enterprise-grade websites primarily through YAML configuration.

The project consists of two main components:
1.  **Core (`src/core`)**: The Astro-based engine that renders the website. It transforms declarative YAML content into a static site.
2.  **CLI (`src/cli`)**: The command-line interface for managing the project, running development and management commands, and building the site.

## Core Philosophy

*   **Content as Configuration**: The site's pages, menus, and global settings are defined in structured YAML files within the `content/` directory.
*   **Code as Engine**: The `src/core` directory contains the logic, components, and layouts. **Avoid modifying `src/core` unless explicitly tasked with adding new capabilities that cannot be achieved via YAML or styling.**
*   **CLI as Interface**: Use the custom CLI commands (via `npm run` scripts or `astrical`) to interact with the project.

## Navigation Guide

### 1. The Manuals (Read These First)
*   **`src/core/dev/content_management.rst`**: **CRITICAL**. This is your "Operations Manual". It defines the YAML schema, available components, and how to build pages.
*   **`src/core/dev/architecture.rst`**: Explains the technical architecture and data flow.
*   **`src/core/dev/theme_design.rst`**: How to style the site using `themes/*/style.yaml` and `global.css`.
*   **`src/core/dev/module_dev.md`**: Guide for creating and managing modules to extend the system.

### 2. The Workspace (Your Domain)
*   **`content/pages/`**: Create and edit page YAML files here.
*   **`content/shared/`**: Reusable content widgets used within page sections.
*   **`content/menus/`**: Update navigation menus.
*   **`content/config.yaml`**: Global site configuration.
*   **`themes/`**: Theme definitions for styling.
*   **`public/`**: Store static assets (images, PDFs, etc.) here.
*   **`src/modules/`**: Feature modules/submodules.

### 3. The Engine (Restricted)
*   `src/core/`: Contains the Astro components, layouts, and logic. Modifying this implies changing the *framework* capabilities, not just the site content.

## Development Workflow & Commands

The project root `package.json` scripts map to the `src/cli` commands.

*   **Start Server**: `npm run dev`
    *   Starts the Astro development server (powered by `src/cli`'s `dev` command).
    *   Access at `http://localhost:4321`.
*   **Build Site**: `npm run build`
    *   Builds the production static site to `dist/`.
*   **Validate Content**: `npm run validate`
    *   Validates all YAML content against the schemas in `src/core/dev/content.spec.yaml`.
*   **Type Check**: `npm run check`
    *   Runs ESLint, Prettier, and Astro diagnostics.
*   **Fix Linting Errors**: `npm run fix`
    *   Fix ESLint and Prettier linting issues.

## Rules of Engagement

1.  **Read the Manual**: Always refer to `src/core/dev/content_management.rst` before creating complex pages.
2.  **YAML First**: Attempt to solve user requests by modifying usage of existing components in `content/` before writing new code in `src/core`.
3.  **Validate**: After modifying YAML, run `npm run validate` to ensure correctness.
4.  **CLI Usage**: Use `npm run <script>` to execute commands, which internally uses the `astrical` CLI.

## Extending with Modules

Astrical uses a modular architecture to extend the core capabilities without modifying the `src/core` engine. Modules are Git repositories (submodules) located in `src/modules`.

*   **Purpose**: Add new components, form handlers, API routes, or other backend logic.
*   **Location**: `src/modules/`.
*   **Creation**: Use the CLI to scaffold a new module from the standard starter kit.
    ```bash
    astrical module init <name>
    ```
    *   This command defaults to using the starter module at `https://github.com/astrical-modules/starter.git`.
    *   It effectively creates a new Git repository in `src/modules/<name>` and wires it into the project.

## Project Structure

```
/
├── content/                 # The AI Workspace (Content & Config)
│   ├── config.yaml          # Site-wide config
│   ├── pages/               # Page YAMLs
│   ├── shared/              # Reusable widget component YAMLs
│   └── menus/               # Menu YAMLs
├── themes/                  # Theme definitions
├── src/
│   ├── core/                # Astrical Core CMS / DXP (Astro based)
│   │   ├── src/
│   │   │   ├── components/  # Astro components
│   │   │   ├── layouts/     # Page layouts
│   │   │   └── pages/       # Page routes
│   │   └── dev/             # Documentation & Schemas
│   ├── cli/                 # Astrical CLI
│   │   └── src/
│   │       ├── commands/    # Astrical command implementations
│   │       └── utils/       # CLI utilities
│   ├── commands/            # Specialized documentation commands
│   └── modules/             # Feature Modules (Git Submodules)
├── public/                  # Static assets
└── package.json             # Javascript manifest and development scripts
```

## Asset Management

All static assets (images, videos, documents) should be stored in the top-level `public/` directory.

*   **Storage**: Place files in `public/` (e.g., `public/images/hero.png`).
*   **Linking**: Reference assets using the absolute path from the site root, starting with `/`. Do NOT include `public` in the URL.
    *   **Correct**: `/images/hero.png`
    *   **Incorrect**: `public/images/hero.png` or `../public/images/hero.png`
*   **Organization**: Use subdirectories to keep assets organized (e.g., `public/images/`, `public/docs/`).
