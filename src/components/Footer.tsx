export default function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 sm:text-center lg:grid-cols-4 lg:text-left gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4">
              Music School is a premier institution dedicated to teaching the art
              and science of music. We nurture talent from the ground up,
              fostering a vibrant community of musicians.
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#sec5"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#sec5"
                  className="hover:text-white transition-colors duration-300"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/muhammad-anus-ahmed/"
                target="_blank"
                className="hover:text-white transition-colors duration-300"
              > 
                LinkedIn
              </a>
              </li>     
              <li>
              <a
                href="https://www.facebook.com/profile.php?id=100082079742308"
                target="_blank"
                className="hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
              </li>
              <li>
              <a
                href="https://www.instagram.com/muhammadanusahmedkhan/"
                target="_blank"
                className="hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
              </li>
              <li>
              <a
                href="https://github.com/Muhammadanusahmed"
                target="_blank"
                className="hover:text-white transition-colors duration-300"
              >
                GitHub
              </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
            <p >karachi , Pakistan</p>
            <p>Karachi 10001</p>
            <p>Email: info@musicschool.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          </div>
          <p className="text-center text-xs pt-8">© 2024 Music School. All rights reserved.</p>
      </footer>
    )
  }
  
   