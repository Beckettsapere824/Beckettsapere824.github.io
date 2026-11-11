# Rule: once work is repetitive, automate it

## Statement

If the same kind of work appears **≥2 times** with the same inputs→outputs shape, do not keep doing it only in chat. Encode it as:

1. a **playbook** under `memory/playbooks/`, or
2. a **tool script** under `tools/`, or
3. a **compile/ingest** derivation (preferred when purely mechanical).

## Detection signals

- Same steps in two `runs.md` entries
- Same question asked twice despite docs existing
- Hand-editing derived files instead of regenerating
- Copy-paste transforms on inbox files

## Response ladder

| Level | Action |
|-------|--------|
| L0 | Document the pattern in a node |
| L1 | Write/extend a playbook |
| L2 | Add/adjust `tools/*` script |
| L3 | Schedule / CI only if still frequent after L2 |

## Already automated

- inbox → nodes (`ingest.py`)
- nodes → graph / views / tasks / INDEX (`compile.py`)
- public site export (`export_site.py`)
- bulk path + close-task playbooks
