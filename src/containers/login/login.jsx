import React,{Component} from 'react'
import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Button
} from 'antd-mobile'
import Logo from '../../components/logo/logo'

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange=(name,value)=>{
        this.setState({
            [name]: value
        })
    }

    toRegister=()=>{
        this.props.history.replace('/register')
    }

    Login=()=>{
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <NavBar>Hiring management</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem placeholder='Please input the username' onChange={val=>this.handleChange('username',val)}>Username:</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' placeholder='Plase input the password' onChange={val=>this.handleChange('password',val)}>Password</InputItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.Login}>Login</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toRegister}>Register</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}