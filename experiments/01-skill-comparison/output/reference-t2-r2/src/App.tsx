import { useState } from "react";
import { Header, SearchBar, TagFilter, ImageGallery, Footer } from "./components";

function App() {
  const [activeTag, setActiveTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#0d0d10]">
      <Header />

      <main>
        <section className="relative pt-20 pb-12 px-6">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[rgba(108,92,231,0.08)] to-[rgba(0,206,201,0.04)] blur-3xl" />
            <div className="absolute top-20 left-[20%] w-[300px] h-[300px] rounded-full bg-[rgba(108,92,231,0.06)] blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(108,92,231,0.1)] border border-[rgba(108,92,231,0.25)] text-[#a29bfe] text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00cec9] animate-pulse" />
              Now in public beta
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#f0f0f5] leading-[1.1] tracking-tight mb-5">
              Create stunning visuals
              <br />
              <span className="bg-gradient-to-r from-[#6c5ce7] via-[#a29bfe] to-[#00cec9] bg-clip-text text-transparent">
                with AI precision
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#9a9aae] max-w-2xl mx-auto leading-relaxed">
              Transform your ideas into breathtaking images. Powered by cutting-edge
              generative AI — from concept art to photorealistic renders.
            </p>
          </div>

          <div className="relative mb-12">
            <SearchBar onSearch={setSearchQuery} />
          </div>

          <div className="relative mb-10">
            <TagFilter activeTag={activeTag} onTagChange={setActiveTag} />
          </div>
        </section>

        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 pb-16">
          <ImageGallery activeTag={activeTag} searchQuery={searchQuery} />
        </section>

        <section className="max-w-[1400px] mx-auto px-6 pb-20">
          <div className="relative rounded-2xl bg-gradient-to-br from-[#1a1a21] to-[#141419] border border-[#2a2a35] p-8 sm:p-12 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[rgba(108,92,231,0.05)] blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[rgba(0,206,201,0.04)] blur-3xl translate-y-1/2 -translate-x-1/4" />

            <div className="relative">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f0f0f5] mb-4">
                Ready to bring your vision to life?
              </h2>
              <p className="text-[#9a9aae] text-lg mb-8 max-w-xl mx-auto">
                Join thousands of creators already using Synthi.ai to push the boundaries
                of AI-generated art.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-[#6c5ce7] hover:bg-[#5a4bd1] text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg shadow-[rgba(108,92,231,0.3)]">
                  Start Creating Free
                </button>
                <button className="w-full sm:w-auto px-8 py-3.5 bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)] text-[#f0f0f5] font-semibold rounded-xl border border-[rgba(255,255,255,0.1)] transition-colors duration-200">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
