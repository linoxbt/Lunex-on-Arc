import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-background py-6">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground tracking-wider uppercase">
      <div className="flex items-center gap-6">
        <Link to="/docs" className="hover:text-foreground transition-colors">Docs</Link>
        <a href="https://twitter.com/linoxbt" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1">
          Built by Lino <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
