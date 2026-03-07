import Login from "./pages/login";
import HeroSection from "./pages/student/HeroSection";
import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/MyLearning";
import Profile from "./pages/student/Profile";

import Sidebar from "./pages/admin/Sidebar";
import Dashboard from "./pages/admin/Dashboard";
import CourseTable from "./pages/admin/course/CourseTable";
import AddCourse from "./pages/admin/course/AddCourse";
import EditCourse from "./pages/admin/course/EditCourse";
import CreateLecture from "./pages/admin/lecture/CreateLecture";
import EditLecture from "./pages/admin/lecture/EditLecture";

import MainLayout from "./layout/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [

      // Home page
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Courses />
          </>
        ),
      },

      // Public route
      {
        path: "login",
        element: <Login />,
      },

      // Protected student routes
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "my-learning",
            element: <MyLearning />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },

      // Protected admin routes
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "admin",
            element: <Sidebar />,
            children: [
              {
                path: "dashboard",
                element: <Dashboard />,
              },
              {
                path: "course",
                element: <CourseTable />,
              },
              {
                path: "course/create",
                element: <AddCourse />,
              },
              {
                path: "course/:courseId",
                element: <EditCourse />,
              },
              {
                path: "course/:courseId/lecture",
                element: <CreateLecture />,
              },
              {
                path: "course/:courseId/lecture/:lectureId",
                element: <EditLecture />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  );
}

export default App;