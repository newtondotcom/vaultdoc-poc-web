import { ChonkyActions, I18nConfig,FileData,FileHelper } from "@aperturerobotics/chonky";
import { IntlShape } from 'react-intl';

export const russianI18n: I18nConfig = {
    locale: 'ru',
    formatters: {
        formatFileModDate: (intl: IntlShape, file: FileData | null) => {
            const safeModDate = FileHelper.getModDate(file);
            if (safeModDate) {
                return `${intl.formatDate(safeModDate)}, ${intl.formatTime(
                    safeModDate
                )}`;
            } else {
                return null;
            }
        },
        formatFileSize: (intl: IntlShape, file: FileData | null) => {
            if (!file || typeof file.size !== 'number') return null;
            return `Размер: ${file.size}`;
        },
    },
    messages: {
        // Chonky UI translation strings. String IDs hardcoded into Chonky's source code.
        'chonky.toolbar.searchPlaceholder': 'Поиск',
        'chonky.toolbar.visibleFileCount': `{fileCount, plural,
            one {# файл}
            few {# файла}
            many {# файлов}
        }`,
        'chonky.toolbar.selectedFileCount': `{fileCount, plural,
            =0 {}
            one {# выделен}
            other {# выделено}
        }`,
        'chonky.toolbar.hiddenFileCount': `{fileCount, plural,
            =0 {}
            one {# скрыт}
            other {# скрыто}
        }`,
        'chonky.fileList.nothingToShow': 'Здесь пусто!',
        'chonky.contextMenu.browserMenuShortcut': 'Меню браузера: {shortcut}',

        // File action translation strings. These depend on which actions you have
        // enabled in Chonky.
        [`chonky.actionGroups.Actions`]: 'Действия',
        [`chonky.actionGroups.Options`]: 'Опции',
        [`chonky.actions.${ChonkyActions.OpenParentFolder.id}.button.name`]: 'Открыть родительскую папку',
        [`chonky.actions.${ChonkyActions.CreateFolder.id}.button.name`]: 'Новая папка',
        [`chonky.actions.${ChonkyActions.CreateFolder.id}.button.tooltip`]: 'Создать новую папку',
        [`chonky.actions.${ChonkyActions.DeleteFiles.id}.button.name`]: 'Удалить файлы',
        [`chonky.actions.${ChonkyActions.OpenSelection.id}.button.name`]: 'Открыть выделение',
        [`chonky.actions.${ChonkyActions.SelectAllFiles.id}.button.name`]: 'Выделить все',
        [`chonky.actions.${ChonkyActions.ClearSelection.id}.button.name`]: 'Сбросить выделение',
        [`chonky.actions.${ChonkyActions.EnableListView.id}.button.name`]: 'Показать список',
        [`chonky.actions.${ChonkyActions.EnableGridView.id}.button.name`]: 'Показать иконки',
        [`chonky.actions.${ChonkyActions.SortFilesByName.id}.button.name`]: 'Сорт. по имени',
        [`chonky.actions.${ChonkyActions.SortFilesBySize.id}.button.name`]: 'Сорт. по размеру',
        [`chonky.actions.${ChonkyActions.SortFilesByDate.id}.button.name`]: 'Сорт. по дате',
        [`chonky.actions.${ChonkyActions.ToggleHiddenFiles.id}.button.name`]: 'Скрытые файлы',
        [`chonky.actions.${ChonkyActions.ToggleShowFoldersFirst.id}.button.name`]: 'Папки в начале',
    },
};