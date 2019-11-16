import React from 'react';
import {storiesOf} from '@storybook/react';
import Component from './index';
export const uri = "data:image/jpeg;base64,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"

storiesOf("Profile",module)
   .add("default",()=>(<Component/>))
    .add("Outline",()=>(<Component outline/>))
     .add("With Image",()=>(<Component image={uri}/>))
    //  .add("Column",()=>(<Component>
    //     <span>Sameer</span>
    //     <span>Sameer</span>
    // </Component>))