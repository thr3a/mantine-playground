mkdir -p src
rm -rf src/mantine-demos
cp -r /tmp/mantine/src/mantine-demos src
find -name '*.story.tsx' -delete
cp -f /tmp/mantine/configuration/types/*.d.ts ./src
cp -f /tmp/mantine/src/mantine-styles/src/emotion.d.ts ./src

sed -i '/RichTextEditorDemos/s/^/\/\//g' src/mantine-demos/src/index.ts
sed -i '/Affix/s/^/\/\//g' src/mantine-demos/src/index.ts
sed -i '/TypographyStylesProvider/s/^/\/\//g' src/mantine-demos/src/index.ts
