import { Timeline } from 'flowbite-react';


export const Timeline1 = () => {
    return (
      <Timeline>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className='text-xwhite bg-blue1 rounded-md px-5'>February 2022</Timeline.Time>
          <Timeline.Title className='text-blue2'>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body className='text-xwhite'>
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
            E-commerce & Marketing pages.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className='text-xwhite bg-blue1 rounded-md px-5'>March 2022</Timeline.Time>
          <Timeline.Title className='text-blue2'>Marketing UI design in Figma</Timeline.Title>
          <Timeline.Body className='text-xwhite'>
            All of the pages and components are first designed in Figma and we keep a parity between the two versions
            even as we update the project.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className='text-xwhite bg-blue1 rounded-md px-5'>April 2022</Timeline.Time>
          <Timeline.Title className='text-blue2'>E-Commerce UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body className='text-xwhite'>
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
    )
}