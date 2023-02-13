import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function App() {
  return (
    <div className="">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
