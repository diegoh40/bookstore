const CHECKING_STATUS = 'CHECKING_STATUS';

export const checkStatus = () => ({
  type: CHECKING_STATUS,
});

export default function categoriesReducer(state = [], actions) {
  switch (actions.type) {
    case CHECKING_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}
