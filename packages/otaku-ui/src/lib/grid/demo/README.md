---
import:
  import { Grid, GridItem } from 'otaku-ui'
---

[[toc]]

## Grid

::: demo

asdf
asdfasdf
asdfasdf

```tsx
<Grid>
  {
    new Array(24).fill().map((_, index) => {
      return (
        <GridItem>{index + 1}</GridItem>
      )
    })
  }
</Grid>
```
:::