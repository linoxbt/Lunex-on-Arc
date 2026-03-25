import { ExternalLink } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-background py-6">
    <div className="container flex items-center justify-center text-xs text-muted-foreground tracking-wider uppercase">
      <a href="https://twitter.com/linoxbt" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1">
        Built by Lino <ExternalLink className="h-3 w-3" />
      </a>
    </div>
  </footer>
);

export default Footer;
