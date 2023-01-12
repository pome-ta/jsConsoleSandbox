//[Node.jsでパッケージが参照しているnode_modulesのパスを取得する - tom-256.log](https://mzqvis6akmakplpmcjx3.hatenablog.com/entry/2022/05/21/185607#ES-Modules%E3%81%AE%E5%A0%B4%E5%90%88)
console.log(await import.meta.resolve('../monaco-editor'));
// import { createRequire } from '../../module';
// const require = createRequire(import.meta.url);
// console.log(require);
// console.log(require.resolve('../monaco-editor'));
