import Header from "./components/Header";
import WhatsupField from "./components/Watsup";

export default function App() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  text-white text-center px-4 py-8 space-y-8">
      <Header />
      <div className="mt-6">
        <WhatsupField />
      </div>
    </div>
  );
}

