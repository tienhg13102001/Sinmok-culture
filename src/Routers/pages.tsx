import { Suspense, lazy } from "react";
import { RoutesString } from "../Components/Modules/routesString";
const PageErr = () => import("../Components/Pages/404/PageErr");
const Home = () => import("../Components/Pages/Home");
const LectureSearch = () => import("../Components/Pages/Lecture/LectureSearch");
const LectureCustom = () => import("../Components/Pages/Lecture/LectureCustom");

const InformationCredit = () => import("../Components/Pages/Information/InformationCredit")
const InformationQA = () => import("../Components/Pages/Information/Q&A");
const InformationMap = () => import("../Components/Pages/Information/InformationMap");
const Information = () => import("../Components/Pages/Information/Information");
const LectureRegisterInfo = () =>
  import("../Components/Pages/Lecture/LectureRegisterInfo");

const Board = () => import("../Components/Pages/board/components/BoardNotif");
const BoardCourse = () => import("../Components/Pages/board/components/BoardCourse");
const BoardExhibition = () => import("../Components/Pages/board/components/BoardExhibition");
const LectureSchedule = () =>
  import("../Components/Pages/Lecture/LectureShedule");

const lazyLoad = (importFunc: any) => {
  const Component = lazy(importFunc);
  return (props: any) => (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );
};



const pages = [
  {
    path: RoutesString.PageNotFound,
    component: lazyLoad(PageErr),
  },

  /* Home */
  {
    path: RoutesString.Home,
    component: lazyLoad(Home),
  },
  /* lecture pages */
  {
    path: RoutesString.Lecture,
    component: lazyLoad(LectureSearch),
  },
  {
    path: RoutesString.LectureSearch,
    component: lazyLoad(LectureSearch),
  },

  {
    path: RoutesString.LectureRegisterInfo,
    component: lazyLoad(LectureRegisterInfo),
  },
  {
    path: RoutesString.LectureSchedule,
    component: lazyLoad(LectureSchedule),
  },
  {
    path: RoutesString.LectureCustom,
    component: lazyLoad(LectureCustom),
  },

  //board
  {
    path: RoutesString.BoardNotifi,
    component: lazyLoad(Board),
  },
  {
    path: RoutesString.BoardCourse,
    component: lazyLoad(BoardCourse),
  },
  {
    path: RoutesString.BoardExhibition,
    component: lazyLoad(BoardExhibition),
  },

  //Information
  {
    path: RoutesString.InformationCredit,
    component: lazyLoad(InformationCredit),
  },
  {
    path: RoutesString.InformationQA,
    component: lazyLoad(InformationQA),
  },
  {
    path: RoutesString.Information,
    component: lazyLoad(Information),
  },
  {
    path: RoutesString.InformationMap,
    component: lazyLoad(InformationMap),
  },
];

export default pages;
