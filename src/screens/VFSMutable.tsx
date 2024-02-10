import React, { useCallback, useMemo, useState } from 'react';
import { VFSBrowser } from '../components/VFSBrowser';
import {russianI18n} from '../utils/i18n';

const storyName = 'Advanced mutable VFS';
export const VFSMutable: React.FC = () => {
    const [locale, setLocale] = useState('ru');
    const handleLocaleChange = useCallback(
        (event: { target: { value: React.SetStateAction<string>; }; }) => setLocale(event.target.value),
        []
    );
    const i18n = useMemo(() => (locale === 'ru' ? russianI18n : {}), [locale]);
    return (
            <VFSBrowser instanceId={storyName} 
            i18n={i18n} />
    );
};
(VFSMutable as any).storyName = storyName;