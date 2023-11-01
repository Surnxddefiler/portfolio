import '../index.js'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { jobs } from '../info/index.js';
export const Experience = () => {
    return (
        <section id='experience' className='mt-20'>
            <div className='container relative'>
                <h2 className='text-center text-3xl'>Experience</h2>
                <VerticalTimeline>
                    {jobs.map((obj, i)=>{
                        return(
                            <Job key={i} title={obj.title} place={obj.place} description={obj.description} time={obj.time}/>
                        )
                    })}
                </VerticalTimeline>
            </div>
        </section>
    )
}
const Job = ({title, place, description, time}) => {
    return (
        <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "#1d1836", color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date={time}
                        iconStyle={{ background: '#1d1836', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">{title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{place}</h4>
                        <p>
                            {description}
                        </p>
                    </VerticalTimelineElement>
    )
}