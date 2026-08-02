import { defineConfig } from 'oxlint';

import { BaseLinter } from './rules.config.ts';

export default defineConfig({ extends: [BaseLinter] });
