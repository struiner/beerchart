# Persistence

Persistence is optional. New datasets generally omit it. If enabled, choose a stable lowercase
namespace and positive version. The generic store owns current namespaced state and executes declared
legacy importers; it does not know domain-specific historical keys.

Importers must be read-only toward legacy keys, tolerate absent values, and return partial generic
state. Current state takes precedence, each importer runs at most once, and corrupt legacy values are
reported without preventing startup. Keep importers inside the owning dataset package.
