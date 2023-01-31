import Link from 'next/link'
import { type ReactElement } from 'react'
import Header from '../../components/Header/Header'

const MyProfile = (): ReactElement => {
  return (
        <div>
        <Header title="My profile" />
        <Link href="/">Back to homepage</Link>
        </div>
  )
}

export default MyProfile
