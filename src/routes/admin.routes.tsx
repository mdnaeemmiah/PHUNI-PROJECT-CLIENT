
import AdminDashboard from '@/pages/Admin/AdminDashboard';
import OfferedCourse from '../pages/faculty/OfferedCourse';
import CreateAcademicSemester from '@/pages/Admin/academicManagement.tsx/CreateAcademicSemester';
import AcademicSemester from '@/pages/Admin/academicManagement.tsx/Academicsemester';
import CreateAcademicFaculty from '@/pages/Admin/academicManagement.tsx/CreateAcademicfaculty';
import AcademicFaculty from '@/pages/Admin/academicManagement.tsx/AcademicFaculty';
import CreateAcademicDepartment from '@/pages/Admin/academicManagement.tsx/CreateAcademicDepartment';
import AcademicDepartment from '@/pages/Admin/academicManagement.tsx/AcademicDepartment';
import CreateStudent from '@/pages/Admin/userManagement/CreateStudent';
import StudentData from '@/pages/Admin/userManagement/StudentData';
import StudentDetails from '@/pages/Admin/userManagement/StudentDetails';
import CreateAdmin from '@/pages/Admin/userManagement/CreateAdmin';
import CreateFaculty from '@/pages/Admin/userManagement/CreateFaculty';
import SemesterRegistration from '@/pages/Admin/courseManagement/SemesterRegistration';
import RegisteredSemesters from '@/pages/Admin/courseManagement/RegisteredSemester';
import CreateCourse from '@/pages/Admin/courseManagement/CreateCourse';
import Courses from '@/pages/Admin/courseManagement/Courses';
import OfferCourse from '@/pages/Admin/courseManagement/OfferCourse';

export const adminPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <AdminDashboard />,
  },
  {
    name: 'Academic Management',
    children: [
      {
        name: 'Create A. Semester',
        path: 'create-academic-semester',
        element: <CreateAcademicSemester />,
      },
      {
        name: 'Academic Semester',
        path: 'academic-semester',
        element: <AcademicSemester />,
      },
      {
        name: 'Create A. Faculty',
        path: 'create-academic-faculty',
        element: <CreateAcademicFaculty />,
      },
      {
        name: 'Academic Faculty',
        path: 'academic-faculty',
        element: <AcademicFaculty />,
      },
      {
        name: 'Create A. Department',
        path: 'create-academic-department',
        element: <CreateAcademicDepartment/>,
      },
      {
        name: 'Academic Department',
        path: 'academic-department',
        element: <AcademicDepartment />,
      },
    ],
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Student',
        path: 'create-student',
        element: <CreateStudent />,
      },
      {
        name: 'Students',
        path: 'students-data',
        element: <StudentData />,
      },
      {
        path: 'student-data/:studentId',
        element: <StudentDetails />,
      },
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: <CreateAdmin />,
      },
      {
        name: 'Create Faculty',
        path: 'create-faculty',
        element: <CreateFaculty />,
      },

      {
        name: 'Create Member',
        path: 'create-member',
        element: <CreateStudent />,
      },
    ],
  },
  {
    name: 'Course Management',
    children: [
      {
        name: 'Semester Registration',
        path: 'semester-registration',
        element: <SemesterRegistration />,
      },
      {
        name: 'Registered Semesters',
        path: 'registered-semesters',
        element: <RegisteredSemesters />,
      },
      {
        name: 'Create Course',
        path: 'create-course',
        element: <CreateCourse/>,
      },
      {
        name: 'Courses',
        path: 'courses',
        element: <Courses />,
      },
      {
        name: 'Offer Course',
        path: 'offer-course',
        element: <OfferCourse />,
      },
      {
        name: 'Offered Courses',
        path: 'offered-courses',
        element: <OfferedCourse />,
      },
    ],
  },
];

