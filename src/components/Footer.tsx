
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-algo-primary text-white h-8 w-8 rounded-md flex items-center justify-center font-bold">A</div>
              <span className="font-bold text-xl">AlgoViz Academy</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Interactive visualizations and lessons for mastering data structures and algorithms.
            </p>
            <p className="text-sm text-gray-500">
              © {year} AlgoViz Academy. All rights reserved.
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Resources</h5>
            <ul className="space-y-2">
              <li><Link to="/lessons" className="text-gray-600 hover:text-algo-primary">Lessons</Link></li>
              <li><Link to="/visualizers" className="text-gray-600 hover:text-algo-primary">Visualizers</Link></li>
              <li><Link to="/challenges" className="text-gray-600 hover:text-algo-primary">Challenges</Link></li>
              <li><Link to="/quizzes" className="text-gray-600 hover:text-algo-primary">Quizzes</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Company</h5>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-algo-primary">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-algo-primary">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-algo-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-algo-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
