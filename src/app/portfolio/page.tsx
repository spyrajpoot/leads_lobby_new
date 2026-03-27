"use client";

import { useState } from 'react';

export default function PortfolioPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const allProjects = [
    // Web Development Projects
    { 
      title: "Taleem ka Safar",
      description: "Pakistan's first free test preparation platform for university entrance exams",
      category: "Web Development",
      type: "website",
      image: "/portfolio/taleem.png",
      link: "https://www.taleemkasafar.com",
      tech: "Next.js, Clerk, Education Platform"
    },
    { 
      title: "The Ignite",
      description: "Modern business website with professional design",
      category: "Web Development",
      type: "website",
      image: "/portfolio/Theignite.png",
      link: "#",
      tech: "React, Tailwind CSS"
    },
    { 
      title: "Al Taj Restaurant",
      description: "Elegant restaurant website featuring authentic Pakistani cuisine",
      category: "Web Development",
      type: "website",
      image: "/portfolio/altaj.png",
      link: "https://www.altaj-ristorante.it/",
      tech: "Next.js, Restaurant Management"
    },
    
    // Video Production Projects
    { 
      title: "Product Launch Video",
      description: "High-impact promotional video with 85% viewer engagement",
      category: "Video Production",
      type: "video",
      previewVideo: "/videos/product-launch-preview.mp4", // 5-10 sec clip
      fullVideo: "/videos/product-launch-full.mp4", // Full video or YouTube link
      thumbnail: "/images/portfolio/video1-thumb.jpg",
      metric: "85% Engagement"
    },
    { 
      title: "Brand Story Series",
      description: "Compelling video showcasing brand values",
      category: "Video Production",
      type: "video",
      previewVideo: "/videos/brand-story-preview.mp4",
      fullVideo: "https://youtube.com/watch?v=...", // Can be YouTube link
      thumbnail: "/images/portfolio/video2-thumb.jpg",
      metric: "500K+ Views"
    },
    { 
      title: "Social Media Content",
      description: "Short-form video content for TikTok and Instagram Reels",
      category: "Video Production",
      type: "video",
      previewVideo: "/videos/social-preview.mp4",
      fullVideo: "/videos/social-full.mp4",
      thumbnail: "/images/portfolio/video3-thumb.jpg",
      metric: "2M+ Reach"
    },
    
    // Graphics Design Projects
    { 
      title: "Corporate Branding Package",
      description: "Complete brand identity design including logo and guidelines",
      category: "Graphics Design",
      type: "image",
      image: "/images/portfolio/branding.jpg",
      metric: "Complete Brand Identity"
    },
    { 
      title: "Social Media Graphics",
      description: "Monthly social media content design package",
      category: "Graphics Design",
      type: "image",
      image: "/images/portfolio/social-graphics.jpg",
      metric: "100+ Designs"
    },
    { 
      title: "Restaurant Flyers",
      description: "Professional flyer designs for Al Taj Restaurant campaigns",
      category: "Graphics Design",
      type: "image",
      image: "/images/portfolio/flyers.jpg",
      metric: "Print Ready Designs"
    }
  ];

  const categories = [
    { name: "Web Development", color: "blue" },
    { name: "Video Production", color: "red" },
    { name: "Graphics Design", color: "purple" }
  ];

  const ProjectCard = ({ project }: { project: any }) => {
    const [isHovered, setIsHovered] = useState(false);

    if (project.type === "video") {
      return (
        <div 
          className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer bg-black"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setSelectedVideo(project.fullVideo)}
        >
          {/* Video Preview - Auto plays on scroll/hover */}
          <div className="relative aspect-video">
            <video
              src={project.previewVideo}
              poster={project.thumbnail}
              muted
              loop
              playsInline
              autoPlay={isHovered}
              className="w-full h-full object-cover"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>

            {/* Metric Badge */}
            {project.metric && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {project.metric}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="p-6 bg-white">
            <div className="text-xs font-semibold text-red-500 mb-2">{project.category}</div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm">{project.description}</p>
          </div>
        </div>
      );
    }

    if (project.type === "website") {
      return (
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
          <div className="aspect-video overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6 bg-white">
            <div className="text-xs font-semibold text-blue-500 mb-2">{project.category}</div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors"
            >
              View Live Site
            </a>
          </div>
        </div>
      );
    }

    // Graphics/Images
    return (
      <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer">
        <div className="aspect-video overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6 bg-white">
          <div className="text-xs font-semibold text-purple-500 mb-2">{project.category}</div>
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm">{project.description}</p>
          {project.metric && (
            <div className="mt-3 text-sm font-semibold text-purple-600">{project.metric}</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <main className="min-h-screen bg-white pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of successful projects across web development, 
              video production, and graphic design.
            </p>
          </div>
        </section>

        {/* All Projects by Category */}
        {categories.map((cat) => {
          const categoryProjects = allProjects.filter(p => p.category === cat.name);
          
          return (
            <section key={cat.name} className="py-16 px-6 bg-white">
              <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                    {cat.name}
                  </h2>
                  <div className={`h-1 w-24 bg-${cat.color}-500 rounded`}></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryProjects.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create something amazing together. Get in touch with us today!
            </p>
            <a 
              href="/contact" 
              className="inline-block px-10 py-5 bg-white text-blue-500 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl"
            >
              Contact Us Now
            </a>
          </div>
        </section>
      </main>

      {/* Video Modal - Full Screen Player */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            onClick={() => setSelectedVideo(null)}
          >
            ×
          </button>
          
          <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {selectedVideo.includes('youtube.com') || selectedVideo.includes('youtu.be') ? (
              // YouTube embed
              <iframe
                className="w-full aspect-video rounded-lg"
                src={selectedVideo.replace('watch?v=', 'embed/')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              // Direct video file
              <video
                className="w-full rounded-lg"
                src={selectedVideo}
                controls
                autoPlay
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}