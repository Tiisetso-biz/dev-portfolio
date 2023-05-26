import Link from "next/link";
import Head from "next/head";

//content container for the application
const content = {
  padding: "10px 0px 0px",
};

//export the layout a=to be accessible outside of this module
export default (props) => {
  return (
    <div style={content}>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <header class="navigation">
        <Link href="/">
          <a>About</a>
        </Link>

        <Link href="/projects">
          <a>Projects</a>
        </Link>

        <Link href="/contact">
          <a>Contact</a>
        </Link>

        {/* styled-jsx */}
        <style>{` body {
            font-size: 20px;
            font-family: Arial, Helvetica, sans-serif;
            line-height: 1;
            background-image: linear-gradient(#3B71CA, #54B4D3);
         }

         #__next {
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
         }

         .navigation {
               background-color: #332D2D;
             }
             
             .navigation a {
               float: left;
               color: #f2f2f2;
               text-align: center;
               text-decoration: none;
               font-size: 17px;
             }
             
             .navigation a:hover {
               background-color: #3B71CA;
               color: black;
             }
             
             .navigation a.active {
               background-color: #04AA6D;
               color: white;
            }
            
            .children {
               padding: 20px;
            }
            .card {
               box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
               transition: 0.3s;
               width: 34%;
               margin: 10px;
               padding: 5px;
             }
             
             .card:hover {
               box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
             }
             
             .card-container {
               padding: 4px 32px;
             }
             .cards{
               display: flex;
               flex-direction: row;
               justify-content: space-between;
             }  

             .zoomIn {
               padding: 50px;
               transition: transform .2s; 
               margin: 0 auto;
             }
             
             .zoomIn:hover {
               transform: scale(2.5); 
             }

             .projectsTitle {
               text-align: center;
               text-transform: uppercase;
             }
         `}</style>
      </header>
      <div className="children">{props.children}</div>
    </div>
  );
};
