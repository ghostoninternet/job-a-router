import { 
  createBrowserRouter, 
  Route, 
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom"

// pages
import Home from './pages/Home'
import About from './pages/About'
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayouts";
import Contact, { contactAction } from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import NotFound from "./pages/NotFound";
import CareersLayout from "./layouts/CareersLayouts";
import Careers, { careersLoader } from "./pages/career/Career";
import CareerDetails, { careerDetailsLoader } from "./pages/career/CareerDetails";
import CareersError from "./pages/career/CareerError";

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="help" element={<HelpLayout />}>
            <Route path="faq" element={<Faq />} />
            <Route path="contact" element={<Contact />} action={contactAction}/>
          </Route>
          <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />} >
            <Route
              index
              element={<Careers />}
              loader={careersLoader}
              />
            <Route
              path=":id"
              element={<CareerDetails />}
              loader={careerDetailsLoader}
              />
          </Route>

          <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App