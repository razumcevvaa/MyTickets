import { defineStore } from 'pinia'
import { ref } from 'vue'

// export interface Event {
//     id: number;
//     photo: string;
//     title: string;
//     city?: string,
//     format: string;
//     price: string;
//     dateEvent: Date;
//     dateClose: String;
//     dateOpen: String;
//     dateEnd: String;
//     location: string;
//     isHovered?: boolean;
//     age?: number,
//     description?: string,
// }

type Event = { 
    id: number,
    photo: string,
    title: string,
    city?: string,
    format: string,
    price: string,
    dateEvent: Date,
    dateClose: Date,
    dateOpen: Date,
    dateEnd: Date,
    site:string,
    location: string,
    isHovered?: boolean,
    age?: number,
    description?: string,
}
export const useEvents = defineStore('events', () => {
    const events = ref<Event[]>([
       
    ])
    const newEvent = ref({} as Event)
    const showModal = ref(false)
    const selectedEvent = ref(null as null | Event)
    function showModalForEvent(event: Event) {
        selectedEvent.value = event
        showModal.value = true
    }
    return { events, showModal, selectedEvent, showModalForEvent, newEvent }
})