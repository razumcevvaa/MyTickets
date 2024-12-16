import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Event {
    id: number;
    photo: string;
    title: string;
    city?: string,
    format: string;
    price: string;
    date: Date;
    location: string;
    isHovered?: boolean;
    age?: number,
    description?: string,
}

export const useEvents = defineStore('events', () => {
    const events = ref<Event[]>([
        {
            id: 1,
            photo: 'top-event.jpg',
            title: 'Code80',
            format: 'вечеринка',
            price: '400',
            date: new Date('2023-12-16T17:00:00'),
            location: 'nebar',
            age: 16,
            description: 'Официальная страница https://t.me/traphouserussia',
        },
        {
            id: 2,
            photo: 'top-event.jpg',
            title: 'Hackathon',
            format: 'конференция',
            price: '800',
            date: new Date('2023-12-16T17:00:00'),
            location: 'IT Park',
            age: 16,
        },
        {
            id: 2,
            photo: 'top-event.jpg',
            title: 'Hackathon',
            format: 'конференция',
            price: '800',
            date: new Date('2023-12-16T17:00:00'),
            location: 'IT Park',
            age: 16,
        },
        {
            id: 3,
            photo: 'top-event.jpg',
            title: 'Hackathon',
            format: 'конференция',
            price: '800',
            date: new Date('2023-12-16T17:00:00'),
            location: 'IT Park',
            age: 16,
        },
        {
            id: 4,
            photo: 'top-event.jpg',
            title: 'Hackathon',
            format: 'конференция',
            price: '800',
            date: new Date('2023-12-16T17:00:00'),
            location: 'IT Park',
            age: 16,
        },
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