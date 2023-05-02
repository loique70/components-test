
import NavBar from './components/NavBar'
import Content from './components/Content'
import Footer from './components/Footer'


function App() {
  const copy = '© 2023 Abstract Studio Design, Inc. All rights reserved.'

  const contents = [
   
    {
      url:'https://images.unsplash.com/photo-1682448229309-1dfb66458a34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
      title:'Les trois fantastique',
      description:`Functions to convert NetworkX graphs to and from other formats.`
    },
    {
      url:'https://images.unsplash.com/photo-1682448229309-1dfb66458a34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
      title:'Les trois fantastique',
      description:`Functions to convert NetworkX graphs to and from other formats.`
    },
    {
      url:'https://images.unsplash.com/photo-1682448229309-1dfb66458a34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
      title:'Les trois fantastique',
      description:`Functions to convert NetworkX graphs to and from other formats.`
    },
    {
      url:'https://images.unsplash.com/photo-1682448229309-1dfb66458a34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
      title:'Les trois fantastique',
      description:`Functions to convert NetworkX graphs to and from other formats.`
    },
    {
      url:'https://images.unsplash.com/photo-1682448229309-1dfb66458a34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
      title:'Les trois fantastique',
      description:`Functions to convert NetworkX graphs to and from other formats.`
    },
    {
      url:'https://images.unsplash.com/photo-1682448229309-1dfb66458a34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
      title:'Les trois fantastique',
      description:`Functions to convert NetworkX graphs to and from other formats.`
    },
  ];

  const links = [
    {
      title: 'Abstract',
      links: ['Start Trial', 'Pricing', 'Download'],
    },
    {
      title: 'Resources ',
      links: ['Blog', 'Help Center', 'Release Notes','Status'],
    },
    {
      title: 'Community',
      links: ['Twitter', 'LinkedIn', 'Facebook','Dribble','Podcast'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Legal','Dribble'],
    },
  ]
  return (
    <>
      <NavBar/>
      <Content  contents={contents}/>
      <Footer links={links} copy={copy}/>
    </>
  )
}

export default App
