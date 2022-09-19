import { Title, Group, Text, Space, Grid } from '@mantine/core';
import { Props } from '../Props';
import { IconExternalLink } from '@tabler/icons';
import { NextLink } from '@mantine/next';


export const DemoContainer = ({title, description, children, slug}: Props) => {
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
        <Grid.Col span={7}>{children}</Grid.Col>
      </Grid>
      <Space h="lg" />
    </>
  );
};
