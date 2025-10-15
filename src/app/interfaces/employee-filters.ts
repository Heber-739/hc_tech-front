import { EmployeeProfile } from './employee-profile';

export type EmployeeFilters = Pick<EmployeeProfile, 'name' | 'workstation' | 'status'>
