import fs from 'fs';
import path from 'path';

const srcDir = 'C:\\Users\\USER\\.gemini\\antigravity-ide\\brain\\bc96b427-d8f2-4211-9d83-40e4feb04d4e';
const targetDir = path.resolve(process.cwd(), 'public', 'features');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const map = {
  'karyz_feat_dashboard_1790935103087.jpg': 'dashboard.jpg',
  'karyz_feat_automations_1790935135890.jpg': 'automations.jpg',
  'karyz_feat_reports_1790935175131.jpg': 'reports.jpg',
  'karyz_feat_security_1790935215708.jpg': 'security.jpg',
};

for (const [src, dest] of Object.entries(map)) {
  const srcPath = path.join(srcDir, src);
  const destPath = path.join(targetDir, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${src} -> ${dest}`);
  }
}
