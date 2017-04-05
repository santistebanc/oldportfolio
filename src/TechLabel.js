import React from 'react'
import { Label, Image } from 'semantic-ui-react'

export default ({src, title}) => <Label basic image>
      <Image src={src} size="mini" />{title}</Label>
