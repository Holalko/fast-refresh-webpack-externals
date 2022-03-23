# fast-refresh webpack externals

copy of https://github.com/adbutterfield/fast-refresh-express for example purpose


### Description
fast-refresh doesn't work when externals are enabled in webpack

```json
externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
},
```

i tried to inject react refresh as stated here - https://github.com/facebook/react/issues/17552#issuecomment-883435016

in `./react/fast-refresh-init.ts`

##### webpack.config.ts
```json
entry: {
  fastrefresh: ./react/fast-refresh-init.ts
}
```


##### ./server/renderReact.tsx
and then in `./server/renderReact.tsx` tried to run script before react-dom
```html
<script src="http://localhost:3000/fastrefresh.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react@16.12.0/umd/react.production.min.js" crossorigin="anonymous"  integrity="sha256-Ef0vObdWpkMAnxp39TYSLVS/vVUokDE8CDFnx7tjY6U=" ></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@16.12.0/umd/react-dom.production.min.js" crossorigin="anonymous"  integrity="sha256-p2yuFdE8hNZsQ31Qk+s8N+Me2fL5cc6NKXOC0U9uGww=" ></script>
```
