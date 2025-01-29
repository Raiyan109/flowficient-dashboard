import { CiSettings, CiUser } from "react-icons/ci";
import { GrMoney } from "react-icons/gr";
import { RiDashboardHorizontalFill } from "react-icons/ri";


import { FaRegUser } from "react-icons/fa6";
import {
    MdOutlineSecurityUpdateWarning,
} from "react-icons/md";

import { FaServicestack } from "react-icons/fa6";
import { BiMessageSquareDetail } from "react-icons/bi";
import { PiHandWithdrawBold } from "react-icons/pi";

import { TbCoin } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { LuCrown } from "react-icons/lu";

import { BiDish } from "react-icons/bi";
import { GiMountainClimbing } from "react-icons/gi";

import { CiDumbbell } from "react-icons/ci";

import { PiHandbagSimple } from "react-icons/pi";
import DashboardHome from "../pages/Main/DashboardHome/DashboardHome";
import Bookings from "../pages/Main/DashboardHome/Bookings";
import Patients from "../pages/Main/DashboardHome/Patients";
import Automations from "../pages/Main/DashboardHome/Automations";

import Settings from "../pages/Main/DashboardHome/Settings";
import Knowledgebase from "../pages/Main/DashboardHome/Knowledgebase/Knowledgebase";
import InternalKB from "../pages/Main/DashboardHome/Knowledgebase/InternalKB";
import WaitingList from "../pages/Main/DashboardHome/WaitingList/WaitingList";


export const dashboardItems = [
    {
        name: "Dashboard",
        path: "/",
        icon: RiDashboardHorizontalFill,
        element: <DashboardHome />,
    },
    {
        name: "Patients",
        path: "patients",
        icon: TbCoin,
        element: <Patients />,
    },
    {
        name: "Bookings",
        path: "bookings",
        icon: TbCoin,
        element: <Bookings />,
    },
    {
        name: "Automations",
        path: "automations",
        icon: TbCoin,
        element: <Automations />,
    },
    {
        name: "Knowledgebase",
        path: "knowledgebase",
        icon: TbCoin,
        children: [
            {
                name: "Knowledgebase",
                path: "knowledgebase",
                icon: TbCoin,
                element: <Knowledgebase />,
            },
            {
                name: "InternalKB",
                path: "knowledgebase/internalkb",
                icon: TbCoin,
                element: <InternalKB />,
            },
        ],
    },
    {
        name: "WaitingList",
        path: "waiting",
        icon: TbCoin,
        element: <WaitingList />,
    },
    {
        name: "Settings",
        path: "settings",
        icon: TbCoin,
        element: <Settings />,
    },
    //   {
    //     name: "Users",
    //     path: "users",
    //     icon: FaRegUser,
    //     element: <Guests />,
    //   },
    // {
    //   name: "Approve Request",
    //   rootPath: "approveRequest",
    //   icon: GrMoney,
    //   children: [
    //     {
    //       name: "Studio Post",
    //       path: "approveRequest/all-earnings",
    //       icon: LuWallet,
    //       element: <StudioPost />,
    //     },
    //     {
    //       name: "Trainer Post",
    //       path: "approveRequest/withdraw",
    //       icon: PiHandWithdrawBold,
    //       element: <TrainerPost />,
    //     },
    //   ],
    // },
    //   {
    //     path: "notifications",
    //     element: <Notifications />,
    //   },
    //   {
    //     path: "add-subscription",
    //     element: <AddSubscription />,
    //   },
    //   {
    //     path: "edit-subscription",
    //     element: <EditSubscription />,
    //   },
    //   {
    //     path: "add-meal",
    //     element: <AddMeal />,
    //   },
    //   {
    //     path: "edit-meal",
    //     element: <EditMeal />,
    //   },
    //   {
    //     path: "add-challenge",
    //     element: <AddChallenge />,
    //   },
    //   {
    //     path: "edit-challenge",
    //     element: <EditChallenge />,
    //   },
    //   {
    //     path: "add-workout",
    //     element: <AddWorkout />,
    //   },
    //   {
    //     path: "edit-workout",
    //     element: <EditWorkout />,
    //   },
    //   {
    //     path: "add-badge",
    //     element: <AddBadge />,
    //   },
    //   {
    //     path: "edit-badge",
    //     element: <EditBadge />,
    //   },
    // {
    //   path: '/reviews',
    //   element: <Review></Review>
    // },


    // {
    //   name: "Driver",
    //   path: "driver",
    //   icon: GrUserManager,
    //   element: <Driver />,
    // },
    // {
    //   name: "Driver Request",
    //   path: "driver-request",
    //   icon: PiLaptopThin,
    //   element: <DriverRequest />,
    // },
    //   {
    //     name: "Subscription",
    //     path: "subscription",
    //     icon: LuCrown,
    //     element: <Subscription />,
    //   },
    //   {
    //     name: "Meals",
    //     path: "meals",
    //     icon: BiDish,
    //     element: <Meals />,
    //   },
    //   {
    //     name: "Challenges",
    //     path: "challenges",
    //     icon: GiMountainClimbing,
    //     element: <Challenges />,
    //   },
    //   {
    //     name: "Workouts",
    //     path: "workouts",
    //     icon: CiDumbbell,
    //     element: <Workouts />,
    //   },
    //   {
    //     name: "Store",
    //     path: "store",
    //     icon: PiHandbagSimple,
    //     element: <Store />,
    //   },
    //   {
    //     name: "Settings",
    //     path: "settings",
    //     icon: IoSettingsOutline,
    //     element: <Setting />,
    //   },
    //   {
    //     path: "/hosts/:id",
    //     element: <HostDetails />,
    //   },
    //   {
    //     name: "Settings",
    //     rootPath: "settings",
    //     icon: CiSettings,
    //     children: [
    //       {
    //         name: "Personal Information",
    //         path: "settings/profile",
    //         icon: CiUser,
    //         element: <MyProfile />,
    //       },
    //       {
    //         path: "settings/profile/edit",
    //         element: <EditMyProfile />,
    //       },
    //       {
    //         name: "Change Password",
    //         icon: FaServicestack,
    //         path: "settings/change-password",
    //         element: <ChangePassword />,
    //       },
    //       {
    //         path: "settings/change-password/forgot-password",
    //         element: <ForgotPassword />,
    //       },
    //       {
    //         path: "settings/change-password/forgot-password/verify-email",
    //         element: <VerifyEmail />,
    //       },
    //       {
    //         name: "Terms & Condition",
    //         icon: FaServicestack,
    //         path: "settings/terms-conditions",
    //         element: <TermsConditions />,
    //       },
    //       {
    //         path: "settings/terms-conditions/edit",
    //         element: <EditTermsConditions />,
    //       },
    //       {
    //         name: "Privacy Policy",
    //         icon: MdOutlineSecurityUpdateWarning,
    //         path: "settings/privacy-policy",
    //         element: <PrivacyPolicy />,
    //       },
    //       {
    //         path: "settings/privacy-policy/edit",
    //         element: <EditPrivacyPolicy />,
    //       },
    //       {
    //         name: "About Us",
    //         icon: BiMessageSquareDetail,
    //         path: "settings/about-us",
    //         element: <Trust />,
    //       },
    //       {
    //         path: "settings/about-us/edit",
    //         element: <EditTrust />,
    //       },
    //     ],
    //   },
];