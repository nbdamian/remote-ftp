'use babel';

export const isEEXIST = (path, forceBtn, cancelBtn, dismissable = true) => {
  atom.notifications.addWarning('Already exists file in localhost', {
    detail: `Delete or rename file before downloading folder ${path}`,
    dismissable,
    buttons: [
      {
        text: 'Delete file',
        className: 'btn btn-error',
        onDidClick() {
          forceBtn(this);
        },
      },
      {
        text: 'Cancel',
        className: 'btn btn-float-right',
        onDidClick() {
          if (typeof cancelBtn === 'function') {
            cancelBtn(this);
          } else {
            this.removeNotification();
          }
        },
      },
    ],
  });
};

export const isEISDIR = (path, forceBtn, cancelBtn, dismissable = true) => {
  atom.notifications.addWarning('Already exists folder in localhost', {
    detail: `Delete or rename folder before downloading file ${path}`,
    dismissable,
    buttons: [
      {
        text: 'Delete folder',
        className: 'btn btn-error',
        onDidClick() {
          forceBtn(this);
        },
      },
      {
        text: 'Cancel',
        className: 'btn btn-float-right',
        onDidClick() {
          if (typeof cancelBtn === 'function') {
            cancelBtn(this);
          } else {
            this.removeNotification();
          }
        },
      },
    ],
  });
};

export const isAlreadyExits = (path, type = 'folder', dismissable = false) => {
  atom.notifications.addWarning(`The ${type} already exists.`, {
    detail: `${path} has already on the server!`,
    dismissable,
  });
};
