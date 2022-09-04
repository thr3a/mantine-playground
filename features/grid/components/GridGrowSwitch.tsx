import { Switch } from '@mantine/core';
import { Props } from '../Props';
import type { ChangeEvent } from 'react';

type PartProps = Pick<Props, 'isGrow' | 'setIsGrow'>;

export const GridGrowSwitch = ({isGrow, setIsGrow}: PartProps) => {
  return (
    <>
      <Switch
        size="md"
        radius="sm"
        checked={isGrow}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setIsGrow(event.currentTarget.checked)}
        label="必ず横幅100%にする(Grow)"
        styles={(theme) => ({
          label: {
            fontWeight: 'bold',
            fontSize: theme.fontSizes.sm
          }
        })}
      />
    </>
  );
};
