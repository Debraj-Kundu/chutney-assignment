import spaces from '../spaces'
import { createSlice } from '@reduxjs/toolkit'

export const stateSlice = createSlice({
  name: 'spaces',
  initialState: {
    spaces: spaces,
  },
  reducers: {
    extendSpace: (state) => {
      console.log('runnin')
      const addNewSpace = []
      for (
        let i = state.spaces.length + 1;
        i <= state.spaces.length + 10;
        i++
      ) {
        addNewSpace.push({
          id: i,
          name: null,
          phone: null,
        })
      }
      state.spaces = [...state.spaces, ...addNewSpace]
    },
    parkCar: (state, action) => {
      let tempSpaces = [...state.spaces]
      let index = -1
      for (let i = 0; i < tempSpaces.length; i++) {
        if (action.payload.id === '') {
          if (tempSpaces[i].name === null) {
            index = i
            break
          }
        }
        if (action.payload.id <= 50) {
          index++
          if (
            tempSpaces[i].id == action.payload.id &&
            tempSpaces[i].name == null
          )
            break
        }
        if (action.payload.id == null) {
          index++
          if (tempSpaces[i].name == null) break
        }
      }
      if (index != -1) {
        tempSpaces[index] = action.payload
        tempSpaces[index].id=index+1;
        state.spaces = tempSpaces
      }
    },
    emptySpace: (state, action)=>{
        let tempSpaces=[...state.spaces];
		let index1=-1;
		for(let i=0;i<tempSpaces.length;i++)
		{
			index1++;
			if(tempSpaces[i].id==action.payload.id)
				break;
		}
		if(index1!=-1)
		{
			tempSpaces[index1]={id:action.payload.id, name:null, phone:null};
			state.spaces = tempSpaces;
		}
    },
    parkCarOnSpot: ()=>{
        
    }
  },
})

export const { extendSpace, parkCar, emptySpace } = stateSlice.actions

export default stateSlice.reducer
