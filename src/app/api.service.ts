import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  state=
  [
    {
      "id": 1,
      "name": "Andhra Pradesh",
      "description": "Famous for its rich culture, beaches, and the Tirumala Venkateswara Temple.vhasmmgdjsdjasdkjkshdas,dhaskd",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/andhra-pradesh-iwif-2016-1.jpg"
    },
    {
      "id": 2,
      "name": "Arunachal Pradesh",
      "description": "Known for its picturesque landscapes and rich biodiversity, with the Tawang Monastery being a major tourist spot.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/arunachal-pradesh-iwif-2016.jpg"
    },
    {
      "id": 3,
      "name": "Assam",
      "description": "Famous for its tea gardens, Kaziranga National Park, and the Brahmaputra River.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/assam-iwif-2016.jpg"
    },
    {
      "id": 4,
      "name": "Bihar",
      "description": "Known for its historical significance, including the ancient city of Patna and Bodh Gaya, the site of Buddha's enlightenment.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/bihar-iwif-2016.jpg"
    },
    {
      "id": 5,
      "name": "Chhattisgarh",
      "description": "Famous for its forests, waterfalls, and the historic temples of Bhoramdeo and Rajim.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/chhattisgarh-iwif-2016.jpg"
    },
    {
      "id": 6,
      "name": "Goa",
      "description": "Known for its beautiful beaches, vibrant nightlife, and Portuguese-influenced architecture.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/goa-iwif-2016.jpg"
    },
    {
      "id": 7,
      "name": "Gujarat",
      "description": "Famous for its rich cultural heritage, the Rann of Kutch, and the Gir National Park, home to Asiatic lions.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/gujarat-iwif-2016.jpg"
    },
    {
      "id": 8,
      "name": "Haryana",
      "description": "Known for its rapid industrialization, and the presence of historic sites like Kurukshetra.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/haryana-iwif-2016.jpg"
    },
    {
      "id": 9,
      "name": "Himachal Pradesh",
      "description": "Famous for its scenic mountains, hill stations like Shimla and Manali, and the adventure tourism it offers.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/himachal-pradesh-iwif-2016.jpg"
    },
    {
      "id": 10,
      "name": "Jharkhand",
      "description": "Known for its mineral resources, dense forests, and scenic spots like Ranchi and Jamshedpur.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/jharkhand-iwif-2016.jpg"
    },
    {
      "id": 11,
      "name": "Karnataka",
      "description": "Famous for its vibrant culture, the city of Bengaluru (the Silicon Valley of India), and ancient temples.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/karnataka-iwif-2016.jpg"
    },
    {
      "id": 12,
      "name": "Kerala",
      "description": "Known for its serene backwaters, tropical beaches, and the Ayurvedic heritage.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/kerala-iwif-2016.jpg"
    },
    {
      "id": 13,
      "name": "Madhya Pradesh",
      "description": "Famous for its ancient temples, wildlife sanctuaries like Kanha and Bandhavgarh, and historic sites like Khajuraho.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/madhya-pradesh-iwif-2016.jpg"
    },
    {
      "id": 14,
      "name": "Maharashtra",
      "description": "Home to Mumbai, the financial capital of India, and famous for its cultural diversity, cuisine, and historic forts.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/maharashtra-iwif-2016.jpg"
    },
    {
      "id": 15,
      "name": "Manipur",
      "description": "Known for its rich culture, scenic landscapes, and the unique Manipuri dance.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/manipur-iwif-2016.jpg"
    },
    {
      "id": 16,
      "name": "Meghalaya",
      "description": "Known for its monsoon rains, beautiful waterfalls, and the living root bridges of Cherrapunji.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/meghalaya-iwif-2016.jpg"
    },
    {
      "id": 17,
      "name": "Mizoram",
      "description": "Known for its lush green hills, vibrant culture, and the Mizo traditional dance.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/mizoram-iwif-2016.jpg"
    },
    {
      "id": 18,
      "name": "Nagaland",
      "description": "Known for its unique tribal culture, the Hornbill Festival, and scenic landscapes.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/nagaland-iwif-2016.jpg"
    },
    {
      "id": 19,
      "name": "Odisha",
      "description": "Famous for its temples like the Sun Temple in Konark, scenic beaches, and rich cultural heritage.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/odisha-iwif-2016.jpg"
    },
    {
      "id": 20,
      "name": "Punjab",
      "description": "Famous for its agriculture, rich history, and landmarks like the Golden Temple in Amritsar.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/punjab-iwif-2016.jpg"
    },
    {
      "id": 21,
      "name": "Rajasthan",
      "description": "Known for its royal palaces, desert landscapes, and historic cities like Jaipur, Udaipur, and Jodhpur.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/rajasthan-iwif-2016.jpg"
    },
    {
      "id": 22,
      "name": "Sikkim",
      "description": "Famous for its pristine nature, monasteries, and the Himalayan mountain range.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/sikkim-iwif-2016.jpg"
    },
    {
      "id": 23,
      "name": "Tamil Nadu",
      "description": "Known for its Dravidian-style temples, the city of Chennai, and classical music and dance.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/tamil-nadu-iwif-2016.jpg"
    },
    {
      "id": 24,
      "name": "Telangana",
      "description": "Home to Hyderabad, known for its rich history, including the Charminar and the Hussain Sagar Lake.",
      "image": "https://s7ap1.scene7.com/is/image/incredibleindia/2-charminar-hyderabad-telangana-state-hero?qlt=82&ts=1726653487606"
    },
    {
      "id": 25,
      "name": "Tripura",
      "description": "Known for its historical temples, royal palaces, and scenic landscapes.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/tripura-iwif-2016.jpg"
    },
    {
      "id": 26,
      "name": "Uttar Pradesh",
      "description": "Home to iconic sites like the Taj Mahal, Varanasi, and the city of Lucknow.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/uttar-pradesh-iwif-2016.jpg"
    },
    {
      "id": 27,
      "name": "Uttarakhand",
      "description": "Known for its spiritual centers like Haridwar and Rishikesh, and the scenic beauty of the Himalayan ranges.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Auli%2C_India.jpg/1200px-Auli%2C_India.jpg"
    },
    {
      "id": 28,
      "name": "West Bengal",
      "description": "Famous for its cultural heritage, the city of Kolkata, and its historic landmarks.",
      "image": "https://en-media.thebetterindia.com/uploads/2017/03/west-bengal-iwif-2016.jpg"
    }
  ]
    constructor() { }

    getstates(){
      return this.state;
    }

    getstatebyID(id:any)
    {
      return this.state.find(state=>state.id==id)
    }

}
