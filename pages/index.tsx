import type { NextPage } from 'next'
import axios from 'axios'

const Home: NextPage = () => {
  return (
    <h1 className='text-3xl font-bold underline'>
      hello world
    </h1>
  )
}

export const getServerSideProps = async () => {
  
}

export default Home
