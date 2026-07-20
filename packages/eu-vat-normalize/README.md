<!-- STYLE AUDIT: passed 2026-07-20 against STYLE.md (APIxyz rebrand naming pass, shipped/015-BRAND-FINISH) -->
# eu-vat-normalize

Normalize and format-validate EU VAT identifiers in JavaScript. Zero dependencies, MIT.

Covers all 27 member states plus XI (Northern Ireland), maps the GR prefix to VIES's EL, strips separators and case, and checks each number against its member state's structure.

```js
import { normalizeVat, validateVatFormat } from 'eu-vat-normalize';

normalizeVat('ie 6388047v');
// { memberState: 'IE', number: '6388047V', full: 'IE6388047V' }

validateVatFormat('DE1434542');
// { valid: false, reason: 'BAD_FORMAT', memberState: 'DE', ... }
```

A `valid: true` result means the structure is right. Whether the number is actually registered can only be answered by the [VIES service](https://ec.europa.eu/taxation_customs/vies/). This library is the format layer we run in production at [APIxyz](https://apify.com/maatdata) in front of every VIES call, where it filters junk before it costs a lookup.

Run tests: `node test.js`
