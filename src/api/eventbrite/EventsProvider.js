import EbApi from './EbApi';

const EventsProvider = {
  getEventsByOrganization: (organizationId) => {
    return EbApi.GET(`organizations/${organizationId}/events/`).then(response => response.events);
  },
  getEventsBySeries: (seriesId) => {
    return EbApi.GET(`series/${seriesId}/events/`).then(response => response.events);
  },
  getEventsByVenue: (venueId) => {
    return EbApi.GET(`venue/${venueId}/events/`).then(response => response.events);
  }
}
export default EventsProvider;