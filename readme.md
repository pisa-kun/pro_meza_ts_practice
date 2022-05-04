### プロを目指す人のためのTypeScript入門

書籍の練習レポジトリ

#### install procedure

> npm init --yes
> npm install --save/dev typescript @types/node
> npx tsc --init
---

#### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "esnext",
    "sourceMap": true,
    "moduleResolution": "node",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": [
    "./src/**/*.ts"
  ],
}

```
#### package.json
**"type":"module"** が必要
```json
{
  "name": "chap7",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "type":"module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@types/node": "^17.0.31",
    "typescript": "^4.6.4"
 }
}
```