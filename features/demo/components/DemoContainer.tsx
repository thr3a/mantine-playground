import { Title, Group, Text, Space, Grid } from '@mantine/core';
import { Props } from '../Props';
import { IconExternalLink } from '@tabler/icons';
import { NextLink } from '@mantine/next';
import * as mandemo from '../../../src/mantine-demos/src/index';

export const DemoContainer = ({title, description, slug, demoType}: Props) => {
  const url = `https://mantine.dev${slug}`;
  return (
    <>
      <Space h="md" />
      <Group>
        <Title order={3}>{title}
          <Text component={NextLink} href={url} target='_blank'
            variant="link"
            sx={(theme) => ({
              marginLeft: theme.spacing.xs
            })}
          >
            {<IconExternalLink size={14} />}
          </Text>
        </Title>
      </Group>
      <Text size="sm">
        {description}
      </Text>
      <Space h="sm" />
      <Grid>
        <Grid.Col span={8}>
          { title === 'Transition' &&
            <mandemo.Demo data={mandemo.TooltipDemos.transitions} configuratorProps={{ includeCode: false }} />
          }
          { title !== 'Transition' &&
            <mandemo.Demo data={mandemo[`${title}Demos`][demoType]} demoProps={{ code: null }} configuratorProps={{ includeCode: false }} />
          }
        </Grid.Col>
      </Grid>
    </>
  );
};
