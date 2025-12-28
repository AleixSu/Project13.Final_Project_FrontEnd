import React from 'react'
import Banner from '../../components/Layout/banner/banner'
import { myProfileSrc } from '../../constants/myProfileConstants'
import './MyProfile.css'
import UpdateInfoProfile from '../../components/Forms/updateInfoProfile/UpdateInfoProfile'

const MyProfile = () => {
  return (
    <section id='profile'>
      <Banner className={'background'} logo={myProfileSrc.logoBanner} />
      <article id='articleProfileInfo'>
        <UpdateInfoProfile />
      </article>
    </section>
  )
}

export default MyProfile
