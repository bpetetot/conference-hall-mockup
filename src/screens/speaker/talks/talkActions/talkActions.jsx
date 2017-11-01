import React from 'react'

import Input from '../../../../components/input'
import Button from '../../../../components/button'

import './talkActions.css'

const TalkActions = () => (
  <div className="talks-actions">
    <Input placeholder="Search talks" />
    <Button>New talk</Button>
  </div>
)

export default TalkActions