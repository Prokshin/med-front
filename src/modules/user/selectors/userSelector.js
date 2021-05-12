import { createSelector } from '@reduxjs/toolkit';

const user = (data) => data.user;

export const getUserInfo = createSelector(user, (data) => data.info);
