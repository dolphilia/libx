import fs from 'fs';
import path from 'path';
import readline from 'readline';

function emit(logger, method, message) {
  if (logger && typeof logger[method] === 'function') {
    logger[method](message);
    return;
  }

  if (method === 'warn') {
    console.warn(message);
    return;
  }

  console.log(message);
}

function askQuestion(prompt) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer.trim().toLowerCase());
    });
  });
}

export function formatTimestamp() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

export async function confirmAction({ message, autoConfirm = false, dryRun = false, logger } = {}) {
  if (dryRun) {
    emit(logger, 'dryRun', `${message} (dry-runで確認不要)`); 
    return true;
  }

  if (autoConfirm) {
    return true;
  }

  if (!process.stdin.isTTY) {
    const instructions = `${message} を実行するには --confirm または --dry-run オプションを指定してください。`;
    emit(logger, 'warn', instructions);
    throw new Error('TTYが利用できないため、操作を確認できませんでした。');
  }

  const answer = await askQuestion(`${message} 続行しますか？ (y/N): `);
  if (answer === 'y' || answer === 'yes') {
    return true;
  }

  emit(logger, 'warn', '操作がキャンセルされました。');
  return false;
}

export function createBackup(targetPath, { rootDir, scenario = 'safety', logger } = {}) {
  if (!rootDir) {
    throw new Error('createBackupを使用するにはrootDirオプションが必要です。');
  }

  if (!fs.existsSync(targetPath)) {
    emit(logger, 'warn', `バックアップ対象が存在しません: ${targetPath}`);
    return null;
  }

  const stats = fs.statSync(targetPath);
  const timestamp = formatTimestamp();
  const relativePath = path.relative(rootDir, targetPath);
  const backupRoot = path.join(rootDir, '.backups', scenario, timestamp);
  const backupDestination = stats.isDirectory()
    ? path.join(backupRoot, relativePath)
    : path.join(backupRoot, path.dirname(relativePath), path.basename(targetPath));

  fs.mkdirSync(path.dirname(backupDestination), { recursive: true });

  if (stats.isDirectory()) {
    fs.cpSync(targetPath, backupDestination, { recursive: true });
  } else {
    fs.copyFileSync(targetPath, backupDestination);
  }

  emit(logger, 'info', `バックアップを作成しました: ${path.relative(rootDir, backupDestination)}`);
  return backupDestination;
}
