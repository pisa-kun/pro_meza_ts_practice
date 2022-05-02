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