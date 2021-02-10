import Menu1 from '../assets/img/saladFull.png'
import Menu2 from '../assets/img/fullPumpkin.png'
import  Prev1 from '../assets/img/salad.png'
import Prev2 from '../assets/img/pumpkin.png'

import { FaCreditCard } from 'react-icons/fa'
import {FaWallet} from 'react-icons/fa'


export const profilePic = "https://i.pinimg.com/originals/c9/c8/0d/c9c80d83bc362306aee9e8984bbab421.jpg"

export const comments = [
    {
        name : "Jenny Kim",
        img : "https://i.pinimg.com/originals/c9/c8/0d/c9c80d83bc362306aee9e8984bbab421.jpg",
        comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        location : "Planet Mars",
        title : "Enak Banget Bund !!!"
    },
    {
        name : "Asep Kim",
        img : "https://cdn.yukepo.com/content-images/listicle-images/2017/04/13/36337.jpg",
        comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        location : "Planet Mars",
        title : "Rasa Nya Anjim !"
    },
    {
        name : "Brian Mc Knight",
        img : "https://m.media-amazon.com/images/I/51O5vw+-PXL.jpg",
        comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        location : "Planet Mars",
        title : "Very Good ~ !!!"
    }
]

export const paymentMethod = [
    {
        id : '1',
        icon : <FaCreditCard/>,
        type : 'Bank Transfer',
        list : [
                    {id: 1, name : 'BCA' , icon:'data:image/png;base64,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'},
                    {id: 2, name : 'Mandiri' , icon:'https://cdn-2.tstatic.net/palembang/foto/bank/images/logo-bank-mandiri.jpg'},
                    {id: 3, name : 'BRI' , icon:'https://www.tokohkita.co/uploads/berita/thumbs/750x400/20190804_bank-bri-pastikan-operasional-bank-tak-terganggu-pasca-pemadaman-listrik.jpg'},
                    {id: 4, name : 'BNI' , icon:'https://cdn.ayobandung.com/upload/bank_image/medium/polisi-periksa-12-saksi-kasus-pembobolan-bni.jpg'},
                    {id: 5, name : 'HSBC' , icon:'https://www.thebalance.com/thmb/Mda1jDDo5Kjhlgvu83-ik-JApPc=/2504x834/filters:no_upscale()/hsbc-b46813bc738f43819f41e2580fdcb375.png'},
                    {id: 6, name : 'Permata' , icon:'https://cdn-2.tstatic.net/tribunnewswiki/foto/bank/images/bank-permatta.jpg'}
               ]
    },
    {
        id : '2',
        icon : <FaWallet/>,
        type : 'E-Wallet',
        list : [
                    {id: 1, name : 'LinkAja' , icon:'data:image/png;base64,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'},
                    {id: 2, name : 'GoPay' , icon:'data:image/png;base64,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'},
                    {id: 3, name : 'Ovo' , icon:'data:image/jpeg;base64,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'}
               ]
    }
]

export const menu = [
    {
        id : '1',
        name : 'Sweet Avocado Salad',
        price : 45000,
        desc: "Terasa segar di mulut berkat saus yang berasal dari minyak zaitun, air jeruk lemon, dan madu.",
        img : Menu1,
        img_prev : Prev1
    },
    {
        id : '2',
        name : 'Pumpkin Chiken Soup',
        price : 39000,
        desc : 'Labu kuning kaya akan serat makanan sehingga dicerna secara perlahan oleh tubuh.',
        img : Menu2,
        img_prev : Prev2
    }
]

export const orderOngoing = [
    {
        id :1, 
        name : 'Avocado Salad', 
        qty : 3,
        total : 45000*3, 
        status :'On Delivery'

    },
    {
        id :2, 
        name : 'Avocado Salad', 
        qty : 3,
        total : 45000*3, 
        status :'On Delivery'

    },
    {
        id :3, 
        name : 'Avocado Salad', 
        qty : 3,
        total : 45000*3, 
        status :'On Delivery'

    },
    {
        id :4, 
        name : 'Avocado Salad', 
        qty : 3,
        total : 45000*3, 
        status :'On Delivery'

    },
    {
        id :5, 
        name : 'Avocado Salad', 
        qty : 3,
        total : 45000*3, 
        status :'On Delivery'

    },
    {
        id :6, 
        name : 'Avocado Salad', 
        qty : 3,
        total : 45000*3, 
        status :'On Delivery'

    },
    
]

export const orderHistory = [
    {
        id :1, 
        name : 'Avocado Salad', 
        qty : 3,
        total : 45000*3, 
        status :'Done'

    },
    {
        id :2, 
        name : 'Avocado Salad', 
        qty : 3,
        total : 45000*3, 
        status :'Done'

    },
    {
        id :4, 
        name : 'Avocado Salad', 
        qty : 3,
        total : 45000*3, 
        status :'Done'

    },
    {
        id :5, 
        name : 'Avocado Salad', 
        qty : 3,
        total : 45000*3, 
        status :'Done'

    }
]


export const orderConfirm = [
    {
        id :1, 
        name : 'Avocado Salad', 
        qty : 3,
        total : 45000*3, 
        status :'Confirmed'

    },
    {
        id :2, 
        name : 'Avocado Salad', 
        qty : 3,
        total : 45000*3, 
        status :'Confirmed'

    },
]

export const orderOnProcess = [
    {
        id :1, 
        name : 'Avocado Salad', 
        qty : 3,
        total : 45000*3, 
        status :'Confirmed'

    },
    {
        id :2, 
        name : 'Avocado Salad', 
        qty : 3,
        total : 45000*3, 
        status :'Confirmed'

    },
]

export const orderOnDelivery = [
    {
        id :1, 
        name : 'Avocado Salad', 
        qty : 3,
        total : 45000*3, 
        status :'Confirmed'

    },
    {
        id :2, 
        name : 'Avocado Salad', 
        qty : 3,
        total : 45000*3, 
        status :'Confirmed'

    },
]

export const orderDone = [
    {
        id :1, 
        name : 'Avocado Salad', 
        qty : 3,
        total : 45000*3, 
        status :'Confirmed'

    },
    {
        id :2, 
        name : 'Avocado Salad', 
        qty : 3,
        total : 45000*3, 
        status :'Confirmed'

    },
]