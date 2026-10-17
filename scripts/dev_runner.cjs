const { spawn } = require('child_process');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const nextBin = path.resolve(projectRoot, 'node_modules', 'next', 'dist', 'bin', 'next');

const child = spawn(process.execPath, [nextBin, 'dev', '-H', '0.0.0.0'], {
  cwd: projectRoot,
  stdio: ['pipe', 'inherit', 'inherit'],
});

// Prevent stdin from closing so Next dev interactive listener does not terminate
child.stdin.setMaxListeners(0);

child.on('exit', (code, signal) => {
  console.log(`[dev-runner] Next.js server exited (code: ${code}, signal: ${signal})`);
  process.exit(code ?? 0);
});

process.on('SIGINT', () => child.kill('SIGINT'));
process.on('SIGTERM', () => child.kill('SIGTERM'));
