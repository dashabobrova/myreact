
export const getUser = (state) => state.user.user;

export const getIsAuth = (state) => state.user.user !== null;
// если не null, значит авторизован