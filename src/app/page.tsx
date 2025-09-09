
import MedicalQuiz from "./MedicalQuiz";

export default function Home() {
  return (
      
    <div style={{ position: "relative", minHeight: "100vh", width: "100vw" }}>
      {/* Background image en absolute, couvrant tout l'écran */}
      <div
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/17485658/pexels-photo-17485658.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100vw",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          pointerEvents: "none",
        }}
      ></div>
      <main className="flex flex-col gap-[32px] items-center justify-center min-h-screen" style={{ position: "relative", zIndex: 30 }}>
  <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-red-500 text-white rounded p-2">Quiz de terminologie médicale</h1>
        <MedicalQuiz />
      </main>
    </div>
  );
}
