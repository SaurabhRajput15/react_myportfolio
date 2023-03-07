import React from 'react'
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'
import '../styles/Experience.css'

function Experience() {
  return (
    <div className='experience'>
       <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
         date='2010-2014'
         iconStyle={{ background: '#3e487a', color: '#fff'}}
         icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Kendriya Vidyalaya, Guna, Madhye Pradesh
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education'
         date='2014-2017'
         iconStyle={{ background: '#3e487a', color: '#fff'}}
         icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Post Graduation College, Guna, Madhye Pradesh
          </h3>
          <p>BSC Mathematics</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education'
         date='2022-2024'
         iconStyle={{ background: '#3e487a', color: '#fff'}}
         icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Bhabha University, Bhopal, Madhye Pradesh
          </h3>
          <p>MCA (Present)</p>
        </VerticalTimelineElement>

       </VerticalTimeline>
    </div>
  )
}

export default Experience