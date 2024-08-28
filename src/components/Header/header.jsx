import React from 'react'
import { Container, Logo, logoutBtn as LogoutBtn } from '../index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Header() {

  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'About',
      slug: '/about',
      active: authStatus
    },
    {
      name: 'Contact',
      slug: '/contact',
      active: authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus
    },
  ]

  return (
    <header className='py-4 bg-transparent'>
      <Container>
        <nav className='relative z-50 flex items-center'>
          <div className='mr-auto'>
            <Link to='/'>
              <Logo width='100px' />
            </Link>
          </div>
          <ul className='flex mx-auto space-x-4'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-4 py-2 font-semibold text-white rounded-3xl transition duration-200 hover:bg-[#ffffffd8] hover:text-[#13072E] active:bg-[#ffffffd8] active:text-[#13072E] focus:bg-[#ffffffd8] focus:text-[#13072E]'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
          </ul>
          <ul className="flex ml-auto">
          {authStatus && <li className=''>
              <LogoutBtn className='font-semibold text-[#13072E] bg-[#ffffff]' />
            </li>}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
