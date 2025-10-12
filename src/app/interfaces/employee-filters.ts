import { EmployeeProfile } from './employee-data';

export type EmployeeFilters = Pick<EmployeeProfile, 'name' | 'workstation' | 'status'>
