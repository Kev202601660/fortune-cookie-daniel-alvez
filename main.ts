import { writeFileSync, mkdirSync } from 'node:fs';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const text = 'LGTM is three letters and one lie. Ship it anyway.';

mkdirSync(out, { recursive: true });
writeFileSync(out + '/entry.txt', text);
