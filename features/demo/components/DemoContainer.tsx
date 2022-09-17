import { Button, Title, Group } from '@mantine/core';
import { Props } from '../Props';
import { IconExternalLink } from '@tabler/icons';

export const DemoContainer = ({title, description, children, slug}: Props) => {
  const url = `https://mantine.dev${slug}`;
  return (
    <>
      <Group>
        <Title order={2}>{title}</Title>
        <Button component='a' href={url} target='_blank' variant='subtle' leftIcon={<IconExternalLink size={14} />}>
          {url}
        </Button>
        {description}
      </Group>
      {children}
    </>
  );
};
