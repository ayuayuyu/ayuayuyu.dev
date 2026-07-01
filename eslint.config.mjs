import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

// Next.js 16 以降、eslint-config-next はネイティブ flat config 配列を提供する。
// core-web-vitals は内部で next(base) + next/typescript も取り込むため、これ1つで足りる。
const eslintConfig = [
  {
    ignores: ['.next/**', 'out/**', 'next-env.d.ts'],
  },
  ...nextCoreWebVitals,
  {
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
];

export default eslintConfig;
