import { Module } from '../Module';
import { coreSlice } from './coreSlice';
import coreSaga from './coreSaga';

export default new Module('core', coreSlice.reducer, coreSaga());
