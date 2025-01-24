import AcademicDepartment from "@/pages/Admin/academicManagement.tsx/AcademicDepartment";
import AcademicFaculty from "@/pages/Admin/academicManagement.tsx/AcademicFaculty";
import AcademicSemester from "@/pages/Admin/academicManagement.tsx/Academicsemester";
import CreateAcademicDepartment from "@/pages/Admin/academicManagement.tsx/CreateAcademicDepartment";
import CreateAcademicFaculty from "@/pages/Admin/academicManagement.tsx/CreateAcademicfaculty";
import CreateAcademicSemester from "@/pages/Admin/academicManagement.tsx/CreateAcademicSemester";
import AdminDashboard from "@/pages/Admin/AdminDashboard";
import CreateAdmin from "@/pages/Admin/userManagement/CreateAdmin";
import CreateFaculty from "@/pages/Admin/userManagement/CreateFaculty";
import CreateStudent from "@/pages/Admin/userManagement/CreateStudent";
import StudentData from "@/pages/Admin/userManagement/StudentData";
import StudentDetails from "@/pages/Admin/userManagement/StudentDetails";

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
        element: <CreateAcademicDepartment />,
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
        element: <CreateStudent/>,
      },
      {
        name: 'Students',
        path: 'students-data',
        element: <StudentData/>,
      },
      {
        path: 'student-data/:studentId',
        element: <StudentDetails />,
      },
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: <CreateAdmin/>,
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
];

// export const adminSidebarItems = adminPaths.reduce(
//   (acc: TSidebarItem[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }

//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }

//     return acc;
//   },
//   []
// );

//* Programatical way

// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }

//   return acc;
// }, []);

//! Hard coded way

// export const adminPaths = [
//   {
//     path: 'dashboard',
//     element: <AdminDashboard />,
//   },
//   {
//     path: 'create-student',
//     element: <CreateStudent />,
//   },
//   {
//     path: 'create-admin',
//     element: <CreateAdmin />,
//   },
//   {
//     path: 'create-faculty',
//     element: <CreateFaculty />,
//   },
// ];