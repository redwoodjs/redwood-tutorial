import { render, screen } from '@redwoodjs/testing'

import Article from './Article'

describe('Article', () => {
  it('renders a blog post', () => {
    const article = {
      id: 1,
      title: 'First post',
      body: `Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.`,
      createdAt: new Date().toISOString(),
    }
    render(<Article article={article} />)

    expect(screen.getByText(article.title)).toBeInTheDocument()
    expect(screen.getByText(article.body)).toBeInTheDocument()
  })
})
