import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the atom extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'atom',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension atom is activated!');
    const style = 'atom/index.css';

    manager.register({
      name: 'atom',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
