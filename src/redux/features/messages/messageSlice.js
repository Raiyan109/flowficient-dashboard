import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    en: {
        "home.title": "Refreshingly Sustainable: Boxed Water",
        "home.description": "Choose a more eco-friendly way to hydrate with our 100% recyclable cartons.",
        "home.shopNow": "Shop Now",
    },
    ar: {
        "home.title": "مستدامة ومنعشة: المياه المعبأة",
        "home.description": "اختر طريقة أكثر صداقة للبيئة للترطيب باستخدام عبواتنا القابلة لإعادة التدوير بنسبة 100٪.",
        "home.shopNow": "تسوق الآن",
    },
    bn: {
        "home.title": "পুনরায় টেকসই: বোতলজাত পানি",
        "home.description": "আমাদের ১০০% পুনর্ব্যবহারযোগ্য কার্টন দিয়ে আরও পরিবেশ-বান্ধব উপায়ে জল পান করুন।",
        "home.shopNow": "এখনই কিনুন",
    },
};


export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        messages: (state) => {
            return state
        },
    },
})

// Action creators are generated for each case reducer function
export const { messages } = messageSlice.actions

export default messageSlice.reducer