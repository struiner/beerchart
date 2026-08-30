import { printValidation, validationErrors } from './biota-command-support.mts';

// Records currently live in cohesive authored modules, so --changed validates the complete
// dependency graph rather than risking a partial validation with missing prerequisites.
printValidation(validationErrors());
