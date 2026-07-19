import { normalizeVat, validateVatFormat } from './index.js';

const cases = [
  ['IE 6388047V', true, 'IE'],           // spaces stripped
  ['ie6388047v', true, 'IE'],            // case
  ['GR123456789', true, 'EL'],           // GR→EL mapping
  ['DE143454214', true, 'DE'],
  ['FR40303265045', true, 'FR'],
  ['NL123456789B01', true, 'NL'],
  ['ATU12345678', true, 'AT'],
  ['DE1434542', false, 'DE'],            // too short
  ['XX000', false, null],                // unknown member state
  ['', false, null],
  ['NL123456789A01', false, 'NL'],       // B separator missing
];

let pass = 0;
for (const [raw, expectValid, expectMs] of cases) {
  const r = validateVatFormat(raw);
  const ok = r.valid === expectValid && r.memberState === expectMs;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${JSON.stringify(raw)} → valid=${r.valid} ms=${r.memberState} ${r.reason ?? ''}`);
  if (ok) pass++;
}
console.log(`${pass}/${cases.length} passed`);
if (pass !== cases.length) process.exit(1);
