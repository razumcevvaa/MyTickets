import { defineStore } from 'pinia'
import { ref } from 'vue'

type Event = {
    id: number,
    photo: string,
    title: string,
    city?: string,
    format: string,
    price: number,
    dateEvent: Date,
    dateClose: Date,
    dateOpen: Date,
    dateEnd: Date,
    site: string,
    address: string;
    place: string;
    refinement: string;
    isHovered?: boolean,
    age?: number,
    description?: string,
}

export const useEvents = defineStore('events', () => {
    const events = ref<Event[]>([])
    const ticketTypes = ref([])
    const newEvent = ref({} as Event)
    const showModal = ref(false)
    const selectedEvent = ref(null as null | Event)
    function showModalForEvent(event: Event) {
        selectedEvent.value = event
        showModal.value = true
    }
    const create = async () => {
        const data = await $fetch('/api/event', { method: 'POST', body: {event:newEvent.value, ticket_types:ticketTypes.value} })
        // if (data.ok) {
        
        // } else {
        
        // }
      }
    
    return { events, showModal, selectedEvent, showModalForEvent, newEvent }
})