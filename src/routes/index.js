/** @format */

import WelcomeLayout from '../app/layout/WelcomeLayout'
import EventDashboard from '../pages/events/eventDashboard/EventDashboard'
import EventDetailedPage from '../pages/events/eventDetail/EventDetailedPage'
import EventForm from '../pages/events/eventForm/EventForm'
import HomePage from '../pages/home/HomePage'

const publicRoutes = [
  { path: '/', component: HomePage, layout: WelcomeLayout },
  { path: '/events', component: EventDashboard },
  { path: '/events/:id', component: EventDetailedPage },
  { path: '/events/createEvent', component: EventForm },
  { path: '/manage/:id', component: EventForm },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
