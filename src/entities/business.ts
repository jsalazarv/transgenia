export default interface IBusiness {
  createdAt: string;
  name: string;
  slug: string;
  bs_phrase: string;
  kind_of_bussiness: string;
  since_date: string;
  photo: string;
  address_street: string;
  address_city: string;
  address_state: string;
  address_zip_code: string;
  address_latitude: string;
  address_longitude: string;
  phone: string;
  email: string;
  website: string;
  home_delievery: boolean;
  accept_cards: boolean;
  pet_friendly: boolean;
  average_rating: string;
  opening_time: string;
  closing_time: string;
  id: string;
  bussiness_ownerId: string;
}
