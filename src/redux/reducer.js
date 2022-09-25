import { ADD, COMPLETE, DELETE, DISPLAY, EDIT } from "./actionTypes";

const init = {
    products: [
        {
            id:Math.random(),
            imageUrl: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/09/iphone-13-9-scaled.jpeg",
            name: "bProduct name",
            count: 8,
            size: {
                width: 200,
                height: 200
                },
            weight: "200g",
            description:"Product description",
            comments: [
                {
                    userName: "Nick",
                    description: "same text",
                    data: "21.02.22"
                },
                {
                    userName: "Nick2",
                    description: "same text2",
                    data: "21.02.22"
                }
            ]
        },
        {
            id:Math.random(),
            imageUrl: "https://media.4rgos.it/s/Argos/9520103_R_SET?$Main768$&w=620&h=620",
            name: "aProduct name",
            count: 2,
            size: {
                width: 200,
                height: 200
                },
            weight: "200g",
            description:"Product description",
            comments: [
                {
                    userName: "Nick",
                    description: "same text",
                    data: "21.02.22"
                },
                {
                    userName: "Nick2",
                    description: "same text2",
                    data: "21.02.22"
                }
            ]
        },
        {
            id:Math.random(),
            imageUrl: "https://media.4rgos.it/s/Argos/9520103_R_SET?$Main768$&w=620&h=620",
            name: "tProduct name",
            count: 9,
            size: {
                width: 200,
                height: 200
                },
            weight: "200g",
            description:"Product description",
            comments: [
                {
                    userName: "Nick",
                    description: "same text",
                    data: "21.02.22"
                },
                {
                    userName: "Nick2",
                    description: "same text2",
                    data: "21.02.22"
                }
            ]
        },
        {
            id:Math.random(),
            imageUrl: "https://media.4rgos.it/s/Argos/9520103_R_SET?$Main768$&w=620&h=620",
            name: "croduct name",
            count: 1,
            size: {
                width: 200,
                height: 200
                },
            weight: "200g",
            description:"Product description",
            comments: [
                {
                    userName: "Nick",
                    description: "same text",
                    data: "21.02.22"
                },
                {
                    userName: "Nick2",
                    description: "same text2",
                    data: "21.02.22"
                }
            ]
        },

    ],
    displayProductStyle:"sortByName",
    
};

export const productReducer=(state=init,{type,payload})=>{
    switch (type) {
        case DELETE:
            return{
                ...state,products:state.products.filter(el=>el.id!==payload),
            };
        case COMPLETE:
            return{
                ...state,products:state.products.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el)
            };
        case ADD:
            return{
                ...state,products:[...state.products,payload]
            };
        case EDIT:
            return{
                ...state,products:state.products.map(el=>el.id===payload.id?payload:el)
            };
        case DISPLAY:
            return{
                ...state,displayProductStyle:payload,
            }
    
        default:
            return state;
    }

}