const CHECKING_STATUS = '../redux/book/CHECKING_STATUS';

export default function categoriesReducer(state = { msj: '' }, action) {
  switch (action.type) {
    case CHECKING_STATUS:
      return {
        msj: action.msj,
      };
    default:
      return state;
  }
}

export const checkStatus = () => ({
  type: CHECKING_STATUS,
  msj: 'under construction',
});
