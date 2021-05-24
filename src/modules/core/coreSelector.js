import { createSelector } from '@reduxjs/toolkit';

const core = (state) => state?.core;

export const getShowModal = createSelector(core, (data) => data?.showModal);
export const getModalContent = createSelector(core, (data) => data?.modalContent);
