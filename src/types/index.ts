export interface Student {
  student_id: number;
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  course: string;
  graduation_year: number;
  current_year: number;
  location: string;
}

export interface Internship {
  internship_id: number;
  company_name: string;
  title: string;
  description: string;
  eligibility: string;
  openings: number;
}

export interface Application {
  app_id: number;
  student_id: number;
  internship_id: number;
  resume_url: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  applied_date: string;
  student?: Student;
  internship?: Internship;
}

export interface Allotment {
  allotment_id: number;
  student_id: number;
  internship_id: number;
  allotted_date: string;
  student?: Student;
  internship?: Internship;
}

export type UserRole = 'student' | 'admin';

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}