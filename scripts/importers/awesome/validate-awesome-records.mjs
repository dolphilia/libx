#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import { notesDir, readJson } from './common.mjs';

const files = [
  ['SOURCES.lock.json', 'sources-lock.schema.json'],
  ['DISCOVERY_STATE.json', 'discovery-state.schema.json'],
  ['LICENSE_DECISIONS.json', 'license-decisions.schema.json'],
  ['EXCLUSIONS.json', 'exclusions.schema.json'],
  ['BATCH_STATUS.json', 'batch-status.schema.json'],
  ['FINAL_REVIEW_RESULTS.json', 'final-review-results.schema.json'],
];
const ajv = new Ajv2020({ allErrors: true, strict: false });
addFormats(ajv);
const errors = [];
for (const [file, schemaFile] of files) {
  const dataPath = path.join(notesDir, file);
  const schemaPath = path.join(notesDir, 'schemas', schemaFile);
  const schema = readJson(schemaPath);
  const validate = ajv.compile(schema);
  if (!validate(readJson(dataPath))) errors.push(`${file}: ${ajv.errorsText(validate.errors)}`);
}
if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log('Awesome record schemas: OK');
}
