import s from './contact.module.scss'
import sContainer from '../common/styles/Container.module.css'
import { Title } from '../common/component/title/Title'
import TextField from '@mui/material/TextField';
import PhoneIcon from '@mui/icons-material/Phone';



export const ContactNew = () => {
    return (
        <div className={s.contact}>
            <div className={`${sContainer.container} ${s.container}`}>
                <Title title={'Get in Touch'} />
                <div className={s.get}>
                    <div>
                        ADDRESS
                        <div>4th Floor, Plot No.22,</div>
                        <div>145 Murphy Canyon Rd.</div>
                        <div>San Diego CA 2028</div>
                        <div>(060) 444 434 444</div>
                        <div>(060) 555 545 555</div>
                        <div>chat@simone.com</div>
                    </div>
                    <div className={s.send}>
                        <span>SEND US A NOTE</span>
                        <div className={s.name}>
                            <TextField id="standard-basic" label="Name" variant="standard" style={{width: '38%'}}/>
                            <TextField id="standard-basic" label="Name" variant="standard" style={{width: '38%'}}/>
                        </div>

                        <div>
                            <TextField
                                id="standard-multiline-static"
                                label="Message"
                                multiline
                                rows={3}
                                fullWidth
                                variant="standard"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}