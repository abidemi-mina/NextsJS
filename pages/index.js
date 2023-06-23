import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (  
    <>
      <Head>
        <title>Canvak |Home Page</title>
        <meta name="keywords" content="aminat" />
      </Head>
      <div>
        <h1> Hello World! </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae provident beatae recusandae nostrum sint ratione earum? Esse consequuntur quod velit maxime. At maxime recusandae dolorum labore dignissimos aliquid quam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum natus pariatur nemo sequi debitis eos placeat doloribus, enim ea laborum dolore maxime, voluptatibus modi temporibus quos asperiores beatae eaque corporis!</p>
      </div>
    </>
    
  )
}
