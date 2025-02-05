import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Category {
    id?: number,
    name: string,
    description: string,
    count: number,
    price: number,
    count_purchased?: number,
}

export type Event = {
    id: number,
    photo: string,
    photo_file?: File,
    title: string,
    format: string,
    city?: string,
    price: number,
    date_event: string,
    date_close: string,
    date_open: string,
    date_end: string,
    site: string,
    description?: string,
    address: string;
    place: string;
    refinement: string;
    user_id: number,
    age?: number,
    ticket_types: Category[]
}

export const useEvents = defineStore('events', () => {
    const events = ref<Event[]>([])
    const ticketTypes = ref([])
    const newEvent = ref({
        ticket_types: [{
            name: '',
            description: '',
            count: 0,
            price: 0
        }]
    } as Event)
    const showModal = ref(false)
    const selectedEvent = ref(null as null | Event)
    function showModalForEvent(event: Event) {
        selectedEvent.value = event
        showModal.value = true
    }
    const create = async () => {
        const data = await $fetch('/api/event', {
            method: 'POST',
            body: { event: newEvent.value, ticket_types: ticketTypes.value }
        })
    }

    return { events, showModal, selectedEvent, showModalForEvent, newEvent }
})