// Usage: node scripts/validate-data.mjs data/<file>.js <VAR_NAME>
// Validates: syntax, every entry has deep (>=800 chars, no markdown headers),
// structured sources ({cite, url|null, where}), URL domain whitelist, tiers intact.
import { readFileSync } from 'fs';

const [file, varName] = process.argv.slice(2);
const WHITELIST = ['en.wikipedia.org','www.biblegateway.com','www.sefaria.org','www.ccel.org',
  'www.earlychristianwritings.com','www.gutenberg.org','www.perseus.tufts.edu',
  'www.codexsinaiticus.org','www.deadseascrolls.org.il','www.slavevoyages.org','avalon.law.yale.edu'];

const src = readFileSync('data/tiers.js','utf8') + '\n' + readFileSync(file,'utf8') +
  `\n;globalThis.__D=${varName};globalThis.__T=TIERS;globalThis.__V=VERDICTS;`;
(0,eval)(src);
const data = globalThis.__D, TIERS = globalThis.__T, VERDICTS = globalThis.__V;

const errs = [];
data.forEach((e,i) => {
  const id = `${varName}[${i}] "${(e.title||'').slice(0,40)}"`;
  if (!e.title || !e.body) errs.push(`${id}: missing title/body`);
  if (e.tier && !TIERS[e.tier]) errs.push(`${id}: bad tier ${e.tier}`);
  if (e.verdict && !VERDICTS[e.verdict]) errs.push(`${id}: bad verdict ${e.verdict}`);
  if (!e.deep || typeof e.deep !== 'string') errs.push(`${id}: missing deep`);
  else {
    if (e.deep.length < 800) errs.push(`${id}: deep too short (${e.deep.length} chars, need >=800)`);
    if (/^#|\n#|^\s*[-*] /m.test(e.deep)) errs.push(`${id}: deep contains markdown syntax`);
    if (e.deep.split('\n\n').length < 3) errs.push(`${id}: deep needs >=3 paragraphs separated by \\n\\n`);
  }
  if (!Array.isArray(e.sources) || !e.sources.length) errs.push(`${id}: missing sources`);
  else e.sources.forEach((s,j) => {
    if (typeof s === 'string') { errs.push(`${id} source[${j}]: still a string, needs {cite,url,where}`); return; }
    if (!s.cite) errs.push(`${id} source[${j}]: missing cite`);
    if (s.url) {
      try {
        const host = new URL(s.url).hostname;
        if (!WHITELIST.includes(host)) errs.push(`${id} source[${j}]: url host ${host} not whitelisted -> set null + enrich where`);
      } catch { errs.push(`${id} source[${j}]: malformed url`); }
    } else if (!s.where) errs.push(`${id} source[${j}]: no url and no where`);
  });
});

if (errs.length) { console.error('FAIL:\n' + errs.join('\n')); process.exit(1); }
console.log(`OK: ${file} — ${data.length} entries, all deep+sourced`);
