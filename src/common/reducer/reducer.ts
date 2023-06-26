import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
	value: boolean
}

const initialState: CounterState = {
	value: false
}

export const slice = createSlice({
	name: 'SnakBar',
	initialState,
	reducers: {
		toggleShowBar: state => {
			state.value = !state.value
		}
	}
})

export const { toggleShowBar } = slice.actions
export const reducer = slice.reducer
