mkdir -p src
rm -rf src/mantine-demos
cp -r /tmp/mantine/src/mantine-demos src
find -name '*.story.tsx' -delete
cp -f /tmp/mantine/configuration/types/*.d.ts ./src
cp -f /tmp/mantine/src/mantine-styles/src/emotion.d.ts ./src
rm -rf ./src/mantine-demos/src/demos/tiptap/

sed -i '/AffixDemos/s/^/\/\//g' src/mantine-demos/src/index.ts
sed -i '/TypographyStylesProviderDemos/s/^/\/\//g' src/mantine-demos/src/index.ts
sed -i '/AppShellDemos/s/^/\/\//g' src/mantine-demos/src/index.ts
sed -i '/RichTextEditorDemos/s/^/\/\//g' src/mantine-demos/src/index.ts
sed -i '/Portal/s/^/\/\//g' src/mantine-demos/src/index.ts
sed -i '/ModalsDemos/s/^/\/\//g' src/mantine-demos/src/index.ts
sed -i '/NotificationsDemos/s/^/\/\//g' src/mantine-demos/src/index.ts
sed -i '/PrismDemos/s/^/\/\//g' src/mantine-demos/src/index.ts
sed -i '/TipTapDemos/s/^/\/\//g' src/mantine-demos/src/index.ts
