import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { SITE } from '../consts';

// Only link the resume once the PDF is actually in public/, so the site never ships a dead link.
export const resumeHref = existsSync(join(process.cwd(), 'public', SITE.resume)) ? SITE.resume : null;
