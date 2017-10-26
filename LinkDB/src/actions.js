/**
 * Link DB Actions
 * - Save a link
 * - Mark a link as favorite
 * - Mark a link as watched
 * - Delete a link
 */

const ACTIONS = {
  save: 'SAVE_LINK',
  delete: 'DELETE_LINK',
  fav: 'FAV_LINK',
  watch: 'WATCH_LINK'
};

const saveLink = (title, link) => {
  return {
    type: ACTIONS.save,
    payload: {
      title: title,
      link: link
    }
  };
};

const deleteLink = (title) => {
  const deleteAction = {
    type: ACTIONS.delete,
    payload: {
      title: title
    }
  };

  return deleteAction;
};

const favLink = (title) => {
  return {
    type: ACTIONS.fav,
    payload: {
      title: title
    }
  };
};

const watchLink = (title) => {
  return {
    type: ACTIONS.watch,
    payload: {
      title: title
    }
  };
};

module.exports = {
  ACTIONS,
  saveLink,
  deleteLink,
  favLink,
  watchLink
};