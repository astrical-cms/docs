# Astrical Documentation Site

This repository contains the documentation site for Astrical, generated and managed using the Astrical CLI and Gemini.

## Overview

The site content is managed via YAML files in the `content` directory, and the site engine resides in `src`.
We use a set of custom Astrical CLI commands to automate the documentation process, from analysis to generation.

## Documentation Commands

The following commands are available to help manage the site:

### 1. Analyze
Analyze the Core and CLI codebases to understand the current state.
```bash
astrical docs analyze
```

### 2. Plan
Create a documentation plan based on the analysis.
```bash
astrical docs plan
```

### 3. Template
Generate reusable templates for documentation sections.
```bash
astrical docs template
```

### 4. Outline
Generate or update the site structure/outline.
```bash
astrical docs outline
```

### 5. Generate
Generate the actual page content and YAML configuration.
```bash
astrical docs generate 
```

### 6. Style
Update and refine the site styling.
```bash
astrical docs style
```

### 7. Run
Run the full documentation generation sequence (Analyze -> Plan -> Template -> Outline -> Generate -> Style).
```bash
astrical docs run
```

## Development

- **Start Dev Server**: `npm run dev`
- **Build Site**: `npm run build`
- **Validate Content**: `npm run validate`
