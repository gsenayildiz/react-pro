import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  keyword:""
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    createDataFunc: (state, action) => { 
       //data al öncekilerin üzerine ekle
      state.data = [...state.data,action.payload]
    },
    sortingDataFunc: (state, action) => { 
      //data sıralama
     state.data = [...state.data.sort((a,b)=>action.payload=="asc"?a.price-b.price:action.payload=="desc"?b.price-a.price:null)]
   },
    deleteDataFunc: (state, action) => { 
      //data sil
     state.data = [...state.data.filter(dt=>dt.id!=action.payload)]
   },
   updateDataFunc: (state, action) => { 
    //data güncelle
   state.data = [...state.data.map(dt=>dt.id==action.payload.id?({...dt,...action.payload}):dt)]
 },
 searchDataFunc: (state, action) => { 
  //data arama
 state.keyword = action.payload
},
  },
})

// Action creators are generated for each case reducer function
export const { createDataFunc,deleteDataFunc,updateDataFunc,sortingDataFunc ,searchDataFunc} = dataSlice.actions

export default dataSlice.reducer