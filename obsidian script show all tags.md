# obsidian script show all tags

```js
Object.keys(app.metadataCache.getTags()).join(', ')
```

> without `#`
```js
Object.keys(app.metadataCache.getTags()).map(x => x.slice(1)).join(', ')
```

#Technology_and_applied_sciences/tool/obsidian