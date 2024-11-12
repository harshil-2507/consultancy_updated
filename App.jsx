import { createRoot } from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from "react-router-dom";
import UserContext, { UserProvider } from "./components/UserContext";
import HomePage from "./components/HomePage";
import Navbar from "./components/navBar";
import UserInfo from "./components/userInfo";
import AvailableServices from "./components/AvailableServices";
import SystemGeneratedLetters from "./SystemGeneratedLetters";
import ContactUs from "./ContactUs";
import UserDashboardLeftSection from "./components/UserDashboardLeftSection";
import ChequeDepositForm from "./components/ChequeDepositForm";
import PaymentReceiptForm from "./components/PaymentReceiptForm";
import LoginPage from "./components/loginPage";
import ConsultancyProjectRegistrationForm from "./components/ConsultancyProjectRegistrationForm";
import ConsultancyProjectCompletionReport from "./components/ConsultancyProjectCompletionReport";
import FinalLetter from "./components/FinalLetter";
import Footer from "./components/end";
import NotFoundPage from "./components/NotFoundPage";
import "./App.css";
import Header from "./components/Header";
import Hod_DeanHomePage from "./components/Hod_DeanHomePage";
import ApplicationCard from "./ApplicationCard";
import ApplicationWorkCard from "./ApplicationWorkCard";
import WorkOrderFormPage from "./components/WorkOrderFormPage";
import AdminHomepage from "./components/AdminHomepage";
import AdminUserCard from "./components/AdminUserCard";
import AdminView from "./components/AdminView";
// import AdminUserManagement from "./components/AdminUserManagement";
import StatusCard from "./components/StatusCard";
import RecentActivities from "./components/RecentActivities"; // New import for RecentActivities

const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/user/login" replace={true} />,
	},
	{ path: "/user/login", element: <LoginPage /> },

	// New route for Recent Activities
	{
		path: "/components/recentActivities",
		element: (
			<>
				<Header />
				<Navbar />
				<RecentActivities />
				<Footer />
			</>
		),
	},

	{
		path: "/form/generate/consent",
		element: (
			<>
				<Header />
				<Navbar />
				<ConsultancyProjectRegistrationForm view={false} />
				<Footer />
			</>
		),
	},
	// Dummy workorder step
	{
		path: "/form/workForm/:formId",
		element: (
			<>
				<Header />
				<Navbar />
				<WorkOrderFormPage />
				<Footer />
			</>
		),
	},
	{
		path: "/user/form/:formId",
		element: (
			<>
				<Header />
				<Navbar />
				<ConsultancyProjectRegistrationForm view={true} />
				<Footer />
			</>
		),
	},
	{
		path: "/user/dashboard",
		element: (
			<>
				<Header />
				<Navbar />
				<HomePage />
				<Footer />
			</>
		),
	},
	{
		path: "/admin/dashboard",
		element: (
			<>
				<Header />
				<Navbar />
				<AdminHomepage />
				<Footer />
			</>
		),
	},
	{
		path: "/admin/view/:role",
		element: (
			<>
				<Header />
				<Navbar />
				<AdminView />
				<Footer />
			</>
		),
	},
	{
		path: "/admin/createUser",
		element: (
			<>
				<Header />
				<Navbar />
				<AdminUserManagement edit={false} />
			</>
		),
	},
	{
		path: "/admin/editUser/:userId",
		element: (
			<>
				<Header />
				<Navbar />
				<AdminUserManagement edit={true} />
			</>
		),
	},
	{
		path: "/user/forms/consentForms",
		element: (
			<>
				<Header />
				<Navbar />
				<h1 className="py-2 my-2 text-center font-bold text-2xl">
					Consent Forms
				</h1>
				<ApplicationCard work={false} type={"ALL"} />
				<Footer />
			</>
		),
	},
	{
		path: "/user/forms/consentForms/pending",
		element: (
			<>
				<Header />
				<Navbar />
				<h1 className="py-2 my-2 text-center font-bold text-2xl">
					Pending Forms
				</h1>
				<ApplicationCard work={false} type={"PENDING"} />
				<Footer />
			</>
		),
	},
	{
		path: "/user/forms/consentForms/processed",
		element: (
			<>
				<Header />
				<Navbar />
				<h1 className="py-2 my-2 text-center font-bold text-2xl">
					Processed Forms
				</h1>
				<ApplicationCard work={false} type={"PROCESSED"} />
				<Footer />
			</>
		),
	},
	{
		path: "/user/getWorkForms",
		element: (
			<>
				<Header />
				<Navbar />
				<h1>Consent Forms</h1>
				<ApplicationCard work={true} />
				<Footer />
			</>
		),
	},
	{
		path: "/user/forms/consentForms",
		element: (
			<>
				<Header />
				<Navbar />
				<h1>Consent Forms</h1>
				<ApplicationWorkCard work={true} />
				<Footer />
			</>
		),
	},
	{
		path: "/user/consentForm/status/:formID",
		element: (
			<>
				<Header />
				<Navbar />
				<h1>Info</h1>
				<StatusCard work={false} />
				<Footer />
			</>
		),
	},
	// Route for BillofSupply to PaymentReceiptForm
	{
		path: "/components/billofSupply",
		element: (
			<>
				<Header />
				<Navbar />
				<PaymentReceiptForm />
				<Footer />
			</>
		),
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
