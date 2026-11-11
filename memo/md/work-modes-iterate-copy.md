# Two work modes

## Mode A — Iterate on what exists

Improve current nodes, tools, playbooks in small verified slices. Default when a pipeline already runs.

## Mode B — Copy then adapt

Steal a proven pattern; drop the smallest working imitation; then Mode A.

## Decision rule

```
if problem matches an existing in-repo object → Mode A
else if a clear external pattern exists → Mode B (copy minimal), then A
else → short experiment log under docs/experiments/, not a redesign
```

## Anti-patterns

- Redesigning ontology before one productive loop
- Reimplementing Terminal-Bench to feel serious
- Asking the user for decisions already defaulted in OPEN_QUESTIONS
