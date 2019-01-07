export class Kitchen {
    constructor(        
        public id: String,
        public name: String,
        public img: String,
        public address1: String,
        public address2: String,
        public city: String,
        public state: String,
        public country: String,
        public location: String,
        public tagline: String,
        public menu: [{
            id: String,
            img: String,
            name: String,
            category: String,
            region: String,
            taste: String,
            price: String,
            minimumQuntity: String,
            likes: Number,
            isActive: Boolean
        }],
        public phone: String,
        public email1: String,
        public email2: String,
        public likes: Number,
        public description: String,
        public isActive: Boolean
    ) {}
 }