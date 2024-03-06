import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* Include any necessary meta tags, stylesheets, or scripts */}
      </head>
      <body>
        <div className="layout">
          <div className="mx-12 lg:mx-24 xl:mx-48">
            {/* Other layout components or styles */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
