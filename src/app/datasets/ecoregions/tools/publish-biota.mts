import { argument, transition } from './biota-command-support.mts';

const target = argument('target');
if (!target) throw new Error('Pass --target=<biological-record-id>.');
transition(target, 'published');
