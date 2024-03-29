import React, {useMemo} from 'react';
import { VFSBrowser } from '../components/VFSBrowser';
import {frenchI18n} from '../utils/i18n';

const storyName = 'Advanced mutable VFS';
export const VFSMutable: React.FC = () => {
    const locale : string = 'fr';
    //const [locale, setLocale] = useState('fr');
    /*
    const handleLocaleChange = useCallback(
        (event: { target: { value: React.SetStateAction<string>; }; }) => setLocale(event.target.value),
        []
    );
    */
    const i18n = useMemo(() => (locale === 'fr' ? frenchI18n : {}), [locale]);
    return (
            <VFSBrowser instanceId={storyName} 
            i18n={i18n} />
    );
};
(VFSMutable as any).storyName = storyName;