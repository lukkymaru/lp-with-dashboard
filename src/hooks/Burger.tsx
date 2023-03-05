import { useDisclosure } from '@mantine/hooks';
import { useCallback, useState } from 'react';

export const useBargerIcon = () => {

    const [opened, { toggle }] = useDisclosure(false);
    const label = opened ? 'Close navigation' : 'Open navigation';

    const handleClick = useCallback(() => {
        
    },[]);

    return { handleClick };

};