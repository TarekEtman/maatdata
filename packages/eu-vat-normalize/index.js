// eu-vat-normalize — normalize and format-validate EU VAT identifiers. MIT.
// Formats follow the public VIES specification of member state VAT number structures.

const EU_MS = new Set(['AT','BE','BG','CY','CZ','DE','DK','EE','EL','ES','FI','FR','HR','HU','IE','IT','LT','LU','LV','MT','NL','PL','PT','RO','SE','SI','SK','XI']);

const FORMATS = {
  AT: /^U[0-9]{8}$/, BE: /^0?[0-9]{9,10}$/, BG: /^[0-9]{9,10}$/, CY: /^[0-9]{8}[A-Z]$/,
  CZ: /^[0-9]{8,10}$/, DE: /^[0-9]{9}$/, DK: /^[0-9]{8}$/, EE: /^[0-9]{9}$/,
  EL: /^[0-9]{9}$/, ES: /^[0-9A-Z][0-9]{7}[0-9A-Z]$/, FI: /^[0-9]{8}$/,
  FR: /^[0-9A-Z]{2}[0-9]{9}$/, HR: /^[0-9]{11}$/, HU: /^[0-9]{8}$/,
  IE: /^[0-9][0-9A-Z+*][0-9]{5}[A-Z]{1,2}$/, IT: /^[0-9]{11}$/,
  LT: /^([0-9]{9}|[0-9]{12})$/, LU: /^[0-9]{8}$/, LV: /^[0-9]{11}$/, MT: /^[0-9]{8}$/,
  NL: /^[0-9]{9}B[0-9]{2}$/, PL: /^[0-9]{10}$/, PT: /^[0-9]{9}$/, RO: /^[0-9]{2,10}$/,
  SE: /^[0-9]{12}$/, SI: /^[0-9]{8}$/, SK: /^[0-9]{10}$/, XI: /^[0-9]{9}$/,
};

/**
 * Normalize a raw VAT string: strips separators, uppercases, maps the GR prefix
 * to VIES's EL. Returns { memberState, number, full } or null when the prefix
 * is not an EU member state code.
 */
export function normalizeVat(raw) {
  if (!raw) return null;
  let v = String(raw).toUpperCase().replace(/[^0-9A-Z+*]/g, '');
  if (v.startsWith('GR')) v = 'EL' + v.slice(2);
  const ms = v.slice(0, 2);
  if (!EU_MS.has(ms)) return null;
  return { memberState: ms, number: v.slice(2), full: v };
}

/**
 * Format-validate a raw VAT string against the member state's structure.
 * Returns { valid, memberState, number, full, reason } — valid=true means the
 * STRUCTURE is right; only a VIES lookup proves the number is registered.
 */
export function validateVatFormat(raw) {
  const n = normalizeVat(raw);
  if (!n) return { valid: false, reason: 'UNKNOWN_MEMBER_STATE', memberState: null, number: null, full: null };
  const rx = FORMATS[n.memberState];
  if (!rx.test(n.number)) return { valid: false, reason: 'BAD_FORMAT', ...n };
  return { valid: true, reason: null, ...n };
}

export const memberStates = [...EU_MS];
