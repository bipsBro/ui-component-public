import React from 'react';
import {storiesOf} from '@storybook/react';
import Component from '../components/view';
import Profile from '../components/profile';
import Detail from '../components/detail';
import Bullet from '../components/bullet';
import Rater from '../components/rater';
import {rate,Companies,skills,detail} from '../asset'


storiesOf("Complete UserList",module)

 .add("UserList",()=>(<Component card  >
     <Profile flex={1}/>
     <Component flex={4}  column style={{marginBottom:15}}>
         <Detail divider 
         left={detail}
         right={<Rater rate={rate} />}
         />
          <Detail divider 
          name={'Skills:'}
          right={<Bullet data={skills}/>}
         />
          <Detail divider 
         name={'Companies:'}
         right={<Bullet data={Companies}/>}
         />
     </Component>
 </Component>))