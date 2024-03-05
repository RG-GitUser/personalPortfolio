import dynamic from 'next/dynamic';
import '../styles/globals.css'; // Import global CSS styles here

const DynamicSidebar = dynamic(() => import('../components/Sidebar'), { ssr: false });

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <DynamicSidebar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;