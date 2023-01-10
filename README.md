## Installation

```


```

## script

```js
  "scripts": {
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1",
    "open": "open docs/index.html",
    "docs": "npx typedoc",
    "docs:open": "npx typedoc && npm run open",
    "version:patch": "npm version --no-git-tag-version patch ",
    "deploy": "npm run version:patch && npm run publish"
  },
```

## feature

##### documentation

- [x] typedoc - npm run docs:open

##### formatting

- [x] eslint
- [x] prettierc
