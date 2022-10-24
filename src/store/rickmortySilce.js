import { createSlice } from '@reduxjs/toolkit'

export const rickmortySlice = createSlice({
  name: 'rickmorty',
  initialState: {
    person: '',
    listPersons: null
  },
  reducers: {
    changePersonName: (state, action) => {
      state.person = action.payload
    },
    updateListPersonsSuccess: (state, action) => {
      state.listPersons = action.payload
    },
    updateListPersonsError: (state, action) => {
      state.listPersons = action.payload
    },
  },
})

export const { changePersonName, updateListPersonsSuccess, updateListPersonsError } = rickmortySlice.actions

export const selectPersonName = (state) => {
  if (state) {
    if (state?.rickmorty)
      return state.rickmorty.person
    else
      return state.payload
  }
}

export const selectListPersons = (state) => {
  if (state) {
    if (state?.rickmorty)
      return state.rickmorty.listPersons
    else
      return state.payload
  }
}

export default rickmortySlice.reducer
