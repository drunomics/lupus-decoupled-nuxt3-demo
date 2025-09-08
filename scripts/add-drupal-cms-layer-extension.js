#!/usr/bin/env node

/**
 * Script to automatically add the nuxt-drupal-cms-layer extension to nuxt.config.ts
 *
 * Generated with Claude Code
 * https://claude.ai/code
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG_FILE = '../nuxt.config.ts';
const EXTENSION_URL = 'github:drunomics/nuxt-drupal-cms-layer';

/**
 * Parse the nuxt.config.ts file to extract configuration
 */
function parseNuxtConfig(content) {
  // Extract the defineNuxtConfig argument
  const match = content.match(/defineNuxtConfig\(\s*\{([\s\S]*)\}\s*\)/);
  if (!match) {
    throw new Error('Could not find defineNuxtConfig in the file');
  }

  const configBody = match[1];

  // Parse the configuration properties
  const config = {};

  // Simple parser for the config properties
  // This handles the most common patterns in nuxt.config.ts
  const propertyRegex = /(\w+)\s*:\s*(\[[^\]]*\]|\{[^}]*\}|'[^']*'|"[^"]*"|[^,\n}]+)/g;
  let propMatch;

  while ((propMatch = propertyRegex.exec(configBody)) !== null) {
    const key = propMatch[1];
    const value = propMatch[2].trim();

    // Parse the value based on its type
    if (value.startsWith('[')) {
      // Array value - for now, store as string
      config[key] = value;
    } else if (value.startsWith('{')) {
      // Object value - store as string
      config[key] = value;
    } else {
      // Other values
      config[key] = value;
    }
  }

  return config;
}

/**
 * Check if the extension already exists
 */
function checkExtensionExists(content) {
  return content.includes(EXTENSION_URL);
}

/**
 * Add the extends property to the config
 */
function addExtendsToConfig(content) {
  // Check if there's already an extends property
  const hasExtends = /extends\s*:/.test(content);

  if (hasExtends) {
    // Find the extends array and add to it
    const extendsMatch = content.match(/(extends\s*:\s*\[)([^\]]*)/);
    if (extendsMatch) {
      const beforeExtends = extendsMatch[1];
      const existingExtends = extendsMatch[2].trim();

      // Add our extension to the beginning
      const newExtension = `['${EXTENSION_URL}', {install: true}]`;
      const newExtends = existingExtends
        ? `${beforeExtends}${newExtension}, ${existingExtends}`
        : `${beforeExtends}${newExtension}`;

      return content.replace(extendsMatch[0], newExtends);
    }
  } else {
    // Add extends property after defineNuxtConfig({
    const defineMatch = content.match(/(export\s+default\s+defineNuxtConfig\(\s*\{)/);
    if (defineMatch) {
      const insertion = `${defineMatch[1]}\n  extends: [['${EXTENSION_URL}', {install: true}]],`;
      return content.replace(defineMatch[1], insertion);
    }
  }

  throw new Error('Could not modify the config file');
}

/**
 * Main function
 */
function main() {
  const configPath = path.join(__dirname, CONFIG_FILE);

  try {
    // Read the config file
    let content = fs.readFileSync(configPath, 'utf8');
    console.log(`📖 Reading ${CONFIG_FILE}...`);

    // Check if extension already exists
    if (checkExtensionExists(content)) {
      console.log(`✓ Extension '${EXTENSION_URL}' already exists`);
      return;
    }

    // Add the extension
    console.log(`➕ Adding extension '${EXTENSION_URL}'...`);
    const modifiedContent = addExtendsToConfig(content);

    // Write back to file
    fs.writeFileSync(configPath, modifiedContent, 'utf8');
    console.log(`✓ Successfully updated ${CONFIG_FILE}`);

  } catch (error) {
    console.error(`✗ Error: ${error.message}`);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}
