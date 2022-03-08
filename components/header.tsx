import Link from 'next/link'
import Container from './container'

const Header = () => {
  return (
    <Container>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/">
          <a className="hover:underline">Lemonadern's blog</a>
        </Link>
      </h2>
    </Container>
  )
}

export default Header
