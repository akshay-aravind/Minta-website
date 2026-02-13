
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
import LockWarningModal from "./websitelock.tsx";

  createRoot(document.getElementById("root")!).render(<LockWarningModal />);
  