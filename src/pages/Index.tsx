
import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail, BarChart3, Database, TrendingUp, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Praveen</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-orange-500 transition-colors">Home</a>
              <a href="#services" className="text-gray-600 hover:text-orange-500 transition-colors">Services</a>
              <a href="#experience" className="text-gray-600 hover:text-orange-500 transition-colors">Experience</a>
              <a href="#portfolio" className="text-gray-600 hover:text-orange-500 transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Hi, I'm <span className="text-orange-500">Praveen</span>,
                </h1>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                  Data & Business Analyst
                </h2>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Turning raw data into real decisions. I help businesses unlock insights through clean data dashboards, EDA, and automation.
              </p>

              <div className="flex gap-4 items-center">
                <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                  4+ Years Experience
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">BCA @ Poornima University</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all hover:scale-105">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 px-8 py-3 rounded-full text-lg font-medium hover:border-orange-500 hover:text-orange-500 transition-all">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Projects
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-orange-500 overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                    alt="Praveen Kumar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg">
                  <BarChart3 className="w-8 h-8 text-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              My <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I specialize in transforming complex data into actionable business insights through comprehensive analysis and visualization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors">
                  <Database className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Cleaning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Transform messy datasets into clean, structured data ready for analysis. I ensure data quality and consistency across all sources.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors">
                  <BarChart3 className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dashboard Building</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create interactive dashboards that tell compelling data stories. From Excel to Google Data Studio, I build visualizations that drive decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors">
                  <TrendingUp className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deliver comprehensive reports that bridge the gap between data and strategy. I provide cross-functional insights that fuel growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              My Work <span className="text-orange-500">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A journey of continuous learning and delivering data-driven solutions across various domains.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-200"></div>
            
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">Business Analyst Intern</h3>
                  <p className="text-orange-500 font-medium mb-2">TechCorp Solutions</p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Jan 2023 - Present</span>
                    <MapPin className="w-4 h-4 ml-4 mr-2" />
                    <span>Remote</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Developed automated reporting systems that reduced manual work by 60%. Created comprehensive dashboards for executive decision-making and performed EDA on customer behavior data.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">Data Analyst</h3>
                  <p className="text-orange-500 font-medium mb-2">Freelance Projects</p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>2022 - 2023</span>
                    <Users className="w-4 h-4 ml-4 mr-2" />
                    <span>Multiple Clients</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Collaborated with small businesses to optimize their data collection and analysis processes. Built custom Excel solutions and Python automation scripts for various industries.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">Academic Research Assistant</h3>
                  <p className="text-orange-500 font-medium mb-2">Poornima University</p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>2021 - 2022</span>
                    <MapPin className="w-4 h-4 ml-4 mr-2" />
                    <span>Jaipur, India</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Assisted in data collection and analysis for academic research projects. Gained hands-on experience with statistical analysis and data visualization techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Why Me Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8">
                Why You Should <span className="text-orange-500">Hire Me</span> for Your Next Project?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                I bring a unique combination of technical expertise and business acumen to every project. My approach focuses on delivering actionable insights that drive real business value.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">10+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">4+</div>
                  <div className="text-gray-300">Tools Mastered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">60%</div>
                  <div className="text-gray-300">Time Saved with Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
              </div>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all hover:scale-105">
                Hire Me
              </Button>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {["Excel", "SQL", "Python", "Supabase", "Google Data Studio", "Power BI"].map((skill) => (
                    <span key={skill} className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3">Core Competencies</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Problem-solving & Critical Thinking</li>
                  <li>• Data Visualization & Storytelling</li>
                  <li>• Cross-functional Communication</li>
                  <li>• Process Automation & Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Let's Have a Look at my <span className="text-orange-500">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore some of my recent projects that showcase my analytical skills and technical expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" 
                  alt="QR Code Generator" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-4 right-4">
                  <Github className="w-6 h-6 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">QR Code Generator</h3>
                <p className="text-gray-600 mb-4">Python-based tool for generating custom QR codes with analytics tracking capabilities.</p>
                <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop" 
                  alt="Flight Delay Analysis" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-4 right-4">
                  <Github className="w-6 h-6 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Flight Delay EDA</h3>
                <p className="text-gray-600 mb-4">Comprehensive analysis of flight delay patterns using Python and interactive visualizations.</p>
                <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop" 
                  alt="Spotify Clone" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-4 right-4">
                  <Github className="w-6 h-6 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Spotify Data Clone</h3>
                <p className="text-gray-600 mb-4">Music streaming analytics dashboard with user behavior insights and recommendation engine.</p>
                <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                  View Project
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all hover:scale-105">
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Let's <span className="text-orange-500">Connect</span> There
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to turn your data into actionable insights? Let's discuss how I can help your business grow through data-driven decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a 
              href="https://github.com/Praveen-Kumar-404" 
              className="bg-gray-800 p-8 rounded-2xl text-center hover:bg-gray-700 transition-all hover:-translate-y-2 group"
            >
              <Github className="w-12 h-12 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <p className="text-gray-300">View my code and projects</p>
            </a>

            <a 
              href="http://linkedin.com/in/praveen-kumar-prof/" 
              className="bg-gray-800 p-8 rounded-2xl text-center hover:bg-gray-700 transition-all hover:-translate-y-2 group"
            >
              <Linkedin className="w-12 h-12 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-300">Connect professionally</p>
            </a>

            <div className="bg-gray-800 p-8 rounded-2xl text-center">
              <Mail className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">praveen.kumar@email.com</p>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all hover:scale-105">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://github.com/Praveen-Kumar-404" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="http://linkedin.com/in/praveen-kumar-prof/" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:praveen.kumar@email.com" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400">
              © 2024 Praveen Kumar. All rights reserved. | Turning data into decisions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
