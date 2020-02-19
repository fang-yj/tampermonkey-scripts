import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/jd-assistant.ts',
  output: {
    dir: 'dist',
    format: 'iife',
    banner: `\
// ==UserScript==
// @name         京东助理
// @namespace    JD
// @version      0.2
// @description  一键保价、复制购物车选中链接
// @icon         https://www.jd.com/favicon.ico
// @author       yuuuu
// @match        https://pcsitepp-fm.jd.com/
// @match        https://cart.jd.com/*
// ==/UserScript==
`,
  },
  plugins: [typescript({ tsconfig: 'tsconfig.json' })],
}
