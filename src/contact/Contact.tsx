import s from './contact.module.scss'
import sContainer from '../common/styles/Container.module.css'
import { Title } from '../common/component/title/Title'
import TextField from '@mui/material/TextField'
import { Slide } from 'react-awesome-reveal'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { toggleShowBar } from '../common/reducer/reducer'

interface IFormInput {
	user_name: string
	user_email: string
	message: string
}

export const Contact = () => {
	const dispatch = useDispatch()
	const form = useRef<HTMLFormElement>(null)

	const schema = yup.object({
		user_name: yup.string().required('field required'),
		user_email: yup.string().email('email should be correct').required('field required'),
		message: yup.string().required('field required')
	})

	const { register, handleSubmit, reset } = useForm<IFormInput>({
		defaultValues: { user_email: '', message: '', user_name: '' },
		resolver: yupResolver(schema)
	})

	const onSubmit: SubmitHandler<IFormInput> = async data => {
		await emailjs.sendForm(
			'service_sw08mjg',
			'template_kx5nutc',
			form.current!,
			'ExJiVQQtJpo8Tyea4'
		)
		dispatch(toggleShowBar())
		reset()
	}

	return (
		<div className={s.contact} id={'contact'}>
			<div className={`${sContainer.container} ${s.container}`}>
				<Title title={'Get in Touch'} />
				<div className={s.get}>
					<Slide>
						<div>
							<h3>ADDRESS</h3>
							<div>Minsk, Bealarus / Poland, Warszawa</div>
							<div>(+375 29) 245 79 80</div>
							<div>(+48 57) 57 43 418</div>
							<div>miki2012miki@gmail.com</div>
						</div>
					</Slide>
					<Slide direction={'right'}>
						<div className={s.send}>
							<form onSubmit={handleSubmit(onSubmit)} ref={form}>
								<h3>SEND US A NOTE</h3>
								<div className={s.name}>
									<TextField
										id='standard-basic'
										label='Name'
										variant='standard'
										style={{ marginBottom: '15px' }}
										{...register('user_name', { required: true })}
									/>
									<TextField
										id='standard-basic'
										label='Email'
										variant='standard'
										{...register('user_email', { required: true })}
									/>
								</div>
								<div>
									<TextField
										id='standard-multiline-static'
										label='message'
										multiline
										rows={3}
										fullWidth
										variant='standard'
										{...register('message', { required: true })}
									/>
								</div>
								<div className={s.btn}>
									<button className={s.cv}>Send Message</button>
								</div>
							</form>
						</div>
					</Slide>
				</div>
			</div>
		</div>
	)
}
