export interface UserAttributes {
    id_user: string
    name?: string
    surname?: string
    email: string
    address?: string
    number?: number
    date?: Date
    gender?: 'Male' | 'Female' | 'Other'
    image?: string
    user_type: 'User' | 'Owner' | 'Admin'
    is_active: boolean
}

export interface RatingAttributes {
    rating_id: number
    id_user: string
    id_property: number
    description?: string
    total_rating: number
    cleaning_rating: number
    communication_rating: number
    price_quality_rating: number
    veracity_rating: number
    date_rating: Date
    is_active: boolean
    is_reported: boolean
    report_reason: string
}

export interface RentAttributes {
    rent_id: number
    id_user: string
    id_property: number
    start_date: Date
    end_date: Date
    guests_number: number
    amount: number
    payment_status: boolean
    payment_date?: Date
    review_status: boolean
    creation_date: Date
    active : boolean
}

export interface PropertyAttributes {
    id_property: number
    id_user: string
    title: string
    province: string
    location: string
    address: string
    zip_code: string
    property_type: 'House' | 'Apartment' | 'Room'
    description: string
    price_per_night: number
    images: string[]
    rating?: number
    ratings_amount?: number
    start_date: Date
    end_date: Date
    is_active: boolean
    rooms_number: number
    bathrooms_number: number
    beds_number: number
    max_guests: number
    allow_pets: boolean
    weekly_discount: boolean
    monthly_discount: boolean
    min_nights: number
    accessibility: boolean
}

export interface FavoritesAttributes {
    favorite_id: number
    id_user: string
    id_property: number
}

export interface ServiceAttributes {
    service_id: number
    name: string
    icon: string
}

export interface LocationAttributes {
    id: number
    nombre: string
    ciudades: Locations[]
}

type Locations = {
    id: string
    nombre: string
}