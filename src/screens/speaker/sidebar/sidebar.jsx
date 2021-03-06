import React from 'react'
import PropTypes from 'prop-types'

import { SideBar, SideBarPanel, SideBarLink } from '../../../components/sidebar'
import IconLabel from '../../../components/iconLabel'

const SpeakerSidebar = ({ className }) => (
  <SideBar className={className}>
    <SideBarPanel label="General">
      <SideBarLink to="/speaker">
        <IconLabel icon="fa fa-pie-chart" label="Dashboard" />
      </SideBarLink>
      <SideBarLink to="/speaker/profile">
        <IconLabel icon="fa fa-user-circle" label="Profile" />
      </SideBarLink>
      <SideBarLink to="/speaker/talks">
        <IconLabel icon="fa fa-microphone" label="Talks" />
      </SideBarLink>
    </SideBarPanel>
  </SideBar>
)

SpeakerSidebar.propTypes = {
  className: PropTypes.string,
}

SpeakerSidebar.defaultProps = {
  className: undefined,
}

export default SpeakerSidebar
