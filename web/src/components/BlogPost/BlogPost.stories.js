import BlogPost from './BlogPost'

const POST = {
  id: 1,
  title: 'First Post',
  body: `Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin
         post-ironic vape cred DIY. Street art next level umami squid. Hammock
         hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four
         loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing
         hella shaman. Letterpress helvetica vaporware cronut, shaman butcher
         YOLO poke fixie hoodie gentrify woke heirloom.`,
}

export const generated = () => {
  return <BlogPost post={POST} />
}

export default { title: 'Components/BlogPost' }
