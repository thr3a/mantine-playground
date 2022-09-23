
https://thr3a.github.io/mantine-cheatsheets/

# data.backgroundエラー

demoTypeがミスってる。src/mantine-demos/src/components/Demo/Demo.tsx に以下追記して表示されてないコンポーネントを調べる。

```diff
export function Demo({ data, demoProps, configuratorProps }: DemoProps) {
  const theme = useMantineTheme();
+  if (data === undefined) {
+    return null;
+  }
```
