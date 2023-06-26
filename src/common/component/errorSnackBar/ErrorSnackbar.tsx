import React from 'react'
import { AlertProps, Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import { RootState } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'
import { toggleShowBar } from '../../reducer/reducer'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

export function ErrorSnackbar() {
	const dispatch = useDispatch()
	const show = useSelector((state: RootState) => state.switch.value)

	const handleClose = () => {
		dispatch(toggleShowBar())
	}

	return (
		<Snackbar open={show} autoHideDuration={4500} onClose={handleClose}>
			<Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
				A message was sent !
			</Alert>
		</Snackbar>
	)
}
