import { GET_GALLERY } from '../actions/types'

const initialState = {
    gallery: [
        {
            album_id: '000001',
            album_name: 'Landscape',
            album_images: [
                {
                    image_id:'000001',
                    image_name: 'Sunsetting over Auckland',
                    image_description: 'Praesent varius nibh pulvinar nisi consequat bibendum dictum interdum sapien. Integer sagittis.',
                    image_thumb_path:'img/gallery/landscape/thumb01.jpg',
                    image_path:'img/gallery/landscape/image01.jpg'
                },{
                    image_id:'000002',
                    image_name: 'Secret Gate',
                    image_description: 'Praesent varius nibh pulvinar nisi consequat bibendum dictum interdum sapien. Integer sagittis.',
                    image_thumb_path:'img/gallery/landscape/thumb02.jpg',
                    image_path:'img/gallery/landscape/image02.jpg'
                },{  
                    image_id:'000003',
                    image_name: 'Hamilton Garden',
                    image_description: 'Praesent varius nibh pulvinar nisi consequat bibendum dictum interdum sapien. Integer sagittis.',
                    image_thumb_path:'img/gallery/landscape/thumb02.jpg',
                    image_path:'img/gallery/landscape/image02.jpg'
                }
            ]
        },
        {
            album_id: '000002',
            album_name: 'Macro',
            album_images: [
                {
                    image_id:'000001',
                    image_name: 'Dandelions in the summer',
                    image_description: 'Praesent varius nibh pulvinar nisi consequat bibendum dictum interdum sapien. Integer sagittis.',
                    image_thumb_path:'img/gallery/macro/thumb01.jpg',
                    image_path:'img/gallery/macro/image01.jpg'
                },{
                    image_id:'000002',
                    image_name: '',
                    image_description: 'Praesent varius nibh pulvinar nisi consequat bibendum dictum interdum sapien. Integer sagittis.',
                    image_thumb_path:'img/gallery/macro/thumb02.jpg',
                    image_path:'img/gallery/macro/image02.jpg'
                },{
                    image_id:'000003',
                    image_name: 'Busy Bee',
                    image_description: 'Praesent varius nibh pulvinar nisi consequat bibendum dictum interdum sapien. Integer sagittis.',
                    image_thumb_path:'img/gallery/macro/thumb02.jpg',
                    image_path:'img/gallery/macro/image02.jpg'
                }
            ]
        },
        {
            album_id: '000003',
            album_name: 'Wildlife',
            album_images: [
                {
                    image_id:'000001',
                    image_name: 'Zion Wildlife, Whangarei',
                    image_description: 'Praesent varius nibh pulvinar nisi consequat bibendum dictum interdum sapien. Integer sagittis.',
                    image_thumb_path:'img/gallery/wildlife/thumb01.jpg',
                    image_path:'img/gallery/wildlife/image01.jpg'
                },{
                    image_id:'000002',
                    image_name: 'Tui',
                    image_description: 'Praesent varius nibh pulvinar nisi consequat bibendum dictum interdum sapien. Integer sagittis.',
                    image_thumb_path:'img/gallery/wildlife/thumb02.jpg',
                    image_path:'img/gallery/wildlife/image02.jpg'
                },{
                    image_id:'000003',
                    image_name: 'Auckland Winter Garden',
                    image_description: 'Praesent varius nibh pulvinar nisi consequat bibendum dictum interdum sapien. Integer sagittis.',
                    image_thumb_path:'img/gallery/wildlife/thumb02.jpg',
                    image_path:'img/gallery/wildlife/image02.jpg'
                }
            ]
        }
    ]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_GALLERY:
        return{
            ...state
        }
        default:
            return state;
    }
}
