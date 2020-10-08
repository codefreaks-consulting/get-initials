# get-initials

A small typescript package to generate user initials.

Usage:

`npm i get-initials`

```
import { generate } from "get-initials"

const initials = generate("Jon", "Doe")
```

Results:

`generate("Jon Doe")` <-- "JD"\
`generate("Jon", "Doe")` <-- "JD"\
`generate("Jon")` <-- "J"\
`generate(null, "Doe")` <-- "D"
