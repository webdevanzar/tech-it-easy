import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-gradient mb-3">
              Tech It Easy
            </h3>
            <p className="text-muted-foreground text-sm">
              Building modern web & mobile experiences that solve real problems
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-primary transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-3">Connect With Us</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/webdevanzar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/muhammed-anzarshah-005356279/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:anzarsha3240@gmail.com"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Tech It Easy. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Built by our team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
