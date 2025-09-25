import { Allotment, Application, Internship, Student } from '../types';

export const mockStudents: Student[] = [
  {
    student_id: 1,
    first_name: "Shivani",
    last_name: "Gulhane",
    email: "shivanigulhane2000@university.edu",
    mobile: "+1234567890",
    course: "Computer Science",
    graduation_year: 2025,
    current_year: 3,
    location: "Pune"
  },
  {
    student_id: 2,
    first_name: "Rohit",
    last_name: "Gholap",
    email: "rohitgholap@university.edu",
    mobile: "+9134567891",
    course: "Information Technology",
    graduation_year: 2024,
    current_year: 4,
    location: "Nashik"
  },
  {
    student_id: 3,
    first_name: "Pankaj",
    last_name: "Sagvekar",
    email: "pankaj@university.edu",
    mobile: "+1234567892",
    course: "Software Engineering",
    graduation_year: 2025,
    current_year: 3,
    location: "Pune"
  },
  {
    student_id: 4,
    first_name: "Gauri",
    last_name: "Joshi",
    email: "joshi123@university.edu",
    mobile: "+1234567892",
    course: "Robotics Engineering",
    graduation_year: 2025,
    current_year: 4,
    location: "Pune"
  }
];

export const mockInternships: Internship[] = [
  {
    internship_id: 1,
    company_name: "Google",
    title: "Software Engineering Intern",
    description: "Work with cutting-edge technology and collaborate with world-class engineers to build products that impact billions of users.",
    eligibility: "Computer Science, IT, or related field. Strong programming skills in Python, Java, or C++.",
    openings: 5
  },
  {
    internship_id: 2,
    company_name: "Microsoft",
    title: "Product Management Intern",
    description: "Drive product strategy and work cross-functionally to deliver innovative solutions for enterprise customers.",
    eligibility: "Business, Engineering, or related field. Experience with product management tools preferred.",
    openings: 3
  },
  {
    internship_id: 3,
    company_name: "Amazon",
    title: "Data Science Intern",
    description: "Analyze large datasets to drive business insights and build machine learning models for recommendation systems.",
    eligibility: "Statistics, Mathematics, Computer Science, or related field. Python/R programming required.",
    openings: 4
  },
  {
    internship_id: 4,
    company_name: "Apple",
    title: "iOS Development Intern",
    description: "Develop iOS applications and contribute to the next generation of mobile experiences.",
    eligibility: "Computer Science or related field. Swift programming and iOS development experience required.",
    openings: 2
  },
   {
    internship_id: 5,
    company_name: "PHN Technology",
    title: "Robotics Intern",
    description: "Work with cutting-edge technology and collaborate with world-class engineers to build products that impact billions of users.",
    eligibility: "Electronic, ENTC, Robotics Engineering and IOT.",
    openings: 2
  }
];

export const mockApplications: Application[] = [
  {
    app_id: 1,
    student_id: 1,
    internship_id: 1,
    resume_url: "/resumes/resume.pdf",
    status: "Pending",
    applied_date: "2024-01-15T10:30:00Z",
    student: mockStudents[0],
    internship: mockInternships[0]
  },
  {
    app_id: 2,
    student_id: 2,
    internship_id: 2,
    resume_url: "/resumes/resume.pdf",
    status: "Approved",
    applied_date: "2024-01-10T14:20:00Z",
    student: mockStudents[1],
    internship: mockInternships[1]
  },
  {
    app_id: 3,
    student_id: 3,
    internship_id: 1,
    resume_url: "/resumes/resume.pdf",
    status: "Rejected",
    applied_date: "2024-01-12T09:15:00Z",
    student: mockStudents[2],
    internship: mockInternships[0]
  },
  {
    app_id: 4,
    student_id: 1,
    internship_id: 3,
    resume_url: "/resumes/resume.pdf",
    status: "Approved",
    applied_date: "2024-01-20T16:45:00Z",
    student: mockStudents[0],
    internship: mockInternships[2]
  },
  {
    app_id: 5,
    student_id: 4,
    internship_id: 5,
    resume_url: "/resumes/resume.pdf",
    status: "Pending",
    applied_date: "2025-09-23T16:45:00Z",
    student: mockStudents[3],
    internship: mockInternships[4]
  }
];

export const mockAllotments: Allotment[] = [
  {
    allotment_id: 1,
    student_id: 2,
    internship_id: 2,
    allotted_date: "2024-01-25T12:00:00Z",
    student: mockStudents[1],
    internship: mockInternships[1]
  },
  {
    allotment_id: 2,
    student_id: 1,
    internship_id: 3,
    allotted_date: "2024-01-26T10:30:00Z",
    student: mockStudents[0],
    internship: mockInternships[2]
  }
];

export const mockUser = {
  id: 1,
  name: "Student User",
  email: "student@university.edu",
  role: "student" as const
};

export const mockAdminUser = {
  id: 100,
  name: "Admin User",
  email: "admin@university.edu",
  role: "admin" as const
};