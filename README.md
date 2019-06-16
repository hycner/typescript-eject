# typescript-eject
Bailing out of a Typescript project back to vanilla JS

```
npm ci
npm run eject
```

### Notes
- Copies `src` directory to `src-new`, transforming any `ts`/`tsx` files
- It is assumed that an automated syntax formatter is running in the project. Since the output is run through a parser to take out type annotations, the formatter is run on the output to get syntax close to the original

### Caveats
- Output syntax differs some from original around comment locations & line spacing
- This current setup fails on most ESNext syntax
  - Open `src/a-esNext.ts` to see
  - This isn't as big of a deal these days (compared to a few years ago) as most desirable things are standardized, or are supported without being transformed (jsx & class properties). Maybe the most common issue I can think of would be MobX projects due to decorators
  - Workarounds
    - You could get around this by adding a transform for the feature, but this is probably not desirable as the output would be different from the input
    - You can skip the parsing by commenting out the code, then uncommenting it in the output. This may not be feasible depending on the size of the project / prevalence of the specific syntax