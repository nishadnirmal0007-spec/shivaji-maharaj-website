import { useState, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MusicToggle from './components/MusicToggle'
import StarField from './components/StarField'
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import Forts from './pages/Forts'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  const [musicPlaying, setMusicPlaying] = useState(false)
  const audioRef = useRef(null)

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (musicPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }

    setMusicPlaying(!musicPlaying)
  }

  return (
    <Router>
      <div className="relative min-h-screen bg-[#080300]">
        <StarField />
        <Navbar />

        {/* 🎵 Music Button */}
        <MusicToggle playing={musicPlaying} setPlaying={toggleMusic} />

        {/* 🎧 Audio */}
        <audio ref={audioRef} loop>
          <source src="/music.mp3" type="audio/mpeg" />
        </audio>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/forts" element={<Forts />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App