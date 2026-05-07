/**
 * Loads TypeScript type definitions for Vite.
 * This enables TypeScript to understand:
 * - import.meta.env
 * - import.meta.env.BASE_URL
 * - import.meta.env.DEV
 * - import.meta.env.PROD
 *
 * Required for proper type support in Vite + TypeScript projects.
 */
/// <reference types="vite/client" />