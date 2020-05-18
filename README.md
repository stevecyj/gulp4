# gulp4

## 環境建立

- `npm init`
- `npm install gulp-cli -g`
- `npm i -D gulp`
- `gulp -v`
  ```bash=
  CLI version: 2.2.0
  Local version: 4.0.2
  ```

## ESM 寫法

- `npm install --save-dev @babel/register @babel/core @babel/preset-env`

### .babelrc

```json=
{
  "presets": ["@babel/preset-env"]
}
```
