import Link from 'next/link'
import NavStyles from './styles/NavStyles'

const Nav = () => (
  <NavStyles>
    <Link href="/hub">
      <a>Hub</a>
    </Link>
    <Link href="/listings">
      <a>Listings</a>
    </Link>
    <Link href="/interest">
      <a>Interest</a>
    </Link>
    <Link href="/promotions">
      <a>Promotions</a>
    </Link>
    <Link href="/profile">
      <a>Profile</a>
    </Link>
  </NavStyles>
)

export default Nav
