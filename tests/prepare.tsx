import { createRoot } from "react-dom/client"
import Funny from "../components/funny.jsx"

class TestApp {
  show() {
    const element = document.getElementById("test-app")
    const root = createRoot(element!)
    root.render(<Funny />)
  }
}

const app = new TestApp()
app.show()