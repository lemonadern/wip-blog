import Link from 'next/link'
import Container from './container'

const Header = () => {
  return (
    <Container>
      <h2 className="text-xl font-bold tracking-tight md:tracking-tighter leading-tight mb-16 mt-5">
        <Link href="/">
          <a className="hover:underline">Lemonadern's blog</a>
        </Link>
      </h2>
    </Container>
  )
}

export default Header
