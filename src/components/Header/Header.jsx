import React,{useState} from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import appwriteService from '../../appwrite/config'
import { useLocation } from 'react-router-dom'


function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
const location = useLocation();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    try {
      appwriteService.searchPostsByTitle(searchQuery).then((posts) => {
        if (posts) {
          setSearchResults(posts.documents);
          navigate('/search-results', { state: { searchResults } });
        }
    })
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  {
    name: "My Posts",
    slug: "/my-posts",
    active: authStatus,
},
  ]


  return (
    <header className='py-3 shadow bg-stone-200'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          {location.pathname === '/' && (
            <form onSubmit={handleSearchSubmit} className='flex-grow mx-4'>
              <input
                type='text'
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder='Search...'
                className='w-full px-4 py-2 border rounded-lg bg-sky-800 text-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-200'
              />
            </form>
          )}
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 text-sky-800 hover:bg-sky-800 hover:text-stone-200 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header