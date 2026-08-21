#!/usr/bin/env node
import path from 'node:path';
import { notesDir, readJson, writeJsonAtomic } from './common.mjs';

const decision = readJson(path.join(notesDir, 'ADMIN_DECISION.json'));
if (decision.decision !== 'raise-limit' || !Number.isInteger(decision.trigger?.limit))
  throw new Error('探索再開には有効な管理者の上限引き上げ決定が必要です');
const statePath = path.join(notesDir, 'DISCOVERY_STATE.json');
const state = readJson(statePath);
state.status = 'in-progress';
state.checkpoints.push({
  kind: 'administrator-resume',
  at: new Date().toISOString(),
  decision: decision.decision,
  candidateLimit: decision.trigger.limit,
});
writeJsonAtomic(statePath, state);
console.log(`Awesome discovery resumed with candidate limit ${decision.trigger.limit}`);
